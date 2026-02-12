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
    private static final Logger f25416f = Logger.getLogger(t.class.getName());

    /* renamed from: a  reason: collision with root package name */
    private final x f25417a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f25418b;

    /* renamed from: c  reason: collision with root package name */
    private final bc.e f25419c;

    /* renamed from: d  reason: collision with root package name */
    private final ic.d f25420d;

    /* renamed from: e  reason: collision with root package name */
    private final jc.b f25421e;

    public c(Executor executor, bc.e eVar, x xVar, ic.d dVar, jc.b bVar) {
        this.f25418b = executor;
        this.f25419c = eVar;
        this.f25417a = xVar;
        this.f25420d = dVar;
        this.f25421e = bVar;
    }

    public static /* synthetic */ Object b(c cVar, o oVar, ac.i iVar) {
        cVar.f25420d.A1(oVar, iVar);
        cVar.f25417a.b(oVar, 1);
        return null;
    }

    public static /* synthetic */ void c(final c cVar, final o oVar, j jVar, ac.i iVar) {
        cVar.getClass();
        try {
            m a10 = cVar.f25419c.a(oVar.b());
            if (a10 == null) {
                String format = String.format("Transport backend '%s' is not registered", oVar.b());
                f25416f.warning(format);
                jVar.a(new IllegalArgumentException(format));
                return;
            }
            final ac.i a11 = a10.a(iVar);
            cVar.f25421e.m(new b.a() { // from class: gc.b
                @Override // jc.b.a
                public final Object execute() {
                    return c.b(c.this, oVar, a11);
                }
            });
            jVar.a(null);
        } catch (Exception e10) {
            Logger logger = f25416f;
            logger.warning("Error scheduling event " + e10.getMessage());
            jVar.a(e10);
        }
    }

    @Override // gc.e
    public void a(final o oVar, final ac.i iVar, final j jVar) {
        this.f25418b.execute(new Runnable() { // from class: gc.a
            @Override // java.lang.Runnable
            public final void run() {
                c.c(c.this, oVar, jVar, iVar);
            }
        });
    }
}
