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
    private static final float[] f17750s = {1.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, 1.0f};

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f17751d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f17752e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f17753i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f17754o;

    /* renamed from: p  reason: collision with root package name */
    private ReadableArray f17755p;

    /* renamed from: q  reason: collision with root package name */
    private a.b f17756q;

    /* renamed from: r  reason: collision with root package name */
    private Matrix f17757r;

    public f0(ReactContext reactContext) {
        super(reactContext);
        this.f17757r = null;
    }

    public void d(ReadableArray readableArray) {
        this.f17755p = readableArray;
        invalidate();
    }

    public void e(ReadableArray readableArray) {
        if (readableArray != null) {
            float[] fArr = f17750s;
            int c10 = n0.c(readableArray, fArr, this.mScale);
            if (c10 == 6) {
                if (this.f17757r == null) {
                    this.f17757r = new Matrix();
                }
                this.f17757r.setValues(fArr);
            } else if (c10 != -1) {
                q8.a.J(ReactConstants.TAG, "RNSVG: Transform matrices must be of size 6");
            }
        } else {
            this.f17757r = null;
        }
        invalidate();
    }

    public void f(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17756q = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f17756q = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void g(Dynamic dynamic) {
        this.f17751d = SVGLength.b(dynamic);
        invalidate();
    }

    public void h(Dynamic dynamic) {
        this.f17753i = SVGLength.b(dynamic);
        invalidate();
    }

    public void i(Dynamic dynamic) {
        this.f17752e = SVGLength.b(dynamic);
        invalidate();
    }

    public void j(Dynamic dynamic) {
        this.f17754o = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.VirtualView
    public void saveDefinition() {
        if (this.mName != null) {
            a aVar = new a(a.EnumC0203a.LINEAR_GRADIENT, new SVGLength[]{this.f17751d, this.f17752e, this.f17753i, this.f17754o}, this.f17756q);
            aVar.e(this.f17755p);
            Matrix matrix = this.f17757r;
            if (matrix != null) {
                aVar.f(matrix);
            }
            SvgView svgView = getSvgView();
            if (this.f17756q == a.b.USER_SPACE_ON_USE) {
                aVar.h(svgView.getCanvasBounds());
            }
            svgView.defineBrush(aVar, this.mName);
        }
    }
}
