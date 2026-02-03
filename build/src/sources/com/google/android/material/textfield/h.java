package com.google.android.material.textfield;

import android.graphics.Canvas;
import android.graphics.RectF;
import android.graphics.Region;
import android.graphics.drawable.Drawable;
import android.os.Build;
import oh.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h extends oh.g {
    b K;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends h {
        c(b bVar) {
            super(bVar);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // oh.g
        public void r(Canvas canvas) {
            if (this.K.f15086w.isEmpty()) {
                super.r(canvas);
                return;
            }
            canvas.save();
            if (Build.VERSION.SDK_INT >= 26) {
                canvas.clipOutRect(this.K.f15086w);
            } else {
                canvas.clipRect(this.K.f15086w, Region.Op.DIFFERENCE);
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
    public static h m0(oh.k kVar) {
        if (kVar == null) {
            kVar = new oh.k();
        }
        return l0(new b(kVar, new RectF()));
    }

    @Override // oh.g, android.graphics.drawable.Drawable
    public Drawable mutate() {
        this.K = new b(this.K);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean n0() {
        return !this.K.f15086w.isEmpty();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o0() {
        p0(0.0f, 0.0f, 0.0f, 0.0f);
    }

    void p0(float f10, float f11, float f12, float f13) {
        if (f10 == this.K.f15086w.left && f11 == this.K.f15086w.top && f12 == this.K.f15086w.right && f13 == this.K.f15086w.bottom) {
            return;
        }
        this.K.f15086w.set(f10, f11, f12, f13);
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
        private final RectF f15086w;

        @Override // oh.g.c, android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            h l02 = h.l0(this);
            l02.invalidateSelf();
            return l02;
        }

        private b(oh.k kVar, RectF rectF) {
            super(kVar, null);
            this.f15086w = rectF;
        }

        private b(b bVar) {
            super(bVar);
            this.f15086w = bVar.f15086w;
        }
    }

    private h(b bVar) {
        super(bVar);
        this.K = bVar;
    }
}
