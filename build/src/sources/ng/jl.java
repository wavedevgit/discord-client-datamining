package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jl extends hf.a {
    public static final Parcelable.Creator<jl> CREATOR = new zl();

    /* renamed from: d  reason: collision with root package name */
    private final String f39960d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39961e;

    /* renamed from: i  reason: collision with root package name */
    private final String f39962i;

    /* renamed from: o  reason: collision with root package name */
    private final String f39963o;

    /* renamed from: p  reason: collision with root package name */
    private final String f39964p;

    /* renamed from: q  reason: collision with root package name */
    private final String f39965q;

    /* renamed from: r  reason: collision with root package name */
    private final String f39966r;

    /* renamed from: s  reason: collision with root package name */
    private final String f39967s;

    /* renamed from: t  reason: collision with root package name */
    private final String f39968t;

    /* renamed from: u  reason: collision with root package name */
    private final String f39969u;

    /* renamed from: v  reason: collision with root package name */
    private final String f39970v;

    /* renamed from: w  reason: collision with root package name */
    private final String f39971w;

    /* renamed from: x  reason: collision with root package name */
    private final String f39972x;

    /* renamed from: y  reason: collision with root package name */
    private final String f39973y;

    public jl(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13, String str14) {
        this.f39960d = str;
        this.f39961e = str2;
        this.f39962i = str3;
        this.f39963o = str4;
        this.f39964p = str5;
        this.f39965q = str6;
        this.f39966r = str7;
        this.f39967s = str8;
        this.f39968t = str9;
        this.f39969u = str10;
        this.f39970v = str11;
        this.f39971w = str12;
        this.f39972x = str13;
        this.f39973y = str14;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f39960d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f39961e, false);
        hf.c.s(parcel, 3, this.f39962i, false);
        hf.c.s(parcel, 4, this.f39963o, false);
        hf.c.s(parcel, 5, this.f39964p, false);
        hf.c.s(parcel, 6, this.f39965q, false);
        hf.c.s(parcel, 7, this.f39966r, false);
        hf.c.s(parcel, 8, this.f39967s, false);
        hf.c.s(parcel, 9, this.f39968t, false);
        hf.c.s(parcel, 10, this.f39969u, false);
        hf.c.s(parcel, 11, this.f39970v, false);
        hf.c.s(parcel, 12, this.f39971w, false);
        hf.c.s(parcel, 13, this.f39972x, false);
        hf.c.s(parcel, 14, this.f39973y, false);
        hf.c.b(parcel, a10);
    }
}
