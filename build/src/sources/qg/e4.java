package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e4 extends jf.a {
    public static final Parcelable.Creator<e4> CREATOR = new f5();

    /* renamed from: d  reason: collision with root package name */
    public final int f44950d;

    /* renamed from: e  reason: collision with root package name */
    public final int f44951e;

    /* renamed from: i  reason: collision with root package name */
    public final float f44952i;

    /* renamed from: o  reason: collision with root package name */
    public final float f44953o;

    /* renamed from: p  reason: collision with root package name */
    public final float f44954p;

    /* renamed from: q  reason: collision with root package name */
    public final float f44955q;

    /* renamed from: r  reason: collision with root package name */
    public final float f44956r;

    /* renamed from: s  reason: collision with root package name */
    public final float f44957s;

    /* renamed from: t  reason: collision with root package name */
    public final float f44958t;

    /* renamed from: u  reason: collision with root package name */
    public final mc[] f44959u;

    /* renamed from: v  reason: collision with root package name */
    public final float f44960v;

    /* renamed from: w  reason: collision with root package name */
    public final float f44961w;

    /* renamed from: x  reason: collision with root package name */
    public final float f44962x;

    /* renamed from: y  reason: collision with root package name */
    public final c2[] f44963y;

    /* renamed from: z  reason: collision with root package name */
    public final float f44964z;

    public e4(int i10, int i11, float f10, float f11, float f12, float f13, float f14, float f15, float f16, mc[] mcVarArr, float f17, float f18, float f19, c2[] c2VarArr, float f20) {
        this.f44950d = i10;
        this.f44951e = i11;
        this.f44952i = f10;
        this.f44953o = f11;
        this.f44954p = f12;
        this.f44955q = f13;
        this.f44956r = f14;
        this.f44957s = f15;
        this.f44958t = f16;
        this.f44959u = mcVarArr;
        this.f44960v = f17;
        this.f44961w = f18;
        this.f44962x = f19;
        this.f44963y = c2VarArr;
        this.f44964z = f20;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f44950d);
        jf.c.l(parcel, 2, this.f44951e);
        jf.c.j(parcel, 3, this.f44952i);
        jf.c.j(parcel, 4, this.f44953o);
        jf.c.j(parcel, 5, this.f44954p);
        jf.c.j(parcel, 6, this.f44955q);
        jf.c.j(parcel, 7, this.f44956r);
        jf.c.j(parcel, 8, this.f44957s);
        jf.c.v(parcel, 9, this.f44959u, i10, false);
        jf.c.j(parcel, 10, this.f44960v);
        jf.c.j(parcel, 11, this.f44961w);
        jf.c.j(parcel, 12, this.f44962x);
        jf.c.v(parcel, 13, this.f44963y, i10, false);
        jf.c.j(parcel, 14, this.f44958t);
        jf.c.j(parcel, 15, this.f44964z);
        jf.c.b(parcel, a10);
    }
}
