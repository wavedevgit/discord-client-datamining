package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rg extends hf.a {
    public static final Parcelable.Creator<rg> CREATOR = new sh();

    /* renamed from: d  reason: collision with root package name */
    public final mc[] f47540d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f47541e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f47542i;

    /* renamed from: o  reason: collision with root package name */
    public final String f47543o;

    /* renamed from: p  reason: collision with root package name */
    public final float f47544p;

    /* renamed from: q  reason: collision with root package name */
    public final String f47545q;

    /* renamed from: r  reason: collision with root package name */
    public final boolean f47546r;

    public rg(mc[] mcVarArr, e4 e4Var, e4 e4Var2, String str, float f10, String str2, boolean z10) {
        this.f47540d = mcVarArr;
        this.f47541e = e4Var;
        this.f47542i = e4Var2;
        this.f47543o = str;
        this.f47544p = f10;
        this.f47545q = str2;
        this.f47546r = z10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        mc[] mcVarArr = this.f47540d;
        int a10 = hf.c.a(parcel);
        hf.c.v(parcel, 2, mcVarArr, i10, false);
        hf.c.q(parcel, 3, this.f47541e, i10, false);
        hf.c.q(parcel, 4, this.f47542i, i10, false);
        hf.c.s(parcel, 5, this.f47543o, false);
        hf.c.j(parcel, 6, this.f47544p);
        hf.c.s(parcel, 7, this.f47545q, false);
        hf.c.c(parcel, 8, this.f47546r);
        hf.c.b(parcel, a10);
    }
}
