package xg;

import android.os.Parcel;
import android.os.Parcelable;
import hf.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l extends jf.a {
    public static final Parcelable.Creator<l> CREATOR = new m();

    /* renamed from: d  reason: collision with root package name */
    final int f54769d;

    /* renamed from: e  reason: collision with root package name */
    private final com.google.android.gms.common.b f54770e;

    /* renamed from: i  reason: collision with root package name */
    private final p0 f54771i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(int i10, com.google.android.gms.common.b bVar, p0 p0Var) {
        this.f54769d = i10;
        this.f54770e = bVar;
        this.f54771i = p0Var;
    }

    public final com.google.android.gms.common.b b() {
        return this.f54770e;
    }

    public final p0 c() {
        return this.f54771i;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f54769d);
        jf.c.q(parcel, 2, this.f54770e, i10, false);
        jf.c.q(parcel, 3, this.f54771i, i10, false);
        jf.c.b(parcel, a10);
    }
}
