package com.horcrux.svg;

import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import com.horcrux.svg.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h0 extends c0 {

    /* renamed from: q  reason: collision with root package name */
    SVGLength f16914q;

    /* renamed from: r  reason: collision with root package name */
    SVGLength f16915r;

    /* renamed from: s  reason: collision with root package name */
    SVGLength f16916s;

    /* renamed from: t  reason: collision with root package name */
    SVGLength f16917t;

    /* renamed from: u  reason: collision with root package name */
    private a.b f16918u;

    /* renamed from: v  reason: collision with root package name */
    private a.b f16919v;

    /* renamed from: w  reason: collision with root package name */
    a f16920w;

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
        return this.f16920w;
    }

    public a.b o() {
        return this.f16918u;
    }

    public void p(Dynamic dynamic) {
        this.f16917t = SVGLength.b(dynamic);
        invalidate();
    }

    public void q(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f16919v = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f16919v = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void r(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f16920w = a.ALPHA;
            }
        } else {
            this.f16920w = a.LUMINANCE;
        }
        invalidate();
    }

    public void s(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f16918u = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f16918u = a.b.OBJECT_BOUNDING_BOX;
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
        this.f16916s = SVGLength.b(dynamic);
        invalidate();
    }

    public void u(Dynamic dynamic) {
        this.f16914q = SVGLength.b(dynamic);
        invalidate();
    }

    public void v(Dynamic dynamic) {
        this.f16915r = SVGLength.b(dynamic);
        invalidate();
    }
}
