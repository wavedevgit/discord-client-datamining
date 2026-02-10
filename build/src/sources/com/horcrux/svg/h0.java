package com.horcrux.svg;

import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import com.horcrux.svg.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h0 extends c0 {

    /* renamed from: q  reason: collision with root package name */
    SVGLength f17783q;

    /* renamed from: r  reason: collision with root package name */
    SVGLength f17784r;

    /* renamed from: s  reason: collision with root package name */
    SVGLength f17785s;

    /* renamed from: t  reason: collision with root package name */
    SVGLength f17786t;

    /* renamed from: u  reason: collision with root package name */
    private a.b f17787u;

    /* renamed from: v  reason: collision with root package name */
    private a.b f17788v;

    /* renamed from: w  reason: collision with root package name */
    a f17789w;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        LUMINANCE,
        ALPHA
    }

    public h0(ReactContext reactContext) {
        super(reactContext);
    }

    public a o() {
        return this.f17789w;
    }

    public a.b p() {
        return this.f17787u;
    }

    public void q(Dynamic dynamic) {
        this.f17786t = SVGLength.b(dynamic);
        invalidate();
    }

    public void r(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17788v = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f17788v = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void s(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17789w = a.ALPHA;
            }
        } else {
            this.f17789w = a.LUMINANCE;
        }
        invalidate();
    }

    @Override // com.horcrux.svg.c0, com.horcrux.svg.VirtualView
    void saveDefinition() {
        if (this.mName != null) {
            getSvgView().defineMask(this, this.mName);
        }
    }

    public void t(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17787u = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f17787u = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void u(Dynamic dynamic) {
        this.f17785s = SVGLength.b(dynamic);
        invalidate();
    }

    public void v(Dynamic dynamic) {
        this.f17783q = SVGLength.b(dynamic);
        invalidate();
    }

    public void w(Dynamic dynamic) {
        this.f17784r = SVGLength.b(dynamic);
        invalidate();
    }
}
