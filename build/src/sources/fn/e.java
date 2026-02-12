package fn;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private a f23884a;

    /* renamed from: b  reason: collision with root package name */
    private a f23885b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        a a();

        void b(a aVar);
    }

    public final void a() {
        this.f23884a = null;
        this.f23885b = null;
    }

    public final a b() {
        return this.f23884a;
    }

    public final a c() {
        return this.f23885b;
    }

    public final void d(a node) {
        Intrinsics.checkNotNullParameter(node, "node");
        if (node.a() == null) {
            a aVar = this.f23885b;
            if (aVar == null) {
                if (this.f23884a == null) {
                    this.f23884a = node;
                    this.f23885b = node;
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
        this.f23884a = aVar;
    }

    public final void f(a aVar) {
        this.f23885b = aVar;
    }
}
