package com.horcrux.svg;

import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import com.horcrux.svg.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h0 extends c0 {

    /* renamed from: q  reason: collision with root package name */
    SVGLength f16894q;

    /* renamed from: r  reason: collision with root package name */
    SVGLength f16895r;

    /* renamed from: s  reason: collision with root package name */
    SVGLength f16896s;

    /* renamed from: t  reason: collision with root package name */
    SVGLength f16897t;

    /* renamed from: u  reason: collision with root package name */
    private a.b f16898u;

    /* renamed from: v  reason: collision with root package name */
    private a.b f16899v;

    /* renamed from: w  reason: collision with root package name */
    a f16900w;

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
        return this.f16900w;
    }

    public a.b o() {
        return this.f16898u;
    }

    public void p(Dynamic dynamic) {
        this.f16897t = SVGLength.b(dynamic);
        invalidate();
    }

    public void q(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f16899v = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f16899v = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void r(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f16900w = a.ALPHA;
            }
        } else {
            this.f16900w = a.LUMINANCE;
        }
        invalidate();
    }

    public void s(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f16898u = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f16898u = a.b.OBJECT_BOUNDING_BOX;
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
        this.f16896s = SVGLength.b(dynamic);
        invalidate();
    }

    public void u(Dynamic dynamic) {
        this.f16894q = SVGLength.b(dynamic);
        invalidate();
    }

    public void v(Dynamic dynamic) {
        this.f16895r = SVGLength.b(dynamic);
        invalidate();
    }
}
