package x;

import android.view.Display;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y extends c1 {

    /* renamed from: b  reason: collision with root package name */
    private final float f53084b;

    /* renamed from: c  reason: collision with root package name */
    private final float f53085c;

    /* renamed from: d  reason: collision with root package name */
    private final Display f53086d;

    /* renamed from: e  reason: collision with root package name */
    private final o f53087e;

    public y(Display display, o oVar, float f10, float f11) {
        this.f53084b = f10;
        this.f53085c = f11;
        this.f53086d = display;
        this.f53087e = oVar;
    }

    private int f(boolean z10) {
        try {
            int j10 = this.f53087e.j(this.f53086d.getRotation());
            if (z10) {
                return (360 - j10) % 360;
            }
            return j10;
        } catch (Exception unused) {
            return 0;
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:20:0x0034  */
    @Override // x.c1
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected android.graphics.PointF a(float r8, float r9) {
        /*
            r7 = this;
            float r0 = r7.f53084b
            float r1 = r7.f53085c
            x.o r2 = r7.f53087e
            int r2 = r2.c()
            if (r2 != 0) goto Le
            r2 = 1
            goto Lf
        Le:
            r2 = 0
        Lf:
            int r3 = r7.f(r2)
            r4 = 270(0x10e, float:3.78E-43)
            r5 = 90
            if (r3 == r5) goto L22
            if (r3 != r4) goto L1c
            goto L22
        L1c:
            r6 = r9
            r9 = r8
            r8 = r6
            r6 = r1
            r1 = r0
            r0 = r6
        L22:
            if (r3 == r5) goto L30
            r5 = 180(0xb4, float:2.52E-43)
            if (r3 == r5) goto L2e
            if (r3 == r4) goto L2b
            goto L32
        L2b:
            float r9 = r1 - r9
            goto L32
        L2e:
            float r9 = r1 - r9
        L30:
            float r8 = r0 - r8
        L32:
            if (r2 == 0) goto L36
            float r9 = r1 - r9
        L36:
            float r9 = r9 / r1
            float r8 = r8 / r0
            android.graphics.PointF r0 = new android.graphics.PointF
            r0.<init>(r9, r8)
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: x.y.a(float, float):android.graphics.PointF");
    }
}
