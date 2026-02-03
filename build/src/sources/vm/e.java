package vm;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private a f51389a;

    /* renamed from: b  reason: collision with root package name */
    private a f51390b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        a a();

        void b(a aVar);
    }

    public final void a() {
        this.f51389a = null;
        this.f51390b = null;
    }

    public final a b() {
        return this.f51389a;
    }

    public final a c() {
        return this.f51390b;
    }

    public final void d(a node) {
        Intrinsics.checkNotNullParameter(node, "node");
        if (node.a() == null) {
            a aVar = this.f51390b;
            if (aVar == null) {
                if (this.f51389a == null) {
                    this.f51389a = node;
                    this.f51390b = node;
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
        this.f51389a = aVar;
    }

    public final void f(a aVar) {
        this.f51390b = aVar;
    }
}
