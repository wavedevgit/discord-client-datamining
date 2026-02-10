package eg;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import gf.m;
import gf.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends xe.b {
    public b(Context context) {
        super(context);
    }

    @Override // xe.b
    public final Task C() {
        return r(q.a().b(new m() { // from class: eg.j
            @Override // gf.m
            public final void accept(Object obj, Object obj2) {
                ((f) ((i) obj).C()).i(new k(b.this, (zg.k) obj2));
            }
        }).d(c.f22816c).e(1567).a());
    }
}
