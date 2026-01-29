package kotlin.reflect.jvm.internal.impl.storage;

import kotlin.jvm.functions.Function0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface NotNullLazyValue<T> extends Function0<T> {
    @Override // kotlin.jvm.functions.Function0
    /* synthetic */ Object invoke();

    boolean isComputed();
}
