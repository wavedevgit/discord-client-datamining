package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class tc extends hf.a {
    public static final Parcelable.Creator<tc> CREATOR = new d();

    /* renamed from: d  reason: collision with root package name */
    public String f40282d;

    /* renamed from: e  reason: collision with root package name */
    public String f40283e;

    /* renamed from: i  reason: collision with root package name */
    public String f40284i;

    /* renamed from: o  reason: collision with root package name */
    public String f40285o;

    /* renamed from: p  reason: collision with root package name */
    public String f40286p;

    /* renamed from: q  reason: collision with root package name */
    public String f40287q;

    /* renamed from: r  reason: collision with root package name */
    public String f40288r;

    public tc(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        this.f40282d = str;
        this.f40283e = str2;
        this.f40284i = str3;
        this.f40285o = str4;
        this.f40286p = str5;
        this.f40287q = str6;
        this.f40288r = str7;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, this.f40282d, false);
        hf.c.s(parcel, 3, this.f40283e, false);
        hf.c.s(parcel, 4, this.f40284i, false);
        hf.c.s(parcel, 5, this.f40285o, false);
        hf.c.s(parcel, 6, this.f40286p, false);
        hf.c.s(parcel, 7, this.f40287q, false);
        hf.c.s(parcel, 8, this.f40288r, false);
        hf.c.b(parcel, a10);
    }
}
