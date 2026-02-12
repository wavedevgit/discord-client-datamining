package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p8 extends jf.a {
    public static final Parcelable.Creator<p8> CREATOR = new ql();

    /* renamed from: d  reason: collision with root package name */
    public tc f39573d;

    /* renamed from: e  reason: collision with root package name */
    public String f39574e;

    /* renamed from: i  reason: collision with root package name */
    public String f39575i;

    /* renamed from: o  reason: collision with root package name */
    public ud[] f39576o;

    /* renamed from: p  reason: collision with root package name */
    public ra[] f39577p;

    /* renamed from: q  reason: collision with root package name */
    public String[] f39578q;

    /* renamed from: r  reason: collision with root package name */
    public m5[] f39579r;

    public p8(tc tcVar, String str, String str2, ud[] udVarArr, ra[] raVarArr, String[] strArr, m5[] m5VarArr) {
        this.f39573d = tcVar;
        this.f39574e = str;
        this.f39575i = str2;
        this.f39576o = udVarArr;
        this.f39577p = raVarArr;
        this.f39578q = strArr;
        this.f39579r = m5VarArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 2, this.f39573d, i10, false);
        jf.c.s(parcel, 3, this.f39574e, false);
        jf.c.s(parcel, 4, this.f39575i, false);
        jf.c.v(parcel, 5, this.f39576o, i10, false);
        jf.c.v(parcel, 6, this.f39577p, i10, false);
        jf.c.t(parcel, 7, this.f39578q, false);
        jf.c.v(parcel, 8, this.f39579r, i10, false);
        jf.c.b(parcel, a10);
    }
}
