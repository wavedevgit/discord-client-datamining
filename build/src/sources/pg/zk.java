package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zk extends hf.a {
    public static final Parcelable.Creator<zk> CREATOR = new al();

    /* renamed from: d  reason: collision with root package name */
    private final String f45981d;

    /* renamed from: e  reason: collision with root package name */
    private final String f45982e;

    /* renamed from: i  reason: collision with root package name */
    private final String f45983i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f45984o;

    /* renamed from: p  reason: collision with root package name */
    private final int f45985p;

    /* renamed from: q  reason: collision with root package name */
    private final String f45986q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f45987r;

    public zk(String str, String str2, String str3, boolean z10, int i10, String str4, boolean z11) {
        this.f45981d = str;
        this.f45982e = str2;
        this.f45983i = str3;
        this.f45986q = str4;
        this.f45985p = i10;
        this.f45984o = z10;
        this.f45987r = z11;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f45981d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f45982e, false);
        hf.c.s(parcel, 3, this.f45983i, false);
        hf.c.c(parcel, 4, this.f45984o);
        hf.c.l(parcel, 5, this.f45985p);
        hf.c.s(parcel, 6, this.f45986q, false);
        hf.c.c(parcel, 7, this.f45987r);
        hf.c.b(parcel, a10);
    }
}
