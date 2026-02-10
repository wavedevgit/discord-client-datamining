package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class tc extends jf.a {
    public static final Parcelable.Creator<tc> CREATOR = new d();

    /* renamed from: d  reason: collision with root package name */
    public String f41355d;

    /* renamed from: e  reason: collision with root package name */
    public String f41356e;

    /* renamed from: i  reason: collision with root package name */
    public String f41357i;

    /* renamed from: o  reason: collision with root package name */
    public String f41358o;

    /* renamed from: p  reason: collision with root package name */
    public String f41359p;

    /* renamed from: q  reason: collision with root package name */
    public String f41360q;

    /* renamed from: r  reason: collision with root package name */
    public String f41361r;

    public tc(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        this.f41355d = str;
        this.f41356e = str2;
        this.f41357i = str3;
        this.f41358o = str4;
        this.f41359p = str5;
        this.f41360q = str6;
        this.f41361r = str7;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, this.f41355d, false);
        jf.c.s(parcel, 3, this.f41356e, false);
        jf.c.s(parcel, 4, this.f41357i, false);
        jf.c.s(parcel, 5, this.f41358o, false);
        jf.c.s(parcel, 6, this.f41359p, false);
        jf.c.s(parcel, 7, this.f41360q, false);
        jf.c.s(parcel, 8, this.f41361r, false);
        jf.c.b(parcel, a10);
    }
}
