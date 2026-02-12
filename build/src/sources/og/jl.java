package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jl extends jf.a {
    public static final Parcelable.Creator<jl> CREATOR = new zl();

    /* renamed from: d  reason: collision with root package name */
    private final String f39312d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39313e;

    /* renamed from: i  reason: collision with root package name */
    private final String f39314i;

    /* renamed from: o  reason: collision with root package name */
    private final String f39315o;

    /* renamed from: p  reason: collision with root package name */
    private final String f39316p;

    /* renamed from: q  reason: collision with root package name */
    private final String f39317q;

    /* renamed from: r  reason: collision with root package name */
    private final String f39318r;

    /* renamed from: s  reason: collision with root package name */
    private final String f39319s;

    /* renamed from: t  reason: collision with root package name */
    private final String f39320t;

    /* renamed from: u  reason: collision with root package name */
    private final String f39321u;

    /* renamed from: v  reason: collision with root package name */
    private final String f39322v;

    /* renamed from: w  reason: collision with root package name */
    private final String f39323w;

    /* renamed from: x  reason: collision with root package name */
    private final String f39324x;

    /* renamed from: y  reason: collision with root package name */
    private final String f39325y;

    public jl(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13, String str14) {
        this.f39312d = str;
        this.f39313e = str2;
        this.f39314i = str3;
        this.f39315o = str4;
        this.f39316p = str5;
        this.f39317q = str6;
        this.f39318r = str7;
        this.f39319s = str8;
        this.f39320t = str9;
        this.f39321u = str10;
        this.f39322v = str11;
        this.f39323w = str12;
        this.f39324x = str13;
        this.f39325y = str14;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f39312d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.s(parcel, 2, this.f39313e, false);
        jf.c.s(parcel, 3, this.f39314i, false);
        jf.c.s(parcel, 4, this.f39315o, false);
        jf.c.s(parcel, 5, this.f39316p, false);
        jf.c.s(parcel, 6, this.f39317q, false);
        jf.c.s(parcel, 7, this.f39318r, false);
        jf.c.s(parcel, 8, this.f39319s, false);
        jf.c.s(parcel, 9, this.f39320t, false);
        jf.c.s(parcel, 10, this.f39321u, false);
        jf.c.s(parcel, 11, this.f39322v, false);
        jf.c.s(parcel, 12, this.f39323w, false);
        jf.c.s(parcel, 13, this.f39324x, false);
        jf.c.s(parcel, 14, this.f39325y, false);
        jf.c.b(parcel, a10);
    }
}
