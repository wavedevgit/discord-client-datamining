package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rg extends hf.a {
    public static final Parcelable.Creator<rg> CREATOR = new sh();

    /* renamed from: d  reason: collision with root package name */
    public final mc[] f45700d;

    /* renamed from: e  reason: collision with root package name */
    public final e4 f45701e;

    /* renamed from: i  reason: collision with root package name */
    public final e4 f45702i;

    /* renamed from: o  reason: collision with root package name */
    public final String f45703o;

    /* renamed from: p  reason: collision with root package name */
    public final float f45704p;

    /* renamed from: q  reason: collision with root package name */
    public final String f45705q;

    /* renamed from: r  reason: collision with root package name */
    public final boolean f45706r;

    public rg(mc[] mcVarArr, e4 e4Var, e4 e4Var2, String str, float f10, String str2, boolean z10) {
        this.f45700d = mcVarArr;
        this.f45701e = e4Var;
        this.f45702i = e4Var2;
        this.f45703o = str;
        this.f45704p = f10;
        this.f45705q = str2;
        this.f45706r = z10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        mc[] mcVarArr = this.f45700d;
        int a10 = hf.c.a(parcel);
        hf.c.v(parcel, 2, mcVarArr, i10, false);
        hf.c.q(parcel, 3, this.f45701e, i10, false);
        hf.c.q(parcel, 4, this.f45702i, i10, false);
        hf.c.s(parcel, 5, this.f45703o, false);
        hf.c.j(parcel, 6, this.f45704p);
        hf.c.s(parcel, 7, this.f45705q, false);
        hf.c.c(parcel, 8, this.f45706r);
        hf.c.b(parcel, a10);
    }
}
