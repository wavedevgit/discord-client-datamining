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
    public int f40708d;

    /* renamed from: e  reason: collision with root package name */
    public String f40709e;

    /* renamed from: i  reason: collision with root package name */
    public String f40710i;

    /* renamed from: o  reason: collision with root package name */
    public int f40711o;

    /* renamed from: p  reason: collision with root package name */
    public Point[] f40712p;

    /* renamed from: q  reason: collision with root package name */
    public ra f40713q;

    /* renamed from: r  reason: collision with root package name */
    public ud f40714r;

    /* renamed from: s  reason: collision with root package name */
    public ve f40715s;

    /* renamed from: t  reason: collision with root package name */
    public yg f40716t;

    /* renamed from: u  reason: collision with root package name */
    public xf f40717u;

    /* renamed from: v  reason: collision with root package name */
    public sb f40718v;

    /* renamed from: w  reason: collision with root package name */
    public o7 f40719w;

    /* renamed from: x  reason: collision with root package name */
    public p8 f40720x;

    /* renamed from: y  reason: collision with root package name */
    public q9 f40721y;

    /* renamed from: z  reason: collision with root package name */
    public byte[] f40722z;

    public zh(int i10, String str, String str2, int i11, Point[] pointArr, ra raVar, ud udVar, ve veVar, yg ygVar, xf xfVar, sb sbVar, o7 o7Var, p8 p8Var, q9 q9Var, byte[] bArr, boolean z10, double d10) {
        this.f40708d = i10;
        this.f40709e = str;
        this.f40722z = bArr;
        this.f40710i = str2;
        this.f40711o = i11;
        this.f40712p = pointArr;
        this.A = z10;
        this.B = d10;
        this.f40713q = raVar;
        this.f40714r = udVar;
        this.f40715s = veVar;
        this.f40716t = ygVar;
        this.f40717u = xfVar;
        this.f40718v = sbVar;
        this.f40719w = o7Var;
        this.f40720x = p8Var;
        this.f40721y = q9Var;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f40708d);
        hf.c.s(parcel, 3, this.f40709e, false);
        hf.c.s(parcel, 4, this.f40710i, false);
        hf.c.l(parcel, 5, this.f40711o);
        hf.c.v(parcel, 6, this.f40712p, i10, false);
        hf.c.q(parcel, 7, this.f40713q, i10, false);
        hf.c.q(parcel, 8, this.f40714r, i10, false);
        hf.c.q(parcel, 9, this.f40715s, i10, false);
        hf.c.q(parcel, 10, this.f40716t, i10, false);
        hf.c.q(parcel, 11, this.f40717u, i10, false);
        hf.c.q(parcel, 12, this.f40718v, i10, false);
        hf.c.q(parcel, 13, this.f40719w, i10, false);
        hf.c.q(parcel, 14, this.f40720x, i10, false);
        hf.c.q(parcel, 15, this.f40721y, i10, false);
        hf.c.f(parcel, 16, this.f40722z, false);
        hf.c.c(parcel, 17, this.A);
        hf.c.h(parcel, 18, this.B);
        hf.c.b(parcel, a10);
    }
}
