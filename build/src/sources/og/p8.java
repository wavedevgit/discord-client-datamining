package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p8 extends jf.a {
    public static final Parcelable.Creator<p8> CREATOR = new ql();

    /* renamed from: d  reason: collision with root package name */
    public tc f40141d;

    /* renamed from: e  reason: collision with root package name */
    public String f40142e;

    /* renamed from: i  reason: collision with root package name */
    public String f40143i;

    /* renamed from: o  reason: collision with root package name */
    public ud[] f40144o;

    /* renamed from: p  reason: collision with root package name */
    public ra[] f40145p;

    /* renamed from: q  reason: collision with root package name */
    public String[] f40146q;

    /* renamed from: r  reason: collision with root package name */
    public m5[] f40147r;

    public p8(tc tcVar, String str, String str2, ud[] udVarArr, ra[] raVarArr, String[] strArr, m5[] m5VarArr) {
        this.f40141d = tcVar;
        this.f40142e = str;
        this.f40143i = str2;
        this.f40144o = udVarArr;
        this.f40145p = raVarArr;
        this.f40146q = strArr;
        this.f40147r = m5VarArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 2, this.f40141d, i10, false);
        jf.c.s(parcel, 3, this.f40142e, false);
        jf.c.s(parcel, 4, this.f40143i, false);
        jf.c.v(parcel, 5, this.f40144o, i10, false);
        jf.c.v(parcel, 6, this.f40145p, i10, false);
        jf.c.t(parcel, 7, this.f40146q, false);
        jf.c.v(parcel, 8, this.f40147r, i10, false);
        jf.c.b(parcel, a10);
    }
}
