package com.google.android.gms.common;

import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class y extends w {

    /* renamed from: e  reason: collision with root package name */
    private static final WeakReference f13855e = new WeakReference(null);

    /* renamed from: d  reason: collision with root package name */
    private WeakReference f13856d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(byte[] bArr) {
        super(bArr);
        this.f13856d = f13855e;
    }

    protected abstract byte[] W0();

    @Override // com.google.android.gms.common.w
    final byte[] f() {
        byte[] bArr;
        synchronized (this) {
            try {
                bArr = (byte[]) this.f13856d.get();
                if (bArr == null) {
                    bArr = W0();
                    this.f13856d = new WeakReference(bArr);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return bArr;
    }
}
