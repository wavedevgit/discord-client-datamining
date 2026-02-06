package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q9 extends hf.a {
    public static final Parcelable.Creator<q9> CREATOR = new nm();

    /* renamed from: d  reason: collision with root package name */
    public String f40195d;

    /* renamed from: e  reason: collision with root package name */
    public String f40196e;

    /* renamed from: i  reason: collision with root package name */
    public String f40197i;

    /* renamed from: o  reason: collision with root package name */
    public String f40198o;

    /* renamed from: p  reason: collision with root package name */
    public String f40199p;

    /* renamed from: q  reason: collision with root package name */
    public String f40200q;

    /* renamed from: r  reason: collision with root package name */
    public String f40201r;

    /* renamed from: s  reason: collision with root package name */
    public String f40202s;

    /* renamed from: t  reason: collision with root package name */
    public String f40203t;

    /* renamed from: u  reason: collision with root package name */
    public String f40204u;

    /* renamed from: v  reason: collision with root package name */
    public String f40205v;

    /* renamed from: w  reason: collision with root package name */
    public String f40206w;

    /* renamed from: x  reason: collision with root package name */
    public String f40207x;

    /* renamed from: y  reason: collision with root package name */
    public String f40208y;

    public q9(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13, String str14) {
        this.f40195d = str;
        this.f40196e = str2;
        this.f40197i = str3;
        this.f40198o = str4;
        this.f40199p = str5;
        this.f40200q = str6;
        this.f40201r = str7;
        this.f40202s = str8;
        this.f40203t = str9;
        this.f40204u = str10;
        this.f40205v = str11;
        this.f40206w = str12;
        this.f40207x = str13;
        this.f40208y = str14;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, this.f40195d, false);
        hf.c.s(parcel, 3, this.f40196e, false);
        hf.c.s(parcel, 4, this.f40197i, false);
        hf.c.s(parcel, 5, this.f40198o, false);
        hf.c.s(parcel, 6, this.f40199p, false);
        hf.c.s(parcel, 7, this.f40200q, false);
        hf.c.s(parcel, 8, this.f40201r, false);
        hf.c.s(parcel, 9, this.f40202s, false);
        hf.c.s(parcel, 10, this.f40203t, false);
        hf.c.s(parcel, 11, this.f40204u, false);
        hf.c.s(parcel, 12, this.f40205v, false);
        hf.c.s(parcel, 13, this.f40206w, false);
        hf.c.s(parcel, 14, this.f40207x, false);
        hf.c.s(parcel, 15, this.f40208y, false);
        hf.c.b(parcel, a10);
    }
}
