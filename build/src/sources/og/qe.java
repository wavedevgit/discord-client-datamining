package og;

import android.graphics.PointF;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class qe extends hf.a {
    public static final Parcelable.Creator<qe> CREATOR = new re();

    /* renamed from: d  reason: collision with root package name */
    private final int f43463d;

    /* renamed from: e  reason: collision with root package name */
    private final PointF f43464e;

    public qe(int i10, PointF pointF) {
        this.f43463d = i10;
        this.f43464e = pointF;
    }

    public final int b() {
        return this.f43463d;
    }

    public final PointF c() {
        return this.f43464e;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f43463d);
        hf.c.q(parcel, 2, this.f43464e, i10, false);
        hf.c.b(parcel, a10);
    }
}
