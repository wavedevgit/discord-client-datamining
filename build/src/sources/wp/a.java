package wp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: wp.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0752a implements a {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f53887a;

        public C0752a(boolean z10) {
            this.f53887a = z10;
        }

        public final boolean a() {
            return this.f53887a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0752a) && this.f53887a == ((C0752a) obj).f53887a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Boolean.hashCode(this.f53887a);
        }

        public String toString() {
            boolean z10 = this.f53887a;
            return "CancelRequest(force=" + z10 + ")";
        }
    }
}
