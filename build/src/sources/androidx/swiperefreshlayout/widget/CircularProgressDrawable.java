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
    private static final Interpolator f5203r = new LinearInterpolator();

    /* renamed from: s  reason: collision with root package name */
    private static final Interpolator f5204s = new h3.b();

    /* renamed from: t  reason: collision with root package name */
    private static final int[] f5205t = {-16777216};

    /* renamed from: d  reason: collision with root package name */
    private final c f5206d;

    /* renamed from: e  reason: collision with root package name */
    private float f5207e;

    /* renamed from: i  reason: collision with root package name */
    private Resources f5208i;

    /* renamed from: o  reason: collision with root package name */
    private Animator f5209o;

    /* renamed from: p  reason: collision with root package name */
    float f5210p;

    /* renamed from: q  reason: collision with root package name */
    boolean f5211q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c f5212a;

        a(c cVar) {
            this.f5212a = cVar;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
            CircularProgressDrawable.this.n(floatValue, this.f5212a);
            CircularProgressDrawable.this.b(floatValue, this.f5212a, false);
            CircularProgressDrawable.this.invalidateSelf();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Animator.AnimatorListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c f5214a;

        b(c cVar) {
            this.f5214a = cVar;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
            CircularProgressDrawable.this.b(1.0f, this.f5214a, true);
            this.f5214a.A();
            this.f5214a.l();
            CircularProgressDrawable circularProgressDrawable = CircularProgressDrawable.this;
            if (circularProgressDrawable.f5211q) {
                circularProgressDrawable.f5211q = false;
                animator.cancel();
                animator.setDuration(1332L);
                animator.start();
                this.f5214a.x(false);
                return;
            }
            circularProgressDrawable.f5210p += 1.0f;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            CircularProgressDrawable.this.f5210p = 0.0f;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final RectF f5216a = new RectF();

        /* renamed from: b  reason: collision with root package name */
        final Paint f5217b;

        /* renamed from: c  reason: collision with root package name */
        final Paint f5218c;

        /* renamed from: d  reason: collision with root package name */
        final Paint f5219d;

        /* renamed from: e  reason: collision with root package name */
        float f5220e;

        /* renamed from: f  reason: collision with root package name */
        float f5221f;

        /* renamed from: g  reason: collision with root package name */
        float f5222g;

        /* renamed from: h  reason: collision with root package name */
        float f5223h;

        /* renamed from: i  reason: collision with root package name */
        int[] f5224i;

        /* renamed from: j  reason: collision with root package name */
        int f5225j;

        /* renamed from: k  reason: collision with root package name */
        float f5226k;

        /* renamed from: l  reason: collision with root package name */
        float f5227l;

        /* renamed from: m  reason: collision with root package name */
        float f5228m;

        /* renamed from: n  reason: collision with root package name */
        boolean f5229n;

        /* renamed from: o  reason: collision with root package name */
        Path f5230o;

        /* renamed from: p  reason: collision with root package name */
        float f5231p;

        /* renamed from: q  reason: collision with root package name */
        float f5232q;

        /* renamed from: r  reason: collision with root package name */
        int f5233r;

        /* renamed from: s  reason: collision with root package name */
        int f5234s;

        /* renamed from: t  reason: collision with root package name */
        int f5235t;

        /* renamed from: u  reason: collision with root package name */
        int f5236u;

        c() {
            Paint paint = new Paint();
            this.f5217b = paint;
            Paint paint2 = new Paint();
            this.f5218c = paint2;
            Paint paint3 = new Paint();
            this.f5219d = paint3;
            this.f5220e = 0.0f;
            this.f5221f = 0.0f;
            this.f5222g = 0.0f;
            this.f5223h = 5.0f;
            this.f5231p = 1.0f;
            this.f5235t = SetSpanOperation.SPAN_MAX_PRIORITY;
            paint.setStrokeCap(Paint.Cap.SQUARE);
            paint.setAntiAlias(true);
            paint.setStyle(Paint.Style.STROKE);
            paint2.setStyle(Paint.Style.FILL);
            paint2.setAntiAlias(true);
            paint3.setColor(0);
        }

        void A() {
            this.f5226k = this.f5220e;
            this.f5227l = this.f5221f;
            this.f5228m = this.f5222g;
        }

        void a(Canvas canvas, Rect rect) {
            RectF rectF = this.f5216a;
            float f10 = this.f5232q;
            float f11 = (this.f5223h / 2.0f) + f10;
            if (f10 <= 0.0f) {
                f11 = (Math.min(rect.width(), rect.height()) / 2.0f) - Math.max((this.f5233r * this.f5231p) / 2.0f, this.f5223h / 2.0f);
            }
            rectF.set(rect.centerX() - f11, rect.centerY() - f11, rect.centerX() + f11, rect.centerY() + f11);
            float f12 = this.f5220e;
            float f13 = this.f5222g;
            float f14 = (f12 + f13) * 360.0f;
            float f15 = ((this.f5221f + f13) * 360.0f) - f14;
            this.f5217b.setColor(this.f5236u);
            this.f5217b.setAlpha(this.f5235t);
            float f16 = this.f5223h / 2.0f;
            rectF.inset(f16, f16);
            canvas.drawCircle(rectF.centerX(), rectF.centerY(), rectF.width() / 2.0f, this.f5219d);
            float f17 = -f16;
            rectF.inset(f17, f17);
            canvas.drawArc(rectF, f14, f15, false, this.f5217b);
            b(canvas, f14, f15, rectF);
        }

        void b(Canvas canvas, float f10, float f11, RectF rectF) {
            if (this.f5229n) {
                Path path = this.f5230o;
                if (path == null) {
                    Path path2 = new Path();
                    this.f5230o = path2;
                    path2.setFillType(Path.FillType.EVEN_ODD);
                } else {
                    path.reset();
                }
                this.f5230o.moveTo(0.0f, 0.0f);
                this.f5230o.lineTo(this.f5233r * this.f5231p, 0.0f);
                Path path3 = this.f5230o;
                float f12 = this.f5231p;
                path3.lineTo((this.f5233r * f12) / 2.0f, this.f5234s * f12);
                this.f5230o.offset(((Math.min(rectF.width(), rectF.height()) / 2.0f) + rectF.centerX()) - ((this.f5233r * this.f5231p) / 2.0f), rectF.centerY() + (this.f5223h / 2.0f));
                this.f5230o.close();
                this.f5218c.setColor(this.f5236u);
                this.f5218c.setAlpha(this.f5235t);
                canvas.save();
                canvas.rotate(f10 + f11, rectF.centerX(), rectF.centerY());
                canvas.drawPath(this.f5230o, this.f5218c);
                canvas.restore();
            }
        }

        int c() {
            return this.f5235t;
        }

        float d() {
            return this.f5221f;
        }

        int e() {
            return this.f5224i[f()];
        }

        int f() {
            return (this.f5225j + 1) % this.f5224i.length;
        }

        float g() {
            return this.f5220e;
        }

        int h() {
            return this.f5224i[this.f5225j];
        }

        float i() {
            return this.f5227l;
        }

        float j() {
            return this.f5228m;
        }

        float k() {
            return this.f5226k;
        }

        void l() {
            t(f());
        }

        void m() {
            this.f5226k = 0.0f;
            this.f5227l = 0.0f;
            this.f5228m = 0.0f;
            y(0.0f);
            v(0.0f);
            w(0.0f);
        }

        void n(int i10) {
            this.f5235t = i10;
        }

        void o(float f10, float f11) {
            this.f5233r = (int) f10;
            this.f5234s = (int) f11;
        }

        void p(float f10) {
            if (f10 != this.f5231p) {
                this.f5231p = f10;
            }
        }

        void q(float f10) {
            this.f5232q = f10;
        }

        void r(int i10) {
            this.f5236u = i10;
        }

        void s(ColorFilter colorFilter) {
            this.f5217b.setColorFilter(colorFilter);
        }

        void t(int i10) {
            this.f5225j = i10;
            this.f5236u = this.f5224i[i10];
        }

        void u(int[] iArr) {
            this.f5224i = iArr;
            t(0);
        }

        void v(float f10) {
            this.f5221f = f10;
        }

        void w(float f10) {
            this.f5222g = f10;
        }

        void x(boolean z10) {
            if (this.f5229n != z10) {
                this.f5229n = z10;
            }
        }

        void y(float f10) {
            this.f5220e = f10;
        }

        void z(float f10) {
            this.f5223h = f10;
            this.f5217b.setStrokeWidth(f10);
        }
    }

    public CircularProgressDrawable(Context context) {
        this.f5208i = ((Context) e.g(context)).getResources();
        c cVar = new c();
        this.f5206d = cVar;
        cVar.u(f5205t);
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
        this.f5207e = f10;
    }

    private void i(float f10, float f11, float f12, float f13) {
        c cVar = this.f5206d;
        float f14 = this.f5208i.getDisplayMetrics().density;
        cVar.z(f11 * f14);
        cVar.q(f10 * f14);
        cVar.t(0);
        cVar.o(f12 * f14, f13 * f14);
    }

    private void m() {
        c cVar = this.f5206d;
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        ofFloat.addUpdateListener(new a(cVar));
        ofFloat.setRepeatCount(-1);
        ofFloat.setRepeatMode(1);
        ofFloat.setInterpolator(f5203r);
        ofFloat.addListener(new b(cVar));
        this.f5209o = ofFloat;
    }

    void b(float f10, c cVar, boolean z10) {
        float interpolation;
        float f11;
        if (this.f5211q) {
            a(f10, cVar);
        } else if (f10 == 1.0f && !z10) {
        } else {
            float j10 = cVar.j();
            if (f10 < 0.5f) {
                interpolation = cVar.k();
                f11 = (f5204s.getInterpolation(f10 / 0.5f) * 0.79f) + 0.01f + interpolation;
            } else {
                float k10 = cVar.k() + 0.79f;
                interpolation = k10 - (((1.0f - f5204s.getInterpolation((f10 - 0.5f) / 0.5f)) * 0.79f) + 0.01f);
                f11 = k10;
            }
            cVar.y(interpolation);
            cVar.v(f11);
            cVar.w(j10 + (0.20999998f * f10));
            h((f10 + this.f5210p) * 216.0f);
        }
    }

    public void d(boolean z10) {
        this.f5206d.x(z10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Rect bounds = getBounds();
        canvas.save();
        canvas.rotate(this.f5207e, bounds.exactCenterX(), bounds.exactCenterY());
        this.f5206d.a(canvas, bounds);
        canvas.restore();
    }

    public void e(float f10) {
        this.f5206d.p(f10);
        invalidateSelf();
    }

    public void f(int... iArr) {
        this.f5206d.u(iArr);
        this.f5206d.t(0);
        invalidateSelf();
    }

    public void g(float f10) {
        this.f5206d.w(f10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f5206d.c();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        return this.f5209o.isRunning();
    }

    public void j(float f10, float f11) {
        this.f5206d.y(f10);
        this.f5206d.v(f11);
        invalidateSelf();
    }

    public void k(float f10) {
        this.f5206d.z(f10);
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
        this.f5206d.n(i10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f5206d.s(colorFilter);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        this.f5209o.cancel();
        this.f5206d.A();
        if (this.f5206d.d() != this.f5206d.g()) {
            this.f5211q = true;
            this.f5209o.setDuration(666L);
            this.f5209o.start();
            return;
        }
        this.f5206d.t(0);
        this.f5206d.m();
        this.f5209o.setDuration(1332L);
        this.f5209o.start();
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        this.f5209o.cancel();
        h(0.0f);
        this.f5206d.x(false);
        this.f5206d.t(0);
        this.f5206d.m();
        invalidateSelf();
    }
}
