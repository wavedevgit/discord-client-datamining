/** Chunk was on 58652 **/
/** chunk id: 563218, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(228524), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(964486),
    o = n(58149),
    d = n(632738),
    c = n(780964),
    u = n(840065),
    m = n(734057),
    p = n(319582),
    b = n(369053),
    x = n(652215),
    g = n(985018),
    _ = n(71561);

function h(e) {
    let {
        title: t,
        description: n,
        onButtonClick: i,
        trackSettingsUpsellsAction: a
    } = e, [o, c] = r.useState(!1);
    return (0, s.Ay)(() => {
        a(b.lJ.SETTINGS_UPSELLS_VIEWED)
    }), (0, l.jsx)(d.PQ, {
        title: t,
        description: n,
        buttonText: o ? g.intl.string(g.t["h+WsPb"]) : g.intl.string(g.t.A8t4Nf),
        buttonDisabled: o,
        onButtonPress: () => {
            i(), c(!0), a(b.lJ.SETTINGS_UPSELLS_APPLY_CLICKED)
        }
    })
}

function v(e) {
    let {
        settingsUpsells: t,
        channelId: n,
        onModalClose: r,
        reportId: s,
        reportType: d,
        reportSubType: v
    } = e, f = (0, i.bG)([m.A], () => m.A.getChannel(n)), j = (0, p.MR)(t, null == f ? void 0 : f.type), A = (0, b.Mw)(d, v, s);
    return 0 === j.length ? null : (0, l.jsxs)("div", {
        className: _.kL,
        children: [(0, l.jsx)(a.Heading, {
            variant: "text-sm/semibold",
            className: _.wx,
            children: g.intl.string(g.t["1yxTIJ"])
        }), (0, l.jsx)("div", {
            className: _.uk,
            children: j.map((e, n) => {
                let {
                    getTitle: r,
                    getDescription: i,
                    onApply: a
                } = e;
                return (0, l.jsx)(h, {
                    title: r(),
                    description: i(),
                    onButtonClick: a,
                    trackSettingsUpsellsAction: A(t[n])
                }, n)
            })
        }), (0, l.jsx)(a.QWc, {
            text: g.intl.string(g.t.olebGx),
            onClick: () => {
                (0, u.openUserSettings)(c.X.CONTENT_AND_SOCIAL_PANEL, {
                    section: x.nc_.CONTENT_AND_SOCIAL
                }), r(), o.Ay.trackWithMetadata(x.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
                    report_id: s,
                    report_type: d.name,
                    report_subtype: v,
                    action: b.lJ.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED
                })
            }
        })]
    })
}