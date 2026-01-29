package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rl extends hf.a {
    public static final Parcelable.Creator<rl> CREATOR = new km();

    /* renamed from: d  reason: collision with root package name */
    private final String f38620d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38621e;

    /* renamed from: i  reason: collision with root package name */
    private final int f38622i;

    public rl(String str, String str2, int i10) {
        this.f38620d = str;
        this.f38621e = str2;
        this.f38622i = i10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f38620d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.s(parcel, 2, this.f38621e, false);
        hf.c.l(parcel, 3, this.f38622i);
        hf.c.b(parcel, a10);
    }
}
