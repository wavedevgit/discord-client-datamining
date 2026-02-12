package fq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: fq.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0325a implements a {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f24183a;

        public C0325a(boolean z10) {
            this.f24183a = z10;
        }

        public final boolean a() {
            return this.f24183a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0325a) && this.f24183a == ((C0325a) obj).f24183a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Boolean.hashCode(this.f24183a);
        }

        public String toString() {
            boolean z10 = this.f24183a;
            return "CancelRequest(force=" + z10 + ")";
        }
    }
}
