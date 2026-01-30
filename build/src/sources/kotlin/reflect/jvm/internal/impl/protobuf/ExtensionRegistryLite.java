package kotlin.reflect.jvm.internal.impl.protobuf;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class ExtensionRegistryLite {

    /* renamed from: b  reason: collision with root package name */
    private static final ExtensionRegistryLite f35216b = new ExtensionRegistryLite(true);

    /* renamed from: a  reason: collision with root package name */
    private final Map f35217a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Object f35218a;

        /* renamed from: b  reason: collision with root package name */
        private final int f35219b;

        a(Object obj, int i10) {
            this.f35218a = obj;
            this.f35219b = i10;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (this.f35218a != aVar.f35218a || this.f35219b != aVar.f35219b) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return (System.identityHashCode(this.f35218a) * 65535) + this.f35219b;
        }
    }

    ExtensionRegistryLite() {
        this.f35217a = new HashMap();
    }

    public static ExtensionRegistryLite getEmptyRegistry() {
        return f35216b;
    }

    public static ExtensionRegistryLite newInstance() {
        return new ExtensionRegistryLite();
    }

    public final void add(GeneratedMessageLite.GeneratedExtension<?, ?> generatedExtension) {
        this.f35217a.put(new a(generatedExtension.getContainingTypeDefaultInstance(), generatedExtension.getNumber()), generatedExtension);
    }

    public <ContainingType extends MessageLite> GeneratedMessageLite.GeneratedExtension<ContainingType, ?> findLiteExtensionByNumber(ContainingType containingtype, int i10) {
        return (GeneratedMessageLite.GeneratedExtension) this.f35217a.get(new a(containingtype, i10));
    }

    private ExtensionRegistryLite(boolean z10) {
        this.f35217a = Collections.EMPTY_MAP;
    }
}
