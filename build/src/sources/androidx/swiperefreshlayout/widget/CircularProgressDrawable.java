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
    private static final Interpolator f5122r = new LinearInterpolator();

    /* renamed from: s  reason: collision with root package name */
    private static final Interpolator f5123s = new h3.b();

    /* renamed from: t  reason: collision with root package name */
    private static final int[] f5124t = {-16777216};

    /* renamed from: d  reason: collision with root package name */
    private final c f5125d;

    /* renamed from: e  reason: collision with root package name */
    private float f5126e;

    /* renamed from: i  reason: collision with root package name */
    private Resources f5127i;

    /* renamed from: o  reason: collision with root package name */
    private Animator f5128o;

    /* renamed from: p  reason: collision with root package name */
    float f5129p;

    /* renamed from: q  reason: collision with root package name */
    boolean f5130q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c f5131a;

        a(c cVar) {
            this.f5131a = cVar;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
            CircularProgressDrawable.this.n(floatValue, this.f5131a);
            CircularProgressDrawable.this.b(floatValue, this.f5131a, false);
            CircularProgressDrawable.this.invalidateSelf();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Animator.AnimatorListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c f5133a;

        b(c cVar) {
            this.f5133a = cVar;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
            CircularProgressDrawable.this.b(1.0f, this.f5133a, true);
            this.f5133a.A();
            this.f5133a.l();
            CircularProgressDrawable circularProgressDrawable = CircularProgressDrawable.this;
            if (circularProgressDrawable.f5130q) {
                circularProgressDrawable.f5130q = false;
                animator.cancel();
                animator.setDuration(1332L);
                animator.start();
                this.f5133a.x(false);
                return;
            }
            circularProgressDrawable.f5129p += 1.0f;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            CircularProgressDrawable.this.f5129p = 0.0f;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final RectF f5135a = new RectF();

        /* renamed from: b  reason: collision with root package name */
        final Paint f5136b;

        /* renamed from: c  reason: collision with root package name */
        final Paint f5137c;

        /* renamed from: d  reason: collision with root package name */
        final Paint f5138d;

        /* renamed from: e  reason: collision with root package name */
        float f5139e;

        /* renamed from: f  reason: collision with root package name */
        float f5140f;

        /* renamed from: g  reason: collision with root package name */
        float f5141g;

        /* renamed from: h  reason: collision with root package name */
        float f5142h;

        /* renamed from: i  reason: collision with root package name */
        int[] f5143i;

        /* renamed from: j  reason: collision with root package name */
        int f5144j;

        /* renamed from: k  reason: collision with root package name */
        float f5145k;

        /* renamed from: l  reason: collision with root package name */
        float f5146l;

        /* renamed from: m  reason: collision with root package name */
        float f5147m;

        /* renamed from: n  reason: collision with root package name */
        boolean f5148n;

        /* renamed from: o  reason: collision with root package name */
        Path f5149o;

        /* renamed from: p  reason: collision with root package name */
        float f5150p;

        /* renamed from: q  reason: collision with root package name */
        float f5151q;

        /* renamed from: r  reason: collision with root package name */
        int f5152r;

        /* renamed from: s  reason: collision with root package name */
        int f5153s;

        /* renamed from: t  reason: collision with root package name */
        int f5154t;

        /* renamed from: u  reason: collision with root package name */
        int f5155u;

        c() {
            Paint paint = new Paint();
            this.f5136b = paint;
            Paint paint2 = new Paint();
            this.f5137c = paint2;
            Paint paint3 = new Paint();
            this.f5138d = paint3;
            this.f5139e = 0.0f;
            this.f5140f = 0.0f;
            this.f5141g = 0.0f;
            this.f5142h = 5.0f;
            this.f5150p = 1.0f;
            this.f5154t = SetSpanOperation.SPAN_MAX_PRIORITY;
            paint.setStrokeCap(Paint.Cap.SQUARE);
            paint.setAntiAlias(true);
            paint.setStyle(Paint.Style.STROKE);
            paint2.setStyle(Paint.Style.FILL);
            paint2.setAntiAlias(true);
            paint3.setColor(0);
        }

        void A() {
            this.f5145k = this.f5139e;
            this.f5146l = this.f5140f;
            this.f5147m = this.f5141g;
        }

        void a(Canvas canvas, Rect rect) {
            RectF rectF = this.f5135a;
            float f10 = this.f5151q;
            float f11 = (this.f5142h / 2.0f) + f10;
            if (f10 <= 0.0f) {
                f11 = (Math.min(rect.width(), rect.height()) / 2.0f) - Math.max((this.f5152r * this.f5150p) / 2.0f, this.f5142h / 2.0f);
            }
            rectF.set(rect.centerX() - f11, rect.centerY() - f11, rect.centerX() + f11, rect.centerY() + f11);
            float f12 = this.f5139e;
            float f13 = this.f5141g;
            float f14 = (f12 + f13) * 360.0f;
            float f15 = ((this.f5140f + f13) * 360.0f) - f14;
            this.f5136b.setColor(this.f5155u);
            this.f5136b.setAlpha(this.f5154t);
            float f16 = this.f5142h / 2.0f;
            rectF.inset(f16, f16);
            canvas.drawCircle(rectF.centerX(), rectF.centerY(), rectF.width() / 2.0f, this.f5138d);
            float f17 = -f16;
            rectF.inset(f17, f17);
            canvas.drawArc(rectF, f14, f15, false, this.f5136b);
            b(canvas, f14, f15, rectF);
        }

        void b(Canvas canvas, float f10, float f11, RectF rectF) {
            if (this.f5148n) {
                Path path = this.f5149o;
                if (path == null) {
                    Path path2 = new Path();
                    this.f5149o = path2;
                    path2.setFillType(Path.FillType.EVEN_ODD);
                } else {
                    path.reset();
                }
                this.f5149o.moveTo(0.0f, 0.0f);
                this.f5149o.lineTo(this.f5152r * this.f5150p, 0.0f);
                Path path3 = this.f5149o;
                float f12 = this.f5150p;
                path3.lineTo((this.f5152r * f12) / 2.0f, this.f5153s * f12);
                this.f5149o.offset(((Math.min(rectF.width(), rectF.height()) / 2.0f) + rectF.centerX()) - ((this.f5152r * this.f5150p) / 2.0f), rectF.centerY() + (this.f5142h / 2.0f));
                this.f5149o.close();
                this.f5137c.setColor(this.f5155u);
                this.f5137c.setAlpha(this.f5154t);
                canvas.save();
                canvas.rotate(f10 + f11, rectF.centerX(), rectF.centerY());
                canvas.drawPath(this.f5149o, this.f5137c);
                canvas.restore();
            }
        }

        int c() {
            return this.f5154t;
        }

        float d() {
            return this.f5140f;
        }

        int e() {
            return this.f5143i[f()];
        }

        int f() {
            return (this.f5144j + 1) % this.f5143i.length;
        }

        float g() {
            return this.f5139e;
        }

        int h() {
            return this.f5143i[this.f5144j];
        }

        float i() {
            return this.f5146l;
        }

        float j() {
            return this.f5147m;
        }

        float k() {
            return this.f5145k;
        }

        void l() {
            t(f());
        }

        void m() {
            this.f5145k = 0.0f;
            this.f5146l = 0.0f;
            this.f5147m = 0.0f;
            y(0.0f);
            v(0.0f);
            w(0.0f);
        }

        void n(int i10) {
            this.f5154t = i10;
        }

        void o(float f10, float f11) {
            this.f5152r = (int) f10;
            this.f5153s = (int) f11;
        }

        void p(float f10) {
            if (f10 != this.f5150p) {
                this.f5150p = f10;
            }
        }

        void q(float f10) {
            this.f5151q = f10;
        }

        void r(int i10) {
            this.f5155u = i10;
        }

        void s(ColorFilter colorFilter) {
            this.f5136b.setColorFilter(colorFilter);
        }

        void t(int i10) {
            this.f5144j = i10;
            this.f5155u = this.f5143i[i10];
        }

        void u(int[] iArr) {
            this.f5143i = iArr;
            t(0);
        }

        void v(float f10) {
            this.f5140f = f10;
        }

        void w(float f10) {
            this.f5141g = f10;
        }

        void x(boolean z10) {
            if (this.f5148n != z10) {
                this.f5148n = z10;
            }
        }

        void y(float f10) {
            this.f5139e = f10;
        }

        void z(float f10) {
            this.f5142h = f10;
            this.f5136b.setStrokeWidth(f10);
        }
    }

    public CircularProgressDrawable(Context context) {
        this.f5127i = ((Context) e.g(context)).getResources();
        c cVar = new c();
        this.f5125d = cVar;
        cVar.u(f5124t);
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
        this.f5126e = f10;
    }

    private void i(float f10, float f11, float f12, float f13) {
        c cVar = this.f5125d;
        float f14 = this.f5127i.getDisplayMetrics().density;
        cVar.z(f11 * f14);
        cVar.q(f10 * f14);
        cVar.t(0);
        cVar.o(f12 * f14, f13 * f14);
    }

    private void m() {
        c cVar = this.f5125d;
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        ofFloat.addUpdateListener(new a(cVar));
        ofFloat.setRepeatCount(-1);
        ofFloat.setRepeatMode(1);
        ofFloat.setInterpolator(f5122r);
        ofFloat.addListener(new b(cVar));
        this.f5128o = ofFloat;
    }

    void b(float f10, c cVar, boolean z10) {
        float interpolation;
        float f11;
        if (this.f5130q) {
            a(f10, cVar);
        } else if (f10 == 1.0f && !z10) {
        } else {
            float j10 = cVar.j();
            if (f10 < 0.5f) {
                interpolation = cVar.k();
                f11 = (f5123s.getInterpolation(f10 / 0.5f) * 0.79f) + 0.01f + interpolation;
            } else {
                float k10 = cVar.k() + 0.79f;
                interpolation = k10 - (((1.0f - f5123s.getInterpolation((f10 - 0.5f) / 0.5f)) * 0.79f) + 0.01f);
                f11 = k10;
            }
            cVar.y(interpolation);
            cVar.v(f11);
            cVar.w(j10 + (0.20999998f * f10));
            h((f10 + this.f5129p) * 216.0f);
        }
    }

    public void d(boolean z10) {
        this.f5125d.x(z10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Rect bounds = getBounds();
        canvas.save();
        canvas.rotate(this.f5126e, bounds.exactCenterX(), bounds.exactCenterY());
        this.f5125d.a(canvas, bounds);
        canvas.restore();
    }

    public void e(float f10) {
        this.f5125d.p(f10);
        invalidateSelf();
    }

    public void f(int... iArr) {
        this.f5125d.u(iArr);
        this.f5125d.t(0);
        invalidateSelf();
    }

    public void g(float f10) {
        this.f5125d.w(f10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f5125d.c();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        return this.f5128o.isRunning();
    }

    public void j(float f10, float f11) {
        this.f5125d.y(f10);
        this.f5125d.v(f11);
        invalidateSelf();
    }

    public void k(float f10) {
        this.f5125d.z(f10);
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
        this.f5125d.n(i10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f5125d.s(colorFilter);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        this.f5128o.cancel();
        this.f5125d.A();
        if (this.f5125d.d() != this.f5125d.g()) {
            this.f5130q = true;
            this.f5128o.setDuration(666L);
            this.f5128o.start();
            return;
        }
        this.f5125d.t(0);
        this.f5125d.m();
        this.f5128o.setDuration(1332L);
        this.f5128o.start();
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        this.f5128o.cancel();
        h(0.0f);
        this.f5125d.x(false);
        this.f5125d.t(0);
        this.f5125d.m();
        invalidateSelf();
    }
}
