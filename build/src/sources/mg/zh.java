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
    public int f38835d;

    /* renamed from: e  reason: collision with root package name */
    public String f38836e;

    /* renamed from: i  reason: collision with root package name */
    public String f38837i;

    /* renamed from: o  reason: collision with root package name */
    public int f38838o;

    /* renamed from: p  reason: collision with root package name */
    public Point[] f38839p;

    /* renamed from: q  reason: collision with root package name */
    public ra f38840q;

    /* renamed from: r  reason: collision with root package name */
    public ud f38841r;

    /* renamed from: s  reason: collision with root package name */
    public ve f38842s;

    /* renamed from: t  reason: collision with root package name */
    public yg f38843t;

    /* renamed from: u  reason: collision with root package name */
    public xf f38844u;

    /* renamed from: v  reason: collision with root package name */
    public sb f38845v;

    /* renamed from: w  reason: collision with root package name */
    public o7 f38846w;

    /* renamed from: x  reason: collision with root package name */
    public p8 f38847x;

    /* renamed from: y  reason: collision with root package name */
    public q9 f38848y;

    /* renamed from: z  reason: collision with root package name */
    public byte[] f38849z;

    public zh(int i10, String str, String str2, int i11, Point[] pointArr, ra raVar, ud udVar, ve veVar, yg ygVar, xf xfVar, sb sbVar, o7 o7Var, p8 p8Var, q9 q9Var, byte[] bArr, boolean z10, double d10) {
        this.f38835d = i10;
        this.f38836e = str;
        this.f38849z = bArr;
        this.f38837i = str2;
        this.f38838o = i11;
        this.f38839p = pointArr;
        this.A = z10;
        this.B = d10;
        this.f38840q = raVar;
        this.f38841r = udVar;
        this.f38842s = veVar;
        this.f38843t = ygVar;
        this.f38844u = xfVar;
        this.f38845v = sbVar;
        this.f38846w = o7Var;
        this.f38847x = p8Var;
        this.f38848y = q9Var;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f38835d);
        hf.c.s(parcel, 3, this.f38836e, false);
        hf.c.s(parcel, 4, this.f38837i, false);
        hf.c.l(parcel, 5, this.f38838o);
        hf.c.v(parcel, 6, this.f38839p, i10, false);
        hf.c.q(parcel, 7, this.f38840q, i10, false);
        hf.c.q(parcel, 8, this.f38841r, i10, false);
        hf.c.q(parcel, 9, this.f38842s, i10, false);
        hf.c.q(parcel, 10, this.f38843t, i10, false);
        hf.c.q(parcel, 11, this.f38844u, i10, false);
        hf.c.q(parcel, 12, this.f38845v, i10, false);
        hf.c.q(parcel, 13, this.f38846w, i10, false);
        hf.c.q(parcel, 14, this.f38847x, i10, false);
        hf.c.q(parcel, 15, this.f38848y, i10, false);
        hf.c.f(parcel, 16, this.f38849z, false);
        hf.c.c(parcel, 17, this.A);
        hf.c.h(parcel, 18, this.B);
        hf.c.b(parcel, a10);
    }
}
