/** chunk id: 518960 params = (module,exports,require) **/
n.d(t, {
    R: () => v,
    V: () => E
});
var r = n(367513),
    i = n(843472),
    a = n(608299),
    o = n(23658),
    l = n(743445),
    _ = n(565150),
    c = n(58149),
    d = n(313961),
    s = n(301169),
    u = n(522602),
    p = n(287809),
    m = n(954571),
    f = n(453771),
    b = n(927578),
    C = n(382287),
    I = n(652215),
    g = n(381941),
    h = n(788868),
    T = n(985018);

function E(e, t, n) {
    let r = p.default.getCurrentUser(),
        i = e.guild_id,
        a = f.o2(i),
        l = Array.from(t).map(e => e.size),
        _ = Array.from(t).map(e => null != e.type ? e.type : "unknown"),
        d = l.reduce((e, t) => e + t, 0),
        s = l.length > 0 ? Math.max(...l) : 0,
        u = l.length;
    if (s > a) {
        let t = n?.reduce((e, t) => e + t, 0);
        (0, c.zV)(I.HAw.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: i,
            user_individual_file_size_limit: a,
            pre_compression_file_sizes: l,
            pre_compression_aggregate_file_size: d,
            num_attachments: u,
            error_type: g.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: _,
            post_compression_file_sizes: n,
            post_compression_aggregate_file_size: t
        }), (0, o.openUploadError)({
            title: T.intl.string(T.t["/tGlcj"]),
            help: (0, C.WQ)(r, i),
            showPremiumUpsell: !(0, b.YE)(r, h.PremiumTypes.TIER_2),
            fileSize: s
        });
        return
    }(0, o.openUploadError)({
        title: T.intl.string(T.t["/tGlcj"]),
        help: T.intl.formatToPlainString(T.t.tUOJdH, {
            maxSize: f.Hb(f.bB())
        })
    })
}
async function v(e, t, n) {
    let {
        filesMetadata: c,
        requireConfirm: p = !0,
        isThumbnail: f = !1,
        origin: b
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != c && c.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let h = t.getGuildId(),
        v = Array.from(e),
        x = v.map(e => ({
            originalContentType: e.type,
            preCompressionSize: e.size
        }));
    if (await Promise.resolve(), (0, C.fJ)(v, h)) return void E(t, v);
    if (u.A.getUploadCount(t.id, n) + v.length > I.XgB) {
        (0, o.openUploadError)({
            title: T.intl.string(T.t.wOr6hB),
            help: T.intl.formatToPlainString(T.t["qqyp/e"], {
                limit: I.XgB
            })
        }), m.default.track(I.HAw.UPLOAD_FILE_LIMIT_ERROR, {
            existing_count: u.A.getUploadCount(t.id, n),
            new_count: v.length
        });
        return
    }
    if (t.type !== I.rbe.GUILD_VOICE && t.type !== I.rbe.GUILD_STAGE_VOICE || d.A.getChatOpen(t.id) || r.A.updateChatOpen(t.id, !0), p) {
        let e = v.map((e, t) => ({
            file: e,
            platform: _.xz.WEB,
            isThumbnail: f,
            origin: b,
            compressionMetadata: x[t],
            ...c?.[t]
        }));
        a.A.addFiles({
            files: e,
            channelId: t.id,
            draftType: n
        })
    } else {
        let e = v.map((e, n) => {
            let r = null != c ? c[n] : {};
            return new l.bK({
                file: e,
                platform: _.xz.WEB,
                isThumbnail: f,
                origin: b,
                compressionMetadata: x[n],
                ...r
            }, t.id)
        });
        i.A.sendMessage(t.id, {
            content: "",
            tts: !1,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: g.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, n, r) => {
                (0, s.k)({
                    file: e,
                    guildId: t.getGuildId(),
                    analyticsLocations: [],
                    code: n,
                    reason: r
                })
            }
        })
    }
}