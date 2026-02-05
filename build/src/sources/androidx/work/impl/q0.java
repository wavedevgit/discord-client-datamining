package androidx.work.impl;

import android.content.Context;
import androidx.work.impl.WorkDatabase;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function6;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class q0 {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class a extends FunctionReferenceImpl implements Function6 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f5793d = new a();

        a() {
            super(6, q0.class, "createSchedulers", "createSchedulers(Landroid/content/Context;Landroidx/work/Configuration;Landroidx/work/impl/utils/taskexecutor/TaskExecutor;Landroidx/work/impl/WorkDatabase;Landroidx/work/impl/constraints/trackers/Trackers;Landroidx/work/impl/Processor;)Ljava/util/List;", 1);
        }

        @Override // kotlin.jvm.functions.Function6
        /* renamed from: a */
        public final List invoke(Context p02, androidx.work.a p12, r4.b p22, WorkDatabase p32, o4.n p42, u p52) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            Intrinsics.checkNotNullParameter(p12, "p1");
            Intrinsics.checkNotNullParameter(p22, "p2");
            Intrinsics.checkNotNullParameter(p32, "p3");
            Intrinsics.checkNotNullParameter(p42, "p4");
            Intrinsics.checkNotNullParameter(p52, "p5");
            return q0.b(p02, p12, p22, p32, p42, p52);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List b(Context context, androidx.work.a aVar, r4.b bVar, WorkDatabase workDatabase, o4.n nVar, u uVar) {
        w c10 = z.c(context, workDatabase, aVar);
        Intrinsics.checkNotNullExpressionValue(c10, "createBestAvailableBackg…kDatabase, configuration)");
        return CollectionsKt.o(c10, new l4.b(context, aVar, nVar, uVar, new o0(uVar, bVar), bVar));
    }

    public static final p0 c(Context context, androidx.work.a configuration) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        return e(context, configuration, null, null, null, null, null, 124, null);
    }

    public static final p0 d(Context context, androidx.work.a configuration, r4.b workTaskExecutor, WorkDatabase workDatabase, o4.n trackers, u processor, Function6 schedulersCreator) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(configuration, "configuration");
        Intrinsics.checkNotNullParameter(workTaskExecutor, "workTaskExecutor");
        Intrinsics.checkNotNullParameter(workDatabase, "workDatabase");
        Intrinsics.checkNotNullParameter(trackers, "trackers");
        Intrinsics.checkNotNullParameter(processor, "processor");
        Intrinsics.checkNotNullParameter(schedulersCreator, "schedulersCreator");
        return new p0(context.getApplicationContext(), configuration, workTaskExecutor, workDatabase, (List) schedulersCreator.invoke(context, configuration, workTaskExecutor, workDatabase, trackers, processor), processor, trackers);
    }

    public static /* synthetic */ p0 e(Context context, androidx.work.a aVar, r4.b bVar, WorkDatabase workDatabase, o4.n nVar, u uVar, Function6 function6, int i10, Object obj) {
        o4.n nVar2;
        u uVar2;
        a aVar2;
        if ((i10 & 4) != 0) {
            bVar = new r4.c(aVar.m());
        }
        r4.b bVar2 = bVar;
        if ((i10 & 8) != 0) {
            WorkDatabase.a aVar3 = WorkDatabase.f5632p;
            Context applicationContext = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "context.applicationContext");
            r4.a c10 = bVar2.c();
            Intrinsics.checkNotNullExpressionValue(c10, "workTaskExecutor.serialTaskExecutor");
            workDatabase = aVar3.b(applicationContext, c10, aVar.a(), context.getResources().getBoolean(k4.t.f31614a));
        }
        if ((i10 & 16) != 0) {
            Context applicationContext2 = context.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext2, "context.applicationContext");
            nVar2 = new o4.n(applicationContext2, bVar2, null, null, null, null, 60, null);
        } else {
            nVar2 = nVar;
        }
        if ((i10 & 32) != 0) {
            uVar2 = new u(context.getApplicationContext(), aVar, bVar2, workDatabase);
        } else {
            uVar2 = uVar;
        }
        if ((i10 & 64) != 0) {
            aVar2 = a.f5793d;
        } else {
            aVar2 = function6;
        }
        return d(context, aVar, bVar2, workDatabase, nVar2, uVar2, aVar2);
    }
}
