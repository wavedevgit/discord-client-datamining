package rg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rg extends jf.a {
    public static final Parcelable.Creator<rg> CREATOR = new sh();

    /* renamed from: d  reason: collision with root package name */
    public final mc[] f47113d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f47114e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f47115i;

    /* renamed from: o  reason: collision with root package name */
    public final String f47116o;

    /* renamed from: p  reason: collision with root package name */
    public final float f47117p;

    /* renamed from: q  reason: collision with root package name */
    public final String f47118q;

    /* renamed from: r  reason: collision with root package name */
    public final boolean f47119r;

    public rg(mc[] mcVarArr, e4 e4Var, e4 e4Var2, String str, float f10, String str2, boolean z10) {
        this.f47113d = mcVarArr;
        this.f47114e = e4Var;
        this.f47115i = e4Var2;
        this.f47116o = str;
        this.f47117p = f10;
        this.f47118q = str2;
        this.f47119r = z10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        mc[] mcVarArr = this.f47113d;
        int a10 = jf.c.a(parcel);
        jf.c.v(parcel, 2, mcVarArr, i10, false);
        jf.c.q(parcel, 3, this.f47114e, i10, false);
        jf.c.q(parcel, 4, this.f47115i, i10, false);
        jf.c.s(parcel, 5, this.f47116o, false);
        jf.c.j(parcel, 6, this.f47117p);
        jf.c.s(parcel, 7, this.f47118q, false);
        jf.c.c(parcel, 8, this.f47119r);
        jf.c.b(parcel, a10);
    }
}
