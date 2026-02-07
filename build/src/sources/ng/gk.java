package ng;

import android.content.Context;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class gk implements dk {

    /* renamed from: a  reason: collision with root package name */
    final List f39889a;

    public gk(Context context, fk fkVar) {
        ArrayList arrayList = new ArrayList();
        this.f39889a = arrayList;
        if (fkVar.c()) {
            arrayList.add(new vk(context, fkVar));
        }
    }

    @Override // ng.dk
    public final void a(ck ckVar) {
        for (dk dkVar : this.f39889a) {
            dkVar.a(ckVar);
        }
    }
}
