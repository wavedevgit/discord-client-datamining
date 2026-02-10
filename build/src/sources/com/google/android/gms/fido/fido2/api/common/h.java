package com.google.android.gms.fido.fido2.api.common;

import android.os.Parcel;
import android.os.Parcelable;
import com.google.android.gms.internal.fido.v4;
import hf.o;
import hf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h extends jf.a {
    public static final Parcelable.Creator<h> CREATOR = new i();

    /* renamed from: d  reason: collision with root package name */
    private final long f14629d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f14630e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f14631i;

    /* renamed from: o  reason: collision with root package name */
    private final v4 f14632o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(long j10, byte[] bArr, byte[] bArr2, byte[] bArr3) {
        byte[] bArr4 = (byte[]) q.l(bArr);
        v4 v4Var = v4.f14816e;
        v4 o10 = v4.o(bArr4, 0, bArr4.length);
        byte[] bArr5 = (byte[]) q.l(bArr2);
        v4 o11 = v4.o(bArr5, 0, bArr5.length);
        byte[] bArr6 = (byte[]) q.l(bArr3);
        v4 o12 = v4.o(bArr6, 0, bArr6.length);
        this.f14629d = j10;
        this.f14630e = (v4) q.l(o10);
        this.f14631i = (v4) q.l(o11);
        this.f14632o = (v4) q.l(o12);
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (this.f14629d != hVar.f14629d || !o.a(this.f14630e, hVar.f14630e) || !o.a(this.f14631i, hVar.f14631i) || !o.a(this.f14632o, hVar.f14632o)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return o.b(Long.valueOf(this.f14629d), this.f14630e, this.f14631i, this.f14632o);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        long j10 = this.f14629d;
        int a10 = jf.c.a(parcel);
        jf.c.o(parcel, 1, j10);
        jf.c.f(parcel, 2, this.f14630e.p(), false);
        jf.c.f(parcel, 3, this.f14631i.p(), false);
        jf.c.f(parcel, 4, this.f14632o.p(), false);
        jf.c.b(parcel, a10);
    }
}
