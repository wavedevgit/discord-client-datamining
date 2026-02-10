package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fl extends jf.a {
    public static final Parcelable.Creator<fl> CREATOR = new el();

    /* renamed from: d  reason: collision with root package name */
    private final int f40885d;

    /* renamed from: e  reason: collision with root package name */
    private final String[] f40886e;

    public fl(int i10, String[] strArr) {
        this.f40885d = i10;
        this.f40886e = strArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f40885d);
        jf.c.t(parcel, 2, this.f40886e, false);
        jf.c.b(parcel, a10);
    }
}
