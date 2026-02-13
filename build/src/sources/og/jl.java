package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jl extends jf.a {
    public static final Parcelable.Creator<jl> CREATOR = new zl();

    /* renamed from: d  reason: collision with root package name */
    private final String f39880d;

    /* renamed from: e  reason: collision with root package name */
    private final String f39881e;

    /* renamed from: i  reason: collision with root package name */
    private final String f39882i;

    /* renamed from: o  reason: collision with root package name */
    private final String f39883o;

    /* renamed from: p  reason: collision with root package name */
    private final String f39884p;

    /* renamed from: q  reason: collision with root package name */
    private final String f39885q;

    /* renamed from: r  reason: collision with root package name */
    private final String f39886r;

    /* renamed from: s  reason: collision with root package name */
    private final String f39887s;

    /* renamed from: t  reason: collision with root package name */
    private final String f39888t;

    /* renamed from: u  reason: collision with root package name */
    private final String f39889u;

    /* renamed from: v  reason: collision with root package name */
    private final String f39890v;

    /* renamed from: w  reason: collision with root package name */
    private final String f39891w;

    /* renamed from: x  reason: collision with root package name */
    private final String f39892x;

    /* renamed from: y  reason: collision with root package name */
    private final String f39893y;

    public jl(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13, String str14) {
        this.f39880d = str;
        this.f39881e = str2;
        this.f39882i = str3;
        this.f39883o = str4;
        this.f39884p = str5;
        this.f39885q = str6;
        this.f39886r = str7;
        this.f39887s = str8;
        this.f39888t = str9;
        this.f39889u = str10;
        this.f39890v = str11;
        this.f39891w = str12;
        this.f39892x = str13;
        this.f39893y = str14;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f39880d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.s(parcel, 2, this.f39881e, false);
        jf.c.s(parcel, 3, this.f39882i, false);
        jf.c.s(parcel, 4, this.f39883o, false);
        jf.c.s(parcel, 5, this.f39884p, false);
        jf.c.s(parcel, 6, this.f39885q, false);
        jf.c.s(parcel, 7, this.f39886r, false);
        jf.c.s(parcel, 8, this.f39887s, false);
        jf.c.s(parcel, 9, this.f39888t, false);
        jf.c.s(parcel, 10, this.f39889u, false);
        jf.c.s(parcel, 11, this.f39890v, false);
        jf.c.s(parcel, 12, this.f39891w, false);
        jf.c.s(parcel, 13, this.f39892x, false);
        jf.c.s(parcel, 14, this.f39893y, false);
        jf.c.b(parcel, a10);
    }
}
