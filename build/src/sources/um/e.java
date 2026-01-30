package um;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private a f50433a;

    /* renamed from: b  reason: collision with root package name */
    private a f50434b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        a a();

        void b(a aVar);
    }

    public final void a() {
        this.f50433a = null;
        this.f50434b = null;
    }

    public final a b() {
        return this.f50433a;
    }

    public final a c() {
        return this.f50434b;
    }

    public final void d(a node) {
        Intrinsics.checkNotNullParameter(node, "node");
        if (node.a() == null) {
            a aVar = this.f50434b;
            if (aVar == null) {
                if (this.f50433a == null) {
                    this.f50433a = node;
                    this.f50434b = node;
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
        this.f50433a = aVar;
    }

    public final void f(a aVar) {
        this.f50434b = aVar;
    }
}
