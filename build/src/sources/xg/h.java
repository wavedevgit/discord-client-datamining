package xg;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Status;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends jf.a implements ff.k {
    public static final Parcelable.Creator<h> CREATOR = new i();

    /* renamed from: d  reason: collision with root package name */
    private final List f54766d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54767e;

    public h(List list, String str) {
        this.f54766d = list;
        this.f54767e = str;
    }

    @Override // ff.k
    public final Status a() {
        if (this.f54767e != null) {
            return Status.f14452q;
        }
        return Status.f14456u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        List list = this.f54766d;
        int a10 = jf.c.a(parcel);
        jf.c.u(parcel, 1, list, false);
        jf.c.s(parcel, 2, this.f54767e, false);
        jf.c.b(parcel, a10);
    }
}
