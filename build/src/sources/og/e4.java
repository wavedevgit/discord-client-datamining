package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e4 extends hf.a {
    public static final Parcelable.Creator<e4> CREATOR = new f5();

    /* renamed from: d  reason: collision with root package name */
    public final int f42903d;

    /* renamed from: e  reason: collision with root package name */
    public final int f42904e;

    /* renamed from: i  reason: collision with root package name */
    public final float f42905i;

    /* renamed from: o  reason: collision with root package name */
    public final float f42906o;

    /* renamed from: p  reason: collision with root package name */
    public final float f42907p;

    /* renamed from: q  reason: collision with root package name */
    public final float f42908q;

    /* renamed from: r  reason: collision with root package name */
    public final float f42909r;

    /* renamed from: s  reason: collision with root package name */
    public final float f42910s;

    /* renamed from: t  reason: collision with root package name */
    public final float f42911t;

    /* renamed from: u  reason: collision with root package name */
    public final mc[] f42912u;

    /* renamed from: v  reason: collision with root package name */
    public final float f42913v;

    /* renamed from: w  reason: collision with root package name */
    public final float f42914w;

    /* renamed from: x  reason: collision with root package name */
    public final float f42915x;

    /* renamed from: y  reason: collision with root package name */
    public final c2[] f42916y;

    /* renamed from: z  reason: collision with root package name */
    public final float f42917z;

    public e4(int i10, int i11, float f10, float f11, float f12, float f13, float f14, float f15, float f16, mc[] mcVarArr, float f17, float f18, float f19, c2[] c2VarArr, float f20) {
        this.f42903d = i10;
        this.f42904e = i11;
        this.f42905i = f10;
        this.f42906o = f11;
        this.f42907p = f12;
        this.f42908q = f13;
        this.f42909r = f14;
        this.f42910s = f15;
        this.f42911t = f16;
        this.f42912u = mcVarArr;
        this.f42913v = f17;
        this.f42914w = f18;
        this.f42915x = f19;
        this.f42916y = c2VarArr;
        this.f42917z = f20;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f42903d);
        hf.c.l(parcel, 2, this.f42904e);
        hf.c.j(parcel, 3, this.f42905i);
        hf.c.j(parcel, 4, this.f42906o);
        hf.c.j(parcel, 5, this.f42907p);
        hf.c.j(parcel, 6, this.f42908q);
        hf.c.j(parcel, 7, this.f42909r);
        hf.c.j(parcel, 8, this.f42910s);
        hf.c.v(parcel, 9, this.f42912u, i10, false);
        hf.c.j(parcel, 10, this.f42913v);
        hf.c.j(parcel, 11, this.f42914w);
        hf.c.j(parcel, 12, this.f42915x);
        hf.c.v(parcel, 13, this.f42916y, i10, false);
        hf.c.j(parcel, 14, this.f42911t);
        hf.c.j(parcel, 15, this.f42917z);
        hf.c.b(parcel, a10);
    }
}
