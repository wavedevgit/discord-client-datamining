package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ka extends hf.a {
    public static final Parcelable.Creator<ka> CREATOR = new lb();

    /* renamed from: d  reason: collision with root package name */
    public final rg[] f45597d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f45598e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f45599i;

    /* renamed from: o  reason: collision with root package name */
    public final e4 f45600o;

    /* renamed from: p  reason: collision with root package name */
    public final String f45601p;

    /* renamed from: q  reason: collision with root package name */
    public final float f45602q;

    /* renamed from: r  reason: collision with root package name */
    public final String f45603r;

    /* renamed from: s  reason: collision with root package name */
    public final int f45604s;

    /* renamed from: t  reason: collision with root package name */
    public final boolean f45605t;

    /* renamed from: u  reason: collision with root package name */
    public final int f45606u;

    /* renamed from: v  reason: collision with root package name */
    public final int f45607v;

    public ka(rg[] rgVarArr, e4 e4Var, e4 e4Var2, e4 e4Var3, String str, float f10, String str2, int i10, boolean z10, int i11, int i12) {
        this.f45597d = rgVarArr;
        this.f45598e = e4Var;
        this.f45599i = e4Var2;
        this.f45600o = e4Var3;
        this.f45601p = str;
        this.f45602q = f10;
        this.f45603r = str2;
        this.f45604s = i10;
        this.f45605t = z10;
        this.f45606u = i11;
        this.f45607v = i12;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        rg[] rgVarArr = this.f45597d;
        int a10 = hf.c.a(parcel);
        hf.c.v(parcel, 2, rgVarArr, i10, false);
        hf.c.q(parcel, 3, this.f45598e, i10, false);
        hf.c.q(parcel, 4, this.f45599i, i10, false);
        hf.c.q(parcel, 5, this.f45600o, i10, false);
        hf.c.s(parcel, 6, this.f45601p, false);
        hf.c.j(parcel, 7, this.f45602q);
        hf.c.s(parcel, 8, this.f45603r, false);
        hf.c.l(parcel, 9, this.f45604s);
        hf.c.c(parcel, 10, this.f45605t);
        hf.c.l(parcel, 11, this.f45606u);
        hf.c.l(parcel, 12, this.f45607v);
        hf.c.b(parcel, a10);
    }
}
