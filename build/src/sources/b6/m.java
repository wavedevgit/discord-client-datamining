package b6;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final String f6420a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private String f6421a;

        /* synthetic */ a(p0 p0Var) {
        }

        public m a() {
            if (this.f6421a != null) {
                return new m(this, null);
            }
            throw new IllegalArgumentException("Product type must be set");
        }

        public a b(String str) {
            this.f6421a = str;
            return this;
        }
    }

    /* synthetic */ m(a aVar, q0 q0Var) {
        this.f6420a = aVar.f6421a;
    }

    public static a a() {
        return new a(null);
    }

    public final String b() {
        return this.f6420a;
    }
}
