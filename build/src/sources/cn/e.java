package cn;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private a f7588a;

    /* renamed from: b  reason: collision with root package name */
    private a f7589b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        a a();

        void b(a aVar);
    }

    public final void a() {
        this.f7588a = null;
        this.f7589b = null;
    }

    public final a b() {
        return this.f7588a;
    }

    public final a c() {
        return this.f7589b;
    }

    public final void d(a node) {
        Intrinsics.checkNotNullParameter(node, "node");
        if (node.a() == null) {
            a aVar = this.f7589b;
            if (aVar == null) {
                if (this.f7588a == null) {
                    this.f7588a = node;
                    this.f7589b = node;
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
        this.f7588a = aVar;
    }

    public final void f(a aVar) {
        this.f7589b = aVar;
    }
}
