package io.sentry.android.core.internal.util;

import android.os.StrictMode;
import io.sentry.util.runtime.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements io.sentry.util.runtime.a {
    public static /* synthetic */ Object c(Runnable runnable) {
        runnable.run();
        return null;
    }

    @Override // io.sentry.util.runtime.a
    public Object a(a.InterfaceC0434a interfaceC0434a) {
        StrictMode.ThreadPolicy threadPolicy = StrictMode.getThreadPolicy();
        StrictMode.VmPolicy vmPolicy = StrictMode.getVmPolicy();
        StrictMode.setThreadPolicy(StrictMode.ThreadPolicy.LAX);
        StrictMode.setVmPolicy(StrictMode.VmPolicy.LAX);
        try {
            return interfaceC0434a.run();
        } finally {
            StrictMode.setThreadPolicy(threadPolicy);
            StrictMode.setVmPolicy(vmPolicy);
        }
    }

    @Override // io.sentry.util.runtime.a
    public void b(final Runnable runnable) {
        a(new a.InterfaceC0434a() { // from class: io.sentry.android.core.internal.util.g
            @Override // io.sentry.util.runtime.a.InterfaceC0434a
            public final Object run() {
                return h.c(runnable);
            }
        });
    }
}
