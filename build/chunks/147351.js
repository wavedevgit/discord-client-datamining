/** chunk id: 147351 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(732955),
    s = n(843472),
    o = n(355622),
    c = n(148355),
    d = n(406704),
    u = n(696451),
    _ = n(576705),
    A = n(287809),
    m = n(954571),
    E = n(661191),
    T = n(460350),
    I = n(652215),
    g = n(705886);

function N(e) {
    let {
        assets: t,
        currentUser: n,
        message: i
    } = e, l = (E.default.extractTimestamp(n.id) + E.default.extractTimestamp(i.id)) % t.length;
    return t[l]
}

function f(e) {
    let {
        currentUser: t,
        channel: n,
        message: a,
        buttonLabels: d,
        stickers: u,
        event: _,
        eventProperties: A
    } = e, E = l.useMemo(() => N({
        assets: u,
        currentUser: t,
        message: a
    }), [u, t, a]), I = l.useMemo(() => N({
        assets: d,
        currentUser: t,
        message: a
    }), [d, t, a]), g = l.useCallback(async () => {
        let {
            valid: e
        } = await (0, T.i)({
            type: o.oU.FORM,
            content: "",
            channel: n
        });
        e && (! function(e) {
            let {
                channel: t,
                message: n,
                sticker: i
            } = e;
            s.A.sendGreetMessage(t.id, i.id, s.A.getSendMessageOptionsForReply({
                channel: t,
                message: n,
                shouldMention: !0,
                showMentionToggle: !0
            }))
        }({
            channel: n,
            message: a,
            sticker: E
        }), function(e) {
            let {
                sticker: t,
                event: n,
                eventProperties: i
            } = e;
            null != n && m.default.track(n, {
                ...i,
                sticker_id: t.id
            })
        }({
            sticker: E,
            event: _,
            eventProperties: A
        }))
    }, [n, a, E, _, A]);
    return (0, i.jsx)(r.$nd, {
        icon: {
            type: "sticker",
            asset: E,
            component: c.A
        },
        text: I,
        onClick: g,
        variant: "secondary"
    })
}

function C(e) {
    let {
        channel: t,
        message: n,
        buttonLabels: l,
        stickers: r,
        event: s,
        eventProperties: o
    } = e, c = A.default.getCurrentUser(), m = function(e) {
        let {
            channel: t,
            message: n,
            currentUser: i
        } = e;
        return (0, a.bG)([_.A, u.Ay], () => {
            let e = t.guild_id;
            if (null == i || null == e) return !1;
            let l = (0, d.UJ)(t),
                a = _.A.can(I.xBc.SEND_MESSAGES, t),
                r = u.Ay.getMember(e, i.id)?.isPending,
                s = n.author.bot;
            return a && !l && !r && !s
        })
    }({
        channel: t,
        message: n,
        currentUser: c
    });
    return null != c && m ? (0, i.jsx)("div", {
        className: g.S,
        children: (0, i.jsx)(f, {
            currentUser: c,
            channel: t,
            message: n,
            buttonLabels: l,
            stickers: r,
            event: s,
            eventProperties: o
        })
    }) : null
}