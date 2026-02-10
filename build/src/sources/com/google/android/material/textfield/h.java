package com.google.android.material.textfield;

import android.graphics.Canvas;
import android.graphics.RectF;
import android.graphics.Region;
import android.graphics.drawable.Drawable;
import android.os.Build;
import rh.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h extends rh.g {
    b K;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends h {
        c(b bVar) {
            super(bVar);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // rh.g
        public void r(Canvas canvas) {
            if (this.K.f15600w.isEmpty()) {
                super.r(canvas);
                return;
            }
            canvas.save();
            if (Build.VERSION.SDK_INT >= 26) {
                canvas.clipOutRect(this.K.f15600w);
            } else {
                canvas.clipRect(this.K.f15600w, Region.Op.DIFFERENCE);
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
    public static h m0(rh.k kVar) {
        if (kVar == null) {
            kVar = new rh.k();
        }
        return l0(new b(kVar, new RectF()));
    }

    @Override // rh.g, android.graphics.drawable.Drawable
    public Drawable mutate() {
        this.K = new b(this.K);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean n0() {
        return !this.K.f15600w.isEmpty();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o0() {
        p0(0.0f, 0.0f, 0.0f, 0.0f);
    }

    void p0(float f10, float f11, float f12, float f13) {
        if (f10 == this.K.f15600w.left && f11 == this.K.f15600w.top && f12 == this.K.f15600w.right && f13 == this.K.f15600w.bottom) {
            return;
        }
        this.K.f15600w.set(f10, f11, f12, f13);
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
        private final RectF f15600w;

        @Override // rh.g.c, android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            h l02 = h.l0(this);
            l02.invalidateSelf();
            return l02;
        }

        private b(rh.k kVar, RectF rectF) {
            super(kVar, null);
            this.f15600w = rectF;
        }

        private b(b bVar) {
            super(bVar);
            this.f15600w = bVar.f15600w;
        }
    }

    private h(b bVar) {
        super(bVar);
        this.K = bVar;
    }
}
