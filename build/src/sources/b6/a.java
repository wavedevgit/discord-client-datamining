package b6;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private String f6518a;

    /* renamed from: b6.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0094a {

        /* renamed from: a  reason: collision with root package name */
        private String f6519a;

        /* synthetic */ C0094a(o oVar) {
        }

        public a a() {
            String str = this.f6519a;
            if (str != null) {
                a aVar = new a(null);
                aVar.f6518a = str;
                return aVar;
            }
            throw new IllegalArgumentException("Purchase token must be set");
        }

        public C0094a b(String str) {
            this.f6519a = str;
            return this;
        }
    }

    /* synthetic */ a(p pVar) {
    }

    public static C0094a b() {
        return new C0094a(null);
    }

    public String a() {
        return this.f6518a;
    }
}
