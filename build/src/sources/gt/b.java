package gt;

import at.o;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.reflect.KClass;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.KSerializer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {
    public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public static /* synthetic */ KSerializer c(b bVar, KClass kClass, List list, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 2) != 0) {
                list = CollectionsKt.l();
            }
            return bVar.b(kClass, list);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: getContextual");
    }

    public abstract void a(d dVar);

    public abstract KSerializer b(KClass kClass, List list);

    public abstract boolean d();

    public abstract o e(KClass kClass, Object obj);

    public abstract DeserializationStrategy f(KClass kClass, String str);

    private b() {
    }
}
