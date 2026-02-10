package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e4 extends jf.a {
    public static final Parcelable.Creator<e4> CREATOR = new f5();

    /* renamed from: d  reason: collision with root package name */
    public final int f44381d;

    /* renamed from: e  reason: collision with root package name */
    public final int f44382e;

    /* renamed from: i  reason: collision with root package name */
    public final float f44383i;

    /* renamed from: o  reason: collision with root package name */
    public final float f44384o;

    /* renamed from: p  reason: collision with root package name */
    public final float f44385p;

    /* renamed from: q  reason: collision with root package name */
    public final float f44386q;

    /* renamed from: r  reason: collision with root package name */
    public final float f44387r;

    /* renamed from: s  reason: collision with root package name */
    public final float f44388s;

    /* renamed from: t  reason: collision with root package name */
    public final float f44389t;

    /* renamed from: u  reason: collision with root package name */
    public final mc[] f44390u;

    /* renamed from: v  reason: collision with root package name */
    public final float f44391v;

    /* renamed from: w  reason: collision with root package name */
    public final float f44392w;

    /* renamed from: x  reason: collision with root package name */
    public final float f44393x;

    /* renamed from: y  reason: collision with root package name */
    public final c2[] f44394y;

    /* renamed from: z  reason: collision with root package name */
    public final float f44395z;

    public e4(int i10, int i11, float f10, float f11, float f12, float f13, float f14, float f15, float f16, mc[] mcVarArr, float f17, float f18, float f19, c2[] c2VarArr, float f20) {
        this.f44381d = i10;
        this.f44382e = i11;
        this.f44383i = f10;
        this.f44384o = f11;
        this.f44385p = f12;
        this.f44386q = f13;
        this.f44387r = f14;
        this.f44388s = f15;
        this.f44389t = f16;
        this.f44390u = mcVarArr;
        this.f44391v = f17;
        this.f44392w = f18;
        this.f44393x = f19;
        this.f44394y = c2VarArr;
        this.f44395z = f20;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f44381d);
        jf.c.l(parcel, 2, this.f44382e);
        jf.c.j(parcel, 3, this.f44383i);
        jf.c.j(parcel, 4, this.f44384o);
        jf.c.j(parcel, 5, this.f44385p);
        jf.c.j(parcel, 6, this.f44386q);
        jf.c.j(parcel, 7, this.f44387r);
        jf.c.j(parcel, 8, this.f44388s);
        jf.c.v(parcel, 9, this.f44390u, i10, false);
        jf.c.j(parcel, 10, this.f44391v);
        jf.c.j(parcel, 11, this.f44392w);
        jf.c.j(parcel, 12, this.f44393x);
        jf.c.v(parcel, 13, this.f44394y, i10, false);
        jf.c.j(parcel, 14, this.f44389t);
        jf.c.j(parcel, 15, this.f44395z);
        jf.c.b(parcel, a10);
    }
}
