package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jl extends hf.a {
    public static final Parcelable.Creator<jl> CREATOR = new zl();

    /* renamed from: d  reason: collision with root package name */
    private final String f38294d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38295e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38296i;

    /* renamed from: o  reason: collision with root package name */
    private final String f38297o;

    /* renamed from: p  reason: collision with root package name */
    private final String f38298p;

    /* renamed from: q  reason: collision with root package name */
    private final String f38299q;

    /* renamed from: r  reason: collision with root package name */
    private final String f38300r;

    /* renamed from: s  reason: collision with root package name */
    private final String f38301s;

    /* renamed from: t  reason: collision with root package name */
    private final String f38302t;

    /* renamed from: u  reason: collision with root package name */
    private final String f38303u;

    /* renamed from: v  reason: collision with root package name */
    private final String f38304v;

    /* renamed from: w  reason: collision with root package name */
    private final String f38305w;

    /* renamed from: x  reason: collision with root package name */
    private final String f38306x;

    /* renamed from: y  reason: collision with root package name */
    private final String f38307y;

    public jl(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13, String str14) {
        this.f38294d = str;
        this.f38295e = str2;
        this.f38296i = str3;
        this.f38297o = str4;
        this.f38298p = str5;
        this.f38299q = str6;
        this.f38300r = str7;
        this.f38301s = str8;
        this.f38302t = str9;
        this.f38303u = str10;
        this.f38304v = str11;
        this.f38305w = str12;
        this.f38306x = str13;
        this.f38307y = str14;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f38294d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f38295e, false);
        hf.c.s(parcel, 3, this.f38296i, false);
        hf.c.s(parcel, 4, this.f38297o, false);
        hf.c.s(parcel, 5, this.f38298p, false);
        hf.c.s(parcel, 6, this.f38299q, false);
        hf.c.s(parcel, 7, this.f38300r, false);
        hf.c.s(parcel, 8, this.f38301s, false);
        hf.c.s(parcel, 9, this.f38302t, false);
        hf.c.s(parcel, 10, this.f38303u, false);
        hf.c.s(parcel, 11, this.f38304v, false);
        hf.c.s(parcel, 12, this.f38305w, false);
        hf.c.s(parcel, 13, this.f38306x, false);
        hf.c.s(parcel, 14, this.f38307y, false);
        hf.c.b(parcel, a10);
    }
}
