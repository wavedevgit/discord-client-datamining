package com.google.android.gms.internal.fido;

import java.util.logging.Logger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b4 {

    /* renamed from: a  reason: collision with root package name */
    private final t0 f14647a = new t0();

    /* renamed from: b  reason: collision with root package name */
    private final String f14648b;

    /* renamed from: c  reason: collision with root package name */
    private volatile Logger f14649c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b4(Class cls) {
        this.f14648b = cls.getName();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Logger a() {
        Logger logger = this.f14649c;
        if (logger != null) {
            return logger;
        }
        synchronized (this.f14647a) {
            try {
                Logger logger2 = this.f14649c;
                if (logger2 != null) {
                    return logger2;
                }
                Logger logger3 = Logger.getLogger(this.f14648b);
                this.f14649c = logger3;
                return logger3;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
