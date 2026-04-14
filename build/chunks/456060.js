/** chunk id: 456060 params = (module,exports,require) **/
n.d(t, {
    BE: () => u,
    SJ: () => _,
    Wf: () => d,
    YC: () => c,
    n$: () => o
});
var i = n(287809),
    a = n(562153),
    l = n(652215),
    s = n(985018),
    r = n(165500);

function o(e, t, n) {
    switch (t) {
        case l.xL.LISTEN:
            return s.intl.formatToPlainString(s.t["/8czH4"], {
                name: e
            });
        case l.xL.WATCH:
            return s.intl.formatToPlainString(s.t.BBJXVk, {
                name: e
            });
        case l.xL.JOIN:
            return n ? void 0 : s.intl.string(s.t.pkq6Vq);
        case l.xL.STREAM_REQUEST:
            return s.intl.string(r.default.DKHhec);
        case l.xL.JOIN_REQUEST:
        default:
            return s.intl.string(s.t.Ckxb6j)
    }
}

function d(e, t, n) {
    return e.author.id === n ? s.intl.string(r.default["8B3U5O"]) : s.intl.formatToPlainString(r.default["d/qbC0"], {
        username: (0, a.mG)(t.guild_id, t.id, e.author)
    })
}

function c(e, t, n, a, l) {
    if (e.author.id === a) {
        if (n.isPrivate()) {
            let e = i.default.getUser(n.getRecipientId());
            if (null != e) return l ? s.intl.formatToPlainString(s.t.JddpN2, {
                username: e.globalName,
                appName: t
            }) : s.intl.formatToPlainString(s.t.gYVkSW, {
                username: e.globalName,
                appName: t
            })
        }
        return l ? s.intl.formatToPlainString(s.t["2N1kNS"], {
            appName: t
        }) : s.intl.formatToPlainString(s.t.IA6uDV, {
            appName: t
        })
    }
    return l ? s.intl.formatToPlainString(s.t.XE8axA, {
        username: e.author.globalName,
        appName: t
    }) : s.intl.formatToPlainString(s.t.hgcjOn, {
        username: e.author.globalName,
        appName: t
    })
}

function u(e, t, n, i, a) {
    switch (e.activity?.type) {
        case l.xL.LISTEN:
        case l.xL.WATCH:
        case l.xL.JOIN:
            return s.intl.string(a ? s.t.x1UXGR : s.t["Ek+51n"]);
        case l.xL.STREAM_REQUEST:
            return d(e, n, i);
        case l.xL.JOIN_REQUEST:
        default:
            return c(e, t, n, i, !0)
    }
}

function _(e) {
    let {
        activityActionType: t,
        maxPartySize: n,
        partySize: i
    } = e;
    return t === l.xL.STREAM_REQUEST ? "" : t === l.xL.LISTEN ? n > 0 ? s.intl.formatToPlainString(s.t.Zogoou, {
        partySize: i,
        maxPartySize: n
    }) : s.intl.formatToPlainString(s.t.UGei0j, {
        partySize: i
    }) : n > 0 ? s.intl.formatToPlainString(s.t.gLu7NU, {
        partySize: i,
        maxPartySize: n
    }) : s.intl.formatToPlainString(s.t["65JnWC"], {
        partySize: i
    })
}