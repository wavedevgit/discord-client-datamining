package rg;

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
    private static m0 f47342k;

    /* renamed from: l  reason: collision with root package name */
    private static final o0 f47343l = o0.c("optional-module-barcode", "com.google.android.gms.vision.barcode");

    /* renamed from: a  reason: collision with root package name */
    private final String f47344a;

    /* renamed from: b  reason: collision with root package name */
    private final String f47345b;

    /* renamed from: c  reason: collision with root package name */
    private final mj f47346c;

    /* renamed from: d  reason: collision with root package name */
    private final wj.m f47347d;

    /* renamed from: e  reason: collision with root package name */
    private final Task f47348e;

    /* renamed from: f  reason: collision with root package name */
    private final Task f47349f;

    /* renamed from: g  reason: collision with root package name */
    private final String f47350g;

    /* renamed from: h  reason: collision with root package name */
    private final int f47351h;

    /* renamed from: i  reason: collision with root package name */
    private final Map f47352i = new HashMap();

    /* renamed from: j  reason: collision with root package name */
    private final Map f47353j = new HashMap();

    public xj(Context context, final wj.m mVar, mj mjVar, String str) {
        int i10;
        this.f47344a = context.getPackageName();
        this.f47345b = wj.c.a(context);
        this.f47347d = mVar;
        this.f47346c = mjVar;
        jk.a();
        this.f47350g = str;
        this.f47348e = wj.g.a().b(new Callable() { // from class: rg.sj
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return xj.this.b();
            }
        });
        wj.g a10 = wj.g.a();
        Objects.requireNonNull(mVar);
        this.f47349f = a10.b(new Callable() { // from class: rg.tj
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return wj.m.this.a();
            }
        });
        o0 o0Var = f47343l;
        if (o0Var.containsKey(str)) {
            i10 = DynamiteModule.c(context, (String) o0Var.get(str));
        } else {
            i10 = -1;
        }
        this.f47351h = i10;
    }

    static long a(List list, double d10) {
        return ((Long) list.get(Math.max(((int) Math.ceil((d10 / 100.0d) * list.size())) - 1, 0))).longValue();
    }

    private static synchronized m0 i() {
        synchronized (xj.class) {
            try {
                m0 m0Var = f47342k;
                if (m0Var != null) {
                    return m0Var;
                }
                LocaleListCompat a10 = w1.e.a(Resources.getSystem().getConfiguration());
                j0 j0Var = new j0();
                for (int i10 = 0; i10 < a10.f(); i10++) {
                    j0Var.a(wj.c.b(a10.c(i10)));
                }
                m0 b10 = j0Var.b();
                f47342k = b10;
                return b10;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final String j() {
        if (this.f47348e.p()) {
            return (String) this.f47348e.l();
        }
        return hf.m.a().b(this.f47350g);
    }

    private final boolean k(je jeVar, long j10, long j11) {
        if (this.f47352i.get(jeVar) == null || j10 - ((Long) this.f47352i.get(jeVar)).longValue() > TimeUnit.SECONDS.toMillis(30L)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ String b() {
        return hf.m.a().b(this.f47350g);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void c(lj ljVar, je jeVar, String str) {
        String a10;
        ljVar.d(jeVar);
        String b10 = ljVar.b();
        ki kiVar = new ki();
        kiVar.b(this.f47344a);
        kiVar.c(this.f47345b);
        kiVar.h(i());
        kiVar.g(Boolean.TRUE);
        kiVar.l(b10);
        kiVar.j(str);
        if (this.f47349f.p()) {
            a10 = (String) this.f47349f.l();
        } else {
            a10 = this.f47347d.a();
        }
        kiVar.i(a10);
        kiVar.d(10);
        kiVar.k(Integer.valueOf(this.f47351h));
        ljVar.c(kiVar);
        this.f47346c.a(ljVar);
    }

    public final void d(lj ljVar, je jeVar) {
        e(ljVar, jeVar, j());
    }

    public final void e(final lj ljVar, final je jeVar, final String str) {
        wj.g.d().execute(new Runnable() { // from class: rg.qj
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
        this.f47352i.put(jeVar, Long.valueOf(elapsedRealtime));
        e(wjVar.zza(), jeVar, j());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void g(je jeVar, hk.t tVar) {
        r0 r0Var = (r0) this.f47353j.get(jeVar);
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
            this.f47353j.remove(jeVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void h(final je jeVar, Object obj, long j10, final hk.t tVar) {
        if (!this.f47353j.containsKey(jeVar)) {
            this.f47353j.put(jeVar, p.p());
        }
        ((r0) this.f47353j.get(jeVar)).b(obj, Long.valueOf(j10));
        long elapsedRealtime = SystemClock.elapsedRealtime();
        if (!k(jeVar, elapsedRealtime, 30L)) {
            return;
        }
        this.f47352i.put(jeVar, Long.valueOf(elapsedRealtime));
        wj.g.d().execute(new Runnable() { // from class: rg.rj
            @Override // java.lang.Runnable
            public final void run() {
                xj.this.g(jeVar, tVar);
            }
        });
    }
}
