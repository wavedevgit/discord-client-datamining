package gc;

import ic.b;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class v {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f26644a;

    /* renamed from: b  reason: collision with root package name */
    private final hc.d f26645b;

    /* renamed from: c  reason: collision with root package name */
    private final x f26646c;

    /* renamed from: d  reason: collision with root package name */
    private final ic.b f26647d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(Executor executor, hc.d dVar, x xVar, ic.b bVar) {
        this.f26644a = executor;
        this.f26645b = dVar;
        this.f26646c = xVar;
        this.f26647d = bVar;
    }

    public static /* synthetic */ Object a(v vVar) {
        for (zb.o oVar : vVar.f26645b.X()) {
            vVar.f26646c.b(oVar, 1);
        }
        return null;
    }

    public void c() {
        this.f26644a.execute(new Runnable() { // from class: gc.t
            @Override // java.lang.Runnable
            public final void run() {
                r0.f26647d.l(new b.a() { // from class: gc.u
                    @Override // ic.b.a
                    public final Object execute() {
                        return v.a(v.this);
                    }
                });
            }
        });
    }
}
