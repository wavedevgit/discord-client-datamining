package com.facebook.drawee.drawable;

import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import android.os.SystemClock;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e extends a {
    int[] A;
    int[] B;
    int C;
    boolean[] D;
    int E;
    private z9.m F;
    private boolean G;
    private boolean H;
    private boolean I;

    /* renamed from: t  reason: collision with root package name */
    private final Drawable[] f10041t;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f10042u;

    /* renamed from: v  reason: collision with root package name */
    private final int f10043v;

    /* renamed from: w  reason: collision with root package name */
    private final int f10044w;

    /* renamed from: x  reason: collision with root package name */
    int f10045x;

    /* renamed from: y  reason: collision with root package name */
    int f10046y;

    /* renamed from: z  reason: collision with root package name */
    long f10047z;

    public e(Drawable[] drawableArr, boolean z10, int i10) {
        super(drawableArr);
        this.I = true;
        o8.j.j(drawableArr.length >= 1, "At least one layer required!");
        this.f10041t = drawableArr;
        this.A = new int[drawableArr.length];
        this.B = new int[drawableArr.length];
        this.C = SetSpanOperation.SPAN_MAX_PRIORITY;
        this.D = new boolean[drawableArr.length];
        this.E = 0;
        this.f10042u = z10;
        this.f10043v = z10 ? 255 : 0;
        this.f10044w = i10;
        q();
    }

    private void g(Canvas canvas, Drawable drawable, int i10) {
        if (drawable != null && i10 > 0) {
            this.E++;
            if (this.I) {
                drawable.mutate();
            }
            drawable.setAlpha(i10);
            this.E--;
            drawable.draw(canvas);
        }
    }

    private void n() {
        if (this.G) {
            this.G = false;
            z9.m mVar = this.F;
            if (mVar != null) {
                mVar.c();
            }
        }
    }

    private void o() {
        int i10;
        if (!this.G && (i10 = this.f10044w) >= 0) {
            boolean[] zArr = this.D;
            if (i10 < zArr.length && zArr[i10]) {
                this.G = true;
                z9.m mVar = this.F;
                if (mVar != null) {
                    mVar.a();
                }
            }
        }
    }

    private void p() {
        if (this.H && this.f10045x == 2 && this.D[this.f10044w]) {
            z9.m mVar = this.F;
            if (mVar != null) {
                mVar.b();
            }
            this.H = false;
        }
    }

    private void q() {
        this.f10045x = 2;
        Arrays.fill(this.A, this.f10043v);
        this.A[0] = 255;
        Arrays.fill(this.B, this.f10043v);
        this.B[0] = 255;
        Arrays.fill(this.D, this.f10042u);
        this.D[0] = true;
    }

    private boolean s(float f10) {
        int i10;
        boolean z10 = true;
        for (int i11 = 0; i11 < this.f10041t.length; i11++) {
            boolean z11 = this.D[i11];
            if (z11) {
                i10 = 1;
            } else {
                i10 = -1;
            }
            int[] iArr = this.B;
            int i12 = (int) (this.A[i11] + (i10 * SetSpanOperation.SPAN_MAX_PRIORITY * f10));
            iArr[i11] = i12;
            if (i12 < 0) {
                iArr[i11] = 0;
            }
            if (iArr[i11] > 255) {
                iArr[i11] = 255;
            }
            if (z11 && iArr[i11] < 255) {
                z10 = false;
            }
            if (!z11 && iArr[i11] > 0) {
                z10 = false;
            }
        }
        return z10;
    }

    /* JADX WARN: Removed duplicated region for block: B:27:0x0057 A[LOOP:0: B:25:0x0052->B:27:0x0057, LOOP_END] */
    /* JADX WARN: Removed duplicated region for block: B:29:0x0074  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x007b  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x0072 A[EDGE_INSN: B:33:0x0072->B:28:0x0072 ?: BREAK  , SYNTHETIC] */
    @Override // android.graphics.drawable.Drawable
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void draw(android.graphics.Canvas r9) {
        /*
            r8 = this;
            int r0 = r8.f10045x
            r1 = 2
            r2 = 0
            r3 = 1
            if (r0 == 0) goto L2c
            if (r0 == r3) goto La
            goto L52
        La:
            int r0 = r8.f10046y
            if (r0 <= 0) goto L10
            r0 = r3
            goto L11
        L10:
            r0 = r2
        L11:
            o8.j.i(r0)
            long r4 = r8.m()
            long r6 = r8.f10047z
            long r4 = r4 - r6
            float r0 = (float) r4
            int r4 = r8.f10046y
            float r4 = (float) r4
            float r0 = r0 / r4
            boolean r0 = r8.s(r0)
            if (r0 == 0) goto L27
            goto L28
        L27:
            r1 = r3
        L28:
            r8.f10045x = r1
        L2a:
            r3 = r0
            goto L52
        L2c:
            int[] r0 = r8.B
            int[] r4 = r8.A
            android.graphics.drawable.Drawable[] r5 = r8.f10041t
            int r5 = r5.length
            java.lang.System.arraycopy(r0, r2, r4, r2, r5)
            long r4 = r8.m()
            r8.f10047z = r4
            int r0 = r8.f10046y
            if (r0 != 0) goto L43
            r0 = 1065353216(0x3f800000, float:1.0)
            goto L44
        L43:
            r0 = 0
        L44:
            boolean r0 = r8.s(r0)
            r8.o()
            if (r0 == 0) goto L4e
            goto L4f
        L4e:
            r1 = r3
        L4f:
            r8.f10045x = r1
            goto L2a
        L52:
            android.graphics.drawable.Drawable[] r0 = r8.f10041t
            int r1 = r0.length
            if (r2 >= r1) goto L72
            r0 = r0[r2]
            int[] r1 = r8.B
            r1 = r1[r2]
            int r4 = r8.C
            int r1 = r1 * r4
            double r4 = (double) r1
            r6 = 4643176031446892544(0x406fe00000000000, double:255.0)
            double r4 = r4 / r6
            double r4 = java.lang.Math.ceil(r4)
            int r1 = (int) r4
            r8.g(r9, r0, r1)
            int r2 = r2 + 1
            goto L52
        L72:
            if (r3 == 0) goto L7b
            r8.n()
            r8.p()
            return
        L7b:
            r8.invalidateSelf()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.drawee.drawable.e.draw(android.graphics.Canvas):void");
    }

    public void f() {
        this.E++;
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.C;
    }

    public void h() {
        this.E--;
        invalidateSelf();
    }

    public void i() {
        this.f10045x = 0;
        Arrays.fill(this.D, true);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void invalidateSelf() {
        if (this.E == 0) {
            super.invalidateSelf();
        }
    }

    public void j(int i10) {
        this.f10045x = 0;
        this.D[i10] = true;
        invalidateSelf();
    }

    public void k(int i10) {
        this.f10045x = 0;
        this.D[i10] = false;
        invalidateSelf();
    }

    public void l() {
        int i10;
        this.f10045x = 2;
        for (int i11 = 0; i11 < this.f10041t.length; i11++) {
            int[] iArr = this.B;
            if (this.D[i11]) {
                i10 = SetSpanOperation.SPAN_MAX_PRIORITY;
            } else {
                i10 = 0;
            }
            iArr[i11] = i10;
        }
        invalidateSelf();
    }

    protected long m() {
        return SystemClock.uptimeMillis();
    }

    public void r(int i10) {
        this.f10046y = i10;
        if (this.f10045x == 1) {
            this.f10045x = 0;
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        if (this.C != i10) {
            this.C = i10;
            invalidateSelf();
        }
    }
}
