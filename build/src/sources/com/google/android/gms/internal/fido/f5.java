package com.google.android.gms.internal.fido;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f5 extends IOException {
    public f5(String str) {
        super(str);
    }

    public f5(String str, Throwable th2) {
        super("Error in decoding CborValue from bytes", th2);
    }
}
