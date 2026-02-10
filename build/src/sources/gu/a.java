package gu;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f24808a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f24809b;

    /* renamed from: c  reason: collision with root package name */
    private d f24810c;

    /* renamed from: d  reason: collision with root package name */
    private long f24811d;

    public a(String name, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f24808a = name;
        this.f24809b = z10;
        this.f24811d = -1L;
    }

    public final boolean a() {
        return this.f24809b;
    }

    public final String b() {
        return this.f24808a;
    }

    public final long c() {
        return this.f24811d;
    }

    public final d d() {
        return this.f24810c;
    }

    public final void e(d queue) {
        Intrinsics.checkNotNullParameter(queue, "queue");
        d dVar = this.f24810c;
        if (dVar == queue) {
            return;
        }
        if (dVar == null) {
            this.f24810c = queue;
            return;
        }
        throw new IllegalStateException("task is in multiple queues");
    }

    public abstract long f();

    public final void g(long j10) {
        this.f24811d = j10;
    }

    public String toString() {
        return this.f24808a;
    }

    public /* synthetic */ a(String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i10 & 2) != 0 ? true : z10);
    }
}
