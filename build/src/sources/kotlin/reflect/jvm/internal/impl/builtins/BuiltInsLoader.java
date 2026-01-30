package kotlin.reflect.jvm.internal.impl.builtins;

import ir.l;
import ir.o;
import java.util.ServiceLoader;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentProvider;
import kotlin.reflect.jvm.internal.impl.descriptors.deserialization.AdditionalClassPartsProvider;
import kotlin.reflect.jvm.internal.impl.descriptors.deserialization.ClassDescriptorFactory;
import kotlin.reflect.jvm.internal.impl.descriptors.deserialization.PlatformDependentDeclarationFilter;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface BuiltInsLoader {
    @NotNull
    public static final Companion Companion = Companion.f33422a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ Companion f33422a = new Companion();

        /* renamed from: b  reason: collision with root package name */
        private static final Lazy f33423b = l.a(o.f31119e, a.f33475d);

        private Companion() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final BuiltInsLoader a() {
            ServiceLoader load = ServiceLoader.load(BuiltInsLoader.class, BuiltInsLoader.class.getClassLoader());
            Intrinsics.checkNotNull(load);
            BuiltInsLoader builtInsLoader = (BuiltInsLoader) CollectionsKt.p0(load);
            if (builtInsLoader != null) {
                return builtInsLoader;
            }
            throw new IllegalStateException("No BuiltInsLoader implementation was found. Please ensure that the META-INF/services/ is not stripped from your application and that the Java virtual machine is not running under a security manager");
        }

        @NotNull
        public final BuiltInsLoader getInstance() {
            return (BuiltInsLoader) f33423b.getValue();
        }
    }

    @NotNull
    PackageFragmentProvider createPackageFragmentProvider(@NotNull StorageManager storageManager, @NotNull ModuleDescriptor moduleDescriptor, @NotNull Iterable<? extends ClassDescriptorFactory> iterable, @NotNull PlatformDependentDeclarationFilter platformDependentDeclarationFilter, @NotNull AdditionalClassPartsProvider additionalClassPartsProvider, boolean z10);
}
