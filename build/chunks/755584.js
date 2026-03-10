/** chunk id: 755584 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(110259),
    l = n(933681),
    a = n(73153),
    r = n(568185),
    s = n(543465),
    o = n(477427),
    c = n(499785),
    d = n(832712),
    u = n(652215),
    _ = n(355097);
let A = {
    createChannel(e) {
        let {
            guildId: t,
            type: n,
            name: A,
            permissionOverwrites: m = [],
            bitrate: E,
            userLimit: I,
            parentId: T,
            skuId: f,
            branchId: N
        } = e;
        a.h.dispatch({
            type: "CREATE_CHANNEL_MODAL_SUBMIT",
            guildId: t,
            channelType: n
        });
        let C = {
            type: n,
            name: A,
            permission_overwrites: m
        };
        if (null != E && E !== u.gp3 && (C.bitrate = E), null != I && I > 0 && (C.user_limit = I), null != T && (C.parent_id = T), n === u.rbe.GUILD_STORE) {
            if (null == f) throw Error("Unexpected missing SKU");
            C.sku_id = f, C.branch_id = N
        }
        return c.A.post({
            url: u.Rsh.GUILD_CHANNELS(t),
            body: C,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: e => (0, l.e0)({
                    is_private: m.length > 0,
                    channel_id: e?.body?.id,
                    channel_type: e?.body?.type
                })
            },
            rejectWithError: !1
        }).then(e => (s.Ay.isOptInEnabled(t) && d.A.updateChannelOverrideSettings(t, e.body.id, {
            flags: _.vv.OPT_IN_ENABLED
        }, o.fd.OptedIn), r.A.checkGuildTemplateDirty(t), e), e => {
            throw a.h.dispatch({
                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                errors: e.body
            }), e
        })
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, a) => c.A.post({
        url: u.Rsh.GUILD_CHANNELS(e),
        body: {
            name: t,
            type: n,
            topic: a
        },
        oldFormErrors: !0,
        trackedActionData: {
            event: i.NetworkActionNames.CHANNEL_CREATE,
            properties: e => (0, l.e0)({
                is_private: !0,
                channel_id: e?.body?.id,
                channel_type: e?.body?.type
            })
        },
        rejectWithError: !1
    })
}