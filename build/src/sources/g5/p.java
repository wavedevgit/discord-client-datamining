package g5;

import android.graphics.Bitmap;
import android.graphics.drawable.Drawable;
import android.view.View;
import androidx.lifecycle.Lifecycle;
import h5.c;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class p {

    /* renamed from: a  reason: collision with root package name */
    private final v4.h f24055a;

    /* renamed from: b  reason: collision with root package name */
    private final k5.v f24056b;

    /* renamed from: c  reason: collision with root package name */
    private final k5.p f24057c;

    public p(v4.h hVar, k5.v vVar, k5.t tVar) {
        this.f24055a = hVar;
        this.f24056b = vVar;
        this.f24057c = k5.f.a(tVar);
    }

    private final boolean b(m mVar) {
        if (k5.a.d(mVar.f()) && !this.f24057c.a()) {
            return false;
        }
        return true;
    }

    private final boolean d(h hVar, h5.i iVar) {
        if (!k5.a.d(hVar.j())) {
            return true;
        }
        if (c(hVar, hVar.j()) && this.f24057c.b(iVar)) {
            return true;
        }
        return false;
    }

    private final boolean e(h hVar) {
        if (!hVar.O().isEmpty() && !kotlin.collections.i.N(k5.k.o(), hVar.j())) {
            return false;
        }
        return true;
    }

    public final f a(h hVar, Throwable th2) {
        Drawable t10;
        if (th2 instanceof k) {
            t10 = hVar.u();
            if (t10 == null) {
                t10 = hVar.t();
            }
        } else {
            t10 = hVar.t();
        }
        return new f(t10, hVar, th2);
    }

    public final boolean c(h hVar, Bitmap.Config config) {
        if (!k5.a.d(config)) {
            return true;
        }
        if (!hVar.h()) {
            return false;
        }
        i5.c M = hVar.M();
        if (M instanceof i5.d) {
            View view = ((i5.d) M).getView();
            if (view.isAttachedToWindow() && !view.isHardwareAccelerated()) {
                return false;
            }
        }
        return true;
    }

    public final m f(h hVar, h5.i iVar) {
        Bitmap.Config config;
        h5.h hVar2;
        boolean z10;
        if (e(hVar) && d(hVar, iVar)) {
            config = hVar.j();
        } else {
            config = Bitmap.Config.ARGB_8888;
        }
        Bitmap.Config config2 = config;
        h5.c d10 = iVar.d();
        c.b bVar = c.b.f25834a;
        if (!Intrinsics.areEqual(d10, bVar) && !Intrinsics.areEqual(iVar.c(), bVar)) {
            hVar2 = hVar.J();
        } else {
            hVar2 = h5.h.f25845e;
        }
        h5.h hVar3 = hVar2;
        if (hVar.i() && hVar.O().isEmpty() && config2 != Bitmap.Config.ALPHA_8) {
            z10 = true;
        } else {
            z10 = false;
        }
        return new m(hVar.l(), config2, hVar.k(), iVar, hVar3, k5.i.a(hVar), z10, hVar.I(), hVar.r(), hVar.x(), hVar.L(), hVar.E(), hVar.C(), hVar.s(), hVar.D());
    }

    public final o g(h hVar, Job job) {
        Lifecycle z10 = hVar.z();
        i5.c M = hVar.M();
        if (M instanceof i5.d) {
            return new u(this.f24055a, hVar, (i5.d) M, z10, job);
        }
        return new a(z10, job);
    }

    /* JADX WARN: Removed duplicated region for block: B:16:0x0035  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0050 A[RETURN] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final g5.m h(g5.m r23) {
        /*
            r22 = this;
            android.graphics.Bitmap$Config r0 = r23.f()
            g5.b r1 = r23.k()
            boolean r2 = r22.b(r23)
            r3 = 1
            if (r2 != 0) goto L14
            android.graphics.Bitmap$Config r0 = android.graphics.Bitmap.Config.ARGB_8888
            r2 = r3
        L12:
            r6 = r0
            goto L16
        L14:
            r2 = 0
            goto L12
        L16:
            g5.b r0 = r23.k()
            boolean r0 = r0.d()
            if (r0 == 0) goto L2f
            r0 = r22
            k5.v r4 = r0.f24056b
            boolean r4 = r4.b()
            if (r4 != 0) goto L31
            g5.b r1 = g5.b.f23942q
        L2c:
            r19 = r1
            goto L33
        L2f:
            r0 = r22
        L31:
            r3 = r2
            goto L2c
        L33:
            if (r3 == 0) goto L50
            r20 = 16381(0x3ffd, float:2.2955E-41)
            r21 = 0
            r5 = 0
            r7 = 0
            r8 = 0
            r9 = 0
            r10 = 0
            r11 = 0
            r12 = 0
            r13 = 0
            r14 = 0
            r15 = 0
            r16 = 0
            r17 = 0
            r18 = 0
            r4 = r23
            g5.m r1 = g5.m.b(r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21)
            return r1
        L50:
            return r23
        */
        throw new UnsupportedOperationException("Method not decompiled: g5.p.h(g5.m):g5.m");
    }
}
