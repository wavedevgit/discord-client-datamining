package b6;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private String f6412a;

    /* renamed from: b6.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0130a {

        /* renamed from: a  reason: collision with root package name */
        private String f6413a;

        /* synthetic */ C0130a(o oVar) {
        }

        public a a() {
            String str = this.f6413a;
            if (str != null) {
                a aVar = new a(null);
                aVar.f6412a = str;
                return aVar;
            }
            throw new IllegalArgumentException("Purchase token must be set");
        }

        public C0130a b(String str) {
            this.f6413a = str;
            return this;
        }
    }

    /* synthetic */ a(p pVar) {
    }

    public static C0130a b() {
        return new C0130a(null);
    }

    public String a() {
        return this.f6412a;
    }
}
