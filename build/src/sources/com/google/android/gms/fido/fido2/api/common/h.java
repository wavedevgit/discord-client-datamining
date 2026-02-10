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
    private final long f14052d;

    /* renamed from: e  reason: collision with root package name */
    private final v4 f14053e;

    /* renamed from: i  reason: collision with root package name */
    private final v4 f14054i;

    /* renamed from: o  reason: collision with root package name */
    private final v4 f14055o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(long j10, byte[] bArr, byte[] bArr2, byte[] bArr3) {
        byte[] bArr4 = (byte[]) q.l(bArr);
        v4 v4Var = v4.f14239e;
        v4 o10 = v4.o(bArr4, 0, bArr4.length);
        byte[] bArr5 = (byte[]) q.l(bArr2);
        v4 o11 = v4.o(bArr5, 0, bArr5.length);
        byte[] bArr6 = (byte[]) q.l(bArr3);
        v4 o12 = v4.o(bArr6, 0, bArr6.length);
        this.f14052d = j10;
        this.f14053e = (v4) q.l(o10);
        this.f14054i = (v4) q.l(o11);
        this.f14055o = (v4) q.l(o12);
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (this.f14052d != hVar.f14052d || !o.a(this.f14053e, hVar.f14053e) || !o.a(this.f14054i, hVar.f14054i) || !o.a(this.f14055o, hVar.f14055o)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return o.b(Long.valueOf(this.f14052d), this.f14053e, this.f14054i, this.f14055o);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        long j10 = this.f14052d;
        int a10 = jf.c.a(parcel);
        jf.c.o(parcel, 1, j10);
        jf.c.f(parcel, 2, this.f14053e.p(), false);
        jf.c.f(parcel, 3, this.f14054i.p(), false);
        jf.c.f(parcel, 4, this.f14055o.p(), false);
        jf.c.b(parcel, a10);
    }
}
