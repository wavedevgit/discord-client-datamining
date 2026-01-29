package zb;

import zb.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class n {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a {
        public abstract n a();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract a b(xb.c cVar);

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract a c(xb.d dVar);

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract a d(xb.g gVar);

        public abstract a e(o oVar);

        public abstract a f(String str);
    }

    public static a a() {
        return new c.b();
    }

    public abstract xb.c b();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract xb.d c();

    public byte[] d() {
        return (byte[]) e().apply(c().b());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract xb.g e();

    public abstract o f();

    public abstract String g();
}
