package og;

import android.content.Context;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class gk implements dk {

    /* renamed from: a  reason: collision with root package name */
    final List f40914a;

    public gk(Context context, fk fkVar) {
        ArrayList arrayList = new ArrayList();
        this.f40914a = arrayList;
        if (fkVar.c()) {
            arrayList.add(new vk(context, fkVar));
        }
    }

    @Override // og.dk
    public final void a(ck ckVar) {
        for (dk dkVar : this.f40914a) {
            dkVar.a(ckVar);
        }
    }
}
