package ug;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.common.api.Status;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends hf.a implements ef.k {
    public static final Parcelable.Creator<h> CREATOR = new i();

    /* renamed from: d  reason: collision with root package name */
    private final List f50340d;

    /* renamed from: e  reason: collision with root package name */
    private final String f50341e;

    public h(List list, String str) {
        this.f50340d = list;
        this.f50341e = str;
    }

    @Override // ef.k
    public final Status a() {
        if (this.f50341e != null) {
            return Status.f14418q;
        }
        return Status.f14422u;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        List list = this.f50340d;
        int a10 = hf.c.a(parcel);
        hf.c.u(parcel, 1, list, false);
        hf.c.s(parcel, 2, this.f50341e, false);
        hf.c.b(parcel, a10);
    }
}
