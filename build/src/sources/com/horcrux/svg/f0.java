package com.horcrux.svg;

import android.graphics.Matrix;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.ReactConstants;
import com.horcrux.svg.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f0 extends e {

    /* renamed from: s  reason: collision with root package name */
    private static final float[] f16860s = {1.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, 1.0f};

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f16861d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f16862e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f16863i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f16864o;

    /* renamed from: p  reason: collision with root package name */
    private ReadableArray f16865p;

    /* renamed from: q  reason: collision with root package name */
    private a.b f16866q;

    /* renamed from: r  reason: collision with root package name */
    private Matrix f16867r;

    public f0(ReactContext reactContext) {
        super(reactContext);
        this.f16867r = null;
    }

    public void c(ReadableArray readableArray) {
        this.f16865p = readableArray;
        invalidate();
    }

    public void d(ReadableArray readableArray) {
        if (readableArray != null) {
            float[] fArr = f16860s;
            int c10 = n0.c(readableArray, fArr, this.mScale);
            if (c10 == 6) {
                if (this.f16867r == null) {
                    this.f16867r = new Matrix();
                }
                this.f16867r.setValues(fArr);
            } else if (c10 != -1) {
                p8.a.J(ReactConstants.TAG, "RNSVG: Transform matrices must be of size 6");
            }
        } else {
            this.f16867r = null;
        }
        invalidate();
    }

    public void e(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f16866q = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f16866q = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f16861d = SVGLength.b(dynamic);
        invalidate();
    }

    public void g(Dynamic dynamic) {
        this.f16863i = SVGLength.b(dynamic);
        invalidate();
    }

    public void h(Dynamic dynamic) {
        this.f16862e = SVGLength.b(dynamic);
        invalidate();
    }

    public void i(Dynamic dynamic) {
        this.f16864o = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.VirtualView
    public void saveDefinition() {
        if (this.mName != null) {
            a aVar = new a(a.EnumC0195a.LINEAR_GRADIENT, new SVGLength[]{this.f16861d, this.f16862e, this.f16863i, this.f16864o}, this.f16866q);
            aVar.e(this.f16865p);
            Matrix matrix = this.f16867r;
            if (matrix != null) {
                aVar.f(matrix);
            }
            SvgView svgView = getSvgView();
            if (this.f16866q == a.b.USER_SPACE_ON_USE) {
                aVar.h(svgView.getCanvasBounds());
            }
            svgView.defineBrush(aVar, this.mName);
        }
    }
}
