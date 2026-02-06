package com.google.android.material.progressindicator;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import com.google.android.material.progressindicator.h;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends g {
    private h A;
    private i B;
    private Drawable C;

    j(Context context, b bVar, h hVar, i iVar) {
        super(context, bVar);
        y(hVar);
        x(iVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static j t(Context context, e eVar, c cVar) {
        j jVar = new j(context, eVar, cVar, new d(eVar));
        jVar.z(androidx.vectordrawable.graphics.drawable.f.b(context.getResources(), ah.e.f710b, null));
        return jVar;
    }

    private boolean w() {
        mh.a aVar = this.f15255i;
        if (aVar == null || aVar.a(this.f15253d.getContentResolver()) != 0.0f) {
            return false;
        }
        return true;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        int i10;
        Drawable drawable;
        Rect rect = new Rect();
        if (!getBounds().isEmpty() && isVisible() && canvas.getClipBounds(rect)) {
            if (w() && (drawable = this.C) != null) {
                drawable.setBounds(getBounds());
                s1.a.n(this.C, this.f15254e.f15224c[0]);
                this.C.draw(canvas);
                return;
            }
            canvas.save();
            this.A.g(canvas, getBounds(), h(), k(), j());
            int i11 = this.f15254e.f15228g;
            int alpha = getAlpha();
            if (i11 == 0) {
                this.A.d(canvas, this.f15265x, 0.0f, 1.0f, this.f15254e.f15225d, alpha, 0);
                i10 = i11;
            } else {
                List list = this.B.f15275b;
                alpha = 0;
                i10 = i11;
                this.A.d(canvas, this.f15265x, ((h.a) list.get(list.size() - 1)).f15271b, 1.0f + ((h.a) this.B.f15275b.get(0)).f15270a, this.f15254e.f15225d, 0, i10);
            }
            for (int i12 = 0; i12 < this.B.f15275b.size(); i12++) {
                h.a aVar = (h.a) this.B.f15275b.get(i12);
                this.A.c(canvas, this.f15265x, aVar, getAlpha());
                if (i12 > 0 && i10 > 0) {
                    this.A.d(canvas, this.f15265x, ((h.a) this.B.f15275b.get(i12 - 1)).f15271b, aVar.f15270a, this.f15254e.f15225d, alpha, i10);
                }
            }
            canvas.restore();
        }
    }

    @Override // com.google.android.material.progressindicator.g, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ int getAlpha() {
        return super.getAlpha();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.A.e();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.A.f();
    }

    @Override // com.google.android.material.progressindicator.g, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ int getOpacity() {
        return super.getOpacity();
    }

    @Override // com.google.android.material.progressindicator.g
    public /* bridge */ /* synthetic */ boolean i() {
        return super.i();
    }

    @Override // com.google.android.material.progressindicator.g, android.graphics.drawable.Animatable
    public /* bridge */ /* synthetic */ boolean isRunning() {
        return super.isRunning();
    }

    @Override // com.google.android.material.progressindicator.g
    public /* bridge */ /* synthetic */ boolean j() {
        return super.j();
    }

    @Override // com.google.android.material.progressindicator.g
    public /* bridge */ /* synthetic */ boolean k() {
        return super.k();
    }

    @Override // com.google.android.material.progressindicator.g
    public /* bridge */ /* synthetic */ void m(androidx.vectordrawable.graphics.drawable.b bVar) {
        super.m(bVar);
    }

    @Override // com.google.android.material.progressindicator.g
    public /* bridge */ /* synthetic */ boolean q(boolean z10, boolean z11, boolean z12) {
        return super.q(z10, z11, z12);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.g
    public boolean r(boolean z10, boolean z11, boolean z12) {
        Drawable drawable;
        boolean r10 = super.r(z10, z11, z12);
        if (w() && (drawable = this.C) != null) {
            return drawable.setVisible(z10, z11);
        }
        if (!isRunning()) {
            this.B.a();
        }
        if (z10) {
            if (!z12) {
                return r10;
            }
            this.B.g();
        }
        return r10;
    }

    @Override // com.google.android.material.progressindicator.g
    public /* bridge */ /* synthetic */ boolean s(androidx.vectordrawable.graphics.drawable.b bVar) {
        return super.s(bVar);
    }

    @Override // com.google.android.material.progressindicator.g, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ void setAlpha(int i10) {
        super.setAlpha(i10);
    }

    @Override // com.google.android.material.progressindicator.g, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ void setColorFilter(ColorFilter colorFilter) {
        super.setColorFilter(colorFilter);
    }

    @Override // com.google.android.material.progressindicator.g, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ boolean setVisible(boolean z10, boolean z11) {
        return super.setVisible(z10, z11);
    }

    @Override // com.google.android.material.progressindicator.g, android.graphics.drawable.Animatable
    public /* bridge */ /* synthetic */ void start() {
        super.start();
    }

    @Override // com.google.android.material.progressindicator.g, android.graphics.drawable.Animatable
    public /* bridge */ /* synthetic */ void stop() {
        super.stop();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i u() {
        return this.B;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public h v() {
        return this.A;
    }

    void x(i iVar) {
        this.B = iVar;
        iVar.e(this);
    }

    void y(h hVar) {
        this.A = hVar;
    }

    public void z(Drawable drawable) {
        this.C = drawable;
    }
}
