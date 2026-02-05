package com.google.android.exoplayer2.trackselection;

import android.util.Pair;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.w1;
import java.util.Arrays;
import je.l;
import je.q;
import je.r;
import lc.r0;
import qd.r;
import qd.u0;
import qd.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class MappingTrackSelector extends q {

    /* renamed from: c  reason: collision with root package name */
    private MappedTrackInfo f13051c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class MappedTrackInfo {

        /* renamed from: a  reason: collision with root package name */
        private final int f13052a;

        /* renamed from: b  reason: collision with root package name */
        private final String[] f13053b;

        /* renamed from: c  reason: collision with root package name */
        private final int[] f13054c;

        /* renamed from: d  reason: collision with root package name */
        private final w0[] f13055d;

        /* renamed from: e  reason: collision with root package name */
        private final int[] f13056e;

        /* renamed from: f  reason: collision with root package name */
        private final int[][][] f13057f;

        /* renamed from: g  reason: collision with root package name */
        private final w0 f13058g;

        MappedTrackInfo(String[] strArr, int[] iArr, w0[] w0VarArr, int[] iArr2, int[][][] iArr3, w0 w0Var) {
            this.f13053b = strArr;
            this.f13054c = iArr;
            this.f13055d = w0VarArr;
            this.f13057f = iArr3;
            this.f13056e = iArr2;
            this.f13058g = w0Var;
            this.f13052a = iArr.length;
        }

        public int a(int i10, int i11, boolean z10) {
            int i12 = this.f13055d[i10].b(i11).f47828d;
            int[] iArr = new int[i12];
            int i13 = 0;
            for (int i14 = 0; i14 < i12; i14++) {
                int g10 = g(i10, i11, i14);
                if (g10 == 4 || (z10 && g10 == 3)) {
                    iArr[i13] = i14;
                    i13++;
                }
            }
            return b(i10, i11, Arrays.copyOf(iArr, i13));
        }

        public int b(int i10, int i11, int[] iArr) {
            int i12 = 0;
            int i13 = 16;
            String str = null;
            boolean z10 = false;
            int i14 = 0;
            while (i12 < iArr.length) {
                String str2 = this.f13055d[i10].b(i11).c(iArr[i12]).f11688w;
                int i15 = i14 + 1;
                if (i14 == 0) {
                    str = str2;
                } else {
                    z10 |= !ne.w0.c(str, str2);
                }
                i13 = Math.min(i13, w1.m(this.f13057f[i10][i11][i12]));
                i12++;
                i14 = i15;
            }
            if (z10) {
                return Math.min(i13, this.f13056e[i10]);
            }
            return i13;
        }

        public int c(int i10, int i11, int i12) {
            return this.f13057f[i10][i11][i12];
        }

        public int d() {
            return this.f13052a;
        }

        public int e(int i10) {
            return this.f13054c[i10];
        }

        public w0 f(int i10) {
            return this.f13055d[i10];
        }

        public int g(int i10, int i11, int i12) {
            return w1.F(c(i10, i11, i12));
        }

        public w0 h() {
            return this.f13058g;
        }
    }

    private static int l(w1[] w1VarArr, u0 u0Var, int[] iArr, boolean z10) {
        boolean z11;
        int length = w1VarArr.length;
        int i10 = 0;
        boolean z12 = true;
        for (int i11 = 0; i11 < w1VarArr.length; i11++) {
            w1 w1Var = w1VarArr[i11];
            int i12 = 0;
            for (int i13 = 0; i13 < u0Var.f47828d; i13++) {
                i12 = Math.max(i12, w1.F(w1Var.a(u0Var.c(i13))));
            }
            if (iArr[i11] == 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (i12 > i10 || (i12 == i10 && z10 && !z12 && z11)) {
                length = i11;
                z12 = z11;
                i10 = i12;
            }
        }
        return length;
    }

    private static int[] n(w1 w1Var, u0 u0Var) {
        int[] iArr = new int[u0Var.f47828d];
        for (int i10 = 0; i10 < u0Var.f47828d; i10++) {
            iArr[i10] = w1Var.a(u0Var.c(i10));
        }
        return iArr;
    }

    private static int[] o(w1[] w1VarArr) {
        int length = w1VarArr.length;
        int[] iArr = new int[length];
        for (int i10 = 0; i10 < length; i10++) {
            iArr[i10] = w1VarArr[i10].x();
        }
        return iArr;
    }

    @Override // je.q
    public final void h(Object obj) {
        this.f13051c = (MappedTrackInfo) obj;
    }

    @Override // je.q
    public final r j(w1[] w1VarArr, w0 w0Var, r.b bVar, Timeline timeline) {
        boolean z10;
        int[] n10;
        int[] iArr = new int[w1VarArr.length + 1];
        int length = w1VarArr.length + 1;
        u0[][] u0VarArr = new u0[length];
        int[][][] iArr2 = new int[w1VarArr.length + 1][];
        for (int i10 = 0; i10 < length; i10++) {
            int i11 = w0Var.f47844d;
            u0VarArr[i10] = new u0[i11];
            iArr2[i10] = new int[i11];
        }
        int[] o10 = o(w1VarArr);
        for (int i12 = 0; i12 < w0Var.f47844d; i12++) {
            u0 b10 = w0Var.b(i12);
            if (b10.f47830i == 5) {
                z10 = true;
            } else {
                z10 = false;
            }
            int l10 = l(w1VarArr, b10, iArr, z10);
            if (l10 == w1VarArr.length) {
                n10 = new int[b10.f47828d];
            } else {
                n10 = n(w1VarArr[l10], b10);
            }
            int i13 = iArr[l10];
            u0VarArr[l10][i13] = b10;
            iArr2[l10][i13] = n10;
            iArr[l10] = i13 + 1;
        }
        w0[] w0VarArr = new w0[w1VarArr.length];
        String[] strArr = new String[w1VarArr.length];
        int[] iArr3 = new int[w1VarArr.length];
        for (int i14 = 0; i14 < w1VarArr.length; i14++) {
            int i15 = iArr[i14];
            w0VarArr[i14] = new w0((u0[]) ne.w0.P0(u0VarArr[i14], i15));
            iArr2[i14] = (int[][]) ne.w0.P0(iArr2[i14], i15);
            strArr[i14] = w1VarArr[i14].getName();
            iArr3[i14] = w1VarArr[i14].e();
        }
        MappedTrackInfo mappedTrackInfo = new MappedTrackInfo(strArr, iArr3, w0VarArr, o10, iArr2, new w0((u0[]) ne.w0.P0(u0VarArr[w1VarArr.length], iArr[w1VarArr.length])));
        Pair p10 = p(mappedTrackInfo, iArr2, o10, bVar, timeline);
        return new je.r((r0[]) p10.first, (g[]) p10.second, h.b(mappedTrackInfo, (l[]) p10.second), mappedTrackInfo);
    }

    public final MappedTrackInfo m() {
        return this.f13051c;
    }

    protected abstract Pair p(MappedTrackInfo mappedTrackInfo, int[][][] iArr, int[] iArr2, r.b bVar, Timeline timeline);
}
