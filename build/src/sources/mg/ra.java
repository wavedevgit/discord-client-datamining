package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ra extends hf.a {
    public static final Parcelable.Creator<ra> CREATOR = new b();

    /* renamed from: d  reason: collision with root package name */
    public int f38407d;

    /* renamed from: e  reason: collision with root package name */
    public String f38408e;

    /* renamed from: i  reason: collision with root package name */
    public String f38409i;

    /* renamed from: o  reason: collision with root package name */
    public String f38410o;

    public ra(int i10, String str, String str2, String str3) {
        this.f38407d = i10;
        this.f38408e = str;
        this.f38409i = str2;
        this.f38410o = str3;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f38407d);
        hf.c.s(parcel, 3, this.f38408e, false);
        hf.c.s(parcel, 4, this.f38409i, false);
        hf.c.s(parcel, 5, this.f38410o, false);
        hf.c.b(parcel, a10);
    }
}
