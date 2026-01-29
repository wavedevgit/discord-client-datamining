package com.otaliastudios.zoom;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewTreeObserver;
import android.widget.FrameLayout;
import com.otaliastudios.zoom.ZoomEngine;
import com.otaliastudios.zoom.ZoomLogger;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ZoomLayout extends FrameLayout implements ViewTreeObserver.OnGlobalLayoutListener, c {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final ZoomLogger LOG;
    private static final String TAG;
    @NotNull
    private final ZoomEngine engine;
    private boolean hasClickableChildren;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements ZoomEngine.c {
        a() {
        }

        @Override // com.otaliastudios.zoom.ZoomEngine.c
        public void onIdle(ZoomEngine engine) {
            Intrinsics.checkNotNullParameter(engine, "engine");
        }

        @Override // com.otaliastudios.zoom.ZoomEngine.c
        public void onUpdate(ZoomEngine engine, Matrix matrix) {
            Intrinsics.checkNotNullParameter(engine, "engine");
            Intrinsics.checkNotNullParameter(matrix, "matrix");
            ZoomLayout.this.a();
        }
    }

    static {
        String TAG2 = ZoomLayout.class.getSimpleName();
        TAG = TAG2;
        ZoomLogger.a aVar = ZoomLogger.f18306b;
        Intrinsics.checkNotNullExpressionValue(TAG2, "TAG");
        LOG = aVar.a(TAG2);
    }

    private ZoomLayout(Context context, AttributeSet attributeSet, int i10, ZoomEngine zoomEngine) {
        super(context, attributeSet, i10);
        this.engine = zoomEngine;
        TypedArray obtainStyledAttributes = context.getTheme().obtainStyledAttributes(attributeSet, b.f18312a, i10, 0);
        Intrinsics.checkNotNullExpressionValue(obtainStyledAttributes, "context.theme.obtainStyledAttributes(attrs, R.styleable.ZoomEngine, defStyleAttr, 0)");
        boolean z10 = obtainStyledAttributes.getBoolean(b.f18325n, true);
        boolean z11 = obtainStyledAttributes.getBoolean(b.f18326o, true);
        boolean z12 = obtainStyledAttributes.getBoolean(b.f18318g, true);
        boolean z13 = obtainStyledAttributes.getBoolean(b.f18332u, true);
        boolean z14 = obtainStyledAttributes.getBoolean(b.f18324m, true);
        boolean z15 = obtainStyledAttributes.getBoolean(b.f18333v, true);
        boolean z16 = obtainStyledAttributes.getBoolean(b.f18316e, true);
        boolean z17 = obtainStyledAttributes.getBoolean(b.f18327p, true);
        boolean z18 = obtainStyledAttributes.getBoolean(b.f18323l, true);
        boolean z19 = obtainStyledAttributes.getBoolean(b.f18331t, true);
        boolean z20 = obtainStyledAttributes.getBoolean(b.f18328q, true);
        boolean z21 = obtainStyledAttributes.getBoolean(b.f18314c, true);
        boolean z22 = obtainStyledAttributes.getBoolean(b.f18317f, false);
        float f10 = obtainStyledAttributes.getFloat(b.f18321j, 0.8f);
        float f11 = obtainStyledAttributes.getFloat(b.f18319h, 2.5f);
        int integer = obtainStyledAttributes.getInteger(b.f18322k, 0);
        int integer2 = obtainStyledAttributes.getInteger(b.f18320i, 0);
        int integer3 = obtainStyledAttributes.getInteger(b.f18329r, 0);
        int i11 = obtainStyledAttributes.getInt(b.f18330s, 0);
        int i12 = obtainStyledAttributes.getInt(b.f18313b, 51);
        obtainStyledAttributes.recycle();
        zoomEngine.W(this);
        zoomEngine.l(new a());
        setTransformation(integer3, i11);
        setAlignment(i12);
        setOverScrollHorizontal(z10);
        setOverScrollVertical(z11);
        setHorizontalPanEnabled(z12);
        setVerticalPanEnabled(z13);
        setOverPinchable(z14);
        setZoomEnabled(z15);
        setFlingEnabled(z16);
        setScrollEnabled(z17);
        setOneFingerScrollEnabled(z18);
        setTwoFingersScrollEnabled(z19);
        setThreeFingersScrollEnabled(z20);
        setAllowFlingInOverscroll(z21);
        setAnimationDuration(obtainStyledAttributes.getInt(b.f18315d, 280));
        setMinZoom(f10, integer);
        setMaxZoom(f11, integer2);
        setHasClickableChildren(z22);
        setWillNotDraw(false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void a() {
        if (this.hasClickableChildren) {
            if (getChildCount() > 0) {
                View childAt = getChildAt(0);
                childAt.setPivotX(0.0f);
                childAt.setPivotY(0.0f);
                childAt.setTranslationX(this.engine.I());
                childAt.setTranslationY(this.engine.J());
                childAt.setScaleX(this.engine.G());
                childAt.setScaleY(this.engine.G());
            }
        } else {
            invalidate();
        }
        if ((isHorizontalScrollBarEnabled() || isVerticalScrollBarEnabled()) && !awakenScrollBars()) {
            invalidate();
        }
    }

    @Override // android.view.ViewGroup
    public void addView(View child, int i10, ViewGroup.LayoutParams params) {
        Intrinsics.checkNotNullParameter(child, "child");
        Intrinsics.checkNotNullParameter(params, "params");
        if (getChildCount() <= 0) {
            super.addView(child, i10, params);
            return;
        }
        throw new RuntimeException(Intrinsics.stringPlus(TAG, " accepts only a single child."));
    }

    public boolean cancelAnimations() {
        return this.engine.m();
    }

    @Override // android.view.View
    protected int computeHorizontalScrollOffset() {
        return this.engine.n();
    }

    @Override // android.view.View
    protected int computeHorizontalScrollRange() {
        return this.engine.o();
    }

    @Override // android.view.View
    protected int computeVerticalScrollOffset() {
        return this.engine.s();
    }

    @Override // android.view.View
    protected int computeVerticalScrollRange() {
        return this.engine.t();
    }

    @Override // android.view.ViewGroup
    protected boolean drawChild(@NotNull Canvas canvas, @NotNull View child, long j10) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        Intrinsics.checkNotNullParameter(child, "child");
        if (!this.hasClickableChildren) {
            int save = canvas.save();
            canvas.concat(this.engine.y());
            boolean drawChild = super.drawChild(canvas, child, j10);
            canvas.restoreToCount(save);
            return drawChild;
        }
        return super.drawChild(canvas, child, j10);
    }

    @NotNull
    public final ZoomEngine getEngine() {
        return this.engine;
    }

    public float getMaxZoom() {
        return this.engine.z();
    }

    public int getMaxZoomType() {
        return this.engine.A();
    }

    public float getMinZoom() {
        return this.engine.B();
    }

    public int getMinZoomType() {
        return this.engine.C();
    }

    @NotNull
    public AbsolutePoint getPan() {
        return this.engine.D();
    }

    public float getPanX() {
        return this.engine.E();
    }

    public float getPanY() {
        return this.engine.F();
    }

    public float getRealZoom() {
        return this.engine.G();
    }

    @NotNull
    public ScaledPoint getScaledPan() {
        return this.engine.H();
    }

    public float getScaledPanX() {
        return this.engine.I();
    }

    public float getScaledPanY() {
        return this.engine.J();
    }

    public float getZoom() {
        return this.engine.K();
    }

    public void moveTo(float f10, float f11, float f12, boolean z10) {
        this.engine.M(f10, f11, f12, z10);
    }

    public void moveToCenter(Float f10, boolean z10) {
        this.engine.N(f10, z10);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        getViewTreeObserver().addOnGlobalLayoutListener(this);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup, android.view.View
    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        getViewTreeObserver().removeOnGlobalLayoutListener(this);
    }

    public void onGlobalLayout() {
        if (getChildCount() == 0) {
            return;
        }
        View childAt = getChildAt(0);
        ZoomEngine.a0(this.engine, childAt.getWidth(), childAt.getHeight(), false, 4, null);
    }

    @Override // android.view.ViewGroup
    public boolean onInterceptTouchEvent(@NotNull MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        if (!this.engine.O(ev2)) {
            if (!this.hasClickableChildren || !super.onInterceptTouchEvent(ev2)) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // android.widget.FrameLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        int mode = View.MeasureSpec.getMode(i10);
        int mode2 = View.MeasureSpec.getMode(i11);
        if (mode != 0 && mode2 != 0) {
            setMeasuredDimension(View.MeasureSpec.getSize(i10), View.MeasureSpec.getSize(i11));
            int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(0, 0);
            measureChildren(makeMeasureSpec, makeMeasureSpec);
            return;
        }
        throw new RuntimeException(Intrinsics.stringPlus(TAG, " must be used with fixed dimensions (e.g. match_parent)"));
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent ev2) {
        Intrinsics.checkNotNullParameter(ev2, "ev");
        if (!this.engine.P(ev2)) {
            if (!this.hasClickableChildren || !super.onTouchEvent(ev2)) {
                return false;
            }
            return true;
        }
        return true;
    }

    public void panBy(float f10, float f11, boolean z10) {
        this.engine.Q(f10, f11, z10);
    }

    public void panTo(float f10, float f11, boolean z10) {
        this.engine.R(f10, f11, z10);
    }

    public void realZoomTo(float f10, boolean z10) {
        this.engine.S(f10, z10);
    }

    public void setAlignment(int i10) {
        this.engine.T(i10);
    }

    public void setAllowFlingInOverscroll(boolean z10) {
        this.engine.U(z10);
    }

    public void setAnimationDuration(long j10) {
        this.engine.V(j10);
    }

    public void setFlingEnabled(boolean z10) {
        this.engine.b0(z10);
    }

    public final void setHasClickableChildren(boolean z10) {
        LOG.b("setHasClickableChildren:", "old:", Boolean.valueOf(this.hasClickableChildren), "new:", Boolean.valueOf(z10));
        if (this.hasClickableChildren && !z10 && getChildCount() > 0) {
            View childAt = getChildAt(0);
            childAt.setScaleX(1.0f);
            childAt.setScaleY(1.0f);
            childAt.setTranslationX(0.0f);
            childAt.setTranslationY(0.0f);
        }
        this.hasClickableChildren = z10;
        if (getWidth() > 0 && getHeight() > 0) {
            if (this.hasClickableChildren) {
                a();
            } else {
                invalidate();
            }
        }
    }

    public void setHorizontalPanEnabled(boolean z10) {
        this.engine.c0(z10);
    }

    public void setMaxZoom(float f10) {
        this.engine.d0(f10);
    }

    public void setMinZoom(float f10) {
        this.engine.e0(f10);
    }

    public void setOneFingerScrollEnabled(boolean z10) {
        this.engine.f0(z10);
    }

    public void setOverPanRange(@NotNull OverPanRangeProvider provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.engine.g0(provider);
    }

    public void setOverPinchable(boolean z10) {
        this.engine.h0(z10);
    }

    public void setOverScrollHorizontal(boolean z10) {
        this.engine.i0(z10);
    }

    public void setOverScrollVertical(boolean z10) {
        this.engine.j0(z10);
    }

    public void setOverZoomRange(@NotNull OverZoomRangeProvider provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.engine.k0(provider);
    }

    public void setScrollEnabled(boolean z10) {
        this.engine.l0(z10);
    }

    public void setThreeFingersScrollEnabled(boolean z10) {
        this.engine.m0(z10);
    }

    public void setTransformation(int i10) {
        this.engine.n0(i10);
    }

    public void setTwoFingersScrollEnabled(boolean z10) {
        this.engine.o0(z10);
    }

    public void setVerticalPanEnabled(boolean z10) {
        this.engine.p0(z10);
    }

    public void setZoomEnabled(boolean z10) {
        this.engine.q0(z10);
    }

    public void zoomBy(float f10, boolean z10) {
        this.engine.r0(f10, z10);
    }

    public void zoomIn() {
        this.engine.s0();
    }

    public void zoomOut() {
        this.engine.t0();
    }

    public void zoomTo(float f10, boolean z10) {
        this.engine.u0(f10, z10);
    }

    @Override // com.otaliastudios.zoom.c
    public void setMaxZoom(float f10, int i10) {
        this.engine.setMaxZoom(f10, i10);
    }

    @Override // com.otaliastudios.zoom.c
    public void setMinZoom(float f10, int i10) {
        this.engine.setMinZoom(f10, i10);
    }

    @Override // com.otaliastudios.zoom.c
    public void setTransformation(int i10, int i11) {
        this.engine.setTransformation(i10, i11);
    }

    public /* synthetic */ ZoomLayout(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ZoomLayout(Context context, AttributeSet attributeSet, int i10) {
        this(context, attributeSet, i10, new ZoomEngine(context));
        Intrinsics.checkNotNullParameter(context, "context");
    }
}
