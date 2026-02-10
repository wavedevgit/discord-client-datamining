package io.sentry.util;

import io.sentry.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r {

    /* renamed from: b  reason: collision with root package name */
    private final a f29209b;

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f29208a = null;

    /* renamed from: c  reason: collision with root package name */
    private final io.sentry.util.a f29210c = new io.sentry.util.a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        Object a();
    }

    public r(a aVar) {
        this.f29209b = aVar;
    }

    public Object a() {
        if (this.f29208a == null) {
            a1 a10 = this.f29210c.a();
            try {
                if (this.f29208a == null) {
                    this.f29208a = this.f29209b.a();
                }
                if (a10 != null) {
                    a10.close();
                }
            } catch (Throwable th2) {
                if (a10 != null) {
                    try {
                        a10.close();
                    } catch (Throwable th3) {
                        th2.addSuppressed(th3);
                    }
                }
                throw th2;
            }
        }
        return this.f29208a;
    }

    public void b() {
        a1 a10 = this.f29210c.a();
        try {
            this.f29208a = null;
            if (a10 != null) {
                a10.close();
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public void c(Object obj) {
        a1 a10 = this.f29210c.a();
        try {
            this.f29208a = obj;
            if (a10 != null) {
                a10.close();
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }
}
