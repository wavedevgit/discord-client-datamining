package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jl extends hf.a {
    public static final Parcelable.Creator<jl> CREATOR = new zl();

    /* renamed from: d  reason: collision with root package name */
    private final String f38310d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38311e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38312i;

    /* renamed from: o  reason: collision with root package name */
    private final String f38313o;

    /* renamed from: p  reason: collision with root package name */
    private final String f38314p;

    /* renamed from: q  reason: collision with root package name */
    private final String f38315q;

    /* renamed from: r  reason: collision with root package name */
    private final String f38316r;

    /* renamed from: s  reason: collision with root package name */
    private final String f38317s;

    /* renamed from: t  reason: collision with root package name */
    private final String f38318t;

    /* renamed from: u  reason: collision with root package name */
    private final String f38319u;

    /* renamed from: v  reason: collision with root package name */
    private final String f38320v;

    /* renamed from: w  reason: collision with root package name */
    private final String f38321w;

    /* renamed from: x  reason: collision with root package name */
    private final String f38322x;

    /* renamed from: y  reason: collision with root package name */
    private final String f38323y;

    public jl(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13, String str14) {
        this.f38310d = str;
        this.f38311e = str2;
        this.f38312i = str3;
        this.f38313o = str4;
        this.f38314p = str5;
        this.f38315q = str6;
        this.f38316r = str7;
        this.f38317s = str8;
        this.f38318t = str9;
        this.f38319u = str10;
        this.f38320v = str11;
        this.f38321w = str12;
        this.f38322x = str13;
        this.f38323y = str14;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f38310d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f38311e, false);
        hf.c.s(parcel, 3, this.f38312i, false);
        hf.c.s(parcel, 4, this.f38313o, false);
        hf.c.s(parcel, 5, this.f38314p, false);
        hf.c.s(parcel, 6, this.f38315q, false);
        hf.c.s(parcel, 7, this.f38316r, false);
        hf.c.s(parcel, 8, this.f38317s, false);
        hf.c.s(parcel, 9, this.f38318t, false);
        hf.c.s(parcel, 10, this.f38319u, false);
        hf.c.s(parcel, 11, this.f38320v, false);
        hf.c.s(parcel, 12, this.f38321w, false);
        hf.c.s(parcel, 13, this.f38322x, false);
        hf.c.s(parcel, 14, this.f38323y, false);
        hf.c.b(parcel, a10);
    }
}
