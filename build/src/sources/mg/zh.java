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
    public int f38497d;

    /* renamed from: e  reason: collision with root package name */
    public String f38498e;

    /* renamed from: i  reason: collision with root package name */
    public String f38499i;

    /* renamed from: o  reason: collision with root package name */
    public int f38500o;

    /* renamed from: p  reason: collision with root package name */
    public Point[] f38501p;

    /* renamed from: q  reason: collision with root package name */
    public ra f38502q;

    /* renamed from: r  reason: collision with root package name */
    public ud f38503r;

    /* renamed from: s  reason: collision with root package name */
    public ve f38504s;

    /* renamed from: t  reason: collision with root package name */
    public yg f38505t;

    /* renamed from: u  reason: collision with root package name */
    public xf f38506u;

    /* renamed from: v  reason: collision with root package name */
    public sb f38507v;

    /* renamed from: w  reason: collision with root package name */
    public o7 f38508w;

    /* renamed from: x  reason: collision with root package name */
    public p8 f38509x;

    /* renamed from: y  reason: collision with root package name */
    public q9 f38510y;

    /* renamed from: z  reason: collision with root package name */
    public byte[] f38511z;

    public zh(int i10, String str, String str2, int i11, Point[] pointArr, ra raVar, ud udVar, ve veVar, yg ygVar, xf xfVar, sb sbVar, o7 o7Var, p8 p8Var, q9 q9Var, byte[] bArr, boolean z10, double d10) {
        this.f38497d = i10;
        this.f38498e = str;
        this.f38511z = bArr;
        this.f38499i = str2;
        this.f38500o = i11;
        this.f38501p = pointArr;
        this.A = z10;
        this.B = d10;
        this.f38502q = raVar;
        this.f38503r = udVar;
        this.f38504s = veVar;
        this.f38505t = ygVar;
        this.f38506u = xfVar;
        this.f38507v = sbVar;
        this.f38508w = o7Var;
        this.f38509x = p8Var;
        this.f38510y = q9Var;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f38497d);
        hf.c.s(parcel, 3, this.f38498e, false);
        hf.c.s(parcel, 4, this.f38499i, false);
        hf.c.l(parcel, 5, this.f38500o);
        hf.c.v(parcel, 6, this.f38501p, i10, false);
        hf.c.q(parcel, 7, this.f38502q, i10, false);
        hf.c.q(parcel, 8, this.f38503r, i10, false);
        hf.c.q(parcel, 9, this.f38504s, i10, false);
        hf.c.q(parcel, 10, this.f38505t, i10, false);
        hf.c.q(parcel, 11, this.f38506u, i10, false);
        hf.c.q(parcel, 12, this.f38507v, i10, false);
        hf.c.q(parcel, 13, this.f38508w, i10, false);
        hf.c.q(parcel, 14, this.f38509x, i10, false);
        hf.c.q(parcel, 15, this.f38510y, i10, false);
        hf.c.f(parcel, 16, this.f38511z, false);
        hf.c.c(parcel, 17, this.A);
        hf.c.h(parcel, 18, this.B);
        hf.c.b(parcel, a10);
    }
}
