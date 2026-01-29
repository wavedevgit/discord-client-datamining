package um;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private a f50417a;

    /* renamed from: b  reason: collision with root package name */
    private a f50418b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        a a();

        void b(a aVar);
    }

    public final void a() {
        this.f50417a = null;
        this.f50418b = null;
    }

    public final a b() {
        return this.f50417a;
    }

    public final a c() {
        return this.f50418b;
    }

    public final void d(a node) {
        Intrinsics.checkNotNullParameter(node, "node");
        if (node.a() == null) {
            a aVar = this.f50418b;
            if (aVar == null) {
                if (this.f50417a == null) {
                    this.f50417a = node;
                    this.f50418b = node;
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
        this.f50417a = aVar;
    }

    public final void f(a aVar) {
        this.f50418b = aVar;
    }
}
