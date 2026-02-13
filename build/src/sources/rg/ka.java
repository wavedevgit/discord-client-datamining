package rg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ka extends jf.a {
    public static final Parcelable.Creator<ka> CREATOR = new lb();

    /* renamed from: d  reason: collision with root package name */
    public final rg[] f47504d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f47505e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f47506i;

    /* renamed from: o  reason: collision with root package name */
    public final e4 f47507o;

    /* renamed from: p  reason: collision with root package name */
    public final String f47508p;

    /* renamed from: q  reason: collision with root package name */
    public final float f47509q;

    /* renamed from: r  reason: collision with root package name */
    public final String f47510r;

    /* renamed from: s  reason: collision with root package name */
    public final int f47511s;

    /* renamed from: t  reason: collision with root package name */
    public final boolean f47512t;

    /* renamed from: u  reason: collision with root package name */
    public final int f47513u;

    /* renamed from: v  reason: collision with root package name */
    public final int f47514v;

    public ka(rg[] rgVarArr, e4 e4Var, e4 e4Var2, e4 e4Var3, String str, float f10, String str2, int i10, boolean z10, int i11, int i12) {
        this.f47504d = rgVarArr;
        this.f47505e = e4Var;
        this.f47506i = e4Var2;
        this.f47507o = e4Var3;
        this.f47508p = str;
        this.f47509q = f10;
        this.f47510r = str2;
        this.f47511s = i10;
        this.f47512t = z10;
        this.f47513u = i11;
        this.f47514v = i12;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        rg[] rgVarArr = this.f47504d;
        int a10 = jf.c.a(parcel);
        jf.c.v(parcel, 2, rgVarArr, i10, false);
        jf.c.q(parcel, 3, this.f47505e, i10, false);
        jf.c.q(parcel, 4, this.f47506i, i10, false);
        jf.c.q(parcel, 5, this.f47507o, i10, false);
        jf.c.s(parcel, 6, this.f47508p, false);
        jf.c.j(parcel, 7, this.f47509q);
        jf.c.s(parcel, 8, this.f47510r, false);
        jf.c.l(parcel, 9, this.f47511s);
        jf.c.c(parcel, 10, this.f47512t);
        jf.c.l(parcel, 11, this.f47513u);
        jf.c.l(parcel, 12, this.f47514v);
        jf.c.b(parcel, a10);
    }
}
