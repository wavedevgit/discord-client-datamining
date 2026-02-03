package com.horcrux.svg;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RectF;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.common.ReactConstants;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class k1 extends RenderableView {

    /* renamed from: d  reason: collision with root package name */
    private String f16570d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f16571e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f16572i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f16573o;

    /* renamed from: p  reason: collision with root package name */
    private SVGLength f16574p;

    public k1(ReactContext reactContext) {
        super(reactContext);
    }

    public void c(Dynamic dynamic) {
        this.f16574p = SVGLength.b(dynamic);
        invalidate();
    }

    public void d(String str) {
        this.f16570d = str;
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public void draw(Canvas canvas, Paint paint, float f10) {
        Canvas canvas2;
        Paint paint2;
        VirtualView definedTemplate = getSvgView().getDefinedTemplate(this.f16570d);
        if (definedTemplate == null) {
            p8.a.J(ReactConstants.TAG, "`Use` element expected a pre-defined svg template as `href` prop, template named: " + this.f16570d + " is not defined.");
            return;
        }
        definedTemplate.clearCache();
        canvas.translate((float) relativeOnWidth(this.f16571e), (float) relativeOnHeight(this.f16572i));
        boolean z10 = definedTemplate instanceof RenderableView;
        if (z10) {
            ((RenderableView) definedTemplate).mergeProperties(this);
        }
        int saveAndSetupCanvas = definedTemplate.saveAndSetupCanvas(canvas, this.mCTM);
        clip(canvas, paint);
        if (definedTemplate instanceof t0) {
            canvas2 = canvas;
            paint2 = paint;
            ((t0) definedTemplate).n(canvas2, paint2, f10, (float) relativeOnWidth(this.f16573o), (float) relativeOnHeight(this.f16574p));
        } else {
            canvas2 = canvas;
            paint2 = paint;
            definedTemplate.draw(canvas2, paint2, f10 * this.mOpacity);
        }
        RectF rectF = new RectF();
        getPath(canvas2, paint2).computeBounds(rectF, true);
        canvas2.getMatrix().mapRect(rectF);
        setClientRect(rectF);
        definedTemplate.restoreCanvas(canvas2, saveAndSetupCanvas);
        if (z10) {
            ((RenderableView) definedTemplate).resetProperties();
        }
    }

    public void e(Dynamic dynamic) {
        this.f16573o = SVGLength.b(dynamic);
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f16571e = SVGLength.b(dynamic);
        invalidate();
    }

    public void g(Dynamic dynamic) {
        this.f16572i = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public Path getPath(Canvas canvas, Paint paint) {
        VirtualView definedTemplate = getSvgView().getDefinedTemplate(this.f16570d);
        if (definedTemplate == null) {
            p8.a.J(ReactConstants.TAG, "`Use` element expected a pre-defined svg template as `href` prop, template named: " + this.f16570d + " is not defined.");
            return null;
        }
        Path path = definedTemplate.getPath(canvas, paint);
        Path path2 = new Path();
        Matrix matrix = new Matrix();
        matrix.setTranslate((float) relativeOnWidth(this.f16571e), (float) relativeOnHeight(this.f16572i));
        path.transform(matrix, path2);
        return path2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public int hitTest(float[] fArr) {
        if (!this.mInvertible) {
            return -1;
        }
        float[] fArr2 = new float[2];
        this.mInvMatrix.mapPoints(fArr2, fArr);
        this.mInvTransform.mapPoints(fArr2);
        VirtualView definedTemplate = getSvgView().getDefinedTemplate(this.f16570d);
        if (definedTemplate == null) {
            p8.a.J(ReactConstants.TAG, "`Use` element expected a pre-defined svg template as `href` prop, template named: " + this.f16570d + " is not defined.");
            return -1;
        }
        int hitTest = definedTemplate.hitTest(fArr2);
        if (hitTest == -1) {
            return -1;
        }
        if (!definedTemplate.isResponsible() && hitTest == definedTemplate.getId()) {
            return getId();
        }
        return hitTest;
    }
}
