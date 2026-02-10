package com.horcrux.svg;

import android.graphics.Matrix;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.ReactConstants;
import com.horcrux.svg.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class q0 extends e {

    /* renamed from: u  reason: collision with root package name */
    private static final float[] f17888u = {1.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, 1.0f};

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f17889d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f17890e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f17891i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f17892o;

    /* renamed from: p  reason: collision with root package name */
    private SVGLength f17893p;

    /* renamed from: q  reason: collision with root package name */
    private SVGLength f17894q;

    /* renamed from: r  reason: collision with root package name */
    private ReadableArray f17895r;

    /* renamed from: s  reason: collision with root package name */
    private a.b f17896s;

    /* renamed from: t  reason: collision with root package name */
    private Matrix f17897t;

    public q0(ReactContext reactContext) {
        super(reactContext);
        this.f17897t = null;
    }

    public void d(Dynamic dynamic) {
        this.f17893p = SVGLength.b(dynamic);
        invalidate();
    }

    public void e(Dynamic dynamic) {
        this.f17894q = SVGLength.b(dynamic);
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f17889d = SVGLength.b(dynamic);
        invalidate();
    }

    public void g(Dynamic dynamic) {
        this.f17890e = SVGLength.b(dynamic);
        invalidate();
    }

    public void h(ReadableArray readableArray) {
        this.f17895r = readableArray;
        invalidate();
    }

    public void i(ReadableArray readableArray) {
        if (readableArray != null) {
            float[] fArr = f17888u;
            int c10 = n0.c(readableArray, fArr, this.mScale);
            if (c10 == 6) {
                if (this.f17897t == null) {
                    this.f17897t = new Matrix();
                }
                this.f17897t.setValues(fArr);
            } else if (c10 != -1) {
                q8.a.J(ReactConstants.TAG, "RNSVG: Transform matrices must be of size 6");
            }
        } else {
            this.f17897t = null;
        }
        invalidate();
    }

    public void j(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17896s = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f17896s = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void k(Dynamic dynamic) {
        this.f17891i = SVGLength.b(dynamic);
        invalidate();
    }

    public void l(Dynamic dynamic) {
        this.f17892o = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.VirtualView
    public void saveDefinition() {
        if (this.mName != null) {
            a aVar = new a(a.EnumC0203a.RADIAL_GRADIENT, new SVGLength[]{this.f17889d, this.f17890e, this.f17891i, this.f17892o, this.f17893p, this.f17894q}, this.f17896s);
            aVar.e(this.f17895r);
            Matrix matrix = this.f17897t;
            if (matrix != null) {
                aVar.f(matrix);
            }
            SvgView svgView = getSvgView();
            if (this.f17896s == a.b.USER_SPACE_ON_USE) {
                aVar.h(svgView.getCanvasBounds());
            }
            svgView.defineBrush(aVar, this.mName);
        }
    }
}
