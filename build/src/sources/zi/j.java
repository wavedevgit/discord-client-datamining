package zi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface j {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        NONE(0),
        SDK(1),
        GLOBAL(2),
        COMBINED(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f55862d;

        a(int i10) {
            this.f55862d = i10;
        }

        public int d() {
            return this.f55862d;
        }
    }

    a b(String str);
}
