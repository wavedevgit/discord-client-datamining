package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zk extends hf.a {
    public static final Parcelable.Creator<zk> CREATOR = new al();

    /* renamed from: d  reason: collision with root package name */
    private final String f47821d;

    /* renamed from: e  reason: collision with root package name */
    private final String f47822e;

    /* renamed from: i  reason: collision with root package name */
    private final String f47823i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f47824o;

    /* renamed from: p  reason: collision with root package name */
    private final int f47825p;

    /* renamed from: q  reason: collision with root package name */
    private final String f47826q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f47827r;

    public zk(String str, String str2, String str3, boolean z10, int i10, String str4, boolean z11) {
        this.f47821d = str;
        this.f47822e = str2;
        this.f47823i = str3;
        this.f47826q = str4;
        this.f47825p = i10;
        this.f47824o = z10;
        this.f47827r = z11;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f47821d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f47822e, false);
        hf.c.s(parcel, 3, this.f47823i, false);
        hf.c.c(parcel, 4, this.f47824o);
        hf.c.l(parcel, 5, this.f47825p);
        hf.c.s(parcel, 6, this.f47826q, false);
        hf.c.c(parcel, 7, this.f47827r);
        hf.c.b(parcel, a10);
    }
}
