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
    private static final float[] f17019u = {1.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, 1.0f};

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f17020d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f17021e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f17022i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f17023o;

    /* renamed from: p  reason: collision with root package name */
    private SVGLength f17024p;

    /* renamed from: q  reason: collision with root package name */
    private SVGLength f17025q;

    /* renamed from: r  reason: collision with root package name */
    private ReadableArray f17026r;

    /* renamed from: s  reason: collision with root package name */
    private a.b f17027s;

    /* renamed from: t  reason: collision with root package name */
    private Matrix f17028t;

    public q0(ReactContext reactContext) {
        super(reactContext);
        this.f17028t = null;
    }

    public void c(Dynamic dynamic) {
        this.f17024p = SVGLength.b(dynamic);
        invalidate();
    }

    public void d(Dynamic dynamic) {
        this.f17025q = SVGLength.b(dynamic);
        invalidate();
    }

    public void e(Dynamic dynamic) {
        this.f17020d = SVGLength.b(dynamic);
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f17021e = SVGLength.b(dynamic);
        invalidate();
    }

    public void g(ReadableArray readableArray) {
        this.f17026r = readableArray;
        invalidate();
    }

    public void h(ReadableArray readableArray) {
        if (readableArray != null) {
            float[] fArr = f17019u;
            int c10 = n0.c(readableArray, fArr, this.mScale);
            if (c10 == 6) {
                if (this.f17028t == null) {
                    this.f17028t = new Matrix();
                }
                this.f17028t.setValues(fArr);
            } else if (c10 != -1) {
                p8.a.J(ReactConstants.TAG, "RNSVG: Transform matrices must be of size 6");
            }
        } else {
            this.f17028t = null;
        }
        invalidate();
    }

    public void i(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17027s = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f17027s = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void j(Dynamic dynamic) {
        this.f17022i = SVGLength.b(dynamic);
        invalidate();
    }

    public void k(Dynamic dynamic) {
        this.f17023o = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.VirtualView
    public void saveDefinition() {
        if (this.mName != null) {
            a aVar = new a(a.EnumC0203a.RADIAL_GRADIENT, new SVGLength[]{this.f17020d, this.f17021e, this.f17022i, this.f17023o, this.f17024p, this.f17025q}, this.f17027s);
            aVar.e(this.f17026r);
            Matrix matrix = this.f17028t;
            if (matrix != null) {
                aVar.f(matrix);
            }
            SvgView svgView = getSvgView();
            if (this.f17027s == a.b.USER_SPACE_ON_USE) {
                aVar.h(svgView.getCanvasBounds());
            }
            svgView.defineBrush(aVar, this.mName);
        }
    }
}
