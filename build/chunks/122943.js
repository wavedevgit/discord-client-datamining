/** chunk id: 122943 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    d = n(863439),
    c = n(465364),
    u = n(448368),
    A = n(302031),
    h = n(253932),
    _ = n(576705),
    m = n(994500),
    g = n(978914),
    p = n(652215),
    E = n(838541),
    I = n(985018),
    f = n(536791),
    C = n(206314);
let T = r.memo(function(e) {
    let {
        channel: t
    } = e, {
        loaded: n,
        error: l,
        message: T
    } = (0, g.I)(t), {
        isBlocked: N,
        isIgnored: S
    } = (0, s.cf)([m.A], () => ({
        isBlocked: null != T && m.A.isBlockedForMessage(T),
        isIgnored: null != T && m.A.isIgnoredForMessage(T)
    }), [T]), x = (0, s.bG)([_.A], () => _.A.can(p.xBc.MANAGE_MESSAGES, t)), v = h.gs.useSetting(), {
        content: y
    } = r.useMemo(() => T?.content != null && "" !== T.content ? (0, c.Ay)(T, {
        formatInline: !0,
        noStyleAndInteraction: !0
    }) : {
        content: null
    }, [T]), b = null;
    if (l) b = (0, i.jsx)(o.Text, {
        className: f.G4,
        variant: "text-sm/normal",
        color: "text-muted",
        children: I.intl.string(I.t.BZHld2)
    });
    else if (n)
        if (null != T && N) b = (0, i.jsx)(o.Text, {
            className: f.G4,
            variant: "text-sm/normal",
            color: "text-muted",
            children: I.intl.string(I.t["WPe+xL"])
        });
        else if (null != T && S) b = (0, i.jsx)(o.Text, {
        className: f.G4,
        variant: "text-sm/normal",
        color: "text-muted",
        children: I.intl.string(I.t.uxrh1O)
    });
    else if (null != T) {
        let {
            contentPlaceholder: e,
            renderedContent: t
        } = (0, u.o)(T, y, N, S, a()(f.BK, C.tZ), {
            leadingIconClass: f.AF,
            trailingIconClass: f.AF,
            iconSize: E.eJ
        });
        b = null != t ? (0, i.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: f.BK,
            children: t
        }) : (0, i.jsx)(o.Text, {
            tag: "span",
            variant: "text-sm/normal",
            color: "text-muted",
            className: f.G4,
            children: e
        })
    } else b = (0, i.jsx)(o.Text, {
        className: f.G4,
        variant: "text-sm/normal",
        color: "text-muted",
        children: I.intl.string(I.t["0KfDxM"])
    });
    else b = null;
    return (0, i.jsx)(A.Bs.Provider, {
        value: (0, d.A)(v, x),
        children: (0, i.jsx)(o.M1G, {
            className: f.JY,
            children: b
        })
    })
})