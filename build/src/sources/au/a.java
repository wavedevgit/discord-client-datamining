package au;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f6141a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f6142b;

    /* renamed from: c  reason: collision with root package name */
    private d f6143c;

    /* renamed from: d  reason: collision with root package name */
    private long f6144d;

    public a(String name, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f6141a = name;
        this.f6142b = z10;
        this.f6144d = -1L;
    }

    public final boolean a() {
        return this.f6142b;
    }

    public final String b() {
        return this.f6141a;
    }

    public final long c() {
        return this.f6144d;
    }

    public final d d() {
        return this.f6143c;
    }

    public final void e(d queue) {
        Intrinsics.checkNotNullParameter(queue, "queue");
        d dVar = this.f6143c;
        if (dVar == queue) {
            return;
        }
        if (dVar == null) {
            this.f6143c = queue;
            return;
        }
        throw new IllegalStateException("task is in multiple queues");
    }

    public abstract long f();

    public final void g(long j10) {
        this.f6144d = j10;
    }

    public String toString() {
        return this.f6141a;
    }

    public /* synthetic */ a(String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i10 & 2) != 0 ? true : z10);
    }
}
