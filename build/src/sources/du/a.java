package du;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f21246a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f21247b;

    /* renamed from: c  reason: collision with root package name */
    private d f21248c;

    /* renamed from: d  reason: collision with root package name */
    private long f21249d;

    public a(String name, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f21246a = name;
        this.f21247b = z10;
        this.f21249d = -1L;
    }

    public final boolean a() {
        return this.f21247b;
    }

    public final String b() {
        return this.f21246a;
    }

    public final long c() {
        return this.f21249d;
    }

    public final d d() {
        return this.f21248c;
    }

    public final void e(d queue) {
        Intrinsics.checkNotNullParameter(queue, "queue");
        d dVar = this.f21248c;
        if (dVar == queue) {
            return;
        }
        if (dVar == null) {
            this.f21248c = queue;
            return;
        }
        throw new IllegalStateException("task is in multiple queues");
    }

    public abstract long f();

    public final void g(long j10) {
        this.f21249d = j10;
    }

    public String toString() {
        return this.f21246a;
    }

    public /* synthetic */ a(String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i10 & 2) != 0 ? true : z10);
    }
}
