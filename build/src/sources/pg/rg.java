package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rg extends hf.a {
    public static final Parcelable.Creator<rg> CREATOR = new sh();

    /* renamed from: d  reason: collision with root package name */
    public final mc[] f45662d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f45663e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f45664i;

    /* renamed from: o  reason: collision with root package name */
    public final String f45665o;

    /* renamed from: p  reason: collision with root package name */
    public final float f45666p;

    /* renamed from: q  reason: collision with root package name */
    public final String f45667q;

    /* renamed from: r  reason: collision with root package name */
    public final boolean f45668r;

    public rg(mc[] mcVarArr, e4 e4Var, e4 e4Var2, String str, float f10, String str2, boolean z10) {
        this.f45662d = mcVarArr;
        this.f45663e = e4Var;
        this.f45664i = e4Var2;
        this.f45665o = str;
        this.f45666p = f10;
        this.f45667q = str2;
        this.f45668r = z10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        mc[] mcVarArr = this.f45662d;
        int a10 = hf.c.a(parcel);
        hf.c.v(parcel, 2, mcVarArr, i10, false);
        hf.c.q(parcel, 3, this.f45663e, i10, false);
        hf.c.q(parcel, 4, this.f45664i, i10, false);
        hf.c.s(parcel, 5, this.f45665o, false);
        hf.c.j(parcel, 6, this.f45666p);
        hf.c.s(parcel, 7, this.f45667q, false);
        hf.c.c(parcel, 8, this.f45668r);
        hf.c.b(parcel, a10);
    }
}
