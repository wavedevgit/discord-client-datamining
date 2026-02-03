package androidx.work.impl.workers;

import android.content.Context;
import androidx.recyclerview.widget.h;
import androidx.work.Worker;
import androidx.work.WorkerParameters;
import androidx.work.c;
import androidx.work.impl.WorkDatabase;
import androidx.work.impl.p0;
import java.util.List;
import java.util.concurrent.TimeUnit;
import k4.m;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import p4.j;
import p4.o;
import p4.v;
import p4.z;
import s4.e;
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0000\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u000f\u0010\t\u001a\u00020\bH\u0016¢\u0006\u0004\b\t\u0010\n¨\u0006\u000b"}, d2 = {"Landroidx/work/impl/workers/DiagnosticsWorker;", "Landroidx/work/Worker;", "Landroid/content/Context;", "context", "Landroidx/work/WorkerParameters;", "parameters", "<init>", "(Landroid/content/Context;Landroidx/work/WorkerParameters;)V", "Landroidx/work/c$a;", "p", "()Landroidx/work/c$a;", "work-runtime_release"}, k = 1, mv = {1, 8, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class DiagnosticsWorker extends Worker {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public DiagnosticsWorker(@NotNull Context context, @NotNull WorkerParameters parameters) {
        super(context, parameters);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(parameters, "parameters");
    }

    @Override // androidx.work.Worker
    public c.a p() {
        String str;
        String str2;
        String d10;
        String str3;
        String str4;
        String d11;
        String str5;
        String str6;
        String d12;
        p0 k10 = p0.k(b());
        Intrinsics.checkNotNullExpressionValue(k10, "getInstance(applicationContext)");
        WorkDatabase p10 = k10.p();
        Intrinsics.checkNotNullExpressionValue(p10, "workManager.workDatabase");
        v H = p10.H();
        o F = p10.F();
        z I = p10.I();
        j E = p10.E();
        List c10 = H.c(k10.i().a().a() - TimeUnit.DAYS.toMillis(1L));
        List t10 = H.t();
        List l10 = H.l(h.DEFAULT_DRAG_ANIMATION_DURATION);
        if (!c10.isEmpty()) {
            m e10 = m.e();
            str5 = e.f49183a;
            e10.f(str5, "Recently completed work:\n\n");
            m e11 = m.e();
            str6 = e.f49183a;
            d12 = e.d(F, I, E, c10);
            e11.f(str6, d12);
        }
        if (!t10.isEmpty()) {
            m e12 = m.e();
            str3 = e.f49183a;
            e12.f(str3, "Running work:\n\n");
            m e13 = m.e();
            str4 = e.f49183a;
            d11 = e.d(F, I, E, t10);
            e13.f(str4, d11);
        }
        if (!l10.isEmpty()) {
            m e14 = m.e();
            str = e.f49183a;
            e14.f(str, "Enqueued work:\n\n");
            m e15 = m.e();
            str2 = e.f49183a;
            d10 = e.d(F, I, E, l10);
            e15.f(str2, d10);
        }
        c.a c11 = c.a.c();
        Intrinsics.checkNotNullExpressionValue(c11, "success()");
        return c11;
    }
}
