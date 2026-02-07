package kotlin.reflect.jvm.internal.impl.builtins;

import java.util.List;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.FindClassInModuleKt;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.NotFoundClasses;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.incremental.components.NoLookupLocation;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory;
import kotlin.reflect.jvm.internal.impl.types.StarProjectionImpl;
import kotlin.reflect.jvm.internal.impl.types.TypeAttributes;
import kotlin.reflect.jvm.internal.impl.util.capitalizeDecapitalize.CapitalizeDecapitalizeKt;
import org.jetbrains.annotations.NotNull;
import qr.l;
import qr.o;
@SourceDebugExtension({"SMAP\nReflectionTypes.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReflectionTypes.kt\norg/jetbrains/kotlin/builtins/ReflectionTypes\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,225:1\n1563#2:226\n1634#2,3:227\n*S KotlinDebug\n*F\n+ 1 ReflectionTypes.kt\norg/jetbrains/kotlin/builtins/ReflectionTypes\n*L\n94#1:226\n94#1:227,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ReflectionTypes {

    /* renamed from: a  reason: collision with root package name */
    private final NotFoundClasses f32205a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f32206b;

    /* renamed from: c  reason: collision with root package name */
    private final a f32207c;

    /* renamed from: d  reason: collision with root package name */
    private final a f32208d;

    /* renamed from: e  reason: collision with root package name */
    private final a f32209e;

    /* renamed from: f  reason: collision with root package name */
    private final a f32210f;

    /* renamed from: g  reason: collision with root package name */
    private final a f32211g;

    /* renamed from: h  reason: collision with root package name */
    private final a f32212h;

    /* renamed from: i  reason: collision with root package name */
    private final a f32213i;

    /* renamed from: j  reason: collision with root package name */
    private final a f32214j;

    /* renamed from: k  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f32204k = {Reflection.property1(new PropertyReference1Impl(ReflectionTypes.class, "kClass", "getKClass()Lorg/jetbrains/kotlin/descriptors/ClassDescriptor;", 0)), Reflection.property1(new PropertyReference1Impl(ReflectionTypes.class, "kProperty", "getKProperty()Lorg/jetbrains/kotlin/descriptors/ClassDescriptor;", 0)), Reflection.property1(new PropertyReference1Impl(ReflectionTypes.class, "kProperty0", "getKProperty0()Lorg/jetbrains/kotlin/descriptors/ClassDescriptor;", 0)), Reflection.property1(new PropertyReference1Impl(ReflectionTypes.class, "kProperty1", "getKProperty1()Lorg/jetbrains/kotlin/descriptors/ClassDescriptor;", 0)), Reflection.property1(new PropertyReference1Impl(ReflectionTypes.class, "kProperty2", "getKProperty2()Lorg/jetbrains/kotlin/descriptors/ClassDescriptor;", 0)), Reflection.property1(new PropertyReference1Impl(ReflectionTypes.class, "kMutableProperty0", "getKMutableProperty0()Lorg/jetbrains/kotlin/descriptors/ClassDescriptor;", 0)), Reflection.property1(new PropertyReference1Impl(ReflectionTypes.class, "kMutableProperty1", "getKMutableProperty1()Lorg/jetbrains/kotlin/descriptors/ClassDescriptor;", 0)), Reflection.property1(new PropertyReference1Impl(ReflectionTypes.class, "kMutableProperty2", "getKMutableProperty2()Lorg/jetbrains/kotlin/descriptors/ClassDescriptor;", 0))};
    @NotNull
    public static final Companion Companion = new Companion(null);

    @SourceDebugExtension({"SMAP\nReflectionTypes.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReflectionTypes.kt\norg/jetbrains/kotlin/builtins/ReflectionTypes$Companion\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,225:1\n1761#2,3:226\n*S KotlinDebug\n*F\n+ 1 ReflectionTypes.kt\norg/jetbrains/kotlin/builtins/ReflectionTypes$Companion\n*L\n122#1:226,3\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final KotlinType createKPropertyStarType(@NotNull ModuleDescriptor module) {
            Intrinsics.checkNotNullParameter(module, "module");
            ClassDescriptor findClassAcrossModuleDependencies = FindClassInModuleKt.findClassAcrossModuleDependencies(module, StandardNames.FqNames.kProperty);
            if (findClassAcrossModuleDependencies == null) {
                return null;
            }
            TypeAttributes empty = TypeAttributes.Companion.getEmpty();
            List<TypeParameterDescriptor> parameters = findClassAcrossModuleDependencies.getTypeConstructor().getParameters();
            Intrinsics.checkNotNullExpressionValue(parameters, "getParameters(...)");
            Object Q0 = CollectionsKt.Q0(parameters);
            Intrinsics.checkNotNullExpressionValue(Q0, "single(...)");
            return KotlinTypeFactory.simpleNotNullType(empty, findClassAcrossModuleDependencies, CollectionsKt.e(new StarProjectionImpl((TypeParameterDescriptor) Q0)));
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final int f32215a;

        public a(int i10) {
            this.f32215a = i10;
        }

        public final ClassDescriptor a(ReflectionTypes types, KProperty property) {
            Intrinsics.checkNotNullParameter(types, "types");
            Intrinsics.checkNotNullParameter(property, "property");
            return types.b(CapitalizeDecapitalizeKt.capitalizeAsciiOnly(property.getName()), this.f32215a);
        }
    }

    public ReflectionTypes(@NotNull ModuleDescriptor module, @NotNull NotFoundClasses notFoundClasses) {
        Intrinsics.checkNotNullParameter(module, "module");
        Intrinsics.checkNotNullParameter(notFoundClasses, "notFoundClasses");
        this.f32205a = notFoundClasses;
        this.f32206b = l.b(o.f48092e, new e(module));
        this.f32207c = new a(1);
        this.f32208d = new a(1);
        this.f32209e = new a(1);
        this.f32210f = new a(2);
        this.f32211g = new a(3);
        this.f32212h = new a(1);
        this.f32213i = new a(2);
        this.f32214j = new a(3);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final ClassDescriptor b(String str, int i10) {
        ClassDescriptor classDescriptor;
        Name identifier = Name.identifier(str);
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        ClassifierDescriptor mo1200getContributedClassifier = c().mo1200getContributedClassifier(identifier, NoLookupLocation.FROM_REFLECTION);
        if (mo1200getContributedClassifier instanceof ClassDescriptor) {
            classDescriptor = (ClassDescriptor) mo1200getContributedClassifier;
        } else {
            classDescriptor = null;
        }
        if (classDescriptor == null) {
            return this.f32205a.getClass(new ClassId(StandardNames.KOTLIN_REFLECT_FQ_NAME, identifier), CollectionsKt.e(Integer.valueOf(i10)));
        }
        return classDescriptor;
    }

    private final MemberScope c() {
        return (MemberScope) this.f32206b.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MemberScope d(ModuleDescriptor moduleDescriptor) {
        return moduleDescriptor.getPackage(StandardNames.KOTLIN_REFLECT_FQ_NAME).getMemberScope();
    }

    @NotNull
    public final ClassDescriptor getKClass() {
        return this.f32207c.a(this, f32204k[0]);
    }
}
