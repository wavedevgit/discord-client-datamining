package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fl extends jf.a {
    public static final Parcelable.Creator<fl> CREATOR = new el();

    /* renamed from: d  reason: collision with root package name */
    private final int f39212d;

    /* renamed from: e  reason: collision with root package name */
    private final String[] f39213e;

    public fl(int i10, String[] strArr) {
        this.f39212d = i10;
        this.f39213e = strArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f39212d);
        jf.c.t(parcel, 2, this.f39213e, false);
        jf.c.b(parcel, a10);
    }
}
