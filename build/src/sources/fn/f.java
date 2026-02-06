package fn;

import android.view.View;
import dn.j0;
import dn.k0;
import dn.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f {
    /* JADX INFO: Access modifiers changed from: private */
    public static final String b(View view) {
        Object c10;
        n nVar;
        j0 d10 = k0.d(view);
        String str = null;
        if (d10 == null) {
            c10 = null;
        } else {
            c10 = d10.c();
        }
        if (c10 == null) {
            nVar = null;
        } else {
            nVar = (n) c10;
        }
        if (nVar != null) {
            str = nVar.c();
        }
        if (str != null) {
            return str;
        }
        throw new IllegalStateException(("Expected " + view + " to be showing a " + ((Object) n.class.getSimpleName()) + "<*> rendering, found " + nVar).toString());
    }
}
