package op;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: op.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0552a implements a {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f44593a;

        public C0552a(boolean z10) {
            this.f44593a = z10;
        }

        public final boolean a() {
            return this.f44593a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0552a) && this.f44593a == ((C0552a) obj).f44593a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Boolean.hashCode(this.f44593a);
        }

        public String toString() {
            boolean z10 = this.f44593a;
            return "CancelRequest(force=" + z10 + ")";
        }
    }
}
