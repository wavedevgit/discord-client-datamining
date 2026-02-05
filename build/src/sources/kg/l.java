package kg;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ef.a;
import ef.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l extends ef.d implements tg.i {
    public l(Context context) {
        super(context, g.f31812l, a.d.f21557f, d.a.f21569c);
    }

    @Override // tg.i
    public final Task k(final tg.d dVar) {
        return p(ff.q.a().b(new ff.m() { // from class: kg.m
            @Override // ff.m
            public final /* synthetic */ void accept(Object obj, Object obj2) {
                boolean z10;
                xg.k kVar = (xg.k) obj2;
                o oVar = (o) obj;
                tg.d dVar2 = tg.d.this;
                if (dVar2 != null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                gf.q.b(z10, "locationSettingsRequest can't be null");
                ((f0) oVar.C()).P(dVar2, new n(kVar), null);
            }
        }).e(2426).a());
    }
}
