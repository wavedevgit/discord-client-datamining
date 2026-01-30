package mg;

import android.graphics.Point;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zh extends hf.a {
    public static final Parcelable.Creator<zh> CREATOR = new wi();
    public boolean A;
    public double B;

    /* renamed from: d  reason: collision with root package name */
    public int f39058d;

    /* renamed from: e  reason: collision with root package name */
    public String f39059e;

    /* renamed from: i  reason: collision with root package name */
    public String f39060i;

    /* renamed from: o  reason: collision with root package name */
    public int f39061o;

    /* renamed from: p  reason: collision with root package name */
    public Point[] f39062p;

    /* renamed from: q  reason: collision with root package name */
    public ra f39063q;

    /* renamed from: r  reason: collision with root package name */
    public ud f39064r;

    /* renamed from: s  reason: collision with root package name */
    public ve f39065s;

    /* renamed from: t  reason: collision with root package name */
    public yg f39066t;

    /* renamed from: u  reason: collision with root package name */
    public xf f39067u;

    /* renamed from: v  reason: collision with root package name */
    public sb f39068v;

    /* renamed from: w  reason: collision with root package name */
    public o7 f39069w;

    /* renamed from: x  reason: collision with root package name */
    public p8 f39070x;

    /* renamed from: y  reason: collision with root package name */
    public q9 f39071y;

    /* renamed from: z  reason: collision with root package name */
    public byte[] f39072z;

    public zh(int i10, String str, String str2, int i11, Point[] pointArr, ra raVar, ud udVar, ve veVar, yg ygVar, xf xfVar, sb sbVar, o7 o7Var, p8 p8Var, q9 q9Var, byte[] bArr, boolean z10, double d10) {
        this.f39058d = i10;
        this.f39059e = str;
        this.f39072z = bArr;
        this.f39060i = str2;
        this.f39061o = i11;
        this.f39062p = pointArr;
        this.A = z10;
        this.B = d10;
        this.f39063q = raVar;
        this.f39064r = udVar;
        this.f39065s = veVar;
        this.f39066t = ygVar;
        this.f39067u = xfVar;
        this.f39068v = sbVar;
        this.f39069w = o7Var;
        this.f39070x = p8Var;
        this.f39071y = q9Var;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f39058d);
        hf.c.s(parcel, 3, this.f39059e, false);
        hf.c.s(parcel, 4, this.f39060i, false);
        hf.c.l(parcel, 5, this.f39061o);
        hf.c.v(parcel, 6, this.f39062p, i10, false);
        hf.c.q(parcel, 7, this.f39063q, i10, false);
        hf.c.q(parcel, 8, this.f39064r, i10, false);
        hf.c.q(parcel, 9, this.f39065s, i10, false);
        hf.c.q(parcel, 10, this.f39066t, i10, false);
        hf.c.q(parcel, 11, this.f39067u, i10, false);
        hf.c.q(parcel, 12, this.f39068v, i10, false);
        hf.c.q(parcel, 13, this.f39069w, i10, false);
        hf.c.q(parcel, 14, this.f39070x, i10, false);
        hf.c.q(parcel, 15, this.f39071y, i10, false);
        hf.c.f(parcel, 16, this.f39072z, false);
        hf.c.c(parcel, 17, this.A);
        hf.c.h(parcel, 18, this.B);
        hf.c.b(parcel, a10);
    }
}
