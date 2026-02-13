package k4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface q {

    /* renamed from: a  reason: collision with root package name */
    public static final b.c f32095a = new b.c();

    /* renamed from: b  reason: collision with root package name */
    public static final b.C0441b f32096b = new b.C0441b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            private final Throwable f32097a;

            public a(Throwable th2) {
                this.f32097a = th2;
            }

            public Throwable a() {
                return this.f32097a;
            }

            public String toString() {
                return "FAILURE (" + this.f32097a.getMessage() + ")";
            }
        }

        /* renamed from: k4.q$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0441b extends b {
            public String toString() {
                return "IN_PROGRESS";
            }

            private C0441b() {
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
