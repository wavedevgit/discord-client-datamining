package j8;

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
        h8.a a(Object obj);

        void b(i8.i iVar, Object obj);

        boolean l();
    }

    void a();

    long b(a aVar);

    void c();

    boolean d(String str, Object obj);

    b e(String str, Object obj);

    boolean f(String str, Object obj);

    h8.a g(String str, Object obj);

    Collection h();

    boolean isExternal();

    long remove(String str);
}
