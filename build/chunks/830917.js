/** chunk id: 830917 params = (module,exports,require) **/
function a(t) {
    let {
        image: e,
        cropDimensions: i,
        cropOriginCoordinates: a,
        maxDimensions: n,
        imageRotation: r = 0,
        flipHorizontal: s = !1
    } = t, l = e.naturalWidth / e.width, o = function(t, e) {
        let i, a, {
                x: n,
                y: r
            } = t,
            s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        switch (e) {
            case 90:
                i = r, a = -n;
                break;
            case 180:
                i = -n, a = -r;
                break;
            case 270:
                i = -r, a = n;
                break;
            default:
                i = n, a = r
        }
        return {
            x: s ? -i : i,
            y: a
        }
    }(a, r, s), d = r % 180 != 0, c = i.width * l, u = i.height * l, _ = Math.min(c, n.width), h = Math.min(u, n.height), g = (d ? i.height : i.width) / 2, m = (d ? i.width : i.height) / 2, x = (e.width / 2 - g - o.x) * l, A = (e.height / 2 - m - o.y) * l, f = d ? u : c, b = d ? c : u, {
        x: v,
        y: N
    } = function(t, e, i) {
        let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (a) switch (i) {
            case 0:
                return {
                    x: -t, y: 0
                };
            case 90:
                return {
                    x: -e, y: -t
                };
            case 180:
                return {
                    x: 0, y: -e
                };
            case 270:
                return {
                    x: 0, y: 0
                }
        } else switch (i) {
            case 0:
                return {
                    x: 0, y: 0
                };
            case 90:
                return {
                    x: 0, y: -t
                };
            case 180:
                return {
                    x: -t, y: -e
                };
            case 270:
                return {
                    x: -e, y: 0
                }
        }
    }(c, u, r, s);
    return n.width < c && (v *= n.width / c), n.height < u && (N *= n.height / u), {
        sourceX: x,
        sourceY: A,
        sourceWidth: f,
        sourceHeight: b,
        destinationX: v,
        destinationY: N,
        destinationWidth: d ? h : _,
        destinationHeight: d ? _ : h,
        canvasWidth: _,
        canvasHeight: h
    }
}

function n(t) {
    let {
        image: e,
        cropDimensions: i,
        cropOriginCoordinates: n,
        maxDimensions: r,
        imageRotation: s = 0,
        flipHorizontal: l = !1
    } = t, {
        sourceX: o,
        sourceY: d,
        sourceWidth: c,
        sourceHeight: u,
        destinationX: _,
        destinationY: h,
        destinationWidth: g,
        destinationHeight: m,
        canvasWidth: x,
        canvasHeight: A
    } = a({
        image: e,
        cropDimensions: i,
        cropOriginCoordinates: n,
        maxDimensions: r,
        imageRotation: s,
        flipHorizontal: l
    }), f = document.createElement("canvas");
    f.width = x, f.height = A;
    let b = f.getContext("2d");
    if (null != b) {
        l && b.scale(-1, 1);
        let t = l ? -s : s;
        b.rotate(t * Math.PI / 180), b.drawImage(e, o, d, c, u, _, h, g, m)
    }
    return f.toDataURL("image/png")
}

function r(t, e, i) {
    let a = t.naturalWidth / t.naturalHeight,
        r = e,
        s = i;
    t.naturalWidth > t.naturalHeight ? r /= a : s *= a;
    let l = {
        height: r,
        width: s
    };
    return n({
        image: t,
        cropDimensions: {
            width: t.width,
            height: t.height
        },
        cropOriginCoordinates: {
            x: 0,
            y: 0
        },
        maxDimensions: l
    })
}
i.d(e, {
    R7: () => a,
    h_: () => r,
    iL: () => n
})