package kotlin.reflect.jvm.internal.impl.resolve.scopes;

import kotlin.reflect.jvm.internal.impl.resolve.scopes.DescriptorKindFilter;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class DescriptorKindExclude {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class NonExtensions extends DescriptorKindExclude {
        @NotNull
        public static final NonExtensions INSTANCE = new NonExtensions();

        /* renamed from: a  reason: collision with root package name */
        private static final int f35487a;

        static {
            DescriptorKindFilter.Companion companion = DescriptorKindFilter.Companion;
            f35487a = (~(companion.getVARIABLES_MASK() | companion.getFUNCTIONS_MASK())) & companion.getALL_KINDS_MASK();
        }

        private NonExtensions() {
        }

        @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.DescriptorKindExclude
        public int getFullyExcludedDescriptorKinds() {
            return f35487a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class TopLevelPackages extends DescriptorKindExclude {
        @NotNull
        public static final TopLevelPackages INSTANCE = new TopLevelPackages();

        private TopLevelPackages() {
        }

        @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.DescriptorKindExclude
        public int getFullyExcludedDescriptorKinds() {
            return 0;
        }
    }

    public abstract int getFullyExcludedDescriptorKinds();

    public String toString() {
        return getClass().getSimpleName();
    }
}
