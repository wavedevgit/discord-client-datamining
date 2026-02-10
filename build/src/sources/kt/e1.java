package kt;

import java.lang.ref.SoftReference;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class e1 {

    /* renamed from: a  reason: collision with root package name */
    public volatile SoftReference f35131a = new SoftReference(null);

    public final synchronized Object a(Function0 factory) {
        Intrinsics.checkNotNullParameter(factory, "factory");
        Object obj = this.f35131a.get();
        if (obj != null) {
            return obj;
        }
        Object invoke = factory.invoke();
        this.f35131a = new SoftReference(invoke);
        return invoke;
    }
}
