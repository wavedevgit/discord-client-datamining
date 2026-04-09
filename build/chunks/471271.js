/** chunk id: 471271 params = (module,exports,require) **/
n.d(t, {
    t: () => _
});
var i = n(64700),
    l = n(424266),
    s = n.n(l),
    a = n(198982),
    r = n(928658),
    o = n(622543),
    c = n(576622),
    d = n(253932),
    u = n(954571),
    h = n(966107),
    m = n(570658),
    A = n(209079),
    g = n(687599),
    p = n(652215);

function _(e) {
    let {
        user: t,
        onAcceptSuccess: n,
        onRejectSuccess: l,
        onError: _
    } = e, f = (0, A.A)(), [E, x] = i.useState(!1), [C, S] = i.useState(!1), [I, T] = i.useState(!1), [N, v] = i.useState(!1), [y, b] = i.useState(!1), j = E || C || I, R = i.useCallback(async e => {
        if (!j) {
            x(!0);
            try {
                await (0, h.RK)(e), v(!0), n?.()
            } catch (t) {
                let e = new a.LG(t);
                _?.(e)
            } finally {
                x(!1)
            }
        }
    }, [j, n, _]), M = i.useCallback(async e => {
        if (!j) {
            S(!0);
            try {
                await (0, h.UK)(e), b(!0), l?.()
            } catch (t) {
                let e = new a.LG(t);
                _?.(e)
            } finally {
                S(!1)
            }
        }
    }, [j, l, _]), D = i.useCallback(async e => {
        if (j) return;
        S(!0);
        let t = s()(e, 50);
        try {
            for (let e of t) await (0, h.ST)(e);
            b(!0), l?.()
        } catch (t) {
            let e = new a.LG(t);
            _?.(e)
        } finally {
            S(!1)
        }
    }, [j, l, _]), O = i.useCallback(async e => {
        if (j) return;
        if (null != t && null == o.A.getMutualGuilds(t.id)) {
            T(!0);
            try {
                await (0, c.A)(t.id, t.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    withMutualFriendsCount: !0
                })
            } catch (e) {} finally {
                T(!1)
            }
        }
        let n = async () => {
            let n = null != t ? o.A.getMutualGuilds(t.id)?.map(e => e.guild.id) : [];
            u.default.track(p.HAw.MESSAGE_REQUEST_ACTION, {
                action: g.LD.ACCEPT_CONFIRMATION_PROMPT,
                channel_id: e,
                mutual_guild_ids: n ?? [],
                other_user_id: t?.id
            }), await R(e)
        };
        (0, m.o)({
            channelId: e,
            onConfirm: n,
            onCancel: () => {
                let n = null != t ? o.A.getMutualGuilds(t.id)?.map(e => e.guild.id) : [];
                u.default.track(p.HAw.MESSAGE_REQUEST_ACTION, {
                    action: g.LD.DISMISS_CONFIRMATION_PROMPT,
                    channel_id: e,
                    mutual_guild_ids: n ?? [],
                    other_user_id: t?.id
                })
            }
        })
    }, [R, j, t]), L = i.useCallback((e, t, n) => {
        let i = (i, l) => {
                l && d.WY.updateSetting(i), i && null != t && (0, r.tJ)(t), R(e.id), u.default.track(p.HAw.MESSAGE_REQUEST_ACTION, {
                    action: g.LD.ACCEPT_HAM_CONFIRMATION_PROMPT,
                    channel_id: e.id,
                    is_dont_show_again_checked: l,
                    non_spam_retraining_opt_in: i
                }), null != n && n()
            },
            l = d.WY.getSetting();
        null == l ? (0, m.v)({
            channel: e,
            onConfirm: i,
            onCancel: () => {
                u.default.track(p.HAw.MESSAGE_REQUEST_ACTION, {
                    action: g.LD.DISMISS_HAM_CONFIRMATION_PROMPT,
                    channel_id: e.id
                })
            }
        }) : i(l)
    }, [R]);
    return {
        acceptMessageRequest: f ? O : R,
        rejectMessageRequest: M,
        rejectAll: D,
        markAsNotSpam: L,
        isAcceptLoading: E,
        isRejectLoading: C,
        isUserProfileLoading: I,
        isOptimisticAccepted: N,
        isOptimisticRejected: y
    }
}