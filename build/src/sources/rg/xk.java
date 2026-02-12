package rg;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class xk extends jf.a {
    public static final Parcelable.Creator<xk> CREATOR = new yk();

    /* renamed from: d  reason: collision with root package name */
    private final String f47354d;

    /* renamed from: e  reason: collision with root package name */
    private final List f47355e;

    public xk(String str, List list) {
        this.f47354d = str;
        this.f47355e = list;
    }

    public final String b() {
        return this.f47354d;
    }

    public final List c() {
        return this.f47355e;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f47354d;
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, str, false);
        jf.c.w(parcel, 2, this.f47355e, false);
        jf.c.b(parcel, a10);
    }
}
