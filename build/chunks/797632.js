/** chunk id: 797632, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
}), n(896048);
var r, i = n(311907),
    a = n(73153);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let s = {
    surveys: new Map
};

function l(e) {
    s.surveys.set(e.surveyId, e.surveyDetails)
}
class c extends(r = i.Ay.Store) {
    getSurvey(e) {
        var t;
        return null != (t = s.surveys.get(e)) ? t : null
    }
}
o(c, "displayName", "QualtricsStore");
let u = new c(a.h, {
    QUALTRICS_SURVEY_FETCH_SUCCESS: l
})