package androidx.swiperefreshlayout.widget;

import android.animation.Animator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.content.res.Resources;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.view.animation.Interpolator;
import android.view.animation.LinearInterpolator;
import b2.e;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class CircularProgressDrawable extends Drawable implements Animatable {

    /* renamed from: r  reason: collision with root package name */
    private static final Interpolator f5091r = new LinearInterpolator();

    /* renamed from: s  reason: collision with root package name */
    private static final Interpolator f5092s = new h3.b();

    /* renamed from: t  reason: collision with root package name */
    private static final int[] f5093t = {-16777216};

    /* renamed from: d  reason: collision with root package name */
    private final c f5094d;

    /* renamed from: e  reason: collision with root package name */
    private float f5095e;

    /* renamed from: i  reason: collision with root package name */
    private Resources f5096i;

    /* renamed from: o  reason: collision with root package name */
    private Animator f5097o;

    /* renamed from: p  reason: collision with root package name */
    float f5098p;

    /* renamed from: q  reason: collision with root package name */
    boolean f5099q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c f5100a;

        a(c cVar) {
            this.f5100a = cVar;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
            CircularProgressDrawable.this.n(floatValue, this.f5100a);
            CircularProgressDrawable.this.b(floatValue, this.f5100a, false);
            CircularProgressDrawable.this.invalidateSelf();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Animator.AnimatorListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c f5102a;

        b(c cVar) {
            this.f5102a = cVar;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
            CircularProgressDrawable.this.b(1.0f, this.f5102a, true);
            this.f5102a.A();
            this.f5102a.l();
            CircularProgressDrawable circularProgressDrawable = CircularProgressDrawable.this;
            if (circularProgressDrawable.f5099q) {
                circularProgressDrawable.f5099q = false;
                animator.cancel();
                animator.setDuration(1332L);
                animator.start();
                this.f5102a.x(false);
                return;
            }
            circularProgressDrawable.f5098p += 1.0f;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            CircularProgressDrawable.this.f5098p = 0.0f;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final RectF f5104a = new RectF();

        /* renamed from: b  reason: collision with root package name */
        final Paint f5105b;

        /* renamed from: c  reason: collision with root package name */
        final Paint f5106c;

        /* renamed from: d  reason: collision with root package name */
        final Paint f5107d;

        /* renamed from: e  reason: collision with root package name */
        float f5108e;

        /* renamed from: f  reason: collision with root package name */
        float f5109f;

        /* renamed from: g  reason: collision with root package name */
        float f5110g;

        /* renamed from: h  reason: collision with root package name */
        float f5111h;

        /* renamed from: i  reason: collision with root package name */
        int[] f5112i;

        /* renamed from: j  reason: collision with root package name */
        int f5113j;

        /* renamed from: k  reason: collision with root package name */
        float f5114k;

        /* renamed from: l  reason: collision with root package name */
        float f5115l;

        /* renamed from: m  reason: collision with root package name */
        float f5116m;

        /* renamed from: n  reason: collision with root package name */
        boolean f5117n;

        /* renamed from: o  reason: collision with root package name */
        Path f5118o;

        /* renamed from: p  reason: collision with root package name */
        float f5119p;

        /* renamed from: q  reason: collision with root package name */
        float f5120q;

        /* renamed from: r  reason: collision with root package name */
        int f5121r;

        /* renamed from: s  reason: collision with root package name */
        int f5122s;

        /* renamed from: t  reason: collision with root package name */
        int f5123t;

        /* renamed from: u  reason: collision with root package name */
        int f5124u;

        c() {
            Paint paint = new Paint();
            this.f5105b = paint;
            Paint paint2 = new Paint();
            this.f5106c = paint2;
            Paint paint3 = new Paint();
            this.f5107d = paint3;
            this.f5108e = 0.0f;
            this.f5109f = 0.0f;
            this.f5110g = 0.0f;
            this.f5111h = 5.0f;
            this.f5119p = 1.0f;
            this.f5123t = SetSpanOperation.SPAN_MAX_PRIORITY;
            paint.setStrokeCap(Paint.Cap.SQUARE);
            paint.setAntiAlias(true);
            paint.setStyle(Paint.Style.STROKE);
            paint2.setStyle(Paint.Style.FILL);
            paint2.setAntiAlias(true);
            paint3.setColor(0);
        }

        void A() {
            this.f5114k = this.f5108e;
            this.f5115l = this.f5109f;
            this.f5116m = this.f5110g;
        }

        void a(Canvas canvas, Rect rect) {
            RectF rectF = this.f5104a;
            float f10 = this.f5120q;
            float f11 = (this.f5111h / 2.0f) + f10;
            if (f10 <= 0.0f) {
                f11 = (Math.min(rect.width(), rect.height()) / 2.0f) - Math.max((this.f5121r * this.f5119p) / 2.0f, this.f5111h / 2.0f);
            }
            rectF.set(rect.centerX() - f11, rect.centerY() - f11, rect.centerX() + f11, rect.centerY() + f11);
            float f12 = this.f5108e;
            float f13 = this.f5110g;
            float f14 = (f12 + f13) * 360.0f;
            float f15 = ((this.f5109f + f13) * 360.0f) - f14;
            this.f5105b.setColor(this.f5124u);
            this.f5105b.setAlpha(this.f5123t);
            float f16 = this.f5111h / 2.0f;
            rectF.inset(f16, f16);
            canvas.drawCircle(rectF.centerX(), rectF.centerY(), rectF.width() / 2.0f, this.f5107d);
            float f17 = -f16;
            rectF.inset(f17, f17);
            canvas.drawArc(rectF, f14, f15, false, this.f5105b);
            b(canvas, f14, f15, rectF);
        }

        void b(Canvas canvas, float f10, float f11, RectF rectF) {
            if (this.f5117n) {
                Path path = this.f5118o;
                if (path == null) {
                    Path path2 = new Path();
                    this.f5118o = path2;
                    path2.setFillType(Path.FillType.EVEN_ODD);
                } else {
                    path.reset();
                }
                this.f5118o.moveTo(0.0f, 0.0f);
                this.f5118o.lineTo(this.f5121r * this.f5119p, 0.0f);
                Path path3 = this.f5118o;
                float f12 = this.f5119p;
                path3.lineTo((this.f5121r * f12) / 2.0f, this.f5122s * f12);
                this.f5118o.offset(((Math.min(rectF.width(), rectF.height()) / 2.0f) + rectF.centerX()) - ((this.f5121r * this.f5119p) / 2.0f), rectF.centerY() + (this.f5111h / 2.0f));
                this.f5118o.close();
                this.f5106c.setColor(this.f5124u);
                this.f5106c.setAlpha(this.f5123t);
                canvas.save();
                canvas.rotate(f10 + f11, rectF.centerX(), rectF.centerY());
                canvas.drawPath(this.f5118o, this.f5106c);
                canvas.restore();
            }
        }

        int c() {
            return this.f5123t;
        }

        float d() {
            return this.f5109f;
        }

        int e() {
            return this.f5112i[f()];
        }

        int f() {
            return (this.f5113j + 1) % this.f5112i.length;
        }

        float g() {
            return this.f5108e;
        }

        int h() {
            return this.f5112i[this.f5113j];
        }

        float i() {
            return this.f5115l;
        }

        float j() {
            return this.f5116m;
        }

        float k() {
            return this.f5114k;
        }

        void l() {
            t(f());
        }

        void m() {
            this.f5114k = 0.0f;
            this.f5115l = 0.0f;
            this.f5116m = 0.0f;
            y(0.0f);
            v(0.0f);
            w(0.0f);
        }

        void n(int i10) {
            this.f5123t = i10;
        }

        void o(float f10, float f11) {
            this.f5121r = (int) f10;
            this.f5122s = (int) f11;
        }

        void p(float f10) {
            if (f10 != this.f5119p) {
                this.f5119p = f10;
            }
        }

        void q(float f10) {
            this.f5120q = f10;
        }

        void r(int i10) {
            this.f5124u = i10;
        }

        void s(ColorFilter colorFilter) {
            this.f5105b.setColorFilter(colorFilter);
        }

        void t(int i10) {
            this.f5113j = i10;
            this.f5124u = this.f5112i[i10];
        }

        void u(int[] iArr) {
            this.f5112i = iArr;
            t(0);
        }

        void v(float f10) {
            this.f5109f = f10;
        }

        void w(float f10) {
            this.f5110g = f10;
        }

        void x(boolean z10) {
            if (this.f5117n != z10) {
                this.f5117n = z10;
            }
        }

        void y(float f10) {
            this.f5108e = f10;
        }

        void z(float f10) {
            this.f5111h = f10;
            this.f5105b.setStrokeWidth(f10);
        }
    }

    public CircularProgressDrawable(Context context) {
        this.f5096i = ((Context) e.g(context)).getResources();
        c cVar = new c();
        this.f5094d = cVar;
        cVar.u(f5093t);
        k(2.5f);
        m();
    }

    private void a(float f10, c cVar) {
        n(f10, cVar);
        cVar.y(cVar.k() + (((cVar.i() - 0.01f) - cVar.k()) * f10));
        cVar.v(cVar.i());
        cVar.w(cVar.j() + ((((float) (Math.floor(cVar.j() / 0.8f) + 1.0d)) - cVar.j()) * f10));
    }

    private int c(float f10, int i10, int i11) {
        int i12 = (i10 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY;
        int i13 = (i10 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY;
        int i14 = (i10 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY;
        int i15 = i10 & SetSpanOperation.SPAN_MAX_PRIORITY;
        return ((i12 + ((int) ((((i11 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY) - i12) * f10))) << 24) | ((i13 + ((int) ((((i11 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY) - i13) * f10))) << 16) | ((i14 + ((int) ((((i11 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY) - i14) * f10))) << 8) | (i15 + ((int) (f10 * ((i11 & SetSpanOperation.SPAN_MAX_PRIORITY) - i15))));
    }

    private void h(float f10) {
        this.f5095e = f10;
    }

    private void i(float f10, float f11, float f12, float f13) {
        c cVar = this.f5094d;
        float f14 = this.f5096i.getDisplayMetrics().density;
        cVar.z(f11 * f14);
        cVar.q(f10 * f14);
        cVar.t(0);
        cVar.o(f12 * f14, f13 * f14);
    }

    private void m() {
        c cVar = this.f5094d;
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        ofFloat.addUpdateListener(new a(cVar));
        ofFloat.setRepeatCount(-1);
        ofFloat.setRepeatMode(1);
        ofFloat.setInterpolator(f5091r);
        ofFloat.addListener(new b(cVar));
        this.f5097o = ofFloat;
    }

    void b(float f10, c cVar, boolean z10) {
        float interpolation;
        float f11;
        if (this.f5099q) {
            a(f10, cVar);
        } else if (f10 == 1.0f && !z10) {
        } else {
            float j10 = cVar.j();
            if (f10 < 0.5f) {
                interpolation = cVar.k();
                f11 = (f5092s.getInterpolation(f10 / 0.5f) * 0.79f) + 0.01f + interpolation;
            } else {
                float k10 = cVar.k() + 0.79f;
                interpolation = k10 - (((1.0f - f5092s.getInterpolation((f10 - 0.5f) / 0.5f)) * 0.79f) + 0.01f);
                f11 = k10;
            }
            cVar.y(interpolation);
            cVar.v(f11);
            cVar.w(j10 + (0.20999998f * f10));
            h((f10 + this.f5098p) * 216.0f);
        }
    }

    public void d(boolean z10) {
        this.f5094d.x(z10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Rect bounds = getBounds();
        canvas.save();
        canvas.rotate(this.f5095e, bounds.exactCenterX(), bounds.exactCenterY());
        this.f5094d.a(canvas, bounds);
        canvas.restore();
    }

    public void e(float f10) {
        this.f5094d.p(f10);
        invalidateSelf();
    }

    public void f(int... iArr) {
        this.f5094d.u(iArr);
        this.f5094d.t(0);
        invalidateSelf();
    }

    public void g(float f10) {
        this.f5094d.w(f10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f5094d.c();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        return this.f5097o.isRunning();
    }

    public void j(float f10, float f11) {
        this.f5094d.y(f10);
        this.f5094d.v(f11);
        invalidateSelf();
    }

    public void k(float f10) {
        this.f5094d.z(f10);
        invalidateSelf();
    }

    public void l(int i10) {
        if (i10 == 0) {
            i(11.0f, 3.0f, 12.0f, 6.0f);
        } else {
            i(7.5f, 2.5f, 10.0f, 5.0f);
        }
        invalidateSelf();
    }

    void n(float f10, c cVar) {
        if (f10 > 0.75f) {
            cVar.r(c((f10 - 0.75f) / 0.25f, cVar.h(), cVar.e()));
        } else {
            cVar.r(cVar.h());
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f5094d.n(i10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f5094d.s(colorFilter);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        this.f5097o.cancel();
        this.f5094d.A();
        if (this.f5094d.d() != this.f5094d.g()) {
            this.f5099q = true;
            this.f5097o.setDuration(666L);
            this.f5097o.start();
            return;
        }
        this.f5094d.t(0);
        this.f5094d.m();
        this.f5097o.setDuration(1332L);
        this.f5097o.start();
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        this.f5097o.cancel();
        h(0.0f);
        this.f5094d.x(false);
        this.f5094d.t(0);
        this.f5094d.m();
        invalidateSelf();
    }
}
