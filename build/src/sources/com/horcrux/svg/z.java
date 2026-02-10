package com.horcrux.svg;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.RectF;
import android.view.View;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.ViewProps;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class z extends c0 {

    /* renamed from: q  reason: collision with root package name */
    SVGLength f17241q;

    /* renamed from: r  reason: collision with root package name */
    SVGLength f17242r;

    /* renamed from: s  reason: collision with root package name */
    SVGLength f17243s;

    /* renamed from: t  reason: collision with root package name */
    SVGLength f17244t;

    /* renamed from: u  reason: collision with root package name */
    Bitmap f17245u;

    /* renamed from: v  reason: collision with root package name */
    Canvas f17246v;

    public z(ReactContext reactContext) {
        super(reactContext);
        this.f17245u = Bitmap.createBitmap(1, 1, Bitmap.Config.ARGB_8888);
        this.f17246v = new Canvas(this.f17245u);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.c0
    public void c(Canvas canvas, Paint paint, float f10) {
        i();
        SvgView svgView = getSvgView();
        RectF rectF = new RectF();
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            View childAt = getChildAt(i10);
            if (!(childAt instanceof h0)) {
                if (childAt instanceof VirtualView) {
                    VirtualView virtualView = (VirtualView) childAt;
                    if (!ViewProps.NONE.equals(virtualView.mDisplay)) {
                        boolean z10 = virtualView instanceof RenderableView;
                        if (z10) {
                            ((RenderableView) virtualView).mergeProperties(this);
                        }
                        int saveAndSetupCanvas = virtualView.saveAndSetupCanvas(canvas, this.mCTM);
                        virtualView.render(canvas, paint, this.mOpacity * f10);
                        RectF clientRect = virtualView.getClientRect();
                        if (clientRect != null) {
                            rectF.union(clientRect);
                        }
                        virtualView.restoreCanvas(canvas, saveAndSetupCanvas);
                        if (z10) {
                            ((RenderableView) virtualView).resetProperties();
                        }
                        if (virtualView.isResponsible()) {
                            svgView.enableTouchEvents();
                        }
                    }
                } else if (childAt instanceof SvgView) {
                    SvgView svgView2 = (SvgView) childAt;
                    svgView2.drawChildren(canvas);
                    if (svgView2.isResponsible()) {
                        svgView.enableTouchEvents();
                    }
                } else {
                    childAt.draw(canvas);
                }
            }
        }
        setClientRect(rectF);
        h();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void dispatchDraw(Canvas canvas) {
        super.dispatchDraw(this.f17246v);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.c0, com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public void draw(Canvas canvas, Paint paint, float f10) {
        canvas.translate((float) relativeOnWidth(this.f17241q), (float) relativeOnHeight(this.f17242r));
        canvas.clipRect(0.0f, 0.0f, (float) relativeOnWidth(this.f17243s), (float) relativeOnHeight(this.f17244t));
        super.draw(canvas, paint, f10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup
    public boolean drawChild(Canvas canvas, View view, long j10) {
        return super.drawChild(this.f17246v, view, j10);
    }

    public void n(Dynamic dynamic) {
        this.f17244t = SVGLength.b(dynamic);
        invalidate();
    }

    public void o(Dynamic dynamic) {
        this.f17243s = SVGLength.b(dynamic);
        invalidate();
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void onDescendantInvalidated(View view, View view2) {
        super.onDescendantInvalidated(view, view2);
        invalidate();
    }

    public void p(Dynamic dynamic) {
        this.f17241q = SVGLength.b(dynamic);
        invalidate();
    }

    public void q(Dynamic dynamic) {
        this.f17242r = SVGLength.b(dynamic);
        invalidate();
    }
}
