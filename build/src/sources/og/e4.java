package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e4 extends hf.a {
    public static final Parcelable.Creator<e4> CREATOR = new f5();

    /* renamed from: d  reason: collision with root package name */
    public final int f43103d;

    /* renamed from: e  reason: collision with root package name */
    public final int f43104e;

    /* renamed from: i  reason: collision with root package name */
    public final float f43105i;

    /* renamed from: o  reason: collision with root package name */
    public final float f43106o;

    /* renamed from: p  reason: collision with root package name */
    public final float f43107p;

    /* renamed from: q  reason: collision with root package name */
    public final float f43108q;

    /* renamed from: r  reason: collision with root package name */
    public final float f43109r;

    /* renamed from: s  reason: collision with root package name */
    public final float f43110s;

    /* renamed from: t  reason: collision with root package name */
    public final float f43111t;

    /* renamed from: u  reason: collision with root package name */
    public final mc[] f43112u;

    /* renamed from: v  reason: collision with root package name */
    public final float f43113v;

    /* renamed from: w  reason: collision with root package name */
    public final float f43114w;

    /* renamed from: x  reason: collision with root package name */
    public final float f43115x;

    /* renamed from: y  reason: collision with root package name */
    public final c2[] f43116y;

    /* renamed from: z  reason: collision with root package name */
    public final float f43117z;

    public e4(int i10, int i11, float f10, float f11, float f12, float f13, float f14, float f15, float f16, mc[] mcVarArr, float f17, float f18, float f19, c2[] c2VarArr, float f20) {
        this.f43103d = i10;
        this.f43104e = i11;
        this.f43105i = f10;
        this.f43106o = f11;
        this.f43107p = f12;
        this.f43108q = f13;
        this.f43109r = f14;
        this.f43110s = f15;
        this.f43111t = f16;
        this.f43112u = mcVarArr;
        this.f43113v = f17;
        this.f43114w = f18;
        this.f43115x = f19;
        this.f43116y = c2VarArr;
        this.f43117z = f20;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f43103d);
        hf.c.l(parcel, 2, this.f43104e);
        hf.c.j(parcel, 3, this.f43105i);
        hf.c.j(parcel, 4, this.f43106o);
        hf.c.j(parcel, 5, this.f43107p);
        hf.c.j(parcel, 6, this.f43108q);
        hf.c.j(parcel, 7, this.f43109r);
        hf.c.j(parcel, 8, this.f43110s);
        hf.c.v(parcel, 9, this.f43112u, i10, false);
        hf.c.j(parcel, 10, this.f43113v);
        hf.c.j(parcel, 11, this.f43114w);
        hf.c.j(parcel, 12, this.f43115x);
        hf.c.v(parcel, 13, this.f43116y, i10, false);
        hf.c.j(parcel, 14, this.f43111t);
        hf.c.j(parcel, 15, this.f43117z);
        hf.c.b(parcel, a10);
    }
}
