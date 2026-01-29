package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ka extends hf.a {
    public static final Parcelable.Creator<ka> CREATOR = new lb();

    /* renamed from: d  reason: collision with root package name */
    public final rg[] f45507d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f45508e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f45509i;

    /* renamed from: o  reason: collision with root package name */
    public final e4 f45510o;

    /* renamed from: p  reason: collision with root package name */
    public final String f45511p;

    /* renamed from: q  reason: collision with root package name */
    public final float f45512q;

    /* renamed from: r  reason: collision with root package name */
    public final String f45513r;

    /* renamed from: s  reason: collision with root package name */
    public final int f45514s;

    /* renamed from: t  reason: collision with root package name */
    public final boolean f45515t;

    /* renamed from: u  reason: collision with root package name */
    public final int f45516u;

    /* renamed from: v  reason: collision with root package name */
    public final int f45517v;

    public ka(rg[] rgVarArr, e4 e4Var, e4 e4Var2, e4 e4Var3, String str, float f10, String str2, int i10, boolean z10, int i11, int i12) {
        this.f45507d = rgVarArr;
        this.f45508e = e4Var;
        this.f45509i = e4Var2;
        this.f45510o = e4Var3;
        this.f45511p = str;
        this.f45512q = f10;
        this.f45513r = str2;
        this.f45514s = i10;
        this.f45515t = z10;
        this.f45516u = i11;
        this.f45517v = i12;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        rg[] rgVarArr = this.f45507d;
        int a10 = hf.c.a(parcel);
        hf.c.v(parcel, 2, rgVarArr, i10, false);
        hf.c.q(parcel, 3, this.f45508e, i10, false);
        hf.c.q(parcel, 4, this.f45509i, i10, false);
        hf.c.q(parcel, 5, this.f45510o, i10, false);
        hf.c.s(parcel, 6, this.f45511p, false);
        hf.c.j(parcel, 7, this.f45512q);
        hf.c.s(parcel, 8, this.f45513r, false);
        hf.c.l(parcel, 9, this.f45514s);
        hf.c.c(parcel, 10, this.f45515t);
        hf.c.l(parcel, 11, this.f45516u);
        hf.c.l(parcel, 12, this.f45517v);
        hf.c.b(parcel, a10);
    }
}
