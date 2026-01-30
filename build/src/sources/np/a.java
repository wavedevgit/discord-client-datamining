package np;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: np.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0522a implements a {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f42039a;

        public C0522a(boolean z10) {
            this.f42039a = z10;
        }

        public final boolean a() {
            return this.f42039a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0522a) && this.f42039a == ((C0522a) obj).f42039a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Boolean.hashCode(this.f42039a);
        }

        public String toString() {
            boolean z10 = this.f42039a;
            return "CancelRequest(force=" + z10 + ")";
        }
    }
}
