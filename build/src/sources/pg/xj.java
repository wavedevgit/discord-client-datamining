package pg;

import android.content.Context;
import android.content.res.Resources;
import android.os.SystemClock;
import androidx.core.os.LocaleListCompat;
import com.google.android.gms.dynamite.DynamiteModule;
import com.google.android.gms.tasks.Task;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.Callable;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class xj {

    /* renamed from: k  reason: collision with root package name */
    private static m0 f46003k;

    /* renamed from: l  reason: collision with root package name */
    private static final o0 f46004l = o0.c("optional-module-barcode", "com.google.android.gms.vision.barcode");

    /* renamed from: a  reason: collision with root package name */
    private final String f46005a;

    /* renamed from: b  reason: collision with root package name */
    private final String f46006b;

    /* renamed from: c  reason: collision with root package name */
    private final mj f46007c;

    /* renamed from: d  reason: collision with root package name */
    private final pj.m f46008d;

    /* renamed from: e  reason: collision with root package name */
    private final Task f46009e;

    /* renamed from: f  reason: collision with root package name */
    private final Task f46010f;

    /* renamed from: g  reason: collision with root package name */
    private final String f46011g;

    /* renamed from: h  reason: collision with root package name */
    private final int f46012h;

    /* renamed from: i  reason: collision with root package name */
    private final Map f46013i = new HashMap();

    /* renamed from: j  reason: collision with root package name */
    private final Map f46014j = new HashMap();

    public xj(Context context, final pj.m mVar, mj mjVar, String str) {
        int i10;
        this.f46005a = context.getPackageName();
        this.f46006b = pj.c.a(context);
        this.f46008d = mVar;
        this.f46007c = mjVar;
        jk.a();
        this.f46011g = str;
        this.f46009e = pj.g.a().b(new Callable() { // from class: pg.sj
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return xj.this.b();
            }
        });
        pj.g a10 = pj.g.a();
        Objects.requireNonNull(mVar);
        this.f46010f = a10.b(new Callable() { // from class: pg.tj
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return pj.m.this.a();
            }
        });
        o0 o0Var = f46004l;
        if (o0Var.containsKey(str)) {
            i10 = DynamiteModule.b(context, (String) o0Var.get(str));
        } else {
            i10 = -1;
        }
        this.f46012h = i10;
    }

    static long a(List list, double d10) {
        return ((Long) list.get(Math.max(((int) Math.ceil((d10 / 100.0d) * list.size())) - 1, 0))).longValue();
    }

    private static synchronized m0 i() {
        synchronized (xj.class) {
            try {
                m0 m0Var = f46003k;
                if (m0Var != null) {
                    return m0Var;
                }
                LocaleListCompat a10 = w1.e.a(Resources.getSystem().getConfiguration());
                j0 j0Var = new j0();
                for (int i10 = 0; i10 < a10.f(); i10++) {
                    j0Var.a(pj.c.b(a10.c(i10)));
                }
                m0 b10 = j0Var.b();
                f46003k = b10;
                return b10;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final String j() {
        if (this.f46009e.p()) {
            return (String) this.f46009e.l();
        }
        return gf.m.a().b(this.f46011g);
    }

    private final boolean k(je jeVar, long j10, long j11) {
        if (this.f46013i.get(jeVar) == null || j10 - ((Long) this.f46013i.get(jeVar)).longValue() > TimeUnit.SECONDS.toMillis(30L)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ String b() {
        return gf.m.a().b(this.f46011g);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void c(lj ljVar, je jeVar, String str) {
        String a10;
        ljVar.c(jeVar);
        String b10 = ljVar.b();
        ki kiVar = new ki();
        kiVar.b(this.f46005a);
        kiVar.c(this.f46006b);
        kiVar.h(i());
        kiVar.g(Boolean.TRUE);
        kiVar.l(b10);
        kiVar.j(str);
        if (this.f46010f.p()) {
            a10 = (String) this.f46010f.l();
        } else {
            a10 = this.f46008d.a();
        }
        kiVar.i(a10);
        kiVar.d(10);
        kiVar.k(Integer.valueOf(this.f46012h));
        ljVar.d(kiVar);
        this.f46007c.a(ljVar);
    }

    public final void d(lj ljVar, je jeVar) {
        e(ljVar, jeVar, j());
    }

    public final void e(final lj ljVar, final je jeVar, final String str) {
        pj.g.d().execute(new Runnable() { // from class: pg.qj
            @Override // java.lang.Runnable
            public final void run() {
                xj.this.c(ljVar, jeVar, str);
            }
        });
    }

    public final void f(wj wjVar, je jeVar) {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        if (!k(jeVar, elapsedRealtime, 30L)) {
            return;
        }
        this.f46013i.put(jeVar, Long.valueOf(elapsedRealtime));
        e(wjVar.zza(), jeVar, j());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void g(je jeVar, ak.t tVar) {
        r0 r0Var = (r0) this.f46014j.get(jeVar);
        if (r0Var != null) {
            for (Object obj : r0Var.d()) {
                ArrayList<Long> arrayList = new ArrayList(r0Var.a(obj));
                Collections.sort(arrayList);
                hd hdVar = new hd();
                long j10 = 0;
                for (Long l10 : arrayList) {
                    j10 += l10.longValue();
                }
                hdVar.a(Long.valueOf(j10 / arrayList.size()));
                hdVar.c(Long.valueOf(a(arrayList, 100.0d)));
                hdVar.f(Long.valueOf(a(arrayList, 75.0d)));
                hdVar.d(Long.valueOf(a(arrayList, 50.0d)));
                hdVar.b(Long.valueOf(a(arrayList, 25.0d)));
                hdVar.e(Long.valueOf(a(arrayList, 0.0d)));
                e(tVar.a(obj, arrayList.size(), hdVar.g()), jeVar, j());
            }
            this.f46014j.remove(jeVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void h(final je jeVar, Object obj, long j10, final ak.t tVar) {
        if (!this.f46014j.containsKey(jeVar)) {
            this.f46014j.put(jeVar, p.p());
        }
        ((r0) this.f46014j.get(jeVar)).b(obj, Long.valueOf(j10));
        long elapsedRealtime = SystemClock.elapsedRealtime();
        if (!k(jeVar, elapsedRealtime, 30L)) {
            return;
        }
        this.f46013i.put(jeVar, Long.valueOf(elapsedRealtime));
        pj.g.d().execute(new Runnable() { // from class: pg.rj
            @Override // java.lang.Runnable
            public final void run() {
                xj.this.g(jeVar, tVar);
            }
        });
    }
}
