package io.sentry.rrweb;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.rrweb.c;
import io.sentry.util.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: d  reason: collision with root package name */
    private c f28830d;

    /* renamed from: e  reason: collision with root package name */
    private long f28831e = System.currentTimeMillis();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public boolean a(b bVar, String str, e3 e3Var, ILogger iLogger) {
            str.getClass();
            if (str.equals("type")) {
                bVar.f28830d = (c) y.c((c) e3Var.G0(iLogger, new c.a()), "");
                return true;
            } else if (str.equals("timestamp")) {
                bVar.f28831e = e3Var.nextLong();
                return true;
            } else {
                return false;
            }
        }
    }

    /* renamed from: io.sentry.rrweb.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0406b {
        public void a(b bVar, f3 f3Var, ILogger iLogger) {
            f3Var.e("type").j(iLogger, bVar.f28830d);
            f3Var.e("timestamp").b(bVar.f28831e);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public b(c cVar) {
        this.f28830d = cVar;
    }

    public long e() {
        return this.f28831e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f28831e == bVar.f28831e && this.f28830d == bVar.f28830d) {
            return true;
        }
        return false;
    }

    public void f(long j10) {
        this.f28831e = j10;
    }

    public int hashCode() {
        return y.b(this.f28830d, Long.valueOf(this.f28831e));
    }
}
