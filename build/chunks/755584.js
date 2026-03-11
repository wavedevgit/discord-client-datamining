/** chunk id: 755584 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => f
});
var n = r(110259),
    i = r(933681),
    a = r(73153),
    o = r(568185),
    s = r(543465),
    l = r(477427),
    _ = r(499785),
    c = r(832712),
    d = r(652215),
    u = r(355097);
let f = {
    createChannel(e) {
        let {
            guildId: t,
            type: r,
            name: f,
            permissionOverwrites: p = [],
            bitrate: h,
            userLimit: m,
            parentId: C,
            skuId: g,
            branchId: b
        } = e;
        a.h.dispatch({
            type: "CREATE_CHANNEL_MODAL_SUBMIT",
            guildId: t,
            channelType: r
        });
        let y = {
            type: r,
            name: f,
            permission_overwrites: p
        };
        if (null != h && h !== d.gp3 && (y.bitrate = h), null != m && m > 0 && (y.user_limit = m), null != C && (y.parent_id = C), r === d.rbe.GUILD_STORE) {
            if (null == g) throw Error("Unexpected missing SKU");
            y.sku_id = g, y.branch_id = b
        }
        return _.A.post({
            url: d.Rsh.GUILD_CHANNELS(t),
            body: y,
            oldFormErrors: !0,
            trackedActionData: {
                event: n.NetworkActionNames.CHANNEL_CREATE,
                properties: e => (0, i.e0)({
                    is_private: p.length > 0,
                    channel_id: e?.body?.id,
                    channel_type: e?.body?.type
                })
            },
            rejectWithError: !1
        }).then(e => (s.Ay.isOptInEnabled(t) && c.A.updateChannelOverrideSettings(t, e.body.id, {
            flags: u.vv.OPT_IN_ENABLED
        }, l.fd.OptedIn), o.A.checkGuildTemplateDirty(t), e), e => {
            throw a.h.dispatch({
                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                errors: e.body
            }), e
        })
    },
    createRoleSubscriptionTemplateChannel: (e, t, r, a) => _.A.post({
        url: d.Rsh.GUILD_CHANNELS(e),
        body: {
            name: t,
            type: r,
            topic: a
        },
        oldFormErrors: !0,
        trackedActionData: {
            event: n.NetworkActionNames.CHANNEL_CREATE,
            properties: e => (0, i.e0)({
                is_private: !0,
                channel_id: e?.body?.id,
                channel_type: e?.body?.type
            })
        },
        rejectWithError: !1
    })
}