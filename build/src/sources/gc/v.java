package gc;

import ic.b;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class v {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f24667a;

    /* renamed from: b  reason: collision with root package name */
    private final hc.d f24668b;

    /* renamed from: c  reason: collision with root package name */
    private final x f24669c;

    /* renamed from: d  reason: collision with root package name */
    private final ic.b f24670d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(Executor executor, hc.d dVar, x xVar, ic.b bVar) {
        this.f24667a = executor;
        this.f24668b = dVar;
        this.f24669c = xVar;
        this.f24670d = bVar;
    }

    public static /* synthetic */ Object a(v vVar) {
        for (zb.o oVar : vVar.f24668b.Y()) {
            vVar.f24669c.b(oVar, 1);
        }
        return null;
    }

    public void c() {
        this.f24667a.execute(new Runnable() { // from class: gc.t
            @Override // java.lang.Runnable
            public final void run() {
                r0.f24670d.k(new b.a() { // from class: gc.u
                    @Override // ic.b.a
                    public final Object execute() {
                        return v.a(v.this);
                    }
                });
            }
        });
    }
}
