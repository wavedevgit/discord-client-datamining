/** Chunk was on web.js **/
/** chunk id: 294819, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    k: () => l
});
var r = n(908909),
    i = n(853590),
    a = n(47276),
    o = n(64700);

function s(e) {
    return e && e.__esModule ? e.default : e
}

function l() {
    let {
        locale: e
    } = (0, i.Y)(), t = (0, a.e)(s(r.A), "@react-aria/datepicker");
    return (0, o.useMemo)(() => {
        try {
            return new Intl.DisplayNames(e, {
                type: "dateTimeField"
            })
        } catch {
            return new c(e, t)
        }
    }, [e, t])
}
class c {
    of(e) {
        return this.dictionary.getStringForLocale(e, this.locale)
    }
    constructor(e, t) {
        this.locale = e, this.dictionary = t
    }
}