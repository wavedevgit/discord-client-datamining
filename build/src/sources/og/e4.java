package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e4 extends hf.a {
    public static final Parcelable.Creator<e4> CREATOR = new f5();

    /* renamed from: d  reason: collision with root package name */
    public final int f42975d;

    /* renamed from: e  reason: collision with root package name */
    public final int f42976e;

    /* renamed from: i  reason: collision with root package name */
    public final float f42977i;

    /* renamed from: o  reason: collision with root package name */
    public final float f42978o;

    /* renamed from: p  reason: collision with root package name */
    public final float f42979p;

    /* renamed from: q  reason: collision with root package name */
    public final float f42980q;

    /* renamed from: r  reason: collision with root package name */
    public final float f42981r;

    /* renamed from: s  reason: collision with root package name */
    public final float f42982s;

    /* renamed from: t  reason: collision with root package name */
    public final float f42983t;

    /* renamed from: u  reason: collision with root package name */
    public final mc[] f42984u;

    /* renamed from: v  reason: collision with root package name */
    public final float f42985v;

    /* renamed from: w  reason: collision with root package name */
    public final float f42986w;

    /* renamed from: x  reason: collision with root package name */
    public final float f42987x;

    /* renamed from: y  reason: collision with root package name */
    public final c2[] f42988y;

    /* renamed from: z  reason: collision with root package name */
    public final float f42989z;

    public e4(int i10, int i11, float f10, float f11, float f12, float f13, float f14, float f15, float f16, mc[] mcVarArr, float f17, float f18, float f19, c2[] c2VarArr, float f20) {
        this.f42975d = i10;
        this.f42976e = i11;
        this.f42977i = f10;
        this.f42978o = f11;
        this.f42979p = f12;
        this.f42980q = f13;
        this.f42981r = f14;
        this.f42982s = f15;
        this.f42983t = f16;
        this.f42984u = mcVarArr;
        this.f42985v = f17;
        this.f42986w = f18;
        this.f42987x = f19;
        this.f42988y = c2VarArr;
        this.f42989z = f20;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f42975d);
        hf.c.l(parcel, 2, this.f42976e);
        hf.c.j(parcel, 3, this.f42977i);
        hf.c.j(parcel, 4, this.f42978o);
        hf.c.j(parcel, 5, this.f42979p);
        hf.c.j(parcel, 6, this.f42980q);
        hf.c.j(parcel, 7, this.f42981r);
        hf.c.j(parcel, 8, this.f42982s);
        hf.c.v(parcel, 9, this.f42984u, i10, false);
        hf.c.j(parcel, 10, this.f42985v);
        hf.c.j(parcel, 11, this.f42986w);
        hf.c.j(parcel, 12, this.f42987x);
        hf.c.v(parcel, 13, this.f42988y, i10, false);
        hf.c.j(parcel, 14, this.f42983t);
        hf.c.j(parcel, 15, this.f42989z);
        hf.c.b(parcel, a10);
    }
}
