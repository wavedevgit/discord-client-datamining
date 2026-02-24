/** chunk id: 181504, original params: t,e,a (module,exports,require) **/
a.d(e, {
    b: () => i
});
var r = a(989349),
    n = a.n(r),
    d = a(985018);
let i = [{
    getDueAt: () => n()().add(30, "minutes").toDate(),
    getLabel: () => d.intl.string(d.t["OV8l/H"])
}, {
    getDueAt: () => n()().add(1, "hour").toDate(),
    getLabel: () => d.intl.string(d.t["zf0R+0"])
}, {
    getDueAt: () => n()().add(4, "hour").toDate(),
    getLabel: () => d.intl.string(d.t["5gztZN"])
}, {
    getDueAt: () => {
        let t = n()().startOf("day").add(9, "hours");
        return n()().hour() >= 9 ? t.add(1, "day").toDate() : t.toDate()
    },
    getLabel: () => n()().hour() >= 9 ? d.intl.string(d.t["7MKr2P"]) : d.intl.string(d.t.FnFI3m)
}, {
    getDueAt: () => {
        let t, e = n()().day();
        return t = 0 === e || 1 === e && n()().startOf("day").add(9, "hours").isAfter(n()()) ? 1 : 8, n()().day(t).startOf("day").add(9, "hours").toDate()
    },
    getLabel: () => d.intl.string(d.t["q+Ls05"])
}]