package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jl extends jf.a {
    public static final Parcelable.Creator<jl> CREATOR = new zl();

    /* renamed from: d  reason: collision with root package name */
    private final String f39311d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39312e;

    /* renamed from: i  reason: collision with root package name */
    private final String f39313i;

    /* renamed from: o  reason: collision with root package name */
    private final String f39314o;

    /* renamed from: p  reason: collision with root package name */
    private final String f39315p;

    /* renamed from: q  reason: collision with root package name */
    private final String f39316q;

    /* renamed from: r  reason: collision with root package name */
    private final String f39317r;

    /* renamed from: s  reason: collision with root package name */
    private final String f39318s;

    /* renamed from: t  reason: collision with root package name */
    private final String f39319t;

    /* renamed from: u  reason: collision with root package name */
    private final String f39320u;

    /* renamed from: v  reason: collision with root package name */
    private final String f39321v;

    /* renamed from: w  reason: collision with root package name */
    private final String f39322w;

    /* renamed from: x  reason: collision with root package name */
    private final String f39323x;

    /* renamed from: y  reason: collision with root package name */
    private final String f39324y;

    public jl(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13, String str14) {
        this.f39311d = str;
        this.f39312e = str2;
        this.f39313i = str3;
        this.f39314o = str4;
        this.f39315p = str5;
        this.f39316q = str6;
        this.f39317r = str7;
        this.f39318s = str8;
        this.f39319t = str9;
        this.f39320u = str10;
        this.f39321v = str11;
        this.f39322w = str12;
        this.f39323x = str13;
        this.f39324y = str14;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f39311d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.s(parcel, 2, this.f39312e, false);
        jf.c.s(parcel, 3, this.f39313i, false);
        jf.c.s(parcel, 4, this.f39314o, false);
        jf.c.s(parcel, 5, this.f39315p, false);
        jf.c.s(parcel, 6, this.f39316q, false);
        jf.c.s(parcel, 7, this.f39317r, false);
        jf.c.s(parcel, 8, this.f39318s, false);
        jf.c.s(parcel, 9, this.f39319t, false);
        jf.c.s(parcel, 10, this.f39320u, false);
        jf.c.s(parcel, 11, this.f39321v, false);
        jf.c.s(parcel, 12, this.f39322w, false);
        jf.c.s(parcel, 13, this.f39323x, false);
        jf.c.s(parcel, 14, this.f39324y, false);
        jf.c.b(parcel, a10);
    }
}
