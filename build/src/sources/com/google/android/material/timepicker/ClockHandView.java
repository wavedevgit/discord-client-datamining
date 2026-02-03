package com.google.android.material.timepicker;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.TimeInterpolator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.util.Pair;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewConfiguration;
import androidx.core.view.h0;
import androidx.recyclerview.widget.h;
import com.google.android.material.internal.o;
import java.util.ArrayList;
import java.util.List;
import jh.g;
import yg.j;
import yg.k;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ClockHandView extends View {
    private float A;
    private boolean B;
    private double C;
    private int D;
    private int E;

    /* renamed from: d  reason: collision with root package name */
    private final int f16235d;

    /* renamed from: e  reason: collision with root package name */
    private final TimeInterpolator f16236e;

    /* renamed from: i  reason: collision with root package name */
    private final ValueAnimator f16237i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f16238o;

    /* renamed from: p  reason: collision with root package name */
    private float f16239p;

    /* renamed from: q  reason: collision with root package name */
    private float f16240q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f16241r;

    /* renamed from: s  reason: collision with root package name */
    private final int f16242s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f16243t;

    /* renamed from: u  reason: collision with root package name */
    private final List f16244u;

    /* renamed from: v  reason: collision with root package name */
    private final int f16245v;

    /* renamed from: w  reason: collision with root package name */
    private final float f16246w;

    /* renamed from: x  reason: collision with root package name */
    private final Paint f16247x;

    /* renamed from: y  reason: collision with root package name */
    private final RectF f16248y;

    /* renamed from: z  reason: collision with root package name */
    private final int f16249z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            animator.end();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        void a(float f10, boolean z10);
    }

    public ClockHandView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, yg.b.B);
    }

    public static /* synthetic */ void a(ClockHandView clockHandView, ValueAnimator valueAnimator) {
        clockHandView.getClass();
        clockHandView.o(((Float) valueAnimator.getAnimatedValue()).floatValue(), true);
    }

    private void c(float f10, float f11) {
        int i10 = 2;
        if (ih.a.a(getWidth() / 2, getHeight() / 2, f10, f11) > h(2) + o.d(getContext(), 12)) {
            i10 = 1;
        }
        this.E = i10;
    }

    private void d(Canvas canvas) {
        int h10;
        int height = getHeight() / 2;
        int width = getWidth() / 2;
        float f10 = width;
        float h11 = h(this.E);
        float cos = (((float) Math.cos(this.C)) * h11) + f10;
        float f11 = height;
        this.f16247x.setStrokeWidth(0.0f);
        canvas.drawCircle(cos, (h11 * ((float) Math.sin(this.C))) + f11, this.f16245v, this.f16247x);
        double sin = Math.sin(this.C);
        double cos2 = Math.cos(this.C);
        this.f16247x.setStrokeWidth(this.f16249z);
        canvas.drawLine(f10, f11, width + ((int) (cos2 * r2)), height + ((int) (r2 * sin)), this.f16247x);
        canvas.drawCircle(f10, f11, this.f16246w, this.f16247x);
    }

    private int f(float f10, float f11) {
        int degrees = (int) Math.toDegrees(Math.atan2(f11 - (getHeight() / 2), f10 - (getWidth() / 2)));
        int i10 = degrees + 90;
        if (i10 < 0) {
            return degrees + 450;
        }
        return i10;
    }

    private int h(int i10) {
        if (i10 == 2) {
            return Math.round(this.D * 0.66f);
        }
        return this.D;
    }

    private Pair j(float f10) {
        float g10 = g();
        if (Math.abs(g10 - f10) > 180.0f) {
            if (g10 > 180.0f && f10 < 180.0f) {
                f10 += 360.0f;
            }
            if (g10 < 180.0f && f10 > 180.0f) {
                g10 += 360.0f;
            }
        }
        return new Pair(Float.valueOf(g10), Float.valueOf(f10));
    }

    private boolean k(float f10, float f11, boolean z10, boolean z11, boolean z12) {
        boolean z13;
        float f12 = f(f10, f11);
        boolean z14 = false;
        if (g() != f12) {
            z13 = true;
        } else {
            z13 = false;
        }
        if (z11 && z13) {
            return true;
        }
        if (!z13 && !z10) {
            return false;
        }
        if (z12 && this.f16238o) {
            z14 = true;
        }
        n(f12, z14);
        return true;
    }

    private void o(float f10, boolean z10) {
        float f11 = f10 % 360.0f;
        this.A = f11;
        this.C = Math.toRadians(f11 - 90.0f);
        float h10 = h(this.E);
        float width = (getWidth() / 2) + (((float) Math.cos(this.C)) * h10);
        float height = (getHeight() / 2) + (h10 * ((float) Math.sin(this.C)));
        RectF rectF = this.f16248y;
        int i10 = this.f16245v;
        rectF.set(width - i10, height - i10, width + i10, height + i10);
        for (b bVar : this.f16244u) {
            bVar.a(f11, z10);
        }
        invalidate();
    }

    public void b(b bVar) {
        this.f16244u.add(bVar);
    }

    public RectF e() {
        return this.f16248y;
    }

    public float g() {
        return this.A;
    }

    public int i() {
        return this.f16245v;
    }

    public void l(int i10) {
        this.D = i10;
        invalidate();
    }

    public void m(float f10) {
        n(f10, false);
    }

    public void n(float f10, boolean z10) {
        ValueAnimator valueAnimator = this.f16237i;
        if (valueAnimator != null) {
            valueAnimator.cancel();
        }
        if (!z10) {
            o(f10, false);
            return;
        }
        Pair j10 = j(f10);
        this.f16237i.setFloatValues(((Float) j10.first).floatValue(), ((Float) j10.second).floatValue());
        this.f16237i.setDuration(this.f16235d);
        this.f16237i.setInterpolator(this.f16236e);
        this.f16237i.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.google.android.material.timepicker.a
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                ClockHandView.a(ClockHandView.this, valueAnimator2);
            }
        });
        this.f16237i.addListener(new a());
        this.f16237i.start();
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        d(canvas);
    }

    @Override // android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        if (!this.f16237i.isRunning()) {
            m(g());
        }
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        int actionMasked = motionEvent.getActionMasked();
        float x10 = motionEvent.getX();
        float y10 = motionEvent.getY();
        if (actionMasked != 0) {
            if (actionMasked != 1 && actionMasked != 2) {
                z11 = false;
                z10 = false;
                z12 = false;
            } else {
                int i10 = (int) (x10 - this.f16239p);
                int i11 = (int) (y10 - this.f16240q);
                if ((i10 * i10) + (i11 * i11) > this.f16242s) {
                    z13 = true;
                } else {
                    z13 = false;
                }
                this.f16241r = z13;
                z11 = this.B;
                if (actionMasked == 1) {
                    z14 = true;
                } else {
                    z14 = false;
                }
                if (this.f16243t) {
                    c(x10, y10);
                }
                z12 = z14;
                z10 = false;
            }
        } else {
            this.f16239p = x10;
            this.f16240q = y10;
            this.f16241r = true;
            this.B = false;
            z10 = true;
            z11 = false;
            z12 = false;
        }
        this.B |= k(x10, y10, z11, z10, z12);
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(boolean z10) {
        if (this.f16243t && !z10) {
            this.E = 1;
        }
        this.f16243t = z10;
        invalidate();
    }

    public ClockHandView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f16237i = new ValueAnimator();
        this.f16244u = new ArrayList();
        Paint paint = new Paint();
        this.f16247x = paint;
        this.f16248y = new RectF();
        this.E = 1;
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, k.f54709u1, i10, j.f54514z);
        this.f16235d = g.f(context, yg.b.F, h.DEFAULT_DRAG_ANIMATION_DURATION);
        this.f16236e = g.g(context, yg.b.P, zg.a.f55807b);
        this.D = obtainStyledAttributes.getDimensionPixelSize(k.f54727w1, 0);
        this.f16245v = obtainStyledAttributes.getDimensionPixelSize(k.f54736x1, 0);
        Resources resources = getResources();
        this.f16249z = resources.getDimensionPixelSize(yg.d.f54395u);
        this.f16246w = resources.getDimensionPixelSize(yg.d.f54393s);
        int color = obtainStyledAttributes.getColor(k.f54718v1, 0);
        paint.setAntiAlias(true);
        paint.setColor(color);
        m(0.0f);
        this.f16242s = ViewConfiguration.get(context).getScaledTouchSlop();
        h0.x0(this, 2);
        obtainStyledAttributes.recycle();
    }
}
