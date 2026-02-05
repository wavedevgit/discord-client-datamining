package androidx.metrics.performance;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class f {

    /* renamed from: b  reason: collision with root package name */
    public static final a f4752b = new a(null);

    /* renamed from: c  reason: collision with root package name */
    private static long f4753c = -1;

    /* renamed from: a  reason: collision with root package name */
    private final JankStats f4754a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final long a() {
            return f.f4753c;
        }

        public final void b(long j10) {
            f.f4753c = j10;
        }

        private a() {
        }
    }

    public f(JankStats jankStats) {
        Intrinsics.checkNotNullParameter(jankStats, "jankStats");
        this.f4754a = jankStats;
    }

    public abstract void c(boolean z10);
}
