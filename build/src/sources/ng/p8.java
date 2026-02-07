package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p8 extends hf.a {
    public static final Parcelable.Creator<p8> CREATOR = new ql();

    /* renamed from: d  reason: collision with root package name */
    public tc f40221d;

    /* renamed from: e  reason: collision with root package name */
    public String f40222e;

    /* renamed from: i  reason: collision with root package name */
    public String f40223i;

    /* renamed from: o  reason: collision with root package name */
    public ud[] f40224o;

    /* renamed from: p  reason: collision with root package name */
    public ra[] f40225p;

    /* renamed from: q  reason: collision with root package name */
    public String[] f40226q;

    /* renamed from: r  reason: collision with root package name */
    public m5[] f40227r;

    public p8(tc tcVar, String str, String str2, ud[] udVarArr, ra[] raVarArr, String[] strArr, m5[] m5VarArr) {
        this.f40221d = tcVar;
        this.f40222e = str;
        this.f40223i = str2;
        this.f40224o = udVarArr;
        this.f40225p = raVarArr;
        this.f40226q = strArr;
        this.f40227r = m5VarArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 2, this.f40221d, i10, false);
        hf.c.s(parcel, 3, this.f40222e, false);
        hf.c.s(parcel, 4, this.f40223i, false);
        hf.c.v(parcel, 5, this.f40224o, i10, false);
        hf.c.v(parcel, 6, this.f40225p, i10, false);
        hf.c.t(parcel, 7, this.f40226q, false);
        hf.c.v(parcel, 8, this.f40227r, i10, false);
        hf.c.b(parcel, a10);
    }
}
