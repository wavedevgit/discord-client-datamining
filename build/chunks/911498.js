/** chunk id: 911498, original params: e,t,n (module,exports,require) **/
n.d(t, {
    s: () => o
});
var i = n(735438),
    l = n(353640),
    a = n(540185),
    s = n(282435);
let r = (0, i.sampleSize)(s.cG, s.cG.length),
    o = (0, l.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (n, i, l) => {
            let s = new Set(l.map(e => e.applicationId));
            for (let l of (e({
                    stack: [...n.filter(e => !s.has(e)), ...r],
                    wishlistStack: [...i.filter(e => !s.has(e)), ...r]
                }), Object.values(a.x))) t().setNext(6, l)
        },
        setNext: (e, n) => {
            let i = t().getNext(e, n);
            t()._setGameIds(n, i);
            let l = t().peekNext(7, n);
            t()._setPeekedGameIds(n, l)
        },
        getNext: (e, n) => {
            let i = n === a.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                l = i.slice(0, e),
                s = i.slice(e);
            return t()._setStack(n, s), l
        },
        peekNext: (e, n) => (n === a.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, n) => {
            let i = t().gameIds[n] ?? [],
                l = i.indexOf(e);
            if (-1 === l) return;
            let a = [...i];
            a.splice(l, 1);
            let s = t().getNext(1, n),
                r = t().peekNext(7, n);
            t()._setGameIds(n, [...a, ...s]), t()._setPeekedGameIds(n, [...r, ...s])
        },
        bumpMultiple: (e, n) => {
            let i = (t().gameIds[n] ?? []).filter(t => !e.includes(t)),
                l = t().getNext(6 - i.length, n),
                a = t().peekNext(7, n);
            t()._setGameIds(n, [...i, ...l]), t()._setPeekedGameIds(n, [...a, ...l])
        },
        remove: (e, n) => {
            let i = (n === a.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter(t => t !== e);
            t()._setStack(n, i), t()._setPeekedGameIds(n, t().peekNext(7, n))
        },
        _setGameIds: (t, n) => {
            e(e => ({
                gameIds: {
                    ...e.gameIds,
                    [t]: n
                }
            }))
        },
        _setStack: (t, n) => {
            t === a.x.WANT_TO_PLAY_GAMES ? e({
                wishlistStack: n
            }) : e({
                stack: n
            })
        },
        _setPeekedGameIds: (t, n) => {
            e(e => ({
                peekedGameIds: {
                    ...e.peekedGameIds,
                    [t]: n
                }
            }))
        }
    }))