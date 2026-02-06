package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e4 extends hf.a {
    public static final Parcelable.Creator<e4> CREATOR = new f5();

    /* renamed from: d  reason: collision with root package name */
    public final int f44151d;

    /* renamed from: e  reason: collision with root package name */
    public final int f44152e;

    /* renamed from: i  reason: collision with root package name */
    public final float f44153i;

    /* renamed from: o  reason: collision with root package name */
    public final float f44154o;

    /* renamed from: p  reason: collision with root package name */
    public final float f44155p;

    /* renamed from: q  reason: collision with root package name */
    public final float f44156q;

    /* renamed from: r  reason: collision with root package name */
    public final float f44157r;

    /* renamed from: s  reason: collision with root package name */
    public final float f44158s;

    /* renamed from: t  reason: collision with root package name */
    public final float f44159t;

    /* renamed from: u  reason: collision with root package name */
    public final mc[] f44160u;

    /* renamed from: v  reason: collision with root package name */
    public final float f44161v;

    /* renamed from: w  reason: collision with root package name */
    public final float f44162w;

    /* renamed from: x  reason: collision with root package name */
    public final float f44163x;

    /* renamed from: y  reason: collision with root package name */
    public final c2[] f44164y;

    /* renamed from: z  reason: collision with root package name */
    public final float f44165z;

    public e4(int i10, int i11, float f10, float f11, float f12, float f13, float f14, float f15, float f16, mc[] mcVarArr, float f17, float f18, float f19, c2[] c2VarArr, float f20) {
        this.f44151d = i10;
        this.f44152e = i11;
        this.f44153i = f10;
        this.f44154o = f11;
        this.f44155p = f12;
        this.f44156q = f13;
        this.f44157r = f14;
        this.f44158s = f15;
        this.f44159t = f16;
        this.f44160u = mcVarArr;
        this.f44161v = f17;
        this.f44162w = f18;
        this.f44163x = f19;
        this.f44164y = c2VarArr;
        this.f44165z = f20;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f44151d);
        hf.c.l(parcel, 2, this.f44152e);
        hf.c.j(parcel, 3, this.f44153i);
        hf.c.j(parcel, 4, this.f44154o);
        hf.c.j(parcel, 5, this.f44155p);
        hf.c.j(parcel, 6, this.f44156q);
        hf.c.j(parcel, 7, this.f44157r);
        hf.c.j(parcel, 8, this.f44158s);
        hf.c.v(parcel, 9, this.f44160u, i10, false);
        hf.c.j(parcel, 10, this.f44161v);
        hf.c.j(parcel, 11, this.f44162w);
        hf.c.j(parcel, 12, this.f44163x);
        hf.c.v(parcel, 13, this.f44164y, i10, false);
        hf.c.j(parcel, 14, this.f44159t);
        hf.c.j(parcel, 15, this.f44165z);
        hf.c.b(parcel, a10);
    }
}
