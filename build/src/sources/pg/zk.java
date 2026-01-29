package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class zk extends hf.a {
    public static final Parcelable.Creator<zk> CREATOR = new al();

    /* renamed from: d  reason: collision with root package name */
    private final String f45965d;

    /* renamed from: e  reason: collision with root package name */
    private final String f45966e;

    /* renamed from: i  reason: collision with root package name */
    private final String f45967i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f45968o;

    /* renamed from: p  reason: collision with root package name */
    private final int f45969p;

    /* renamed from: q  reason: collision with root package name */
    private final String f45970q;

    /* renamed from: r  reason: collision with root package name */
    private final boolean f45971r;

    public zk(String str, String str2, String str3, boolean z10, int i10, String str4, boolean z11) {
        this.f45965d = str;
        this.f45966e = str2;
        this.f45967i = str3;
        this.f45970q = str4;
        this.f45969p = i10;
        this.f45968o = z10;
        this.f45971r = z11;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f45965d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f45966e, false);
        hf.c.s(parcel, 3, this.f45967i, false);
        hf.c.c(parcel, 4, this.f45968o);
        hf.c.l(parcel, 5, this.f45969p);
        hf.c.s(parcel, 6, this.f45970q, false);
        hf.c.c(parcel, 7, this.f45971r);
        hf.c.b(parcel, a10);
    }
}
