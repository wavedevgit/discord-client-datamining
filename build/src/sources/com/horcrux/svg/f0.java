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
    private static final float[] f17518s = {1.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, 1.0f};

    /* renamed from: d  reason: collision with root package name */
    private SVGLength f17519d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f17520e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f17521i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f17522o;

    /* renamed from: p  reason: collision with root package name */
    private ReadableArray f17523p;

    /* renamed from: q  reason: collision with root package name */
    private a.b f17524q;

    /* renamed from: r  reason: collision with root package name */
    private Matrix f17525r;

    public f0(ReactContext reactContext) {
        super(reactContext);
        this.f17525r = null;
    }

    public void c(ReadableArray readableArray) {
        this.f17523p = readableArray;
        invalidate();
    }

    public void d(ReadableArray readableArray) {
        if (readableArray != null) {
            float[] fArr = f17518s;
            int c10 = n0.c(readableArray, fArr, this.mScale);
            if (c10 == 6) {
                if (this.f17525r == null) {
                    this.f17525r = new Matrix();
                }
                this.f17525r.setValues(fArr);
            } else if (c10 != -1) {
                p8.a.J(ReactConstants.TAG, "RNSVG: Transform matrices must be of size 6");
            }
        } else {
            this.f17525r = null;
        }
        invalidate();
    }

    public void e(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                this.f17524q = a.b.USER_SPACE_ON_USE;
            }
        } else {
            this.f17524q = a.b.OBJECT_BOUNDING_BOX;
        }
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f17519d = SVGLength.b(dynamic);
        invalidate();
    }

    public void g(Dynamic dynamic) {
        this.f17521i = SVGLength.b(dynamic);
        invalidate();
    }

    public void h(Dynamic dynamic) {
        this.f17520e = SVGLength.b(dynamic);
        invalidate();
    }

    public void i(Dynamic dynamic) {
        this.f17522o = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.VirtualView
    public void saveDefinition() {
        if (this.mName != null) {
            a aVar = new a(a.EnumC0206a.LINEAR_GRADIENT, new SVGLength[]{this.f17519d, this.f17520e, this.f17521i, this.f17522o}, this.f17524q);
            aVar.e(this.f17523p);
            Matrix matrix = this.f17525r;
            if (matrix != null) {
                aVar.f(matrix);
            }
            SvgView svgView = getSvgView();
            if (this.f17524q == a.b.USER_SPACE_ON_USE) {
                aVar.h(svgView.getCanvasBounds());
            }
            svgView.defineBrush(aVar, this.mName);
        }
    }
}
