package og;

import android.content.Context;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sb implements pb {

    /* renamed from: a  reason: collision with root package name */
    final List f42450a;

    public sb(Context context, rb rbVar) {
        ArrayList arrayList = new ArrayList();
        this.f42450a = arrayList;
        if (rbVar.c()) {
            arrayList.add(new cc(context, rbVar));
        }
    }

    @Override // og.pb
    public final void a(ob obVar) {
        for (pb pbVar : this.f42450a) {
            pbVar.a(obVar);
        }
    }
}
