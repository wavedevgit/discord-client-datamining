package com.withpersona.sdk2.inquiry.governmentid.view;

import android.animation.ValueAnimator;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.SweepGradient;
import android.util.AttributeSet;
import android.view.View;
import android.view.animation.LinearInterpolator;
import com.facebook.react.uimanager.ViewProps;
import com.withpersona.sdk2.inquiry.governmentid.view.ScanningView;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import mp.h;
import mp.s;
@Metadata(d1 = {"\u0000f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u0007\n\u0002\b\u000b\n\u0002\u0010\u000b\n\u0002\b\u0017\u0018\u0000 P2\u00020\u0001:\u0001QB\u001d\b\u0016\u0012\b\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u000f\u0010\t\u001a\u00020\bH\u0002¢\u0006\u0004\b\t\u0010\nJ\u000f\u0010\f\u001a\u00020\u000bH\u0002¢\u0006\u0004\b\f\u0010\rJ\u000f\u0010\u000f\u001a\u00020\u000eH\u0002¢\u0006\u0004\b\u000f\u0010\u0010J\u000f\u0010\u0011\u001a\u00020\u000eH\u0002¢\u0006\u0004\b\u0011\u0010\u0010J\u000f\u0010\u0012\u001a\u00020\u000eH\u0002¢\u0006\u0004\b\u0012\u0010\u0010J/\u0010\u0018\u001a\u00020\u000e2\u0006\u0010\u0014\u001a\u00020\u00132\u0006\u0010\u0015\u001a\u00020\u00132\u0006\u0010\u0016\u001a\u00020\u00132\u0006\u0010\u0017\u001a\u00020\u0013H\u0014¢\u0006\u0004\b\u0018\u0010\u0019J\u0017\u0010\u001c\u001a\u00020\u000e2\u0006\u0010\u001b\u001a\u00020\u001aH\u0014¢\u0006\u0004\b\u001c\u0010\u001dJ\u000f\u0010\u001e\u001a\u00020\u000eH\u0014¢\u0006\u0004\b\u001e\u0010\u0010R\u0014\u0010!\u001a\u00020\u001f8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u000f\u0010 R\u0014\u0010$\u001a\u00020\"8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0012\u0010#R\u0016\u0010'\u001a\u00020\u000b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b%\u0010&R\u0014\u0010+\u001a\u00020(8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010*R\u0016\u0010.\u001a\u00020\b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b,\u0010-R$\u00105\u001a\u00020/2\u0006\u00100\u001a\u00020/8\u0002@BX\u0082\u000e¢\u0006\f\n\u0004\b1\u00102\"\u0004\b3\u00104R*\u0010:\u001a\u00020/2\u0006\u00100\u001a\u00020/8\u0006@FX\u0086\u000e¢\u0006\u0012\n\u0004\b6\u00102\u001a\u0004\b7\u00108\"\u0004\b9\u00104R*\u0010>\u001a\u00020;2\u0006\u00100\u001a\u00020;8\u0006@FX\u0086\u000e¢\u0006\u0012\n\u0004\b<\u0010=\u001a\u0004\b>\u0010?\"\u0004\b@\u0010AR*\u0010H\u001a\u00020\u00132\u0006\u00100\u001a\u00020\u00138\u0006@FX\u0087\u000e¢\u0006\u0012\n\u0004\bB\u0010C\u001a\u0004\bD\u0010E\"\u0004\bF\u0010GR*\u0010L\u001a\u00020\u00132\u0006\u00100\u001a\u00020\u00138\u0006@FX\u0087\u000e¢\u0006\u0012\n\u0004\bI\u0010C\u001a\u0004\bJ\u0010E\"\u0004\bK\u0010GR$\u0010O\u001a\u00020/2\u0006\u00100\u001a\u00020/8F@FX\u0086\u000e¢\u0006\f\u001a\u0004\bM\u00108\"\u0004\bN\u00104¨\u0006R"}, d2 = {"Lcom/withpersona/sdk2/inquiry/governmentid/view/ScanningView;", "Landroid/view/View;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "Landroid/graphics/Path;", "c", "()Landroid/graphics/Path;", "Landroid/graphics/SweepGradient;", "b", "()Landroid/graphics/SweepGradient;", "", "d", "()V", "f", "e", "", "w", "h", "oldw", "oldh", "onSizeChanged", "(IIII)V", "Landroid/graphics/Canvas;", "canvas", "onDraw", "(Landroid/graphics/Canvas;)V", "onDetachedFromWindow", "Landroid/graphics/Matrix;", "Landroid/graphics/Matrix;", "gradientMatrix", "Landroid/animation/ValueAnimator;", "Landroid/animation/ValueAnimator;", "animator", "i", "Landroid/graphics/SweepGradient;", "gradient", "Landroid/graphics/Paint;", "o", "Landroid/graphics/Paint;", "paint", "p", "Landroid/graphics/Path;", "path", "", "value", "q", "F", "setAnimationRotation", "(F)V", "animationRotation", "r", "getCornerRadius", "()F", "setCornerRadius", "cornerRadius", "", "s", "Z", "isScanningAnimationEnabled", "()Z", "setScanningAnimationEnabled", "(Z)V", "t", "I", "getHighlightColor", "()I", "setHighlightColor", "(I)V", "highlightColor", "u", "getBorderColor", "setBorderColor", ViewProps.BORDER_COLOR, "getStrokeWidth", "setStrokeWidth", "strokeWidth", "v", "a", "government-id_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ScanningView extends View {

    /* renamed from: v  reason: collision with root package name */
    public static final a f18269v = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final Matrix f18270d;

    /* renamed from: e  reason: collision with root package name */
    private final ValueAnimator f18271e;

    /* renamed from: i  reason: collision with root package name */
    private SweepGradient f18272i;

    /* renamed from: o  reason: collision with root package name */
    private final Paint f18273o;

    /* renamed from: p  reason: collision with root package name */
    private Path f18274p;

    /* renamed from: q  reason: collision with root package name */
    private float f18275q;

    /* renamed from: r  reason: collision with root package name */
    private float f18276r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f18277s;

    /* renamed from: t  reason: collision with root package name */
    private int f18278t;

    /* renamed from: u  reason: collision with root package name */
    private int f18279u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public ScanningView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f18270d = new Matrix();
        this.f18276r = (float) h.a(8.0d);
        this.f18277s = true;
        Context context2 = getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        this.f18278t = s.d(context2, f.a.f22893v, null, false, 6, null);
        this.f18279u = -1;
        this.f18272i = b();
        Paint paint = new Paint(1);
        paint.setStyle(Paint.Style.STROKE);
        paint.setStrokeWidth((float) h.a(3.0d));
        paint.setShader(this.f18272i);
        this.f18273o = paint;
        this.f18274p = c();
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        ofFloat.setDuration(4000L);
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: no.a
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                ScanningView.a(ScanningView.this, valueAnimator);
            }
        });
        ofFloat.setInterpolator(new LinearInterpolator());
        ofFloat.setRepeatCount(-1);
        ofFloat.start();
        this.f18271e = ofFloat;
    }

    public static void a(ScanningView scanningView, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        scanningView.setAnimationRotation(it.getAnimatedFraction() * 360.0f);
    }

    private final SweepGradient b() {
        int[] iArr;
        if (this.f18277s) {
            int i10 = this.f18279u;
            iArr = new int[]{i10, i10, this.f18278t};
        } else {
            int i11 = this.f18279u;
            iArr = new int[]{i11, i11, i11};
        }
        return new SweepGradient(0.5f, 0.5f, iArr, new float[]{0.0f, 0.5f, 1.0f});
    }

    private final Path c() {
        Path path = new Path();
        float strokeWidth = this.f18273o.getStrokeWidth();
        float f10 = strokeWidth / 2.0f;
        if (getMeasuredWidth() > strokeWidth && getMeasuredHeight() > strokeWidth) {
            float measuredWidth = getMeasuredWidth() - f10;
            float measuredHeight = getMeasuredHeight() - f10;
            float f11 = this.f18276r;
            path.addRoundRect(f10, f10, measuredWidth, measuredHeight, new float[]{f11, f11, f11, f11, f11, f11, f11, f11}, Path.Direction.CW);
        }
        return path;
    }

    private final void d() {
        SweepGradient b10 = b();
        this.f18272i = b10;
        this.f18273o.setShader(b10);
        e();
        invalidate();
    }

    private final void e() {
        int measuredWidth;
        int measuredHeight;
        int max = Integer.max(getMeasuredWidth(), getMeasuredHeight());
        this.f18270d.setRotate(this.f18275q, 0.5f, 0.5f);
        float f10 = max;
        this.f18270d.postScale(f10, f10);
        this.f18270d.postTranslate((measuredWidth - max) / 2.0f, (measuredHeight - max) / 2.0f);
        this.f18272i.setLocalMatrix(this.f18270d);
        invalidate();
    }

    private final void f() {
        this.f18274p = c();
        invalidate();
    }

    private final void setAnimationRotation(float f10) {
        if (this.f18275q == f10) {
            return;
        }
        this.f18275q = f10;
        e();
    }

    public final int getBorderColor() {
        return this.f18279u;
    }

    public final float getCornerRadius() {
        return this.f18276r;
    }

    public final int getHighlightColor() {
        return this.f18278t;
    }

    public final float getStrokeWidth() {
        return this.f18273o.getStrokeWidth();
    }

    @Override // android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.f18271e.cancel();
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        super.onDraw(canvas);
        canvas.drawPath(this.f18274p, this.f18273o);
    }

    @Override // android.view.View
    protected void onSizeChanged(int i10, int i11, int i12, int i13) {
        super.onSizeChanged(i10, i11, i12, i13);
        f();
        e();
    }

    public final void setBorderColor(int i10) {
        if (this.f18279u == i10) {
            return;
        }
        this.f18279u = i10;
        d();
    }

    public final void setCornerRadius(float f10) {
        if (this.f18276r == f10) {
            return;
        }
        this.f18276r = f10;
        f();
    }

    public final void setHighlightColor(int i10) {
        if (this.f18278t == i10) {
            return;
        }
        this.f18278t = i10;
        d();
    }

    public final void setScanningAnimationEnabled(boolean z10) {
        if (this.f18277s == z10) {
            return;
        }
        this.f18277s = z10;
        d();
    }

    public final void setStrokeWidth(float f10) {
        if (this.f18273o.getStrokeWidth() == f10) {
            return;
        }
        this.f18273o.setStrokeWidth(f10);
        invalidate();
    }
}
