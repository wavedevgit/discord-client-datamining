package jj;

import android.content.Context;
import qi.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        String a(Object obj);
    }

    public static qi.c b(String str, String str2) {
        return qi.c.l(f.a(str, str2), f.class);
    }

    public static qi.c c(final String str, final a aVar) {
        return qi.c.m(f.class).b(q.j(Context.class)).e(new qi.g() { // from class: jj.g
            @Override // qi.g
            public final Object a(qi.d dVar) {
                f a10;
                a10 = f.a(str, aVar.a((Context) dVar.a(Context.class)));
                return a10;
            }
        }).d();
    }
}
