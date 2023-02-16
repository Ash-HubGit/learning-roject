import dateutil from './dateutil';
var DateWithZone = /** @class */ (function () {
    function DateWithZone(date, tzid) {
        if (isNaN(date.getTime())) {
            throw new RangeError('Invalid date passed to DateWithZone');
        }
        this.date = date;
        this.tzid = tzid;
    }
    Object.defineProperty(DateWithZone.prototype, "isUTC", {
        get: function () {
            return !this.tzid || this.tzid.toUpperCase() === 'UTC';
        },
        enumerable: false,
        configurable: true
    });
    DateWithZone.prototype.toString = function () {
        var datestr = dateutil.timeToUntilString(this.date.getTime(), this.isUTC);
        if (!this.isUTC) {
            return ";TZID=".concat(this.tzid, ":").concat(datestr);
        }
        return ":".concat(datestr);
    };
    DateWithZone.prototype.getTime = function () {
        return this.date.getTime();
    };
    DateWithZone.prototype.rezonedDate = function () {
        var _a;
        if (this.isUTC) {
            return this.date;
        }
        var localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        var dateInLocalTZ = new Date(this.date.toLocaleString(undefined, { timeZone: localTimeZone }));
        var dateInTargetTZ = new Date(this.date.toLocaleString(undefined, { timeZone: (_a = this.tzid) !== null && _a !== void 0 ? _a : 'UTC' }));
        var tzOffset = dateInTargetTZ.getTime() - dateInLocalTZ.getTime();
        return new Date(this.date.getTime() - tzOffset);
    };
    return DateWithZone;
}());
export { DateWithZone };
//# sourceMappingURL=datewithzone.js.map