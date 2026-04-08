/** chunk id: 122943 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(397927),
    d = n(863439),
    c = n(465364),
    u = n(448368),
    A = n(302031),
    h = n(253932),
    _ = n(576705),
    m = n(994500),
    p = n(978914),
    g = n(652215),
    E = n(838541),
    I = n(985018),
    f = n(485473),
    C = n(830684);
let T = r.memo(function(e) {
    let {
        channel: t
    } = e, {
        loaded: n,
        error: a,
        message: T
    } = (0, p.I)(t), {
        isBlocked: N,
        isIgnored: S
    } = (0, s.cf)([m.A], () => ({
        isBlocked: null != T && m.A.isBlockedForMessage(T),
        isIgnored: null != T && m.A.isIgnoredForMessage(T)
    }), [T]), v = (0, s.bG)([_.A], () => _.A.can(g.xBc.MANAGE_MESSAGES, t)), x = h.gs.useSetting(), {
        content: y
    } = r.useMemo(() => T?.content != null && "" !== T.content ? (0, c.Ay)(T, {
        formatInline: !0,
        noStyleAndInteraction: !0
    }) : {
        content: null
    }, [T]), b = null;
    if (a) b = (0, i.jsx)(o.Text, {
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
        } = (0, u.o)(T, y, N, S, l()(f.BK, C.tZ), {
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
        value: (0, d.A)(x, v),
        children: (0, i.jsx)(o.M1G, {
            className: f.JY,
            children: b
        })
    })
})