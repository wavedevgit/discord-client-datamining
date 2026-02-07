package lg;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ef.a;
import ef.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l extends ef.d implements ug.i {
    public l(Context context) {
        super(context, g.f36253l, a.d.f21490c, d.a.f21502c);
    }

    @Override // ug.i
    public final Task k(final ug.d dVar) {
        return p(ff.q.a().b(new ff.m() { // from class: lg.m
            @Override // ff.m
            public final /* synthetic */ void accept(Object obj, Object obj2) {
                boolean z10;
                yg.k kVar = (yg.k) obj2;
                o oVar = (o) obj;
                ug.d dVar2 = ug.d.this;
                if (dVar2 != null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                gf.q.b(z10, "locationSettingsRequest can't be null");
                ((f0) oVar.C()).x0(dVar2, new n(kVar), null);
            }
        }).e(2426).a());
    }
}
