package an;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private a f792a;

    /* renamed from: b  reason: collision with root package name */
    private a f793b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        a a();

        void b(a aVar);
    }

    public final void a() {
        this.f792a = null;
        this.f793b = null;
    }

    public final a b() {
        return this.f792a;
    }

    public final a c() {
        return this.f793b;
    }

    public final void d(a node) {
        Intrinsics.checkNotNullParameter(node, "node");
        if (node.a() == null) {
            a aVar = this.f793b;
            if (aVar == null) {
                if (this.f792a == null) {
                    this.f792a = node;
                    this.f793b = node;
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
        this.f792a = aVar;
    }

    public final void f(a aVar) {
        this.f793b = aVar;
    }
}
