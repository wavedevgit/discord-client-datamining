package nj;

import android.content.Context;
import ui.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        String a(Object obj);
    }

    public static ui.c b(String str, String str2) {
        return ui.c.l(f.a(str, str2), f.class);
    }

    public static ui.c c(final String str, final a aVar) {
        return ui.c.m(f.class).b(q.j(Context.class)).e(new ui.g() { // from class: nj.g
            @Override // ui.g
            public final Object a(ui.d dVar) {
                f a10;
                a10 = f.a(str, aVar.a((Context) dVar.a(Context.class)));
                return a10;
            }
        }).d();
    }
}
