package io.sentry.util;

import io.sentry.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r {

    /* renamed from: b  reason: collision with root package name */
    private final a f30144b;

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f30143a = null;

    /* renamed from: c  reason: collision with root package name */
    private final io.sentry.util.a f30145c = new io.sentry.util.a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        Object a();
    }

    public r(a aVar) {
        this.f30144b = aVar;
    }

    public Object a() {
        if (this.f30143a == null) {
            a1 a10 = this.f30145c.a();
            try {
                if (this.f30143a == null) {
                    this.f30143a = this.f30144b.a();
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
        return this.f30143a;
    }

    public void b() {
        a1 a10 = this.f30145c.a();
        try {
            this.f30143a = null;
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
        a1 a10 = this.f30145c.a();
        try {
            this.f30143a = obj;
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
