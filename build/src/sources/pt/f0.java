package pt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f0 {

    /* renamed from: a  reason: collision with root package name */
    public static final f0 f46601a = a(0);

    /* renamed from: b  reason: collision with root package name */
    public static final f0 f46602b = a(-21600);

    /* renamed from: c  reason: collision with root package name */
    public static final f0 f46603c = a(21600);

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b extends f0 {

        /* renamed from: d  reason: collision with root package name */
        private final int f46604d;

        @Override // pt.f0
        public int b(g gVar, net.time4j.tz.k kVar) {
            return this.f46604d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if ((obj instanceof b) && this.f46604d == ((b) obj).f46604d) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f46604d;
        }

        public String toString() {
            return "FixedStartOfDay[" + this.f46604d + "]";
        }

        private b(int i10) {
            this.f46604d = i10;
        }
    }

    protected f0() {
    }

    private static f0 a(int i10) {
        return new b(i10);
    }

    public abstract int b(g gVar, net.time4j.tz.k kVar);
}
