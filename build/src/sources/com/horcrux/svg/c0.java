package com.horcrux.svg;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RectF;
import android.graphics.Region;
import android.view.View;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c0 extends RenderableView {

    /* renamed from: d  reason: collision with root package name */
    ReadableMap f16823d;

    /* renamed from: e  reason: collision with root package name */
    private a0 f16824e;

    /* renamed from: i  reason: collision with root package name */
    private Bitmap f16825i;

    /* renamed from: o  reason: collision with root package name */
    private Canvas f16826o;

    /* renamed from: p  reason: collision with root package name */
    private final Paint f16827p;

    public c0(ReactContext reactContext) {
        super(reactContext);
        this.f16827p = new Paint(1);
    }

    private static Object j(Object obj) {
        obj.getClass();
        return obj;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(Canvas canvas, Paint paint, float f10) {
        i();
        SvgView svgView = getSvgView();
        RectF rectF = new RectF();
        if (this.mOpacity != 1.0f) {
            Bitmap bitmap = this.f16825i;
            if (bitmap == null) {
                this.f16825i = Bitmap.createBitmap(canvas.getWidth(), canvas.getHeight(), Bitmap.Config.ARGB_8888);
                this.f16826o = new Canvas(this.f16825i);
            } else {
                bitmap.recycle();
                Bitmap createBitmap = Bitmap.createBitmap(canvas.getWidth(), canvas.getHeight(), Bitmap.Config.ARGB_8888);
                this.f16825i = createBitmap;
                this.f16826o.setBitmap(createBitmap);
            }
            this.f16826o.save();
            this.f16826o.setMatrix(canvas.getMatrix());
        } else {
            this.f16826o = canvas;
        }
        this.elements = new ArrayList<>();
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
                        int saveAndSetupCanvas = virtualView.saveAndSetupCanvas(this.f16826o, this.mCTM);
                        virtualView.render(this.f16826o, paint, f10);
                        RectF clientRect = virtualView.getClientRect();
                        if (clientRect != null) {
                            rectF.union(clientRect);
                        }
                        virtualView.restoreCanvas(this.f16826o, saveAndSetupCanvas);
                        if (z10) {
                            ((RenderableView) virtualView).resetProperties();
                        }
                        if (virtualView.isResponsible()) {
                            svgView.enableTouchEvents();
                        }
                        ArrayList<i0> arrayList = virtualView.elements;
                        if (arrayList != null) {
                            this.elements.addAll(arrayList);
                        }
                    }
                } else if (childAt instanceof SvgView) {
                    SvgView svgView2 = (SvgView) childAt;
                    if (svgView2.getChildCount() > 0) {
                        View childAt2 = svgView2.getChildAt(0);
                        if (childAt2 instanceof c0) {
                            ((c0) childAt2).mergeProperties(this);
                        }
                    }
                    svgView2.drawChildren(canvas);
                    if (svgView2.isResponsible()) {
                        svgView.enableTouchEvents();
                    }
                }
            }
        }
        if (this.mOpacity != 1.0f) {
            this.f16826o.restore();
            int save = canvas.save();
            canvas.setMatrix(null);
            this.f16827p.setAlpha((int) (this.mOpacity * 255.0f));
            Bitmap bitmap2 = this.f16825i;
            if (bitmap2 != null) {
                canvas.drawBitmap(bitmap2, 0.0f, 0.0f, this.f16827p);
            }
            canvas.restoreToCount(save);
        }
        setClientRect(rectF);
        h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(Canvas canvas, Paint paint, float f10) {
        super.draw(canvas, paint, f10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public void draw(Canvas canvas, Paint paint, float f10) {
        m(canvas);
        clip(canvas, paint);
        c(canvas, paint, f10);
        renderMarkers(canvas, paint, f10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0 e() {
        return this.f16824e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Path f(Canvas canvas, Paint paint, Region.Op op2) {
        Path path;
        Path path2 = new Path();
        Path.Op valueOf = Path.Op.valueOf(op2.name());
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            View childAt = getChildAt(i10);
            if (!(childAt instanceof h0) && (childAt instanceof VirtualView)) {
                VirtualView virtualView = (VirtualView) childAt;
                Matrix matrix = virtualView.mMatrix;
                if (virtualView instanceof c0) {
                    path = ((c0) virtualView).f(canvas, paint, op2);
                } else {
                    path = virtualView.getPath(canvas, paint);
                }
                path.transform(matrix);
                path2.op(path, valueOf);
            }
        }
        return path2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0 g() {
        return ((c0) j(getTextRoot())).e();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public Path getPath(Canvas canvas, Paint paint) {
        Path path = this.mPath;
        if (path != null) {
            return path;
        }
        this.mPath = new Path();
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            View childAt = getChildAt(i10);
            if (!(childAt instanceof h0) && (childAt instanceof VirtualView)) {
                VirtualView virtualView = (VirtualView) childAt;
                this.mPath.addPath(virtualView.getPath(canvas, paint), virtualView.mMatrix);
            }
        }
        return this.mPath;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h() {
        g().n();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView, com.horcrux.svg.VirtualView
    public int hitTest(float[] fArr) {
        int reactTagForTouch;
        VirtualView virtualView;
        int hitTest;
        if (!this.mInvertible) {
            return -1;
        }
        float[] fArr2 = new float[2];
        this.mInvMatrix.mapPoints(fArr2, fArr);
        this.mInvTransform.mapPoints(fArr2);
        int round = Math.round(fArr2[0]);
        int round2 = Math.round(fArr2[1]);
        Path clipPath = getClipPath();
        if (clipPath != null) {
            if (this.mClipRegionPath != clipPath) {
                this.mClipRegionPath = clipPath;
                RectF rectF = new RectF();
                this.mClipBounds = rectF;
                clipPath.computeBounds(rectF, true);
                this.mClipRegion = getRegion(clipPath, this.mClipBounds);
            }
            if (!this.mClipRegion.contains(round, round2)) {
                return -1;
            }
        }
        for (int childCount = getChildCount() - 1; childCount >= 0; childCount--) {
            View childAt = getChildAt(childCount);
            if (childAt instanceof VirtualView) {
                if (!(childAt instanceof h0) && (hitTest = (virtualView = (VirtualView) childAt).hitTest(fArr2)) != -1) {
                    if (!virtualView.isResponsible() && hitTest == childAt.getId()) {
                        return getId();
                    }
                    return hitTest;
                }
            } else if ((childAt instanceof SvgView) && (reactTagForTouch = ((SvgView) childAt).reactTagForTouch(fArr2[0], fArr2[1])) != childAt.getId()) {
                return reactTagForTouch;
            }
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i() {
        g().o(this, this.f16823d);
    }

    public void k(Dynamic dynamic) {
        if (dynamic.getType() == ReadableType.Map) {
            this.f16823d = dynamic.asMap();
        } else {
            this.f16823d = null;
        }
        invalidate();
    }

    public void l(ReadableMap readableMap) {
        this.f16823d = readableMap;
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(Canvas canvas) {
        RectF rectF = new RectF(canvas.getClipBounds());
        Matrix matrix = this.mMatrix;
        if (matrix != null) {
            matrix.mapRect(rectF);
        }
        this.f16824e = new a0(this.mScale, rectF.width(), rectF.height());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.RenderableView
    public void resetProperties() {
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            View childAt = getChildAt(i10);
            if (childAt instanceof RenderableView) {
                ((RenderableView) childAt).resetProperties();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.horcrux.svg.VirtualView
    public void saveDefinition() {
        if (this.mName != null) {
            getSvgView().defineTemplate(this, this.mName);
        }
        for (int i10 = 0; i10 < getChildCount(); i10++) {
            View childAt = getChildAt(i10);
            if (childAt instanceof VirtualView) {
                ((VirtualView) childAt).saveDefinition();
            }
        }
    }
}
