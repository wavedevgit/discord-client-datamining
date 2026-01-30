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
    private final ia.b f52266a;

    /* renamed from: b  reason: collision with root package name */
    private final ScheduledExecutorService f52267b;

    /* renamed from: c  reason: collision with root package name */
    private final ExecutorService f52268c;

    /* renamed from: d  reason: collision with root package name */
    private final v8.b f52269d;

    /* renamed from: e  reason: collision with root package name */
    private final PlatformBitmapFactory f52270e;

    /* renamed from: f  reason: collision with root package name */
    private final n f52271f;

    /* renamed from: g  reason: collision with root package name */
    private final Supplier f52272g;

    /* renamed from: h  reason: collision with root package name */
    private final Supplier f52273h;

    /* renamed from: i  reason: collision with root package name */
    private final Supplier f52274i;

    /* renamed from: j  reason: collision with root package name */
    private final Supplier f52275j;

    /* renamed from: k  reason: collision with root package name */
    private final Supplier f52276k;

    /* renamed from: l  reason: collision with root package name */
    private final Supplier f52277l;

    /* renamed from: m  reason: collision with root package name */
    private final Supplier f52278m;

    /* renamed from: n  reason: collision with root package name */
    private final Supplier f52279n = m.f42500b;

    public d(ia.b bVar, ScheduledExecutorService scheduledExecutorService, ExecutorService executorService, v8.b bVar2, PlatformBitmapFactory platformBitmapFactory, n nVar, Supplier supplier, Supplier supplier2, Supplier supplier3, Supplier supplier4, Supplier supplier5, Supplier supplier6, Supplier supplier7) {
        this.f52266a = bVar;
        this.f52267b = scheduledExecutorService;
        this.f52268c = executorService;
        this.f52269d = bVar2;
        this.f52270e = platformBitmapFactory;
        this.f52271f = nVar;
        this.f52272g = supplier;
        this.f52273h = supplier2;
        this.f52274i = supplier3;
        this.f52275j = supplier4;
        this.f52277l = supplier6;
        this.f52276k = supplier5;
        this.f52278m = supplier7;
    }

    private ga.a c(e eVar) {
        ga.c d10 = eVar.d();
        return this.f52266a.a(eVar, new Rect(0, 0, d10.getWidth(), d10.getHeight()));
    }

    private ia.c d(e eVar) {
        return new ia.c(new q9.a(eVar.hashCode(), ((Boolean) this.f52274i.get()).booleanValue()), this.f52271f);
    }

    private o9.a e(e eVar, Bitmap.Config config, ba.c cVar) {
        r9.a aVar;
        r9.b bVar;
        ga.a c10 = c(eVar);
        u9.a aVar2 = new u9.a(c10);
        p9.b f10 = f(eVar);
        u9.b bVar2 = new u9.b(f10, c10, ((Boolean) this.f52275j.get()).booleanValue());
        int intValue = ((Integer) this.f52273h.get()).intValue();
        if (intValue > 0) {
            aVar = new r9.d(intValue);
            bVar = g(bVar2, config);
        } else {
            aVar = null;
            bVar = null;
        }
        if (((Boolean) this.f52275j.get()).booleanValue()) {
            aVar = new f(eVar.e(), aVar2, bVar2, new k(this.f52270e, ((Integer) this.f52277l.get()).intValue(), ((Integer) this.f52278m.get()).intValue()), ((Boolean) this.f52276k.get()).booleanValue());
        }
        return o9.c.s(new p9.a(this.f52270e, f10, aVar2, bVar2, ((Boolean) this.f52275j.get()).booleanValue(), aVar, bVar, null), this.f52269d, this.f52267b);
    }

    private p9.b f(e eVar) {
        int intValue = ((Integer) this.f52272g.get()).intValue();
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
        PlatformBitmapFactory platformBitmapFactory = this.f52270e;
        if (config == null) {
            config = Bitmap.Config.ARGB_8888;
        }
        return new r9.c(platformBitmapFactory, cVar, config, this.f52268c);
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
            config = F0.v();
        } else {
            config = null;
        }
        o9.a e10 = e(eVar2, config, null);
        if (((Boolean) this.f52279n.get()).booleanValue()) {
            return new v9.f(e10);
        }
        return new v9.b(e10);
    }

    @Override // ra.a
    public boolean b(sa.e eVar) {
        return eVar instanceof sa.c;
    }
}
