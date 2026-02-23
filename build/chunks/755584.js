/** chunk id: 755584, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
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
    m = n(355097);
let _ = {
    createChannel(e) {
        let {
            guildId: t,
            type: n,
            name: _,
            permissionOverwrites: A = [],
            bitrate: h,
            userLimit: f,
            parentId: E,
            skuId: g,
            branchId: p
        } = e;
        a.h.dispatch({
            type: "CREATE_CHANNEL_MODAL_SUBMIT",
            guildId: t,
            channelType: n
        });
        let x = {
            type: n,
            name: _,
            permission_overwrites: A
        };
        if (null != h && h !== u.gp3 && (x.bitrate = h), null != f && f > 0 && (x.user_limit = f), null != E && (x.parent_id = E), n === u.rbe.GUILD_STORE) {
            if (null == g) throw Error("Unexpected missing SKU");
            x.sku_id = g, x.branch_id = p
        }
        return c.A.post({
            url: u.Rsh.GUILD_CHANNELS(t),
            body: x,
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
            flags: m.vv.OPT_IN_ENABLED
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