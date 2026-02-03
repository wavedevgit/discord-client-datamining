package k4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface q {

    /* renamed from: a  reason: collision with root package name */
    public static final b.c f32145a = new b.c();

    /* renamed from: b  reason: collision with root package name */
    public static final b.C0432b f32146b = new b.C0432b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            private final Throwable f32147a;

            public a(Throwable th2) {
                this.f32147a = th2;
            }

            public Throwable a() {
                return this.f32147a;
            }

            public String toString() {
                return "FAILURE (" + this.f32147a.getMessage() + ")";
            }
        }

        /* renamed from: k4.q$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0432b extends b {
            public String toString() {
                return "IN_PROGRESS";
            }

            private C0432b() {
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class c extends b {
            public String toString() {
                return "SUCCESS";
            }

            private c() {
            }
        }

        b() {
        }
    }
}
