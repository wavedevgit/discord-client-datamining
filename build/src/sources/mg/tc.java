package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class tc extends hf.a {
    public static final Parcelable.Creator<tc> CREATOR = new d();

    /* renamed from: d  reason: collision with root package name */
    public String f38660d;

    /* renamed from: e  reason: collision with root package name */
    public String f38661e;

    /* renamed from: i  reason: collision with root package name */
    public String f38662i;

    /* renamed from: o  reason: collision with root package name */
    public String f38663o;

    /* renamed from: p  reason: collision with root package name */
    public String f38664p;

    /* renamed from: q  reason: collision with root package name */
    public String f38665q;

    /* renamed from: r  reason: collision with root package name */
    public String f38666r;

    public tc(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        this.f38660d = str;
        this.f38661e = str2;
        this.f38662i = str3;
        this.f38663o = str4;
        this.f38664p = str5;
        this.f38665q = str6;
        this.f38666r = str7;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, this.f38660d, false);
        hf.c.s(parcel, 3, this.f38661e, false);
        hf.c.s(parcel, 4, this.f38662i, false);
        hf.c.s(parcel, 5, this.f38663o, false);
        hf.c.s(parcel, 6, this.f38664p, false);
        hf.c.s(parcel, 7, this.f38665q, false);
        hf.c.s(parcel, 8, this.f38666r, false);
        hf.c.b(parcel, a10);
    }
}
