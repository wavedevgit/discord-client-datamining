package io.sentry.transport;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c0 {

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends c0 {

        /* renamed from: a  reason: collision with root package name */
        private final int f30675a;

        b(int i10) {
            super();
            this.f30675a = i10;
        }

        @Override // io.sentry.transport.c0
        public int c() {
            return this.f30675a;
        }

        @Override // io.sentry.transport.c0
        public boolean d() {
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class c extends c0 {

        /* renamed from: a  reason: collision with root package name */
        static final c f30676a = new c();

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
        return c.f30676a;
    }

    public abstract int c();

    public abstract boolean d();

    private c0() {
    }
}
