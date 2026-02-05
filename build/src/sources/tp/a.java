package tp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: tp.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0653a implements a {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f50884a;

        public C0653a(boolean z10) {
            this.f50884a = z10;
        }

        public final boolean a() {
            return this.f50884a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0653a) && this.f50884a == ((C0653a) obj).f50884a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Boolean.hashCode(this.f50884a);
        }

        public String toString() {
            boolean z10 = this.f50884a;
            return "CancelRequest(force=" + z10 + ")";
        }
    }
}
