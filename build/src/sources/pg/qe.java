package pg;

import android.graphics.PointF;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class qe extends hf.a {
    public static final Parcelable.Creator<qe> CREATOR = new re();

    /* renamed from: d  reason: collision with root package name */
    private final int f44655d;

    /* renamed from: e  reason: collision with root package name */
    private final PointF f44656e;

    public qe(int i10, PointF pointF) {
        this.f44655d = i10;
        this.f44656e = pointF;
    }

    public final int b() {
        return this.f44655d;
    }

    public final PointF c() {
        return this.f44656e;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f44655d);
        hf.c.q(parcel, 2, this.f44656e, i10, false);
        hf.c.b(parcel, a10);
    }
}
