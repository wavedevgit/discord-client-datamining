package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class tc extends hf.a {
    public static final Parcelable.Creator<tc> CREATOR = new d();

    /* renamed from: d  reason: collision with root package name */
    public String f38664d;

    /* renamed from: e  reason: collision with root package name */
    public String f38665e;

    /* renamed from: i  reason: collision with root package name */
    public String f38666i;

    /* renamed from: o  reason: collision with root package name */
    public String f38667o;

    /* renamed from: p  reason: collision with root package name */
    public String f38668p;

    /* renamed from: q  reason: collision with root package name */
    public String f38669q;

    /* renamed from: r  reason: collision with root package name */
    public String f38670r;

    public tc(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        this.f38664d = str;
        this.f38665e = str2;
        this.f38666i = str3;
        this.f38667o = str4;
        this.f38668p = str5;
        this.f38669q = str6;
        this.f38670r = str7;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, this.f38664d, false);
        hf.c.s(parcel, 3, this.f38665e, false);
        hf.c.s(parcel, 4, this.f38666i, false);
        hf.c.s(parcel, 5, this.f38667o, false);
        hf.c.s(parcel, 6, this.f38668p, false);
        hf.c.s(parcel, 7, this.f38669q, false);
        hf.c.s(parcel, 8, this.f38670r, false);
        hf.c.b(parcel, a10);
    }
}
