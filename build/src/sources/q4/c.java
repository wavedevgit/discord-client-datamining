package q4;

import android.text.TextUtils;
import androidx.work.impl.WorkDatabase;
import androidx.work.impl.background.systemalarm.RescheduleReceiver;
import androidx.work.impl.c0;
import androidx.work.impl.p0;
import java.util.List;
import k4.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c implements Runnable {

    /* renamed from: i  reason: collision with root package name */
    private static final String f46932i = k4.m.i("EnqueueRunnable");

    /* renamed from: d  reason: collision with root package name */
    private final c0 f46933d;

    /* renamed from: e  reason: collision with root package name */
    private final androidx.work.impl.q f46934e;

    public c(c0 c0Var) {
        this(c0Var, new androidx.work.impl.q());
    }

    private static boolean b(c0 c0Var) {
        boolean c10 = c(c0Var.g(), c0Var.f(), (String[]) c0.l(c0Var).toArray(new String[0]), c0Var.d(), c0Var.b());
        c0Var.k();
        return c10;
    }

    /* JADX WARN: Removed duplicated region for block: B:42:0x009e  */
    /* JADX WARN: Removed duplicated region for block: B:88:0x0167  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static boolean c(androidx.work.impl.p0 r18, java.util.List r19, java.lang.String[] r20, java.lang.String r21, k4.f r22) {
        /*
            Method dump skipped, instructions count: 495
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: q4.c.c(androidx.work.impl.p0, java.util.List, java.lang.String[], java.lang.String, k4.f):boolean");
    }

    private static boolean e(c0 c0Var) {
        List<c0> e10 = c0Var.e();
        boolean z10 = false;
        if (e10 != null) {
            for (c0 c0Var2 : e10) {
                if (!c0Var2.j()) {
                    z10 |= e(c0Var2);
                } else {
                    k4.m e11 = k4.m.e();
                    String str = f46932i;
                    e11.k(str, "Already enqueued work ids (" + TextUtils.join(", ", c0Var2.c()) + ")");
                }
            }
        }
        return b(c0Var) | z10;
    }

    public boolean a() {
        p0 g10 = this.f46933d.g();
        WorkDatabase p10 = g10.p();
        p10.e();
        try {
            d.a(p10, g10.i(), this.f46933d);
            boolean e10 = e(this.f46933d);
            p10.A();
            return e10;
        } finally {
            p10.i();
        }
    }

    public k4.q d() {
        return this.f46934e;
    }

    public void f() {
        p0 g10 = this.f46933d.g();
        androidx.work.impl.z.f(g10.i(), g10.p(), g10.n());
    }

    @Override // java.lang.Runnable
    public void run() {
        try {
            if (!this.f46933d.h()) {
                if (a()) {
                    m.c(this.f46933d.g().h(), RescheduleReceiver.class, true);
                    f();
                }
                this.f46934e.a(k4.q.f33001a);
                return;
            }
            throw new IllegalStateException("WorkContinuation has cycles (" + this.f46933d + ")");
        } catch (Throwable th2) {
            this.f46934e.a(new q.b.a(th2));
        }
    }

    public c(c0 c0Var, androidx.work.impl.q qVar) {
        this.f46933d = c0Var;
        this.f46934e = qVar;
    }
}
