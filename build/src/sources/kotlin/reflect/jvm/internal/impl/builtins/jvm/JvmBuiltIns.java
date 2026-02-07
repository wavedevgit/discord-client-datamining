package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.deserialization.AdditionalClassPartsProvider;
import kotlin.reflect.jvm.internal.impl.descriptors.deserialization.PlatformDependentDeclarationFilter;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.ModuleDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.StorageKt;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import org.jetbrains.annotations.NotNull;
import qr.p;
@SourceDebugExtension({"SMAP\nJvmBuiltIns.kt\nKotlin\n*S Kotlin\n*F\n+ 1 JvmBuiltIns.kt\norg/jetbrains/kotlin/builtins/jvm/JvmBuiltIns\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 coreLib.kt\norg/jetbrains/kotlin/utils/CoreLibKt\n*L\n1#1,103:1\n1#2:104\n19#3:105\n*S KotlinDebug\n*F\n+ 1 JvmBuiltIns.kt\norg/jetbrains/kotlin/builtins/jvm/JvmBuiltIns\n*L\n80#1:105\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JvmBuiltIns extends KotlinBuiltIns {

    /* renamed from: j  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f32292j = {Reflection.property1(new PropertyReference1Impl(JvmBuiltIns.class, "customizer", "getCustomizer()Lorg/jetbrains/kotlin/builtins/jvm/JvmBuiltInsCustomizer;", 0))};

    /* renamed from: g  reason: collision with root package name */
    private final Kind f32293g;

    /* renamed from: h  reason: collision with root package name */
    private Function0 f32294h;

    /* renamed from: i  reason: collision with root package name */
    private final NotNullLazyValue f32295i;

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Kind {

        /* renamed from: d  reason: collision with root package name */
        private static final /* synthetic */ Kind[] f32296d;

        /* renamed from: e  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f32297e;
        public static final Kind FROM_DEPENDENCIES = new Kind("FROM_DEPENDENCIES", 0);
        public static final Kind FROM_CLASS_LOADER = new Kind("FROM_CLASS_LOADER", 1);
        public static final Kind FALLBACK = new Kind("FALLBACK", 2);

        static {
            Kind[] a10 = a();
            f32296d = a10;
            f32297e = xr.a.a(a10);
        }

        private Kind(String str, int i10) {
        }

        private static final /* synthetic */ Kind[] a() {
            return new Kind[]{FROM_DEPENDENCIES, FROM_CLASS_LOADER, FALLBACK};
        }

        public static Kind valueOf(String str) {
            return (Kind) Enum.valueOf(Kind.class, str);
        }

        public static Kind[] values() {
            return (Kind[]) f32296d.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Settings {

        /* renamed from: a  reason: collision with root package name */
        private final ModuleDescriptor f32298a;

        /* renamed from: b  reason: collision with root package name */
        private final boolean f32299b;

        public Settings(@NotNull ModuleDescriptor ownerModuleDescriptor, boolean z10) {
            Intrinsics.checkNotNullParameter(ownerModuleDescriptor, "ownerModuleDescriptor");
            this.f32298a = ownerModuleDescriptor;
            this.f32299b = z10;
        }

        @NotNull
        public final ModuleDescriptor getOwnerModuleDescriptor() {
            return this.f32298a;
        }

        public final boolean isAdditionalBuiltInsFeatureSupported() {
            return this.f32299b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[Kind.values().length];
            try {
                iArr[Kind.FROM_DEPENDENCIES.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[Kind.FROM_CLASS_LOADER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[Kind.FALLBACK.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public JvmBuiltIns(@NotNull StorageManager storageManager, @NotNull Kind kind) {
        super(storageManager);
        Intrinsics.checkNotNullParameter(storageManager, "storageManager");
        Intrinsics.checkNotNullParameter(kind, "kind");
        this.f32293g = kind;
        this.f32295i = storageManager.createLazyValue(new c(this, storageManager));
        int i10 = WhenMappings.$EnumSwitchMapping$0[kind.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    f(true);
                    return;
                }
                throw new p();
            }
            f(false);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final JvmBuiltInsCustomizer t(JvmBuiltIns jvmBuiltIns, StorageManager storageManager) {
        ModuleDescriptorImpl builtInsModule = jvmBuiltIns.getBuiltInsModule();
        Intrinsics.checkNotNullExpressionValue(builtInsModule, "getBuiltInsModule(...)");
        return new JvmBuiltInsCustomizer(builtInsModule, storageManager, new e(jvmBuiltIns));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Settings u(JvmBuiltIns jvmBuiltIns) {
        Function0 function0 = jvmBuiltIns.f32294h;
        if (function0 != null) {
            Settings settings = (Settings) function0.invoke();
            jvmBuiltIns.f32294h = null;
            return settings;
        }
        throw new AssertionError("JvmBuiltins instance has not been initialized properly");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Settings w(ModuleDescriptor moduleDescriptor, boolean z10) {
        return new Settings(moduleDescriptor, z10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns
    protected AdditionalClassPartsProvider g() {
        return getCustomizer();
    }

    @NotNull
    public final JvmBuiltInsCustomizer getCustomizer() {
        return (JvmBuiltInsCustomizer) StorageKt.getValue(this.f32295i, this, f32292j[0]);
    }

    public final void initialize(@NotNull ModuleDescriptor moduleDescriptor, boolean z10) {
        Intrinsics.checkNotNullParameter(moduleDescriptor, "moduleDescriptor");
        setPostponedSettingsComputation(new d(moduleDescriptor, z10));
    }

    @Override // kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns
    protected PlatformDependentDeclarationFilter k() {
        return getCustomizer();
    }

    public final void setPostponedSettingsComputation(@NotNull Function0<Settings> computation) {
        Intrinsics.checkNotNullParameter(computation, "computation");
        this.f32294h = computation;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns
    /* renamed from: v */
    public List getClassDescriptorFactories() {
        Iterable classDescriptorFactories = super.getClassDescriptorFactories();
        Intrinsics.checkNotNullExpressionValue(classDescriptorFactories, "getClassDescriptorFactories(...)");
        StorageManager m10 = m();
        Intrinsics.checkNotNullExpressionValue(m10, "getStorageManager(...)");
        ModuleDescriptorImpl builtInsModule = getBuiltInsModule();
        Intrinsics.checkNotNullExpressionValue(builtInsModule, "getBuiltInsModule(...)");
        return CollectionsKt.K0(classDescriptorFactories, new JvmBuiltInClassDescriptorFactory(m10, builtInsModule, null, 4, null));
    }
}
