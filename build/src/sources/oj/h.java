package oj;

import android.content.Context;
import vi.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        String a(Object obj);
    }

    public static vi.c b(String str, String str2) {
        return vi.c.l(f.a(str, str2), f.class);
    }

    public static vi.c c(final String str, final a aVar) {
        return vi.c.m(f.class).b(q.j(Context.class)).e(new vi.g() { // from class: oj.g
            @Override // vi.g
            public final Object a(vi.d dVar) {
                f a10;
                a10 = f.a(str, aVar.a((Context) dVar.a(Context.class)));
                return a10;
            }
        }).d();
    }
}
