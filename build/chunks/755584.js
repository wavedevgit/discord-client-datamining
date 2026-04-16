/** chunk id: 755584 params = (module,exports,require) **/
_.d(t, {
    A: () => h
});
var r = _(110259),
    n = _(933681),
    i = _(73153),
    o = _(568185),
    a = _(543465),
    c = _(477427),
    l = _(499785),
    d = _(832712),
    s = _(652215),
    p = _(355097);
let h = {
    createChannel(e) {
        let {
            guildId: t,
            type: _,
            name: h,
            permissionOverwrites: u = [],
            bitrate: A,
            userLimit: E,
            parentId: b,
            skuId: C,
            branchId: N
        } = e;
        i.h.dispatch({
            type: "CREATE_CHANNEL_MODAL_SUBMIT",
            guildId: t,
            channelType: _
        });
        let y = {
            type: _,
            name: h,
            permission_overwrites: u
        };
        if (null != A && A !== s.gp3 && (y.bitrate = A), null != E && E > 0 && (y.user_limit = E), null != b && (y.parent_id = b), _ === s.rbe.GUILD_STORE) {
            if (null == C) throw Error("Unexpected missing SKU");
            y.sku_id = C, y.branch_id = N
        }
        return l.A.post({
            url: s.Rsh.GUILD_CHANNELS(t),
            body: y,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: e => (0, n.e0)({
                    is_private: u.length > 0,
                    channel_id: e?.body?.id,
                    channel_type: e?.body?.type
                })
            },
            rejectWithError: !1
        }).then(e => (a.Ay.isOptInEnabled(t) && d.A.updateChannelOverrideSettings(t, e.body.id, {
            flags: p.vv.OPT_IN_ENABLED
        }, c.fd.OptedIn), o.A.checkGuildTemplateDirty(t), e), e => {
            throw i.h.dispatch({
                type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                errors: e.body
            }), e
        })
    },
    createRoleSubscriptionTemplateChannel: (e, t, _, i) => l.A.post({
        url: s.Rsh.GUILD_CHANNELS(e),
        body: {
            name: t,
            type: _,
            topic: i
        },
        oldFormErrors: !0,
        trackedActionData: {
            event: r.NetworkActionNames.CHANNEL_CREATE,
            properties: e => (0, n.e0)({
                is_private: !0,
                channel_id: e?.body?.id,
                channel_type: e?.body?.type
            })
        },
        rejectWithError: !1
    })
}