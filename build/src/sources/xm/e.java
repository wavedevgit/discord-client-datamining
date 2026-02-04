package xm;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private a f53425a;

    /* renamed from: b  reason: collision with root package name */
    private a f53426b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        a a();

        void b(a aVar);
    }

    public final void a() {
        this.f53425a = null;
        this.f53426b = null;
    }

    public final a b() {
        return this.f53425a;
    }

    public final a c() {
        return this.f53426b;
    }

    public final void d(a node) {
        Intrinsics.checkNotNullParameter(node, "node");
        if (node.a() == null) {
            a aVar = this.f53426b;
            if (aVar == null) {
                if (this.f53425a == null) {
                    this.f53425a = node;
                    this.f53426b = node;
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
        this.f53425a = aVar;
    }

    public final void f(a aVar) {
        this.f53426b = aVar;
    }
}
