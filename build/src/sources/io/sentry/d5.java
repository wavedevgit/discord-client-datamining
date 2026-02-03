package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d5 implements k5 {

    /* renamed from: a  reason: collision with root package name */
    private final k5 f29858a;

    public d5() {
        if (a()) {
            this.f29858a = new t6();
        } else {
            this.f29858a = new d7();
        }
    }

    private static boolean a() {
        if (io.sentry.util.a0.c() && io.sentry.util.a0.b()) {
            return true;
        }
        return false;
    }

    @Override // io.sentry.k5
    public j5 now() {
        return this.f29858a.now();
    }
}
