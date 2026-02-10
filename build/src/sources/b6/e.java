package b6;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private String f6520a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f6521a;

        /* synthetic */ a(a0 a0Var) {
        }

        public e a() {
            String str = this.f6521a;
            if (str != null) {
                e eVar = new e(null);
                eVar.f6520a = str;
                return eVar;
            }
            throw new IllegalArgumentException("Purchase token must be set");
        }

        public a b(String str) {
            this.f6521a = str;
            return this;
        }
    }

    /* synthetic */ e(b0 b0Var) {
    }

    public static a b() {
        return new a(null);
    }

    public String a() {
        return this.f6520a;
    }
}
