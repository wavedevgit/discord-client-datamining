package hc;

import java.util.concurrent.Executor;
import jc.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class v {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f25879a;

    /* renamed from: b  reason: collision with root package name */
    private final ic.d f25880b;

    /* renamed from: c  reason: collision with root package name */
    private final x f25881c;

    /* renamed from: d  reason: collision with root package name */
    private final jc.b f25882d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(Executor executor, ic.d dVar, x xVar, jc.b bVar) {
        this.f25879a = executor;
        this.f25880b = dVar;
        this.f25881c = xVar;
        this.f25882d = bVar;
    }

    public static /* synthetic */ Object a(v vVar) {
        for (ac.o oVar : vVar.f25880b.c0()) {
            vVar.f25881c.b(oVar, 1);
        }
        return null;
    }

    public void c() {
        this.f25879a.execute(new Runnable() { // from class: hc.t
            @Override // java.lang.Runnable
            public final void run() {
                r0.f25882d.m(new b.a() { // from class: hc.u
                    @Override // jc.b.a
                    public final Object execute() {
                        return v.a(v.this);
                    }
                });
            }
        });
    }
}
