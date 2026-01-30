package io.sentry.rrweb;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.rrweb.c;
import io.sentry.util.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: d  reason: collision with root package name */
    private c f30653d;

    /* renamed from: e  reason: collision with root package name */
    private long f30654e = System.currentTimeMillis();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public boolean a(b bVar, String str, e3 e3Var, ILogger iLogger) {
            str.getClass();
            if (str.equals("type")) {
                bVar.f30653d = (c) y.c((c) e3Var.G0(iLogger, new c.a()), "");
                return true;
            } else if (str.equals("timestamp")) {
                bVar.f30654e = e3Var.nextLong();
                return true;
            } else {
                return false;
            }
        }
    }

    /* renamed from: io.sentry.rrweb.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0403b {
        public void a(b bVar, f3 f3Var, ILogger iLogger) {
            f3Var.e("type").j(iLogger, bVar.f30653d);
            f3Var.e("timestamp").b(bVar.f30654e);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public b(c cVar) {
        this.f30653d = cVar;
    }

    public long e() {
        return this.f30654e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f30654e == bVar.f30654e && this.f30653d == bVar.f30653d) {
            return true;
        }
        return false;
    }

    public void f(long j10) {
        this.f30654e = j10;
    }

    public int hashCode() {
        return y.b(this.f30653d, Long.valueOf(this.f30654e));
    }
}
