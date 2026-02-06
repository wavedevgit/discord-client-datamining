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
    private static final Logger f23030f = Logger.getLogger(t.class.getName());

    /* renamed from: a  reason: collision with root package name */
    private final x f23031a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f23032b;

    /* renamed from: c  reason: collision with root package name */
    private final ac.e f23033c;

    /* renamed from: d  reason: collision with root package name */
    private final hc.d f23034d;

    /* renamed from: e  reason: collision with root package name */
    private final ic.b f23035e;

    public c(Executor executor, ac.e eVar, x xVar, hc.d dVar, ic.b bVar) {
        this.f23032b = executor;
        this.f23033c = eVar;
        this.f23031a = xVar;
        this.f23034d = dVar;
        this.f23035e = bVar;
    }

    public static /* synthetic */ Object b(c cVar, o oVar, zb.i iVar) {
        cVar.f23034d.Z0(oVar, iVar);
        cVar.f23031a.b(oVar, 1);
        return null;
    }

    public static /* synthetic */ void c(final c cVar, final o oVar, j jVar, zb.i iVar) {
        cVar.getClass();
        try {
            m a10 = cVar.f23033c.a(oVar.b());
            if (a10 == null) {
                String format = String.format("Transport backend '%s' is not registered", oVar.b());
                f23030f.warning(format);
                jVar.a(new IllegalArgumentException(format));
                return;
            }
            final zb.i a11 = a10.a(iVar);
            cVar.f23035e.k(new b.a() { // from class: fc.b
                @Override // ic.b.a
                public final Object execute() {
                    return c.b(c.this, oVar, a11);
                }
            });
            jVar.a(null);
        } catch (Exception e10) {
            Logger logger = f23030f;
            logger.warning("Error scheduling event " + e10.getMessage());
            jVar.a(e10);
        }
    }

    @Override // fc.e
    public void a(final o oVar, final zb.i iVar, final j jVar) {
        this.f23032b.execute(new Runnable() { // from class: fc.a
            @Override // java.lang.Runnable
            public final void run() {
                c.c(c.this, oVar, jVar, iVar);
            }
        });
    }
}
