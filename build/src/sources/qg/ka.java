package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ka extends hf.a {
    public static final Parcelable.Creator<ka> CREATOR = new lb();

    /* renamed from: d  reason: collision with root package name */
    public final rg[] f47363d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f47364e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f47365i;

    /* renamed from: o  reason: collision with root package name */
    public final e4 f47366o;

    /* renamed from: p  reason: collision with root package name */
    public final String f47367p;

    /* renamed from: q  reason: collision with root package name */
    public final float f47368q;

    /* renamed from: r  reason: collision with root package name */
    public final String f47369r;

    /* renamed from: s  reason: collision with root package name */
    public final int f47370s;

    /* renamed from: t  reason: collision with root package name */
    public final boolean f47371t;

    /* renamed from: u  reason: collision with root package name */
    public final int f47372u;

    /* renamed from: v  reason: collision with root package name */
    public final int f47373v;

    public ka(rg[] rgVarArr, e4 e4Var, e4 e4Var2, e4 e4Var3, String str, float f10, String str2, int i10, boolean z10, int i11, int i12) {
        this.f47363d = rgVarArr;
        this.f47364e = e4Var;
        this.f47365i = e4Var2;
        this.f47366o = e4Var3;
        this.f47367p = str;
        this.f47368q = f10;
        this.f47369r = str2;
        this.f47370s = i10;
        this.f47371t = z10;
        this.f47372u = i11;
        this.f47373v = i12;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        rg[] rgVarArr = this.f47363d;
        int a10 = hf.c.a(parcel);
        hf.c.v(parcel, 2, rgVarArr, i10, false);
        hf.c.q(parcel, 3, this.f47364e, i10, false);
        hf.c.q(parcel, 4, this.f47365i, i10, false);
        hf.c.q(parcel, 5, this.f47366o, i10, false);
        hf.c.s(parcel, 6, this.f47367p, false);
        hf.c.j(parcel, 7, this.f47368q);
        hf.c.s(parcel, 8, this.f47369r, false);
        hf.c.l(parcel, 9, this.f47370s);
        hf.c.c(parcel, 10, this.f47371t);
        hf.c.l(parcel, 11, this.f47372u);
        hf.c.l(parcel, 12, this.f47373v);
        hf.c.b(parcel, a10);
    }
}
