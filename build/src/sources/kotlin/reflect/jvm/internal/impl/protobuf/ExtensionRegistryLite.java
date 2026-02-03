package kotlin.reflect.jvm.internal.impl.protobuf;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class ExtensionRegistryLite {

    /* renamed from: b  reason: collision with root package name */
    private static final ExtensionRegistryLite f34382b = new ExtensionRegistryLite(true);

    /* renamed from: a  reason: collision with root package name */
    private final Map f34383a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Object f34384a;

        /* renamed from: b  reason: collision with root package name */
        private final int f34385b;

        a(Object obj, int i10) {
            this.f34384a = obj;
            this.f34385b = i10;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (this.f34384a != aVar.f34384a || this.f34385b != aVar.f34385b) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return (System.identityHashCode(this.f34384a) * 65535) + this.f34385b;
        }
    }

    ExtensionRegistryLite() {
        this.f34383a = new HashMap();
    }

    public static ExtensionRegistryLite getEmptyRegistry() {
        return f34382b;
    }

    public static ExtensionRegistryLite newInstance() {
        return new ExtensionRegistryLite();
    }

    public final void add(GeneratedMessageLite.GeneratedExtension<?, ?> generatedExtension) {
        this.f34383a.put(new a(generatedExtension.getContainingTypeDefaultInstance(), generatedExtension.getNumber()), generatedExtension);
    }

    public <ContainingType extends MessageLite> GeneratedMessageLite.GeneratedExtension<ContainingType, ?> findLiteExtensionByNumber(ContainingType containingtype, int i10) {
        return (GeneratedMessageLite.GeneratedExtension) this.f34383a.get(new a(containingtype, i10));
    }

    private ExtensionRegistryLite(boolean z10) {
        this.f34383a = Collections.EMPTY_MAP;
    }
}
