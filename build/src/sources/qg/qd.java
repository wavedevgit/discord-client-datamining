package qg;

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
    private static p0 f44874k;

    /* renamed from: l  reason: collision with root package name */
    private static final r0 f44875l = r0.c("optional-module-barcode", "com.google.android.gms.vision.barcode");

    /* renamed from: a  reason: collision with root package name */
    private final String f44876a;

    /* renamed from: b  reason: collision with root package name */
    private final String f44877b;

    /* renamed from: c  reason: collision with root package name */
    private final pd f44878c;

    /* renamed from: d  reason: collision with root package name */
    private final wj.m f44879d;

    /* renamed from: e  reason: collision with root package name */
    private final Task f44880e;

    /* renamed from: f  reason: collision with root package name */
    private final Task f44881f;

    /* renamed from: g  reason: collision with root package name */
    private final String f44882g;

    /* renamed from: h  reason: collision with root package name */
    private final int f44883h;

    /* renamed from: i  reason: collision with root package name */
    private final Map f44884i = new HashMap();

    /* renamed from: j  reason: collision with root package name */
    private final Map f44885j = new HashMap();

    public qd(Context context, final wj.m mVar, pd pdVar, String str) {
        int i10;
        this.f44876a = context.getPackageName();
        this.f44877b = wj.c.a(context);
        this.f44879d = mVar;
        this.f44878c = pdVar;
        ce.a();
        this.f44882g = str;
        this.f44880e = wj.g.a().b(new Callable() { // from class: qg.id
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return qd.this.b();
            }
        });
        wj.g a10 = wj.g.a();
        mVar.getClass();
        this.f44881f = a10.b(new Callable() { // from class: qg.jd
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return wj.m.this.a();
            }
        });
        r0 r0Var = f44875l;
        if (r0Var.containsKey(str)) {
            i10 = DynamiteModule.c(context, (String) r0Var.get(str));
        } else {
            i10 = -1;
        }
        this.f44883h = i10;
    }

    static long a(List list, double d10) {
        return ((Long) list.get(Math.max(((int) Math.ceil((d10 / 100.0d) * list.size())) - 1, 0))).longValue();
    }

    private static synchronized p0 i() {
        synchronized (qd.class) {
            try {
                p0 p0Var = f44874k;
                if (p0Var != null) {
                    return p0Var;
                }
                LocaleListCompat a10 = w1.e.a(Resources.getSystem().getConfiguration());
                m0 m0Var = new m0();
                for (int i10 = 0; i10 < a10.f(); i10++) {
                    m0Var.c(wj.c.b(a10.c(i10)));
                }
                p0 d10 = m0Var.d();
                f44874k = d10;
                return d10;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final String j() {
        if (this.f44880e.p()) {
            return (String) this.f44880e.l();
        }
        return hf.m.a().b(this.f44882g);
    }

    private final boolean k(da daVar, long j10, long j11) {
        if (this.f44884i.get(daVar) == null || j10 - ((Long) this.f44884i.get(daVar)).longValue() > TimeUnit.SECONDS.toMillis(30L)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ String b() {
        return hf.m.a().b(this.f44882g);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void c(ed edVar, da daVar, String str) {
        String a10;
        edVar.d(daVar);
        String b10 = edVar.b();
        fc fcVar = new fc();
        fcVar.b(this.f44876a);
        fcVar.c(this.f44877b);
        fcVar.h(i());
        fcVar.g(Boolean.TRUE);
        fcVar.l(b10);
        fcVar.j(str);
        if (this.f44881f.p()) {
            a10 = (String) this.f44881f.l();
        } else {
            a10 = this.f44879d.a();
        }
        fcVar.i(a10);
        fcVar.d(10);
        fcVar.k(Integer.valueOf(this.f44883h));
        edVar.c(fcVar);
        this.f44878c.a(edVar);
    }

    public final void d(ed edVar, da daVar) {
        e(edVar, daVar, j());
    }

    public final void e(final ed edVar, final da daVar, final String str) {
        wj.g.d().execute(new Runnable() { // from class: qg.kd
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
        this.f44884i.put(daVar, Long.valueOf(elapsedRealtime));
        e(odVar.zza(), daVar, j());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void g(da daVar, fk.h hVar) {
        u0 u0Var = (u0) this.f44885j.get(daVar);
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
            this.f44885j.remove(daVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void h(final da daVar, Object obj, long j10, final fk.h hVar) {
        if (!this.f44885j.containsKey(daVar)) {
            this.f44885j.put(daVar, t.r());
        }
        ((u0) this.f44885j.get(daVar)).d(obj, Long.valueOf(j10));
        long elapsedRealtime = SystemClock.elapsedRealtime();
        if (!k(daVar, elapsedRealtime, 30L)) {
            return;
        }
        this.f44884i.put(daVar, Long.valueOf(elapsedRealtime));
        wj.g.d().execute(new Runnable(daVar, hVar, null) { // from class: qg.md

            /* renamed from: e  reason: collision with root package name */
            public final /* synthetic */ da f44722e;

            /* renamed from: i  reason: collision with root package name */
            public final /* synthetic */ fk.h f44723i;

            @Override // java.lang.Runnable
            public final void run() {
                qd.this.g(this.f44722e, this.f44723i);
            }
        });
    }
}
