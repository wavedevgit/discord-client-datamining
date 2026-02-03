package gc;

import ic.b;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class v {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f25968a;

    /* renamed from: b  reason: collision with root package name */
    private final hc.d f25969b;

    /* renamed from: c  reason: collision with root package name */
    private final x f25970c;

    /* renamed from: d  reason: collision with root package name */
    private final ic.b f25971d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(Executor executor, hc.d dVar, x xVar, ic.b bVar) {
        this.f25968a = executor;
        this.f25969b = dVar;
        this.f25970c = xVar;
        this.f25971d = bVar;
    }

    public static /* synthetic */ Object a(v vVar) {
        for (zb.o oVar : vVar.f25969b.X()) {
            vVar.f25970c.b(oVar, 1);
        }
        return null;
    }

    public void c() {
        this.f25968a.execute(new Runnable() { // from class: gc.t
            @Override // java.lang.Runnable
            public final void run() {
                r0.f25971d.l(new b.a() { // from class: gc.u
                    @Override // ic.b.a
                    public final Object execute() {
                        return v.a(v.this);
                    }
                });
            }
        });
    }
}
