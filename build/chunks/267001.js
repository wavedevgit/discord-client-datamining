/** chunk id: 267001, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(321073), n(896048), n(638769);
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(282956),
    s = n(47167),
    o = n(994500),
    c = n(287809),
    d = n(624507),
    u = n(784309),
    p = n(652215),
    m = n(985018),
    g = n(587625);

function b(e) {
    let {
        webhooks: t,
        selectableWebhookChannels: n,
        lastCreatedWebhookId: b,
        editedWebhook: f,
        errors: h,
        canNavigate: x
    } = e, j = r.useMemo(() => Object.values(n).map(e => ({
        id: e.id,
        value: e.id,
        label: (0, s.m1)(e, c.default, o.A, !0)
    })), [n]), O = r.useMemo(() => {
        let e = {};
        for (let i of t)
            if (i.channel_id in e) e[i.channel_id].webhooks.push(i);
            else {
                let t = n[i.channel_id];
                null != t && (e[i.channel_id] = {
                    channel: t,
                    webhooks: [i]
                })
            } return Object.values(e).sort((e, t) => e.channel.name.localeCompare(t.channel.name))
    }, [n, t]), y = r.useCallback(e => {
        x() && (e === (null == f ? void 0 : f.id) ? a.A.stopEditingWebhook() : a.A.startEditingWebhook(e))
    }, [x, f]);
    return (0, i.jsx)("div", {
        className: g.__invalid_list,
        children: O.map(e => {
            let {
                channel: t,
                webhooks: n
            } = e;
            return function(e) {
                let {
                    channel: t,
                    webhooks: n,
                    channelOptions: r,
                    lastCreatedWebhookId: a,
                    editedWebhook: b,
                    errors: f,
                    toggleWebhookExpand: h
                } = e;
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsx)(l.Text, {
                        variant: "text-md/medium",
                        className: g.x,
                        children: m.intl.format(m.t.TKDIZg, {
                            channelHook: () => (0, i.jsx)("span", {
                                className: g.H,
                                children: (0, s.m1)(t, c.default, o.A, !0)
                            }, t.id)
                        })
                    }), n.map(e => {
                        var t;
                        return e.type === p.NH1.CHANNEL_FOLLOWER ? (0, i.jsx)(d.A, {
                            webhook: e,
                            editedWebhook: b,
                            channelOptions: r,
                            isExpanded: (null == b ? void 0 : b.id) === e.id,
                            onToggleExpand: () => h(e.id),
                            errors: f
                        }, e.id) : (0, i.jsx)(u.A, {
                            id: (t = e.id, "settings-integrations-webhook-".concat(t)),
                            webhook: e,
                            editedWebhook: b,
                            channelOptions: r,
                            isExpanded: (null == b ? void 0 : b.id) === e.id,
                            isNew: a === e.id,
                            onToggleExpand: () => h(e.id),
                            errors: f
                        }, e.id)
                    })]
                }, t.id)
            }({
                channel: t,
                webhooks: n,
                channelOptions: j,
                lastCreatedWebhookId: b,
                editedWebhook: f,
                errors: h,
                toggleWebhookExpand: y
            })
        })
    })
}