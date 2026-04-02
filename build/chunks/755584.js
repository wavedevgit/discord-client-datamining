/** chunk id: 755584 params = (module,exports,require) **/
r.d(t, {
    A: () => h
});
var n = r(110259),
    i = r(933681),
    l = r(73153),
    a = r(568185),
    s = r(543465),
    o = r(477427),
    d = r(499785),
    u = r(832712),
    c = r(652215),
    E = r(355097);
let h = {
    createChannel(e) {
        let {
            guildId: t,
            type: r,
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
            channelType: r
        });
        let g = {
            type: r,
            name: h,
            permission_overwrites: p
        };
        if (null != _ && _ !== c.gp3 && (g.bitrate = _), null != S && S > 0 && (g.user_limit = S), null != A && (g.parent_id = A), r === c.rbe.GUILD_STORE) {
            if (null == f) throw Error("Unexpected missing SKU");
            g.sku_id = f, g.branch_id = C
        }
        return d.A.post({
            url: c.Rsh.GUILD_CHANNELS(t),
            body: g,
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
        }).then(e => (s.Ay.isOptInEnabled(t) && u.A.updateChannelOverrideSettings(t, e.body.id, {
            flags: E.vv.OPT_IN_ENABLED
        }, o.fd.OptedIn), a.A.checkGuildTemplateDirty(t), e), e => {
            throw l.h.dispatch({
                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                errors: e.body
            }), e
        })
    },
    createRoleSubscriptionTemplateChannel: (e, t, r, l) => d.A.post({
        url: c.Rsh.GUILD_CHANNELS(e),
        body: {
            name: t,
            type: r,
            topic: l
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