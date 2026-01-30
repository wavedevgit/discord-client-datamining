package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fl extends hf.a {
    public static final Parcelable.Creator<fl> CREATOR = new el();

    /* renamed from: d  reason: collision with root package name */
    private final int f38210d;

    /* renamed from: e  reason: collision with root package name */
    private final String[] f38211e;

    public fl(int i10, String[] strArr) {
        this.f38210d = i10;
        this.f38211e = strArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f38210d);
        hf.c.t(parcel, 2, this.f38211e, false);
        hf.c.b(parcel, a10);
    }
}
