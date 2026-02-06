package androidx.work.impl;

import android.content.Context;
import androidx.work.impl.background.systemjob.SystemJobService;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class z {

    /* renamed from: a  reason: collision with root package name */
    private static final String f6225a = k4.m.i("Schedulers");

    public static /* synthetic */ void b(List list, p4.m mVar, androidx.work.a aVar, WorkDatabase workDatabase) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            ((w) it.next()).c(mVar.b());
        }
        f(aVar, workDatabase, list);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static w c(Context context, WorkDatabase workDatabase, androidx.work.a aVar) {
        androidx.work.impl.background.systemjob.b bVar = new androidx.work.impl.background.systemjob.b(context, workDatabase, aVar);
        q4.m.c(context, SystemJobService.class, true);
        k4.m.e().a(f6225a, "Created SystemJobScheduler and enabled SystemJobService");
        return bVar;
    }

    private static void d(p4.v vVar, k4.b bVar, List list) {
        if (list.size() > 0) {
            long a10 = bVar.a();
            Iterator it = list.iterator();
            while (it.hasNext()) {
                vVar.o(((p4.u) it.next()).f43685a, a10);
            }
        }
    }

    public static void e(final List list, u uVar, final Executor executor, final WorkDatabase workDatabase, final androidx.work.a aVar) {
        uVar.e(new f() { // from class: androidx.work.impl.x
            @Override // androidx.work.impl.f
            public final void b(p4.m mVar, boolean z10) {
                executor.execute(new Runnable() { // from class: androidx.work.impl.y
                    @Override // java.lang.Runnable
                    public final void run() {
                        z.b(r1, mVar, r3, r4);
                    }
                });
            }
        });
    }

    public static void f(androidx.work.a aVar, WorkDatabase workDatabase, List list) {
        if (list != null && list.size() != 0) {
            p4.v H = workDatabase.H();
            workDatabase.e();
            try {
                List v10 = H.v();
                d(H, aVar.a(), v10);
                List q10 = H.q(aVar.h());
                d(H, aVar.a(), q10);
                if (v10 != null) {
                    q10.addAll(v10);
                }
                List l10 = H.l(androidx.recyclerview.widget.h.DEFAULT_DRAG_ANIMATION_DURATION);
                workDatabase.A();
                workDatabase.i();
                if (q10.size() > 0) {
                    p4.u[] uVarArr = (p4.u[]) q10.toArray(new p4.u[q10.size()]);
                    Iterator it = list.iterator();
                    while (it.hasNext()) {
                        w wVar = (w) it.next();
                        if (wVar.d()) {
                            wVar.e(uVarArr);
                        }
                    }
                }
                if (l10.size() > 0) {
                    p4.u[] uVarArr2 = (p4.u[]) l10.toArray(new p4.u[l10.size()]);
                    Iterator it2 = list.iterator();
                    while (it2.hasNext()) {
                        w wVar2 = (w) it2.next();
                        if (!wVar2.d()) {
                            wVar2.e(uVarArr2);
                        }
                    }
                }
            } catch (Throwable th2) {
                workDatabase.i();
                throw th2;
            }
        }
    }
}
