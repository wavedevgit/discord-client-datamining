package fc;

import ac.m;
import gc.x;
import ic.b;
import java.util.concurrent.Executor;
import java.util.logging.Logger;
import xb.j;
import zb.o;
import zb.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c implements e {

    /* renamed from: f  reason: collision with root package name */
    private static final Logger f22729f = Logger.getLogger(t.class.getName());

    /* renamed from: a  reason: collision with root package name */
    private final x f22730a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f22731b;

    /* renamed from: c  reason: collision with root package name */
    private final ac.e f22732c;

    /* renamed from: d  reason: collision with root package name */
    private final hc.d f22733d;

    /* renamed from: e  reason: collision with root package name */
    private final ic.b f22734e;

    public c(Executor executor, ac.e eVar, x xVar, hc.d dVar, ic.b bVar) {
        this.f22731b = executor;
        this.f22732c = eVar;
        this.f22730a = xVar;
        this.f22733d = dVar;
        this.f22734e = bVar;
    }

    public static /* synthetic */ Object b(c cVar, o oVar, zb.i iVar) {
        cVar.f22733d.a1(oVar, iVar);
        cVar.f22730a.b(oVar, 1);
        return null;
    }

    public static /* synthetic */ void c(final c cVar, final o oVar, j jVar, zb.i iVar) {
        cVar.getClass();
        try {
            m a10 = cVar.f22732c.a(oVar.b());
            if (a10 == null) {
                String format = String.format("Transport backend '%s' is not registered", oVar.b());
                f22729f.warning(format);
                jVar.a(new IllegalArgumentException(format));
                return;
            }
            final zb.i a11 = a10.a(iVar);
            cVar.f22734e.k(new b.a() { // from class: fc.b
                @Override // ic.b.a
                public final Object execute() {
                    return c.b(c.this, oVar, a11);
                }
            });
            jVar.a(null);
        } catch (Exception e10) {
            Logger logger = f22729f;
            logger.warning("Error scheduling event " + e10.getMessage());
            jVar.a(e10);
        }
    }

    @Override // fc.e
    public void a(final o oVar, final zb.i iVar, final j jVar) {
        this.f22731b.execute(new Runnable() { // from class: fc.a
            @Override // java.lang.Runnable
            public final void run() {
                c.c(c.this, oVar, jVar, iVar);
            }
        });
    }
}
