package qg;

import android.graphics.PointF;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class qe extends jf.a {
    public static final Parcelable.Creator<qe> CREATOR = new re();

    /* renamed from: d  reason: collision with root package name */
    private final int f46217d;

    /* renamed from: e  reason: collision with root package name */
    private final PointF f46218e;

    public qe(int i10, PointF pointF) {
        this.f46217d = i10;
        this.f46218e = pointF;
    }

    public final int b() {
        return this.f46217d;
    }

    public final PointF c() {
        return this.f46218e;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f46217d);
        jf.c.q(parcel, 2, this.f46218e, i10, false);
        jf.c.b(parcel, a10);
    }
}
