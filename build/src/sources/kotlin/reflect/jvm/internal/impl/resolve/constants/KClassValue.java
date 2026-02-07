package kotlin.reflect.jvm.internal.impl.resolve.constants;

import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.FindClassInModuleKt;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeKt;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeAttributes;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import kotlin.reflect.jvm.internal.impl.types.TypeProjectionImpl;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorTypeKind;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorUtils;
import kotlin.reflect.jvm.internal.impl.types.typeUtil.TypeUtilsKt;
import org.jetbrains.annotations.NotNull;
import qr.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class KClassValue extends ConstantValue<Value> {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final ConstantValue<?> create(@NotNull KotlinType argumentType) {
            Intrinsics.checkNotNullParameter(argumentType, "argumentType");
            if (KotlinTypeKt.isError(argumentType)) {
                return null;
            }
            KotlinType kotlinType = argumentType;
            int i10 = 0;
            while (KotlinBuiltIns.isArray(kotlinType)) {
                kotlinType = ((TypeProjection) CollectionsKt.Q0(kotlinType.getArguments())).getType();
                Intrinsics.checkNotNullExpressionValue(kotlinType, "getType(...)");
                i10++;
            }
            ClassifierDescriptor mo1199getDeclarationDescriptor = kotlinType.getConstructor().mo1199getDeclarationDescriptor();
            if (mo1199getDeclarationDescriptor instanceof ClassDescriptor) {
                ClassId classId = DescriptorUtilsKt.getClassId(mo1199getDeclarationDescriptor);
                if (classId == null) {
                    return new KClassValue(new Value.LocalClass(argumentType));
                }
                return new KClassValue(classId, i10);
            } else if (!(mo1199getDeclarationDescriptor instanceof TypeParameterDescriptor)) {
                return null;
            } else {
                return new KClassValue(ClassId.Companion.topLevel(StandardNames.FqNames.any.toSafe()), 0);
            }
        }

        private Companion() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class Value {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class LocalClass extends Value {

            /* renamed from: a  reason: collision with root package name */
            private final KotlinType f34200a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public LocalClass(@NotNull KotlinType type) {
                super(null);
                Intrinsics.checkNotNullParameter(type, "type");
                this.f34200a = type;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                return (obj instanceof LocalClass) && Intrinsics.areEqual(this.f34200a, ((LocalClass) obj).f34200a);
            }

            @NotNull
            public final KotlinType getType() {
                return this.f34200a;
            }

            public int hashCode() {
                return this.f34200a.hashCode();
            }

            @NotNull
            public String toString() {
                return "LocalClass(type=" + this.f34200a + ')';
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class NormalClass extends Value {

            /* renamed from: a  reason: collision with root package name */
            private final ClassLiteralValue f34201a;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public NormalClass(@NotNull ClassLiteralValue value) {
                super(null);
                Intrinsics.checkNotNullParameter(value, "value");
                this.f34201a = value;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                return (obj instanceof NormalClass) && Intrinsics.areEqual(this.f34201a, ((NormalClass) obj).f34201a);
            }

            public final int getArrayDimensions() {
                return this.f34201a.getArrayNestedness();
            }

            @NotNull
            public final ClassId getClassId() {
                return this.f34201a.getClassId();
            }

            @NotNull
            public final ClassLiteralValue getValue() {
                return this.f34201a;
            }

            public int hashCode() {
                return this.f34201a.hashCode();
            }

            @NotNull
            public String toString() {
                return "NormalClass(value=" + this.f34201a + ')';
            }
        }

        public /* synthetic */ Value(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Value() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public KClassValue(@NotNull Value value) {
        super(value);
        Intrinsics.checkNotNullParameter(value, "value");
    }

    @NotNull
    public final KotlinType getArgumentType(@NotNull ModuleDescriptor module) {
        Intrinsics.checkNotNullParameter(module, "module");
        Value value = getValue();
        if (value instanceof Value.LocalClass) {
            return ((Value.LocalClass) getValue()).getType();
        }
        if (value instanceof Value.NormalClass) {
            ClassLiteralValue value2 = ((Value.NormalClass) getValue()).getValue();
            ClassId component1 = value2.component1();
            int component2 = value2.component2();
            ClassDescriptor findClassAcrossModuleDependencies = FindClassInModuleKt.findClassAcrossModuleDependencies(module, component1);
            if (findClassAcrossModuleDependencies == null) {
                return ErrorUtils.createErrorType(ErrorTypeKind.UNRESOLVED_KCLASS_CONSTANT_VALUE, component1.toString(), String.valueOf(component2));
            }
            SimpleType defaultType = findClassAcrossModuleDependencies.getDefaultType();
            Intrinsics.checkNotNullExpressionValue(defaultType, "getDefaultType(...)");
            KotlinType replaceArgumentsWithStarProjections = TypeUtilsKt.replaceArgumentsWithStarProjections(defaultType);
            for (int i10 = 0; i10 < component2; i10++) {
                replaceArgumentsWithStarProjections = module.getBuiltIns().getArrayType(Variance.INVARIANT, replaceArgumentsWithStarProjections);
                Intrinsics.checkNotNullExpressionValue(replaceArgumentsWithStarProjections, "getArrayType(...)");
            }
            return replaceArgumentsWithStarProjections;
        }
        throw new p();
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue
    @NotNull
    public KotlinType getType(@NotNull ModuleDescriptor module) {
        Intrinsics.checkNotNullParameter(module, "module");
        TypeAttributes empty = TypeAttributes.Companion.getEmpty();
        ClassDescriptor kClass = module.getBuiltIns().getKClass();
        Intrinsics.checkNotNullExpressionValue(kClass, "getKClass(...)");
        return KotlinTypeFactory.simpleNotNullType(empty, kClass, CollectionsKt.e(new TypeProjectionImpl(getArgumentType(module))));
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public KClassValue(@NotNull ClassLiteralValue value) {
        this(new Value.NormalClass(value));
        Intrinsics.checkNotNullParameter(value, "value");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public KClassValue(@NotNull ClassId classId, int i10) {
        this(new ClassLiteralValue(classId, i10));
        Intrinsics.checkNotNullParameter(classId, "classId");
    }
}
