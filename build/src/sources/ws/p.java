package ws;

import java.util.List;
import kotlin.collections.CollectionsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class p {
    /* JADX INFO: Access modifiers changed from: private */
    public static final List b(o oVar) {
        List c10 = CollectionsKt.c();
        c(c10, oVar);
        return CollectionsKt.a(c10);
    }

    private static final void c(List list, o oVar) {
        if (oVar instanceof e) {
            list.add(((e) oVar).c());
        } else if (oVar instanceof h) {
            for (s sVar : ((h) oVar).c()) {
                c(list, sVar);
            }
        } else if (!(oVar instanceof j)) {
            if (oVar instanceof y) {
                c(list, ((y) oVar).f());
            } else if (oVar instanceof c) {
                c cVar = (c) oVar;
                c(list, cVar.d());
                for (o oVar2 : cVar.c()) {
                    c(list, oVar2);
                }
            } else if (oVar instanceof t) {
                c(list, ((t) oVar).d());
            }
        }
    }
}
