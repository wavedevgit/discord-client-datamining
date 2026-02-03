package og;

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
import java.util.concurrent.Callable;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class qd {

    /* renamed from: k  reason: collision with root package name */
    private static p0 f43395k;

    /* renamed from: l  reason: collision with root package name */
    private static final r0 f43396l = r0.c("optional-module-barcode", "com.google.android.gms.vision.barcode");

    /* renamed from: a  reason: collision with root package name */
    private final String f43397a;

    /* renamed from: b  reason: collision with root package name */
    private final String f43398b;

    /* renamed from: c  reason: collision with root package name */
    private final pd f43399c;

    /* renamed from: d  reason: collision with root package name */
    private final pj.m f43400d;

    /* renamed from: e  reason: collision with root package name */
    private final Task f43401e;

    /* renamed from: f  reason: collision with root package name */
    private final Task f43402f;

    /* renamed from: g  reason: collision with root package name */
    private final String f43403g;

    /* renamed from: h  reason: collision with root package name */
    private final int f43404h;

    /* renamed from: i  reason: collision with root package name */
    private final Map f43405i = new HashMap();

    /* renamed from: j  reason: collision with root package name */
    private final Map f43406j = new HashMap();

    public qd(Context context, final pj.m mVar, pd pdVar, String str) {
        int i10;
        this.f43397a = context.getPackageName();
        this.f43398b = pj.c.a(context);
        this.f43400d = mVar;
        this.f43399c = pdVar;
        ce.a();
        this.f43403g = str;
        this.f43401e = pj.g.a().b(new Callable() { // from class: og.id
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return qd.this.b();
            }
        });
        pj.g a10 = pj.g.a();
        mVar.getClass();
        this.f43402f = a10.b(new Callable() { // from class: og.jd
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return pj.m.this.a();
            }
        });
        r0 r0Var = f43396l;
        if (r0Var.containsKey(str)) {
            i10 = DynamiteModule.b(context, (String) r0Var.get(str));
        } else {
            i10 = -1;
        }
        this.f43404h = i10;
    }

    static long a(List list, double d10) {
        return ((Long) list.get(Math.max(((int) Math.ceil((d10 / 100.0d) * list.size())) - 1, 0))).longValue();
    }

    private static synchronized p0 i() {
        synchronized (qd.class) {
            try {
                p0 p0Var = f43395k;
                if (p0Var != null) {
                    return p0Var;
                }
                LocaleListCompat a10 = w1.e.a(Resources.getSystem().getConfiguration());
                m0 m0Var = new m0();
                for (int i10 = 0; i10 < a10.f(); i10++) {
                    m0Var.c(pj.c.b(a10.c(i10)));
                }
                p0 d10 = m0Var.d();
                f43395k = d10;
                return d10;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final String j() {
        if (this.f43401e.p()) {
            return (String) this.f43401e.l();
        }
        return gf.m.a().b(this.f43403g);
    }

    private final boolean k(da daVar, long j10, long j11) {
        if (this.f43405i.get(daVar) == null || j10 - ((Long) this.f43405i.get(daVar)).longValue() > TimeUnit.SECONDS.toMillis(30L)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ String b() {
        return gf.m.a().b(this.f43403g);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void c(ed edVar, da daVar, String str) {
        String a10;
        edVar.d(daVar);
        String b10 = edVar.b();
        fc fcVar = new fc();
        fcVar.b(this.f43397a);
        fcVar.c(this.f43398b);
        fcVar.h(i());
        fcVar.g(Boolean.TRUE);
        fcVar.l(b10);
        fcVar.j(str);
        if (this.f43402f.p()) {
            a10 = (String) this.f43402f.l();
        } else {
            a10 = this.f43400d.a();
        }
        fcVar.i(a10);
        fcVar.d(10);
        fcVar.k(Integer.valueOf(this.f43404h));
        edVar.c(fcVar);
        this.f43399c.a(edVar);
    }

    public final void d(ed edVar, da daVar) {
        e(edVar, daVar, j());
    }

    public final void e(final ed edVar, final da daVar, final String str) {
        pj.g.d().execute(new Runnable() { // from class: og.kd
            @Override // java.lang.Runnable
            public final void run() {
                qd.this.c(edVar, daVar, str);
            }
        });
    }

    public final void f(od odVar, da daVar) {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        if (!k(daVar, elapsedRealtime, 30L)) {
            return;
        }
        this.f43405i.put(daVar, Long.valueOf(elapsedRealtime));
        e(odVar.zza(), daVar, j());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void g(da daVar, yj.h hVar) {
        u0 u0Var = (u0) this.f43406j.get(daVar);
        if (u0Var != null) {
            for (Object obj : u0Var.c()) {
                ArrayList<Long> arrayList = new ArrayList(u0Var.a(obj));
                Collections.sort(arrayList);
                c9 c9Var = new c9();
                long j10 = 0;
                for (Long l10 : arrayList) {
                    j10 += l10.longValue();
                }
                c9Var.a(Long.valueOf(j10 / arrayList.size()));
                c9Var.c(Long.valueOf(a(arrayList, 100.0d)));
                c9Var.f(Long.valueOf(a(arrayList, 75.0d)));
                c9Var.d(Long.valueOf(a(arrayList, 50.0d)));
                c9Var.b(Long.valueOf(a(arrayList, 25.0d)));
                c9Var.e(Long.valueOf(a(arrayList, 0.0d)));
                e(hVar.a(obj, arrayList.size(), c9Var.g()), daVar, j());
            }
            this.f43406j.remove(daVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void h(final da daVar, Object obj, long j10, final yj.h hVar) {
        if (!this.f43406j.containsKey(daVar)) {
            this.f43406j.put(daVar, t.r());
        }
        ((u0) this.f43406j.get(daVar)).d(obj, Long.valueOf(j10));
        long elapsedRealtime = SystemClock.elapsedRealtime();
        if (!k(daVar, elapsedRealtime, 30L)) {
            return;
        }
        this.f43405i.put(daVar, Long.valueOf(elapsedRealtime));
        pj.g.d().execute(new Runnable(daVar, hVar, null) { // from class: og.md

            /* renamed from: e  reason: collision with root package name */
            public final /* synthetic */ da f43243e;

            /* renamed from: i  reason: collision with root package name */
            public final /* synthetic */ yj.h f43244i;

            @Override // java.lang.Runnable
            public final void run() {
                qd.this.g(this.f43243e, this.f43244i);
            }
        });
    }
}
