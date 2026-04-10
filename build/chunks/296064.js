/** chunk id: 296064 params = (module,exports,require) **/
n.d(t, {
    r: () => p
});
var i = n(627968),
    l = n(64700),
    r = n(6161),
    s = n(681154),
    a = n(974690),
    o = n(435371),
    u = n(397927),
    d = n(833349),
    c = n(672979),
    h = n(661191),
    g = n(243612),
    m = n(67103),
    f = n(652215),
    A = n(985018);

function I(e) {
    return e.find(e => (0, d.A)(e, f.jUm.JOIN))
}

function E(e, t) {
    return null == t ? I(e) : e.find(e => (0, d.A)(e, f.jUm.JOIN) && e.application_id === t) ?? I(e)
}

function p(e) {
    let {
        userId: t,
        friendActivities: n,
        currentUserPlayingActivities: d,
        gameProfileEntry: f,
        onPrimaryAction: I
    } = e, [p, _] = l.useState(!1), S = l.useRef(null);
    l.useEffect(() => () => {
        null != S.current && clearTimeout(S.current)
    }, []);
    let x = function(e, t, n, i) {
            let l = (0, g.qv)(),
                o = l?.altId ?? l?.id,
                u = E(t, o);
            if (null != u) return {
                kind: "ask_to_join",
                activity: u
            };
            let d = E(n, o);
            if (null != d) return {
                kind: "invite_to_activity",
                activity: d
            };
            if (null != i) return {
                kind: "send_game_invite_message",
                gameEntry: i
            };
            let m = n.find(c.A);
            if (null != m) {
                let t;
                return {
                    kind: "send_game_invite_message",
                    gameEntry: (t = m.timestamps?.start ?? Date.now(), {
                        id: h.default.fromTimestamp(t),
                        author_id: e,
                        extra: {
                            type: "played_game_extra",
                            game_name: m.name,
                            application_id: m.application_id ?? "",
                            fake_inventory_item: !0
                        },
                        content_type: s.ContentInventoryEntryType.PLAYED_GAME,
                        author_type: r.ContentInventoryAuthorType.USER,
                        participants: [],
                        traits: [{
                            type: a.K.IS_LIVE,
                            is_live: !0
                        }]
                    })
                }
            }
            return null
        }(t, n, d, f),
        T = l.useCallback(e => {
            e.preventDefault(), e.stopPropagation(), p || null == x || (_(!0), null != S.current && clearTimeout(S.current), S.current = setTimeout(() => {
                _(!1), S.current = null
            }, 2e3), I?.({
                type: function(e) {
                    switch (e) {
                        case "ask_to_join":
                            return m.c.ASK_TO_JOIN;
                        case "invite_to_activity":
                            return m.c.SEND_ACTIVITY_INVITE;
                        case "send_game_invite_message":
                            return m.c.SEND_GAME_INVITE_MESSAGE
                    }
                }(x.kind),
                userId: t,
                activity: x.activity,
                gameEntry: x.gameEntry
            }))
        }, [p, x, t, I]);
    if (null == x) return null;
    let N = function(e, t) {
            if (t) return u.BNr;
            switch (e) {
                case "ask_to_join":
                    return u.E7M;
                case "invite_to_activity":
                    return u.DpX;
                case "send_game_invite_message":
                    return u.lX7
            }
        }(x.kind, p),
        C = function(e) {
            switch (e) {
                case "ask_to_join":
                    return A.intl.string(A.t.OKsSCR);
                case "invite_to_activity":
                    return A.intl.string(A.t["3fRySx"]);
                case "send_game_invite_message":
                    return A.intl.string(A.t.XHxDIV)
            }
        }(x.kind);
    return (0, i.jsx)(o.m_, {
        text: C,
        "aria-label": C,
        children: (0, i.jsx)(u.K0, {
            icon: N,
            "aria-label": C,
            size: "sm",
            variant: "icon-only",
            onClick: T,
            disabled: p
        })
    })
}