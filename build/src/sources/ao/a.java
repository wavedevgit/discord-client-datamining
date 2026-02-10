package ao;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: ao.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0084a {

        /* renamed from: a  reason: collision with root package name */
        private final double f5923a;

        public C0084a(double d10) {
            this.f5923a = d10;
        }

        public final double a() {
            return this.f5923a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0084a) && Double.compare(this.f5923a, ((C0084a) obj).f5923a) == 0) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Double.hashCode(this.f5923a);
        }

        public String toString() {
            double d10 = this.f5923a;
            return "CameraStats(averageRotation=" + d10 + ")";
        }
    }

    C0084a a();

    void b();

    void c();
}
