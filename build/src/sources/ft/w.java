package ft;

import java.lang.reflect.Type;
import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.KClass;
import kotlin.reflect.KType;
import kotlinx.serialization.KSerializer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class w {
    public static final KSerializer a(KClass kClass, List list, Function0 function0) {
        return z.e(kClass, list, function0);
    }

    public static final KSerializer b(Type type) {
        return x.d(type);
    }

    public static final KSerializer c(mt.b bVar, Type type) {
        return x.e(bVar, type);
    }

    public static final KSerializer d(mt.b bVar, KType kType) {
        return z.f(bVar, kType);
    }

    public static final KSerializer e(KClass kClass) {
        return z.i(kClass);
    }

    public static final KSerializer f(mt.b bVar, Type type) {
        return x.h(bVar, type);
    }

    public static final KSerializer g(mt.b bVar, KType kType) {
        return z.j(bVar, kType);
    }

    public static final List h(mt.b bVar, List list, boolean z10) {
        return z.k(bVar, list, z10);
    }
}
