/** chunk id: 55294 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g,
    N: () => x
});
var i = n(64700),
    s = n(942381),
    l = n(465532),
    r = n(843472),
    a = n(608299),
    o = n(23658),
    c = n(425059),
    d = n(218152),
    u = n(451909),
    h = n(31717),
    A = n(522602),
    m = n(393309),
    _ = n(381941),
    p = n(985018);

function g(e) {
    let {
        parentChannel: t,
        parentMessageId: n,
        threadSettings: s,
        privateThreadMode: c,
        location: d,
        onThreadCreated: g,
        useDefaultThreadName: f
    } = e, x = i.useCallback((e, t, n, i) => {
        r.A.sendMessage(e.id, u.Ay.parse(e, n), void 0, {
            eagerDispatch: !1,
            location: _.Hx.THREAD_CREATION,
            stickerIds: i,
            attachmentsToUpload: t,
            onAttachmentUploadError: (i, s, r, c) => {
                (0, o.openUploadError)({
                    title: p.intl.string(p.t.B3vFdU),
                    help: c?.message ?? p.intl.string(p.t.zMEjJg)
                }), "" !== n && "" === h.A.getDraft(e.id, h.C.FirstThreadMessage) && l.A.saveDraft(e.id, n, h.C.FirstThreadMessage), 0 === A.A.getUploadCount(e.id, h.C.FirstThreadMessage) && a.A.setUploads({
                    channelId: e.id,
                    uploads: t,
                    draftType: h.C.FirstThreadMessage
                })
            }
        })
    }, []);
    return (0, m.r$)({
        parentChannel: t,
        parentMessageId: n,
        threadSettings: s,
        privateThreadMode: c,
        location: d,
        onThreadCreated: g,
        useDefaultThreadName: f,
        uploadHandler: x
    })
}
async function f(e) {
    let t = new c.A,
        n = await t.uploadFiles(e);
    return {
        uploaderFile: t._file,
        files: n
    }
}

function x(e) {
    let {
        parentChannel: t
    } = e, {
        name: n,
        appliedTags: i
    } = (0, d.kU)(e => {
        let {
            name: t,
            appliedTags: n
        } = e;
        return {
            name: t,
            appliedTags: n
        }
    }, s.x);
    return (0, m.w0)({
        parentChannel: t,
        name: n,
        appliedTags: i,
        upload: f
    })
}