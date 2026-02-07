package lt;

import java.util.Map;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x {

    /* renamed from: a  reason: collision with root package name */
    private final Map f36781a = w.a(16);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
    }

    public final Object a(SerialDescriptor descriptor, a key) {
        Object obj;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(key, "key");
        Map map = (Map) this.f36781a.get(descriptor);
        if (map != null) {
            obj = map.get(key);
        } else {
            obj = null;
        }
        if (obj == null) {
            return null;
        }
        return obj;
    }

    public final Object b(SerialDescriptor descriptor, a key, Function0 defaultValue) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(defaultValue, "defaultValue");
        Object a10 = a(descriptor, key);
        if (a10 != null) {
            return a10;
        }
        Object invoke = defaultValue.invoke();
        c(descriptor, key, invoke);
        return invoke;
    }

    public final void c(SerialDescriptor descriptor, a key, Object value) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(value, "value");
        Map map = this.f36781a;
        Object obj = map.get(descriptor);
        if (obj == null) {
            obj = w.a(2);
            map.put(descriptor, obj);
        }
        ((Map) obj).put(key, value);
    }
}
