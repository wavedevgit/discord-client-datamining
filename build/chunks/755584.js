/** chunk id: 755584 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(110259),
    a = n(933681),
    l = n(73153),
    s = n(568185),
    o = n(543465),
    i = n(477427),
    h = n(499785),
    p = n(832712),
    c = n(652215),
    u = n(355097);
let d = {
    createChannel(e) {
        let {
            guildId: t,
            type: n,
            name: d,
            permissionOverwrites: _ = [],
            bitrate: g,
            userLimit: f,
            parentId: E,
            skuId: R,
            branchId: v
        } = e;
        l.h.dispatch({
            type: "CREATE_CHANNEL_MODAL_SUBMIT",
            guildId: t,
            channelType: n
        });
        let A = {
            type: n,
            name: d,
            permission_overwrites: _
        };
        if (null != g && g !== c.gp3 && (A.bitrate = g), null != f && f > 0 && (A.user_limit = f), null != E && (A.parent_id = E), n === c.rbe.GUILD_STORE) {
            if (null == R) throw Error("Unexpected missing SKU");
            A.sku_id = R, A.branch_id = v
        }
        return h.A.post({
            url: c.Rsh.GUILD_CHANNELS(t),
            body: A,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: e => (0, a.e0)({
                    is_private: _.length > 0,
                    channel_id: e?.body?.id,
                    channel_type: e?.body?.type
                })
            },
            rejectWithError: !1
        }).then(e => (o.Ay.isOptInEnabled(t) && p.A.updateChannelOverrideSettings(t, e.body.id, {
            flags: u.vv.OPT_IN_ENABLED
        }, i.fd.OptedIn), s.A.checkGuildTemplateDirty(t), e), e => {
            throw l.h.dispatch({
                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                errors: e.body
            }), e
        })
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, l) => h.A.post({
        url: c.Rsh.GUILD_CHANNELS(e),
        body: {
            name: t,
            type: n,
            topic: l
        },
        oldFormErrors: !0,
        trackedActionData: {
            event: r.NetworkActionNames.CHANNEL_CREATE,
            properties: e => (0, a.e0)({
                is_private: !0,
                channel_id: e?.body?.id,
                channel_type: e?.body?.type
            })
        },
        rejectWithError: !1
    })
}