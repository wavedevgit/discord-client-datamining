package qs;

import java.util.concurrent.CancellationException;
import os.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract /* synthetic */ class o {
    public static final void a(v vVar, Throwable th2) {
        CancellationException cancellationException = null;
        if (th2 != null) {
            if (th2 instanceof CancellationException) {
                cancellationException = (CancellationException) th2;
            }
            if (cancellationException == null) {
                cancellationException = s0.a("Channel was consumed, consumer had failed", th2);
            }
        }
        vVar.k(cancellationException);
    }
}
