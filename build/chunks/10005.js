/** chunk id: 10005 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(64700),
    s = n(198982),
    l = n(899847),
    a = n(695515),
    r = n(191627);

function o(e) {
    let {
        onError: t,
        onSuccess: n
    } = e ?? {}, [o, d] = i.useState(!1), [c, u] = i.useState(!1), [_, m] = i.useState(!1), [g, A] = i.useState(!1), [x, h] = i.useState(!1), [p, T] = i.useState(!1), [E, S] = i.useState(!1), [f, C] = i.useState(!1), b = o || c || _ || g || p || f, N = i.useCallback(async e => {
        if (!b) {
            d(!0);
            try {
                await (0, l.nt)(e, r.Ef.ACTIVE), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                d(!1)
            }
        }
    }, [b, t, n]), I = i.useCallback(async e => {
        if (!b) {
            u(!0);
            try {
                await (0, l.nt)(e, r.Ef.DECLINED), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                u(!1)
            }
        }
    }, [b, t, n]), v = i.useCallback(async e => {
        if (!b) {
            m(!0);
            try {
                await (0, l.nt)(e, r.Ef.INACTIVE), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                m(!1)
            }
        }
    }, [b, t, n]), j = i.useCallback(async e => {
        if (!b) {
            A(!0);
            try {
                await (0, l.e$)(e), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                A(!1)
            }
        }
    }, [b, t, n]), y = i.useCallback(async () => {
        if (!x) {
            h(!0);
            try {
                await (0, l.HB)(), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                h(!1)
            }
        }
    }, [x, t, n]), R = i.useCallback(async e => {
        if (!E) {
            S(!0);
            try {
                await l.Ay.fetchTeenActivity(e), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                S(!1)
            }
        }
    }, [E, t, n]);
    return {
        acceptLinkRequest: N,
        declineLinkRequest: I,
        disconnectLinkRequest: v,
        cancelLinkRequest: j,
        selectTeenUser: R,
        getLinkCode: y,
        requestLink: i.useCallback(async (e, i) => {
            if (!p) {
                T(!0);
                try {
                    await l.Ay.requestLink(e, i), n?.()
                } catch (n) {
                    let e = new s.LG(n);
                    t?.(e)
                } finally {
                    T(!1)
                }
            }
        }, [p, t, n]),
        loadMore: i.useCallback(async e => {
            let n = a.A.getActionsForDisplayType(e),
                i = n[n.length - 1],
                r = a.A.getStartId(),
                o = a.A.getSelectedTeenId();
            if (!f && null != r && null != o) {
                C(!0);
                try {
                    await l.Ay.fetchMoreTeenActivity(o, e, r, i.event_id)
                } catch (n) {
                    let e = new s.LG(n);
                    t?.(e)
                } finally {
                    C(!1)
                }
            }
        }, [f, t]),
        isAcceptLoading: o,
        isDeclineLoading: c,
        isDisconnectLoading: _,
        isCancelLoading: g,
        isGetLinkCodeLoading: x,
        isSelectTeenUserLoading: E,
        isRequestingLink: p,
        isMoreLoading: f
    }
}