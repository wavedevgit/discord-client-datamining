package og;

import android.content.Context;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class hd implements pd {

    /* renamed from: a  reason: collision with root package name */
    final List f42966a;

    public hd(Context context, gd gdVar) {
        ArrayList arrayList = new ArrayList();
        this.f42966a = arrayList;
        if (gdVar.c()) {
            arrayList.add(new yd(context, gdVar));
        }
    }

    @Override // og.pd
    public final void a(ed edVar) {
        for (pd pdVar : this.f42966a) {
            pdVar.a(edVar);
        }
    }
}
