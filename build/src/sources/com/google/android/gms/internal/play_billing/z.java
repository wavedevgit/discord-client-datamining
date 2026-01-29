package com.google.android.gms.internal.play_billing;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class z implements v2 {
    protected int zza = 0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int d(g3 g3Var);

    public final byte[] e() {
        try {
            int c10 = c();
            byte[] bArr = new byte[c10];
            z0 y10 = z0.y(bArr, 0, c10);
            b(y10);
            y10.z();
            return bArr;
        } catch (IOException e10) {
            String name = getClass().getName();
            throw new RuntimeException("Serializing " + name + " to a byte array threw an IOException (should never happen).", e10);
        }
    }
}
