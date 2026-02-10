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
    public int f40059d;

    /* renamed from: e  reason: collision with root package name */
    public String f40060e;

    /* renamed from: i  reason: collision with root package name */
    public String f40061i;

    /* renamed from: o  reason: collision with root package name */
    public int f40062o;

    /* renamed from: p  reason: collision with root package name */
    public Point[] f40063p;

    /* renamed from: q  reason: collision with root package name */
    public ra f40064q;

    /* renamed from: r  reason: collision with root package name */
    public ud f40065r;

    /* renamed from: s  reason: collision with root package name */
    public ve f40066s;

    /* renamed from: t  reason: collision with root package name */
    public yg f40067t;

    /* renamed from: u  reason: collision with root package name */
    public xf f40068u;

    /* renamed from: v  reason: collision with root package name */
    public sb f40069v;

    /* renamed from: w  reason: collision with root package name */
    public o7 f40070w;

    /* renamed from: x  reason: collision with root package name */
    public p8 f40071x;

    /* renamed from: y  reason: collision with root package name */
    public q9 f40072y;

    /* renamed from: z  reason: collision with root package name */
    public byte[] f40073z;

    public zh(int i10, String str, String str2, int i11, Point[] pointArr, ra raVar, ud udVar, ve veVar, yg ygVar, xf xfVar, sb sbVar, o7 o7Var, p8 p8Var, q9 q9Var, byte[] bArr, boolean z10, double d10) {
        this.f40059d = i10;
        this.f40060e = str;
        this.f40073z = bArr;
        this.f40061i = str2;
        this.f40062o = i11;
        this.f40063p = pointArr;
        this.A = z10;
        this.B = d10;
        this.f40064q = raVar;
        this.f40065r = udVar;
        this.f40066s = veVar;
        this.f40067t = ygVar;
        this.f40068u = xfVar;
        this.f40069v = sbVar;
        this.f40070w = o7Var;
        this.f40071x = p8Var;
        this.f40072y = q9Var;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f40059d);
        jf.c.s(parcel, 3, this.f40060e, false);
        jf.c.s(parcel, 4, this.f40061i, false);
        jf.c.l(parcel, 5, this.f40062o);
        jf.c.v(parcel, 6, this.f40063p, i10, false);
        jf.c.q(parcel, 7, this.f40064q, i10, false);
        jf.c.q(parcel, 8, this.f40065r, i10, false);
        jf.c.q(parcel, 9, this.f40066s, i10, false);
        jf.c.q(parcel, 10, this.f40067t, i10, false);
        jf.c.q(parcel, 11, this.f40068u, i10, false);
        jf.c.q(parcel, 12, this.f40069v, i10, false);
        jf.c.q(parcel, 13, this.f40070w, i10, false);
        jf.c.q(parcel, 14, this.f40071x, i10, false);
        jf.c.q(parcel, 15, this.f40072y, i10, false);
        jf.c.f(parcel, 16, this.f40073z, false);
        jf.c.c(parcel, 17, this.A);
        jf.c.h(parcel, 18, this.B);
        jf.c.b(parcel, a10);
    }
}
