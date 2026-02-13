package qg;

import android.content.Context;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class hd implements pd {

    /* renamed from: a  reason: collision with root package name */
    final List f45107a;

    public hd(Context context, gd gdVar) {
        ArrayList arrayList = new ArrayList();
        this.f45107a = arrayList;
        if (gdVar.c()) {
            arrayList.add(new yd(context, gdVar));
        }
    }

    @Override // qg.pd
    public final void a(ed edVar) {
        for (pd pdVar : this.f45107a) {
            pdVar.a(edVar);
        }
    }
}
