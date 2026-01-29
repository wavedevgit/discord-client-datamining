package a6;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final String f432a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private String f433a;

        /* synthetic */ a(p0 p0Var) {
        }

        public m a() {
            if (this.f433a != null) {
                return new m(this, null);
            }
            throw new IllegalArgumentException("Product type must be set");
        }

        public a b(String str) {
            this.f433a = str;
            return this;
        }
    }

    /* synthetic */ m(a aVar, q0 q0Var) {
        this.f432a = aVar.f433a;
    }

    public static a a() {
        return new a(null);
    }

    public final String b() {
        return this.f432a;
    }
}
