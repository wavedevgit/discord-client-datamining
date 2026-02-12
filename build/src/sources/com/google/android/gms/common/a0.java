package com.google.android.gms.common;

import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class a0 extends y {

    /* renamed from: e  reason: collision with root package name */
    private static final WeakReference f14446e = new WeakReference(null);

    /* renamed from: d  reason: collision with root package name */
    private WeakReference f14447d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(byte[] bArr) {
        super(bArr);
        this.f14447d = f14446e;
    }

    protected abstract byte[] W0();

    @Override // com.google.android.gms.common.y
    final byte[] f() {
        byte[] bArr;
        synchronized (this) {
            try {
                bArr = (byte[]) this.f14447d.get();
                if (bArr == null) {
                    bArr = W0();
                    this.f14447d = new WeakReference(bArr);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return bArr;
    }
}
