package yt;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f55183a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f55184b;

    /* renamed from: c  reason: collision with root package name */
    private d f55185c;

    /* renamed from: d  reason: collision with root package name */
    private long f55186d;

    public a(String name, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f55183a = name;
        this.f55184b = z10;
        this.f55186d = -1L;
    }

    public final boolean a() {
        return this.f55184b;
    }

    public final String b() {
        return this.f55183a;
    }

    public final long c() {
        return this.f55186d;
    }

    public final d d() {
        return this.f55185c;
    }

    public final void e(d queue) {
        Intrinsics.checkNotNullParameter(queue, "queue");
        d dVar = this.f55185c;
        if (dVar == queue) {
            return;
        }
        if (dVar == null) {
            this.f55185c = queue;
            return;
        }
        throw new IllegalStateException("task is in multiple queues");
    }

    public abstract long f();

    public final void g(long j10) {
        this.f55186d = j10;
    }

    public String toString() {
        return this.f55183a;
    }

    public /* synthetic */ a(String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i10 & 2) != 0 ? true : z10);
    }
}
