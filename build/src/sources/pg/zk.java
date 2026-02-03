package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zk extends hf.a {
    public static final Parcelable.Creator<zk> CREATOR = new al();

    /* renamed from: d  reason: collision with root package name */
    private final String f46013d;

    /* renamed from: e  reason: collision with root package name */
    private final String f46014e;

    /* renamed from: i  reason: collision with root package name */
    private final String f46015i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f46016o;

    /* renamed from: p  reason: collision with root package name */
    private final int f46017p;

    /* renamed from: q  reason: collision with root package name */
    private final String f46018q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f46019r;

    public zk(String str, String str2, String str3, boolean z10, int i10, String str4, boolean z11) {
        this.f46013d = str;
        this.f46014e = str2;
        this.f46015i = str3;
        this.f46018q = str4;
        this.f46017p = i10;
        this.f46016o = z10;
        this.f46019r = z11;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f46013d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f46014e, false);
        hf.c.s(parcel, 3, this.f46015i, false);
        hf.c.c(parcel, 4, this.f46016o);
        hf.c.l(parcel, 5, this.f46017p);
        hf.c.s(parcel, 6, this.f46018q, false);
        hf.c.c(parcel, 7, this.f46019r);
        hf.c.b(parcel, a10);
    }
}
