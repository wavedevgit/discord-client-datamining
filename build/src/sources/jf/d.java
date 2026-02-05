package jf;

import android.content.Context;
import com.google.android.gms.tasks.Task;
import ef.a;
import ef.d;
import ff.m;
import ff.q;
import gf.u;
import gf.w;
import gf.x;
import xg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends ef.d implements w {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f30898k;

    /* renamed from: l  reason: collision with root package name */
    private static final a.AbstractC0294a f30899l;

    /* renamed from: m  reason: collision with root package name */
    private static final ef.a f30900m;

    /* renamed from: n  reason: collision with root package name */
    public static final /* synthetic */ int f30901n = 0;

    static {
        a.g gVar = new a.g();
        f30898k = gVar;
        c cVar = new c();
        f30899l = cVar;
        f30900m = new ef.a("ClientTelemetry.API", cVar, gVar);
    }

    public d(Context context, x xVar) {
        super(context, f30900m, xVar, d.a.f21569c);
    }

    @Override // gf.w
    public final Task d(final u uVar) {
        q.a a10 = q.a();
        a10.d(fg.d.f23009a);
        a10.c(false);
        a10.b(new m() { // from class: jf.b
            @Override // ff.m
            public final void accept(Object obj, Object obj2) {
                int i10 = d.f30901n;
                ((a) ((e) obj).C()).W0(u.this);
                ((k) obj2).c(null);
            }
        });
        return o(a10.a());
    }
}
