/** chunk id: 755584 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(110259),
    i = n(933681),
    l = n(73153),
    a = n(568185),
    s = n(543465),
    o = n(477427),
    d = n(499785),
    u = n(832712),
    c = n(652215),
    E = n(355097);
let h = {
    createChannel(e) {
        let {
            guildId: t,
            type: n,
            name: h,
            permissionOverwrites: p = [],
            bitrate: _,
            userLimit: S,
            parentId: A,
            skuId: f,
            branchId: C
        } = e;
        l.h.dispatch({
            type: "CREATE_CHANNEL_MODAL_SUBMIT",
            guildId: t,
            channelType: n
        });
        let g = {
            type: n,
            name: h,
            permission_overwrites: p
        };
        if (null != _ && _ !== c.gp3 && (g.bitrate = _), null != S && S > 0 && (g.user_limit = S), null != A && (g.parent_id = A), n === c.rbe.GUILD_STORE) {
            if (null == f) throw Error("Unexpected missing SKU");
            g.sku_id = f, g.branch_id = C
        }
        return d.A.post({
            url: c.Rsh.GUILD_CHANNELS(t),
            body: g,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: e => (0, i.e0)({
                    is_private: p.length > 0,
                    channel_id: e?.body?.id,
                    channel_type: e?.body?.type
                })
            },
            rejectWithError: !1
        }).then(e => (s.Ay.isOptInEnabled(t) && u.A.updateChannelOverrideSettings(t, e.body.id, {
            flags: E.vv.OPT_IN_ENABLED
        }, o.fd.OptedIn), a.A.checkGuildTemplateDirty(t), e), e => {
            throw l.h.dispatch({
                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                errors: e.body
            }), e
        })
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, l) => d.A.post({
        url: c.Rsh.GUILD_CHANNELS(e),
        body: {
            name: t,
            type: n,
            topic: l
        },
        oldFormErrors: !0,
        trackedActionData: {
            event: r.NetworkActionNames.CHANNEL_CREATE,
            properties: e => (0, i.e0)({
                is_private: !0,
                channel_id: e?.body?.id,
                channel_type: e?.body?.type
            })
        },
        rejectWithError: !1
    })
}