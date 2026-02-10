package rg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ka extends jf.a {
    public static final Parcelable.Creator<ka> CREATOR = new lb();

    /* renamed from: d  reason: collision with root package name */
    public final rg[] f48481d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f48482e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f48483i;

    /* renamed from: o  reason: collision with root package name */
    public final e4 f48484o;

    /* renamed from: p  reason: collision with root package name */
    public final String f48485p;

    /* renamed from: q  reason: collision with root package name */
    public final float f48486q;

    /* renamed from: r  reason: collision with root package name */
    public final String f48487r;

    /* renamed from: s  reason: collision with root package name */
    public final int f48488s;

    /* renamed from: t  reason: collision with root package name */
    public final boolean f48489t;

    /* renamed from: u  reason: collision with root package name */
    public final int f48490u;

    /* renamed from: v  reason: collision with root package name */
    public final int f48491v;

    public ka(rg[] rgVarArr, e4 e4Var, e4 e4Var2, e4 e4Var3, String str, float f10, String str2, int i10, boolean z10, int i11, int i12) {
        this.f48481d = rgVarArr;
        this.f48482e = e4Var;
        this.f48483i = e4Var2;
        this.f48484o = e4Var3;
        this.f48485p = str;
        this.f48486q = f10;
        this.f48487r = str2;
        this.f48488s = i10;
        this.f48489t = z10;
        this.f48490u = i11;
        this.f48491v = i12;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        rg[] rgVarArr = this.f48481d;
        int a10 = jf.c.a(parcel);
        jf.c.v(parcel, 2, rgVarArr, i10, false);
        jf.c.q(parcel, 3, this.f48482e, i10, false);
        jf.c.q(parcel, 4, this.f48483i, i10, false);
        jf.c.q(parcel, 5, this.f48484o, i10, false);
        jf.c.s(parcel, 6, this.f48485p, false);
        jf.c.j(parcel, 7, this.f48486q);
        jf.c.s(parcel, 8, this.f48487r, false);
        jf.c.l(parcel, 9, this.f48488s);
        jf.c.c(parcel, 10, this.f48489t);
        jf.c.l(parcel, 11, this.f48490u);
        jf.c.l(parcel, 12, this.f48491v);
        jf.c.b(parcel, a10);
    }
}
