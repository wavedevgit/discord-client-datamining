/** chunk id: 29681, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => g
});
var a = n(627968),
    i = n(64700),
    s = n(158954),
    l = n(311907),
    r = n(397927),
    c = n(97260),
    o = n(117178),
    d = n(775121),
    u = n(532624),
    b = n(350535);
n(980504);
var h = n(652215),
    x = n(985018),
    _ = n(316173);

function g(t) {
    let {
        transitionState: e,
        onClose: n
    } = t, g = (0, l.bG)([u.Ay], () => u.Ay.getKeybindForAction(h.hCu.SOUNDBOARD_HOLD)), [m, A] = i.useState(g?.shortcut ?? []), p = i.useCallback(() => {
        if (0 === m.length) return null != g && c.A.deleteKeybind(g.id), n();
        null == g ? c.A.addKeybind({
            action: h.hCu.SOUNDBOARD_HOLD,
            shortcut: m,
            enabled: !0,
            params: {}
        }) : c.A.setKeybind({
            ...g,
            shortcut: m
        }), n()
    }, [g, n, m]);
    i.useEffect(() => (d.A.disable(), () => {
        d.A.enable()
    }), []);
    let C = i.useMemo(() => [{
        text: x.intl.string(x.t["ETE/oC"]),
        onClick: n,
        variant: "secondary"
    }, {
        text: x.intl.string(x.t["R3BPH+"]),
        onClick: p,
        variant: "primary"
    }], [n, p]);
    return (0, a.jsxs)(s.Modal, {
        transitionState: e,
        title: x.intl.string(x.t["0Osu3x"]),
        actions: C,
        onClose: n,
        children: [(0, a.jsx)(r.po8, {
            className: _.$e,
            messageType: r.YCn.WARNING,
            children: x.intl.string(x.t["O2v/eP"])
        }), (0, a.jsx)(r.Heading, {
            className: _._5,
            variant: "eyebrow",
            color: "text-default",
            children: x.intl.string(x.t.UUpAD6)
        }), (0, a.jsx)(r.Text, {
            className: _.XI,
            variant: "text-md/normal",
            children: x.intl.string(x.t["1xFbP/"])
        }), (0, a.jsx)(r.Text, {
            className: _.lf,
            variant: "text-sm/normal",
            children: x.intl.string(x.t.laNlTl)
        }), (0, a.jsx)(r.Heading, {
            className: _._5,
            variant: "eyebrow",
            color: "text-default",
            children: x.intl.string(x.t["1La4tC"])
        }), (0, a.jsx)(o.A, {
            defaultValue: m,
            onChange: A
        }), (0, a.jsx)(r.MzZ, {
            className: _.WA,
            onClick: () => A((0, b.OH)("ctrl+`")),
            children: x.intl.string(x.t["s7+2rQ"])
        })]
    })
}