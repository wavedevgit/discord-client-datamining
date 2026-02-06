package com.google.android.gms.net;

import android.os.Trace;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e implements AutoCloseable {
    public e(String str) {
        Trace.beginSection(str);
    }

    @Override // java.lang.AutoCloseable
    public final void close() {
        Trace.endSection();
    }
}
