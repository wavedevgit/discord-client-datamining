package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q9 extends hf.a {
    public static final Parcelable.Creator<q9> CREATOR = new nm();

    /* renamed from: d  reason: collision with root package name */
    public String f38032d;

    /* renamed from: e  reason: collision with root package name */
    public String f38033e;

    /* renamed from: i  reason: collision with root package name */
    public String f38034i;

    /* renamed from: o  reason: collision with root package name */
    public String f38035o;

    /* renamed from: p  reason: collision with root package name */
    public String f38036p;

    /* renamed from: q  reason: collision with root package name */
    public String f38037q;

    /* renamed from: r  reason: collision with root package name */
    public String f38038r;

    /* renamed from: s  reason: collision with root package name */
    public String f38039s;

    /* renamed from: t  reason: collision with root package name */
    public String f38040t;

    /* renamed from: u  reason: collision with root package name */
    public String f38041u;

    /* renamed from: v  reason: collision with root package name */
    public String f38042v;

    /* renamed from: w  reason: collision with root package name */
    public String f38043w;

    /* renamed from: x  reason: collision with root package name */
    public String f38044x;

    /* renamed from: y  reason: collision with root package name */
    public String f38045y;

    public q9(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13, String str14) {
        this.f38032d = str;
        this.f38033e = str2;
        this.f38034i = str3;
        this.f38035o = str4;
        this.f38036p = str5;
        this.f38037q = str6;
        this.f38038r = str7;
        this.f38039s = str8;
        this.f38040t = str9;
        this.f38041u = str10;
        this.f38042v = str11;
        this.f38043w = str12;
        this.f38044x = str13;
        this.f38045y = str14;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, this.f38032d, false);
        hf.c.s(parcel, 3, this.f38033e, false);
        hf.c.s(parcel, 4, this.f38034i, false);
        hf.c.s(parcel, 5, this.f38035o, false);
        hf.c.s(parcel, 6, this.f38036p, false);
        hf.c.s(parcel, 7, this.f38037q, false);
        hf.c.s(parcel, 8, this.f38038r, false);
        hf.c.s(parcel, 9, this.f38039s, false);
        hf.c.s(parcel, 10, this.f38040t, false);
        hf.c.s(parcel, 11, this.f38041u, false);
        hf.c.s(parcel, 12, this.f38042v, false);
        hf.c.s(parcel, 13, this.f38043w, false);
        hf.c.s(parcel, 14, this.f38044x, false);
        hf.c.s(parcel, 15, this.f38045y, false);
        hf.c.b(parcel, a10);
    }
}
