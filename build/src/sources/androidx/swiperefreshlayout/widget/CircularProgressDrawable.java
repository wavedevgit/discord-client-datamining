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
    private static final Interpolator f5532r = new LinearInterpolator();

    /* renamed from: s  reason: collision with root package name */
    private static final Interpolator f5533s = new h3.b();

    /* renamed from: t  reason: collision with root package name */
    private static final int[] f5534t = {-16777216};

    /* renamed from: d  reason: collision with root package name */
    private final c f5535d;

    /* renamed from: e  reason: collision with root package name */
    private float f5536e;

    /* renamed from: i  reason: collision with root package name */
    private Resources f5537i;

    /* renamed from: o  reason: collision with root package name */
    private Animator f5538o;

    /* renamed from: p  reason: collision with root package name */
    float f5539p;

    /* renamed from: q  reason: collision with root package name */
    boolean f5540q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements ValueAnimator.AnimatorUpdateListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c f5541a;

        a(c cVar) {
            this.f5541a = cVar;
        }

        @Override // android.animation.ValueAnimator.AnimatorUpdateListener
        public void onAnimationUpdate(ValueAnimator valueAnimator) {
            float floatValue = ((Float) valueAnimator.getAnimatedValue()).floatValue();
            CircularProgressDrawable.this.n(floatValue, this.f5541a);
            CircularProgressDrawable.this.b(floatValue, this.f5541a, false);
            CircularProgressDrawable.this.invalidateSelf();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Animator.AnimatorListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ c f5543a;

        b(c cVar) {
            this.f5543a = cVar;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
            CircularProgressDrawable.this.b(1.0f, this.f5543a, true);
            this.f5543a.A();
            this.f5543a.l();
            CircularProgressDrawable circularProgressDrawable = CircularProgressDrawable.this;
            if (circularProgressDrawable.f5540q) {
                circularProgressDrawable.f5540q = false;
                animator.cancel();
                animator.setDuration(1332L);
                animator.start();
                this.f5543a.x(false);
                return;
            }
            circularProgressDrawable.f5539p += 1.0f;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
            CircularProgressDrawable.this.f5539p = 0.0f;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        final RectF f5545a = new RectF();

        /* renamed from: b  reason: collision with root package name */
        final Paint f5546b;

        /* renamed from: c  reason: collision with root package name */
        final Paint f5547c;

        /* renamed from: d  reason: collision with root package name */
        final Paint f5548d;

        /* renamed from: e  reason: collision with root package name */
        float f5549e;

        /* renamed from: f  reason: collision with root package name */
        float f5550f;

        /* renamed from: g  reason: collision with root package name */
        float f5551g;

        /* renamed from: h  reason: collision with root package name */
        float f5552h;

        /* renamed from: i  reason: collision with root package name */
        int[] f5553i;

        /* renamed from: j  reason: collision with root package name */
        int f5554j;

        /* renamed from: k  reason: collision with root package name */
        float f5555k;

        /* renamed from: l  reason: collision with root package name */
        float f5556l;

        /* renamed from: m  reason: collision with root package name */
        float f5557m;

        /* renamed from: n  reason: collision with root package name */
        boolean f5558n;

        /* renamed from: o  reason: collision with root package name */
        Path f5559o;

        /* renamed from: p  reason: collision with root package name */
        float f5560p;

        /* renamed from: q  reason: collision with root package name */
        float f5561q;

        /* renamed from: r  reason: collision with root package name */
        int f5562r;

        /* renamed from: s  reason: collision with root package name */
        int f5563s;

        /* renamed from: t  reason: collision with root package name */
        int f5564t;

        /* renamed from: u  reason: collision with root package name */
        int f5565u;

        c() {
            Paint paint = new Paint();
            this.f5546b = paint;
            Paint paint2 = new Paint();
            this.f5547c = paint2;
            Paint paint3 = new Paint();
            this.f5548d = paint3;
            this.f5549e = 0.0f;
            this.f5550f = 0.0f;
            this.f5551g = 0.0f;
            this.f5552h = 5.0f;
            this.f5560p = 1.0f;
            this.f5564t = SetSpanOperation.SPAN_MAX_PRIORITY;
            paint.setStrokeCap(Paint.Cap.SQUARE);
            paint.setAntiAlias(true);
            paint.setStyle(Paint.Style.STROKE);
            paint2.setStyle(Paint.Style.FILL);
            paint2.setAntiAlias(true);
            paint3.setColor(0);
        }

        void A() {
            this.f5555k = this.f5549e;
            this.f5556l = this.f5550f;
            this.f5557m = this.f5551g;
        }

        void a(Canvas canvas, Rect rect) {
            RectF rectF = this.f5545a;
            float f10 = this.f5561q;
            float f11 = (this.f5552h / 2.0f) + f10;
            if (f10 <= 0.0f) {
                f11 = (Math.min(rect.width(), rect.height()) / 2.0f) - Math.max((this.f5562r * this.f5560p) / 2.0f, this.f5552h / 2.0f);
            }
            rectF.set(rect.centerX() - f11, rect.centerY() - f11, rect.centerX() + f11, rect.centerY() + f11);
            float f12 = this.f5549e;
            float f13 = this.f5551g;
            float f14 = (f12 + f13) * 360.0f;
            float f15 = ((this.f5550f + f13) * 360.0f) - f14;
            this.f5546b.setColor(this.f5565u);
            this.f5546b.setAlpha(this.f5564t);
            float f16 = this.f5552h / 2.0f;
            rectF.inset(f16, f16);
            canvas.drawCircle(rectF.centerX(), rectF.centerY(), rectF.width() / 2.0f, this.f5548d);
            float f17 = -f16;
            rectF.inset(f17, f17);
            canvas.drawArc(rectF, f14, f15, false, this.f5546b);
            b(canvas, f14, f15, rectF);
        }

        void b(Canvas canvas, float f10, float f11, RectF rectF) {
            if (this.f5558n) {
                Path path = this.f5559o;
                if (path == null) {
                    Path path2 = new Path();
                    this.f5559o = path2;
                    path2.setFillType(Path.FillType.EVEN_ODD);
                } else {
                    path.reset();
                }
                this.f5559o.moveTo(0.0f, 0.0f);
                this.f5559o.lineTo(this.f5562r * this.f5560p, 0.0f);
                Path path3 = this.f5559o;
                float f12 = this.f5560p;
                path3.lineTo((this.f5562r * f12) / 2.0f, this.f5563s * f12);
                this.f5559o.offset(((Math.min(rectF.width(), rectF.height()) / 2.0f) + rectF.centerX()) - ((this.f5562r * this.f5560p) / 2.0f), rectF.centerY() + (this.f5552h / 2.0f));
                this.f5559o.close();
                this.f5547c.setColor(this.f5565u);
                this.f5547c.setAlpha(this.f5564t);
                canvas.save();
                canvas.rotate(f10 + f11, rectF.centerX(), rectF.centerY());
                canvas.drawPath(this.f5559o, this.f5547c);
                canvas.restore();
            }
        }

        int c() {
            return this.f5564t;
        }

        float d() {
            return this.f5550f;
        }

        int e() {
            return this.f5553i[f()];
        }

        int f() {
            return (this.f5554j + 1) % this.f5553i.length;
        }

        float g() {
            return this.f5549e;
        }

        int h() {
            return this.f5553i[this.f5554j];
        }

        float i() {
            return this.f5556l;
        }

        float j() {
            return this.f5557m;
        }

        float k() {
            return this.f5555k;
        }

        void l() {
            t(f());
        }

        void m() {
            this.f5555k = 0.0f;
            this.f5556l = 0.0f;
            this.f5557m = 0.0f;
            y(0.0f);
            v(0.0f);
            w(0.0f);
        }

        void n(int i10) {
            this.f5564t = i10;
        }

        void o(float f10, float f11) {
            this.f5562r = (int) f10;
            this.f5563s = (int) f11;
        }

        void p(float f10) {
            if (f10 != this.f5560p) {
                this.f5560p = f10;
            }
        }

        void q(float f10) {
            this.f5561q = f10;
        }

        void r(int i10) {
            this.f5565u = i10;
        }

        void s(ColorFilter colorFilter) {
            this.f5546b.setColorFilter(colorFilter);
        }

        void t(int i10) {
            this.f5554j = i10;
            this.f5565u = this.f5553i[i10];
        }

        void u(int[] iArr) {
            this.f5553i = iArr;
            t(0);
        }

        void v(float f10) {
            this.f5550f = f10;
        }

        void w(float f10) {
            this.f5551g = f10;
        }

        void x(boolean z10) {
            if (this.f5558n != z10) {
                this.f5558n = z10;
            }
        }

        void y(float f10) {
            this.f5549e = f10;
        }

        void z(float f10) {
            this.f5552h = f10;
            this.f5546b.setStrokeWidth(f10);
        }
    }

    public CircularProgressDrawable(Context context) {
        this.f5537i = ((Context) e.g(context)).getResources();
        c cVar = new c();
        this.f5535d = cVar;
        cVar.u(f5534t);
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
        this.f5536e = f10;
    }

    private void i(float f10, float f11, float f12, float f13) {
        c cVar = this.f5535d;
        float f14 = this.f5537i.getDisplayMetrics().density;
        cVar.z(f11 * f14);
        cVar.q(f10 * f14);
        cVar.t(0);
        cVar.o(f12 * f14, f13 * f14);
    }

    private void m() {
        c cVar = this.f5535d;
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        ofFloat.addUpdateListener(new a(cVar));
        ofFloat.setRepeatCount(-1);
        ofFloat.setRepeatMode(1);
        ofFloat.setInterpolator(f5532r);
        ofFloat.addListener(new b(cVar));
        this.f5538o = ofFloat;
    }

    void b(float f10, c cVar, boolean z10) {
        float interpolation;
        float f11;
        if (this.f5540q) {
            a(f10, cVar);
        } else if (f10 == 1.0f && !z10) {
        } else {
            float j10 = cVar.j();
            if (f10 < 0.5f) {
                interpolation = cVar.k();
                f11 = (f5533s.getInterpolation(f10 / 0.5f) * 0.79f) + 0.01f + interpolation;
            } else {
                float k10 = cVar.k() + 0.79f;
                interpolation = k10 - (((1.0f - f5533s.getInterpolation((f10 - 0.5f) / 0.5f)) * 0.79f) + 0.01f);
                f11 = k10;
            }
            cVar.y(interpolation);
            cVar.v(f11);
            cVar.w(j10 + (0.20999998f * f10));
            h((f10 + this.f5539p) * 216.0f);
        }
    }

    public void d(boolean z10) {
        this.f5535d.x(z10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Rect bounds = getBounds();
        canvas.save();
        canvas.rotate(this.f5536e, bounds.exactCenterX(), bounds.exactCenterY());
        this.f5535d.a(canvas, bounds);
        canvas.restore();
    }

    public void e(float f10) {
        this.f5535d.p(f10);
        invalidateSelf();
    }

    public void f(int... iArr) {
        this.f5535d.u(iArr);
        this.f5535d.t(0);
        invalidateSelf();
    }

    public void g(float f10) {
        this.f5535d.w(f10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f5535d.c();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        return this.f5538o.isRunning();
    }

    public void j(float f10, float f11) {
        this.f5535d.y(f10);
        this.f5535d.v(f11);
        invalidateSelf();
    }

    public void k(float f10) {
        this.f5535d.z(f10);
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
        this.f5535d.n(i10);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f5535d.s(colorFilter);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        this.f5538o.cancel();
        this.f5535d.A();
        if (this.f5535d.d() != this.f5535d.g()) {
            this.f5540q = true;
            this.f5538o.setDuration(666L);
            this.f5538o.start();
            return;
        }
        this.f5535d.t(0);
        this.f5535d.m();
        this.f5538o.setDuration(1332L);
        this.f5538o.start();
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        this.f5538o.cancel();
        h(0.0f);
        this.f5535d.x(false);
        this.f5535d.t(0);
        this.f5535d.m();
        invalidateSelf();
    }
}
