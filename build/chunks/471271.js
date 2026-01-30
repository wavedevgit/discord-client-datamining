/** Chunk was on 1113 **/
/** chunk id: 471271, original params: e,t,n (module,exports,require) **/
n.d(t, {
    t: () => b
}), n(896048);
var r = n(64700),
    l = n(424266),
    i = n.n(l),
    s = n(198982),
    a = n(928658),
    o = n(622543),
    c = n(576622),
    u = n(253932),
    d = n(954571),
    h = n(966107),
    p = n(570658),
    g = n(209079),
    f = n(687599),
    m = n(652215);

function b(e) {
    let {
        user: t,
        onAcceptSuccess: n,
        onRejectSuccess: l,
        onError: b
    } = e, A = (0, g.A)(), [y, O] = r.useState(!1), [_, j] = r.useState(!1), [x, v] = r.useState(!1), [E, C] = r.useState(!1), [S, I] = r.useState(!1), N = y || _ || x, T = r.useCallback(async e => {
        if (!N) {
            O(!0);
            try {
                await (0, h.RK)(e), C(!0), null == n || n()
            } catch (t) {
                let e = new s.LG(t);
                null == b || b(e)
            } finally {
                O(!1)
            }
        }
    }, [N, n, b]), P = r.useCallback(async e => {
        if (!N) {
            j(!0);
            try {
                await (0, h.UK)(e), I(!0), null == l || l()
            } catch (t) {
                let e = new s.LG(t);
                null == b || b(e)
            } finally {
                j(!1)
            }
        }
    }, [N, l, b]), w = r.useCallback(async e => {
        if (N) return;
        j(!0);
        let t = i()(e, 50);
        try {
            for (let e of t) await (0, h.ST)(e);
            I(!0), null == l || l()
        } catch (t) {
            let e = new s.LG(t);
            null == b || b(e)
        } finally {
            j(!1)
        }
    }, [N, l, b]), R = r.useCallback(async e => {
        if (N) return;
        if (null != t && null == o.A.getMutualGuilds(t.id)) {
            v(!0);
            try {
                await (0, c.A)(t.id, t.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    withMutualFriendsCount: !0
                })
            } catch (e) {} finally {
                v(!1)
            }
        }
        let n = async () => {
            var n;
            let r = null != t ? null == (n = o.A.getMutualGuilds(t.id)) ? void 0 : n.map(e => e.guild.id) : [];
            d.default.track(m.HAw.MESSAGE_REQUEST_ACTION, {
                action: f.LD.ACCEPT_CONFIRMATION_PROMPT,
                channel_id: e,
                mutual_guild_ids: null != r ? r : [],
                other_user_id: null == t ? void 0 : t.id
            }), await T(e)
        };
        (0, p.o)({
            channelId: e,
            onConfirm: n,
            onCancel: () => {
                var n;
                let r = null != t ? null == (n = o.A.getMutualGuilds(t.id)) ? void 0 : n.map(e => e.guild.id) : [];
                d.default.track(m.HAw.MESSAGE_REQUEST_ACTION, {
                    action: f.LD.DISMISS_CONFIRMATION_PROMPT,
                    channel_id: e,
                    mutual_guild_ids: null != r ? r : [],
                    other_user_id: null == t ? void 0 : t.id
                })
            }
        })
    }, [T, N, t]), D = r.useCallback((e, t, n) => {
        let r = (r, l) => {
                l && u.WY.updateSetting(r), r && null != t && (0, a.tJ)(t), T(e.id), d.default.track(m.HAw.MESSAGE_REQUEST_ACTION, {
                    action: f.LD.ACCEPT_HAM_CONFIRMATION_PROMPT,
                    channel_id: e.id,
                    is_dont_show_again_checked: l,
                    non_spam_retraining_opt_in: r
                }), null != n && n()
            },
            l = u.WY.getSetting();
        null == l ? (0, p.v)({
            channel: e,
            onConfirm: r,
            onCancel: () => {
                d.default.track(m.HAw.MESSAGE_REQUEST_ACTION, {
                    action: f.LD.DISMISS_HAM_CONFIRMATION_PROMPT,
                    channel_id: e.id
                })
            }
        }) : r(l)
    }, [T]);
    return {
        acceptMessageRequest: A ? R : T,
        rejectMessageRequest: P,
        rejectAll: w,
        markAsNotSpam: D,
        isAcceptLoading: y,
        isRejectLoading: _,
        isUserProfileLoading: x,
        isOptimisticAccepted: E,
        isOptimisticRejected: S
    }
}