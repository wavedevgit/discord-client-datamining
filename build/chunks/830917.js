/** chunk id: 830917 params = (module,exports,require) **/
function n(t) {
    let {
        image: e,
        cropDimensions: i,
        cropOriginCoordinates: n,
        maxDimensions: a,
        imageRotation: r = 0
    } = t, h = e.naturalWidth / e.width, _ = function(t, e) {
        let {
            x: i,
            y: n
        } = t;
        switch (e) {
            case 90:
                return {
                    x: n, y: -i
                };
            case 180:
                return {
                    x: -i, y: -n
                };
            case 270:
                return {
                    x: -n, y: i
                };
            default:
                return {
                    x: i, y: n
                }
        }
    }(n, r), o = r % 180 != 0, d = i.width * h, u = i.height * h, l = Math.min(d, a.width), s = Math.min(u, a.height), c = (o ? i.height : i.width) / 2, g = (o ? i.width : i.height) / 2, m = (e.width / 2 - c - _.x) * h, w = (e.height / 2 - g - _.y) * h, y = o ? u : d, p = o ? d : u, {
        x: x,
        y: v
    } = function(t, e, i) {
        switch (i) {
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
    }(d, u, r);
    return a.width < d && (x *= a.width / d), a.height < u && (v *= a.height / u), {
        sourceX: m,
        sourceY: w,
        sourceWidth: y,
        sourceHeight: p,
        destinationX: x,
        destinationY: v,
        destinationWidth: o ? s : l,
        destinationHeight: o ? l : s,
        canvasWidth: l,
        canvasHeight: s
    }
}

function a(t) {
    let {
        image: e,
        cropDimensions: i,
        cropOriginCoordinates: a,
        maxDimensions: r,
        imageRotation: h = 0
    } = t, {
        sourceX: _,
        sourceY: o,
        sourceWidth: d,
        sourceHeight: u,
        destinationX: l,
        destinationY: s,
        destinationWidth: c,
        destinationHeight: g,
        canvasWidth: m,
        canvasHeight: w
    } = n({
        image: e,
        cropDimensions: i,
        cropOriginCoordinates: a,
        maxDimensions: r,
        imageRotation: h
    }), y = document.createElement("canvas");
    y.width = m, y.height = w;
    let p = y.getContext("2d");
    return null != p && (p.rotate(h * Math.PI / 180), p.drawImage(e, _, o, d, u, l, s, c, g)), y.toDataURL("image/png")
}

function r(t, e, i) {
    let n = t.naturalWidth / t.naturalHeight,
        r = e,
        h = i;
    t.naturalWidth > t.naturalHeight ? r /= n : h *= n;
    let _ = {
        height: r,
        width: h
    };
    return a({
        image: t,
        cropDimensions: {
            width: t.width,
            height: t.height
        },
        cropOriginCoordinates: {
            x: 0,
            y: 0
        },
        maxDimensions: _
    })
}
i.d(e, {
    R7: () => n,
    h_: () => r,
    iL: () => a
})