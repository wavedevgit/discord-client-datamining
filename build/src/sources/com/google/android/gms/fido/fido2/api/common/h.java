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
    private final long f13555d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f13556e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f13557i;

    /* renamed from: o  reason: collision with root package name */
    private final v4 f13558o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(long j10, byte[] bArr, byte[] bArr2, byte[] bArr3) {
        byte[] bArr4 = (byte[]) q.l(bArr);
        v4 v4Var = v4.f13742e;
        v4 m10 = v4.m(bArr4, 0, bArr4.length);
        byte[] bArr5 = (byte[]) q.l(bArr2);
        v4 m11 = v4.m(bArr5, 0, bArr5.length);
        byte[] bArr6 = (byte[]) q.l(bArr3);
        v4 m12 = v4.m(bArr6, 0, bArr6.length);
        this.f13555d = j10;
        this.f13556e = (v4) q.l(m10);
        this.f13557i = (v4) q.l(m11);
        this.f13558o = (v4) q.l(m12);
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (this.f13555d != hVar.f13555d || !o.a(this.f13556e, hVar.f13556e) || !o.a(this.f13557i, hVar.f13557i) || !o.a(this.f13558o, hVar.f13558o)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return o.b(Long.valueOf(this.f13555d), this.f13556e, this.f13557i, this.f13558o);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        long j10 = this.f13555d;
        int a10 = hf.c.a(parcel);
        hf.c.o(parcel, 1, j10);
        hf.c.f(parcel, 2, this.f13556e.n(), false);
        hf.c.f(parcel, 3, this.f13557i.n(), false);
        hf.c.f(parcel, 4, this.f13558o.n(), false);
        hf.c.b(parcel, a10);
    }
}
