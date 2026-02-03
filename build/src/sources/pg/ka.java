package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ka extends hf.a {
    public static final Parcelable.Creator<ka> CREATOR = new lb();

    /* renamed from: d  reason: collision with root package name */
    public final rg[] f45555d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f45556e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f45557i;

    /* renamed from: o  reason: collision with root package name */
    public final e4 f45558o;

    /* renamed from: p  reason: collision with root package name */
    public final String f45559p;

    /* renamed from: q  reason: collision with root package name */
    public final float f45560q;

    /* renamed from: r  reason: collision with root package name */
    public final String f45561r;

    /* renamed from: s  reason: collision with root package name */
    public final int f45562s;

    /* renamed from: t  reason: collision with root package name */
    public final boolean f45563t;

    /* renamed from: u  reason: collision with root package name */
    public final int f45564u;

    /* renamed from: v  reason: collision with root package name */
    public final int f45565v;

    public ka(rg[] rgVarArr, e4 e4Var, e4 e4Var2, e4 e4Var3, String str, float f10, String str2, int i10, boolean z10, int i11, int i12) {
        this.f45555d = rgVarArr;
        this.f45556e = e4Var;
        this.f45557i = e4Var2;
        this.f45558o = e4Var3;
        this.f45559p = str;
        this.f45560q = f10;
        this.f45561r = str2;
        this.f45562s = i10;
        this.f45563t = z10;
        this.f45564u = i11;
        this.f45565v = i12;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        rg[] rgVarArr = this.f45555d;
        int a10 = hf.c.a(parcel);
        hf.c.v(parcel, 2, rgVarArr, i10, false);
        hf.c.q(parcel, 3, this.f45556e, i10, false);
        hf.c.q(parcel, 4, this.f45557i, i10, false);
        hf.c.q(parcel, 5, this.f45558o, i10, false);
        hf.c.s(parcel, 6, this.f45559p, false);
        hf.c.j(parcel, 7, this.f45560q);
        hf.c.s(parcel, 8, this.f45561r, false);
        hf.c.l(parcel, 9, this.f45562s);
        hf.c.c(parcel, 10, this.f45563t);
        hf.c.l(parcel, 11, this.f45564u);
        hf.c.l(parcel, 12, this.f45565v);
        hf.c.b(parcel, a10);
    }
}
