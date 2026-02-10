package k8;

import java.util.Collection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        long a();

        String getId();

        long getSize();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        i8.a a(Object obj);

        void b(j8.i iVar, Object obj);

        boolean l();
    }

    void a();

    void b();

    boolean c(String str, Object obj);

    b d(String str, Object obj);

    boolean e(String str, Object obj);

    i8.a f(String str, Object obj);

    Collection g();

    long h(a aVar);

    boolean isExternal();

    long remove(String str);
}
