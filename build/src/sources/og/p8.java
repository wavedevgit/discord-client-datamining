package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p8 extends jf.a {
    public static final Parcelable.Creator<p8> CREATOR = new ql();

    /* renamed from: d  reason: collision with root package name */
    public tc f41246d;

    /* renamed from: e  reason: collision with root package name */
    public String f41247e;

    /* renamed from: i  reason: collision with root package name */
    public String f41248i;

    /* renamed from: o  reason: collision with root package name */
    public ud[] f41249o;

    /* renamed from: p  reason: collision with root package name */
    public ra[] f41250p;

    /* renamed from: q  reason: collision with root package name */
    public String[] f41251q;

    /* renamed from: r  reason: collision with root package name */
    public m5[] f41252r;

    public p8(tc tcVar, String str, String str2, ud[] udVarArr, ra[] raVarArr, String[] strArr, m5[] m5VarArr) {
        this.f41246d = tcVar;
        this.f41247e = str;
        this.f41248i = str2;
        this.f41249o = udVarArr;
        this.f41250p = raVarArr;
        this.f41251q = strArr;
        this.f41252r = m5VarArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 2, this.f41246d, i10, false);
        jf.c.s(parcel, 3, this.f41247e, false);
        jf.c.s(parcel, 4, this.f41248i, false);
        jf.c.v(parcel, 5, this.f41249o, i10, false);
        jf.c.v(parcel, 6, this.f41250p, i10, false);
        jf.c.t(parcel, 7, this.f41251q, false);
        jf.c.v(parcel, 8, this.f41252r, i10, false);
        jf.c.b(parcel, a10);
    }
}
