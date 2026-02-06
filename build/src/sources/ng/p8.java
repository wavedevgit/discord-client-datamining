package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p8 extends hf.a {
    public static final Parcelable.Creator<p8> CREATOR = new ql();

    /* renamed from: d  reason: collision with root package name */
    public tc f40173d;

    /* renamed from: e  reason: collision with root package name */
    public String f40174e;

    /* renamed from: i  reason: collision with root package name */
    public String f40175i;

    /* renamed from: o  reason: collision with root package name */
    public ud[] f40176o;

    /* renamed from: p  reason: collision with root package name */
    public ra[] f40177p;

    /* renamed from: q  reason: collision with root package name */
    public String[] f40178q;

    /* renamed from: r  reason: collision with root package name */
    public m5[] f40179r;

    public p8(tc tcVar, String str, String str2, ud[] udVarArr, ra[] raVarArr, String[] strArr, m5[] m5VarArr) {
        this.f40173d = tcVar;
        this.f40174e = str;
        this.f40175i = str2;
        this.f40176o = udVarArr;
        this.f40177p = raVarArr;
        this.f40178q = strArr;
        this.f40179r = m5VarArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 2, this.f40173d, i10, false);
        hf.c.s(parcel, 3, this.f40174e, false);
        hf.c.s(parcel, 4, this.f40175i, false);
        hf.c.v(parcel, 5, this.f40176o, i10, false);
        hf.c.v(parcel, 6, this.f40177p, i10, false);
        hf.c.t(parcel, 7, this.f40178q, false);
        hf.c.v(parcel, 8, this.f40179r, i10, false);
        hf.c.b(parcel, a10);
    }
}
