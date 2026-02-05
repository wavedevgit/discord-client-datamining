package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e4 extends hf.a {
    public static final Parcelable.Creator<e4> CREATOR = new f5();

    /* renamed from: d  reason: collision with root package name */
    public final int f42809d;

    /* renamed from: e  reason: collision with root package name */
    public final int f42810e;

    /* renamed from: i  reason: collision with root package name */
    public final float f42811i;

    /* renamed from: o  reason: collision with root package name */
    public final float f42812o;

    /* renamed from: p  reason: collision with root package name */
    public final float f42813p;

    /* renamed from: q  reason: collision with root package name */
    public final float f42814q;

    /* renamed from: r  reason: collision with root package name */
    public final float f42815r;

    /* renamed from: s  reason: collision with root package name */
    public final float f42816s;

    /* renamed from: t  reason: collision with root package name */
    public final float f42817t;

    /* renamed from: u  reason: collision with root package name */
    public final mc[] f42818u;

    /* renamed from: v  reason: collision with root package name */
    public final float f42819v;

    /* renamed from: w  reason: collision with root package name */
    public final float f42820w;

    /* renamed from: x  reason: collision with root package name */
    public final float f42821x;

    /* renamed from: y  reason: collision with root package name */
    public final c2[] f42822y;

    /* renamed from: z  reason: collision with root package name */
    public final float f42823z;

    public e4(int i10, int i11, float f10, float f11, float f12, float f13, float f14, float f15, float f16, mc[] mcVarArr, float f17, float f18, float f19, c2[] c2VarArr, float f20) {
        this.f42809d = i10;
        this.f42810e = i11;
        this.f42811i = f10;
        this.f42812o = f11;
        this.f42813p = f12;
        this.f42814q = f13;
        this.f42815r = f14;
        this.f42816s = f15;
        this.f42817t = f16;
        this.f42818u = mcVarArr;
        this.f42819v = f17;
        this.f42820w = f18;
        this.f42821x = f19;
        this.f42822y = c2VarArr;
        this.f42823z = f20;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f42809d);
        hf.c.l(parcel, 2, this.f42810e);
        hf.c.j(parcel, 3, this.f42811i);
        hf.c.j(parcel, 4, this.f42812o);
        hf.c.j(parcel, 5, this.f42813p);
        hf.c.j(parcel, 6, this.f42814q);
        hf.c.j(parcel, 7, this.f42815r);
        hf.c.j(parcel, 8, this.f42816s);
        hf.c.v(parcel, 9, this.f42818u, i10, false);
        hf.c.j(parcel, 10, this.f42819v);
        hf.c.j(parcel, 11, this.f42820w);
        hf.c.j(parcel, 12, this.f42821x);
        hf.c.v(parcel, 13, this.f42822y, i10, false);
        hf.c.j(parcel, 14, this.f42817t);
        hf.c.j(parcel, 15, this.f42823z);
        hf.c.b(parcel, a10);
    }
}
