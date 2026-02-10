package pu;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f43203a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f43204b;

    /* renamed from: c  reason: collision with root package name */
    private d f43205c;

    /* renamed from: d  reason: collision with root package name */
    private long f43206d;

    public a(String name, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f43203a = name;
        this.f43204b = z10;
        this.f43206d = -1L;
    }

    public final boolean a() {
        return this.f43204b;
    }

    public final String b() {
        return this.f43203a;
    }

    public final long c() {
        return this.f43206d;
    }

    public final d d() {
        return this.f43205c;
    }

    public final void e(d queue) {
        Intrinsics.checkNotNullParameter(queue, "queue");
        d dVar = this.f43205c;
        if (dVar == queue) {
            return;
        }
        if (dVar == null) {
            this.f43205c = queue;
            return;
        }
        throw new IllegalStateException("task is in multiple queues");
    }

    public abstract long f();

    public final void g(long j10) {
        this.f43206d = j10;
    }

    public String toString() {
        return this.f43203a;
    }

    public /* synthetic */ a(String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i10 & 2) != 0 ? true : z10);
    }
}
