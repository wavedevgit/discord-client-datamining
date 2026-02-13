package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class tc extends jf.a {
    public static final Parcelable.Creator<tc> CREATOR = new d();

    /* renamed from: d  reason: collision with root package name */
    public String f40250d;

    /* renamed from: e  reason: collision with root package name */
    public String f40251e;

    /* renamed from: i  reason: collision with root package name */
    public String f40252i;

    /* renamed from: o  reason: collision with root package name */
    public String f40253o;

    /* renamed from: p  reason: collision with root package name */
    public String f40254p;

    /* renamed from: q  reason: collision with root package name */
    public String f40255q;

    /* renamed from: r  reason: collision with root package name */
    public String f40256r;

    public tc(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        this.f40250d = str;
        this.f40251e = str2;
        this.f40252i = str3;
        this.f40253o = str4;
        this.f40254p = str5;
        this.f40255q = str6;
        this.f40256r = str7;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 2, this.f40250d, false);
        jf.c.s(parcel, 3, this.f40251e, false);
        jf.c.s(parcel, 4, this.f40252i, false);
        jf.c.s(parcel, 5, this.f40253o, false);
        jf.c.s(parcel, 6, this.f40254p, false);
        jf.c.s(parcel, 7, this.f40255q, false);
        jf.c.s(parcel, 8, this.f40256r, false);
        jf.c.b(parcel, a10);
    }
}
