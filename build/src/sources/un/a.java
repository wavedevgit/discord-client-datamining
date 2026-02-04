package un;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: un.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0638a {

        /* renamed from: a  reason: collision with root package name */
        private final double f50754a;

        public C0638a(double d10) {
            this.f50754a = d10;
        }

        public final double a() {
            return this.f50754a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0638a) && Double.compare(this.f50754a, ((C0638a) obj).f50754a) == 0) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Double.hashCode(this.f50754a);
        }

        public String toString() {
            double d10 = this.f50754a;
            return "CameraStats(averageRotation=" + d10 + ")";
        }
    }

    C0638a a();

    void b();

    void c();
}
