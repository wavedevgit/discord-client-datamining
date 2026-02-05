package k5;

import java.io.FileNotFoundException;
import java.io.IOException;
import ou.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e {
    public static final void a(ou.h hVar, c0 c0Var) {
        if (!hVar.j(c0Var)) {
            k.d(hVar.o(c0Var));
        }
    }

    public static final void b(ou.h hVar, c0 c0Var) {
        try {
            IOException iOException = null;
            for (c0 c0Var2 : hVar.k(c0Var)) {
                try {
                    if (hVar.l(c0Var2).e()) {
                        b(hVar, c0Var2);
                    }
                    hVar.h(c0Var2);
                } catch (IOException e10) {
                    if (iOException == null) {
                        iOException = e10;
                    }
                }
            }
            if (iOException == null) {
                return;
            }
            throw iOException;
        } catch (FileNotFoundException unused) {
        }
    }
}
