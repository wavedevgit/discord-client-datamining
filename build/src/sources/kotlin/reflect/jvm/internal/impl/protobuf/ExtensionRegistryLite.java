package kotlin.reflect.jvm.internal.impl.protobuf;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class ExtensionRegistryLite {

    /* renamed from: b  reason: collision with root package name */
    private static final ExtensionRegistryLite f33683b = new ExtensionRegistryLite(true);

    /* renamed from: a  reason: collision with root package name */
    private final Map f33684a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Object f33685a;

        /* renamed from: b  reason: collision with root package name */
        private final int f33686b;

        a(Object obj, int i10) {
            this.f33685a = obj;
            this.f33686b = i10;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (this.f33685a != aVar.f33685a || this.f33686b != aVar.f33686b) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return (System.identityHashCode(this.f33685a) * 65535) + this.f33686b;
        }
    }

    ExtensionRegistryLite() {
        this.f33684a = new HashMap();
    }

    public static ExtensionRegistryLite getEmptyRegistry() {
        return f33683b;
    }

    public static ExtensionRegistryLite newInstance() {
        return new ExtensionRegistryLite();
    }

    public final void add(GeneratedMessageLite.GeneratedExtension<?, ?> generatedExtension) {
        this.f33684a.put(new a(generatedExtension.getContainingTypeDefaultInstance(), generatedExtension.getNumber()), generatedExtension);
    }

    public <ContainingType extends MessageLite> GeneratedMessageLite.GeneratedExtension<ContainingType, ?> findLiteExtensionByNumber(ContainingType containingtype, int i10) {
        return (GeneratedMessageLite.GeneratedExtension) this.f33684a.get(new a(containingtype, i10));
    }

    private ExtensionRegistryLite(boolean z10) {
        this.f33684a = Collections.EMPTY_MAP;
    }
}
