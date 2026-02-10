package hc;

import java.util.concurrent.Executor;
import jc.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class v {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f27097a;

    /* renamed from: b  reason: collision with root package name */
    private final ic.d f27098b;

    /* renamed from: c  reason: collision with root package name */
    private final x f27099c;

    /* renamed from: d  reason: collision with root package name */
    private final jc.b f27100d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(Executor executor, ic.d dVar, x xVar, jc.b bVar) {
        this.f27097a = executor;
        this.f27098b = dVar;
        this.f27099c = xVar;
        this.f27100d = bVar;
    }

    public static /* synthetic */ Object a(v vVar) {
        for (ac.o oVar : vVar.f27098b.c0()) {
            vVar.f27099c.b(oVar, 1);
        }
        return null;
    }

    public void c() {
        this.f27097a.execute(new Runnable() { // from class: hc.t
            @Override // java.lang.Runnable
            public final void run() {
                r0.f27100d.m(new b.a() { // from class: hc.u
                    @Override // jc.b.a
                    public final Object execute() {
                        return v.a(v.this);
                    }
                });
            }
        });
    }
}
