package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ll extends jf.a {
    public static final Parcelable.Creator<ll> CREATOR = new bm();

    /* renamed from: d  reason: collision with root package name */
    private final double f39472d;

    /* renamed from: e  reason: collision with root package name */
    private final double f39473e;

    public ll(double d10, double d11) {
        this.f39472d = d10;
        this.f39473e = d11;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.h(parcel, 1, this.f39472d);
        jf.c.h(parcel, 2, this.f39473e);
        jf.c.b(parcel, a10);
    }
}
