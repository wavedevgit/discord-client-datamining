package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ll extends hf.a {
    public static final Parcelable.Creator<ll> CREATOR = new bm();

    /* renamed from: d  reason: collision with root package name */
    private final double f40073d;

    /* renamed from: e  reason: collision with root package name */
    private final double f40074e;

    public ll(double d10, double d11) {
        this.f40073d = d10;
        this.f40074e = d11;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.h(parcel, 1, this.f40073d);
        hf.c.h(parcel, 2, this.f40074e);
        hf.c.b(parcel, a10);
    }
}
