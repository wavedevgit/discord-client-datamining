package gf;

import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
import gf.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p0 extends hf.a {
    public static final Parcelable.Creator<p0> CREATOR = new q0();

    /* renamed from: d  reason: collision with root package name */
    final int f26856d;

    /* renamed from: e  reason: collision with root package name */
    final IBinder f26857e;

    /* renamed from: i  reason: collision with root package name */
    private final com.google.android.gms.common.b f26858i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f26859o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f26860p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p0(int i10, IBinder iBinder, com.google.android.gms.common.b bVar, boolean z10, boolean z11) {
        this.f26856d = i10;
        this.f26857e = iBinder;
        this.f26858i = bVar;
        this.f26859o = z10;
        this.f26860p = z11;
    }

    public final com.google.android.gms.common.b b() {
        return this.f26858i;
    }

    public final j c() {
        IBinder iBinder = this.f26857e;
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
        if (!this.f26858i.equals(p0Var.f26858i) || !o.a(c(), p0Var.c())) {
            return false;
        }
        return true;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f26856d);
        hf.c.k(parcel, 2, this.f26857e, false);
        hf.c.q(parcel, 3, this.f26858i, i10, false);
        hf.c.c(parcel, 4, this.f26859o);
        hf.c.c(parcel, 5, this.f26860p);
        hf.c.b(parcel, a10);
    }
}
