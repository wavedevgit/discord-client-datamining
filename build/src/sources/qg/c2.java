package qg;

import android.graphics.PointF;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c2 extends jf.a {
    public static final Parcelable.Creator<c2> CREATOR = new d3();

    /* renamed from: d  reason: collision with root package name */
    public final PointF[] f44194d;

    /* renamed from: e  reason: collision with root package name */
    public final int f44195e;

    public c2(PointF[] pointFArr, int i10) {
        this.f44194d = pointFArr;
        this.f44195e = i10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.v(parcel, 2, this.f44194d, i10, false);
        jf.c.l(parcel, 3, this.f44195e);
        jf.c.b(parcel, a10);
    }
}
