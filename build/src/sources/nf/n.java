package nf;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ff.a;
import ff.d;
import gf.q;
import hf.q;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends ff.d implements mf.d {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f37830k;

    /* renamed from: l  reason: collision with root package name */
    private static final a.AbstractC0316a f37831l;

    /* renamed from: m  reason: collision with root package name */
    private static final ff.a f37832m;

    static {
        a.g gVar = new a.g();
        f37830k = gVar;
        k kVar = new k();
        f37831l = kVar;
        f37832m = new ff.a("ModuleInstall.API", kVar, gVar);
    }

    public n(Context context) {
        super(context, f37832m, a.d.f23724g, d.a.f23736c);
    }

    static final a C(boolean z10, ff.f... fVarArr) {
        boolean z11;
        q.m(fVarArr, "Requested APIs must not be null.");
        if (fVarArr.length > 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        q.b(z11, "Please provide at least one OptionalModuleApi.");
        for (ff.f fVar : fVarArr) {
            q.m(fVar, "Requested API must not be null.");
        }
        return a.d(Arrays.asList(fVarArr), z10);
    }

    @Override // mf.d
    public final Task e(ff.f... fVarArr) {
        final a C = C(false, fVarArr);
        if (C.c().isEmpty()) {
            return zg.m.f(new mf.b(true, 0));
        }
        q.a a10 = gf.q.a();
        a10.d(gg.i.f25700a);
        a10.e(27301);
        a10.c(false);
        a10.b(new gf.m() { // from class: nf.i
            @Override // gf.m
            public final void accept(Object obj, Object obj2) {
                ((g) ((o) obj).C()).W0(new l(n.this, (zg.k) obj2), C);
            }
        });
        return p(a10.a());
    }

    @Override // mf.d
    public final Task i(mf.f fVar) {
        final a b10 = a.b(fVar);
        fVar.b();
        fVar.c();
        if (b10.c().isEmpty()) {
            return zg.m.f(new mf.g(0));
        }
        q.a a10 = gf.q.a();
        a10.d(gg.i.f25700a);
        a10.c(true);
        a10.e(27304);
        a10.b(new gf.m() { // from class: nf.j
            @Override // gf.m
            public final void accept(Object obj, Object obj2) {
                ((g) ((o) obj).C()).X0(new m(n.this, (zg.k) obj2), b10, null);
            }
        });
        return p(a10.a());
    }
}
