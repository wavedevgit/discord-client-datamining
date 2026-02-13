package pe;

import java.util.Collections;
import java.util.List;
import mc.l0;
import oe.d0;
import oe.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    public final List f42159a;

    /* renamed from: b  reason: collision with root package name */
    public final int f42160b;

    /* renamed from: c  reason: collision with root package name */
    public final int f42161c;

    /* renamed from: d  reason: collision with root package name */
    public final int f42162d;

    /* renamed from: e  reason: collision with root package name */
    public final int f42163e;

    /* renamed from: f  reason: collision with root package name */
    public final int f42164f;

    /* renamed from: g  reason: collision with root package name */
    public final int f42165g;

    /* renamed from: h  reason: collision with root package name */
    public final float f42166h;

    /* renamed from: i  reason: collision with root package name */
    public final String f42167i;

    private f(List list, int i10, int i11, int i12, int i13, int i14, int i15, float f10, String str) {
        this.f42159a = list;
        this.f42160b = i10;
        this.f42161c = i11;
        this.f42162d = i12;
        this.f42163e = i13;
        this.f42164f = i14;
        this.f42165g = i15;
        this.f42166h = f10;
        this.f42167i = str;
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
                    byte[] bArr2 = d0.f39459a;
                    int i23 = H;
                    System.arraycopy(bArr2, i11, bArr, i21, bArr2.length);
                    int length = i21 + bArr2.length;
                    System.arraycopy(h0Var.e(), h0Var.f(), bArr, length, N4);
                    if (H3 == 33 && i22 == 0) {
                        d0.a h10 = d0.h(bArr, length, length + N4);
                        i15 = h10.f39473k;
                        i16 = h10.f39474l;
                        i17 = h10.f39476n;
                        int i24 = h10.f39477o;
                        int i25 = h10.f39478p;
                        i10 = H2;
                        float f12 = h10.f39475m;
                        str = oe.f.c(h10.f39463a, h10.f39464b, h10.f39465c, h10.f39466d, h10.f39470h, h10.f39471i);
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
