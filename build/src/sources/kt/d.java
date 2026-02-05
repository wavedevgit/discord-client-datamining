package kt;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.KClass;
import kotlinx.serialization.KSerializer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface d {
    void a(KClass kClass, KClass kClass2, KSerializer kSerializer);

    void b(KClass kClass, Function1 function1);

    void c(KClass kClass, Function1 function1);
}
