package androidx.work.impl;

import android.content.Context;
import androidx.work.impl.WorkDatabase;
import java.util.concurrent.Executor;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import r3.u;
import x3.h;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\b'\u0018\u0000 \u00192\u00020\u0001:\u0001\u001aB\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u000f\u0010\u0005\u001a\u00020\u0004H&¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H&¢\u0006\u0004\b\b\u0010\tJ\u000f\u0010\u000b\u001a\u00020\nH&¢\u0006\u0004\b\u000b\u0010\fJ\u000f\u0010\u000e\u001a\u00020\rH&¢\u0006\u0004\b\u000e\u0010\u000fJ\u000f\u0010\u0011\u001a\u00020\u0010H&¢\u0006\u0004\b\u0011\u0010\u0012J\u000f\u0010\u0014\u001a\u00020\u0013H&¢\u0006\u0004\b\u0014\u0010\u0015J\u000f\u0010\u0017\u001a\u00020\u0016H&¢\u0006\u0004\b\u0017\u0010\u0018¨\u0006\u001b"}, d2 = {"Landroidx/work/impl/WorkDatabase;", "Lr3/u;", "<init>", "()V", "Lp4/v;", "H", "()Lp4/v;", "Lp4/b;", "C", "()Lp4/b;", "Lp4/z;", "I", "()Lp4/z;", "Lp4/j;", "E", "()Lp4/j;", "Lp4/o;", "F", "()Lp4/o;", "Lp4/r;", "G", "()Lp4/r;", "Lp4/e;", "D", "()Lp4/e;", "p", "a", "work-runtime_release"}, k = 1, mv = {1, 8, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class WorkDatabase extends r3.u {

    /* renamed from: p  reason: collision with root package name */
    public static final a f5551p = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final x3.h c(Context context, h.b configuration) {
            Intrinsics.checkNotNullParameter(context, "$context");
            Intrinsics.checkNotNullParameter(configuration, "configuration");
            h.b.a a10 = h.b.f53363f.a(context);
            a10.d(configuration.f53365b).c(configuration.f53366c).e(true).a(true);
            return new y3.f().a(a10.b());
        }

        public final WorkDatabase b(final Context context, Executor queryExecutor, k4.b clock, boolean z10) {
            u.a f10;
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(queryExecutor, "queryExecutor");
            Intrinsics.checkNotNullParameter(clock, "clock");
            if (z10) {
                f10 = r3.t.c(context, WorkDatabase.class).c();
            } else {
                f10 = r3.t.a(context, WorkDatabase.class, "androidx.work.workdb").f(new h.c() { // from class: androidx.work.impl.d0
                    @Override // x3.h.c
                    public final x3.h a(h.b bVar) {
                        x3.h c10;
                        c10 = WorkDatabase.a.c(context, bVar);
                        return c10;
                    }
                });
            }
            return (WorkDatabase) f10.g(queryExecutor).a(new d(clock)).b(k.f5687c).b(new v(context, 2, 3)).b(l.f5688c).b(m.f5689c).b(new v(context, 5, 6)).b(n.f5691c).b(o.f5692c).b(p.f5695c).b(new r0(context)).b(new v(context, 10, 11)).b(g.f5680c).b(h.f5683c).b(i.f5684c).b(j.f5686c).e().d();
        }

        private a() {
        }
    }

    public abstract p4.b C();

    public abstract p4.e D();

    public abstract p4.j E();

    public abstract p4.o F();

    public abstract p4.r G();

    public abstract p4.v H();

    public abstract p4.z I();
}
