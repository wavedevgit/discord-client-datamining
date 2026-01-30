package og;

import android.graphics.PointF;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c2 extends hf.a {
    public static final Parcelable.Creator<c2> CREATOR = new d3();

    /* renamed from: d  reason: collision with root package name */
    public final PointF[] f42788d;

    /* renamed from: e  reason: collision with root package name */
    public final int f42789e;

    public c2(PointF[] pointFArr, int i10) {
        this.f42788d = pointFArr;
        this.f42789e = i10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.v(parcel, 2, this.f42788d, i10, false);
        hf.c.l(parcel, 3, this.f42789e);
        hf.c.b(parcel, a10);
    }
}
