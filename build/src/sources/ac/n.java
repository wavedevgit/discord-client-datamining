package ac;

import ac.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class n {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a {
        public abstract n a();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract a b(yb.c cVar);

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract a c(yb.d dVar);

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract a d(yb.g gVar);

        public abstract a e(o oVar);

        public abstract a f(String str);
    }

    public static a a() {
        return new c.b();
    }

    public abstract yb.c b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract yb.d c();

    public byte[] d() {
        return (byte[]) e().apply(c().b());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract yb.g e();

    public abstract o f();

    public abstract String g();
}
