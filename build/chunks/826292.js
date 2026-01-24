/** Chunk was on 47841 **/
/** chunk id: 826292, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x,
    K: () => j
});
var r = n(627968);
n(64700);
var i = n(788373),
    l = n(311907),
    s = n(36525),
    a = n(397927),
    o = n(282956),
    c = n(875264),
    d = n(576705),
    u = n(997509),
    g = n(555337),
    m = n(53656),
    p = n(542580),
    f = n(803378),
    b = n(652215),
    h = n(985018);

function x(e) {
    let {
        refToScroller: t
    } = e, n = (0, l.bG)([g.A], () => g.A.getGuild()), {
        section: i,
        sectionId: s,
        integrations: a,
        editedIntegration: o,
        webhooks: d,
        editedWebhook: u,
        isFetching: p,
        errors: f
    } = (0, l.cf)([m.default], () => ({
        editedIntegration: m.default.editedIntegration,
        editedWebhook: m.default.editedWebhook,
        errors: m.default.getErrors(),
        integrations: m.default.integrations,
        isFetching: m.default.isFetching(),
        section: m.default.getSection(),
        sectionId: m.default.getSectionId(),
        webhooks: m.default.webhooks
    }));
    return null == n ? null : (0, r.jsx)(c.A, {
        guild: n,
        section: i,
        sectionId: s,
        integrations: a,
        webhooks: d,
        editedIntegration: o,
        editedWebhook: u,
        isFetchingWebhooks: p,
        hasChanges: m.default.hasChanges,
        errors: f,
        refToScroller: t
    })
}

function j() {
    var e;
    let {
        guild: t,
        submitting: n
    } = (0, l.cf)([g.A], () => ({
        guild: g.A.getGuild(),
        submitting: g.A.isSubmitting()
    })), c = (0, l.bG)([d.A], () => d.A.can(b.xBc.KICK_MEMBERS, t)), x = !1, j = null;
    return c || (null == (e = m.default.editedIntegration) ? void 0 : e.expire_behavior) !== i.F.KICK || (x = !0, j = (0, r.jsx)(a.Text, {
        color: "text-feedback-critical",
        variant: "text-md/normal",
        children: h.intl.string(h.t["mrO/ZQ"])
    })), (0, r.jsx)(s.A, {
        submitting: n,
        disabled: x,
        errorMessage: j,
        onReset: () => {
            o.A.init(), p.C8(), null != t && u.A.init(t.id)
        },
        onSave: () => {
            if (null != t) {
                if (null != m.default.editedIntegration) o.A.saveIntegration(t.id, m.default.editedIntegration);
                else if (null != m.default.editedWebhook) o.A.saveWebhook(t.id, m.default.editedWebhook);
                else if (null != m.default.editedCommandId) {
                    let e = m.default.getSectionId(),
                        n = f.A.getEditedApplication();
                    if (null == e || null == n) return;
                    o.A.saveApplicationPermissions(e, t.id, Object.values(n))
                }
                g.A.hasChanges() && u.A.saveGuild(t.id, {
                    features: t.features
                })
            }
        }
    })
}