package w9;

import android.graphics.Bitmap;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import ga.e;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.ScheduledExecutorService;
import la.n;
import o8.j;
import o8.m;
import r9.f;
import t9.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d implements ra.a {

    /* renamed from: a  reason: collision with root package name */
    private final ia.b f53488a;

    /* renamed from: b  reason: collision with root package name */
    private final ScheduledExecutorService f53489b;

    /* renamed from: c  reason: collision with root package name */
    private final ExecutorService f53490c;

    /* renamed from: d  reason: collision with root package name */
    private final v8.b f53491d;

    /* renamed from: e  reason: collision with root package name */
    private final PlatformBitmapFactory f53492e;

    /* renamed from: f  reason: collision with root package name */
    private final n f53493f;

    /* renamed from: g  reason: collision with root package name */
    private final Supplier f53494g;

    /* renamed from: h  reason: collision with root package name */
    private final Supplier f53495h;

    /* renamed from: i  reason: collision with root package name */
    private final Supplier f53496i;

    /* renamed from: j  reason: collision with root package name */
    private final Supplier f53497j;

    /* renamed from: k  reason: collision with root package name */
    private final Supplier f53498k;

    /* renamed from: l  reason: collision with root package name */
    private final Supplier f53499l;

    /* renamed from: m  reason: collision with root package name */
    private final Supplier f53500m;

    /* renamed from: n  reason: collision with root package name */
    private final Supplier f53501n = m.f41557b;

    public d(ia.b bVar, ScheduledExecutorService scheduledExecutorService, ExecutorService executorService, v8.b bVar2, PlatformBitmapFactory platformBitmapFactory, n nVar, Supplier supplier, Supplier supplier2, Supplier supplier3, Supplier supplier4, Supplier supplier5, Supplier supplier6, Supplier supplier7) {
        this.f53488a = bVar;
        this.f53489b = scheduledExecutorService;
        this.f53490c = executorService;
        this.f53491d = bVar2;
        this.f53492e = platformBitmapFactory;
        this.f53493f = nVar;
        this.f53494g = supplier;
        this.f53495h = supplier2;
        this.f53496i = supplier3;
        this.f53497j = supplier4;
        this.f53499l = supplier6;
        this.f53498k = supplier5;
        this.f53500m = supplier7;
    }

    private ga.a c(e eVar) {
        ga.c d10 = eVar.d();
        return this.f53488a.a(eVar, new Rect(0, 0, d10.getWidth(), d10.getHeight()));
    }

    private ia.c d(e eVar) {
        return new ia.c(new q9.a(eVar.hashCode(), ((Boolean) this.f53496i.get()).booleanValue()), this.f53493f);
    }

    private o9.a e(e eVar, Bitmap.Config config, ba.c cVar) {
        r9.a aVar;
        r9.b bVar;
        ga.a c10 = c(eVar);
        u9.a aVar2 = new u9.a(c10);
        p9.b f10 = f(eVar);
        u9.b bVar2 = new u9.b(f10, c10, ((Boolean) this.f53497j.get()).booleanValue());
        int intValue = ((Integer) this.f53495h.get()).intValue();
        if (intValue > 0) {
            aVar = new r9.d(intValue);
            bVar = g(bVar2, config);
        } else {
            aVar = null;
            bVar = null;
        }
        if (((Boolean) this.f53497j.get()).booleanValue()) {
            aVar = new f(eVar.e(), aVar2, bVar2, new k(this.f53492e, ((Integer) this.f53499l.get()).intValue(), ((Integer) this.f53500m.get()).intValue()), ((Boolean) this.f53498k.get()).booleanValue());
        }
        return o9.c.s(new p9.a(this.f53492e, f10, aVar2, bVar2, ((Boolean) this.f53497j.get()).booleanValue(), aVar, bVar, null), this.f53491d, this.f53489b);
    }

    private p9.b f(e eVar) {
        int intValue = ((Integer) this.f53494g.get()).intValue();
        if (intValue != 1) {
            if (intValue != 2) {
                if (intValue != 3) {
                    return new q9.d();
                }
                return new q9.c();
            }
            return new q9.b(d(eVar), false);
        }
        return new q9.b(d(eVar), true);
    }

    private r9.b g(p9.c cVar, Bitmap.Config config) {
        PlatformBitmapFactory platformBitmapFactory = this.f53492e;
        if (config == null) {
            config = Bitmap.Config.ARGB_8888;
        }
        return new r9.c(platformBitmapFactory, cVar, config, this.f53490c);
    }

    @Override // ra.a
    public Drawable a(sa.e eVar) {
        Bitmap.Config config;
        if (!b(eVar)) {
            return null;
        }
        sa.c cVar = (sa.c) eVar;
        ga.c F0 = cVar.F0();
        e eVar2 = (e) j.g(cVar.I0());
        if (F0 != null) {
            config = F0.y();
        } else {
            config = null;
        }
        o9.a e10 = e(eVar2, config, null);
        if (((Boolean) this.f53501n.get()).booleanValue()) {
            return new v9.f(e10);
        }
        return new v9.b(e10);
    }

    @Override // ra.a
    public boolean b(sa.e eVar) {
        return eVar instanceof sa.c;
    }
}
