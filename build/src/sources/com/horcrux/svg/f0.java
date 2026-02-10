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
    private static final float[] f17749s = {1.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, 1.0f};

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f17750d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f17751e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f17752i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f17753o;

    /* renamed from: p  reason: collision with root package name */
    private ReadableArray f17754p;

    /* renamed from: q  reason: collision with root package name */
    private a.b f17755q;

    /* renamed from: r  reason: collision with root package name */
    private Matrix f17756r;

    public f0(ReactContext reactContext) {
        super(reactContext);
        this.f17756r = null;
    }

    public void d(ReadableArray readableArray) {
        this.f17754p = readableArray;
        invalidate();
    }

    public void e(ReadableArray readableArray) {
        if (readableArray != null) {
            float[] fArr = f17749s;
            int c10 = n0.c(readableArray, fArr, this.mScale);
            if (c10 == 6) {
                if (this.f17756r == null) {
                    this.f17756r = new Matrix();
                }
                this.f17756r.setValues(fArr);
            } else if (c10 != -1) {
                q8.a.J(ReactConstants.TAG, "RNSVG: Transform matrices must be of size 6");
            }
        } else {
            this.f17756r = null;
        }
        invalidate();
    }

    public void f(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17755q = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f17755q = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void g(Dynamic dynamic) {
        this.f17750d = SVGLength.b(dynamic);
        invalidate();
    }

    public void h(Dynamic dynamic) {
        this.f17752i = SVGLength.b(dynamic);
        invalidate();
    }

    public void i(Dynamic dynamic) {
        this.f17751e = SVGLength.b(dynamic);
        invalidate();
    }

    public void j(Dynamic dynamic) {
        this.f17753o = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.VirtualView
    public void saveDefinition() {
        if (this.mName != null) {
            a aVar = new a(a.EnumC0203a.LINEAR_GRADIENT, new SVGLength[]{this.f17750d, this.f17751e, this.f17752i, this.f17753o}, this.f17755q);
            aVar.e(this.f17754p);
            Matrix matrix = this.f17756r;
            if (matrix != null) {
                aVar.f(matrix);
            }
            SvgView svgView = getSvgView();
            if (this.f17755q == a.b.USER_SPACE_ON_USE) {
                aVar.h(svgView.getCanvasBounds());
            }
            svgView.defineBrush(aVar, this.mName);
        }
    }
}
