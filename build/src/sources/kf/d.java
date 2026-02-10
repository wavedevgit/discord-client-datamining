package kf;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ff.a;
import ff.d;
import gf.m;
import gf.q;
import hf.u;
import hf.w;
import hf.x;
import zg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends ff.d implements w {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f31728k;

    /* renamed from: l  reason: collision with root package name */
    private static final a.AbstractC0316a f31729l;

    /* renamed from: m  reason: collision with root package name */
    private static final ff.a f31730m;

    /* renamed from: n  reason: collision with root package name */
    public static final /* synthetic */ int f31731n = 0;

    static {
        a.g gVar = new a.g();
        f31728k = gVar;
        c cVar = new c();
        f31729l = cVar;
        f31730m = new ff.a("ClientTelemetry.API", cVar, gVar);
    }

    public d(Context context, x xVar) {
        super(context, f31730m, xVar, d.a.f23735c);
    }

    @Override // hf.w
    public final Task k(final u uVar) {
        q.a a10 = q.a();
        a10.d(gg.d.f25695a);
        a10.c(false);
        a10.b(new m() { // from class: kf.b
            @Override // gf.m
            public final void accept(Object obj, Object obj2) {
                int i10 = d.f31731n;
                ((a) ((e) obj).C()).W0(u.this);
                ((k) obj2).c(null);
            }
        });
        return o(a10.a());
    }
}
