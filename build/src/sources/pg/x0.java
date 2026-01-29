package pg;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x0 extends o1 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public x0(Iterator it) {
        super(it);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // pg.o1
    public final /* synthetic */ Object a(Object obj) {
        return ((Map.Entry) obj).getValue();
    }
}
