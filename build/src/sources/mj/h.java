package mj;

import android.content.Context;
import ti.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        String a(Object obj);
    }

    public static ti.c b(String str, String str2) {
        return ti.c.l(f.a(str, str2), f.class);
    }

    public static ti.c c(final String str, final a aVar) {
        return ti.c.m(f.class).b(q.j(Context.class)).e(new ti.g() { // from class: mj.g
            @Override // ti.g
            public final Object a(ti.d dVar) {
                f a10;
                a10 = f.a(str, aVar.a((Context) dVar.a(Context.class)));
                return a10;
            }
        }).d();
    }
}
