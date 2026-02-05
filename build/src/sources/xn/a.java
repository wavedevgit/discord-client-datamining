package xn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: xn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0715a {

        /* renamed from: a  reason: collision with root package name */
        private final double f53993a;

        public C0715a(double d10) {
            this.f53993a = d10;
        }

        public final double a() {
            return this.f53993a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0715a) && Double.compare(this.f53993a, ((C0715a) obj).f53993a) == 0) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Double.hashCode(this.f53993a);
        }

        public String toString() {
            double d10 = this.f53993a;
            return "CameraStats(averageRotation=" + d10 + ")";
        }
    }

    C0715a a();

    void b();

    void c();
}
