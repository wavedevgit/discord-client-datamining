package k4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface q {

    /* renamed from: a  reason: collision with root package name */
    public static final b.c f31452a = new b.c();

    /* renamed from: b  reason: collision with root package name */
    public static final b.C0446b f31453b = new b.C0446b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a extends b {

            /* renamed from: a  reason: collision with root package name */
            private final Throwable f31454a;

            public a(Throwable th2) {
                this.f31454a = th2;
            }

            public Throwable a() {
                return this.f31454a;
            }

            public String toString() {
                return "FAILURE (" + this.f31454a.getMessage() + ")";
            }
        }

        /* renamed from: k4.q$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0446b extends b {
            public String toString() {
                return "IN_PROGRESS";
            }

            private C0446b() {
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
