package jt;

import java.lang.ref.SoftReference;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class e1 {

    /* renamed from: a  reason: collision with root package name */
    public volatile SoftReference f30991a = new SoftReference(null);

    public final synchronized Object a(Function0 factory) {
        Intrinsics.checkNotNullParameter(factory, "factory");
        Object obj = this.f30991a.get();
        if (obj != null) {
            return obj;
        }
        Object invoke = factory.invoke();
        this.f30991a = new SoftReference(invoke);
        return invoke;
    }
}
