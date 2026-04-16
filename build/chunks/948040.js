/** chunk id: 948040 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(442433),
    r = n(155718),
    o = n(200662),
    d = n(985018),
    c = n(870807);

function u(e) {
    let {
        applicationIcon: t,
        applicationName: u,
        canNavigate: m,
        command: x,
        guildId: g
    } = e, h = l.useMemo(() => 0 !== Object.keys(x.permissions ?? {}).length, [x.permissions]), p = l.useCallback(() => {
        null != x && m() && (0, s.mMO)(async () => {
            let {
                default: e
            } = await n.e("15946").then(n.bind(n, 326993));
            return n => (0, i.jsx)(e, {
                applicationIcon: t,
                applicationId: x.applicationId,
                applicationName: u,
                command: x,
                guildId: g,
                ...n
            })
        })
    }, [t, u, m, x, g]), A = l.useCallback(e => {
        (0, a.L3)(e, async () => {
            let {
                default: e
            } = await n.e("15687").then(n.bind(n, 646938));
            return t => (0, i.jsx)(e, {
                ...t,
                id: x.id,
                label: d.intl.string(d.t.oJ1Muw)
            })
        })
    }, [x]), b = x.type === r.kc.CHAT ? s.kC9 : s.ueQ, f = (0, o.p6)(x.type, x.displayName);
    return (0, i.jsxs)(s.DUT, {
        onClick: p,
        className: c.AS,
        onContextMenu: A,
        children: [(0, i.jsxs)("div", {
            className: c.Cv,
            children: [(0, i.jsx)(b, {
                className: c.Kk,
                size: "md",
                color: "currentColor"
            }), (0, i.jsx)(s.Text, {
                variant: "text-md/normal",
                children: f
            })]
        }), (0, i.jsx)("div", {
            className: c.II,
            children: h ? (0, i.jsxs)("div", {
                className: c.Bs,
                children: [(0, i.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: d.intl.string(d.t.jH4B9O)
                }), (0, i.jsx)(s.mir, {
                    size: "sm",
                    color: "currentColor",
                    className: c.I8
                })]
            }) : null
        })]
    })
}