package androidx.lifecycle;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class n0 {

    /* renamed from: a  reason: collision with root package name */
    private final m3.g f4557a = new m3.g();

    public final void a(String key, AutoCloseable closeable) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(closeable, "closeable");
        m3.g gVar = this.f4557a;
        if (gVar != null) {
            gVar.d(key, closeable);
        }
    }

    public final void b() {
        m3.g gVar = this.f4557a;
        if (gVar != null) {
            gVar.e();
        }
        d();
    }

    public final AutoCloseable c(String key) {
        Intrinsics.checkNotNullParameter(key, "key");
        m3.g gVar = this.f4557a;
        if (gVar != null) {
            return gVar.g(key);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void d() {
    }
}
