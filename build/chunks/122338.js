/** chunk id: 122338 params = (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(397927),
    s = n(183555),
    r = n(735321),
    o = n(394245),
    c = n(985018),
    d = n(740857);
let u = a.memo(function(e) {
    let {
        currentTags: t,
        onTagSelect: n,
        onNoneSelect: a,
        onClose: s
    } = e;
    return (0, i.jsx)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "widget-game-tags",
        "aria-label": c.intl.string(c.t.r6EJOu),
        onClose: s,
        onSelect: () => {},
        className: d.VS,
        children: Object.entries(o.Pb).map(e => {
            let s, [r, d] = e,
                u = (s = [], d.type === o.me.RADIO && s.push((0, i.jsx)(l.iDA, {
                    id: `${r}-none`,
                    group: r,
                    label: c.intl.string(c.t.PoWNfe),
                    checked: !d.tags.some(e => t.includes(e)),
                    action: () => a(d.tags)
                }, "none")), d.tags.forEach(e => {
                    let a = o.PT[e];
                    null != a && (d.type === o.me.RADIO ? s.push((0, i.jsx)(l.iDA, {
                        id: e,
                        group: r,
                        label: a.getText(),
                        checked: t.includes(e),
                        action: () => n(e, !0)
                    }, e)) : s.push((0, i.jsx)(l.sLh, {
                        id: e,
                        label: a.getText(),
                        checked: t.includes(e),
                        action: () => n(e, !1)
                    }, e)))
                }), s);
            return (0, i.jsx)(l.rXV, {
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
    } = e, p = (0, a.useRef)(null), {
        trackUserProfileEditAction: x
    } = (0, s.NJ)(), f = (0, a.useMemo)(() => null != t ? t : [], [t]), _ = (0, a.useCallback)(function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = new Set(f);
        if (t) {
            let t = Object.values(o.Pb).find(t => t.tags.includes(e));
            null != t && (t.tags.forEach(e => {
                i.delete(e)
            }), i.add(e), x({
                action: "TAG_ADDED",
                widgetEdited: n,
                gameId: m
            }))
        } else i.has(e) ? (i.delete(e), x({
            action: "TAG_REMOVED",
            widgetEdited: n,
            gameId: m
        })) : (i.add(e), x({
            action: "TAG_ADDED",
            widgetEdited: n,
            gameId: m
        }));
        (0, r.s1)(n, m, Array.from(i))
    }, [f, x, n, m]), h = (0, a.useCallback)(e => {
        let t = new Set(f);
        e.forEach(e => {
            t.delete(e)
        }), x({
            action: "TAG_REMOVED",
            widgetEdited: n,
            gameId: m
        }), (0, r.s1)(n, m, Array.from(t))
    }, [f, x, n, m]);
    return (0, i.jsx)(l.YNO, {
        targetElementRef: p,
        position: "right",
        align: "top",
        onRequestOpen: () => {
            x({
                action: "PRESS_ADD_TAG",
                widgetEdited: n
            })
        },
        renderPopout: e => {
            let {
                closePopout: t
            } = e;
            return (0, i.jsx)(u, {
                currentTags: f,
                onTagSelect: _,
                onNoneSelect: h,
                onClose: t
            })
        },
        children: e => (0, i.jsx)("div", {
            ref: e => (null != e && (p.current = e, g.current = e), () => {
                p.current = null, g.current = null
            }),
            children: (0, i.jsx)(l.DUT, {
                ...e,
                className: d.c9,
                "aria-label": c.intl.string(c.t.r6EJOu),
                children: (0, i.jsx)(l.Text, {
                    variant: "text-xxs/medium",
                    color: "none",
                    children: c.intl.string(c.t.fZSejy)
                })
            })
        })
    })
}