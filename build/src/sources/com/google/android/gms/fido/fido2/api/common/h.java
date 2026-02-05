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
    private final long f13949d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f13950e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f13951i;

    /* renamed from: o  reason: collision with root package name */
    private final v4 f13952o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(long j10, byte[] bArr, byte[] bArr2, byte[] bArr3) {
        byte[] bArr4 = (byte[]) q.l(bArr);
        v4 v4Var = v4.f14136e;
        v4 n10 = v4.n(bArr4, 0, bArr4.length);
        byte[] bArr5 = (byte[]) q.l(bArr2);
        v4 n11 = v4.n(bArr5, 0, bArr5.length);
        byte[] bArr6 = (byte[]) q.l(bArr3);
        v4 n12 = v4.n(bArr6, 0, bArr6.length);
        this.f13949d = j10;
        this.f13950e = (v4) q.l(n10);
        this.f13951i = (v4) q.l(n11);
        this.f13952o = (v4) q.l(n12);
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (this.f13949d != hVar.f13949d || !o.a(this.f13950e, hVar.f13950e) || !o.a(this.f13951i, hVar.f13951i) || !o.a(this.f13952o, hVar.f13952o)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return o.b(Long.valueOf(this.f13949d), this.f13950e, this.f13951i, this.f13952o);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        long j10 = this.f13949d;
        int a10 = hf.c.a(parcel);
        hf.c.o(parcel, 1, j10);
        hf.c.f(parcel, 2, this.f13950e.o(), false);
        hf.c.f(parcel, 3, this.f13951i.o(), false);
        hf.c.f(parcel, 4, this.f13952o.o(), false);
        hf.c.b(parcel, a10);
    }
}
