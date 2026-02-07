package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e4 extends hf.a {
    public static final Parcelable.Creator<e4> CREATOR = new f5();

    /* renamed from: d  reason: collision with root package name */
    public final int f44199d;

    /* renamed from: e  reason: collision with root package name */
    public final int f44200e;

    /* renamed from: i  reason: collision with root package name */
    public final float f44201i;

    /* renamed from: o  reason: collision with root package name */
    public final float f44202o;

    /* renamed from: p  reason: collision with root package name */
    public final float f44203p;

    /* renamed from: q  reason: collision with root package name */
    public final float f44204q;

    /* renamed from: r  reason: collision with root package name */
    public final float f44205r;

    /* renamed from: s  reason: collision with root package name */
    public final float f44206s;

    /* renamed from: t  reason: collision with root package name */
    public final float f44207t;

    /* renamed from: u  reason: collision with root package name */
    public final mc[] f44208u;

    /* renamed from: v  reason: collision with root package name */
    public final float f44209v;

    /* renamed from: w  reason: collision with root package name */
    public final float f44210w;

    /* renamed from: x  reason: collision with root package name */
    public final float f44211x;

    /* renamed from: y  reason: collision with root package name */
    public final c2[] f44212y;

    /* renamed from: z  reason: collision with root package name */
    public final float f44213z;

    public e4(int i10, int i11, float f10, float f11, float f12, float f13, float f14, float f15, float f16, mc[] mcVarArr, float f17, float f18, float f19, c2[] c2VarArr, float f20) {
        this.f44199d = i10;
        this.f44200e = i11;
        this.f44201i = f10;
        this.f44202o = f11;
        this.f44203p = f12;
        this.f44204q = f13;
        this.f44205r = f14;
        this.f44206s = f15;
        this.f44207t = f16;
        this.f44208u = mcVarArr;
        this.f44209v = f17;
        this.f44210w = f18;
        this.f44211x = f19;
        this.f44212y = c2VarArr;
        this.f44213z = f20;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f44199d);
        hf.c.l(parcel, 2, this.f44200e);
        hf.c.j(parcel, 3, this.f44201i);
        hf.c.j(parcel, 4, this.f44202o);
        hf.c.j(parcel, 5, this.f44203p);
        hf.c.j(parcel, 6, this.f44204q);
        hf.c.j(parcel, 7, this.f44205r);
        hf.c.j(parcel, 8, this.f44206s);
        hf.c.v(parcel, 9, this.f44208u, i10, false);
        hf.c.j(parcel, 10, this.f44209v);
        hf.c.j(parcel, 11, this.f44210w);
        hf.c.j(parcel, 12, this.f44211x);
        hf.c.v(parcel, 13, this.f44212y, i10, false);
        hf.c.j(parcel, 14, this.f44207t);
        hf.c.j(parcel, 15, this.f44213z);
        hf.c.b(parcel, a10);
    }
}
