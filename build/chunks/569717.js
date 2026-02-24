/** chunk id: 569717, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => r
});
var n = a(989349),
    s = a.n(n),
    i = a(954571),
    l = a(652215);

function r(e, t) {
    i.default.track(l.HAw.AGE_GATE_SUBMITTED, {
        dob: 18 > s()().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
        dob_day: e.date(),
        dob_month: e.month() + 1,
        dob_year: e.year(),
        source: {
            section: t
        }
    })
}