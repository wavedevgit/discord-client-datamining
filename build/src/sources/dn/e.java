package dn;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private a f20867a;

    /* renamed from: b  reason: collision with root package name */
    private a f20868b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        a a();

        void b(a aVar);
    }

    public final void a() {
        this.f20867a = null;
        this.f20868b = null;
    }

    public final a b() {
        return this.f20867a;
    }

    public final a c() {
        return this.f20868b;
    }

    public final void d(a node) {
        Intrinsics.checkNotNullParameter(node, "node");
        if (node.a() == null) {
            a aVar = this.f20868b;
            if (aVar == null) {
                if (this.f20867a == null) {
                    this.f20867a = node;
                    this.f20868b = node;
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
        this.f20867a = aVar;
    }

    public final void f(a aVar) {
        this.f20868b = aVar;
    }
}
