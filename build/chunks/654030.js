/** chunk id: 654030, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d,
    q: () => h
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(36525),
    s = n(282956),
    a = n(875264),
    o = n(291731),
    c = n(863036),
    u = n(71393);

function d(e) {
    let {
        refToScroller: t
    } = e, n = (0, i.bG)([c.A], () => c.A.getChannel(), []), r = (0, i.bG)([u.A], () => null != n ? u.A.getGuild(n.getGuildId()) : null, [n]), {
        section: s,
        sectionId: d,
        webhooks: h,
        editedWebhook: g,
        isFetching: m,
        errors: p
    } = (0, i.cf)([o.A], () => o.A.getProps(), []);
    return null == r || null == n ? null : (0, l.jsx)(a.A, {
        guild: r,
        channel: n,
        section: s,
        sectionId: d,
        webhooks: h,
        editedWebhook: g,
        isFetchingWebhooks: m,
        hasChanges: o.A.hasChanges,
        errors: p,
        refToScroller: t
    })
}

function h() {
    let {
        channel: e,
        submitting: t
    } = (0, i.cf)([c.A], () => c.A.getProps()), n = (0, i.bG)([o.A], () => o.A.editedWebhook), a = (0, i.bG)([u.A], () => null != e ? u.A.getGuild(e.getGuildId()) : null, [e]);
    return (0, l.jsx)(r.A, {
        submitting: t,
        onReset: () => {
            s.A.init()
        },
        onSave: () => {
            null != a && null != n && s.A.saveWebhook(a.id, n)
        }
    })
}