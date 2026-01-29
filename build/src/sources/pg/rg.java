package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rg extends hf.a {
    public static final Parcelable.Creator<rg> CREATOR = new sh();

    /* renamed from: d  reason: collision with root package name */
    public final mc[] f45684d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f45685e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f45686i;

    /* renamed from: o  reason: collision with root package name */
    public final String f45687o;

    /* renamed from: p  reason: collision with root package name */
    public final float f45688p;

    /* renamed from: q  reason: collision with root package name */
    public final String f45689q;

    /* renamed from: r  reason: collision with root package name */
    public final boolean f45690r;

    public rg(mc[] mcVarArr, e4 e4Var, e4 e4Var2, String str, float f10, String str2, boolean z10) {
        this.f45684d = mcVarArr;
        this.f45685e = e4Var;
        this.f45686i = e4Var2;
        this.f45687o = str;
        this.f45688p = f10;
        this.f45689q = str2;
        this.f45690r = z10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        mc[] mcVarArr = this.f45684d;
        int a10 = hf.c.a(parcel);
        hf.c.v(parcel, 2, mcVarArr, i10, false);
        hf.c.q(parcel, 3, this.f45685e, i10, false);
        hf.c.q(parcel, 4, this.f45686i, i10, false);
        hf.c.s(parcel, 5, this.f45687o, false);
        hf.c.j(parcel, 6, this.f45688p);
        hf.c.s(parcel, 7, this.f45689q, false);
        hf.c.c(parcel, 8, this.f45690r);
        hf.c.b(parcel, a10);
    }
}
