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
    private static final Logger f24901f = Logger.getLogger(t.class.getName());

    /* renamed from: a  reason: collision with root package name */
    private final x f24902a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f24903b;

    /* renamed from: c  reason: collision with root package name */
    private final ac.e f24904c;

    /* renamed from: d  reason: collision with root package name */
    private final hc.d f24905d;

    /* renamed from: e  reason: collision with root package name */
    private final ic.b f24906e;

    public c(Executor executor, ac.e eVar, x xVar, hc.d dVar, ic.b bVar) {
        this.f24903b = executor;
        this.f24904c = eVar;
        this.f24902a = xVar;
        this.f24905d = dVar;
        this.f24906e = bVar;
    }

    public static /* synthetic */ Object b(c cVar, o oVar, zb.i iVar) {
        cVar.f24905d.Z0(oVar, iVar);
        cVar.f24902a.b(oVar, 1);
        return null;
    }

    public static /* synthetic */ void c(final c cVar, final o oVar, j jVar, zb.i iVar) {
        cVar.getClass();
        try {
            m a10 = cVar.f24904c.a(oVar.b());
            if (a10 == null) {
                String format = String.format("Transport backend '%s' is not registered", oVar.b());
                f24901f.warning(format);
                jVar.a(new IllegalArgumentException(format));
                return;
            }
            final zb.i a11 = a10.a(iVar);
            cVar.f24906e.l(new b.a() { // from class: fc.b
                @Override // ic.b.a
                public final Object execute() {
                    return c.b(c.this, oVar, a11);
                }
            });
            jVar.a(null);
        } catch (Exception e10) {
            Logger logger = f24901f;
            logger.warning("Error scheduling event " + e10.getMessage());
            jVar.a(e10);
        }
    }

    @Override // fc.e
    public void a(final o oVar, final zb.i iVar, final j jVar) {
        this.f24903b.execute(new Runnable() { // from class: fc.a
            @Override // java.lang.Runnable
            public final void run() {
                c.c(c.this, oVar, jVar, iVar);
            }
        });
    }
}
