package com.google.android.material.textfield;

import android.graphics.Canvas;
import android.graphics.RectF;
import android.graphics.Region;
import android.graphics.drawable.Drawable;
import android.os.Build;
import ph.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h extends ph.g {
    b K;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends h {
        c(b bVar) {
            super(bVar);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // ph.g
        public void r(Canvas canvas) {
            if (this.K.f15480w.isEmpty()) {
                super.r(canvas);
                return;
            }
            canvas.save();
            if (Build.VERSION.SDK_INT >= 26) {
                canvas.clipOutRect(this.K.f15480w);
            } else {
                canvas.clipRect(this.K.f15480w, Region.Op.DIFFERENCE);
            }
            super.r(canvas);
            canvas.restore();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static h l0(b bVar) {
        return new c(bVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static h m0(ph.k kVar) {
        if (kVar == null) {
            kVar = new ph.k();
        }
        return l0(new b(kVar, new RectF()));
    }

    @Override // ph.g, android.graphics.drawable.Drawable
    public Drawable mutate() {
        this.K = new b(this.K);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean n0() {
        return !this.K.f15480w.isEmpty();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o0() {
        p0(0.0f, 0.0f, 0.0f, 0.0f);
    }

    void p0(float f10, float f11, float f12, float f13) {
        if (f10 == this.K.f15480w.left && f11 == this.K.f15480w.top && f12 == this.K.f15480w.right && f13 == this.K.f15480w.bottom) {
            return;
        }
        this.K.f15480w.set(f10, f11, f12, f13);
        invalidateSelf();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q0(RectF rectF) {
        p0(rectF.left, rectF.top, rectF.right, rectF.bottom);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends g.c {

        /* renamed from: w  reason: collision with root package name */
        private final RectF f15480w;

        @Override // ph.g.c, android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            h l02 = h.l0(this);
            l02.invalidateSelf();
            return l02;
        }

        private b(ph.k kVar, RectF rectF) {
            super(kVar, null);
            this.f15480w = rectF;
        }

        private b(b bVar) {
            super(bVar);
            this.f15480w = bVar.f15480w;
        }
    }

    private h(b bVar) {
        super(bVar);
        this.K = bVar;
    }
}
