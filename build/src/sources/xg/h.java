package xg;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Status;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h extends jf.a implements ff.k {
    public static final Parcelable.Creator<h> CREATOR = new i();

    /* renamed from: d  reason: collision with root package name */
    private final List f55334d;

    /* renamed from: e  reason: collision with root package name */
    private final String f55335e;

    public h(List list, String str) {
        this.f55334d = list;
        this.f55335e = str;
    }

    @Override // ff.k
    public final Status a() {
        if (this.f55335e != null) {
            return Status.f14452q;
        }
        return Status.f14456u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        List list = this.f55334d;
        int a10 = jf.c.a(parcel);
        jf.c.u(parcel, 1, list, false);
        jf.c.s(parcel, 2, this.f55335e, false);
        jf.c.b(parcel, a10);
    }
}
