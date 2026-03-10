/** chunk id: 755584 params = (module,exports,require) **/
"use strict";
a.d(t, {
    A: () => p
});
var n = a(110259),
    r = a(933681),
    i = a(73153),
    o = a(568185),
    s = a(543465),
    l = a(477427),
    c = a(499785),
    _ = a(832712),
    d = a(652215),
    u = a(355097);
let p = {
    createChannel(e) {
        let {
            guildId: t,
            type: a,
            name: p,
            permissionOverwrites: f = [],
            bitrate: m,
            userLimit: h,
            parentId: g,
            skuId: C,
            branchId: b
        } = e;
        i.h.dispatch({
            type: "CREATE_CHANNEL_MODAL_SUBMIT",
            guildId: t,
            channelType: a
        });
        let y = {
            type: a,
            name: p,
            permission_overwrites: f
        };
        if (null != m && m !== d.gp3 && (y.bitrate = m), null != h && h > 0 && (y.user_limit = h), null != g && (y.parent_id = g), a === d.rbe.GUILD_STORE) {
            if (null == C) throw Error("Unexpected missing SKU");
            y.sku_id = C, y.branch_id = b
        }
        return c.A.post({
            url: d.Rsh.GUILD_CHANNELS(t),
            body: y,
            oldFormErrors: !0,
            trackedActionData: {
                event: n.NetworkActionNames.CHANNEL_CREATE,
                properties: e => (0, r.e0)({
                    is_private: f.length > 0,
                    channel_id: e?.body?.id,
                    channel_type: e?.body?.type
                })
            },
            rejectWithError: !1
        }).then(e => (s.Ay.isOptInEnabled(t) && _.A.updateChannelOverrideSettings(t, e.body.id, {
            flags: u.vv.OPT_IN_ENABLED
        }, l.fd.OptedIn), o.A.checkGuildTemplateDirty(t), e), e => {
            throw i.h.dispatch({
                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                errors: e.body
            }), e
        })
    },
    createRoleSubscriptionTemplateChannel: (e, t, a, i) => c.A.post({
        url: d.Rsh.GUILD_CHANNELS(e),
        body: {
            name: t,
            type: a,
            topic: i
        },
        oldFormErrors: !0,
        trackedActionData: {
            event: n.NetworkActionNames.CHANNEL_CREATE,
            properties: e => (0, r.e0)({
                is_private: !0,
                channel_id: e?.body?.id,
                channel_type: e?.body?.type
            })
        },
        rejectWithError: !1
    })
}