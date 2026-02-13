package mg;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ff.a;
import ff.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l extends ff.d implements vg.i {
    public l(Context context) {
        super(context, g.f37027l, a.d.f23724g, d.a.f23736c);
    }

    @Override // vg.i
    public final Task l(final vg.d dVar) {
        return p(gf.q.a().b(new gf.m() { // from class: mg.m
            @Override // gf.m
            public final /* synthetic */ void accept(Object obj, Object obj2) {
                boolean z10;
                zg.k kVar = (zg.k) obj2;
                o oVar = (o) obj;
                vg.d dVar2 = vg.d.this;
                if (dVar2 != null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                hf.q.b(z10, "locationSettingsRequest can't be null");
                ((f0) oVar.C()).N0(dVar2, new n(kVar), null);
            }
        }).e(2426).a());
    }
}
