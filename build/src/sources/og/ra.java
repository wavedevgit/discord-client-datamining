package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ra extends jf.a {
    public static final Parcelable.Creator<ra> CREATOR = new b();

    /* renamed from: d  reason: collision with root package name */
    public int f40200d;

    /* renamed from: e  reason: collision with root package name */
    public String f40201e;

    /* renamed from: i  reason: collision with root package name */
    public String f40202i;

    /* renamed from: o  reason: collision with root package name */
    public String f40203o;

    public ra(int i10, String str, String str2, String str3) {
        this.f40200d = i10;
        this.f40201e = str;
        this.f40202i = str2;
        this.f40203o = str3;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f40200d);
        jf.c.s(parcel, 3, this.f40201e, false);
        jf.c.s(parcel, 4, this.f40202i, false);
        jf.c.s(parcel, 5, this.f40203o, false);
        jf.c.b(parcel, a10);
    }
}
