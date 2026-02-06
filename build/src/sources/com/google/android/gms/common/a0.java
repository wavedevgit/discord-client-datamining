package com.google.android.gms.common;

import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class a0 extends y {

    /* renamed from: e  reason: collision with root package name */
    private static final WeakReference f13728e = new WeakReference(null);

    /* renamed from: d  reason: collision with root package name */
    private WeakReference f13729d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a0(byte[] bArr) {
        super(bArr);
        this.f13729d = f13728e;
    }

    protected abstract byte[] W0();

    @Override // com.google.android.gms.common.y
    final byte[] f() {
        byte[] bArr;
        synchronized (this) {
            try {
                bArr = (byte[]) this.f13729d.get();
                if (bArr == null) {
                    bArr = W0();
                    this.f13729d = new WeakReference(bArr);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return bArr;
    }
}
