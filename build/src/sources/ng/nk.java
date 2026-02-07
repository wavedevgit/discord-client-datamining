package ng;

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
public final class nk {

    /* renamed from: k  reason: collision with root package name */
    private static i1 f40165k;

    /* renamed from: l  reason: collision with root package name */
    private static final k1 f40166l = k1.c("optional-module-barcode", "com.google.android.gms.vision.barcode");

    /* renamed from: a  reason: collision with root package name */
    private final String f40167a;

    /* renamed from: b  reason: collision with root package name */
    private final String f40168b;

    /* renamed from: c  reason: collision with root package name */
    private final dk f40169c;

    /* renamed from: d  reason: collision with root package name */
    private final tj.m f40170d;

    /* renamed from: e  reason: collision with root package name */
    private final Task f40171e;

    /* renamed from: f  reason: collision with root package name */
    private final Task f40172f;

    /* renamed from: g  reason: collision with root package name */
    private final String f40173g;

    /* renamed from: h  reason: collision with root package name */
    private final int f40174h;

    /* renamed from: i  reason: collision with root package name */
    private final Map f40175i = new HashMap();

    /* renamed from: j  reason: collision with root package name */
    private final Map f40176j = new HashMap();

    public nk(Context context, final tj.m mVar, dk dkVar, String str) {
        int i10;
        this.f40167a = context.getPackageName();
        this.f40168b = tj.c.a(context);
        this.f40170d = mVar;
        this.f40169c = dkVar;
        al.a();
        this.f40173g = str;
        this.f40171e = tj.g.a().b(new Callable() { // from class: ng.jk
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return nk.this.b();
            }
        });
        tj.g a10 = tj.g.a();
        Objects.requireNonNull(mVar);
        this.f40172f = a10.b(new Callable() { // from class: ng.kk
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return tj.m.this.a();
            }
        });
        k1 k1Var = f40166l;
        if (k1Var.containsKey(str)) {
            i10 = DynamiteModule.c(context, (String) k1Var.get(str));
        } else {
            i10 = -1;
        }
        this.f40174h = i10;
    }

    static long a(List list, double d10) {
        return ((Long) list.get(Math.max(((int) Math.ceil((d10 / 100.0d) * list.size())) - 1, 0))).longValue();
    }

    private static synchronized i1 i() {
        synchronized (nk.class) {
            try {
                i1 i1Var = f40165k;
                if (i1Var != null) {
                    return i1Var;
                }
                LocaleListCompat a10 = w1.e.a(Resources.getSystem().getConfiguration());
                f1 f1Var = new f1();
                for (int i10 = 0; i10 < a10.f(); i10++) {
                    f1Var.e(tj.c.b(a10.c(i10)));
                }
                i1 g10 = f1Var.g();
                f40165k = g10;
                return g10;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private final String j() {
        if (this.f40171e.p()) {
            return (String) this.f40171e.l();
        }
        return gf.m.a().b(this.f40173g);
    }

    private final boolean k(ye yeVar, long j10, long j11) {
        if (this.f40175i.get(yeVar) == null || j10 - ((Long) this.f40175i.get(yeVar)).longValue() > TimeUnit.SECONDS.toMillis(30L)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ String b() {
        return gf.m.a().b(this.f40173g);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void c(ck ckVar, ye yeVar, String str) {
        String a10;
        ckVar.d(yeVar);
        String b10 = ckVar.b();
        yi yiVar = new yi();
        yiVar.b(this.f40167a);
        yiVar.c(this.f40168b);
        yiVar.h(i());
        yiVar.g(Boolean.TRUE);
        yiVar.l(b10);
        yiVar.j(str);
        if (this.f40172f.p()) {
            a10 = (String) this.f40172f.l();
        } else {
            a10 = this.f40170d.a();
        }
        yiVar.i(a10);
        yiVar.d(10);
        yiVar.k(Integer.valueOf(this.f40174h));
        ckVar.c(yiVar);
        this.f40169c.a(ckVar);
    }

    public final void d(ck ckVar, ye yeVar) {
        e(ckVar, yeVar, j());
    }

    public final void e(final ck ckVar, final ye yeVar, final String str) {
        tj.g.d().execute(new Runnable() { // from class: ng.hk
            @Override // java.lang.Runnable
            public final void run() {
                nk.this.c(ckVar, yeVar, str);
            }
        });
    }

    public final void f(mk mkVar, ye yeVar) {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        if (!k(yeVar, elapsedRealtime, 30L)) {
            return;
        }
        this.f40175i.put(yeVar, Long.valueOf(elapsedRealtime));
        e(mkVar.zza(), yeVar, j());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void g(ye yeVar, yj.j jVar) {
        n1 n1Var = (n1) this.f40176j.get(yeVar);
        if (n1Var != null) {
            for (Object obj : n1Var.b()) {
                ArrayList<Long> arrayList = new ArrayList(n1Var.a(obj));
                Collections.sort(arrayList);
                wd wdVar = new wd();
                long j10 = 0;
                for (Long l10 : arrayList) {
                    j10 += l10.longValue();
                }
                wdVar.a(Long.valueOf(j10 / arrayList.size()));
                wdVar.c(Long.valueOf(a(arrayList, 100.0d)));
                wdVar.f(Long.valueOf(a(arrayList, 75.0d)));
                wdVar.d(Long.valueOf(a(arrayList, 50.0d)));
                wdVar.b(Long.valueOf(a(arrayList, 25.0d)));
                wdVar.e(Long.valueOf(a(arrayList, 0.0d)));
                e(jVar.a(obj, arrayList.size(), wdVar.g()), yeVar, j());
            }
            this.f40176j.remove(yeVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void h(final ye yeVar, Object obj, long j10, final yj.j jVar) {
        if (!this.f40176j.containsKey(yeVar)) {
            this.f40176j.put(yeVar, l0.p());
        }
        ((n1) this.f40176j.get(yeVar)).c(obj, Long.valueOf(j10));
        long elapsedRealtime = SystemClock.elapsedRealtime();
        if (!k(yeVar, elapsedRealtime, 30L)) {
            return;
        }
        this.f40175i.put(yeVar, Long.valueOf(elapsedRealtime));
        tj.g.d().execute(new Runnable() { // from class: ng.ik
            @Override // java.lang.Runnable
            public final void run() {
                nk.this.g(yeVar, jVar);
            }
        });
    }
}
