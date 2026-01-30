/** chunk id: 480870, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(47167),
    l = n(652215),
    i = n(985018);

function a(e) {
    let {
        channel: t,
        isReadonly: n = !1,
        isCreatingThread: a = !1
    } = e, o = (0, r.Ay)(t, !0), s = (0, r.Ay)(t, !1);
    return null == t || null == o ? {
        placeholder: i.intl.string(i.t.MKDeyL),
        accessibilityLabel: i.intl.string(i.t.MKDeyL)
    } : a ? {
        placeholder: i.intl.string(i.t.YzpScd),
        accessibilityLabel: i.intl.string(i.t.YzpScd)
    } : n ? {
        placeholder: i.intl.string(i.t["RRvRp/"]),
        accessibilityLabel: i.intl.string(i.t["RRvRp/"])
    } : t.isForumPost() ? {
        placeholder: i.intl.formatToPlainString(i.t.Y6qWLc, {
            channel: o
        }),
        accessibilityLabel: i.intl.formatToPlainString(i.t.KffKoR, {
            channel: s
        })
    } : l.kvI.THREADS.has(t.type) ? {
        placeholder: i.intl.formatToPlainString(i.t["8lzR/R"], {
            channel: o
        }),
        accessibilityLabel: i.intl.formatToPlainString(i.t.UZIMWS, {
            channel: s
        })
    } : t.type === l.rbe.DM ? {
        placeholder: i.intl.formatToPlainString(i.t["4c+CAx"], {
            channel: o
        }),
        accessibilityLabel: i.intl.formatToPlainString(i.t.fqOxbV, {
            channel: s
        })
    } : {
        placeholder: i.intl.formatToPlainString(i.t["8lzR/R"], {
            channel: o
        }),
        accessibilityLabel: i.intl.formatToPlainString(i.t.ih7ZSA, {
            channel: s
        })
    }
}