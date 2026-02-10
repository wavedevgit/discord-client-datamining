package ac;

import android.content.Context;
import java.util.Collections;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t implements s {

    /* renamed from: e  reason: collision with root package name */
    private static volatile u f619e;

    /* renamed from: a  reason: collision with root package name */
    private final kc.a f620a;

    /* renamed from: b  reason: collision with root package name */
    private final kc.a f621b;

    /* renamed from: c  reason: collision with root package name */
    private final gc.e f622c;

    /* renamed from: d  reason: collision with root package name */
    private final hc.r f623d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(kc.a aVar, kc.a aVar2, gc.e eVar, hc.r rVar, hc.v vVar) {
        this.f620a = aVar;
        this.f621b = aVar2;
        this.f622c = eVar;
        this.f623d = rVar;
        vVar.c();
    }

    private i b(n nVar) {
        return i.a().i(this.f620a.a()).k(this.f621b.a()).j(nVar.g()).h(new h(nVar.b(), nVar.d())).g(nVar.c().a()).d();
    }

    public static t c() {
        u uVar = f619e;
        if (uVar != null) {
            return uVar.h();
        }
        throw new IllegalStateException("Not initialized!");
    }

    private static Set d(f fVar) {
        if (fVar instanceof g) {
            return Collections.unmodifiableSet(((g) fVar).a());
        }
        return Collections.singleton(yb.c.b("proto"));
    }

    public static void f(Context context) {
        if (f619e == null) {
            synchronized (t.class) {
                try {
                    if (f619e == null) {
                        f619e = e.i().a(context).build();
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    @Override // ac.s
    public void a(n nVar, yb.j jVar) {
        this.f622c.a(nVar.f().f(nVar.c().c()), b(nVar), jVar);
    }

    public hc.r e() {
        return this.f623d;
    }

    public yb.i g(f fVar) {
        return new p(d(fVar), o.a().b(fVar.getName()).c(fVar.getExtras()).a(), this);
    }
}
