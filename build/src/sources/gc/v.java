package gc;

import ic.b;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class v {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f26755a;

    /* renamed from: b  reason: collision with root package name */
    private final hc.d f26756b;

    /* renamed from: c  reason: collision with root package name */
    private final x f26757c;

    /* renamed from: d  reason: collision with root package name */
    private final ic.b f26758d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(Executor executor, hc.d dVar, x xVar, ic.b bVar) {
        this.f26755a = executor;
        this.f26756b = dVar;
        this.f26757c = xVar;
        this.f26758d = bVar;
    }

    public static /* synthetic */ Object a(v vVar) {
        for (zb.o oVar : vVar.f26756b.X()) {
            vVar.f26757c.b(oVar, 1);
        }
        return null;
    }

    public void c() {
        this.f26755a.execute(new Runnable() { // from class: gc.t
            @Override // java.lang.Runnable
            public final void run() {
                r0.f26758d.l(new b.a() { // from class: gc.u
                    @Override // ic.b.a
                    public final Object execute() {
                        return v.a(v.this);
                    }
                });
            }
        });
    }
}
