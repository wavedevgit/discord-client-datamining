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
    private final long f13912d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f13913e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f13914i;

    /* renamed from: o  reason: collision with root package name */
    private final v4 f13915o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(long j10, byte[] bArr, byte[] bArr2, byte[] bArr3) {
        byte[] bArr4 = (byte[]) q.l(bArr);
        v4 v4Var = v4.f14099e;
        v4 o10 = v4.o(bArr4, 0, bArr4.length);
        byte[] bArr5 = (byte[]) q.l(bArr2);
        v4 o11 = v4.o(bArr5, 0, bArr5.length);
        byte[] bArr6 = (byte[]) q.l(bArr3);
        v4 o12 = v4.o(bArr6, 0, bArr6.length);
        this.f13912d = j10;
        this.f13913e = (v4) q.l(o10);
        this.f13914i = (v4) q.l(o11);
        this.f13915o = (v4) q.l(o12);
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (this.f13912d != hVar.f13912d || !o.a(this.f13913e, hVar.f13913e) || !o.a(this.f13914i, hVar.f13914i) || !o.a(this.f13915o, hVar.f13915o)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return o.b(Long.valueOf(this.f13912d), this.f13913e, this.f13914i, this.f13915o);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        long j10 = this.f13912d;
        int a10 = hf.c.a(parcel);
        hf.c.o(parcel, 1, j10);
        hf.c.f(parcel, 2, this.f13913e.p(), false);
        hf.c.f(parcel, 3, this.f13914i.p(), false);
        hf.c.f(parcel, 4, this.f13915o.p(), false);
        hf.c.b(parcel, a10);
    }
}
