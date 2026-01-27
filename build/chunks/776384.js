/** Chunk was on web.js **/
/** chunk id: 776384, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    a: () => O
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(110259),
    o = n(311907),
    s = n(397927),
    l = n(139286),
    c = n(713654),
    u = n(252263),
    d = n(8455),
    f = n(67259),
    p = n(734057),
    _ = n(954571),
    h = n(355622),
    m = n(652215),
    g = n(985018),
    E = n(149650);

function y(e) {
    let {
        channel: t,
        type: n
    } = e, r = (0, o.bG)([p.A], () => {
        var e;
        let n = p.A.getChannel(t.parent_id);
        return null != (e = null == n ? void 0 : n.isForumLikeChannel()) && e
    }), i = [h.oU.NORMAL, h.oU.SIDEBAR].includes(n);
    return {
        shouldShow: t.isThread() && !r && i
    }
}

function b(e) {
    let {
        thread: t,
        pendingScheduledMessage: n
    } = e, h = (0, d.Vp)({
        location: "ThreadsAlsoSendToChannelArea"
    }), [y, b] = (0, o.yK)([p.A, f.A], () => [t.isThread() ? p.A.getChannel(t.parent_id) : null, f.A.getAlsoSendToChannel(t.id)]), O = i.useCallback(e => {
        _.default.track(m.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_TOGGLED, {
            value: e,
            guild_id: t.guild_id,
            channel_id: t.id
        }), (0, u.B)({
            channelId: t.id,
            enabled: e
        })
    }, [t]);
    (0, l.A)({
        name: a.ImpressionNames.MESSAGE_ALSO_SEND_TO_CHANNEL,
        type: a.ImpressionTypes.VIEW
    }, {
        disableTrack: null == y || !h.enabled
    }, [y, h.enabled]);
    let v = null != n;
    if (!h.enabled || null == y) return null;
    let A = (0, c.gU)(y),
        I = g.intl.format(g.t.UqL10G, {
            callToActionHook: (e, t) => (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 1,
                className: E.Pf,
                children: g.intl.string(g.t.Pi3JW7)
            }, t),
            channelName: y.name,
            channelNameHook: (e, t) => (0, r.jsxs)(s.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 1,
                className: E.Pf,
                children: [null == A ? null : (0, r.jsx)(A, {
                    color: "currentColor",
                    className: E.Kk
                }, t), e]
            }, t)
        });
    return (0, r.jsx)("div", {
        className: E.kL,
        children: (0, r.jsx)(s.Checkbox, {
            checked: b,
            disabled: v,
            onChange: O,
            label: I,
            labelType: "secondary"
        })
    })
}

function O(e) {
    let {
        channel: t,
        type: n,
        pendingScheduledMessage: i
    } = e, {
        shouldShow: a
    } = y({
        channel: t,
        type: n
    });
    return a ? (0, r.jsx)(b, {
        thread: t,
        pendingScheduledMessage: i
    }) : null
}