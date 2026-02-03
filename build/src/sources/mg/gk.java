package mg;

import android.content.Context;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class gk implements dk {

    /* renamed from: a  reason: collision with root package name */
    final List f38016a;

    public gk(Context context, fk fkVar) {
        ArrayList arrayList = new ArrayList();
        this.f38016a = arrayList;
        if (fkVar.c()) {
            arrayList.add(new vk(context, fkVar));
        }
    }

    @Override // mg.dk
    public final void a(ck ckVar) {
        for (dk dkVar : this.f38016a) {
            dkVar.a(ckVar);
        }
    }
}
