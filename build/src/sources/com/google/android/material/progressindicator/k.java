package com.google.android.material.progressindicator;

import android.content.Context;
import android.graphics.ColorFilter;
import android.graphics.drawable.Drawable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends h {
    private i C;
    private j D;
    private Drawable E;

    k(Context context, b bVar, i iVar, j jVar) {
        super(context, bVar);
        A(iVar);
        z(jVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static k v(Context context, f fVar, c cVar) {
        j dVar;
        if (fVar.f16127o == 1) {
            dVar = new e(context, fVar);
        } else {
            dVar = new d(fVar);
        }
        k kVar = new k(context, fVar, cVar, dVar);
        kVar.B(androidx.vectordrawable.graphics.drawable.f.b(context.getResources(), bh.e.f6827b, null));
        return kVar;
    }

    private boolean y() {
        ph.a aVar = this.f16134i;
        if (aVar == null || aVar.a(this.f16132d.getContentResolver()) != 0.0f) {
            return false;
        }
        return true;
    }

    void A(i iVar) {
        this.C = iVar;
    }

    public void B(Drawable drawable) {
        this.E = drawable;
    }

    /* JADX WARN: Removed duplicated region for block: B:34:0x00d9  */
    @Override // android.graphics.drawable.Drawable
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void draw(android.graphics.Canvas r13) {
        /*
            Method dump skipped, instructions count: 290
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.material.progressindicator.k.draw(android.graphics.Canvas):void");
    }

    @Override // com.google.android.material.progressindicator.h, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ int getAlpha() {
        return super.getAlpha();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.C.e();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.C.f();
    }

    @Override // com.google.android.material.progressindicator.h, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ int getOpacity() {
        return super.getOpacity();
    }

    @Override // com.google.android.material.progressindicator.h, android.graphics.drawable.Animatable
    public /* bridge */ /* synthetic */ boolean isRunning() {
        return super.isRunning();
    }

    @Override // com.google.android.material.progressindicator.h
    public /* bridge */ /* synthetic */ boolean j() {
        return super.j();
    }

    @Override // com.google.android.material.progressindicator.h
    public /* bridge */ /* synthetic */ boolean l() {
        return super.l();
    }

    @Override // com.google.android.material.progressindicator.h
    public /* bridge */ /* synthetic */ boolean m() {
        return super.m();
    }

    @Override // com.google.android.material.progressindicator.h
    public /* bridge */ /* synthetic */ void o(androidx.vectordrawable.graphics.drawable.b bVar) {
        super.o(bVar);
    }

    @Override // com.google.android.material.progressindicator.h
    public /* bridge */ /* synthetic */ boolean s(boolean z10, boolean z11, boolean z12) {
        return super.s(z10, z11, z12);
    }

    @Override // com.google.android.material.progressindicator.h, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ void setAlpha(int i10) {
        super.setAlpha(i10);
    }

    @Override // com.google.android.material.progressindicator.h, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ void setColorFilter(ColorFilter colorFilter) {
        super.setColorFilter(colorFilter);
    }

    @Override // com.google.android.material.progressindicator.h, android.graphics.drawable.Drawable
    public /* bridge */ /* synthetic */ boolean setVisible(boolean z10, boolean z11) {
        return super.setVisible(z10, z11);
    }

    @Override // com.google.android.material.progressindicator.h, android.graphics.drawable.Animatable
    public /* bridge */ /* synthetic */ void start() {
        super.start();
    }

    @Override // com.google.android.material.progressindicator.h, android.graphics.drawable.Animatable
    public /* bridge */ /* synthetic */ void stop() {
        super.stop();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.material.progressindicator.h
    public boolean t(boolean z10, boolean z11, boolean z12) {
        Drawable drawable;
        boolean t10 = super.t(z10, z11, z12);
        if (y() && (drawable = this.E) != null) {
            return drawable.setVisible(z10, z11);
        }
        if (!isRunning()) {
            this.D.a();
        }
        if (z10) {
            if (!z12) {
                return t10;
            }
            this.D.g();
        }
        return t10;
    }

    @Override // com.google.android.material.progressindicator.h
    public /* bridge */ /* synthetic */ boolean u(androidx.vectordrawable.graphics.drawable.b bVar) {
        return super.u(bVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j w() {
        return this.D;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i x() {
        return this.C;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void z(j jVar) {
        this.D = jVar;
        jVar.e(this);
    }
}
