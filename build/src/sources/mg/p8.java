package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p8 extends hf.a {
    public static final Parcelable.Creator<p8> CREATOR = new ql();

    /* renamed from: d  reason: collision with root package name */
    public tc f38555d;

    /* renamed from: e  reason: collision with root package name */
    public String f38556e;

    /* renamed from: i  reason: collision with root package name */
    public String f38557i;

    /* renamed from: o  reason: collision with root package name */
    public ud[] f38558o;

    /* renamed from: p  reason: collision with root package name */
    public ra[] f38559p;

    /* renamed from: q  reason: collision with root package name */
    public String[] f38560q;

    /* renamed from: r  reason: collision with root package name */
    public m5[] f38561r;

    public p8(tc tcVar, String str, String str2, ud[] udVarArr, ra[] raVarArr, String[] strArr, m5[] m5VarArr) {
        this.f38555d = tcVar;
        this.f38556e = str;
        this.f38557i = str2;
        this.f38558o = udVarArr;
        this.f38559p = raVarArr;
        this.f38560q = strArr;
        this.f38561r = m5VarArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 2, this.f38555d, i10, false);
        hf.c.s(parcel, 3, this.f38556e, false);
        hf.c.s(parcel, 4, this.f38557i, false);
        hf.c.v(parcel, 5, this.f38558o, i10, false);
        hf.c.v(parcel, 6, this.f38559p, i10, false);
        hf.c.t(parcel, 7, this.f38560q, false);
        hf.c.v(parcel, 8, this.f38561r, i10, false);
        hf.c.b(parcel, a10);
    }
}
