package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class tc extends jf.a {
    public static final Parcelable.Creator<tc> CREATOR = new d();

    /* renamed from: d  reason: collision with root package name */
    public String f39682d;

    /* renamed from: e  reason: collision with root package name */
    public String f39683e;

    /* renamed from: i  reason: collision with root package name */
    public String f39684i;

    /* renamed from: o  reason: collision with root package name */
    public String f39685o;

    /* renamed from: p  reason: collision with root package name */
    public String f39686p;

    /* renamed from: q  reason: collision with root package name */
    public String f39687q;

    /* renamed from: r  reason: collision with root package name */
    public String f39688r;

    public tc(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        this.f39682d = str;
        this.f39683e = str2;
        this.f39684i = str3;
        this.f39685o = str4;
        this.f39686p = str5;
        this.f39687q = str6;
        this.f39688r = str7;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, this.f39682d, false);
        jf.c.s(parcel, 3, this.f39683e, false);
        jf.c.s(parcel, 4, this.f39684i, false);
        jf.c.s(parcel, 5, this.f39685o, false);
        jf.c.s(parcel, 6, this.f39686p, false);
        jf.c.s(parcel, 7, this.f39687q, false);
        jf.c.s(parcel, 8, this.f39688r, false);
        jf.c.b(parcel, a10);
    }
}
