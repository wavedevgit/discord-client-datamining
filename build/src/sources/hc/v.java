package hc;

import java.util.concurrent.Executor;
import jc.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class v {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f27666a;

    /* renamed from: b  reason: collision with root package name */
    private final ic.d f27667b;

    /* renamed from: c  reason: collision with root package name */
    private final x f27668c;

    /* renamed from: d  reason: collision with root package name */
    private final jc.b f27669d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(Executor executor, ic.d dVar, x xVar, jc.b bVar) {
        this.f27666a = executor;
        this.f27667b = dVar;
        this.f27668c = xVar;
        this.f27669d = bVar;
    }

    public static /* synthetic */ Object a(v vVar) {
        for (ac.o oVar : vVar.f27667b.c0()) {
            vVar.f27668c.b(oVar, 1);
        }
        return null;
    }

    public void c() {
        this.f27666a.execute(new Runnable() { // from class: hc.t
            @Override // java.lang.Runnable
            public final void run() {
                r0.f27669d.m(new b.a() { // from class: hc.u
                    @Override // jc.b.a
                    public final Object execute() {
                        return v.a(v.this);
                    }
                });
            }
        });
    }
}
