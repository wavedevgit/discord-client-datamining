package com.google.android.material.progressindicator;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ObjectAnimator;
import android.util.Property;
import com.google.android.material.progressindicator.i;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends j {

    /* renamed from: k  reason: collision with root package name */
    private static final int[] f16096k = {0, 1350, 2700, 4050};

    /* renamed from: l  reason: collision with root package name */
    private static final int[] f16097l = {667, 2017, 3367, 4717};

    /* renamed from: m  reason: collision with root package name */
    private static final int[] f16098m = {1000, 2350, 3700, 5050};

    /* renamed from: n  reason: collision with root package name */
    private static final Property f16099n = new c(Float.class, "animationFraction");

    /* renamed from: o  reason: collision with root package name */
    private static final Property f16100o = new C0188d(Float.class, "completeEndFraction");

    /* renamed from: c  reason: collision with root package name */
    private ObjectAnimator f16101c;

    /* renamed from: d  reason: collision with root package name */
    private ObjectAnimator f16102d;

    /* renamed from: e  reason: collision with root package name */
    private final h3.b f16103e;

    /* renamed from: f  reason: collision with root package name */
    private final com.google.android.material.progressindicator.b f16104f;

    /* renamed from: g  reason: collision with root package name */
    private int f16105g;

    /* renamed from: h  reason: collision with root package name */
    private float f16106h;

    /* renamed from: i  reason: collision with root package name */
    private float f16107i;

    /* renamed from: j  reason: collision with root package name */
    androidx.vectordrawable.graphics.drawable.b f16108j;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a extends AnimatorListenerAdapter {
        a() {
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
            super.onAnimationRepeat(animator);
            d dVar = d.this;
            dVar.f16105g = (dVar.f16105g + 4) % d.this.f16104f.f16074e.length;
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
            d.this.a();
            d dVar = d.this;
            androidx.vectordrawable.graphics.drawable.b bVar = dVar.f16108j;
            if (bVar != null) {
                bVar.b(dVar.f16165a);
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
        public Float get(d dVar) {
            return Float.valueOf(dVar.o());
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(d dVar, Float f10) {
            dVar.t(f10.floatValue());
        }
    }

    /* renamed from: com.google.android.material.progressindicator.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class C0188d extends Property {
        C0188d(Class cls, String str) {
            super(cls, str);
        }

        @Override // android.util.Property
        /* renamed from: a */
        public Float get(d dVar) {
            return Float.valueOf(dVar.p());
        }

        @Override // android.util.Property
        /* renamed from: b */
        public void set(d dVar, Float f10) {
            dVar.u(f10.floatValue());
        }
    }

    public d(f fVar) {
        super(1);
        this.f16105g = 0;
        this.f16108j = null;
        this.f16104f = fVar;
        this.f16103e = new h3.b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float o() {
        return this.f16106h;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float p() {
        return this.f16107i;
    }

    private void q() {
        if (this.f16101c == null) {
            ObjectAnimator ofFloat = ObjectAnimator.ofFloat(this, f16099n, 0.0f, 1.0f);
            this.f16101c = ofFloat;
            ofFloat.setDuration(this.f16104f.f16083n * 5400.0f);
            this.f16101c.setInterpolator(null);
            this.f16101c.setRepeatCount(-1);
            this.f16101c.addListener(new a());
        }
        if (this.f16102d == null) {
            ObjectAnimator ofFloat2 = ObjectAnimator.ofFloat(this, f16100o, 0.0f, 1.0f);
            this.f16102d = ofFloat2;
            ofFloat2.setDuration(this.f16104f.f16083n * 333.0f);
            this.f16102d.setInterpolator(this.f16103e);
            this.f16102d.addListener(new b());
        }
    }

    private void r(int i10) {
        for (int i11 = 0; i11 < 4; i11++) {
            float b10 = b(i10, f16098m[i11], 333);
            if (b10 > 0.0f && b10 < 1.0f) {
                int i12 = i11 + this.f16105g;
                int[] iArr = this.f16104f.f16074e;
                int length = i12 % iArr.length;
                ((i.a) this.f16166b.get(0)).f16155c = ch.c.b().evaluate(this.f16103e.getInterpolation(b10), Integer.valueOf(iArr[length]), Integer.valueOf(iArr[(length + 1) % iArr.length])).intValue();
                return;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void u(float f10) {
        this.f16107i = f10;
    }

    private void v() {
        q();
        this.f16101c.setDuration(this.f16104f.f16083n * 5400.0f);
        this.f16102d.setDuration(this.f16104f.f16083n * 333.0f);
    }

    private void w(int i10) {
        i.a aVar = (i.a) this.f16166b.get(0);
        float f10 = this.f16106h;
        aVar.f16153a = (f10 * 1520.0f) - 20.0f;
        aVar.f16154b = f10 * 1520.0f;
        for (int i11 = 0; i11 < 4; i11++) {
            aVar.f16154b += this.f16103e.getInterpolation(b(i10, f16096k[i11], 667)) * 250.0f;
            aVar.f16153a += this.f16103e.getInterpolation(b(i10, f16097l[i11], 667)) * 250.0f;
        }
        float f11 = aVar.f16153a;
        float f12 = aVar.f16154b;
        aVar.f16153a = (f11 + ((f12 - f11) * this.f16107i)) / 360.0f;
        aVar.f16154b = f12 / 360.0f;
    }

    @Override // com.google.android.material.progressindicator.j
    void a() {
        ObjectAnimator objectAnimator = this.f16101c;
        if (objectAnimator != null) {
            objectAnimator.cancel();
        }
    }

    @Override // com.google.android.material.progressindicator.j
    public void c() {
        v();
        s();
    }

    @Override // com.google.android.material.progressindicator.j
    public void d(androidx.vectordrawable.graphics.drawable.b bVar) {
        this.f16108j = bVar;
    }

    @Override // com.google.android.material.progressindicator.j
    void f() {
        ObjectAnimator objectAnimator = this.f16102d;
        if (objectAnimator != null && !objectAnimator.isRunning()) {
            if (this.f16165a.isVisible()) {
                this.f16102d.start();
            } else {
                a();
            }
        }
    }

    @Override // com.google.android.material.progressindicator.j
    void g() {
        q();
        s();
        this.f16101c.start();
    }

    @Override // com.google.android.material.progressindicator.j
    public void h() {
        this.f16108j = null;
    }

    void s() {
        this.f16105g = 0;
        ((i.a) this.f16166b.get(0)).f16155c = this.f16104f.f16074e[0];
        this.f16107i = 0.0f;
    }

    void t(float f10) {
        this.f16106h = f10;
        int i10 = (int) (f10 * 5400.0f);
        w(i10);
        r(i10);
        this.f16165a.invalidateSelf();
    }
}
