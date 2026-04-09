/** chunk id: 755584 params = (module,exports,require) **/
t.d(r, {
    A: () => h
});
var n = t(110259),
    i = t(933681),
    _ = t(73153),
    o = t(568185),
    a = t(543465),
    d = t(477427),
    c = t(499785),
    l = t(832712),
    p = t(652215),
    s = t(355097);
let h = {
    createChannel(e) {
        let {
            guildId: r,
            type: t,
            name: h,
            permissionOverwrites: A = [],
            bitrate: b,
            userLimit: E,
            parentId: C,
            skuId: N,
            branchId: y
        } = e;
        _.h.dispatch({
            type: "CREATE_CHANNEL_MODAL_SUBMIT",
            guildId: r,
            channelType: t
        });
        let u = {
            type: t,
            name: h,
            permission_overwrites: A
        };
        if (null != b && b !== p.gp3 && (u.bitrate = b), null != E && E > 0 && (u.user_limit = E), null != C && (u.parent_id = C), t === p.rbe.GUILD_STORE) {
            if (null == N) throw Error("Unexpected missing SKU");
            u.sku_id = N, u.branch_id = y
        }
        return c.A.post({
            url: p.Rsh.GUILD_CHANNELS(r),
            body: u,
            oldFormErrors: !0,
            trackedActionData: {
                event: n.NetworkActionNames.CHANNEL_CREATE,
                properties: e => (0, i.e0)({
                    is_private: A.length > 0,
                    channel_id: e?.body?.id,
                    channel_type: e?.body?.type
                })
            },
            rejectWithError: !1
        }).then(e => (a.Ay.isOptInEnabled(r) && l.A.updateChannelOverrideSettings(r, e.body.id, {
            flags: s.vv.OPT_IN_ENABLED
        }, d.fd.OptedIn), o.A.checkGuildTemplateDirty(r), e), e => {
            throw _.h.dispatch({
                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                errors: e.body
            }), e
        })
    },
    createRoleSubscriptionTemplateChannel: (e, r, t, _) => c.A.post({
        url: p.Rsh.GUILD_CHANNELS(e),
        body: {
            name: r,
            type: t,
            topic: _
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