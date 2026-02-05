package zb;

import android.content.Context;
import java.util.Collections;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t implements s {

    /* renamed from: e  reason: collision with root package name */
    private static volatile u f55372e;

    /* renamed from: a  reason: collision with root package name */
    private final jc.a f55373a;

    /* renamed from: b  reason: collision with root package name */
    private final jc.a f55374b;

    /* renamed from: c  reason: collision with root package name */
    private final fc.e f55375c;

    /* renamed from: d  reason: collision with root package name */
    private final gc.r f55376d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(jc.a aVar, jc.a aVar2, fc.e eVar, gc.r rVar, gc.v vVar) {
        this.f55373a = aVar;
        this.f55374b = aVar2;
        this.f55375c = eVar;
        this.f55376d = rVar;
        vVar.c();
    }

    private i b(n nVar) {
        return i.a().i(this.f55373a.a()).k(this.f55374b.a()).j(nVar.g()).h(new h(nVar.b(), nVar.d())).g(nVar.c().a()).d();
    }

    public static t c() {
        u uVar = f55372e;
        if (uVar != null) {
            return uVar.h();
        }
        throw new IllegalStateException("Not initialized!");
    }

    private static Set d(f fVar) {
        if (fVar instanceof g) {
            return Collections.unmodifiableSet(((g) fVar).a());
        }
        return Collections.singleton(xb.c.b("proto"));
    }

    public static void f(Context context) {
        if (f55372e == null) {
            synchronized (t.class) {
                try {
                    if (f55372e == null) {
                        f55372e = e.k().a(context).build();
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    @Override // zb.s
    public void a(n nVar, xb.j jVar) {
        this.f55375c.a(nVar.f().f(nVar.c().c()), b(nVar), jVar);
    }

    public gc.r e() {
        return this.f55376d;
    }

    public xb.i g(f fVar) {
        return new p(d(fVar), o.a().b(fVar.getName()).c(fVar.getExtras()).a(), this);
    }
}
