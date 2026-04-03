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
    } = e ?? {}, [o, d] = i.useState(!1), [c, u] = i.useState(!1), [m, g] = i.useState(!1), [_, x] = i.useState(!1), [A, h] = i.useState(!1), [p, T] = i.useState(!1), [f, S] = i.useState(!1), [b, E] = i.useState(!1), C = o || c || m || _ || p || b, N = i.useCallback(async e => {
        if (!C) {
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
    }, [C, t, n]), v = i.useCallback(async e => {
        if (!C) {
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
    }, [C, t, n]), I = i.useCallback(async e => {
        if (!C) {
            g(!0);
            try {
                await (0, l.nt)(e, r.Ef.INACTIVE), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                g(!1)
            }
        }
    }, [C, t, n]), j = i.useCallback(async e => {
        if (!C) {
            x(!0);
            try {
                await (0, l.e$)(e), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                x(!1)
            }
        }
    }, [C, t, n]), y = i.useCallback(async () => {
        if (!A) {
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
    }, [A, t, n]), O = i.useCallback(async e => {
        if (!f) {
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
    }, [f, t, n]);
    return {
        acceptLinkRequest: N,
        declineLinkRequest: v,
        disconnectLinkRequest: I,
        cancelLinkRequest: j,
        selectTeenUser: O,
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
            if (!b && null != r && null != o) {
                E(!0);
                try {
                    await l.Ay.fetchMoreTeenActivity(o, e, r, i.event_id)
                } catch (n) {
                    let e = new s.LG(n);
                    t?.(e)
                } finally {
                    E(!1)
                }
            }
        }, [b, t]),
        isAcceptLoading: o,
        isDeclineLoading: c,
        isDisconnectLoading: m,
        isCancelLoading: _,
        isGetLinkCodeLoading: A,
        isSelectTeenUserLoading: f,
        isRequestingLink: p,
        isMoreLoading: b
    }
}