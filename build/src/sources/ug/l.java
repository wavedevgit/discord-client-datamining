package ug;

import android.os.Parcel;
import android.os.Parcelable;
import gf.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l extends hf.a {
    public static final Parcelable.Creator<l> CREATOR = new m();

    /* renamed from: d  reason: collision with root package name */
    final int f50272d;

    /* renamed from: e  reason: collision with root package name */
    private final com.google.android.gms.common.b f50273e;

    /* renamed from: i  reason: collision with root package name */
    private final p0 f50274i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(int i10, com.google.android.gms.common.b bVar, p0 p0Var) {
        this.f50272d = i10;
        this.f50273e = bVar;
        this.f50274i = p0Var;
    }

    public final com.google.android.gms.common.b b() {
        return this.f50273e;
    }

    public final p0 c() {
        return this.f50274i;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f50272d);
        hf.c.q(parcel, 2, this.f50273e, i10, false);
        hf.c.q(parcel, 3, this.f50274i, i10, false);
        hf.c.b(parcel, a10);
    }
}
