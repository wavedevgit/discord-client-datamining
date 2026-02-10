package pe;

import java.util.ArrayList;
import java.util.List;
import mc.l0;
import oe.d0;
import oe.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public final List f43090a;

    /* renamed from: b  reason: collision with root package name */
    public final int f43091b;

    /* renamed from: c  reason: collision with root package name */
    public final int f43092c;

    /* renamed from: d  reason: collision with root package name */
    public final int f43093d;

    /* renamed from: e  reason: collision with root package name */
    public final int f43094e;

    /* renamed from: f  reason: collision with root package name */
    public final int f43095f;

    /* renamed from: g  reason: collision with root package name */
    public final int f43096g;

    /* renamed from: h  reason: collision with root package name */
    public final float f43097h;

    /* renamed from: i  reason: collision with root package name */
    public final String f43098i;

    private a(List list, int i10, int i11, int i12, int i13, int i14, int i15, float f10, String str) {
        this.f43090a = list;
        this.f43091b = i10;
        this.f43092c = i11;
        this.f43093d = i12;
        this.f43094e = i13;
        this.f43095f = i14;
        this.f43096g = i15;
        this.f43097h = f10;
        this.f43098i = str;
    }

    private static byte[] a(h0 h0Var) {
        int N = h0Var.N();
        int f10 = h0Var.f();
        h0Var.V(N);
        return oe.f.d(h0Var.e(), f10, N);
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
                    int i17 = l10.f40592f;
                    int i18 = l10.f40593g;
                    int i19 = l10.f40601o;
                    int i20 = l10.f40602p;
                    int i21 = l10.f40603q;
                    float f11 = l10.f40594h;
                    str = oe.f.a(l10.f40587a, l10.f40588b, l10.f40589c);
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
