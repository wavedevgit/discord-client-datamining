/** chunk id: 471271, original params: e,t,n (module,exports,require) **/
n.d(t, {
    t: () => A
}), n(896048);
var l = n(64700),
    r = n(424266),
    i = n.n(r),
    a = n(198982),
    s = n(928658),
    o = n(622543),
    c = n(576622),
    u = n(253932),
    d = n(954571),
    h = n(966107),
    p = n(570658),
    f = n(209079),
    m = n(687599),
    g = n(652215);

function A(e) {
    let {
        user: t,
        onAcceptSuccess: n,
        onRejectSuccess: r,
        onError: A
    } = e, b = (0, f.A)(), [_, y] = l.useState(!1), [v, E] = l.useState(!1), [O, C] = l.useState(!1), [x, S] = l.useState(!1), [j, I] = l.useState(!1), T = _ || v || O, N = l.useCallback(async e => {
        if (!T) {
            y(!0);
            try {
                await (0, h.RK)(e), S(!0), null == n || n()
            } catch (t) {
                let e = new a.LG(t);
                null == A || A(e)
            } finally {
                y(!1)
            }
        }
    }, [T, n, A]), P = l.useCallback(async e => {
        if (!T) {
            E(!0);
            try {
                await (0, h.UK)(e), I(!0), null == r || r()
            } catch (t) {
                let e = new a.LG(t);
                null == A || A(e)
            } finally {
                E(!1)
            }
        }
    }, [T, r, A]), w = l.useCallback(async e => {
        if (T) return;
        E(!0);
        let t = i()(e, 50);
        try {
            for (let e of t) await (0, h.ST)(e);
            I(!0), null == r || r()
        } catch (t) {
            let e = new a.LG(t);
            null == A || A(e)
        } finally {
            E(!1)
        }
    }, [T, r, A]), R = l.useCallback(async e => {
        if (T) return;
        if (null != t && null == o.A.getMutualGuilds(t.id)) {
            C(!0);
            try {
                await (0, c.A)(t.id, t.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    withMutualFriendsCount: !0
                })
            } catch (e) {} finally {
                C(!1)
            }
        }
        let n = async () => {
            var n;
            let l = null != t ? null == (n = o.A.getMutualGuilds(t.id)) ? void 0 : n.map(e => e.guild.id) : [];
            d.default.track(g.HAw.MESSAGE_REQUEST_ACTION, {
                action: m.LD.ACCEPT_CONFIRMATION_PROMPT,
                channel_id: e,
                mutual_guild_ids: null != l ? l : [],
                other_user_id: null == t ? void 0 : t.id
            }), await N(e)
        };
        (0, p.o)({
            channelId: e,
            onConfirm: n,
            onCancel: () => {
                var n;
                let l = null != t ? null == (n = o.A.getMutualGuilds(t.id)) ? void 0 : n.map(e => e.guild.id) : [];
                d.default.track(g.HAw.MESSAGE_REQUEST_ACTION, {
                    action: m.LD.DISMISS_CONFIRMATION_PROMPT,
                    channel_id: e,
                    mutual_guild_ids: null != l ? l : [],
                    other_user_id: null == t ? void 0 : t.id
                })
            }
        })
    }, [N, T, t]), D = l.useCallback((e, t, n) => {
        let l = (l, r) => {
                r && u.WY.updateSetting(l), l && null != t && (0, s.tJ)(t), N(e.id), d.default.track(g.HAw.MESSAGE_REQUEST_ACTION, {
                    action: m.LD.ACCEPT_HAM_CONFIRMATION_PROMPT,
                    channel_id: e.id,
                    is_dont_show_again_checked: r,
                    non_spam_retraining_opt_in: l
                }), null != n && n()
            },
            r = u.WY.getSetting();
        null == r ? (0, p.v)({
            channel: e,
            onConfirm: l,
            onCancel: () => {
                d.default.track(g.HAw.MESSAGE_REQUEST_ACTION, {
                    action: m.LD.DISMISS_HAM_CONFIRMATION_PROMPT,
                    channel_id: e.id
                })
            }
        }) : l(r)
    }, [N]);
    return {
        acceptMessageRequest: b ? R : N,
        rejectMessageRequest: P,
        rejectAll: w,
        markAsNotSpam: D,
        isAcceptLoading: _,
        isRejectLoading: v,
        isUserProfileLoading: O,
        isOptimisticAccepted: x,
        isOptimisticRejected: j
    }
}