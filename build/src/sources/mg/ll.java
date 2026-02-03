package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ll extends hf.a {
    public static final Parcelable.Creator<ll> CREATOR = new bm();

    /* renamed from: d  reason: collision with root package name */
    private final double f38248d;

    /* renamed from: e  reason: collision with root package name */
    private final double f38249e;

    public ll(double d10, double d11) {
        this.f38248d = d10;
        this.f38249e = d11;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.h(parcel, 1, this.f38248d);
        hf.c.h(parcel, 2, this.f38249e);
        hf.c.b(parcel, a10);
    }
}
