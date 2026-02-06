package oe;

import java.util.ArrayList;
import java.util.List;
import lc.l0;
import ne.d0;
import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final List f41582a;

    /* renamed from: b  reason: collision with root package name */
    public final int f41583b;

    /* renamed from: c  reason: collision with root package name */
    public final int f41584c;

    /* renamed from: d  reason: collision with root package name */
    public final int f41585d;

    /* renamed from: e  reason: collision with root package name */
    public final int f41586e;

    /* renamed from: f  reason: collision with root package name */
    public final int f41587f;

    /* renamed from: g  reason: collision with root package name */
    public final int f41588g;

    /* renamed from: h  reason: collision with root package name */
    public final float f41589h;

    /* renamed from: i  reason: collision with root package name */
    public final String f41590i;

    private a(List list, int i10, int i11, int i12, int i13, int i14, int i15, float f10, String str) {
        this.f41582a = list;
        this.f41583b = i10;
        this.f41584c = i11;
        this.f41585d = i12;
        this.f41586e = i13;
        this.f41587f = i14;
        this.f41588g = i15;
        this.f41589h = f10;
        this.f41590i = str;
    }

    private static byte[] a(h0 h0Var) {
        int N = h0Var.N();
        int f10 = h0Var.f();
        h0Var.V(N);
        return ne.f.d(h0Var.e(), f10, N);
    }

    public static a b(h0 h0Var) {
        String str;
        int i10;
        int i11;
        int i12;
        int i13;
        float f10;
        int i14;
        try {
            h0Var.V(4);
            int H = (h0Var.H() & 3) + 1;
            if (H != 3) {
                ArrayList arrayList = new ArrayList();
                int H2 = h0Var.H() & 31;
                for (int i15 = 0; i15 < H2; i15++) {
                    arrayList.add(a(h0Var));
                }
                int H3 = h0Var.H();
                for (int i16 = 0; i16 < H3; i16++) {
                    arrayList.add(a(h0Var));
                }
                if (H2 > 0) {
                    d0.c l10 = d0.l((byte[]) arrayList.get(0), H, ((byte[]) arrayList.get(0)).length);
                    int i17 = l10.f38893f;
                    int i18 = l10.f38894g;
                    int i19 = l10.f38902o;
                    int i20 = l10.f38903p;
                    int i21 = l10.f38904q;
                    float f11 = l10.f38895h;
                    str = ne.f.a(l10.f38888a, l10.f38889b, l10.f38890c);
                    i12 = i20;
                    i13 = i21;
                    f10 = f11;
                    i10 = i17;
                    i11 = i18;
                    i14 = i19;
                } else {
                    str = null;
                    i10 = -1;
                    i11 = -1;
                    i12 = -1;
                    i13 = -1;
                    f10 = 1.0f;
                    i14 = -1;
                }
                return new a(arrayList, H, i10, i11, i14, i12, i13, f10, str);
            }
            throw new IllegalStateException();
        } catch (ArrayIndexOutOfBoundsException e10) {
            throw l0.a("Error parsing AVC config", e10);
        }
    }
}
