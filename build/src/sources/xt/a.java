package xt;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f53813a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f53814b;

    /* renamed from: c  reason: collision with root package name */
    private d f53815c;

    /* renamed from: d  reason: collision with root package name */
    private long f53816d;

    public a(String name, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f53813a = name;
        this.f53814b = z10;
        this.f53816d = -1L;
    }

    public final boolean a() {
        return this.f53814b;
    }

    public final String b() {
        return this.f53813a;
    }

    public final long c() {
        return this.f53816d;
    }

    public final d d() {
        return this.f53815c;
    }

    public final void e(d queue) {
        Intrinsics.checkNotNullParameter(queue, "queue");
        d dVar = this.f53815c;
        if (dVar == queue) {
            return;
        }
        if (dVar == null) {
            this.f53815c = queue;
            return;
        }
        throw new IllegalStateException("task is in multiple queues");
    }

    public abstract long f();

    public final void g(long j10) {
        this.f53816d = j10;
    }

    public String toString() {
        return this.f53813a;
    }

    public /* synthetic */ a(String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i10 & 2) != 0 ? true : z10);
    }
}
