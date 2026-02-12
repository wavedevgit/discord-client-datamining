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
    public int f40060d;

    /* renamed from: e  reason: collision with root package name */
    public String f40061e;

    /* renamed from: i  reason: collision with root package name */
    public String f40062i;

    /* renamed from: o  reason: collision with root package name */
    public int f40063o;

    /* renamed from: p  reason: collision with root package name */
    public Point[] f40064p;

    /* renamed from: q  reason: collision with root package name */
    public ra f40065q;

    /* renamed from: r  reason: collision with root package name */
    public ud f40066r;

    /* renamed from: s  reason: collision with root package name */
    public ve f40067s;

    /* renamed from: t  reason: collision with root package name */
    public yg f40068t;

    /* renamed from: u  reason: collision with root package name */
    public xf f40069u;

    /* renamed from: v  reason: collision with root package name */
    public sb f40070v;

    /* renamed from: w  reason: collision with root package name */
    public o7 f40071w;

    /* renamed from: x  reason: collision with root package name */
    public p8 f40072x;

    /* renamed from: y  reason: collision with root package name */
    public q9 f40073y;

    /* renamed from: z  reason: collision with root package name */
    public byte[] f40074z;

    public zh(int i10, String str, String str2, int i11, Point[] pointArr, ra raVar, ud udVar, ve veVar, yg ygVar, xf xfVar, sb sbVar, o7 o7Var, p8 p8Var, q9 q9Var, byte[] bArr, boolean z10, double d10) {
        this.f40060d = i10;
        this.f40061e = str;
        this.f40074z = bArr;
        this.f40062i = str2;
        this.f40063o = i11;
        this.f40064p = pointArr;
        this.A = z10;
        this.B = d10;
        this.f40065q = raVar;
        this.f40066r = udVar;
        this.f40067s = veVar;
        this.f40068t = ygVar;
        this.f40069u = xfVar;
        this.f40070v = sbVar;
        this.f40071w = o7Var;
        this.f40072x = p8Var;
        this.f40073y = q9Var;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f40060d);
        jf.c.s(parcel, 3, this.f40061e, false);
        jf.c.s(parcel, 4, this.f40062i, false);
        jf.c.l(parcel, 5, this.f40063o);
        jf.c.v(parcel, 6, this.f40064p, i10, false);
        jf.c.q(parcel, 7, this.f40065q, i10, false);
        jf.c.q(parcel, 8, this.f40066r, i10, false);
        jf.c.q(parcel, 9, this.f40067s, i10, false);
        jf.c.q(parcel, 10, this.f40068t, i10, false);
        jf.c.q(parcel, 11, this.f40069u, i10, false);
        jf.c.q(parcel, 12, this.f40070v, i10, false);
        jf.c.q(parcel, 13, this.f40071w, i10, false);
        jf.c.q(parcel, 14, this.f40072x, i10, false);
        jf.c.q(parcel, 15, this.f40073y, i10, false);
        jf.c.f(parcel, 16, this.f40074z, false);
        jf.c.c(parcel, 17, this.A);
        jf.c.h(parcel, 18, this.B);
        jf.c.b(parcel, a10);
    }
}
