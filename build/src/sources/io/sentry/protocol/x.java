package io.sentry.protocol;

import io.sentry.ILogger;
import io.sentry.e3;
import io.sentry.f3;
import io.sentry.m1;
import io.sentry.util.l0;
import io.sentry.util.r;
import io.sentry.w1;
import io.sentry.x7;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x implements w1 {

    /* renamed from: e  reason: collision with root package name */
    public static final x f30486e = new x("00000000-0000-0000-0000-000000000000".replace("-", ""));

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.util.r f30487d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public x a(e3 e3Var, ILogger iLogger) {
            return new x(e3Var.e1());
        }
    }

    public x() {
        this((UUID) null);
    }

    public static /* synthetic */ String a(x xVar, UUID uuid) {
        xVar.getClass();
        return xVar.d(l0.c(uuid));
    }

    public static /* synthetic */ String b(String str) {
        return str;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public String d(String str) {
        return io.sentry.util.f0.e(str).replace("-", "");
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && x.class == obj.getClass()) {
            return ((String) this.f30487d.a()).equals(((x) obj).f30487d.a());
        }
        return false;
    }

    public int hashCode() {
        return ((String) this.f30487d.a()).hashCode();
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.f(toString());
    }

    public String toString() {
        return (String) this.f30487d.a();
    }

    public x(final UUID uuid) {
        if (uuid != null) {
            this.f30487d = new io.sentry.util.r(new r.a() { // from class: io.sentry.protocol.t
                @Override // io.sentry.util.r.a
                public final Object a() {
                    return x.a(x.this, uuid);
                }
            });
        } else {
            this.f30487d = new io.sentry.util.r(new r.a() { // from class: io.sentry.protocol.u
                @Override // io.sentry.util.r.a
                public final Object a() {
                    return x7.a();
                }
            });
        }
    }

    public x(String str) {
        final String e10 = io.sentry.util.f0.e(str);
        if (e10.length() != 32 && e10.length() != 36) {
            throw new IllegalArgumentException("String representation of SentryId has either 32 (UUID no dashes) or 36 characters long (completed UUID). Received: " + str);
        } else if (e10.length() == 36) {
            this.f30487d = new io.sentry.util.r(new r.a() { // from class: io.sentry.protocol.v
                @Override // io.sentry.util.r.a
                public final Object a() {
                    String d10;
                    d10 = x.this.d(e10);
                    return d10;
                }
            });
        } else {
            this.f30487d = new io.sentry.util.r(new r.a() { // from class: io.sentry.protocol.w
                @Override // io.sentry.util.r.a
                public final Object a() {
                    return x.b(e10);
                }
            });
        }
    }
}
