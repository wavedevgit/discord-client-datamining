package oe;

import java.util.ArrayList;
import java.util.List;
import lc.l0;
import ne.d0;
import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final List f42359a;

    /* renamed from: b  reason: collision with root package name */
    public final int f42360b;

    /* renamed from: c  reason: collision with root package name */
    public final int f42361c;

    /* renamed from: d  reason: collision with root package name */
    public final int f42362d;

    /* renamed from: e  reason: collision with root package name */
    public final int f42363e;

    /* renamed from: f  reason: collision with root package name */
    public final int f42364f;

    /* renamed from: g  reason: collision with root package name */
    public final int f42365g;

    /* renamed from: h  reason: collision with root package name */
    public final float f42366h;

    /* renamed from: i  reason: collision with root package name */
    public final String f42367i;

    private a(List list, int i10, int i11, int i12, int i13, int i14, int i15, float f10, String str) {
        this.f42359a = list;
        this.f42360b = i10;
        this.f42361c = i11;
        this.f42362d = i12;
        this.f42363e = i13;
        this.f42364f = i14;
        this.f42365g = i15;
        this.f42366h = f10;
        this.f42367i = str;
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
                    int i17 = l10.f39538f;
                    int i18 = l10.f39539g;
                    int i19 = l10.f39547o;
                    int i20 = l10.f39548p;
                    int i21 = l10.f39549q;
                    float f11 = l10.f39540h;
                    str = ne.f.a(l10.f39533a, l10.f39534b, l10.f39535c);
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
