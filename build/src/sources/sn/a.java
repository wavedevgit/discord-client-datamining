package sn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {

    /* renamed from: sn.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0610a {

        /* renamed from: a  reason: collision with root package name */
        private final double f49161a;

        public C0610a(double d10) {
            this.f49161a = d10;
        }

        public final double a() {
            return this.f49161a;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof C0610a) && Double.compare(this.f49161a, ((C0610a) obj).f49161a) == 0) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return Double.hashCode(this.f49161a);
        }

        public String toString() {
            double d10 = this.f49161a;
            return "CameraStats(averageRotation=" + d10 + ")";
        }
    }

    C0610a a();

    void b();

    void c();
}
