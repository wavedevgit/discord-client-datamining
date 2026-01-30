package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ka extends hf.a {
    public static final Parcelable.Creator<ka> CREATOR = new lb();

    /* renamed from: d  reason: collision with root package name */
    public final rg[] f45523d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f45524e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f45525i;

    /* renamed from: o  reason: collision with root package name */
    public final e4 f45526o;

    /* renamed from: p  reason: collision with root package name */
    public final String f45527p;

    /* renamed from: q  reason: collision with root package name */
    public final float f45528q;

    /* renamed from: r  reason: collision with root package name */
    public final String f45529r;

    /* renamed from: s  reason: collision with root package name */
    public final int f45530s;

    /* renamed from: t  reason: collision with root package name */
    public final boolean f45531t;

    /* renamed from: u  reason: collision with root package name */
    public final int f45532u;

    /* renamed from: v  reason: collision with root package name */
    public final int f45533v;

    public ka(rg[] rgVarArr, e4 e4Var, e4 e4Var2, e4 e4Var3, String str, float f10, String str2, int i10, boolean z10, int i11, int i12) {
        this.f45523d = rgVarArr;
        this.f45524e = e4Var;
        this.f45525i = e4Var2;
        this.f45526o = e4Var3;
        this.f45527p = str;
        this.f45528q = f10;
        this.f45529r = str2;
        this.f45530s = i10;
        this.f45531t = z10;
        this.f45532u = i11;
        this.f45533v = i12;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        rg[] rgVarArr = this.f45523d;
        int a10 = hf.c.a(parcel);
        hf.c.v(parcel, 2, rgVarArr, i10, false);
        hf.c.q(parcel, 3, this.f45524e, i10, false);
        hf.c.q(parcel, 4, this.f45525i, i10, false);
        hf.c.q(parcel, 5, this.f45526o, i10, false);
        hf.c.s(parcel, 6, this.f45527p, false);
        hf.c.j(parcel, 7, this.f45528q);
        hf.c.s(parcel, 8, this.f45529r, false);
        hf.c.l(parcel, 9, this.f45530s);
        hf.c.c(parcel, 10, this.f45531t);
        hf.c.l(parcel, 11, this.f45532u);
        hf.c.l(parcel, 12, this.f45533v);
        hf.c.b(parcel, a10);
    }
}
