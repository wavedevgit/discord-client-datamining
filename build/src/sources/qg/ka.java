package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ka extends hf.a {
    public static final Parcelable.Creator<ka> CREATOR = new lb();

    /* renamed from: d  reason: collision with root package name */
    public final rg[] f47315d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f47316e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f47317i;

    /* renamed from: o  reason: collision with root package name */
    public final e4 f47318o;

    /* renamed from: p  reason: collision with root package name */
    public final String f47319p;

    /* renamed from: q  reason: collision with root package name */
    public final float f47320q;

    /* renamed from: r  reason: collision with root package name */
    public final String f47321r;

    /* renamed from: s  reason: collision with root package name */
    public final int f47322s;

    /* renamed from: t  reason: collision with root package name */
    public final boolean f47323t;

    /* renamed from: u  reason: collision with root package name */
    public final int f47324u;

    /* renamed from: v  reason: collision with root package name */
    public final int f47325v;

    public ka(rg[] rgVarArr, e4 e4Var, e4 e4Var2, e4 e4Var3, String str, float f10, String str2, int i10, boolean z10, int i11, int i12) {
        this.f47315d = rgVarArr;
        this.f47316e = e4Var;
        this.f47317i = e4Var2;
        this.f47318o = e4Var3;
        this.f47319p = str;
        this.f47320q = f10;
        this.f47321r = str2;
        this.f47322s = i10;
        this.f47323t = z10;
        this.f47324u = i11;
        this.f47325v = i12;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        rg[] rgVarArr = this.f47315d;
        int a10 = hf.c.a(parcel);
        hf.c.v(parcel, 2, rgVarArr, i10, false);
        hf.c.q(parcel, 3, this.f47316e, i10, false);
        hf.c.q(parcel, 4, this.f47317i, i10, false);
        hf.c.q(parcel, 5, this.f47318o, i10, false);
        hf.c.s(parcel, 6, this.f47319p, false);
        hf.c.j(parcel, 7, this.f47320q);
        hf.c.s(parcel, 8, this.f47321r, false);
        hf.c.l(parcel, 9, this.f47322s);
        hf.c.c(parcel, 10, this.f47323t);
        hf.c.l(parcel, 11, this.f47324u);
        hf.c.l(parcel, 12, this.f47325v);
        hf.c.b(parcel, a10);
    }
}
