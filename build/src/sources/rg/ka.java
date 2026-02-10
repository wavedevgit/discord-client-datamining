package rg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ka extends jf.a {
    public static final Parcelable.Creator<ka> CREATOR = new lb();

    /* renamed from: d  reason: collision with root package name */
    public final rg[] f46935d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f46936e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f46937i;

    /* renamed from: o  reason: collision with root package name */
    public final e4 f46938o;

    /* renamed from: p  reason: collision with root package name */
    public final String f46939p;

    /* renamed from: q  reason: collision with root package name */
    public final float f46940q;

    /* renamed from: r  reason: collision with root package name */
    public final String f46941r;

    /* renamed from: s  reason: collision with root package name */
    public final int f46942s;

    /* renamed from: t  reason: collision with root package name */
    public final boolean f46943t;

    /* renamed from: u  reason: collision with root package name */
    public final int f46944u;

    /* renamed from: v  reason: collision with root package name */
    public final int f46945v;

    public ka(rg[] rgVarArr, e4 e4Var, e4 e4Var2, e4 e4Var3, String str, float f10, String str2, int i10, boolean z10, int i11, int i12) {
        this.f46935d = rgVarArr;
        this.f46936e = e4Var;
        this.f46937i = e4Var2;
        this.f46938o = e4Var3;
        this.f46939p = str;
        this.f46940q = f10;
        this.f46941r = str2;
        this.f46942s = i10;
        this.f46943t = z10;
        this.f46944u = i11;
        this.f46945v = i12;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        rg[] rgVarArr = this.f46935d;
        int a10 = jf.c.a(parcel);
        jf.c.v(parcel, 2, rgVarArr, i10, false);
        jf.c.q(parcel, 3, this.f46936e, i10, false);
        jf.c.q(parcel, 4, this.f46937i, i10, false);
        jf.c.q(parcel, 5, this.f46938o, i10, false);
        jf.c.s(parcel, 6, this.f46939p, false);
        jf.c.j(parcel, 7, this.f46940q);
        jf.c.s(parcel, 8, this.f46941r, false);
        jf.c.l(parcel, 9, this.f46942s);
        jf.c.c(parcel, 10, this.f46943t);
        jf.c.l(parcel, 11, this.f46944u);
        jf.c.l(parcel, 12, this.f46945v);
        jf.c.b(parcel, a10);
    }
}
