package a0;

import a0.r0;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface e2 extends r0 {
    @Override // a0.r0
    default Object a(r0.a aVar) {
        return getConfig().a(aVar);
    }

    @Override // a0.r0
    default Set b() {
        return getConfig().b();
    }

    @Override // a0.r0
    default Object c(r0.a aVar, r0.c cVar) {
        return getConfig().c(aVar, cVar);
    }

    @Override // a0.r0
    default Set d(r0.a aVar) {
        return getConfig().d(aVar);
    }

    @Override // a0.r0
    default Object e(r0.a aVar, Object obj) {
        return getConfig().e(aVar, obj);
    }

    @Override // a0.r0
    default r0.c f(r0.a aVar) {
        return getConfig().f(aVar);
    }

    @Override // a0.r0
    default void g(String str, r0.b bVar) {
        getConfig().g(str, bVar);
    }

    r0 getConfig();

    @Override // a0.r0
    default boolean h(r0.a aVar) {
        return getConfig().h(aVar);
    }
}
