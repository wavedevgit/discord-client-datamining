package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o7 extends jf.a {
    public static final Parcelable.Creator<o7> CREATOR = new yk();

    /* renamed from: d  reason: collision with root package name */
    public String f40111d;

    /* renamed from: e  reason: collision with root package name */
    public String f40112e;

    /* renamed from: i  reason: collision with root package name */
    public String f40113i;

    /* renamed from: o  reason: collision with root package name */
    public String f40114o;

    /* renamed from: p  reason: collision with root package name */
    public String f40115p;

    /* renamed from: q  reason: collision with root package name */
    public n6 f40116q;

    /* renamed from: r  reason: collision with root package name */
    public n6 f40117r;

    public o7(String str, String str2, String str3, String str4, String str5, n6 n6Var, n6 n6Var2) {
        this.f40111d = str;
        this.f40112e = str2;
        this.f40113i = str3;
        this.f40114o = str4;
        this.f40115p = str5;
        this.f40116q = n6Var;
        this.f40117r = n6Var2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, this.f40111d, false);
        jf.c.s(parcel, 3, this.f40112e, false);
        jf.c.s(parcel, 4, this.f40113i, false);
        jf.c.s(parcel, 5, this.f40114o, false);
        jf.c.s(parcel, 6, this.f40115p, false);
        jf.c.q(parcel, 7, this.f40116q, i10, false);
        jf.c.q(parcel, 8, this.f40117r, i10, false);
        jf.c.b(parcel, a10);
    }
}
