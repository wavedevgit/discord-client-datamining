package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e4 extends jf.a {
    public static final Parcelable.Creator<e4> CREATOR = new f5();

    /* renamed from: d  reason: collision with root package name */
    public final int f45713d;

    /* renamed from: e  reason: collision with root package name */
    public final int f45714e;

    /* renamed from: i  reason: collision with root package name */
    public final float f45715i;

    /* renamed from: o  reason: collision with root package name */
    public final float f45716o;

    /* renamed from: p  reason: collision with root package name */
    public final float f45717p;

    /* renamed from: q  reason: collision with root package name */
    public final float f45718q;

    /* renamed from: r  reason: collision with root package name */
    public final float f45719r;

    /* renamed from: s  reason: collision with root package name */
    public final float f45720s;

    /* renamed from: t  reason: collision with root package name */
    public final float f45721t;

    /* renamed from: u  reason: collision with root package name */
    public final mc[] f45722u;

    /* renamed from: v  reason: collision with root package name */
    public final float f45723v;

    /* renamed from: w  reason: collision with root package name */
    public final float f45724w;

    /* renamed from: x  reason: collision with root package name */
    public final float f45725x;

    /* renamed from: y  reason: collision with root package name */
    public final c2[] f45726y;

    /* renamed from: z  reason: collision with root package name */
    public final float f45727z;

    public e4(int i10, int i11, float f10, float f11, float f12, float f13, float f14, float f15, float f16, mc[] mcVarArr, float f17, float f18, float f19, c2[] c2VarArr, float f20) {
        this.f45713d = i10;
        this.f45714e = i11;
        this.f45715i = f10;
        this.f45716o = f11;
        this.f45717p = f12;
        this.f45718q = f13;
        this.f45719r = f14;
        this.f45720s = f15;
        this.f45721t = f16;
        this.f45722u = mcVarArr;
        this.f45723v = f17;
        this.f45724w = f18;
        this.f45725x = f19;
        this.f45726y = c2VarArr;
        this.f45727z = f20;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f45713d);
        jf.c.l(parcel, 2, this.f45714e);
        jf.c.j(parcel, 3, this.f45715i);
        jf.c.j(parcel, 4, this.f45716o);
        jf.c.j(parcel, 5, this.f45717p);
        jf.c.j(parcel, 6, this.f45718q);
        jf.c.j(parcel, 7, this.f45719r);
        jf.c.j(parcel, 8, this.f45720s);
        jf.c.v(parcel, 9, this.f45722u, i10, false);
        jf.c.j(parcel, 10, this.f45723v);
        jf.c.j(parcel, 11, this.f45724w);
        jf.c.j(parcel, 12, this.f45725x);
        jf.c.v(parcel, 13, this.f45726y, i10, false);
        jf.c.j(parcel, 14, this.f45721t);
        jf.c.j(parcel, 15, this.f45727z);
        jf.c.b(parcel, a10);
    }
}
