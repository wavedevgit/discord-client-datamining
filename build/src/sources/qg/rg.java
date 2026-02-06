package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rg extends hf.a {
    public static final Parcelable.Creator<rg> CREATOR = new sh();

    /* renamed from: d  reason: collision with root package name */
    public final mc[] f47492d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f47493e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f47494i;

    /* renamed from: o  reason: collision with root package name */
    public final String f47495o;

    /* renamed from: p  reason: collision with root package name */
    public final float f47496p;

    /* renamed from: q  reason: collision with root package name */
    public final String f47497q;

    /* renamed from: r  reason: collision with root package name */
    public final boolean f47498r;

    public rg(mc[] mcVarArr, e4 e4Var, e4 e4Var2, String str, float f10, String str2, boolean z10) {
        this.f47492d = mcVarArr;
        this.f47493e = e4Var;
        this.f47494i = e4Var2;
        this.f47495o = str;
        this.f47496p = f10;
        this.f47497q = str2;
        this.f47498r = z10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        mc[] mcVarArr = this.f47492d;
        int a10 = hf.c.a(parcel);
        hf.c.v(parcel, 2, mcVarArr, i10, false);
        hf.c.q(parcel, 3, this.f47493e, i10, false);
        hf.c.q(parcel, 4, this.f47494i, i10, false);
        hf.c.s(parcel, 5, this.f47495o, false);
        hf.c.j(parcel, 6, this.f47496p);
        hf.c.s(parcel, 7, this.f47497q, false);
        hf.c.c(parcel, 8, this.f47498r);
        hf.c.b(parcel, a10);
    }
}
