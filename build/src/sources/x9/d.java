package x9;

import android.graphics.Bitmap;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import ha.e;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.ScheduledExecutorService;
import ma.n;
import p8.j;
import p8.m;
import s9.f;
import u9.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d implements sa.a {

    /* renamed from: a  reason: collision with root package name */
    private final ja.b f55000a;

    /* renamed from: b  reason: collision with root package name */
    private final ScheduledExecutorService f55001b;

    /* renamed from: c  reason: collision with root package name */
    private final ExecutorService f55002c;

    /* renamed from: d  reason: collision with root package name */
    private final w8.b f55003d;

    /* renamed from: e  reason: collision with root package name */
    private final PlatformBitmapFactory f55004e;

    /* renamed from: f  reason: collision with root package name */
    private final n f55005f;

    /* renamed from: g  reason: collision with root package name */
    private final Supplier f55006g;

    /* renamed from: h  reason: collision with root package name */
    private final Supplier f55007h;

    /* renamed from: i  reason: collision with root package name */
    private final Supplier f55008i;

    /* renamed from: j  reason: collision with root package name */
    private final Supplier f55009j;

    /* renamed from: k  reason: collision with root package name */
    private final Supplier f55010k;

    /* renamed from: l  reason: collision with root package name */
    private final Supplier f55011l;

    /* renamed from: m  reason: collision with root package name */
    private final Supplier f55012m;

    /* renamed from: n  reason: collision with root package name */
    private final Supplier f55013n = m.f42092b;

    public d(ja.b bVar, ScheduledExecutorService scheduledExecutorService, ExecutorService executorService, w8.b bVar2, PlatformBitmapFactory platformBitmapFactory, n nVar, Supplier supplier, Supplier supplier2, Supplier supplier3, Supplier supplier4, Supplier supplier5, Supplier supplier6, Supplier supplier7) {
        this.f55000a = bVar;
        this.f55001b = scheduledExecutorService;
        this.f55002c = executorService;
        this.f55003d = bVar2;
        this.f55004e = platformBitmapFactory;
        this.f55005f = nVar;
        this.f55006g = supplier;
        this.f55007h = supplier2;
        this.f55008i = supplier3;
        this.f55009j = supplier4;
        this.f55011l = supplier6;
        this.f55010k = supplier5;
        this.f55012m = supplier7;
    }

    private ha.a c(e eVar) {
        ha.c d10 = eVar.d();
        return this.f55000a.a(eVar, new Rect(0, 0, d10.getWidth(), d10.getHeight()));
    }

    private ja.c d(e eVar) {
        return new ja.c(new r9.a(eVar.hashCode(), ((Boolean) this.f55008i.get()).booleanValue()), this.f55005f);
    }

    private p9.a e(e eVar, Bitmap.Config config, ca.c cVar) {
        s9.a aVar;
        s9.b bVar;
        ha.a c10 = c(eVar);
        v9.a aVar2 = new v9.a(c10);
        q9.b f10 = f(eVar);
        v9.b bVar2 = new v9.b(f10, c10, ((Boolean) this.f55009j.get()).booleanValue());
        int intValue = ((Integer) this.f55007h.get()).intValue();
        if (intValue > 0) {
            aVar = new s9.d(intValue);
            bVar = g(bVar2, config);
        } else {
            aVar = null;
            bVar = null;
        }
        if (((Boolean) this.f55009j.get()).booleanValue()) {
            aVar = new f(eVar.e(), aVar2, bVar2, new k(this.f55004e, ((Integer) this.f55011l.get()).intValue(), ((Integer) this.f55012m.get()).intValue()), ((Boolean) this.f55010k.get()).booleanValue());
        }
        return p9.c.s(new q9.a(this.f55004e, f10, aVar2, bVar2, ((Boolean) this.f55009j.get()).booleanValue(), aVar, bVar, null), this.f55003d, this.f55001b);
    }

    private q9.b f(e eVar) {
        int intValue = ((Integer) this.f55006g.get()).intValue();
        if (intValue != 1) {
            if (intValue != 2) {
                if (intValue != 3) {
                    return new r9.d();
                }
                return new r9.c();
            }
            return new r9.b(d(eVar), false);
        }
        return new r9.b(d(eVar), true);
    }

    private s9.b g(q9.c cVar, Bitmap.Config config) {
        PlatformBitmapFactory platformBitmapFactory = this.f55004e;
        if (config == null) {
            config = Bitmap.Config.ARGB_8888;
        }
        return new s9.c(platformBitmapFactory, cVar, config, this.f55002c);
    }

    @Override // sa.a
    public boolean a(ta.e eVar) {
        return eVar instanceof ta.c;
    }

    @Override // sa.a
    public Drawable b(ta.e eVar) {
        Bitmap.Config config;
        if (!a(eVar)) {
            return null;
        }
        ta.c cVar = (ta.c) eVar;
        ha.c C0 = cVar.C0();
        e eVar2 = (e) j.g(cVar.E0());
        if (C0 != null) {
            config = C0.y();
        } else {
            config = null;
        }
        p9.a e10 = e(eVar2, config, null);
        if (((Boolean) this.f55013n.get()).booleanValue()) {
            return new w9.f(e10);
        }
        return new w9.b(e10);
    }
}
