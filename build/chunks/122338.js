/** chunk id: 122338, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(397927),
    s = n(183555),
    r = n(735321),
    o = n(394245),
    c = n(985018),
    d = n(542467);
let u = l.memo(function(e) {
    let {
        currentTags: t,
        onTagSelect: n,
        onNoneSelect: l,
        onClose: s
    } = e;
    return (0, i.jsx)(a.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": c.intl.string(c.t.r6EJOu),
        onClose: s,
        onSelect: () => {},
        className: d.VS,
        children: Object.entries(o.Pb).map(e => {
            let s, [r, d] = e,
                u = (s = [], d.type === o.me.RADIO && s.push((0, i.jsx)(a.iDA, {
                    id: `${r}-none`,
                    group: r,
                    label: c.intl.string(c.t.PoWNfe),
                    checked: !d.tags.some(e => t.includes(e)),
                    action: () => l(d.tags)
                }, "none")), d.tags.forEach(e => {
                    let l = o.PT[e];
                    null != l && (d.type === o.me.RADIO ? s.push((0, i.jsx)(a.iDA, {
                        id: e,
                        group: r,
                        label: l.getText(),
                        checked: t.includes(e),
                        action: () => n(e, !0)
                    }, e)) : s.push((0, i.jsx)(a.sLh, {
                        id: e,
                        label: l.getText(),
                        checked: t.includes(e),
                        action: () => n(e, !1)
                    }, e)))
                }), s);
            return (0, i.jsx)(a.rXV, {
                label: d.getLabel(),
                children: u
            }, r)
        })
    })
});

function m(e) {
    let {
        tags: t,
        widgetType: n,
        applicationId: m,
        ref: g
    } = e, x = (0, l.useRef)(null), {
        trackUserProfileEditAction: f
    } = (0, s.NJ)(), p = (0, l.useMemo)(() => null != t ? t : [], [t]), h = (0, l.useCallback)(function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = new Set(p);
        if (t) {
            let t = Object.values(o.Pb).find(t => t.tags.includes(e));
            null != t && (t.tags.forEach(e => {
                i.delete(e)
            }), i.add(e), f({
                action: "TAG_ADDED",
                widgetEdited: n,
                gameId: m
            }))
        } else i.has(e) ? (i.delete(e), f({
            action: "TAG_REMOVED",
            widgetEdited: n,
            gameId: m
        })) : (i.add(e), f({
            action: "TAG_ADDED",
            widgetEdited: n,
            gameId: m
        }));
        (0, r.s1)(n, m, Array.from(i))
    }, [p, f, n, m]), _ = (0, l.useCallback)(e => {
        let t = new Set(p);
        e.forEach(e => {
            t.delete(e)
        }), f({
            action: "TAG_REMOVED",
            widgetEdited: n,
            gameId: m
        }), (0, r.s1)(n, m, Array.from(t))
    }, [p, f, n, m]);
    return (0, i.jsx)(a.YNO, {
        targetElementRef: x,
        position: "right",
        align: "top",
        onRequestOpen: () => {
            f({
                action: "PRESS_ADD_TAG",
                widgetEdited: n
            })
        },
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(u, {
                currentTags: p,
                onTagSelect: h,
                onNoneSelect: _,
                onClose: t
            })
        },
        children: e => (0, i.jsx)("div", {
            ref: e => (null != e && (x.current = e, g.current = e), () => {
                x.current = null, g.current = null
            }),
            children: (0, i.jsx)(a.DUT, {
                ...e,
                className: d.c9,
                "aria-label": c.intl.string(c.t.r6EJOu),
                children: (0, i.jsx)(a.Text, {
                    variant: "text-xxs/medium",
                    color: "none",
                    children: c.intl.string(c.t.fZSejy)
                })
            })
        })
    })
}