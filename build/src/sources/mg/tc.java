package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class tc extends hf.a {
    public static final Parcelable.Creator<tc> CREATOR = new d();

    /* renamed from: d  reason: collision with root package name */
    public String f38119d;

    /* renamed from: e  reason: collision with root package name */
    public String f38120e;

    /* renamed from: i  reason: collision with root package name */
    public String f38121i;

    /* renamed from: o  reason: collision with root package name */
    public String f38122o;

    /* renamed from: p  reason: collision with root package name */
    public String f38123p;

    /* renamed from: q  reason: collision with root package name */
    public String f38124q;

    /* renamed from: r  reason: collision with root package name */
    public String f38125r;

    public tc(String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        this.f38119d = str;
        this.f38120e = str2;
        this.f38121i = str3;
        this.f38122o = str4;
        this.f38123p = str5;
        this.f38124q = str6;
        this.f38125r = str7;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 2, this.f38119d, false);
        hf.c.s(parcel, 3, this.f38120e, false);
        hf.c.s(parcel, 4, this.f38121i, false);
        hf.c.s(parcel, 5, this.f38122o, false);
        hf.c.s(parcel, 6, this.f38123p, false);
        hf.c.s(parcel, 7, this.f38124q, false);
        hf.c.s(parcel, 8, this.f38125r, false);
        hf.c.b(parcel, a10);
    }
}
