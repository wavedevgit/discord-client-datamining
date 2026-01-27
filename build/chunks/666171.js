/** Chunk was on 92917 **/
/** chunk id: 666171, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(896048);
var r = n(64700),
    i = n(157559),
    l = n(198982),
    a = n(306522),
    s = n(922482),
    o = n(985018);

function c(e, t) {
    let [n, c] = r.useState(!1);
    return {
        isLoading: n,
        downloadAttachment: r.useCallback(async n => {
            if (null != e && null != t) {
                c(!0);
                try {
                    let {
                        url: r
                    } = await a.P0({
                        guildId: e,
                        productId: t,
                        attachmentId: n
                    });
                    await s.R(r)
                } catch (t) {
                    let e = t instanceof l.LG ? t.getAnyErrorMessage() : void 0;
                    i.A.show({
                        title: o.intl.string(o.t.R0RpRX),
                        body: null != e ? e : o.intl.string(o.t.eAn6z2)
                    })
                } finally {
                    c(!1)
                }
            }
        }, [e, t])
    }
}