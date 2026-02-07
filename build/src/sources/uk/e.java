package uk;

import com.google.zxing.Result;
import hk.o;
import hk.p;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import tk.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends a {

    /* renamed from: i  reason: collision with root package name */
    private static final int[] f51629i = {1, 10, 34, 70, 126};

    /* renamed from: j  reason: collision with root package name */
    private static final int[] f51630j = {4, 20, 48, 81};

    /* renamed from: k  reason: collision with root package name */
    private static final int[] f51631k = {0, 161, 961, 2015, 2715};

    /* renamed from: l  reason: collision with root package name */
    private static final int[] f51632l = {0, 336, 1036, 1516};

    /* renamed from: m  reason: collision with root package name */
    private static final int[] f51633m = {8, 6, 4, 3, 1};

    /* renamed from: n  reason: collision with root package name */
    private static final int[] f51634n = {2, 4, 6, 8};

    /* renamed from: o  reason: collision with root package name */
    private static final int[][] f51635o = {new int[]{3, 8, 2, 1}, new int[]{3, 5, 5, 1}, new int[]{3, 3, 7, 1}, new int[]{3, 1, 9, 1}, new int[]{2, 7, 4, 1}, new int[]{2, 5, 6, 1}, new int[]{2, 3, 8, 1}, new int[]{1, 5, 7, 1}, new int[]{1, 3, 9, 1}};

    /* renamed from: g  reason: collision with root package name */
    private final List f51636g = new ArrayList();

    /* renamed from: h  reason: collision with root package name */
    private final List f51637h = new ArrayList();

    private static void q(Collection collection, d dVar) {
        if (dVar == null) {
            return;
        }
        Iterator it = collection.iterator();
        while (it.hasNext()) {
            d dVar2 = (d) it.next();
            if (dVar2.b() == dVar.b()) {
                dVar2.e();
                return;
            }
        }
        collection.add(dVar);
    }

    /* JADX WARN: Code restructure failed: missing block: B:12:0x0028, code lost:
        if (r1 < 4) goto L67;
     */
    /* JADX WARN: Code restructure failed: missing block: B:13:0x002a, code lost:
        r2 = true;
        r5 = false;
     */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x002d, code lost:
        r2 = false;
        r5 = false;
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x0044, code lost:
        if (r1 < 4) goto L67;
     */
    /* JADX WARN: Removed duplicated region for block: B:69:0x009f  */
    /* JADX WARN: Removed duplicated region for block: B:74:0x00b4  */
    /* JADX WARN: Removed duplicated region for block: B:76:0x00c1  */
    /* JADX WARN: Removed duplicated region for block: B:81:0x00d6  */
    /* JADX WARN: Removed duplicated region for block: B:85:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void r(boolean r10, int r11) {
        /*
            Method dump skipped, instructions count: 231
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: uk.e.r(boolean, int):void");
    }

    private static boolean s(d dVar, d dVar2) {
        int a10 = (dVar.a() + (dVar2.a() * 16)) % 79;
        int c10 = (dVar.d().c() * 9) + dVar2.d().c();
        if (c10 > 72) {
            c10--;
        }
        if (c10 > 8) {
            c10--;
        }
        if (a10 == c10) {
            return true;
        }
        return false;
    }

    private static Result t(d dVar, d dVar2) {
        String valueOf = String.valueOf((dVar.b() * 4537077) + dVar2.b());
        StringBuilder sb2 = new StringBuilder(14);
        for (int length = 13 - valueOf.length(); length > 0; length--) {
            sb2.append('0');
        }
        sb2.append(valueOf);
        int i10 = 0;
        for (int i11 = 0; i11 < 13; i11++) {
            int charAt = sb2.charAt(i11) - '0';
            if ((i11 & 1) == 0) {
                charAt *= 3;
            }
            i10 += charAt;
        }
        int i12 = 10 - (i10 % 10);
        if (i12 == 10) {
            i12 = 0;
        }
        sb2.append(i12);
        p[] a10 = dVar.d().a();
        p[] a11 = dVar2.d().a();
        Result result = new Result(sb2.toString(), null, new p[]{a10[0], a10[1], a11[0], a11[1]}, hk.a.RSS_14);
        result.h(o.SYMBOLOGY_IDENTIFIER, "]e0");
        return result;
    }

    private b u(lk.a aVar, c cVar, boolean z10) {
        int i10;
        int[] h10 = h();
        Arrays.fill(h10, 0);
        if (z10) {
            k.f(aVar, cVar.b()[0], h10);
        } else {
            k.e(aVar, cVar.b()[1], h10);
            int i11 = 0;
            for (int length = h10.length - 1; i11 < length; length--) {
                int i12 = h10[i11];
                h10[i11] = h10[length];
                h10[length] = i12;
                i11++;
            }
        }
        if (z10) {
            i10 = 16;
        } else {
            i10 = 15;
        }
        float d10 = mk.a.d(h10) / i10;
        int[] l10 = l();
        int[] j10 = j();
        float[] m10 = m();
        float[] k10 = k();
        for (int i13 = 0; i13 < h10.length; i13++) {
            float f10 = h10[i13] / d10;
            int i14 = (int) (0.5f + f10);
            if (i14 < 1) {
                i14 = 1;
            } else if (i14 > 8) {
                i14 = 8;
            }
            int i15 = i13 / 2;
            if ((i13 & 1) == 0) {
                l10[i15] = i14;
                m10[i15] = f10 - i14;
            } else {
                j10[i15] = i14;
                k10[i15] = f10 - i14;
            }
        }
        r(z10, i10);
        int i16 = 0;
        int i17 = 0;
        for (int length2 = l10.length - 1; length2 >= 0; length2--) {
            int i18 = l10[length2];
            i16 = (i16 * 9) + i18;
            i17 += i18;
        }
        int i19 = 0;
        int i20 = 0;
        for (int length3 = j10.length - 1; length3 >= 0; length3--) {
            int i21 = j10[length3];
            i19 = (i19 * 9) + i21;
            i20 += i21;
        }
        int i22 = i16 + (i19 * 3);
        if (z10) {
            if ((i17 & 1) == 0 && i17 <= 12 && i17 >= 4) {
                int i23 = (12 - i17) / 2;
                int i24 = f51633m[i23];
                int i25 = 9 - i24;
                return new b((f.b(l10, i24, false) * f51629i[i23]) + f.b(j10, i25, true) + f51631k[i23], i22);
            }
            throw hk.k.a();
        } else if ((i20 & 1) == 0 && i20 <= 10 && i20 >= 4) {
            int i26 = (10 - i20) / 2;
            int i27 = f51634n[i26];
            return new b((f.b(j10, 9 - i27, false) * f51630j[i26]) + f.b(l10, i27, true) + f51632l[i26], i22);
        } else {
            throw hk.k.a();
        }
    }

    private d v(lk.a aVar, boolean z10, int i10, Map map) {
        try {
            c x10 = x(aVar, i10, z10, w(aVar, z10));
            if (map != null) {
                android.support.v4.media.session.b.a(map.get(hk.e.NEED_RESULT_POINT_CALLBACK));
            }
            b u10 = u(aVar, x10, true);
            b u11 = u(aVar, x10, false);
            return new d((u10.b() * 1597) + u11.b(), u10.a() + (u11.a() * 4), x10);
        } catch (hk.k unused) {
            return null;
        }
    }

    private int[] w(lk.a aVar, boolean z10) {
        int[] i10 = i();
        i10[0] = 0;
        i10[1] = 0;
        i10[2] = 0;
        i10[3] = 0;
        int l10 = aVar.l();
        int i11 = 0;
        boolean z11 = false;
        while (i11 < l10) {
            z11 = !aVar.h(i11);
            if (z10 == z11) {
                break;
            }
            i11++;
        }
        int i12 = 0;
        int i13 = i11;
        while (i11 < l10) {
            if (aVar.h(i11) != z11) {
                i10[i12] = i10[i12] + 1;
            } else {
                if (i12 == 3) {
                    if (a.o(i10)) {
                        return new int[]{i13, i11};
                    }
                    i13 += i10[0] + i10[1];
                    i10[0] = i10[2];
                    i10[1] = i10[3];
                    i10[2] = 0;
                    i10[3] = 0;
                    i12--;
                } else {
                    i12++;
                }
                i10[i12] = 1;
                z11 = !z11;
            }
            i11++;
        }
        throw hk.k.a();
    }

    private c x(lk.a aVar, int i10, boolean z10, int[] iArr) {
        int i11;
        boolean h10 = aVar.h(iArr[0]);
        int i12 = iArr[0] - 1;
        while (i12 >= 0 && h10 != aVar.h(i12)) {
            i12--;
        }
        int i13 = i12 + 1;
        int[] i14 = i();
        System.arraycopy(i14, 0, i14, 1, i14.length - 1);
        i14[0] = iArr[0] - i13;
        int p10 = a.p(i14, f51635o);
        int i15 = iArr[1];
        if (z10) {
            i15 = (aVar.l() - 1) - i15;
            i11 = (aVar.l() - 1) - i13;
        } else {
            i11 = i13;
        }
        return new c(p10, new int[]{i13, iArr[1]}, i11, i15, i10);
    }

    @Override // tk.k
    public Result b(int i10, lk.a aVar, Map map) {
        q(this.f51636g, v(aVar, false, i10, map));
        aVar.q();
        q(this.f51637h, v(aVar, true, i10, map));
        aVar.q();
        for (d dVar : this.f51636g) {
            if (dVar.c() > 1) {
                for (d dVar2 : this.f51637h) {
                    if (dVar2.c() > 1 && s(dVar, dVar2)) {
                        return t(dVar, dVar2);
                    }
                }
                continue;
            }
        }
        throw hk.k.a();
    }

    @Override // tk.k, hk.m
    public void reset() {
        this.f51636g.clear();
        this.f51637h.clear();
    }
}
