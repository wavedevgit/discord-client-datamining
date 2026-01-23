/** Chunk was on 21968 **/
/** chunk id: 12994, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(282956),
    s = n(573648),
    o = n(997509),
    c = n(447066),
    d = n(780765),
    u = n(835084);

function p(e) {
    let {
        integrations: t,
        editedIntegration: n,
        guild: p,
        platformType: m,
        labelText: g,
        descriptionText: b,
        helpText: f,
        errors: h,
        canNavigate: x
    } = e, j = s.A.get(m), O = r.useCallback(async e => {
        x() && (await o.A.enableIntegration(p.id, e.type, e.id), a.A.startEditingIntegration(e.id))
    }, [x, p.id]), y = r.useCallback(e => {
        x() && (e.id === (null == n ? void 0 : n.id) && a.A.stopEditingIntegration(), o.A.disableIntegration(p.id, e.id))
    }, [x, n, p.id]), A = r.useCallback(e => {
        x() && (e === (null == n ? void 0 : n.id) ? a.A.stopEditingIntegration() : a.A.startEditingIntegration(e))
    }, [x, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.A, {
            name: g,
            icon: null == j ? void 0 : j.icon.whiteSVG,
            iconBackgroundColor: null == j ? void 0 : j.color,
            iconClassName: u.tV,
            description: b,
            isHeader: !0
        }), (0, i.jsx)(l.cGx, {
            className: u.zN
        }), "message" in h && (0, i.jsx)(l.Text, {
            className: u.kc,
            color: "text-feedback-critical",
            variant: "text-sm/normal",
            children: h.message
        }), t.map(e => (0, i.jsx)(d.A, {
            integration: e,
            editedIntegration: n,
            guild: p,
            isExpanded: (null == n ? void 0 : n.id) === e.id,
            onEnable: O,
            onDisable: y,
            onToggleExpand: () => A(e.id)
        }, e.id)), (0, i.jsx)(l.Text, {
            className: u.BK,
            color: "text-muted",
            variant: "text-sm/normal",
            children: f
        })]
    })
}