/** Chunk was on web.js **/
/** chunk id: 301169, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    k: () => s
});
var r = n(579872),
    i = n(453771),
    a = n(652215),
    o = n(985018);

function s(e) {
    let {
        guildId: t,
        code: n
    } = e;
    if (n === a.t02.ENTITY_TOO_LARGE) {
        let e = (0, i.o2)(t);
        return r.A.show({
            title: o.intl.string(o.t["/tGlcj"]),
            body: o.intl.formatToPlainString(o.t.fxEKdS, {
                maxSize: (0, i.Hb)(e)
            })
        }), !0
    }
    return n === a.t02.TOO_MANY_ATTACHMENTS ? (r.A.show({
        title: o.intl.string(o.t.wOr6hB),
        body: o.intl.formatToPlainString(o.t["qqyp/e"], {
            limit: a.XgB
        })
    }), !0) : n === a.t02.ENTITY_EMPTY ? (r.A.show({
        title: o.intl.string(o.t.B3vFdU),
        body: o.intl.string(o.t["9ZpT2C"])
    }), !0) : n === a.t02.INVALID_FILE_ASSET && (r.A.show({
        title: o.intl.string(o.t.B3vFdU),
        body: o.intl.string(o.t.zMEjJg)
    }), !0)
}