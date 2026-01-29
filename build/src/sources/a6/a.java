package a6;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private String f424a;

    /* renamed from: a6.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0004a {

        /* renamed from: a  reason: collision with root package name */
        private String f425a;

        /* synthetic */ C0004a(o oVar) {
        }

        public a a() {
            String str = this.f425a;
            if (str != null) {
                a aVar = new a(null);
                aVar.f424a = str;
                return aVar;
            }
            throw new IllegalArgumentException("Purchase token must be set");
        }

        public C0004a b(String str) {
            this.f425a = str;
            return this;
        }
    }

    /* synthetic */ a(p pVar) {
    }

    public static C0004a b() {
        return new C0004a(null);
    }

    public String a() {
        return this.f424a;
    }
}
