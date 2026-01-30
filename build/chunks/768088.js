/** chunk id: 768088, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var i = n(205693),
    a = n(37965),
    o = n(709710),
    s = n(338771),
    l = n(975571),
    c = n(200749),
    u = n(652215),
    d = n(985018);

function f(e) {
    switch (null == e ? void 0 : e.type) {
        case o.iy.SCREENSHARE_OS_ERROR:
            return d.intl.format(d.t.e9LMuh, {
                errorMessage: e.errorMessage
            });
        case o.iy.STREAM_FAILED_TO_START:
        default:
            return d.intl.string(d.t.rSlOep)
    }
}

function p(e) {
    var t;
    let {
        stream: n,
        width: p,
        avError: _,
        avErrorContext: h,
        selected: m = !1,
        noArt: g = !1
    } = e, E = f(h), y = null == (t = (0, o.B1)(null != _ ? _ : o.iy.STREAM_FAILED_TO_START)) ? void 0 : t.errorCode;
    return (0, r.jsx)(c.A, {
        header: E,
        size: (0, c.J)(p),
        noArt: g,
        selected: m,
        description: d.intl.format(d.t.sXsgsP, {
            helpUrl: l.A.getArticleURL(u.MVz.STREAM_FAILED)
        }),
        errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, {
            errorCode: y
        }),
        onCTAClick: () => {
            (0, a.W)(i.x.STREAM, n.ownerId), (0, s.A)(n)
        },
        callToAction: d.intl.string(d.t["4EGMWL"])
    })
}