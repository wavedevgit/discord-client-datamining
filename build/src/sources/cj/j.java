package cj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface j {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        NONE(0),
        SDK(1),
        GLOBAL(2),
        COMBINED(3);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f7656d;

        a(int i10) {
            this.f7656d = i10;
        }

        public int d() {
            return this.f7656d;
        }
    }

    a b(String str);
}
