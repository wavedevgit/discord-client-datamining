package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o7 extends jf.a {
    public static final Parcelable.Creator<o7> CREATOR = new yk();

    /* renamed from: d  reason: collision with root package name */
    public String f41216d;

    /* renamed from: e  reason: collision with root package name */
    public String f41217e;

    /* renamed from: i  reason: collision with root package name */
    public String f41218i;

    /* renamed from: o  reason: collision with root package name */
    public String f41219o;

    /* renamed from: p  reason: collision with root package name */
    public String f41220p;

    /* renamed from: q  reason: collision with root package name */
    public n6 f41221q;

    /* renamed from: r  reason: collision with root package name */
    public n6 f41222r;

    public o7(String str, String str2, String str3, String str4, String str5, n6 n6Var, n6 n6Var2) {
        this.f41216d = str;
        this.f41217e = str2;
        this.f41218i = str3;
        this.f41219o = str4;
        this.f41220p = str5;
        this.f41221q = n6Var;
        this.f41222r = n6Var2;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, this.f41216d, false);
        jf.c.s(parcel, 3, this.f41217e, false);
        jf.c.s(parcel, 4, this.f41218i, false);
        jf.c.s(parcel, 5, this.f41219o, false);
        jf.c.s(parcel, 6, this.f41220p, false);
        jf.c.q(parcel, 7, this.f41221q, i10, false);
        jf.c.q(parcel, 8, this.f41222r, i10, false);
        jf.c.b(parcel, a10);
    }
}
