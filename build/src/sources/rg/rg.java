package rg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rg extends jf.a {
    public static final Parcelable.Creator<rg> CREATOR = new sh();

    /* renamed from: d  reason: collision with root package name */
    public final mc[] f48658d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f48659e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f48660i;

    /* renamed from: o  reason: collision with root package name */
    public final String f48661o;

    /* renamed from: p  reason: collision with root package name */
    public final float f48662p;

    /* renamed from: q  reason: collision with root package name */
    public final String f48663q;

    /* renamed from: r  reason: collision with root package name */
    public final boolean f48664r;

    public rg(mc[] mcVarArr, e4 e4Var, e4 e4Var2, String str, float f10, String str2, boolean z10) {
        this.f48658d = mcVarArr;
        this.f48659e = e4Var;
        this.f48660i = e4Var2;
        this.f48661o = str;
        this.f48662p = f10;
        this.f48663q = str2;
        this.f48664r = z10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        mc[] mcVarArr = this.f48658d;
        int a10 = jf.c.a(parcel);
        jf.c.v(parcel, 2, mcVarArr, i10, false);
        jf.c.q(parcel, 3, this.f48659e, i10, false);
        jf.c.q(parcel, 4, this.f48660i, i10, false);
        jf.c.s(parcel, 5, this.f48661o, false);
        jf.c.j(parcel, 6, this.f48662p);
        jf.c.s(parcel, 7, this.f48663q, false);
        jf.c.c(parcel, 8, this.f48664r);
        jf.c.b(parcel, a10);
    }
}
