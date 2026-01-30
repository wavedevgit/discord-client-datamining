package mn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface x {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements x {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f39352a;

        public a(boolean z10) {
            this.f39352a = z10;
        }

        public final boolean a() {
            return this.f39352a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof a) && this.f39352a == ((a) obj).f39352a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Boolean.hashCode(this.f39352a);
        }

        public String toString() {
            boolean z10 = this.f39352a;
            return "Closed(wasRecordingInterrupted=" + z10 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements x {

        /* renamed from: a  reason: collision with root package name */
        public static final b f39353a = new b();

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c implements x {

        /* renamed from: a  reason: collision with root package name */
        public static final c f39354a = new c();

        private c() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements x {

        /* renamed from: a  reason: collision with root package name */
        public static final d f39355a = new d();

        private d() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements x {

        /* renamed from: a  reason: collision with root package name */
        public static final e f39356a = new e();

        private e() {
        }
    }
}
