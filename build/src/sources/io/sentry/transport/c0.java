package io.sentry.transport;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c0 {

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends c0 {

        /* renamed from: a  reason: collision with root package name */
        private final int f28877a;

        b(int i10) {
            super();
            this.f28877a = i10;
        }

        @Override // io.sentry.transport.c0
        public int c() {
            return this.f28877a;
        }

        @Override // io.sentry.transport.c0
        public boolean d() {
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class c extends c0 {

        /* renamed from: a  reason: collision with root package name */
        static final c f28878a = new c();

        private c() {
            super();
        }

        @Override // io.sentry.transport.c0
        public int c() {
            return -1;
        }

        @Override // io.sentry.transport.c0
        public boolean d() {
            return true;
        }
    }

    public static c0 a() {
        return b(-1);
    }

    public static c0 b(int i10) {
        return new b(i10);
    }

    public static c0 e() {
        return c.f28878a;
    }

    public abstract int c();

    public abstract boolean d();

    private c0() {
    }
}
