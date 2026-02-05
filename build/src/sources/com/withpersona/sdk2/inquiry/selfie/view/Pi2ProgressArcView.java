package com.withpersona.sdk2.inquiry.selfie.view;

import android.animation.Animator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.util.AttributeSet;
import android.view.View;
import android.view.animation.LinearInterpolator;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import com.withpersona.sdk2.inquiry.selfie.view.Pi2ProgressArcView;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kp.z0;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\r\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\f\u0018\u0000 12\u00020\u0001:\u00012B'\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\b\b\u0002\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\tJ'\u0010\u000f\u001a\u00020\r2\u0006\u0010\u000b\u001a\u00020\n2\u000e\u0010\u000e\u001a\n\u0012\u0004\u0012\u00020\r\u0018\u00010\fH\u0002¢\u0006\u0004\b\u000f\u0010\u0010J\u000f\u0010\u0011\u001a\u00020\rH\u0002¢\u0006\u0004\b\u0011\u0010\u0012J\u0015\u0010\u0014\u001a\u00020\r2\u0006\u0010\u0013\u001a\u00020\u0006¢\u0006\u0004\b\u0014\u0010\u0015J\u0015\u0010\u0017\u001a\u00020\r2\u0006\u0010\u0016\u001a\u00020\n¢\u0006\u0004\b\u0017\u0010\u0018J'\u0010\u0019\u001a\u00020\r2\u0006\u0010\u000b\u001a\u00020\n2\u0010\b\u0002\u0010\u000e\u001a\n\u0012\u0004\u0012\u00020\r\u0018\u00010\f¢\u0006\u0004\b\u0019\u0010\u0010J\r\u0010\u001a\u001a\u00020\r¢\u0006\u0004\b\u001a\u0010\u0012J\u0017\u0010\u001d\u001a\u00020\r2\u0006\u0010\u001c\u001a\u00020\u001bH\u0014¢\u0006\u0004\b\u001d\u0010\u001eR\u0014\u0010!\u001a\u00020\u001f8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0011\u0010 R\u0014\u0010#\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\"R\u0014\u0010%\u001a\u00020\n8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b$\u0010\"R\u0016\u0010\u000b\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b&\u0010\"R\u0018\u0010*\u001a\u0004\u0018\u00010'8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b(\u0010)R\u0018\u0010,\u001a\u0004\u0018\u00010'8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b+\u0010)R\u0018\u0010.\u001a\u0004\u0018\u00010'8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b-\u0010)R\u0016\u00100\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b/\u0010\"¨\u00063"}, d2 = {"Lcom/withpersona/sdk2/inquiry/selfie/view/Pi2ProgressArcView;", "Landroid/view/View;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "", "defStyleAttr", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "", ReactProgressBarViewManager.PROP_PROGRESS, "Lkotlin/Function0;", "", "onAnimationEnd", "h", "(FLkotlin/jvm/functions/Function0;)V", "d", "()V", "newColor", "setStrokeColor", "(I)V", "newWidth", "setStrokeWidth", "(F)V", "f", "e", "Landroid/graphics/Canvas;", "canvas", "onDraw", "(Landroid/graphics/Canvas;)V", "Landroid/graphics/Paint;", "Landroid/graphics/Paint;", "paint", "F", "size", "i", "startAngle", "o", "Landroid/animation/ValueAnimator;", "p", "Landroid/animation/ValueAnimator;", "animator", "q", "indeterminateAnimator", "r", "rotateToZeroAnimator", "s", "_rotation", "t", "a", "selfie_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nPi2ProgressArcView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Pi2ProgressArcView.kt\ncom/withpersona/sdk2/inquiry/selfie/view/Pi2ProgressArcView\n+ 2 Animator.kt\nandroidx/core/animation/AnimatorKt\n*L\n1#1,182:1\n29#2:183\n85#2,18:184\n*S KotlinDebug\n*F\n+ 1 Pi2ProgressArcView.kt\ncom/withpersona/sdk2/inquiry/selfie/view/Pi2ProgressArcView\n*L\n111#1:183\n111#1:184,18\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Pi2ProgressArcView extends View {

    /* renamed from: t  reason: collision with root package name */
    public static final a f19471t = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final Paint f19472d;

    /* renamed from: e  reason: collision with root package name */
    private final float f19473e;

    /* renamed from: i  reason: collision with root package name */
    private final float f19474i;

    /* renamed from: o  reason: collision with root package name */
    private float f19475o;

    /* renamed from: p  reason: collision with root package name */
    private ValueAnimator f19476p;

    /* renamed from: q  reason: collision with root package name */
    private ValueAnimator f19477q;

    /* renamed from: r  reason: collision with root package name */
    private ValueAnimator f19478r;

    /* renamed from: s  reason: collision with root package name */
    private float f19479s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        private float f19480a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ ValueAnimator f19481b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Pi2ProgressArcView f19482c;

        b(ValueAnimator valueAnimator, Pi2ProgressArcView pi2ProgressArcView) {
            this.f19481b = valueAnimator;
            this.f19482c = pi2ProgressArcView;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator animator) {
            Intrinsics.checkNotNullParameter(animator, "animator");
            Object animatedValue = this.f19481b.getAnimatedValue();
            Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Float");
            float floatValue = ((Float) animatedValue).floatValue();
            float abs = Math.abs(floatValue - this.f19480a);
            float f10 = this.f19482c.f19479s;
            Pi2ProgressArcView pi2ProgressArcView = this.f19482c;
            pi2ProgressArcView.f19479s = (pi2ProgressArcView.f19479s + abs) % 360;
            if (f10 > this.f19482c.f19479s) {
                this.f19482c.f19479s = 0.0f;
                animator.cancel();
            }
            this.f19480a = floatValue;
            this.f19482c.invalidate();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final /* synthetic */ Function0 f19483d;

        c(Function0 function) {
            Intrinsics.checkNotNullParameter(function, "function");
            this.f19483d = function;
        }

        @Override // java.lang.Runnable
        public final /* synthetic */ void run() {
            this.f19483d.invoke();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        private float f19484a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ ValueAnimator f19485b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Pi2ProgressArcView f19486c;

        d(ValueAnimator valueAnimator, Pi2ProgressArcView pi2ProgressArcView) {
            this.f19485b = valueAnimator;
            this.f19486c = pi2ProgressArcView;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator animator) {
            Intrinsics.checkNotNullParameter(animator, "animator");
            Object animatedValue = this.f19485b.getAnimatedValue();
            Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Float");
            float floatValue = ((Float) animatedValue).floatValue();
            float abs = Math.abs(floatValue - this.f19484a);
            Pi2ProgressArcView pi2ProgressArcView = this.f19486c;
            pi2ProgressArcView.f19479s = (pi2ProgressArcView.f19479s + abs) % 360;
            this.f19484a = floatValue;
            this.f19486c.invalidate();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements Animator.AnimatorListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Function0 f19487a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ Pi2ProgressArcView f19488b;

        public e(Function0 function0, Pi2ProgressArcView pi2ProgressArcView) {
            this.f19487a = function0;
            this.f19488b = pi2ProgressArcView;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            Function0 function0 = this.f19487a;
            if (function0 != null) {
                this.f19488b.postDelayed(new c(function0), 100L);
            }
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public Pi2ProgressArcView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void d() {
        if (this.f19479s == 0.0f) {
            return;
        }
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 100.0f);
        ofFloat.setDuration(300L);
        ofFloat.addUpdateListener(new b(ofFloat, this));
        ofFloat.setInterpolator(new LinearInterpolator());
        ofFloat.setRepeatCount(-1);
        ofFloat.setRepeatMode(2);
        ofFloat.start();
        this.f19478r = ofFloat;
    }

    public static /* synthetic */ void g(Pi2ProgressArcView pi2ProgressArcView, float f10, Function0 function0, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            function0 = null;
        }
        pi2ProgressArcView.f(f10, function0);
    }

    private final void h(float f10, Function0 function0) {
        if (this.f19475o == f10) {
            if (function0 != null) {
                function0.invoke();
                return;
            }
            return;
        }
        ValueAnimator valueAnimator = this.f19476p;
        if (valueAnimator != null) {
            valueAnimator.cancel();
        }
        float f11 = this.f19475o;
        final ValueAnimator ofFloat = ValueAnimator.ofFloat(f11, f10);
        ofFloat.setDuration(((float) 1000) * (Math.abs(f10 - f11) / 100.0f));
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: op.o
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                Pi2ProgressArcView.i(Pi2ProgressArcView.this, ofFloat, valueAnimator2);
            }
        });
        Intrinsics.checkNotNull(ofFloat);
        ofFloat.addListener(new e(function0, this));
        ofFloat.start();
        this.f19476p = ofFloat;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(Pi2ProgressArcView pi2ProgressArcView, ValueAnimator valueAnimator, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        Object animatedValue = valueAnimator.getAnimatedValue();
        Intrinsics.checkNotNull(animatedValue, "null cannot be cast to non-null type kotlin.Float");
        pi2ProgressArcView.f19475o = ((Float) animatedValue).floatValue();
        pi2ProgressArcView.invalidate();
    }

    public final void e() {
        ValueAnimator valueAnimator = this.f19478r;
        if (valueAnimator != null) {
            valueAnimator.cancel();
        }
        ValueAnimator valueAnimator2 = this.f19477q;
        if (valueAnimator2 != null) {
            valueAnimator2.cancel();
        }
        h(25.0f, null);
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 100.0f);
        ofFloat.setDuration(300L);
        ofFloat.addUpdateListener(new d(ofFloat, this));
        ofFloat.setInterpolator(new LinearInterpolator());
        ofFloat.setRepeatCount(-1);
        ofFloat.setRepeatMode(2);
        ofFloat.start();
        this.f19477q = ofFloat;
    }

    public final void f(float f10, Function0 function0) {
        ValueAnimator valueAnimator = this.f19477q;
        if (valueAnimator != null) {
            valueAnimator.cancel();
        }
        d();
        h(f10, function0);
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        float min = (this.f19473e * Math.min(getWidth(), getHeight())) - (this.f19472d.getStrokeWidth() / 2);
        float width = getWidth() / 2;
        float height = getHeight() / 2;
        canvas.drawArc(width - min, height - min, width + min, height + min, this.f19474i + this.f19479s, (this.f19475o * 360) / 100.0f, false, this.f19472d);
    }

    public final void setStrokeColor(int i10) {
        this.f19472d.setColor(i10);
    }

    public final void setStrokeWidth(float f10) {
        this.f19472d.setStrokeWidth(f10);
    }

    public /* synthetic */ Pi2ProgressArcView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public Pi2ProgressArcView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        Paint paint = new Paint(1);
        this.f19472d = paint;
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, z0.f36101d, i10, 0);
        Intrinsics.checkNotNullExpressionValue(obtainStyledAttributes, "obtainStyledAttributes(...)");
        try {
            this.f19473e = obtainStyledAttributes.getFloat(z0.f36102e, 0.4f);
            this.f19474i = obtainStyledAttributes.getFloat(z0.f36104g, 270.0f);
            this.f19475o = obtainStyledAttributes.getFloat(z0.f36103f, 0.0f);
            paint.setColor(obtainStyledAttributes.getColor(z0.f36105h, -1));
            paint.setStrokeWidth(obtainStyledAttributes.getDimensionPixelSize(z0.f36106i, 4));
            paint.setStyle(Paint.Style.STROKE);
            paint.setStrokeCap(Paint.Cap.BUTT);
            obtainStyledAttributes.recycle();
            setWillNotDraw(false);
        } catch (Throwable th2) {
            obtainStyledAttributes.recycle();
            throw th2;
        }
    }
}
