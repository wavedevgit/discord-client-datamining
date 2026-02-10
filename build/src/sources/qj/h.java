package qj;

import android.content.Context;
import xi.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        String a(Object obj);
    }

    public static xi.c b(String str, String str2) {
        return xi.c.l(f.a(str, str2), f.class);
    }

    public static xi.c c(final String str, final a aVar) {
        return xi.c.m(f.class).b(q.j(Context.class)).e(new xi.g() { // from class: qj.g
            @Override // xi.g
            public final Object a(xi.d dVar) {
                f a10;
                a10 = f.a(str, aVar.a((Context) dVar.a(Context.class)));
                return a10;
            }
        }).d();
    }
}
