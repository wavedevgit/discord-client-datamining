package com.google.android.material.textfield;

import android.graphics.Canvas;
import android.graphics.RectF;
import android.graphics.Region;
import android.graphics.drawable.Drawable;
import android.os.Build;
import th.h;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h extends th.h {
    b U;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends h {
        c(b bVar) {
            super(bVar);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // th.h
        public void w(Canvas canvas) {
            if (this.U.f16351x.isEmpty()) {
                super.w(canvas);
                return;
            }
            canvas.save();
            if (Build.VERSION.SDK_INT >= 26) {
                canvas.clipOutRect(this.U.f16351x);
            } else {
                canvas.clipRect(this.U.f16351x, Region.Op.DIFFERENCE);
            }
            super.w(canvas);
            canvas.restore();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static h y0(b bVar) {
        return new c(bVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static h z0(th.l lVar) {
        if (lVar == null) {
            lVar = new th.l();
        }
        return y0(new b(lVar, new RectF()));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean A0() {
        return !this.U.f16351x.isEmpty();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void B0() {
        C0(0.0f, 0.0f, 0.0f, 0.0f);
    }

    void C0(float f10, float f11, float f12, float f13) {
        if (f10 == this.U.f16351x.left && f11 == this.U.f16351x.top && f12 == this.U.f16351x.right && f13 == this.U.f16351x.bottom) {
            return;
        }
        this.U.f16351x.set(f10, f11, f12, f13);
        invalidateSelf();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void D0(RectF rectF) {
        C0(rectF.left, rectF.top, rectF.right, rectF.bottom);
    }

    @Override // th.h, android.graphics.drawable.Drawable
    public Drawable mutate() {
        this.U = new b(this.U);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends h.c {

        /* renamed from: x  reason: collision with root package name */
        private final RectF f16351x;

        @Override // th.h.c, android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            h y02 = h.y0(this);
            y02.invalidateSelf();
            return y02;
        }

        private b(th.l lVar, RectF rectF) {
            super(lVar, null);
            this.f16351x = rectF;
        }

        private b(b bVar) {
            super(bVar);
            this.f16351x = bVar.f16351x;
        }
    }

    private h(b bVar) {
        super(bVar);
        this.U = bVar;
    }
}
