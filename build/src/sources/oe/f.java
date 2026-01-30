package oe;

import java.util.Collections;
import java.util.List;
import lc.l0;
import ne.d0;
import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    public final List f42567a;

    /* renamed from: b  reason: collision with root package name */
    public final int f42568b;

    /* renamed from: c  reason: collision with root package name */
    public final int f42569c;

    /* renamed from: d  reason: collision with root package name */
    public final int f42570d;

    /* renamed from: e  reason: collision with root package name */
    public final int f42571e;

    /* renamed from: f  reason: collision with root package name */
    public final int f42572f;

    /* renamed from: g  reason: collision with root package name */
    public final int f42573g;

    /* renamed from: h  reason: collision with root package name */
    public final float f42574h;

    /* renamed from: i  reason: collision with root package name */
    public final String f42575i;

    private f(List list, int i10, int i11, int i12, int i13, int i14, int i15, float f10, String str) {
        this.f42567a = list;
        this.f42568b = i10;
        this.f42569c = i11;
        this.f42570d = i12;
        this.f42571e = i13;
        this.f42572f = i14;
        this.f42573g = i15;
        this.f42574h = f10;
        this.f42575i = str;
    }

    public static f a(h0 h0Var) {
        boolean z10;
        List singletonList;
        int i10;
        try {
            h0Var.V(21);
            int H = h0Var.H() & 3;
            int H2 = h0Var.H();
            int f10 = h0Var.f();
            int i11 = 0;
            int i12 = 0;
            int i13 = 0;
            while (true) {
                z10 = true;
                if (i12 >= H2) {
                    break;
                }
                h0Var.V(1);
                int N = h0Var.N();
                for (int i14 = 0; i14 < N; i14++) {
                    int N2 = h0Var.N();
                    i13 += N2 + 4;
                    h0Var.V(N2);
                }
                i12++;
            }
            h0Var.U(f10);
            byte[] bArr = new byte[i13];
            int i15 = -1;
            int i16 = -1;
            int i17 = -1;
            int i18 = -1;
            int i19 = -1;
            float f11 = 1.0f;
            String str = null;
            int i20 = 0;
            int i21 = 0;
            while (i20 < H2) {
                int H3 = h0Var.H() & 63;
                int N3 = h0Var.N();
                int i22 = i11;
                while (i22 < N3) {
                    int N4 = h0Var.N();
                    boolean z11 = z10;
                    byte[] bArr2 = d0.f40148a;
                    int i23 = H;
                    System.arraycopy(bArr2, i11, bArr, i21, bArr2.length);
                    int length = i21 + bArr2.length;
                    System.arraycopy(h0Var.e(), h0Var.f(), bArr, length, N4);
                    if (H3 == 33 && i22 == 0) {
                        d0.a h10 = d0.h(bArr, length, length + N4);
                        i15 = h10.f40162k;
                        i16 = h10.f40163l;
                        i17 = h10.f40165n;
                        int i24 = h10.f40166o;
                        int i25 = h10.f40167p;
                        i10 = H2;
                        float f12 = h10.f40164m;
                        str = ne.f.c(h10.f40152a, h10.f40153b, h10.f40154c, h10.f40155d, h10.f40159h, h10.f40160i);
                        i19 = i25;
                        f11 = f12;
                        i18 = i24;
                    } else {
                        i10 = H2;
                    }
                    i21 = length + N4;
                    h0Var.V(N4);
                    i22++;
                    z10 = z11;
                    H = i23;
                    H2 = i10;
                    i11 = 0;
                }
                i20++;
                i11 = 0;
            }
            int i26 = H;
            if (i13 == 0) {
                singletonList = Collections.EMPTY_LIST;
            } else {
                singletonList = Collections.singletonList(bArr);
            }
            return new f(singletonList, i26 + 1, i15, i16, i17, i18, i19, f11, str);
        } catch (ArrayIndexOutOfBoundsException e10) {
            throw l0.a("Error parsing HEVC config", e10);
        }
    }
}
