package zk;

import ck.r;
import com.discord.chat.presentation.message.view.MediaImageViewKt;
import com.discord.media.engine.MediaEngine;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import xk.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private static final int[][] f56026a = {new int[]{1, 1, 1, 1, 1, 1, 1}, new int[]{1, 0, 0, 0, 0, 0, 1}, new int[]{1, 0, 1, 1, 1, 0, 1}, new int[]{1, 0, 1, 1, 1, 0, 1}, new int[]{1, 0, 1, 1, 1, 0, 1}, new int[]{1, 0, 0, 0, 0, 0, 1}, new int[]{1, 1, 1, 1, 1, 1, 1}};

    /* renamed from: b  reason: collision with root package name */
    private static final int[][] f56027b = {new int[]{1, 1, 1, 1, 1}, new int[]{1, 0, 0, 0, 1}, new int[]{1, 0, 1, 0, 1}, new int[]{1, 0, 0, 0, 1}, new int[]{1, 1, 1, 1, 1}};

    /* renamed from: c  reason: collision with root package name */
    private static final int[][] f56028c = {new int[]{-1, -1, -1, -1, -1, -1, -1}, new int[]{6, 18, -1, -1, -1, -1, -1}, new int[]{6, 22, -1, -1, -1, -1, -1}, new int[]{6, 26, -1, -1, -1, -1, -1}, new int[]{6, 30, -1, -1, -1, -1, -1}, new int[]{6, 34, -1, -1, -1, -1, -1}, new int[]{6, 22, 38, -1, -1, -1, -1}, new int[]{6, 24, 42, -1, -1, -1, -1}, new int[]{6, 26, 46, -1, -1, -1, -1}, new int[]{6, 28, 50, -1, -1, -1, -1}, new int[]{6, 30, 54, -1, -1, -1, -1}, new int[]{6, 32, 58, -1, -1, -1, -1}, new int[]{6, 34, 62, -1, -1, -1, -1}, new int[]{6, 26, 46, 66, -1, -1, -1}, new int[]{6, 26, 48, 70, -1, -1, -1}, new int[]{6, 26, 50, 74, -1, -1, -1}, new int[]{6, 30, 54, 78, -1, -1, -1}, new int[]{6, 30, 56, 82, -1, -1, -1}, new int[]{6, 30, 58, 86, -1, -1, -1}, new int[]{6, 34, 62, 90, -1, -1, -1}, new int[]{6, 28, 50, 72, 94, -1, -1}, new int[]{6, 26, 50, 74, 98, -1, -1}, new int[]{6, 30, 54, 78, 102, -1, -1}, new int[]{6, 28, 54, 80, 106, -1, -1}, new int[]{6, 32, 58, 84, 110, -1, -1}, new int[]{6, 30, 58, 86, MediaEngine.MAX_SUPPORTED_PROTOCOL_VERSION, -1, -1}, new int[]{6, 34, 62, 90, 118, -1, -1}, new int[]{6, 26, 50, 74, 98, 122, -1}, new int[]{6, 30, 54, 78, 102, 126, -1}, new int[]{6, 26, 52, 78, 104, 130, -1}, new int[]{6, 30, 56, 82, 108, 134, -1}, new int[]{6, 34, 60, 86, 112, 138, -1}, new int[]{6, 30, 58, 86, MediaEngine.MAX_SUPPORTED_PROTOCOL_VERSION, 142, -1}, new int[]{6, 34, 62, 90, 118, MediaImageViewKt.OBSCURED_IMAGE_MIN_WIDTH, -1}, new int[]{6, 30, 54, 78, 102, 126, 150}, new int[]{6, 24, 50, 76, 102, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, 154}, new int[]{6, 28, 54, 80, 106, 132, 158}, new int[]{6, 32, 58, 84, 110, 136, 162}, new int[]{6, 26, 54, 82, 110, 138, 166}, new int[]{6, 30, 58, 86, MediaEngine.MAX_SUPPORTED_PROTOCOL_VERSION, 142, 170}};

    /* renamed from: d  reason: collision with root package name */
    private static final int[][] f56029d = {new int[]{8, 0}, new int[]{8, 1}, new int[]{8, 2}, new int[]{8, 3}, new int[]{8, 4}, new int[]{8, 5}, new int[]{8, 7}, new int[]{8, 8}, new int[]{7, 8}, new int[]{5, 8}, new int[]{4, 8}, new int[]{3, 8}, new int[]{2, 8}, new int[]{1, 8}, new int[]{0, 8}};

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void a(gk.a aVar, xk.f fVar, j jVar, int i10, b bVar) {
        c(bVar);
        d(jVar, bVar);
        l(fVar, i10, bVar);
        s(jVar, bVar);
        f(aVar, i10, bVar);
    }

    static int b(int i10, int i11) {
        if (i11 != 0) {
            int n10 = n(i11);
            int i12 = i10 << (n10 - 1);
            while (n(i12) >= n10) {
                i12 ^= i11 << (n(i12) - n10);
            }
            return i12;
        }
        throw new IllegalArgumentException("0 polynomial");
    }

    static void c(b bVar) {
        bVar.a((byte) -1);
    }

    static void d(j jVar, b bVar) {
        j(bVar);
        e(bVar);
        r(jVar, bVar);
        k(bVar);
    }

    private static void e(b bVar) {
        if (bVar.b(8, bVar.d() - 8) != 0) {
            bVar.f(8, bVar.d() - 8, 1);
            return;
        }
        throw new r();
    }

    static void f(gk.a aVar, int i10, b bVar) {
        boolean z10;
        int e10 = bVar.e() - 1;
        int d10 = bVar.d() - 1;
        int i11 = 0;
        int i12 = -1;
        while (e10 > 0) {
            if (e10 == 6) {
                e10--;
            }
            while (d10 >= 0 && d10 < bVar.d()) {
                for (int i13 = 0; i13 < 2; i13++) {
                    int i14 = e10 - i13;
                    if (o(bVar.b(i14, d10))) {
                        if (i11 < aVar.l()) {
                            z10 = aVar.g(i11);
                            i11++;
                        } else {
                            z10 = false;
                        }
                        if (i10 != -1 && d.f(i10, i14, d10)) {
                            z10 = !z10;
                        }
                        bVar.g(i14, d10, z10);
                    }
                }
                d10 += i12;
            }
            i12 = -i12;
            d10 += i12;
            e10 -= 2;
        }
        if (i11 == aVar.l()) {
            return;
        }
        throw new r("Not all bits consumed: " + i11 + '/' + aVar.l());
    }

    private static void g(int i10, int i11, b bVar) {
        for (int i12 = 0; i12 < 8; i12++) {
            int i13 = i10 + i12;
            if (o(bVar.b(i13, i11))) {
                bVar.f(i13, i11, 0);
            } else {
                throw new r();
            }
        }
    }

    private static void h(int i10, int i11, b bVar) {
        for (int i12 = 0; i12 < 5; i12++) {
            int[] iArr = f56027b[i12];
            for (int i13 = 0; i13 < 5; i13++) {
                bVar.f(i10 + i13, i11 + i12, iArr[i13]);
            }
        }
    }

    private static void i(int i10, int i11, b bVar) {
        for (int i12 = 0; i12 < 7; i12++) {
            int[] iArr = f56026a[i12];
            for (int i13 = 0; i13 < 7; i13++) {
                bVar.f(i10 + i13, i11 + i12, iArr[i13]);
            }
        }
    }

    private static void j(b bVar) {
        int length = f56026a[0].length;
        i(0, 0, bVar);
        i(bVar.e() - length, 0, bVar);
        i(0, bVar.e() - length, bVar);
        g(0, 7, bVar);
        g(bVar.e() - 8, 7, bVar);
        g(0, bVar.e() - 8, bVar);
        m(7, 0, bVar);
        m(bVar.d() - 8, 0, bVar);
        m(7, bVar.d() - 7, bVar);
    }

    private static void k(b bVar) {
        int i10 = 8;
        while (i10 < bVar.e() - 8) {
            int i11 = i10 + 1;
            int i12 = i11 % 2;
            if (o(bVar.b(i10, 6))) {
                bVar.f(i10, 6, i12);
            }
            if (o(bVar.b(6, i10))) {
                bVar.f(6, i10, i12);
            }
            i10 = i11;
        }
    }

    static void l(xk.f fVar, int i10, b bVar) {
        int d10;
        gk.a aVar = new gk.a();
        p(fVar, i10, aVar);
        for (int i11 = 0; i11 < aVar.l(); i11++) {
            boolean g10 = aVar.g((aVar.l() - 1) - i11);
            int[] iArr = f56029d[i11];
            bVar.g(iArr[0], iArr[1], g10);
            int i12 = 8;
            if (i11 < 8) {
                d10 = 8;
                i12 = (bVar.e() - i11) - 1;
            } else {
                d10 = (bVar.d() - 7) + (i11 - 8);
            }
            bVar.g(i12, d10, g10);
        }
    }

    private static void m(int i10, int i11, b bVar) {
        for (int i12 = 0; i12 < 7; i12++) {
            int i13 = i11 + i12;
            if (o(bVar.b(i10, i13))) {
                bVar.f(i10, i13, 0);
            } else {
                throw new r();
            }
        }
    }

    static int n(int i10) {
        return 32 - Integer.numberOfLeadingZeros(i10);
    }

    private static boolean o(int i10) {
        if (i10 == -1) {
            return true;
        }
        return false;
    }

    static void p(xk.f fVar, int i10, gk.a aVar) {
        if (g.b(i10)) {
            int d10 = (fVar.d() << 3) | i10;
            aVar.c(d10, 5);
            aVar.c(b(d10, 1335), 10);
            gk.a aVar2 = new gk.a();
            aVar2.c(21522, 15);
            aVar.u(aVar2);
            if (aVar.l() == 15) {
                return;
            }
            throw new r("should not happen but we got: " + aVar.l());
        }
        throw new r("Invalid mask pattern");
    }

    static void q(j jVar, gk.a aVar) {
        aVar.c(jVar.j(), 6);
        aVar.c(b(jVar.j(), 7973), 12);
        if (aVar.l() == 18) {
            return;
        }
        throw new r("should not happen but we got: " + aVar.l());
    }

    private static void r(j jVar, b bVar) {
        if (jVar.j() >= 2) {
            int[] iArr = f56028c[jVar.j() - 1];
            for (int i10 : iArr) {
                if (i10 >= 0) {
                    for (int i11 : iArr) {
                        if (i11 >= 0 && o(bVar.b(i11, i10))) {
                            h(i11 - 2, i10 - 2, bVar);
                        }
                    }
                }
            }
        }
    }

    static void s(j jVar, b bVar) {
        if (jVar.j() >= 7) {
            gk.a aVar = new gk.a();
            q(jVar, aVar);
            int i10 = 17;
            for (int i11 = 0; i11 < 6; i11++) {
                for (int i12 = 0; i12 < 3; i12++) {
                    boolean g10 = aVar.g(i10);
                    i10--;
                    bVar.g(i11, (bVar.d() - 11) + i12, g10);
                    bVar.g((bVar.d() - 11) + i12, i11, g10);
                }
            }
        }
    }
}
