package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e4 extends hf.a {
    public static final Parcelable.Creator<e4> CREATOR = new f5();

    /* renamed from: d  reason: collision with root package name */
    public final int f42959d;

    /* renamed from: e  reason: collision with root package name */
    public final int f42960e;

    /* renamed from: i  reason: collision with root package name */
    public final float f42961i;

    /* renamed from: o  reason: collision with root package name */
    public final float f42962o;

    /* renamed from: p  reason: collision with root package name */
    public final float f42963p;

    /* renamed from: q  reason: collision with root package name */
    public final float f42964q;

    /* renamed from: r  reason: collision with root package name */
    public final float f42965r;

    /* renamed from: s  reason: collision with root package name */
    public final float f42966s;

    /* renamed from: t  reason: collision with root package name */
    public final float f42967t;

    /* renamed from: u  reason: collision with root package name */
    public final mc[] f42968u;

    /* renamed from: v  reason: collision with root package name */
    public final float f42969v;

    /* renamed from: w  reason: collision with root package name */
    public final float f42970w;

    /* renamed from: x  reason: collision with root package name */
    public final float f42971x;

    /* renamed from: y  reason: collision with root package name */
    public final c2[] f42972y;

    /* renamed from: z  reason: collision with root package name */
    public final float f42973z;

    public e4(int i10, int i11, float f10, float f11, float f12, float f13, float f14, float f15, float f16, mc[] mcVarArr, float f17, float f18, float f19, c2[] c2VarArr, float f20) {
        this.f42959d = i10;
        this.f42960e = i11;
        this.f42961i = f10;
        this.f42962o = f11;
        this.f42963p = f12;
        this.f42964q = f13;
        this.f42965r = f14;
        this.f42966s = f15;
        this.f42967t = f16;
        this.f42968u = mcVarArr;
        this.f42969v = f17;
        this.f42970w = f18;
        this.f42971x = f19;
        this.f42972y = c2VarArr;
        this.f42973z = f20;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f42959d);
        hf.c.l(parcel, 2, this.f42960e);
        hf.c.j(parcel, 3, this.f42961i);
        hf.c.j(parcel, 4, this.f42962o);
        hf.c.j(parcel, 5, this.f42963p);
        hf.c.j(parcel, 6, this.f42964q);
        hf.c.j(parcel, 7, this.f42965r);
        hf.c.j(parcel, 8, this.f42966s);
        hf.c.v(parcel, 9, this.f42968u, i10, false);
        hf.c.j(parcel, 10, this.f42969v);
        hf.c.j(parcel, 11, this.f42970w);
        hf.c.j(parcel, 12, this.f42971x);
        hf.c.v(parcel, 13, this.f42972y, i10, false);
        hf.c.j(parcel, 14, this.f42967t);
        hf.c.j(parcel, 15, this.f42973z);
        hf.c.b(parcel, a10);
    }
}
