package jt;

import java.util.List;
import jt.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a implements l0 {
    public boolean b() {
        List a10 = a();
        int size = a10.size();
        for (int i10 = 0; i10 < size; i10++) {
            if (((l0.a) a10.get(i10)).a() > 0) {
                return false;
            }
        }
        return true;
    }
}
