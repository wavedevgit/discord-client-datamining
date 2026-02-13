package rg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zk extends jf.a {
    public static final Parcelable.Creator<zk> CREATOR = new al();

    /* renamed from: d  reason: collision with root package name */
    private final String f47962d;

    /* renamed from: e  reason: collision with root package name */
    private final String f47963e;

    /* renamed from: i  reason: collision with root package name */
    private final String f47964i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f47965o;

    /* renamed from: p  reason: collision with root package name */
    private final int f47966p;

    /* renamed from: q  reason: collision with root package name */
    private final String f47967q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f47968r;

    public zk(String str, String str2, String str3, boolean z10, int i10, String str4, boolean z11) {
        this.f47962d = str;
        this.f47963e = str2;
        this.f47964i = str3;
        this.f47967q = str4;
        this.f47966p = i10;
        this.f47965o = z10;
        this.f47968r = z11;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f47962d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.s(parcel, 2, this.f47963e, false);
        jf.c.s(parcel, 3, this.f47964i, false);
        jf.c.c(parcel, 4, this.f47965o);
        jf.c.l(parcel, 5, this.f47966p);
        jf.c.s(parcel, 6, this.f47967q, false);
        jf.c.c(parcel, 7, this.f47968r);
        jf.c.b(parcel, a10);
    }
}
