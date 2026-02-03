package ug;

import android.os.Parcel;
import android.os.Parcelable;
import gf.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j extends hf.a {
    public static final Parcelable.Creator<j> CREATOR = new k();

    /* renamed from: d  reason: collision with root package name */
    final int f50629d;

    /* renamed from: e  reason: collision with root package name */
    final n0 f50630e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(int i10, n0 n0Var) {
        this.f50629d = i10;
        this.f50630e = n0Var;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f50629d);
        hf.c.q(parcel, 2, this.f50630e, i10, false);
        hf.c.b(parcel, a10);
    }
}
