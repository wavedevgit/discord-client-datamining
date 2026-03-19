/** chunk id: 755584 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(110259),
    i = n(933681),
    l = n(73153),
    a = n(568185),
    o = n(543465),
    s = n(477427),
    d = n(499785),
    c = n(832712),
    p = n(652215),
    h = n(355097);
let u = {
    createChannel(e) {
        let {
            guildId: t,
            type: n,
            name: u,
            permissionOverwrites: E = [],
            bitrate: _,
            userLimit: S,
            parentId: f,
            skuId: A,
            branchId: C
        } = e;
        l.h.dispatch({
            type: "CREATE_CHANNEL_MODAL_SUBMIT",
            guildId: t,
            channelType: n
        });
        let g = {
            type: n,
            name: u,
            permission_overwrites: E
        };
        if (null != _ && _ !== p.gp3 && (g.bitrate = _), null != S && S > 0 && (g.user_limit = S), null != f && (g.parent_id = f), n === p.rbe.GUILD_STORE) {
            if (null == A) throw Error("Unexpected missing SKU");
            g.sku_id = A, g.branch_id = C
        }
        return d.A.post({
            url: p.Rsh.GUILD_CHANNELS(t),
            body: g,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: e => (0, i.e0)({
                    is_private: E.length > 0,
                    channel_id: e?.body?.id,
                    channel_type: e?.body?.type
                })
            },
            rejectWithError: !1
        }).then(e => (o.Ay.isOptInEnabled(t) && c.A.updateChannelOverrideSettings(t, e.body.id, {
            flags: h.vv.OPT_IN_ENABLED
        }, s.fd.OptedIn), a.A.checkGuildTemplateDirty(t), e), e => {
            throw l.h.dispatch({
                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                errors: e.body
            }), e
        })
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, l) => d.A.post({
        url: p.Rsh.GUILD_CHANNELS(e),
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