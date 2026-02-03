package xm;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private a f53428a;

    /* renamed from: b  reason: collision with root package name */
    private a f53429b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        a a();

        void b(a aVar);
    }

    public final void a() {
        this.f53428a = null;
        this.f53429b = null;
    }

    public final a b() {
        return this.f53428a;
    }

    public final a c() {
        return this.f53429b;
    }

    public final void d(a node) {
        Intrinsics.checkNotNullParameter(node, "node");
        if (node.a() == null) {
            a aVar = this.f53429b;
            if (aVar == null) {
                if (this.f53428a == null) {
                    this.f53428a = node;
                    this.f53429b = node;
                    return;
                }
                throw new IllegalStateException("Check failed.");
            }
            f(node);
            aVar.b(node);
            return;
        }
        throw new IllegalArgumentException("Expected node to not be linked.");
    }

    public final void e(a aVar) {
        this.f53428a = aVar;
    }

    public final void f(a aVar) {
        this.f53429b = aVar;
    }
}
