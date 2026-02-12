package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m5 extends jf.a {
    public static final Parcelable.Creator<m5> CREATOR = new l4();

    /* renamed from: d  reason: collision with root package name */
    public int f39481d;

    /* renamed from: e  reason: collision with root package name */
    public String[] f39482e;

    public m5(int i10, String[] strArr) {
        this.f39481d = i10;
        this.f39482e = strArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f39481d);
        jf.c.t(parcel, 3, this.f39482e, false);
        jf.c.b(parcel, a10);
    }
}
