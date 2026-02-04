package ug;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Status;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends hf.a implements ef.k {
    public static final Parcelable.Creator<h> CREATOR = new i();

    /* renamed from: d  reason: collision with root package name */
    private final List f50624d;

    /* renamed from: e  reason: collision with root package name */
    private final String f50625e;

    public h(List list, String str) {
        this.f50624d = list;
        this.f50625e = str;
    }

    @Override // ef.k
    public final Status a() {
        if (this.f50625e != null) {
            return Status.f13386q;
        }
        return Status.f13390u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        List list = this.f50624d;
        int a10 = hf.c.a(parcel);
        hf.c.u(parcel, 1, list, false);
        hf.c.s(parcel, 2, this.f50625e, false);
        hf.c.b(parcel, a10);
    }
}
