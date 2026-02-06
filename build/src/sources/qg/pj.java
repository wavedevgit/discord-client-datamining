package qg;

import android.content.Context;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class pj implements mj {

    /* renamed from: a  reason: collision with root package name */
    final List f47457a;

    public pj(Context context, oj ojVar) {
        ArrayList arrayList = new ArrayList();
        this.f47457a = arrayList;
        if (ojVar.c()) {
            arrayList.add(new fk(context, ojVar));
        }
    }

    @Override // qg.mj
    public final void a(lj ljVar) {
        for (mj mjVar : this.f47457a) {
            mjVar.a(ljVar);
        }
    }
}
