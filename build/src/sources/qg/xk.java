package qg;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class xk extends hf.a {
    public static final Parcelable.Creator<xk> CREATOR = new yk();

    /* renamed from: d  reason: collision with root package name */
    private final String f47733d;

    /* renamed from: e  reason: collision with root package name */
    private final List f47734e;

    public xk(String str, List list) {
        this.f47733d = str;
        this.f47734e = list;
    }

    public final String b() {
        return this.f47733d;
    }

    public final List c() {
        return this.f47734e;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f47733d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.w(parcel, 2, this.f47734e, false);
        hf.c.b(parcel, a10);
    }
}
