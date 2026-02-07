package vk;

import androidx.recyclerview.widget.h;
import com.discord.chat.presentation.message.view.MediaImageViewKt;
import com.discord.media.engine.MediaEngine;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.zxing.Result;
import hk.k;
import hk.o;
import hk.p;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import uk.f;
import wk.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends uk.a {

    /* renamed from: k  reason: collision with root package name */
    private static final int[] f52744k = {7, 5, 4, 3, 1};

    /* renamed from: l  reason: collision with root package name */
    private static final int[] f52745l = {4, 20, 52, 104, 204};

    /* renamed from: m  reason: collision with root package name */
    private static final int[] f52746m = {0, 348, 1388, 2948, 3988};

    /* renamed from: n  reason: collision with root package name */
    private static final int[][] f52747n = {new int[]{1, 8, 4, 1}, new int[]{3, 6, 4, 1}, new int[]{3, 4, 6, 1}, new int[]{3, 2, 8, 1}, new int[]{2, 6, 5, 1}, new int[]{2, 2, 9, 1}};

    /* renamed from: o  reason: collision with root package name */
    private static final int[][] f52748o = {new int[]{1, 3, 9, 27, 81, 32, 96, 77}, new int[]{20, 60, 180, 118, 143, 7, 21, 63}, new int[]{189, 145, 13, 39, 117, 140, 209, 205}, new int[]{193, 157, 49, 147, 19, 57, 171, 91}, new int[]{62, 186, 136, 197, 169, 85, 44, 132}, new int[]{185, 133, 188, 142, 4, 12, 36, 108}, new int[]{113, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, 173, 97, 80, 29, 87, 50}, new int[]{150, 28, 84, 41, 123, 158, 52, 156}, new int[]{46, 138, 203, 187, 139, 206, 196, 166}, new int[]{76, 17, 51, 153, 37, 111, 122, 155}, new int[]{43, 129, 176, 106, 107, 110, 119, MediaImageViewKt.OBSCURED_IMAGE_MIN_WIDTH}, new int[]{16, 48, 144, 10, 30, 90, 59, 177}, new int[]{109, 116, 137, h.DEFAULT_DRAG_ANIMATION_DURATION, 178, 112, 125, 164}, new int[]{70, 210, 208, 202, 184, 130, 179, 115}, new int[]{134, 191, 151, 31, 93, 68, 204, 190}, new int[]{148, 22, 66, 198, 172, 94, 71, 2}, new int[]{6, 18, 54, 162, 64, 192, 154, 40}, new int[]{120, 149, 25, 75, 14, 42, 126, 167}, new int[]{79, 26, 78, 23, 69, 207, 199, 175}, new int[]{103, 98, 83, 38, MediaEngine.MAX_SUPPORTED_PROTOCOL_VERSION, 131, 182, 124}, new int[]{161, 61, 183, 127, 170, 88, 53, 159}, new int[]{55, 165, 73, 8, 24, 72, 5, 15}, new int[]{45, 135, 194, 160, 58, 174, 100, 89}};

    /* renamed from: p  reason: collision with root package name */
    private static final int[][] f52749p = {new int[]{0, 0}, new int[]{0, 1, 1}, new int[]{0, 2, 1, 3}, new int[]{0, 4, 1, 3, 2}, new int[]{0, 4, 1, 3, 3, 5}, new int[]{0, 4, 1, 3, 4, 5, 5}, new int[]{0, 0, 1, 1, 2, 2, 3, 3}, new int[]{0, 0, 1, 1, 2, 2, 3, 4, 4}, new int[]{0, 0, 1, 1, 2, 2, 3, 4, 5, 5}, new int[]{0, 0, 1, 1, 2, 3, 3, 4, 4, 5, 5}};

    /* renamed from: g  reason: collision with root package name */
    private final List f52750g = new ArrayList(11);

    /* renamed from: h  reason: collision with root package name */
    private final List f52751h = new ArrayList();

    /* renamed from: i  reason: collision with root package name */
    private final int[] f52752i = new int[2];

    /* renamed from: j  reason: collision with root package name */
    private boolean f52753j;

    private static boolean A(Iterable iterable, Iterable iterable2) {
        Iterator it = iterable2.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            Iterator it2 = iterable.iterator();
            while (it2.hasNext()) {
                b bVar = (b) it2.next();
                for (b bVar2 : cVar.a()) {
                    if (bVar.equals(bVar2)) {
                        break;
                    }
                }
            }
            return true;
        }
        return false;
    }

    /* JADX WARN: Removed duplicated region for block: B:12:0x001c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static boolean B(java.util.List r8, boolean r9) {
        /*
            int[][] r0 = vk.d.f52749p
            int r1 = r0.length
            r2 = 0
            r3 = r2
        L5:
            if (r3 >= r1) goto L37
            r4 = r0[r3]
            int r5 = r8.size()
            int r6 = r4.length
            if (r9 == 0) goto L13
            if (r5 != r6) goto L34
            goto L15
        L13:
            if (r5 > r6) goto L34
        L15:
            r5 = r2
        L16:
            int r6 = r8.size()
            if (r5 >= r6) goto L32
            java.lang.Object r6 = r8.get(r5)
            vk.b r6 = (vk.b) r6
            uk.c r6 = r6.a()
            int r6 = r6.c()
            r7 = r4[r5]
            if (r6 == r7) goto L2f
            goto L34
        L2f:
            int r5 = r5 + 1
            goto L16
        L32:
            r8 = 1
            return r8
        L34:
            int r3 = r3 + 1
            goto L5
        L37:
            return r2
        */
        throw new UnsupportedOperationException("Method not decompiled: vk.d.B(java.util.List, boolean):boolean");
    }

    private static boolean C(List list, int i10) {
        int[][] iArr;
        if (list.isEmpty()) {
            return true;
        }
        for (int[] iArr2 : f52749p) {
            if (list.size() + 1 <= iArr2.length) {
                for (int size = list.size(); size < iArr2.length; size++) {
                    if (iArr2[size] == i10) {
                        for (int i11 = 0; i11 < list.size(); i11++) {
                            if (iArr2[(size - i11) - 1] != ((b) list.get((list.size() - i11) - 1)).a().c()) {
                                break;
                            }
                        }
                        return true;
                    }
                }
                continue;
            }
        }
        return false;
    }

    private uk.c D(lk.a aVar, int i10, boolean z10, List list) {
        int k10;
        int i11;
        int i12;
        int i13;
        if (z10) {
            int i14 = this.f52752i[0] - 1;
            while (i14 >= 0 && !aVar.h(i14)) {
                i14--;
            }
            int i15 = i14 + 1;
            int[] iArr = this.f52752i;
            i12 = iArr[0] - i15;
            k10 = iArr[1];
            i11 = i15;
        } else {
            int[] iArr2 = this.f52752i;
            int i16 = iArr2[0];
            k10 = aVar.k(iArr2[1] + 1);
            i11 = i16;
            i12 = k10 - this.f52752i[1];
        }
        int i17 = k10;
        int[] i18 = i();
        System.arraycopy(i18, 0, i18, 1, i18.length - 1);
        i18[0] = i12;
        try {
            int p10 = uk.a.p(i18, f52747n);
            if (!C(list, p10)) {
                return null;
            }
            if (!list.isEmpty()) {
                b bVar = (b) list.get(list.size() - 1);
                int i19 = bVar.a().b()[0];
                float f10 = bVar.a().b()[1];
                float f11 = ((i13 - i19) / 15.0f) * 17.0f * 2.0f;
                float f12 = (0.9f * f11) + f10;
                float f13 = f10 + (f11 * 1.1f);
                float f14 = i11;
                if (f14 < f12 || f14 > f13) {
                    return null;
                }
            }
            return new uk.c(p10, new int[]{i11, i17}, i11, i17, i10);
        } catch (k unused) {
            return null;
        }
    }

    private static void E(Collection collection, Collection collection2) {
        Iterator it = collection2.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.a().size() != collection.size()) {
                Iterator it2 = cVar.a().iterator();
                while (true) {
                    if (it2.hasNext()) {
                        if (!collection.contains((b) it2.next())) {
                            break;
                        }
                    } else {
                        it.remove();
                        break;
                    }
                }
            }
        }
    }

    private static void G(int[] iArr) {
        int length = iArr.length;
        for (int i10 = 0; i10 < length / 2; i10++) {
            int i11 = iArr[i10];
            int i12 = (length - i10) - 1;
            iArr[i10] = iArr[i12];
            iArr[i12] = i11;
        }
    }

    private void H(int i10) {
        boolean z10 = false;
        int i11 = 0;
        boolean z11 = false;
        while (true) {
            if (i11 >= this.f52751h.size()) {
                break;
            }
            c cVar = (c) this.f52751h.get(i11);
            if (cVar.b() > i10) {
                z10 = cVar.c(this.f52750g);
                break;
            } else {
                z11 = cVar.c(this.f52750g);
                i11++;
            }
        }
        if (!z10 && !z11 && !A(this.f52750g, this.f52751h)) {
            this.f52751h.add(i11, new c(this.f52750g, i10));
            E(this.f52750g, this.f52751h);
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:55:0x0085  */
    /* JADX WARN: Removed duplicated region for block: B:60:0x009a  */
    /* JADX WARN: Removed duplicated region for block: B:62:0x00a7  */
    /* JADX WARN: Removed duplicated region for block: B:67:0x00bc  */
    /* JADX WARN: Removed duplicated region for block: B:71:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void q(int r11) {
        /*
            Method dump skipped, instructions count: 205
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: vk.d.q(int):void");
    }

    private boolean r() {
        b bVar = (b) this.f52750g.get(0);
        uk.b b10 = bVar.b();
        uk.b c10 = bVar.c();
        if (c10 == null) {
            return false;
        }
        int a10 = c10.a();
        int i10 = 2;
        for (int i11 = 1; i11 < this.f52750g.size(); i11++) {
            b bVar2 = (b) this.f52750g.get(i11);
            a10 += bVar2.b().a();
            int i12 = i10 + 1;
            uk.b c11 = bVar2.c();
            if (c11 != null) {
                a10 += c11.a();
                i10 += 2;
            } else {
                i10 = i12;
            }
        }
        if (((i10 - 4) * 211) + (a10 % 211) != b10.b()) {
            return false;
        }
        return true;
    }

    private List s(List list, int i10) {
        while (i10 < this.f52751h.size()) {
            c cVar = (c) this.f52751h.get(i10);
            this.f52750g.clear();
            for (c cVar2 : list) {
                this.f52750g.addAll(cVar2.a());
            }
            this.f52750g.addAll(cVar.a());
            if (B(this.f52750g, false)) {
                if (r()) {
                    return this.f52750g;
                }
                ArrayList arrayList = new ArrayList(list);
                arrayList.add(cVar);
                try {
                    return s(arrayList, i10 + 1);
                } catch (k unused) {
                    continue;
                }
            }
            i10++;
        }
        throw k.a();
    }

    private List t(boolean z10) {
        List list = null;
        if (this.f52751h.size() > 25) {
            this.f52751h.clear();
            return null;
        }
        this.f52750g.clear();
        if (z10) {
            Collections.reverse(this.f52751h);
        }
        try {
            list = s(new ArrayList(), 0);
        } catch (k unused) {
        }
        if (z10) {
            Collections.reverse(this.f52751h);
        }
        return list;
    }

    static Result u(List list) {
        String d10 = j.a(a.a(list)).d();
        p[] a10 = ((b) list.get(0)).a().a();
        p[] a11 = ((b) list.get(list.size() - 1)).a().a();
        Result result = new Result(d10, null, new p[]{a10[0], a10[1], a11[0], a11[1]}, hk.a.RSS_EXPANDED);
        result.h(o.SYMBOLOGY_IDENTIFIER, "]e0");
        return result;
    }

    private void x(lk.a aVar, List list, int i10) {
        boolean z10;
        int[] i11 = i();
        i11[0] = 0;
        i11[1] = 0;
        i11[2] = 0;
        i11[3] = 0;
        int l10 = aVar.l();
        if (i10 < 0) {
            if (list.isEmpty()) {
                i10 = 0;
            } else {
                i10 = ((b) list.get(list.size() - 1)).a().b()[1];
            }
        }
        if (list.size() % 2 != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f52753j) {
            z10 = !z10;
        }
        boolean z11 = false;
        while (true) {
            if (i10 >= l10) {
                break;
            }
            boolean h10 = aVar.h(i10);
            boolean z12 = !h10;
            if (h10) {
                z11 = z12;
                break;
            } else {
                i10++;
                z11 = z12;
            }
        }
        int i12 = 0;
        boolean z13 = z11;
        int i13 = i10;
        while (i10 < l10) {
            if (aVar.h(i10) != z13) {
                i11[i12] = i11[i12] + 1;
            } else {
                if (i12 == 3) {
                    if (z10) {
                        G(i11);
                    }
                    if (uk.a.o(i11)) {
                        int[] iArr = this.f52752i;
                        iArr[0] = i13;
                        iArr[1] = i10;
                        return;
                    }
                    if (z10) {
                        G(i11);
                    }
                    i13 += i11[0] + i11[1];
                    i11[0] = i11[2];
                    i11[1] = i11[3];
                    i11[2] = 0;
                    i11[3] = 0;
                    i12--;
                } else {
                    i12++;
                }
                i11[i12] = 1;
                z13 = !z13;
            }
            i10++;
        }
        throw k.a();
    }

    private static int y(lk.a aVar, int i10) {
        if (aVar.h(i10)) {
            return aVar.j(aVar.k(i10));
        }
        return aVar.k(aVar.j(i10));
    }

    private static boolean z(uk.c cVar, boolean z10, boolean z11) {
        if (cVar.c() == 0 && z10 && z11) {
            return false;
        }
        return true;
    }

    b F(lk.a aVar, List list, int i10) {
        boolean z10;
        uk.c D;
        if (list.size() % 2 == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f52753j) {
            z10 = !z10;
        }
        uk.b bVar = null;
        int i11 = -1;
        boolean z11 = true;
        uk.b bVar2 = null;
        do {
            x(aVar, list, i11);
            D = D(aVar, i10, z10, list);
            if (D == null) {
                i11 = y(aVar, this.f52752i[0]);
                continue;
            } else {
                try {
                    bVar2 = v(aVar, D, z10, true);
                    z11 = false;
                    continue;
                } catch (k unused) {
                    i11 = y(aVar, this.f52752i[0]);
                    continue;
                }
            }
        } while (z11);
        if (!list.isEmpty() && ((b) list.get(list.size() - 1)).d()) {
            throw k.a();
        }
        try {
            bVar = v(aVar, D, z10, false);
        } catch (k unused2) {
        }
        return new b(bVar2, bVar, D);
    }

    @Override // tk.k
    public Result b(int i10, lk.a aVar, Map map) {
        this.f52753j = false;
        try {
            return u(w(i10, aVar));
        } catch (k unused) {
            this.f52753j = true;
            return u(w(i10, aVar));
        }
    }

    @Override // tk.k, hk.m
    public void reset() {
        this.f52750g.clear();
        this.f52751h.clear();
    }

    uk.b v(lk.a aVar, uk.c cVar, boolean z10, boolean z11) {
        int i10;
        int[] h10 = h();
        Arrays.fill(h10, 0);
        if (z11) {
            tk.k.f(aVar, cVar.b()[0], h10);
        } else {
            tk.k.e(aVar, cVar.b()[1], h10);
            int i11 = 0;
            for (int length = h10.length - 1; i11 < length; length--) {
                int i12 = h10[i11];
                h10[i11] = h10[length];
                h10[length] = i12;
                i11++;
            }
        }
        float d10 = mk.a.d(h10) / 17;
        float f10 = (cVar.b()[1] - cVar.b()[0]) / 15.0f;
        if (Math.abs(d10 - f10) / f10 <= 0.3f) {
            int[] l10 = l();
            int[] j10 = j();
            float[] m10 = m();
            float[] k10 = k();
            for (int i13 = 0; i13 < h10.length; i13++) {
                float f11 = (h10[i13] * 1.0f) / d10;
                int i14 = (int) (0.5f + f11);
                if (i14 < 1) {
                    if (f11 >= 0.3f) {
                        i14 = 1;
                    } else {
                        throw k.a();
                    }
                } else if (i14 > 8) {
                    if (f11 <= 8.7f) {
                        i14 = 8;
                    } else {
                        throw k.a();
                    }
                }
                int i15 = i13 / 2;
                if ((i13 & 1) == 0) {
                    l10[i15] = i14;
                    m10[i15] = f11 - i14;
                } else {
                    j10[i15] = i14;
                    k10[i15] = f11 - i14;
                }
            }
            q(17);
            int c10 = cVar.c() * 4;
            if (z10) {
                i10 = 0;
            } else {
                i10 = 2;
            }
            int i16 = ((c10 + i10) + (!z11 ? 1 : 0)) - 1;
            int i17 = 0;
            int i18 = 0;
            for (int length2 = l10.length - 1; length2 >= 0; length2--) {
                if (z(cVar, z10, z11)) {
                    i17 += l10[length2] * f52748o[i16][length2 * 2];
                }
                i18 += l10[length2];
            }
            int i19 = 0;
            for (int length3 = j10.length - 1; length3 >= 0; length3--) {
                if (z(cVar, z10, z11)) {
                    i19 += j10[length3] * f52748o[i16][(length3 * 2) + 1];
                }
            }
            int i20 = i17 + i19;
            if ((i18 & 1) == 0 && i18 <= 13 && i18 >= 4) {
                int i21 = (13 - i18) / 2;
                int i22 = f52744k[i21];
                int i23 = 9 - i22;
                return new uk.b((f.b(l10, i22, true) * f52745l[i21]) + f.b(j10, i23, false) + f52746m[i21], i20);
            }
            throw k.a();
        }
        throw k.a();
    }

    List w(int i10, lk.a aVar) {
        this.f52750g.clear();
        boolean z10 = false;
        while (!z10) {
            try {
                List list = this.f52750g;
                list.add(F(aVar, list, i10));
            } catch (k e10) {
                if (!this.f52750g.isEmpty()) {
                    z10 = true;
                } else {
                    throw e10;
                }
            }
        }
        if (r() && B(this.f52750g, true)) {
            return this.f52750g;
        }
        boolean isEmpty = this.f52751h.isEmpty();
        H(i10);
        if (!isEmpty) {
            List t10 = t(false);
            if (t10 != null) {
                return t10;
            }
            List t11 = t(true);
            if (t11 != null) {
                return t11;
            }
        }
        throw k.a();
    }
}
