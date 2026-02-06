package fu;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f23753a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f23754b;

    /* renamed from: c  reason: collision with root package name */
    private d f23755c;

    /* renamed from: d  reason: collision with root package name */
    private long f23756d;

    public a(String name, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f23753a = name;
        this.f23754b = z10;
        this.f23756d = -1L;
    }

    public final boolean a() {
        return this.f23754b;
    }

    public final String b() {
        return this.f23753a;
    }

    public final long c() {
        return this.f23756d;
    }

    public final d d() {
        return this.f23755c;
    }

    public final void e(d queue) {
        Intrinsics.checkNotNullParameter(queue, "queue");
        d dVar = this.f23755c;
        if (dVar == queue) {
            return;
        }
        if (dVar == null) {
            this.f23755c = queue;
            return;
        }
        throw new IllegalStateException("task is in multiple queues");
    }

    public abstract long f();

    public final void g(long j10) {
        this.f23756d = j10;
    }

    public String toString() {
        return this.f23753a;
    }

    public /* synthetic */ a(String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i10 & 2) != 0 ? true : z10);
    }
}
