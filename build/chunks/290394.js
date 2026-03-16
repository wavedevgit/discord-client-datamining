/** chunk id: 290394 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(935399),
    o = n(311907),
    d = n(397927),
    c = n(54570),
    u = n(8880),
    _ = n(75804),
    m = n(985018);
let g = a().debounce(e => {
    (0, c.zU)(e)
}, 250);

function A() {
    let e = (0, o.bG)([u.A], () => u.A.speechRate);
    return (0, i.jsxs)(d.BJc, {
        gap: 16,
        children: [(0, i.jsx)(d.Apm, {
            label: m.intl.string(m.t.lsW5Ev),
            description: m.intl.string(m.t.Ci4wMS),
            markers: _.P,
            initialValue: e,
            defaultValue: 1,
            stickToMarkers: !0,
            onValueChange: g,
            onValueRender: e => `x${e.toFixed(2)}`,
            onMarkerRender: e => 0 === e ? (0, i.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: m.intl.string(m.t["493lwX"])
            }) : 10 === e ? (0, i.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: m.intl.string(m.t.ZSZEdS)
            }) : 1 === e ? (0, i.jsx)(d.Text, {
                variant: "text-xs/medium",
                color: "text-feedback-positive",
                children: "x1.0"
            }) : e % 1 == 0 ? "" : void 0
        }), (0, i.jsx)(h, {})]
    })
}

function h() {
    let [e, t] = s.useState(!1);
    return (0, r.l0)(() => (0, c.pr)()), (0, i.jsx)(d.Button, {
        text: m.intl.string(m.t.SKNnqq),
        icon: e ? d.E$n : d.udU,
        size: "sm",
        onClick: () => {
            if (e) {
                (0, c.pr)(), t(!1);
                return
            }(0, c.AU)(m.intl.string(m.t.PKaNJL), !0, void 0, () => t(!0), () => t(!1)), t(!0)
        }
    })
}