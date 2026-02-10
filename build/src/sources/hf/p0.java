package hf;

import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
import hf.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p0 extends jf.a {
    public static final Parcelable.Creator<p0> CREATOR = new q0();

    /* renamed from: d  reason: collision with root package name */
    final int f27306d;

    /* renamed from: e  reason: collision with root package name */
    final IBinder f27307e;

    /* renamed from: i  reason: collision with root package name */
    private final com.google.android.gms.common.b f27308i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f27309o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f27310p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p0(int i10, IBinder iBinder, com.google.android.gms.common.b bVar, boolean z10, boolean z11) {
        this.f27306d = i10;
        this.f27307e = iBinder;
        this.f27308i = bVar;
        this.f27309o = z10;
        this.f27310p = z11;
    }

    public final com.google.android.gms.common.b b() {
        return this.f27308i;
    }

    public final j c() {
        IBinder iBinder = this.f27307e;
        if (iBinder == null) {
            return null;
        }
        return j.a.f(iBinder);
    }

    public final boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof p0)) {
            return false;
        }
        p0 p0Var = (p0) obj;
        if (!this.f27308i.equals(p0Var.f27308i) || !o.a(c(), p0Var.c())) {
            return false;
        }
        return true;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f27306d);
        jf.c.k(parcel, 2, this.f27307e, false);
        jf.c.q(parcel, 3, this.f27308i, i10, false);
        jf.c.c(parcel, 4, this.f27309o);
        jf.c.c(parcel, 5, this.f27310p);
        jf.c.b(parcel, a10);
    }
}
