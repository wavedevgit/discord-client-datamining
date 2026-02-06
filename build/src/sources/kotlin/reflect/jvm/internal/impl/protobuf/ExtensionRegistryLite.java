package kotlin.reflect.jvm.internal.impl.protobuf;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class ExtensionRegistryLite {

    /* renamed from: b  reason: collision with root package name */
    private static final ExtensionRegistryLite f33926b = new ExtensionRegistryLite(true);

    /* renamed from: a  reason: collision with root package name */
    private final Map f33927a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Object f33928a;

        /* renamed from: b  reason: collision with root package name */
        private final int f33929b;

        a(Object obj, int i10) {
            this.f33928a = obj;
            this.f33929b = i10;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (this.f33928a != aVar.f33928a || this.f33929b != aVar.f33929b) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return (System.identityHashCode(this.f33928a) * 65535) + this.f33929b;
        }
    }

    ExtensionRegistryLite() {
        this.f33927a = new HashMap();
    }

    public static ExtensionRegistryLite getEmptyRegistry() {
        return f33926b;
    }

    public static ExtensionRegistryLite newInstance() {
        return new ExtensionRegistryLite();
    }

    public final void add(GeneratedMessageLite.GeneratedExtension<?, ?> generatedExtension) {
        this.f33927a.put(new a(generatedExtension.getContainingTypeDefaultInstance(), generatedExtension.getNumber()), generatedExtension);
    }

    public <ContainingType extends MessageLite> GeneratedMessageLite.GeneratedExtension<ContainingType, ?> findLiteExtensionByNumber(ContainingType containingtype, int i10) {
        return (GeneratedMessageLite.GeneratedExtension) this.f33927a.get(new a(containingtype, i10));
    }

    private ExtensionRegistryLite(boolean z10) {
        this.f33927a = Collections.EMPTY_MAP;
    }
}
