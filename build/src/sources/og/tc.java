package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class tc extends jf.a {
    public static final Parcelable.Creator<tc> CREATOR = new d();

    /* renamed from: d  reason: collision with root package name */
    public String f39681d;

    /* renamed from: e  reason: collision with root package name */
    public String f39682e;

    /* renamed from: i  reason: collision with root package name */
    public String f39683i;

    /* renamed from: o  reason: collision with root package name */
    public String f39684o;

    /* renamed from: p  reason: collision with root package name */
    public String f39685p;

    /* renamed from: q  reason: collision with root package name */
    public String f39686q;

    /* renamed from: r  reason: collision with root package name */
    public String f39687r;

    public tc(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        this.f39681d = str;
        this.f39682e = str2;
        this.f39683i = str3;
        this.f39684o = str4;
        this.f39685p = str5;
        this.f39686q = str6;
        this.f39687r = str7;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, this.f39681d, false);
        jf.c.s(parcel, 3, this.f39682e, false);
        jf.c.s(parcel, 4, this.f39683i, false);
        jf.c.s(parcel, 5, this.f39684o, false);
        jf.c.s(parcel, 6, this.f39685p, false);
        jf.c.s(parcel, 7, this.f39686q, false);
        jf.c.s(parcel, 8, this.f39687r, false);
        jf.c.b(parcel, a10);
    }
}
