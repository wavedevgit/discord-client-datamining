package com.google.android.gms.internal.fido;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e2 extends g2 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public e2() {
        ByteBuffer.allocate(8).order(ByteOrder.LITTLE_ENDIAN);
    }

    @Override // com.google.android.gms.internal.fido.k2
    public final k2 b(byte[] bArr) {
        bArr.getClass();
        c(bArr, 0, bArr.length);
        return this;
    }

    protected abstract void c(byte[] bArr, int i10, int i11);
}
