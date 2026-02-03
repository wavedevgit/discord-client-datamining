package un;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: un.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0638a {

        /* renamed from: a  reason: collision with root package name */
        private final double f50757a;

        public C0638a(double d10) {
            this.f50757a = d10;
        }

        public final double a() {
            return this.f50757a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0638a) && Double.compare(this.f50757a, ((C0638a) obj).f50757a) == 0) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Double.hashCode(this.f50757a);
        }

        public String toString() {
            double d10 = this.f50757a;
            return "CameraStats(averageRotation=" + d10 + ")";
        }
    }

    C0638a a();

    void b();

    void c();
}
