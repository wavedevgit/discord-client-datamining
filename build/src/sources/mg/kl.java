package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class kl extends hf.a {
    public static final Parcelable.Creator<kl> CREATOR = new am();

    /* renamed from: d  reason: collision with root package name */
    private final int f38411d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38412e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38413i;

    /* renamed from: o  reason: collision with root package name */
    private final String f38414o;

    public kl(int i10, String str, String str2, String str3) {
        this.f38411d = i10;
        this.f38412e = str;
        this.f38413i = str2;
        this.f38414o = str3;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f38411d);
        hf.c.s(parcel, 2, this.f38412e, false);
        hf.c.s(parcel, 3, this.f38413i, false);
        hf.c.s(parcel, 4, this.f38414o, false);
        hf.c.b(parcel, a10);
    }
}
