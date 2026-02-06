package io.sentry;

import io.sentry.util.r;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j8 implements w1 {

    /* renamed from: e  reason: collision with root package name */
    public static final j8 f28229e = new j8("00000000-0000-0000-0000-000000000000".replace("-", "").substring(0, 16));

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.util.r f28230d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public j8 a(e3 e3Var, ILogger iLogger) {
            return new j8(e3Var.e1());
        }
    }

    public j8(final String str) {
        Objects.requireNonNull(str, "value is required");
        this.f28230d = new io.sentry.util.r(new r.a() { // from class: io.sentry.i8
            @Override // io.sentry.util.r.a
            public final Object a() {
                return j8.a(str);
            }
        });
    }

    public static /* synthetic */ String a(String str) {
        return str;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && j8.class == obj.getClass()) {
            return ((String) this.f28230d.a()).equals(((j8) obj).f28230d.a());
        }
        return false;
    }

    public int hashCode() {
        return ((String) this.f28230d.a()).hashCode();
    }

    @Override // io.sentry.w1
    public void serialize(f3 f3Var, ILogger iLogger) {
        f3Var.f((String) this.f28230d.a());
    }

    public String toString() {
        return (String) this.f28230d.a();
    }

    public j8() {
        this.f28230d = new io.sentry.util.r(new r.a() { // from class: io.sentry.h8
            @Override // io.sentry.util.r.a
            public final Object a() {
                return x7.b();
            }
        });
    }
}
