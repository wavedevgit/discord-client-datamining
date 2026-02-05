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
    private static m0 f45891k;

    /* renamed from: l  reason: collision with root package name */
    private static final o0 f45892l = o0.c("optional-module-barcode", "com.google.android.gms.vision.barcode");

    /* renamed from: a  reason: collision with root package name */
    private final String f45893a;

    /* renamed from: b  reason: collision with root package name */
    private final String f45894b;

    /* renamed from: c  reason: collision with root package name */
    private final mj f45895c;

    /* renamed from: d  reason: collision with root package name */
    private final sj.m f45896d;

    /* renamed from: e  reason: collision with root package name */
    private final Task f45897e;

    /* renamed from: f  reason: collision with root package name */
    private final Task f45898f;

    /* renamed from: g  reason: collision with root package name */
    private final String f45899g;

    /* renamed from: h  reason: collision with root package name */
    private final int f45900h;

    /* renamed from: i  reason: collision with root package name */
    private final Map f45901i = new HashMap();

    /* renamed from: j  reason: collision with root package name */
    private final Map f45902j = new HashMap();

    public xj(Context context, final sj.m mVar, mj mjVar, String str) {
        int i10;
        this.f45893a = context.getPackageName();
        this.f45894b = sj.c.a(context);
        this.f45896d = mVar;
        this.f45895c = mjVar;
        jk.a();
        this.f45899g = str;
        this.f45897e = sj.g.a().b(new Callable() { // from class: pg.sj
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return xj.this.b();
            }
        });
        sj.g a10 = sj.g.a();
        Objects.requireNonNull(mVar);
        this.f45898f = a10.b(new Callable() { // from class: pg.tj
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return sj.m.this.a();
            }
        });
        o0 o0Var = f45892l;
        if (o0Var.containsKey(str)) {
            i10 = DynamiteModule.b(context, (String) o0Var.get(str));
        } else {
            i10 = -1;
        }
        this.f45900h = i10;
    }

    static long a(List list, double d10) {
        return ((Long) list.get(Math.max(((int) Math.ceil((d10 / 100.0d) * list.size())) - 1, 0))).longValue();
    }

    private static synchronized m0 i() {
        synchronized (xj.class) {
            try {
                m0 m0Var = f45891k;
                if (m0Var != null) {
                    return m0Var;
                }
                LocaleListCompat a10 = w1.e.a(Resources.getSystem().getConfiguration());
                j0 j0Var = new j0();
                for (int i10 = 0; i10 < a10.f(); i10++) {
                    j0Var.a(sj.c.b(a10.c(i10)));
                }
                m0 b10 = j0Var.b();
                f45891k = b10;
                return b10;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final String j() {
        if (this.f45897e.p()) {
            return (String) this.f45897e.l();
        }
        return gf.m.a().b(this.f45899g);
    }

    private final boolean k(je jeVar, long j10, long j11) {
        if (this.f45901i.get(jeVar) == null || j10 - ((Long) this.f45901i.get(jeVar)).longValue() > TimeUnit.SECONDS.toMillis(30L)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ String b() {
        return gf.m.a().b(this.f45899g);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void c(lj ljVar, je jeVar, String str) {
        String a10;
        ljVar.c(jeVar);
        String b10 = ljVar.b();
        ki kiVar = new ki();
        kiVar.b(this.f45893a);
        kiVar.c(this.f45894b);
        kiVar.h(i());
        kiVar.g(Boolean.TRUE);
        kiVar.l(b10);
        kiVar.j(str);
        if (this.f45898f.p()) {
            a10 = (String) this.f45898f.l();
        } else {
            a10 = this.f45896d.a();
        }
        kiVar.i(a10);
        kiVar.d(10);
        kiVar.k(Integer.valueOf(this.f45900h));
        ljVar.d(kiVar);
        this.f45895c.a(ljVar);
    }

    public final void d(lj ljVar, je jeVar) {
        e(ljVar, jeVar, j());
    }

    public final void e(final lj ljVar, final je jeVar, final String str) {
        sj.g.d().execute(new Runnable() { // from class: pg.qj
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
        this.f45901i.put(jeVar, Long.valueOf(elapsedRealtime));
        e(wjVar.zza(), jeVar, j());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void g(je jeVar, dk.t tVar) {
        r0 r0Var = (r0) this.f45902j.get(jeVar);
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
            this.f45902j.remove(jeVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void h(final je jeVar, Object obj, long j10, final dk.t tVar) {
        if (!this.f45902j.containsKey(jeVar)) {
            this.f45902j.put(jeVar, p.p());
        }
        ((r0) this.f45902j.get(jeVar)).b(obj, Long.valueOf(j10));
        long elapsedRealtime = SystemClock.elapsedRealtime();
        if (!k(jeVar, elapsedRealtime, 30L)) {
            return;
        }
        this.f45901i.put(jeVar, Long.valueOf(elapsedRealtime));
        sj.g.d().execute(new Runnable() { // from class: pg.rj
            @Override // java.lang.Runnable
            public final void run() {
                xj.this.g(jeVar, tVar);
            }
        });
    }
}
