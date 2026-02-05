package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o7 extends hf.a {
    public static final Parcelable.Creator<o7> CREATOR = new yk();

    /* renamed from: d  reason: collision with root package name */
    public String f37980d;

    /* renamed from: e  reason: collision with root package name */
    public String f37981e;

    /* renamed from: i  reason: collision with root package name */
    public String f37982i;

    /* renamed from: o  reason: collision with root package name */
    public String f37983o;

    /* renamed from: p  reason: collision with root package name */
    public String f37984p;

    /* renamed from: q  reason: collision with root package name */
    public n6 f37985q;

    /* renamed from: r  reason: collision with root package name */
    public n6 f37986r;

    public o7(String str, String str2, String str3, String str4, String str5, n6 n6Var, n6 n6Var2) {
        this.f37980d = str;
        this.f37981e = str2;
        this.f37982i = str3;
        this.f37983o = str4;
        this.f37984p = str5;
        this.f37985q = n6Var;
        this.f37986r = n6Var2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, this.f37980d, false);
        hf.c.s(parcel, 3, this.f37981e, false);
        hf.c.s(parcel, 4, this.f37982i, false);
        hf.c.s(parcel, 5, this.f37983o, false);
        hf.c.s(parcel, 6, this.f37984p, false);
        hf.c.q(parcel, 7, this.f37985q, i10, false);
        hf.c.q(parcel, 8, this.f37986r, i10, false);
        hf.c.b(parcel, a10);
    }
}
