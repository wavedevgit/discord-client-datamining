package vp;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: vp.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0699a implements a {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f52860a;

        public C0699a(boolean z10) {
            this.f52860a = z10;
        }

        public final boolean a() {
            return this.f52860a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0699a) && this.f52860a == ((C0699a) obj).f52860a) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Boolean.hashCode(this.f52860a);
        }

        public String toString() {
            boolean z10 = this.f52860a;
            return "CancelRequest(force=" + z10 + ")";
        }
    }
}
