package ng;

import android.content.Context;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sb implements pb {

    /* renamed from: a  reason: collision with root package name */
    final List f41636a;

    public sb(Context context, rb rbVar) {
        ArrayList arrayList = new ArrayList();
        this.f41636a = arrayList;
        if (rbVar.c()) {
            arrayList.add(new cc(context, rbVar));
        }
    }

    @Override // ng.pb
    public final void a(ob obVar) {
        for (pb pbVar : this.f41636a) {
            pbVar.a(obVar);
        }
    }
}
