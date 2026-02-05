package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jl extends hf.a {
    public static final Parcelable.Creator<jl> CREATOR = new zl();

    /* renamed from: d  reason: collision with root package name */
    private final String f37749d;

    /* renamed from: e  reason: collision with root package name */
    private final String f37750e;

    /* renamed from: i  reason: collision with root package name */
    private final String f37751i;

    /* renamed from: o  reason: collision with root package name */
    private final String f37752o;

    /* renamed from: p  reason: collision with root package name */
    private final String f37753p;

    /* renamed from: q  reason: collision with root package name */
    private final String f37754q;

    /* renamed from: r  reason: collision with root package name */
    private final String f37755r;

    /* renamed from: s  reason: collision with root package name */
    private final String f37756s;

    /* renamed from: t  reason: collision with root package name */
    private final String f37757t;

    /* renamed from: u  reason: collision with root package name */
    private final String f37758u;

    /* renamed from: v  reason: collision with root package name */
    private final String f37759v;

    /* renamed from: w  reason: collision with root package name */
    private final String f37760w;

    /* renamed from: x  reason: collision with root package name */
    private final String f37761x;

    /* renamed from: y  reason: collision with root package name */
    private final String f37762y;

    public jl(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, String str9, String str10, String str11, String str12, String str13, String str14) {
        this.f37749d = str;
        this.f37750e = str2;
        this.f37751i = str3;
        this.f37752o = str4;
        this.f37753p = str5;
        this.f37754q = str6;
        this.f37755r = str7;
        this.f37756s = str8;
        this.f37757t = str9;
        this.f37758u = str10;
        this.f37759v = str11;
        this.f37760w = str12;
        this.f37761x = str13;
        this.f37762y = str14;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f37749d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f37750e, false);
        hf.c.s(parcel, 3, this.f37751i, false);
        hf.c.s(parcel, 4, this.f37752o, false);
        hf.c.s(parcel, 5, this.f37753p, false);
        hf.c.s(parcel, 6, this.f37754q, false);
        hf.c.s(parcel, 7, this.f37755r, false);
        hf.c.s(parcel, 8, this.f37756s, false);
        hf.c.s(parcel, 9, this.f37757t, false);
        hf.c.s(parcel, 10, this.f37758u, false);
        hf.c.s(parcel, 11, this.f37759v, false);
        hf.c.s(parcel, 12, this.f37760w, false);
        hf.c.s(parcel, 13, this.f37761x, false);
        hf.c.s(parcel, 14, this.f37762y, false);
        hf.c.b(parcel, a10);
    }
}
