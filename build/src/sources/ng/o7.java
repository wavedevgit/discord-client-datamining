package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o7 extends hf.a {
    public static final Parcelable.Creator<o7> CREATOR = new yk();

    /* renamed from: d  reason: collision with root package name */
    public String f40191d;

    /* renamed from: e  reason: collision with root package name */
    public String f40192e;

    /* renamed from: i  reason: collision with root package name */
    public String f40193i;

    /* renamed from: o  reason: collision with root package name */
    public String f40194o;

    /* renamed from: p  reason: collision with root package name */
    public String f40195p;

    /* renamed from: q  reason: collision with root package name */
    public n6 f40196q;

    /* renamed from: r  reason: collision with root package name */
    public n6 f40197r;

    public o7(String str, String str2, String str3, String str4, String str5, n6 n6Var, n6 n6Var2) {
        this.f40191d = str;
        this.f40192e = str2;
        this.f40193i = str3;
        this.f40194o = str4;
        this.f40195p = str5;
        this.f40196q = n6Var;
        this.f40197r = n6Var2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, this.f40191d, false);
        hf.c.s(parcel, 3, this.f40192e, false);
        hf.c.s(parcel, 4, this.f40193i, false);
        hf.c.s(parcel, 5, this.f40194o, false);
        hf.c.s(parcel, 6, this.f40195p, false);
        hf.c.q(parcel, 7, this.f40196q, i10, false);
        hf.c.q(parcel, 8, this.f40197r, i10, false);
        hf.c.b(parcel, a10);
    }
}
