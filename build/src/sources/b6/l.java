package b6;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final String f6524a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private String f6525a;

        /* synthetic */ a(n0 n0Var) {
        }

        public l a() {
            if (this.f6525a != null) {
                return new l(this, null);
            }
            throw new IllegalArgumentException("Product type must be set");
        }

        public a b(String str) {
            this.f6525a = str;
            return this;
        }
    }

    /* synthetic */ l(a aVar, o0 o0Var) {
        this.f6524a = aVar.f6525a;
    }

    public static a a() {
        return new a(null);
    }

    public final String b() {
        return this.f6524a;
    }
}
