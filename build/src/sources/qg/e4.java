package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e4 extends jf.a {
    public static final Parcelable.Creator<e4> CREATOR = new f5();

    /* renamed from: d  reason: collision with root package name */
    public final int f44382d;

    /* renamed from: e  reason: collision with root package name */
    public final int f44383e;

    /* renamed from: i  reason: collision with root package name */
    public final float f44384i;

    /* renamed from: o  reason: collision with root package name */
    public final float f44385o;

    /* renamed from: p  reason: collision with root package name */
    public final float f44386p;

    /* renamed from: q  reason: collision with root package name */
    public final float f44387q;

    /* renamed from: r  reason: collision with root package name */
    public final float f44388r;

    /* renamed from: s  reason: collision with root package name */
    public final float f44389s;

    /* renamed from: t  reason: collision with root package name */
    public final float f44390t;

    /* renamed from: u  reason: collision with root package name */
    public final mc[] f44391u;

    /* renamed from: v  reason: collision with root package name */
    public final float f44392v;

    /* renamed from: w  reason: collision with root package name */
    public final float f44393w;

    /* renamed from: x  reason: collision with root package name */
    public final float f44394x;

    /* renamed from: y  reason: collision with root package name */
    public final c2[] f44395y;

    /* renamed from: z  reason: collision with root package name */
    public final float f44396z;

    public e4(int i10, int i11, float f10, float f11, float f12, float f13, float f14, float f15, float f16, mc[] mcVarArr, float f17, float f18, float f19, c2[] c2VarArr, float f20) {
        this.f44382d = i10;
        this.f44383e = i11;
        this.f44384i = f10;
        this.f44385o = f11;
        this.f44386p = f12;
        this.f44387q = f13;
        this.f44388r = f14;
        this.f44389s = f15;
        this.f44390t = f16;
        this.f44391u = mcVarArr;
        this.f44392v = f17;
        this.f44393w = f18;
        this.f44394x = f19;
        this.f44395y = c2VarArr;
        this.f44396z = f20;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f44382d);
        jf.c.l(parcel, 2, this.f44383e);
        jf.c.j(parcel, 3, this.f44384i);
        jf.c.j(parcel, 4, this.f44385o);
        jf.c.j(parcel, 5, this.f44386p);
        jf.c.j(parcel, 6, this.f44387q);
        jf.c.j(parcel, 7, this.f44388r);
        jf.c.j(parcel, 8, this.f44389s);
        jf.c.v(parcel, 9, this.f44391u, i10, false);
        jf.c.j(parcel, 10, this.f44392v);
        jf.c.j(parcel, 11, this.f44393w);
        jf.c.j(parcel, 12, this.f44394x);
        jf.c.v(parcel, 13, this.f44395y, i10, false);
        jf.c.j(parcel, 14, this.f44390t);
        jf.c.j(parcel, 15, this.f44396z);
        jf.c.b(parcel, a10);
    }
}
