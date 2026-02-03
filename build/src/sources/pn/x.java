package pn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface x {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements x {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f46387a;

        public a(boolean z10) {
            this.f46387a = z10;
        }

        public final boolean a() {
            return this.f46387a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && this.f46387a == ((a) obj).f46387a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Boolean.hashCode(this.f46387a);
        }

        public String toString() {
            boolean z10 = this.f46387a;
            return "Closed(wasRecordingInterrupted=" + z10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements x {

        /* renamed from: a  reason: collision with root package name */
        public static final b f46388a = new b();

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements x {

        /* renamed from: a  reason: collision with root package name */
        public static final c f46389a = new c();

        private c() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements x {

        /* renamed from: a  reason: collision with root package name */
        public static final d f46390a = new d();

        private d() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements x {

        /* renamed from: a  reason: collision with root package name */
        public static final e f46391a = new e();

        private e() {
        }
    }
}
