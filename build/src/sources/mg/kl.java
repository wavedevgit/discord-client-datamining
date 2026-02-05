package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class kl extends hf.a {
    public static final Parcelable.Creator<kl> CREATOR = new am();

    /* renamed from: d  reason: collision with root package name */
    private final int f37870d;

    /* renamed from: e  reason: collision with root package name */
    private final String f37871e;

    /* renamed from: i  reason: collision with root package name */
    private final String f37872i;

    /* renamed from: o  reason: collision with root package name */
    private final String f37873o;

    public kl(int i10, String str, String str2, String str3) {
        this.f37870d = i10;
        this.f37871e = str;
        this.f37872i = str2;
        this.f37873o = str3;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f37870d);
        hf.c.s(parcel, 2, this.f37871e, false);
        hf.c.s(parcel, 3, this.f37872i, false);
        hf.c.s(parcel, 4, this.f37873o, false);
        hf.c.b(parcel, a10);
    }
}
