package zb;

import android.content.Context;
import java.util.Collections;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t implements s {

    /* renamed from: e  reason: collision with root package name */
    private static volatile u f56151e;

    /* renamed from: a  reason: collision with root package name */
    private final jc.a f56152a;

    /* renamed from: b  reason: collision with root package name */
    private final jc.a f56153b;

    /* renamed from: c  reason: collision with root package name */
    private final fc.e f56154c;

    /* renamed from: d  reason: collision with root package name */
    private final gc.r f56155d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(jc.a aVar, jc.a aVar2, fc.e eVar, gc.r rVar, gc.v vVar) {
        this.f56152a = aVar;
        this.f56153b = aVar2;
        this.f56154c = eVar;
        this.f56155d = rVar;
        vVar.c();
    }

    private i b(n nVar) {
        return i.a().i(this.f56152a.a()).k(this.f56153b.a()).j(nVar.g()).h(new h(nVar.b(), nVar.d())).g(nVar.c().a()).d();
    }

    public static t c() {
        u uVar = f56151e;
        if (uVar != null) {
            return uVar.g();
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
        if (f56151e == null) {
            synchronized (t.class) {
                try {
                    if (f56151e == null) {
                        f56151e = e.k().a(context).build();
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    @Override // zb.s
    public void a(n nVar, xb.j jVar) {
        this.f56154c.a(nVar.f().f(nVar.c().c()), b(nVar), jVar);
    }

    public gc.r e() {
        return this.f56155d;
    }

    public xb.i g(f fVar) {
        return new p(d(fVar), o.a().b(fVar.getName()).c(fVar.getExtras()).a(), this);
    }
}
