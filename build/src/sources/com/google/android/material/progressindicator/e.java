package com.google.android.material.progressindicator;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ObjectAnimator;
import android.animation.TimeInterpolator;
import android.content.Context;
import android.util.Property;
import com.discord.js_watchdog.JSWatchdogManagerKt;
import com.google.android.material.progressindicator.i;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends j {

    /* renamed from: k  reason: collision with root package name */
    private static final TimeInterpolator f16111k = ch.a.f8277b;

    /* renamed from: l  reason: collision with root package name */
    private static final int[] f16112l = {0, JSWatchdogManagerKt.FREEZE_CHECK_DELAY_MS, 3000, 4500};

    /* renamed from: m  reason: collision with root package name */
    private static final float[] f16113m = {0.1f, 0.87f};

    /* renamed from: n  reason: collision with root package name */
    private static final Property f16114n = new c(Float.class, "animationFraction");

    /* renamed from: o  reason: collision with root package name */
    private static final Property f16115o = new d(Float.class, "completeEndFraction");

    /* renamed from: c  reason: collision with root package name */
    private ObjectAnimator f16116c;

    /* renamed from: d  reason: collision with root package name */
    private ObjectAnimator f16117d;

    /* renamed from: e  reason: collision with root package name */
    private final TimeInterpolator f16118e;

    /* renamed from: f  reason: collision with root package name */
    private final com.google.android.material.progressindicator.b f16119f;

    /* renamed from: g  reason: collision with root package name */
    private int f16120g;

    /* renamed from: h  reason: collision with root package name */
    private float f16121h;

    /* renamed from: i  reason: collision with root package name */
    private float f16122i;

    /* renamed from: j  reason: collision with root package name */
    androidx.vectordrawable.graphics.drawable.b f16123j;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
            super.onAnimationRepeat(animator);
            e eVar = e.this;
            eVar.f16120g = (eVar.f16120g + e.f16112l.length) % e.this.f16119f.f16074e.length;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends AnimatorListenerAdapter {
        b() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            super.onAnimationEnd(animator);
            e.this.a();
            e eVar = e.this;
            androidx.vectordrawable.graphics.drawable.b bVar = eVar.f16123j;
            if (bVar != null) {
                bVar.b(eVar.f16165a);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c extends Property {
        c(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Float get(e eVar) {
            return Float.valueOf(eVar.p());
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(e eVar, Float f10) {
            eVar.u(f10.floatValue());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class d extends Property {
        d(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Float get(e eVar) {
            return Float.valueOf(eVar.q());
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(e eVar, Float f10) {
            eVar.v(f10.floatValue());
        }
    }

    public e(Context context, f fVar) {
        super(1);
        this.f16120g = 0;
        this.f16123j = null;
        this.f16119f = fVar;
        this.f16118e = oh.g.g(context, bh.b.W, f16111k);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float p() {
        return this.f16121h;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float q() {
        return this.f16122i;
    }

    private void r() {
        if (this.f16116c == null) {
            ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this, f16114n, 0.0f, 1.0f);
            this.f16116c = ofFloat;
            ofFloat.setDuration(this.f16119f.f16083n * 6000.0f);
            this.f16116c.setInterpolator(null);
            this.f16116c.setRepeatCount(-1);
            this.f16116c.addListener(new a());
        }
        if (this.f16117d == null) {
            ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this, f16115o, 0.0f, 1.0f);
            this.f16117d = ofFloat2;
            ofFloat2.setDuration(this.f16119f.f16083n * 500.0f);
            this.f16117d.addListener(new b());
        }
    }

    private void s(int i10) {
        int i11 = 0;
        while (true) {
            int[] iArr = f16112l;
            if (i11 < iArr.length) {
                float b10 = b(i10, iArr[i11], 100);
                if (b10 >= 0.0f && b10 <= 1.0f) {
                    int i12 = i11 + this.f16120g;
                    int[] iArr2 = this.f16119f.f16074e;
                    int length = i12 % iArr2.length;
                    ((i.a) this.f16166b.get(0)).f16155c = ch.c.b().evaluate(this.f16118e.getInterpolation(b10), Integer.valueOf(iArr2[length]), Integer.valueOf(iArr2[(length + 1) % iArr2.length])).intValue();
                    return;
                }
                i11++;
            } else {
                return;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void v(float f10) {
        this.f16122i = f10;
    }

    private void w() {
        r();
        this.f16116c.setDuration(this.f16119f.f16083n * 6000.0f);
        this.f16117d.setDuration(this.f16119f.f16083n * 500.0f);
    }

    private void x(int i10) {
        i.a aVar = (i.a) this.f16166b.get(0);
        float f10 = this.f16121h * 1080.0f;
        float f11 = 0.0f;
        for (int i11 : f16112l) {
            f11 += this.f16118e.getInterpolation(b(i10, i11, 500)) * 90.0f;
        }
        aVar.f16159g = f10 + f11;
        float interpolation = this.f16118e.getInterpolation(b(i10, 0, 3000)) - this.f16118e.getInterpolation(b(i10, 3000, 3000));
        aVar.f16153a = 0.0f;
        float[] fArr = f16113m;
        float c10 = nh.a.c(fArr[0], fArr[1], interpolation);
        aVar.f16154b = c10;
        float f12 = this.f16122i;
        if (f12 > 0.0f) {
            aVar.f16154b = c10 * (1.0f - f12);
        }
    }

    @Override // com.google.android.material.progressindicator.j
    void a() {
        ObjectAnimator objectAnimator = this.f16116c;
        if (objectAnimator != null) {
            objectAnimator.cancel();
        }
    }

    @Override // com.google.android.material.progressindicator.j
    public void c() {
        w();
        t();
    }

    @Override // com.google.android.material.progressindicator.j
    public void d(androidx.vectordrawable.graphics.drawable.b bVar) {
        this.f16123j = bVar;
    }

    @Override // com.google.android.material.progressindicator.j
    void f() {
        ObjectAnimator objectAnimator = this.f16117d;
        if (objectAnimator != null && !objectAnimator.isRunning()) {
            if (this.f16165a.isVisible()) {
                this.f16117d.start();
            } else {
                a();
            }
        }
    }

    @Override // com.google.android.material.progressindicator.j
    void g() {
        r();
        t();
        this.f16116c.start();
    }

    @Override // com.google.android.material.progressindicator.j
    public void h() {
        this.f16123j = null;
    }

    void t() {
        this.f16120g = 0;
        ((i.a) this.f16166b.get(0)).f16155c = this.f16119f.f16074e[0];
        this.f16122i = 0.0f;
    }

    void u(float f10) {
        this.f16121h = f10;
        int i10 = (int) (f10 * 6000.0f);
        x(i10);
        s(i10);
        this.f16165a.invalidateSelf();
    }
}
