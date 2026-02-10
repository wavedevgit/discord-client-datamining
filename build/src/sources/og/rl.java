package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rl extends jf.a {
    public static final Parcelable.Creator<rl> CREATOR = new km();

    /* renamed from: d  reason: collision with root package name */
    private final String f41311d;

    /* renamed from: e  reason: collision with root package name */
    private final String f41312e;

    /* renamed from: i  reason: collision with root package name */
    private final int f41313i;

    public rl(String str, String str2, int i10) {
        this.f41311d = str;
        this.f41312e = str2;
        this.f41313i = i10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f41311d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.s(parcel, 2, this.f41312e, false);
        jf.c.l(parcel, 3, this.f41313i);
        jf.c.b(parcel, a10);
    }
}
