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
    public int f41733d;

    /* renamed from: e  reason: collision with root package name */
    public String f41734e;

    /* renamed from: i  reason: collision with root package name */
    public String f41735i;

    /* renamed from: o  reason: collision with root package name */
    public int f41736o;

    /* renamed from: p  reason: collision with root package name */
    public Point[] f41737p;

    /* renamed from: q  reason: collision with root package name */
    public ra f41738q;

    /* renamed from: r  reason: collision with root package name */
    public ud f41739r;

    /* renamed from: s  reason: collision with root package name */
    public ve f41740s;

    /* renamed from: t  reason: collision with root package name */
    public yg f41741t;

    /* renamed from: u  reason: collision with root package name */
    public xf f41742u;

    /* renamed from: v  reason: collision with root package name */
    public sb f41743v;

    /* renamed from: w  reason: collision with root package name */
    public o7 f41744w;

    /* renamed from: x  reason: collision with root package name */
    public p8 f41745x;

    /* renamed from: y  reason: collision with root package name */
    public q9 f41746y;

    /* renamed from: z  reason: collision with root package name */
    public byte[] f41747z;

    public zh(int i10, String str, String str2, int i11, Point[] pointArr, ra raVar, ud udVar, ve veVar, yg ygVar, xf xfVar, sb sbVar, o7 o7Var, p8 p8Var, q9 q9Var, byte[] bArr, boolean z10, double d10) {
        this.f41733d = i10;
        this.f41734e = str;
        this.f41747z = bArr;
        this.f41735i = str2;
        this.f41736o = i11;
        this.f41737p = pointArr;
        this.A = z10;
        this.B = d10;
        this.f41738q = raVar;
        this.f41739r = udVar;
        this.f41740s = veVar;
        this.f41741t = ygVar;
        this.f41742u = xfVar;
        this.f41743v = sbVar;
        this.f41744w = o7Var;
        this.f41745x = p8Var;
        this.f41746y = q9Var;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f41733d);
        jf.c.s(parcel, 3, this.f41734e, false);
        jf.c.s(parcel, 4, this.f41735i, false);
        jf.c.l(parcel, 5, this.f41736o);
        jf.c.v(parcel, 6, this.f41737p, i10, false);
        jf.c.q(parcel, 7, this.f41738q, i10, false);
        jf.c.q(parcel, 8, this.f41739r, i10, false);
        jf.c.q(parcel, 9, this.f41740s, i10, false);
        jf.c.q(parcel, 10, this.f41741t, i10, false);
        jf.c.q(parcel, 11, this.f41742u, i10, false);
        jf.c.q(parcel, 12, this.f41743v, i10, false);
        jf.c.q(parcel, 13, this.f41744w, i10, false);
        jf.c.q(parcel, 14, this.f41745x, i10, false);
        jf.c.q(parcel, 15, this.f41746y, i10, false);
        jf.c.f(parcel, 16, this.f41747z, false);
        jf.c.c(parcel, 17, this.A);
        jf.c.h(parcel, 18, this.B);
        jf.c.b(parcel, a10);
    }
}
