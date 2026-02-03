package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sb extends hf.a {
    public static final Parcelable.Creator<sb> CREATOR = new c();

    /* renamed from: d  reason: collision with root package name */
    public double f38426d;

    /* renamed from: e  reason: collision with root package name */
    public double f38427e;

    public sb(double d10, double d11) {
        this.f38426d = d10;
        this.f38427e = d11;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.h(parcel, 2, this.f38426d);
        hf.c.h(parcel, 3, this.f38427e);
        hf.c.b(parcel, a10);
    }
}
