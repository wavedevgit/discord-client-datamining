package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class kl extends hf.a {
    public static final Parcelable.Creator<kl> CREATOR = new am();

    /* renamed from: d  reason: collision with root package name */
    private final int f38431d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38432e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38433i;

    /* renamed from: o  reason: collision with root package name */
    private final String f38434o;

    public kl(int i10, String str, String str2, String str3) {
        this.f38431d = i10;
        this.f38432e = str;
        this.f38433i = str2;
        this.f38434o = str3;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f38431d);
        hf.c.s(parcel, 2, this.f38432e, false);
        hf.c.s(parcel, 3, this.f38433i, false);
        hf.c.s(parcel, 4, this.f38434o, false);
        hf.c.b(parcel, a10);
    }
}
