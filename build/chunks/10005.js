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
    } = e ?? {}, [o, d] = i.useState(!1), [c, u] = i.useState(!1), [_, g] = i.useState(!1), [A, m] = i.useState(!1), [h, p] = i.useState(!1), [x, E] = i.useState(!1), [T, S] = i.useState(!1), [C, I] = i.useState(!1), f = o || c || _ || A || x || C, N = i.useCallback(async e => {
        if (!f) {
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
    }, [f, t, n]), b = i.useCallback(async e => {
        if (!f) {
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
    }, [f, t, n]), v = i.useCallback(async e => {
        if (!f) {
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
    }, [f, t, n]), O = i.useCallback(async e => {
        if (!f) {
            m(!0);
            try {
                await (0, l.e$)(e), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                m(!1)
            }
        }
    }, [f, t, n]), j = i.useCallback(async () => {
        if (!h) {
            p(!0);
            try {
                await (0, l.HB)(), n?.()
            } catch (n) {
                let e = new s.LG(n);
                t?.(e)
            } finally {
                p(!1)
            }
        }
    }, [h, t, n]), R = i.useCallback(async e => {
        if (!T) {
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
    }, [T, t, n]);
    return {
        acceptLinkRequest: N,
        declineLinkRequest: b,
        disconnectLinkRequest: v,
        cancelLinkRequest: O,
        selectTeenUser: R,
        getLinkCode: j,
        requestLink: i.useCallback(async (e, i) => {
            if (!x) {
                E(!0);
                try {
                    await l.Ay.requestLink(e, i), n?.()
                } catch (n) {
                    let e = new s.LG(n);
                    t?.(e)
                } finally {
                    E(!1)
                }
            }
        }, [x, t, n]),
        loadMore: i.useCallback(async e => {
            let n = a.A.getActionsForDisplayType(e),
                i = n[n.length - 1],
                r = a.A.getStartId(),
                o = a.A.getSelectedTeenId();
            if (!C && null != r && null != o) {
                I(!0);
                try {
                    await l.Ay.fetchMoreTeenActivity(o, e, r, i.event_id)
                } catch (n) {
                    let e = new s.LG(n);
                    t?.(e)
                } finally {
                    I(!1)
                }
            }
        }, [C, t]),
        isAcceptLoading: o,
        isDeclineLoading: c,
        isDisconnectLoading: _,
        isCancelLoading: A,
        isGetLinkCodeLoading: h,
        isSelectTeenUserLoading: T,
        isRequestingLink: x,
        isMoreLoading: C
    }
}