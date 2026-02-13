package og;

import android.graphics.Point;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zh extends jf.a {
    public static final Parcelable.Creator<zh> CREATOR = new wi();
    public boolean A;
    public double B;

    /* renamed from: d  reason: collision with root package name */
    public int f40628d;

    /* renamed from: e  reason: collision with root package name */
    public String f40629e;

    /* renamed from: i  reason: collision with root package name */
    public String f40630i;

    /* renamed from: o  reason: collision with root package name */
    public int f40631o;

    /* renamed from: p  reason: collision with root package name */
    public Point[] f40632p;

    /* renamed from: q  reason: collision with root package name */
    public ra f40633q;

    /* renamed from: r  reason: collision with root package name */
    public ud f40634r;

    /* renamed from: s  reason: collision with root package name */
    public ve f40635s;

    /* renamed from: t  reason: collision with root package name */
    public yg f40636t;

    /* renamed from: u  reason: collision with root package name */
    public xf f40637u;

    /* renamed from: v  reason: collision with root package name */
    public sb f40638v;

    /* renamed from: w  reason: collision with root package name */
    public o7 f40639w;

    /* renamed from: x  reason: collision with root package name */
    public p8 f40640x;

    /* renamed from: y  reason: collision with root package name */
    public q9 f40641y;

    /* renamed from: z  reason: collision with root package name */
    public byte[] f40642z;

    public zh(int i10, String str, String str2, int i11, Point[] pointArr, ra raVar, ud udVar, ve veVar, yg ygVar, xf xfVar, sb sbVar, o7 o7Var, p8 p8Var, q9 q9Var, byte[] bArr, boolean z10, double d10) {
        this.f40628d = i10;
        this.f40629e = str;
        this.f40642z = bArr;
        this.f40630i = str2;
        this.f40631o = i11;
        this.f40632p = pointArr;
        this.A = z10;
        this.B = d10;
        this.f40633q = raVar;
        this.f40634r = udVar;
        this.f40635s = veVar;
        this.f40636t = ygVar;
        this.f40637u = xfVar;
        this.f40638v = sbVar;
        this.f40639w = o7Var;
        this.f40640x = p8Var;
        this.f40641y = q9Var;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f40628d);
        jf.c.s(parcel, 3, this.f40629e, false);
        jf.c.s(parcel, 4, this.f40630i, false);
        jf.c.l(parcel, 5, this.f40631o);
        jf.c.v(parcel, 6, this.f40632p, i10, false);
        jf.c.q(parcel, 7, this.f40633q, i10, false);
        jf.c.q(parcel, 8, this.f40634r, i10, false);
        jf.c.q(parcel, 9, this.f40635s, i10, false);
        jf.c.q(parcel, 10, this.f40636t, i10, false);
        jf.c.q(parcel, 11, this.f40637u, i10, false);
        jf.c.q(parcel, 12, this.f40638v, i10, false);
        jf.c.q(parcel, 13, this.f40639w, i10, false);
        jf.c.q(parcel, 14, this.f40640x, i10, false);
        jf.c.q(parcel, 15, this.f40641y, i10, false);
        jf.c.f(parcel, 16, this.f40642z, false);
        jf.c.c(parcel, 17, this.A);
        jf.c.h(parcel, 18, this.B);
        jf.c.b(parcel, a10);
    }
}
