package io.sentry.rrweb;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.rrweb.c;
import io.sentry.util.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* renamed from: d  reason: collision with root package name */
    private c f29966d;

    /* renamed from: e  reason: collision with root package name */
    private long f29967e = System.currentTimeMillis();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public boolean a(b bVar, String str, e3 e3Var, ILogger iLogger) {
            str.getClass();
            if (str.equals("type")) {
                bVar.f29966d = (c) y.c((c) e3Var.I0(iLogger, new c.a()), "");
                return true;
            } else if (str.equals("timestamp")) {
                bVar.f29967e = e3Var.nextLong();
                return true;
            } else {
                return false;
            }
        }
    }

    /* renamed from: io.sentry.rrweb.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0407b {
        public void a(b bVar, f3 f3Var, ILogger iLogger) {
            f3Var.e("type").j(iLogger, bVar.f29966d);
            f3Var.e("timestamp").b(bVar.f29967e);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public b(c cVar) {
        this.f29966d = cVar;
    }

    public long e() {
        return this.f29967e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f29967e == bVar.f29967e && this.f29966d == bVar.f29966d) {
            return true;
        }
        return false;
    }

    public void f(long j10) {
        this.f29967e = j10;
    }

    public int hashCode() {
        return y.b(this.f29966d, Long.valueOf(this.f29967e));
    }
}
