package rg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zk extends jf.a {
    public static final Parcelable.Creator<zk> CREATOR = new al();

    /* renamed from: d  reason: collision with root package name */
    private final String f47393d;

    /* renamed from: e  reason: collision with root package name */
    private final String f47394e;

    /* renamed from: i  reason: collision with root package name */
    private final String f47395i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f47396o;

    /* renamed from: p  reason: collision with root package name */
    private final int f47397p;

    /* renamed from: q  reason: collision with root package name */
    private final String f47398q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f47399r;

    public zk(String str, String str2, String str3, boolean z10, int i10, String str4, boolean z11) {
        this.f47393d = str;
        this.f47394e = str2;
        this.f47395i = str3;
        this.f47398q = str4;
        this.f47397p = i10;
        this.f47396o = z10;
        this.f47399r = z11;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f47393d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.s(parcel, 2, this.f47394e, false);
        jf.c.s(parcel, 3, this.f47395i, false);
        jf.c.c(parcel, 4, this.f47396o);
        jf.c.l(parcel, 5, this.f47397p);
        jf.c.s(parcel, 6, this.f47398q, false);
        jf.c.c(parcel, 7, this.f47399r);
        jf.c.b(parcel, a10);
    }
}
