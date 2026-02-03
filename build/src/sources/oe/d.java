package oe;

import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    public final int f42678a;

    /* renamed from: b  reason: collision with root package name */
    public final int f42679b;

    /* renamed from: c  reason: collision with root package name */
    public final String f42680c;

    private d(int i10, int i11, String str) {
        this.f42678a = i10;
        this.f42679b = i11;
        this.f42680c = str;
    }

    public static d a(h0 h0Var) {
        String str;
        h0Var.V(2);
        int H = h0Var.H();
        int i10 = H >> 1;
        int H2 = ((h0Var.H() >> 3) & 31) | ((H & 1) << 5);
        if (i10 != 4 && i10 != 5 && i10 != 7) {
            if (i10 == 8) {
                str = "hev1";
            } else if (i10 == 9) {
                str = "avc3";
            } else {
                return null;
            }
        } else {
            str = "dvhe";
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append(str);
        String str2 = ".0";
        sb2.append(".0");
        sb2.append(i10);
        if (H2 >= 10) {
            str2 = ".";
        }
        sb2.append(str2);
        sb2.append(H2);
        return new d(i10, H2, sb2.toString());
    }
}
