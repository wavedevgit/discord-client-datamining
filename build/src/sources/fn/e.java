package fn;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private a f23883a;

    /* renamed from: b  reason: collision with root package name */
    private a f23884b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        a a();

        void b(a aVar);
    }

    public final void a() {
        this.f23883a = null;
        this.f23884b = null;
    }

    public final a b() {
        return this.f23883a;
    }

    public final a c() {
        return this.f23884b;
    }

    public final void d(a node) {
        Intrinsics.checkNotNullParameter(node, "node");
        if (node.a() == null) {
            a aVar = this.f23884b;
            if (aVar == null) {
                if (this.f23883a == null) {
                    this.f23883a = node;
                    this.f23884b = node;
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
        this.f23883a = aVar;
    }

    public final void f(a aVar) {
        this.f23884b = aVar;
    }
}
