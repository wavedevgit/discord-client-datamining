/** chunk id: 698405 params = (module,exports,require) **/
i.d(t, {
    A: () => f,
    w: () => _
});
var n, a = i(627968),
    l = i(64700),
    o = i(311907),
    r = i(421380),
    s = i(397927),
    c = i(686956),
    d = i(915089),
    u = i(403362),
    h = i(857071),
    m = i(652215),
    p = i(985018),
    g = i(182730),
    _ = ((n = {})[n.CHAT = 0] = "CHAT", n[n.REACTIONS = 1] = "REACTIONS", n);
let f = e => {
    let {
        type: t,
        guild: n,
        closePopout: _,
        ctaRef: f
    } = e, A = (0, d.GV)(), [T, b] = l.useState(!1), E = (0, o.bG)([h.A], () => h.A.isLurking(n.id), [n.id]);
    l.useEffect(() => {
        T && !E && _()
    }, [T, E, _]);
    let x = null,
        I = p.intl.string(p.t.d7b1p6);
    switch (t) {
        case 0:
            x = p.intl.string(p.t.Xiwf1Q);
            break;
        case 1:
            x = p.intl.string(p.t.GXvlU9);
            break;
        default:
            return (0, u.xb)(t)
    }
    if (null == x) return null;
    let N = async () => {
        b(!0);
        try {
            await c.A.joinGuild(n.id, {
                source: m.Q4z.CHAT_INPUT_BLOCKER
            }), _()
        } catch {
            b(!1)
        }
    };
    return (0, a.jsxs)(s.lGe, {
        className: g.kL,
        "aria-labelledby": A,
        children: [(0, a.jsx)("img", {
            alt: "",
            className: g.Sl,
            src: i(303528)
        }), (0, a.jsxs)("div", {
            className: g.Qs,
            children: [(0, a.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                id: A,
                children: x
            }), (0, a.jsx)(s.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: I
            }), (0, a.jsxs)("div", {
                className: g.UD,
                children: [(0, a.jsx)(s.Button, {
                    variant: "primary",
                    text: p.intl.string(p.t["9VLmlZ"]),
                    buttonRef: f,
                    onClick: N,
                    loading: T
                }), (0, a.jsx)(r.$n, {
                    onClick: _,
                    look: r.$n.Looks.BLANK,
                    className: g.ZT,
                    children: p.intl.string(p.t["2m+Sqk"])
                })]
            })]
        })]
    })
}