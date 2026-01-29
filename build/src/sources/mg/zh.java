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
    public int f39042d;

    /* renamed from: e  reason: collision with root package name */
    public String f39043e;

    /* renamed from: i  reason: collision with root package name */
    public String f39044i;

    /* renamed from: o  reason: collision with root package name */
    public int f39045o;

    /* renamed from: p  reason: collision with root package name */
    public Point[] f39046p;

    /* renamed from: q  reason: collision with root package name */
    public ra f39047q;

    /* renamed from: r  reason: collision with root package name */
    public ud f39048r;

    /* renamed from: s  reason: collision with root package name */
    public ve f39049s;

    /* renamed from: t  reason: collision with root package name */
    public yg f39050t;

    /* renamed from: u  reason: collision with root package name */
    public xf f39051u;

    /* renamed from: v  reason: collision with root package name */
    public sb f39052v;

    /* renamed from: w  reason: collision with root package name */
    public o7 f39053w;

    /* renamed from: x  reason: collision with root package name */
    public p8 f39054x;

    /* renamed from: y  reason: collision with root package name */
    public q9 f39055y;

    /* renamed from: z  reason: collision with root package name */
    public byte[] f39056z;

    public zh(int i10, String str, String str2, int i11, Point[] pointArr, ra raVar, ud udVar, ve veVar, yg ygVar, xf xfVar, sb sbVar, o7 o7Var, p8 p8Var, q9 q9Var, byte[] bArr, boolean z10, double d10) {
        this.f39042d = i10;
        this.f39043e = str;
        this.f39056z = bArr;
        this.f39044i = str2;
        this.f39045o = i11;
        this.f39046p = pointArr;
        this.A = z10;
        this.B = d10;
        this.f39047q = raVar;
        this.f39048r = udVar;
        this.f39049s = veVar;
        this.f39050t = ygVar;
        this.f39051u = xfVar;
        this.f39052v = sbVar;
        this.f39053w = o7Var;
        this.f39054x = p8Var;
        this.f39055y = q9Var;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f39042d);
        hf.c.s(parcel, 3, this.f39043e, false);
        hf.c.s(parcel, 4, this.f39044i, false);
        hf.c.l(parcel, 5, this.f39045o);
        hf.c.v(parcel, 6, this.f39046p, i10, false);
        hf.c.q(parcel, 7, this.f39047q, i10, false);
        hf.c.q(parcel, 8, this.f39048r, i10, false);
        hf.c.q(parcel, 9, this.f39049s, i10, false);
        hf.c.q(parcel, 10, this.f39050t, i10, false);
        hf.c.q(parcel, 11, this.f39051u, i10, false);
        hf.c.q(parcel, 12, this.f39052v, i10, false);
        hf.c.q(parcel, 13, this.f39053w, i10, false);
        hf.c.q(parcel, 14, this.f39054x, i10, false);
        hf.c.q(parcel, 15, this.f39055y, i10, false);
        hf.c.f(parcel, 16, this.f39056z, false);
        hf.c.c(parcel, 17, this.A);
        hf.c.h(parcel, 18, this.B);
        hf.c.b(parcel, a10);
    }
}
