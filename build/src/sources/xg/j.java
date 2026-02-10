package xg;

import android.os.Parcel;
import android.os.Parcelable;
import hf.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j extends jf.a {
    public static final Parcelable.Creator<j> CREATOR = new k();

    /* renamed from: d  reason: collision with root package name */
    final int f54767d;

    /* renamed from: e  reason: collision with root package name */
    final n0 f54768e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(int i10, n0 n0Var) {
        this.f54767d = i10;
        this.f54768e = n0Var;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f54767d);
        jf.c.q(parcel, 2, this.f54768e, i10, false);
        jf.c.b(parcel, a10);
    }
}
