/** chunk id: 766319, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    s = n(110259),
    a = n(417597),
    o = n(397927),
    c = n(308368),
    u = n(139286),
    d = n(627363),
    h = n(386467),
    p = n(760751),
    g = n(383501),
    f = n(287809),
    m = n(762370),
    b = n(25528),
    A = n(652215),
    y = n(426127),
    O = n(985018),
    _ = n(281783);

function j(e) {
    let t, {
            activity: n,
            channel: i,
            userId: s
        } = e,
        u = (0, d.YY)(n.application_id).data,
        [h, p] = l.useState(!1),
        [f, m] = l.useState(0),
        b = (0, a.bG)([g.A], () => g.A.getChannelId() !== i.id);
    async function j() {
        m(1);
        try {
            await c.A.sendActivityInvite({
                type: A.xL.STREAM_REQUEST,
                channelId: i.id,
                activity: n,
                content: "<@".concat(s, ">"),
                location: "request to stream hover",
                targetUserId: s
            })
        } catch (e) {
            m(0);
            return
        }
        m(2)
    }
    if (b && (t = O.intl.string(y.default.qRXats)), n.type === A.$pd.PLAYING) {
        let e = null == u ? void 0 : u.getIconURL(46);
        return (0, r.jsxs)("div", {
            className: _.gd,
            children: [(0, r.jsxs)("div", {
                className: _.xi,
                children: [h || null == e ? (0, r.jsx)(o._7Z, {
                    size: "custom",
                    width: 46,
                    height: 46
                }) : (0, r.jsx)("img", {
                    src: e,
                    alt: n.name,
                    onError: () => p(!0)
                }), (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: O.intl.string(O.t.BMTj28)
                    }), (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        children: n.name
                    })]
                })]
            }), (0, r.jsx)(o.Button, {
                loading: 1 === f,
                disabled: b || 2 === f,
                fullWidth: !0,
                size: "sm",
                text: 2 === f ? O.intl.string(y.default["8HU1M2"]) : O.intl.string(y.default.DKHhec),
                onClick: j
            }), null != t && (0, r.jsx)(o.Text, {
                className: _.H$,
                variant: "text-xs/normal",
                color: "text-muted",
                children: t
            })]
        })
    }
}

function x(e) {
    let {
        userId: t,
        channel: n
    } = e, o = (0, a.bG)([f.default], () => f.default.getUser(t)), c = (0, b.A)(t, n.guild_id), d = (0, m.A)(t, n.id), g = l.useMemo(() => i.uniqWith(c, (e, t) => {
        if (e.application_id === t.application_id) return !0;
        let n = p.A.getGameByName(e.name),
            r = p.A.getGameByName(t.name);
        return null != n && n === r || e.name === t.name
    }), [c]), A = null == o || !d || 0 === g.length;
    return ((0, u.A)({
        type: s.ImpressionTypes.POPOUT,
        name: s.ImpressionNames.VOICE_USER_ACTIVITY_POPOUT,
        properties: {}
    }, {
        disableTrack: A
    }), A) ? null : (0, r.jsx)(h.A.Provider, {
        value: n.guild_id,
        children: (0, r.jsx)("div", {
            className: _.zr,
            children: (0, r.jsx)("div", {
                className: _.Ci,
                children: g.map(e => (0, r.jsx)(j, {
                    activity: e,
                    channel: n,
                    userId: t
                }, "".concat(e.session_id, "-").concat(e.application_id, "-").concat(e.name)))
            })
        })
    })
}