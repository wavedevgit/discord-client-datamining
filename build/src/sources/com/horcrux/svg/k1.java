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
    private String f17833d;

    /* renamed from: e  reason: collision with root package name */
    private SVGLength f17834e;

    /* renamed from: i  reason: collision with root package name */
    private SVGLength f17835i;

    /* renamed from: o  reason: collision with root package name */
    private SVGLength f17836o;

    /* renamed from: p  reason: collision with root package name */
    private SVGLength f17837p;

    public k1(ReactContext reactContext) {
        super(reactContext);
    }

    public void d(Dynamic dynamic) {
        this.f17837p = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public void draw(Canvas canvas, Paint paint, float f10) {
        Canvas canvas2;
        Paint paint2;
        VirtualView definedTemplate = getSvgView().getDefinedTemplate(this.f17833d);
        if (definedTemplate == null) {
            q8.a.J(ReactConstants.TAG, "`Use` element expected a pre-defined svg template as `href` prop, template named: " + this.f17833d + " is not defined.");
            return;
        }
        definedTemplate.clearCache();
        canvas.translate((float) relativeOnWidth(this.f17834e), (float) relativeOnHeight(this.f17835i));
        boolean z10 = definedTemplate instanceof RenderableView;
        if (z10) {
            ((RenderableView) definedTemplate).mergeProperties(this);
        }
        int saveAndSetupCanvas = definedTemplate.saveAndSetupCanvas(canvas, this.mCTM);
        clip(canvas, paint);
        if (definedTemplate instanceof t0) {
            canvas2 = canvas;
            paint2 = paint;
            ((t0) definedTemplate).o(canvas2, paint2, f10, (float) relativeOnWidth(this.f17836o), (float) relativeOnHeight(this.f17837p));
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

    public void e(String str) {
        this.f17833d = str;
        invalidate();
    }

    public void f(Dynamic dynamic) {
        this.f17836o = SVGLength.b(dynamic);
        invalidate();
    }

    public void g(Dynamic dynamic) {
        this.f17834e = SVGLength.b(dynamic);
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public Path getPath(Canvas canvas, Paint paint) {
        VirtualView definedTemplate = getSvgView().getDefinedTemplate(this.f17833d);
        if (definedTemplate == null) {
            q8.a.J(ReactConstants.TAG, "`Use` element expected a pre-defined svg template as `href` prop, template named: " + this.f17833d + " is not defined.");
            return null;
        }
        Path path = definedTemplate.getPath(canvas, paint);
        Path path2 = new Path();
        Matrix matrix = new Matrix();
        matrix.setTranslate((float) relativeOnWidth(this.f17834e), (float) relativeOnHeight(this.f17835i));
        path.transform(matrix, path2);
        return path2;
    }

    public void h(Dynamic dynamic) {
        this.f17835i = SVGLength.b(dynamic);
        invalidate();
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
        VirtualView definedTemplate = getSvgView().getDefinedTemplate(this.f17833d);
        if (definedTemplate == null) {
            q8.a.J(ReactConstants.TAG, "`Use` element expected a pre-defined svg template as `href` prop, template named: " + this.f17833d + " is not defined.");
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
