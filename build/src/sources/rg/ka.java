package rg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ka extends jf.a {
    public static final Parcelable.Creator<ka> CREATOR = new lb();

    /* renamed from: d  reason: collision with root package name */
    public final rg[] f46936d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f46937e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f46938i;

    /* renamed from: o  reason: collision with root package name */
    public final e4 f46939o;

    /* renamed from: p  reason: collision with root package name */
    public final String f46940p;

    /* renamed from: q  reason: collision with root package name */
    public final float f46941q;

    /* renamed from: r  reason: collision with root package name */
    public final String f46942r;

    /* renamed from: s  reason: collision with root package name */
    public final int f46943s;

    /* renamed from: t  reason: collision with root package name */
    public final boolean f46944t;

    /* renamed from: u  reason: collision with root package name */
    public final int f46945u;

    /* renamed from: v  reason: collision with root package name */
    public final int f46946v;

    public ka(rg[] rgVarArr, e4 e4Var, e4 e4Var2, e4 e4Var3, String str, float f10, String str2, int i10, boolean z10, int i11, int i12) {
        this.f46936d = rgVarArr;
        this.f46937e = e4Var;
        this.f46938i = e4Var2;
        this.f46939o = e4Var3;
        this.f46940p = str;
        this.f46941q = f10;
        this.f46942r = str2;
        this.f46943s = i10;
        this.f46944t = z10;
        this.f46945u = i11;
        this.f46946v = i12;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        rg[] rgVarArr = this.f46936d;
        int a10 = jf.c.a(parcel);
        jf.c.v(parcel, 2, rgVarArr, i10, false);
        jf.c.q(parcel, 3, this.f46937e, i10, false);
        jf.c.q(parcel, 4, this.f46938i, i10, false);
        jf.c.q(parcel, 5, this.f46939o, i10, false);
        jf.c.s(parcel, 6, this.f46940p, false);
        jf.c.j(parcel, 7, this.f46941q);
        jf.c.s(parcel, 8, this.f46942r, false);
        jf.c.l(parcel, 9, this.f46943s);
        jf.c.c(parcel, 10, this.f46944t);
        jf.c.l(parcel, 11, this.f46945u);
        jf.c.l(parcel, 12, this.f46946v);
        jf.c.b(parcel, a10);
    }
}
