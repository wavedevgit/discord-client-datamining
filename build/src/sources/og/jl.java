package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jl extends jf.a {
    public static final Parcelable.Creator<jl> CREATOR = new zl();

    /* renamed from: d  reason: collision with root package name */
    private final String f40985d;

    /* renamed from: e  reason: collision with root package name */
    private final String f40986e;

    /* renamed from: i  reason: collision with root package name */
    private final String f40987i;

    /* renamed from: o  reason: collision with root package name */
    private final String f40988o;

    /* renamed from: p  reason: collision with root package name */
    private final String f40989p;

    /* renamed from: q  reason: collision with root package name */
    private final String f40990q;

    /* renamed from: r  reason: collision with root package name */
    private final String f40991r;

    /* renamed from: s  reason: collision with root package name */
    private final String f40992s;

    /* renamed from: t  reason: collision with root package name */
    private final String f40993t;

    /* renamed from: u  reason: collision with root package name */
    private final String f40994u;

    /* renamed from: v  reason: collision with root package name */
    private final String f40995v;

    /* renamed from: w  reason: collision with root package name */
    private final String f40996w;

    /* renamed from: x  reason: collision with root package name */
    private final String f40997x;

    /* renamed from: y  reason: collision with root package name */
    private final String f40998y;

    public jl(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13, String str14) {
        this.f40985d = str;
        this.f40986e = str2;
        this.f40987i = str3;
        this.f40988o = str4;
        this.f40989p = str5;
        this.f40990q = str6;
        this.f40991r = str7;
        this.f40992s = str8;
        this.f40993t = str9;
        this.f40994u = str10;
        this.f40995v = str11;
        this.f40996w = str12;
        this.f40997x = str13;
        this.f40998y = str14;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f40985d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.s(parcel, 2, this.f40986e, false);
        jf.c.s(parcel, 3, this.f40987i, false);
        jf.c.s(parcel, 4, this.f40988o, false);
        jf.c.s(parcel, 5, this.f40989p, false);
        jf.c.s(parcel, 6, this.f40990q, false);
        jf.c.s(parcel, 7, this.f40991r, false);
        jf.c.s(parcel, 8, this.f40992s, false);
        jf.c.s(parcel, 9, this.f40993t, false);
        jf.c.s(parcel, 10, this.f40994u, false);
        jf.c.s(parcel, 11, this.f40995v, false);
        jf.c.s(parcel, 12, this.f40996w, false);
        jf.c.s(parcel, 13, this.f40997x, false);
        jf.c.s(parcel, 14, this.f40998y, false);
        jf.c.b(parcel, a10);
    }
}
