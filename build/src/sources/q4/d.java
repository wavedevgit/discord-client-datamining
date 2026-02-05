package q4;

import android.os.Build;
import androidx.work.b;
import androidx.work.impl.WorkDatabase;
import androidx.work.impl.c0;
import androidx.work.impl.workers.ConstraintTrackingWorker;
import java.util.Collection;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class d {
    public static final void a(WorkDatabase workDatabase, androidx.work.a configuration, c0 continuation) {
        int i10;
        Intrinsics.checkNotNullParameter(workDatabase, "workDatabase");
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        Intrinsics.checkNotNullParameter(continuation, "continuation");
        List r10 = CollectionsKt.r(continuation);
        int i11 = 0;
        while (!r10.isEmpty()) {
            c0 c0Var = (c0) CollectionsKt.L(r10);
            List f10 = c0Var.f();
            Intrinsics.checkNotNullExpressionValue(f10, "current.work");
            List<k4.z> list = f10;
            if ((list instanceof Collection) && list.isEmpty()) {
                i10 = 0;
            } else {
                i10 = 0;
                for (k4.z zVar : list) {
                    if (zVar.d().f44897j.e() && (i10 = i10 + 1) < 0) {
                        CollectionsKt.u();
                    }
                }
            }
            i11 += i10;
            List e10 = c0Var.e();
            if (e10 != null) {
                r10.addAll(e10);
            }
        }
        if (i11 != 0) {
            int y10 = workDatabase.H().y();
            int b10 = configuration.b();
            if (y10 + i11 <= b10) {
                return;
            }
            throw new IllegalArgumentException("Too many workers with contentUriTriggers are enqueued:\ncontentUriTrigger workers limit: " + b10 + ";\nalready enqueued count: " + y10 + ";\ncurrent enqueue operation count: " + i11 + ".\nTo address this issue you can: \n1. enqueue less workers or batch some of workers with content uri triggers together;\n2. increase limit via Configuration.Builder.setContentUriTriggerWorkersLimit;\nPlease beware that workers with content uri triggers immediately occupy slots in JobScheduler so no updates to content uris are missed.");
        }
    }

    public static final p4.u b(p4.u workSpec) {
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        k4.d dVar = workSpec.f44897j;
        String str = workSpec.f44890c;
        if (!Intrinsics.areEqual(str, ConstraintTrackingWorker.class.getName()) && (dVar.f() || dVar.i())) {
            androidx.work.b a10 = new b.a().c(workSpec.f44892e).h("androidx.work.impl.workers.ConstraintTrackingWorker.ARGUMENT_CLASS_NAME", str).a();
            Intrinsics.checkNotNullExpressionValue(a10, "Builder().putAll(workSpe…ame)\n            .build()");
            String name = ConstraintTrackingWorker.class.getName();
            Intrinsics.checkNotNullExpressionValue(name, "name");
            return p4.u.e(workSpec, null, null, name, null, a10, null, 0L, 0L, 0L, null, 0, null, 0L, 0L, 0L, 0L, false, null, 0, 0, 0L, 0, 0, 8388587, null);
        }
        return workSpec;
    }

    public static final p4.u c(List schedulers, p4.u workSpec) {
        Intrinsics.checkNotNullParameter(schedulers, "schedulers");
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        if (Build.VERSION.SDK_INT < 26) {
            return b(workSpec);
        }
        return workSpec;
    }
}
