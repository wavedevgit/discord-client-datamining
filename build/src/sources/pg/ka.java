package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ka extends hf.a {
    public static final Parcelable.Creator<ka> CREATOR = new lb();

    /* renamed from: d  reason: collision with root package name */
    public final rg[] f45485d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f45486e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f45487i;

    /* renamed from: o  reason: collision with root package name */
    public final e4 f45488o;

    /* renamed from: p  reason: collision with root package name */
    public final String f45489p;

    /* renamed from: q  reason: collision with root package name */
    public final float f45490q;

    /* renamed from: r  reason: collision with root package name */
    public final String f45491r;

    /* renamed from: s  reason: collision with root package name */
    public final int f45492s;

    /* renamed from: t  reason: collision with root package name */
    public final boolean f45493t;

    /* renamed from: u  reason: collision with root package name */
    public final int f45494u;

    /* renamed from: v  reason: collision with root package name */
    public final int f45495v;

    public ka(rg[] rgVarArr, e4 e4Var, e4 e4Var2, e4 e4Var3, String str, float f10, String str2, int i10, boolean z10, int i11, int i12) {
        this.f45485d = rgVarArr;
        this.f45486e = e4Var;
        this.f45487i = e4Var2;
        this.f45488o = e4Var3;
        this.f45489p = str;
        this.f45490q = f10;
        this.f45491r = str2;
        this.f45492s = i10;
        this.f45493t = z10;
        this.f45494u = i11;
        this.f45495v = i12;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        rg[] rgVarArr = this.f45485d;
        int a10 = hf.c.a(parcel);
        hf.c.v(parcel, 2, rgVarArr, i10, false);
        hf.c.q(parcel, 3, this.f45486e, i10, false);
        hf.c.q(parcel, 4, this.f45487i, i10, false);
        hf.c.q(parcel, 5, this.f45488o, i10, false);
        hf.c.s(parcel, 6, this.f45489p, false);
        hf.c.j(parcel, 7, this.f45490q);
        hf.c.s(parcel, 8, this.f45491r, false);
        hf.c.l(parcel, 9, this.f45492s);
        hf.c.c(parcel, 10, this.f45493t);
        hf.c.l(parcel, 11, this.f45494u);
        hf.c.l(parcel, 12, this.f45495v);
        hf.c.b(parcel, a10);
    }
}
