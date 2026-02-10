package gc;

import ac.o;
import ac.t;
import bc.m;
import hc.x;
import java.util.concurrent.Executor;
import java.util.logging.Logger;
import jc.b;
import yb.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c implements e {

    /* renamed from: f  reason: collision with root package name */
    private static final Logger f24115f = Logger.getLogger(t.class.getName());

    /* renamed from: a  reason: collision with root package name */
    private final x f24116a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f24117b;

    /* renamed from: c  reason: collision with root package name */
    private final bc.e f24118c;

    /* renamed from: d  reason: collision with root package name */
    private final ic.d f24119d;

    /* renamed from: e  reason: collision with root package name */
    private final jc.b f24120e;

    public c(Executor executor, bc.e eVar, x xVar, ic.d dVar, jc.b bVar) {
        this.f24117b = executor;
        this.f24118c = eVar;
        this.f24116a = xVar;
        this.f24119d = dVar;
        this.f24120e = bVar;
    }

    public static /* synthetic */ Object b(c cVar, o oVar, ac.i iVar) {
        cVar.f24119d.v1(oVar, iVar);
        cVar.f24116a.b(oVar, 1);
        return null;
    }

    public static /* synthetic */ void c(final c cVar, final o oVar, j jVar, ac.i iVar) {
        cVar.getClass();
        try {
            m a10 = cVar.f24118c.a(oVar.b());
            if (a10 == null) {
                String format = String.format("Transport backend '%s' is not registered", oVar.b());
                f24115f.warning(format);
                jVar.a(new IllegalArgumentException(format));
                return;
            }
            final ac.i a11 = a10.a(iVar);
            cVar.f24120e.m(new b.a() { // from class: gc.b
                @Override // jc.b.a
                public final Object execute() {
                    return c.b(c.this, oVar, a11);
                }
            });
            jVar.a(null);
        } catch (Exception e10) {
            Logger logger = f24115f;
            logger.warning("Error scheduling event " + e10.getMessage());
            jVar.a(e10);
        }
    }

    @Override // gc.e
    public void a(final o oVar, final ac.i iVar, final j jVar) {
        this.f24117b.execute(new Runnable() { // from class: gc.a
            @Override // java.lang.Runnable
            public final void run() {
                c.c(c.this, oVar, jVar, iVar);
            }
        });
    }
}
