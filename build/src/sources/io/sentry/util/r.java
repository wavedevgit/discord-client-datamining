package io.sentry.util;

import io.sentry.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r {

    /* renamed from: b  reason: collision with root package name */
    private final a f30816b;

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f30815a = null;

    /* renamed from: c  reason: collision with root package name */
    private final io.sentry.util.a f30817c = new io.sentry.util.a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        Object a();
    }

    public r(a aVar) {
        this.f30816b = aVar;
    }

    public Object a() {
        if (this.f30815a == null) {
            a1 a10 = this.f30817c.a();
            try {
                if (this.f30815a == null) {
                    this.f30815a = this.f30816b.a();
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
        return this.f30815a;
    }

    public void b() {
        a1 a10 = this.f30817c.a();
        try {
            this.f30815a = null;
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
        a1 a10 = this.f30817c.a();
        try {
            this.f30815a = obj;
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
