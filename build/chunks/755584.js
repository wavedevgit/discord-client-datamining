/** chunk id: 755584 params = (module,exports,require) **/
n.d(t, {
    A: () => m
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
let m = {
    createChannel(e) {
        let {
            guildId: t,
            type: n,
            name: m,
            permissionOverwrites: A = [],
            bitrate: E,
            userLimit: I,
            parentId: T,
            skuId: f,
            branchId: C
        } = e;
        a.h.dispatch({
            type: "CREATE_CHANNEL_MODAL_SUBMIT",
            guildId: t,
            channelType: n
        });
        let N = {
            type: n,
            name: m,
            permission_overwrites: A
        };
        if (null != E && E !== u.gp3 && (N.bitrate = E), null != I && I > 0 && (N.user_limit = I), null != T && (N.parent_id = T), n === u.rbe.GUILD_STORE) {
            if (null == f) throw Error("Unexpected missing SKU");
            N.sku_id = f, N.branch_id = C
        }
        return c.A.post({
            url: u.Rsh.GUILD_CHANNELS(t),
            body: N,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: e => (0, l.e0)({
                    is_private: A.length > 0,
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