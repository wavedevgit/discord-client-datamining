package xg;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Status;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends jf.a implements ff.k {
    public static final Parcelable.Creator<h> CREATOR = new i();

    /* renamed from: d  reason: collision with root package name */
    private final List f55033d;

    /* renamed from: e  reason: collision with root package name */
    private final String f55034e;

    public h(List list, String str) {
        this.f55033d = list;
        this.f55034e = str;
    }

    @Override // ff.k
    public final Status a() {
        if (this.f55034e != null) {
            return Status.f13874q;
        }
        return Status.f13878u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        List list = this.f55033d;
        int a10 = jf.c.a(parcel);
        jf.c.u(parcel, 1, list, false);
        jf.c.s(parcel, 2, this.f55034e, false);
        jf.c.b(parcel, a10);
    }
}
