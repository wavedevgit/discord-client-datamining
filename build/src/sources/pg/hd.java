package pg;

import android.content.Context;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class hd implements pd {

    /* renamed from: a  reason: collision with root package name */
    final List f44308a;

    public hd(Context context, gd gdVar) {
        ArrayList arrayList = new ArrayList();
        this.f44308a = arrayList;
        if (gdVar.c()) {
            arrayList.add(new yd(context, gdVar));
        }
    }

    @Override // pg.pd
    public final void a(ed edVar) {
        for (pd pdVar : this.f44308a) {
            pdVar.a(edVar);
        }
    }
}
