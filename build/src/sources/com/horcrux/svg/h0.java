package com.horcrux.svg;

import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import com.horcrux.svg.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h0 extends c0 {

    /* renamed from: q  reason: collision with root package name */
    SVGLength f17552q;

    /* renamed from: r  reason: collision with root package name */
    SVGLength f17553r;

    /* renamed from: s  reason: collision with root package name */
    SVGLength f17554s;

    /* renamed from: t  reason: collision with root package name */
    SVGLength f17555t;

    /* renamed from: u  reason: collision with root package name */
    private a.b f17556u;

    /* renamed from: v  reason: collision with root package name */
    private a.b f17557v;

    /* renamed from: w  reason: collision with root package name */
    a f17558w;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        LUMINANCE,
        ALPHA
    }

    public h0(ReactContext reactContext) {
        super(reactContext);
    }

    public a n() {
        return this.f17558w;
    }

    public a.b o() {
        return this.f17556u;
    }

    public void p(Dynamic dynamic) {
        this.f17555t = SVGLength.b(dynamic);
        invalidate();
    }

    public void q(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17557v = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f17557v = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void r(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17558w = a.ALPHA;
            }
        } else {
            this.f17558w = a.LUMINANCE;
        }
        invalidate();
    }

    public void s(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17556u = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f17556u = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    @Override // com.horcrux.svg.c0, com.horcrux.svg.VirtualView
    void saveDefinition() {
        if (this.mName != null) {
            getSvgView().defineMask(this, this.mName);
        }
    }

    public void t(Dynamic dynamic) {
        this.f17554s = SVGLength.b(dynamic);
        invalidate();
    }

    public void u(Dynamic dynamic) {
        this.f17552q = SVGLength.b(dynamic);
        invalidate();
    }

    public void v(Dynamic dynamic) {
        this.f17553r = SVGLength.b(dynamic);
        invalidate();
    }
}
