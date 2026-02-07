package ts;

import java.util.Iterator;
import java.util.List;
import java.util.ServiceLoader;
import os.c1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t {

    /* renamed from: a  reason: collision with root package name */
    public static final t f50914a;

    /* renamed from: b  reason: collision with root package name */
    public static final c1 f50915b;

    static {
        t tVar = new t();
        f50914a = tVar;
        f0.f("kotlinx.coroutines.fast.service.loader", true);
        f50915b = tVar.a();
    }

    private t() {
    }

    private final c1 a() {
        Object next;
        c1 e10;
        try {
            List Y = kotlin.sequences.k.Y(kotlin.sequences.k.h(ServiceLoader.load(s.class, s.class.getClassLoader()).iterator()));
            Iterator it = Y.iterator();
            if (!it.hasNext()) {
                next = null;
            } else {
                next = it.next();
                if (it.hasNext()) {
                    int c10 = ((s) next).c();
                    do {
                        Object next2 = it.next();
                        int c11 = ((s) next2).c();
                        if (c10 < c11) {
                            next = next2;
                            c10 = c11;
                        }
                    } while (it.hasNext());
                }
            }
            s sVar = (s) next;
            if (sVar != null && (e10 = u.e(sVar, Y)) != null) {
                return e10;
            }
            u.b(null, null, 3, null);
            return null;
        } catch (Throwable th2) {
            u.b(th2, null, 2, null);
            return null;
        }
    }
}
