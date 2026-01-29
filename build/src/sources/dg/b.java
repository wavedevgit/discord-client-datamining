package dg;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ff.m;
import ff.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends we.b {
    public b(Context context) {
        super(context);
    }

    @Override // we.b
    public final Task C() {
        return r(q.a().b(new m() { // from class: dg.j
            @Override // ff.m
            public final void accept(Object obj, Object obj2) {
                ((f) ((i) obj).C()).h(new k(b.this, (wg.k) obj2));
            }
        }).d(c.f22154c).e(1567).a());
    }
}
