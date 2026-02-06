package ng;

import android.graphics.Point;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zh extends hf.a {
    public static final Parcelable.Creator<zh> CREATOR = new wi();
    public boolean A;
    public double B;

    /* renamed from: d  reason: collision with root package name */
    public int f40660d;

    /* renamed from: e  reason: collision with root package name */
    public String f40661e;

    /* renamed from: i  reason: collision with root package name */
    public String f40662i;

    /* renamed from: o  reason: collision with root package name */
    public int f40663o;

    /* renamed from: p  reason: collision with root package name */
    public Point[] f40664p;

    /* renamed from: q  reason: collision with root package name */
    public ra f40665q;

    /* renamed from: r  reason: collision with root package name */
    public ud f40666r;

    /* renamed from: s  reason: collision with root package name */
    public ve f40667s;

    /* renamed from: t  reason: collision with root package name */
    public yg f40668t;

    /* renamed from: u  reason: collision with root package name */
    public xf f40669u;

    /* renamed from: v  reason: collision with root package name */
    public sb f40670v;

    /* renamed from: w  reason: collision with root package name */
    public o7 f40671w;

    /* renamed from: x  reason: collision with root package name */
    public p8 f40672x;

    /* renamed from: y  reason: collision with root package name */
    public q9 f40673y;

    /* renamed from: z  reason: collision with root package name */
    public byte[] f40674z;

    public zh(int i10, String str, String str2, int i11, Point[] pointArr, ra raVar, ud udVar, ve veVar, yg ygVar, xf xfVar, sb sbVar, o7 o7Var, p8 p8Var, q9 q9Var, byte[] bArr, boolean z10, double d10) {
        this.f40660d = i10;
        this.f40661e = str;
        this.f40674z = bArr;
        this.f40662i = str2;
        this.f40663o = i11;
        this.f40664p = pointArr;
        this.A = z10;
        this.B = d10;
        this.f40665q = raVar;
        this.f40666r = udVar;
        this.f40667s = veVar;
        this.f40668t = ygVar;
        this.f40669u = xfVar;
        this.f40670v = sbVar;
        this.f40671w = o7Var;
        this.f40672x = p8Var;
        this.f40673y = q9Var;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f40660d);
        hf.c.s(parcel, 3, this.f40661e, false);
        hf.c.s(parcel, 4, this.f40662i, false);
        hf.c.l(parcel, 5, this.f40663o);
        hf.c.v(parcel, 6, this.f40664p, i10, false);
        hf.c.q(parcel, 7, this.f40665q, i10, false);
        hf.c.q(parcel, 8, this.f40666r, i10, false);
        hf.c.q(parcel, 9, this.f40667s, i10, false);
        hf.c.q(parcel, 10, this.f40668t, i10, false);
        hf.c.q(parcel, 11, this.f40669u, i10, false);
        hf.c.q(parcel, 12, this.f40670v, i10, false);
        hf.c.q(parcel, 13, this.f40671w, i10, false);
        hf.c.q(parcel, 14, this.f40672x, i10, false);
        hf.c.q(parcel, 15, this.f40673y, i10, false);
        hf.c.f(parcel, 16, this.f40674z, false);
        hf.c.c(parcel, 17, this.A);
        hf.c.h(parcel, 18, this.B);
        hf.c.b(parcel, a10);
    }
}
