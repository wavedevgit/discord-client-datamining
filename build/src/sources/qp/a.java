package qp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: qp.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0580a implements a {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f48017a;

        public C0580a(boolean z10) {
            this.f48017a = z10;
        }

        public final boolean a() {
            return this.f48017a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0580a) && this.f48017a == ((C0580a) obj).f48017a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Boolean.hashCode(this.f48017a);
        }

        public String toString() {
            boolean z10 = this.f48017a;
            return "CancelRequest(force=" + z10 + ")";
        }
    }
}
