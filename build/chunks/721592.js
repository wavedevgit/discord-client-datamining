/** chunk id: 721592, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c,
    p: () => u
});
var r = n(311907),
    i = n(717125),
    a = n(734057),
    o = n(576705),
    s = n(652215);
let l = {
    needSubscriptionToAccess: !1,
    isSubscriptionGated: !1
};

function c(e) {
    return (0, r.cf)([a.A, i.A, o.A], () => u(e, a.A, i.A, o.A), [e])
}

function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.A,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.A,
        c = t.getChannel(e);
    return (null == c ? void 0 : c.isRoleSubscriptionTemplatePreviewChannel()) ? {
        isSubscriptionGated: !0,
        needSubscriptionToAccess: !0
    } : null != c && n.isChannelGated(c.guild_id, c.id) ? {
        isSubscriptionGated: !0,
        needSubscriptionToAccess: c.isGuildVocal() ? !r.can(s.xBc.CONNECT, c) : !r.can(s.xBc.VIEW_CHANNEL, c)
    } : l
}