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
import wg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d extends ef.d implements w {

    /* renamed from: k  reason: collision with root package name */
    private static final a.g f31549k;

    /* renamed from: l  reason: collision with root package name */
    private static final a.AbstractC0279a f31550l;

    /* renamed from: m  reason: collision with root package name */
    private static final ef.a f31551m;

    /* renamed from: n  reason: collision with root package name */
    public static final /* synthetic */ int f31552n = 0;

    static {
        a.g gVar = new a.g();
        f31549k = gVar;
        c cVar = new c();
        f31550l = cVar;
        f31551m = new ef.a("ClientTelemetry.API", cVar, gVar);
    }

    public d(Context context, x xVar) {
        super(context, f31551m, xVar, d.a.f21497c);
    }

    @Override // gf.w
    public final Task d(final u uVar) {
        q.a a10 = q.a();
        a10.d(fg.d.f23984a);
        a10.c(false);
        a10.b(new m() { // from class: jf.b
            @Override // ff.m
            public final void accept(Object obj, Object obj2) {
                int i10 = d.f31552n;
                ((a) ((e) obj).C()).S0(u.this);
                ((k) obj2).c(null);
            }
        });
        return o(a10.a());
    }
}
