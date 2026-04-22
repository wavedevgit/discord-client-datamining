/** chunk id: 374963 params = (module,exports,require) **/
l.d(t, {
    A: () => f
});
var n = l(627968),
    i = l(64700),
    s = l(111956),
    a = l.n(s),
    C = l(33851),
    r = l.n(C),
    o = l(136722),
    d = l(417597),
    c = l(397927),
    u = l(576705),
    m = l(504049),
    x = l(266047),
    h = l(221950),
    g = l(289687),
    H = l(779662),
    p = l(818348),
    j = l(985018),
    _ = l(825706);
let f = i.forwardRef(function(e, t) {
    let {
        guild: l
    } = e, s = i.useRef(null), C = (0, d.bG)([x.A], () => x.A.hasDefaultSearchStateByGuildId(l.id), [l.id]), f = (0, d.bG)([u.A], () => u.A.can(o.kg(p.xB.MANAGE_GUILD, p.xB.KICK_MEMBERS), l)), b = i.useCallback(() => {
        null != l && f && (0, c.mMO)(async () => e => (0, n.jsx)(g.A, {
            ...e,
            guild: l
        }))
    }, [l, f]), A = (0, d.bG)([x.A], () => x.A.getSearchStateByGuildId(l.id), [l.id], r()), v = (0, m.Ks)(l.id), [V, L] = i.useState(A.query), D = i.useCallback(e => {
        let t = e.trim();
        t.length > 0 && v(), (0, h.Ld)(l.id, {
            query: t
        })
    }, [l.id, v]), R = i.useMemo(() => a()(D, 300), [D]), M = i.useCallback(e => {
        L(e), R(e)
    }, [R]), N = i.useCallback(() => {
        L(""), D("")
    }, [D]);
    return i.useImperativeHandle(t, () => ({
        resetSearchText() {
            L("")
        }
    })), (0, n.jsxs)("div", {
        className: _.db,
        children: [(0, n.jsx)("div", {
            className: _.wL,
            children: C ? (0, n.jsx)(c.Heading, {
                variant: "heading-md/medium",
                children: j.intl.string(j.t.y12ALM)
            }) : (0, n.jsx)(c.Heading, {
                variant: "heading-md/medium",
                children: j.intl.string(j.t.BUqwK8)
            })
        }), (0, n.jsx)("div", {
            className: _.Rt,
            children: (0, n.jsx)("div", {
                className: _.wL,
                children: (0, n.jsx)(c.IWV, {
                    size: "sm",
                    query: V,
                    placeholder: j.intl.string(j.t["NVoAM+"]),
                    onChange: M,
                    onClear: N,
                    autoComplete: "off",
                    inputProps: {
                        autoCapitalize: "none",
                        autoCorrect: "off",
                        spellCheck: "false"
                    }
                })
            })
        }), (0, n.jsx)("div", {
            children: (0, n.jsx)(c.YNO, {
                targetElementRef: s,
                animation: c.YNO.Animation.FADE,
                position: "bottom",
                spacing: 4,
                align: "left",
                renderPopout: () => (0, n.jsx)(H.default, {
                    guildId: l.id,
                    onClose: void 0
                }),
                children: e => {
                    let {
                        onClick: t,
                        ...l
                    } = e;
                    return (0, n.jsx)(c.Button, {
                        ...l,
                        buttonRef: s,
                        text: j.intl.string(j.t.XvNMNk),
                        onClick: t,
                        size: "sm",
                        variant: "secondary",
                        icon: c.JNJ
                    })
                }
            })
        }), (0, n.jsx)("div", {
            className: _.nw,
            children: f && (0, n.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: _.__invalid_pruneButton,
                children: (0, n.jsx)(c.Button, {
                    variant: "critical-secondary",
                    size: "sm",
                    text: j.intl.string(j.t["2mIlKQ"]),
                    onClick: b,
                    "aria-label": j.intl.string(j.t.zbyz7p)
                })
            })
        })]
    })
})