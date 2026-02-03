package com.google.android.gms.fido.fido2.api.common;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.internal.fido.v4;
import gf.o;
import gf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends hf.a {
    public static final Parcelable.Creator<h> CREATOR = new i();

    /* renamed from: d  reason: collision with root package name */
    private final long f14587d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f14588e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f14589i;

    /* renamed from: o  reason: collision with root package name */
    private final v4 f14590o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(long j10, byte[] bArr, byte[] bArr2, byte[] bArr3) {
        byte[] bArr4 = (byte[]) q.l(bArr);
        v4 v4Var = v4.f14774e;
        v4 m10 = v4.m(bArr4, 0, bArr4.length);
        byte[] bArr5 = (byte[]) q.l(bArr2);
        v4 m11 = v4.m(bArr5, 0, bArr5.length);
        byte[] bArr6 = (byte[]) q.l(bArr3);
        v4 m12 = v4.m(bArr6, 0, bArr6.length);
        this.f14587d = j10;
        this.f14588e = (v4) q.l(m10);
        this.f14589i = (v4) q.l(m11);
        this.f14590o = (v4) q.l(m12);
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (this.f14587d != hVar.f14587d || !o.a(this.f14588e, hVar.f14588e) || !o.a(this.f14589i, hVar.f14589i) || !o.a(this.f14590o, hVar.f14590o)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return o.b(Long.valueOf(this.f14587d), this.f14588e, this.f14589i, this.f14590o);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        long j10 = this.f14587d;
        int a10 = hf.c.a(parcel);
        hf.c.o(parcel, 1, j10);
        hf.c.f(parcel, 2, this.f14588e.n(), false);
        hf.c.f(parcel, 3, this.f14589i.n(), false);
        hf.c.f(parcel, 4, this.f14590o.n(), false);
        hf.c.b(parcel, a10);
    }
}
