package com.horcrux.svg;

import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import com.horcrux.svg.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h0 extends c0 {

    /* renamed from: q  reason: collision with root package name */
    SVGLength f17923q;

    /* renamed from: r  reason: collision with root package name */
    SVGLength f17924r;

    /* renamed from: s  reason: collision with root package name */
    SVGLength f17925s;

    /* renamed from: t  reason: collision with root package name */
    SVGLength f17926t;

    /* renamed from: u  reason: collision with root package name */
    private a.b f17927u;

    /* renamed from: v  reason: collision with root package name */
    private a.b f17928v;

    /* renamed from: w  reason: collision with root package name */
    a f17929w;

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
        return this.f17929w;
    }

    public a.b o() {
        return this.f17927u;
    }

    public void p(Dynamic dynamic) {
        this.f17926t = SVGLength.b(dynamic);
        invalidate();
    }

    public void q(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17928v = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f17928v = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void r(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17929w = a.ALPHA;
            }
        } else {
            this.f17929w = a.LUMINANCE;
        }
        invalidate();
    }

    public void s(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17927u = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f17927u = a.b.OBJECT_BOUNDING_BOX;
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
        this.f17925s = SVGLength.b(dynamic);
        invalidate();
    }

    public void u(Dynamic dynamic) {
        this.f17923q = SVGLength.b(dynamic);
        invalidate();
    }

    public void v(Dynamic dynamic) {
        this.f17924r = SVGLength.b(dynamic);
        invalidate();
    }
}
