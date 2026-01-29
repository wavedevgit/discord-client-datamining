package com.google.android.gms.common;

import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class w extends u {

    /* renamed from: e  reason: collision with root package name */
    private static final WeakReference f14861e = new WeakReference(null);

    /* renamed from: d  reason: collision with root package name */
    private WeakReference f14862d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w(byte[] bArr) {
        super(bArr);
        this.f14862d = f14861e;
    }

    protected abstract byte[] S0();

    @Override // com.google.android.gms.common.u
    final byte[] h() {
        byte[] bArr;
        synchronized (this) {
            try {
                bArr = (byte[]) this.f14862d.get();
                if (bArr == null) {
                    bArr = S0();
                    this.f14862d = new WeakReference(bArr);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return bArr;
    }
}
