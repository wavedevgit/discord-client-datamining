package androidx.appcompat.widget;

import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.widget.CompoundButton;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class i {

    /* renamed from: a  reason: collision with root package name */
    private final CompoundButton f1803a;

    /* renamed from: b  reason: collision with root package name */
    private ColorStateList f1804b = null;

    /* renamed from: c  reason: collision with root package name */
    private PorterDuff.Mode f1805c = null;

    /* renamed from: d  reason: collision with root package name */
    private boolean f1806d = false;

    /* renamed from: e  reason: collision with root package name */
    private boolean f1807e = false;

    /* renamed from: f  reason: collision with root package name */
    private boolean f1808f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(CompoundButton compoundButton) {
        this.f1803a = compoundButton;
    }

    void a() {
        Drawable a10 = androidx.core.widget.d.a(this.f1803a);
        if (a10 != null) {
            if (this.f1806d || this.f1807e) {
                Drawable mutate = s1.a.r(a10).mutate();
                if (this.f1806d) {
                    s1.a.o(mutate, this.f1804b);
                }
                if (this.f1807e) {
                    s1.a.p(mutate, this.f1805c);
                }
                if (mutate.isStateful()) {
                    mutate.setState(this.f1803a.getDrawableState());
                }
                this.f1803a.setButtonDrawable(mutate);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ColorStateList b() {
        return this.f1804b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PorterDuff.Mode c() {
        return this.f1805c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0065 A[Catch: all -> 0x003d, TryCatch #1 {all -> 0x003d, blocks: (B:3:0x001f, B:5:0x0027, B:7:0x002f, B:16:0x005d, B:18:0x0065, B:19:0x0070, B:21:0x0078, B:11:0x0040, B:13:0x0048, B:15:0x0050), top: B:29:0x001f }] */
    /* JADX WARN: Removed duplicated region for block: B:21:0x0078 A[Catch: all -> 0x003d, TRY_LEAVE, TryCatch #1 {all -> 0x003d, blocks: (B:3:0x001f, B:5:0x0027, B:7:0x002f, B:16:0x005d, B:18:0x0065, B:19:0x0070, B:21:0x0078, B:11:0x0040, B:13:0x0048, B:15:0x0050), top: B:29:0x001f }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void d(android.util.AttributeSet r11, int r12) {
        /*
            r10 = this;
            android.widget.CompoundButton r0 = r10.f1803a
            android.content.Context r0 = r0.getContext()
            int[] r1 = f.j.U0
            r2 = 0
            androidx.appcompat.widget.v0 r1 = androidx.appcompat.widget.v0.v(r0, r11, r1, r12, r2)
            android.widget.CompoundButton r3 = r10.f1803a
            android.content.Context r4 = r3.getContext()
            int[] r5 = f.j.U0
            android.content.res.TypedArray r7 = r1.r()
            r9 = 0
            r6 = r11
            r8 = r12
            androidx.core.view.h0.l0(r3, r4, r5, r6, r7, r8, r9)
            int r11 = f.j.W0     // Catch: java.lang.Throwable -> L3d
            boolean r11 = r1.s(r11)     // Catch: java.lang.Throwable -> L3d
            if (r11 == 0) goto L40
            int r11 = f.j.W0     // Catch: java.lang.Throwable -> L3d
            int r11 = r1.n(r11, r2)     // Catch: java.lang.Throwable -> L3d
            if (r11 == 0) goto L40
            android.widget.CompoundButton r12 = r10.f1803a     // Catch: java.lang.Throwable -> L3d android.content.res.Resources.NotFoundException -> L40
            android.content.Context r0 = r12.getContext()     // Catch: java.lang.Throwable -> L3d android.content.res.Resources.NotFoundException -> L40
            android.graphics.drawable.Drawable r11 = g.a.b(r0, r11)     // Catch: java.lang.Throwable -> L3d android.content.res.Resources.NotFoundException -> L40
            r12.setButtonDrawable(r11)     // Catch: java.lang.Throwable -> L3d android.content.res.Resources.NotFoundException -> L40
            goto L5d
        L3d:
            r0 = move-exception
            r11 = r0
            goto L8d
        L40:
            int r11 = f.j.V0     // Catch: java.lang.Throwable -> L3d
            boolean r11 = r1.s(r11)     // Catch: java.lang.Throwable -> L3d
            if (r11 == 0) goto L5d
            int r11 = f.j.V0     // Catch: java.lang.Throwable -> L3d
            int r11 = r1.n(r11, r2)     // Catch: java.lang.Throwable -> L3d
            if (r11 == 0) goto L5d
            android.widget.CompoundButton r12 = r10.f1803a     // Catch: java.lang.Throwable -> L3d
            android.content.Context r0 = r12.getContext()     // Catch: java.lang.Throwable -> L3d
            android.graphics.drawable.Drawable r11 = g.a.b(r0, r11)     // Catch: java.lang.Throwable -> L3d
            r12.setButtonDrawable(r11)     // Catch: java.lang.Throwable -> L3d
        L5d:
            int r11 = f.j.X0     // Catch: java.lang.Throwable -> L3d
            boolean r11 = r1.s(r11)     // Catch: java.lang.Throwable -> L3d
            if (r11 == 0) goto L70
            android.widget.CompoundButton r11 = r10.f1803a     // Catch: java.lang.Throwable -> L3d
            int r12 = f.j.X0     // Catch: java.lang.Throwable -> L3d
            android.content.res.ColorStateList r12 = r1.c(r12)     // Catch: java.lang.Throwable -> L3d
            androidx.core.widget.d.d(r11, r12)     // Catch: java.lang.Throwable -> L3d
        L70:
            int r11 = f.j.Y0     // Catch: java.lang.Throwable -> L3d
            boolean r11 = r1.s(r11)     // Catch: java.lang.Throwable -> L3d
            if (r11 == 0) goto L89
            android.widget.CompoundButton r11 = r10.f1803a     // Catch: java.lang.Throwable -> L3d
            int r12 = f.j.Y0     // Catch: java.lang.Throwable -> L3d
            r0 = -1
            int r12 = r1.k(r12, r0)     // Catch: java.lang.Throwable -> L3d
            r0 = 0
            android.graphics.PorterDuff$Mode r12 = androidx.appcompat.widget.e0.e(r12, r0)     // Catch: java.lang.Throwable -> L3d
            androidx.core.widget.d.e(r11, r12)     // Catch: java.lang.Throwable -> L3d
        L89:
            r1.x()
            return
        L8d:
            r1.x()
            throw r11
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.appcompat.widget.i.d(android.util.AttributeSet, int):void");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e() {
        if (this.f1808f) {
            this.f1808f = false;
            return;
        }
        this.f1808f = true;
        a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(ColorStateList colorStateList) {
        this.f1804b = colorStateList;
        this.f1806d = true;
        a();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(PorterDuff.Mode mode) {
        this.f1805c = mode;
        this.f1807e = true;
        a();
    }
}
