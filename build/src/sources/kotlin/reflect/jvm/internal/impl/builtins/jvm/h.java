package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import kotlin.Pair;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final JvmBuiltInsCustomizer f33356d;

    public h(JvmBuiltInsCustomizer jvmBuiltInsCustomizer) {
        this.f33356d = jvmBuiltInsCustomizer;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Annotations n10;
        n10 = JvmBuiltInsCustomizer.n(this.f33356d, (Pair) obj);
        return n10;
    }
}
