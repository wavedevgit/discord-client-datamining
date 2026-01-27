/** Chunk was on web.js **/
/** chunk id: 39416, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n.d(t, {
    default: () => C,
    errors: () => N,
    load: () => w,
    loadView: () => H
});
var r = n(643479),
    i = n(504925),
    a = n(761799),
    o = n(723727),
    s = n(601205),
    l = n(664741),
    c = n(226601),
    u = n(344470),
    d = n(766493),
    f = n(525012),
    p = n(242389),
    _ = n(842962),
    h = n(312597),
    m = n(116811),
    g = n(124864),
    E = n(284776),
    y = n(201147),
    b = n(147687),
    O = n(205710),
    v = n(479533),
    A = n(67286),
    I = n(906037),
    S = n(306827),
    T = n(264572).Buffer;
let C = {
        load: w,
        loadView: H,
        errors: S.A
    },
    N = S.A;

function w(e, t = {}) {
    return R(e) ? (t.async = !0, P(e, t).then(e => F(e, t))) : U(e) ? (t.async = !0, G(e).then(e => F(e, t))) : F(e, t)
}

function R(e) {
    return "string" == typeof e
}

function P(e, t) {
    return /^\w+:\/\//.test(e) ? "u" > typeof fetch ? D(e, t) : L(e, t) : M(e) ? Promise.resolve((0, r.C5)(e)) : j(e, t)
}

function D(e, {
    length: t
} = {}) {
    let n = {
        method: "GET"
    };
    return Number.isInteger(t) && t >= 0 && (n.headers = {
        range: `bytes=0-${t-1}`
    }), fetch(e, n).then(e => e.arrayBuffer())
}

function L(e, {
    length: t
} = {}) {
    return new Promise((n, r) => {
        let i = {};
        Number.isInteger(t) && t >= 0 && (i.headers = {
            range: `bytes=0-${t-1}`
        }), x(e)(e, i, e => {
            if (e.statusCode >= 200 && e.statusCode <= 299) {
                let t = [];
                e.on("data", e => t.push(T.from(e))), e.on("error", e => r(e)), e.on("end", () => n(T.concat(t)))
            } else r(`Could not fetch file: ${e.statusCode} ${e.statusMessage}`), e.resume()
        }).on("error", e => r(e))
    })
}

function x(e) {
    return /^https:\/\//.test(e) ? require("https").get : require("http").get
}

function M(e) {
    return /^data:[^;,]*(;base64)?,/.test(e)
}

function j(e, {
    length: t
} = {}) {
    return new Promise((n, r) => {
        let i = k();
        i.open(e, (a, o) => {
            a ? r(a) : i.stat(e, (a, s) => {
                if (a) r(a);
                else {
                    let a = Math.min(s.size, void 0 !== t ? t : s.size),
                        l = T.alloc(a),
                        c = {
                            buffer: l,
                            length: a
                        };
                    i.read(o, c, t => {
                        t ? r(t) : i.close(o, t => {
                            t && console.warn(`Could not close file ${e}:`, t), n(l)
                        })
                    })
                }
            })
        })
    })
}

function k() {
    try {
        return require("fs")
    } catch (e) {
        return
    }
}

function U(e) {
    return "u" > typeof File && e instanceof File
}

function G(e) {
    return new Promise((t, n) => {
        let r = new FileReader;
        r.onload = e => t(e.target.result), r.onerror = () => n(r.error), r.readAsArrayBuffer(e)
    })
}

function F(e, t) {
    return V(e) && (e = new Uint8Array(e).buffer), H(B(e), t)
}

function V(e) {
    try {
        return T.isBuffer(e)
    } catch (e) {
        return !1
    }
}

function B(e) {
    try {
        return new DataView(e)
    } catch (t) {
        return new i.A(e)
    }
}

function H(e, {
    expanded: t = !1,
    async: n = !1,
    includeUnknown: i = !1,
    domParser: o
} = {
    expanded: !1,
    async: !1,
    includeUnknown: !1,
    domParser: void 0
}) {
    let T = !1,
        C = {},
        N = [],
        {
            fileType: w,
            fileDataOffset: R,
            jfifDataOffset: P,
            tiffHeaderOffset: D,
            iptcDataOffset: L,
            xmpChunks: x,
            iccChunks: M,
            mpfDataOffset: j,
            pngHeaderOffset: k,
            pngTextChunks: U,
            pngChunkOffsets: G,
            vp8xChunkOffset: F,
            gifHeaderOffset: V
        } = s.A.parseAppMarkers(e, n);
    if (a.A.USE_JPEG && a.A.USE_FILE && Y(R)) {
        T = !0;
        let n = u.A.read(e, R);
        t ? C.file = n : C = (0, r.dP)({}, C, n)
    }
    if (a.A.USE_JPEG && a.A.USE_JFIF && W(P)) {
        T = !0;
        let n = d.A.read(e, P);
        t ? C.jfif = n : C = (0, r.dP)({}, C, n)
    }
    if (a.A.USE_EXIF && K(D)) {
        T = !0;
        let {
            tags: n,
            byteOrder: s
        } = l.A.read(e, D, i);
        if (n.Thumbnail && (C.Thumbnail = n.Thumbnail, delete n.Thumbnail), t ? (C.exif = n, z(C)) : C = (0, r.dP)({}, C, n), a.A.USE_TIFF && a.A.USE_IPTC && n["IPTC-NAA"] && !q(L)) {
            let e = f.A.read(n["IPTC-NAA"].value, 0, i);
            t ? C.iptc = e : C = (0, r.dP)({}, C, e)
        }
        if (a.A.USE_TIFF && a.A.USE_XMP && n.ApplicationNotes && !Z(x)) {
            let e = p.A.read((0, r.YF)(n.ApplicationNotes.value), void 0, o);
            t ? C.xmp = e : (delete e._raw, C = (0, r.dP)({}, C, e))
        }
        if (a.A.USE_PHOTOSHOP && n.ImageSourceData && n.PhotoshopSettings) {
            let e = _.A.read(n.PhotoshopSettings.value, i);
            t ? C.photoshop = e : C = (0, r.dP)({}, C, e)
        }
        if (a.A.USE_TIFF && a.A.USE_ICC && n.ICC_Profile && !Q(M)) {
            let e = h.A.read(n.ICC_Profile.value, [{
                offset: 0,
                length: n.ICC_Profile.value.length,
                chunkNumber: 1,
                chunksTotal: 1
            }]);
            t ? C.icc = e : C = (0, r.dP)({}, C, e)
        }
        if (a.A.USE_MAKER_NOTES && n.MakerNote) {
            if (X(n)) {
                let a = m.A.read(e, D, n.MakerNote.__offset, s, i);
                t ? C.makerNotes = a : C = (0, r.dP)({}, C, a)
            } else if (J(n)) {
                let a = g.A.read(e, D, n.MakerNote.__offset, i);
                t ? C.makerNotes = a : C = (0, r.dP)({}, C, a)
            }
        }
        n.MakerNote && delete n.MakerNote.__offset
    }
    if (a.A.USE_JPEG && a.A.USE_IPTC && q(L)) {
        T = !0;
        let n = f.A.read(e, L, i);
        t ? C.iptc = n : C = (0, r.dP)({}, C, n)
    }
    if (a.A.USE_XMP && Z(x)) {
        T = !0;
        let n = p.A.read(e, x, o);
        t ? C.xmp = n : (delete n._raw, C = (0, r.dP)({}, C, n))
    }
    if ((a.A.USE_JPEG || a.A.USE_WEBP) && a.A.USE_ICC && Q(M)) {
        T = !0;
        let t = h.A.read(e, M, n);
        t instanceof Promise ? N.push(t.then(eo)) : eo(t)
    }
    if (a.A.USE_MPF && $(j)) {
        T = !0;
        let n = c.A.read(e, j, i);
        t ? C.mpf = n : C = (0, r.dP)({}, C, n)
    }
    if (a.A.USE_PNG && a.A.USE_PNG_FILE && ee(k)) {
        T = !0;
        let n = E.A.read(e, k);
        t ? (C.png = C.png ? (0, r.dP)({}, C.png, n) : n, C.pngFile = n) : C = (0, r.dP)({}, C, n)
    }
    if (a.A.USE_PNG && et(U)) {
        T = !0;
        let {
            readTags: t,
            readTagsPromise: r
        } = y.A.read(e, U, n, i);
        es(t), r && N.push(r.then(e => e.forEach(es)))
    }
    if (a.A.USE_PNG && en(G)) {
        T = !0;
        let n = b.A.read(e, G);
        t ? C.png = C.png ? (0, r.dP)({}, C.png, n) : n : C = (0, r.dP)({}, C, n)
    }
    if (a.A.USE_WEBP && er(F)) {
        T = !0;
        let n = O.A.read(e, F);
        t ? C.riff = C.riff ? (0, r.dP)({}, C.riff, n) : n : C = (0, r.dP)({}, C, n)
    }
    if (a.A.USE_GIF && ei(V)) {
        T = !0;
        let n = v.A.read(e, V);
        t ? C.gif = C.gif ? (0, r.dP)({}, C.gif, n) : n : C = (0, r.dP)({}, C, n)
    }
    let B = I.A.get(C, t);
    B && (t ? C.composite = B : C = (0, r.dP)({}, C, B));
    let ea = (a.A.USE_JPEG || a.A.USE_WEBP) && a.A.USE_EXIF && a.A.USE_THUMBNAIL && A.A.get(e, C.Thumbnail, D);
    if (ea ? (T = !0, C.Thumbnail = ea) : delete C.Thumbnail, w && (t ? (C.file || (C.file = {}), C.file.FileType = w) : C.FileType = w, T = !0), !T) throw new S.A.MetadataMissingError;
    if (n) return Promise.all(N).then(() => C);
    return C;

    function eo(e) {
        t ? C.icc = e : C = (0, r.dP)({}, C, e)
    }

    function es(e) {
        if (t) {
            for (let t of ["exif", "iptc"]) {
                let n = `__${t}`;
                e[n] && (C[t] = C[t] ? (0, r.dP)({}, C.exif, e[n]) : e[n], delete e[n])
            }
            C.png = C.png ? (0, r.dP)({}, C.png, e) : e, C.pngText = C.pngText ? (0, r.dP)({}, C.png, e) : e
        } else C = (0, r.dP)({}, C, e.__exif ? e.__exif : {}, e.__iptc ? e.__iptc : {}, e), delete C.__exif, delete C.__iptc
    }
}

function Y(e) {
    return void 0 !== e
}

function W(e) {
    return void 0 !== e
}

function K(e) {
    return void 0 !== e
}

function z(e) {
    if (e.exif) {
        if (e.exif.GPSLatitude && e.exif.GPSLatitudeRef) try {
            e.gps = e.gps || {}, e.gps.Latitude = (0, o.e7)(e.exif.GPSLatitude.value), "S" === e.exif.GPSLatitudeRef.value.join("") && (e.gps.Latitude = -e.gps.Latitude)
        } catch (e) {}
        if (e.exif.GPSLongitude && e.exif.GPSLongitudeRef) try {
            e.gps = e.gps || {}, e.gps.Longitude = (0, o.e7)(e.exif.GPSLongitude.value), "W" === e.exif.GPSLongitudeRef.value.join("") && (e.gps.Longitude = -e.gps.Longitude)
        } catch (e) {}
        if (e.exif.GPSAltitude && e.exif.GPSAltitudeRef) try {
            e.gps = e.gps || {}, e.gps.Altitude = e.exif.GPSAltitude.value[0] / e.exif.GPSAltitude.value[1], 1 === e.exif.GPSAltitudeRef.value && (e.gps.Altitude = -e.gps.Altitude)
        } catch (e) {}
    }
}

function q(e) {
    return void 0 !== e
}

function Z(e) {
    return Array.isArray(e) && e.length > 0
}

function Q(e) {
    return Array.isArray(e) && e.length > 0
}

function X(e) {
    return e.Make && e.Make.value && Array.isArray(e.Make.value) && "Canon" === e.Make.value[0] && e.MakerNote && e.MakerNote.__offset
}

function J(e) {
    let t = "PENTAX ";
    return e.MakerNote.value.length > t.length && (0, r.YF)(e.MakerNote.value.slice(0, t.length)) === t && e.MakerNote.__offset
}

function $(e) {
    return void 0 !== e
}

function ee(e) {
    return void 0 !== e
}

function et(e) {
    return void 0 !== e
}

function en(e) {
    return void 0 !== e
}

function er(e) {
    return void 0 !== e
}

function ei(e) {
    return void 0 !== e
}