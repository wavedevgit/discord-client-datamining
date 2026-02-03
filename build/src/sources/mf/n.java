package mf;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ef.a;
import ef.d;
import ff.q;
import gf.q;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends ef.d implements lf.d {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f37848k;

    /* renamed from: l  reason: collision with root package name */
    private static final a.AbstractC0279a f37849l;

    /* renamed from: m  reason: collision with root package name */
    private static final ef.a f37850m;

    static {
        a.g gVar = new a.g();
        f37848k = gVar;
        k kVar = new k();
        f37849l = kVar;
        f37850m = new ef.a("ModuleInstall.API", kVar, gVar);
    }

    public n(Context context) {
        super(context, f37850m, a.d.f21485c, d.a.f21497c);
    }

    static final a C(boolean z10, ef.f... fVarArr) {
        boolean z11;
        q.m(fVarArr, "Requested APIs must not be null.");
        if (fVarArr.length > 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        q.b(z11, "Please provide at least one OptionalModuleApi.");
        for (ef.f fVar : fVarArr) {
            q.m(fVar, "Requested API must not be null.");
        }
        return a.d(Arrays.asList(fVarArr), z10);
    }

    @Override // lf.d
    public final Task j(ef.f... fVarArr) {
        final a C = C(false, fVarArr);
        if (C.c().isEmpty()) {
            return wg.m.f(new lf.b(true, 0));
        }
        q.a a10 = ff.q.a();
        a10.d(fg.i.f23988a);
        a10.e(27301);
        a10.c(false);
        a10.b(new ff.m() { // from class: mf.i
            @Override // ff.m
            public final void accept(Object obj, Object obj2) {
                ((g) ((o) obj).C()).S0(new l(n.this, (wg.k) obj2), C);
            }
        });
        return p(a10.a());
    }

    @Override // lf.d
    public final Task k(lf.f fVar) {
        final a b10 = a.b(fVar);
        fVar.b();
        fVar.c();
        if (b10.c().isEmpty()) {
            return wg.m.f(new lf.g(0));
        }
        q.a a10 = ff.q.a();
        a10.d(fg.i.f23988a);
        a10.c(true);
        a10.e(27304);
        a10.b(new ff.m() { // from class: mf.j
            @Override // ff.m
            public final void accept(Object obj, Object obj2) {
                ((g) ((o) obj).C()).T0(new m(n.this, (wg.k) obj2), b10, null);
            }
        });
        return p(a10.a());
    }
}
