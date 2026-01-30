package xt;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f53829a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f53830b;

    /* renamed from: c  reason: collision with root package name */
    private d f53831c;

    /* renamed from: d  reason: collision with root package name */
    private long f53832d;

    public a(String name, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f53829a = name;
        this.f53830b = z10;
        this.f53832d = -1L;
    }

    public final boolean a() {
        return this.f53830b;
    }

    public final String b() {
        return this.f53829a;
    }

    public final long c() {
        return this.f53832d;
    }

    public final d d() {
        return this.f53831c;
    }

    public final void e(d queue) {
        Intrinsics.checkNotNullParameter(queue, "queue");
        d dVar = this.f53831c;
        if (dVar == queue) {
            return;
        }
        if (dVar == null) {
            this.f53831c = queue;
            return;
        }
        throw new IllegalStateException("task is in multiple queues");
    }

    public abstract long f();

    public final void g(long j10) {
        this.f53832d = j10;
    }

    public String toString() {
        return this.f53829a;
    }

    public /* synthetic */ a(String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i10 & 2) != 0 ? true : z10);
    }
}
