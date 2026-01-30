package kotlin.reflect.jvm.internal.impl.builtins;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.EnumMap;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.builtins.functions.BuiltInFictitiousFunctionClassFactory;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorUtilKt;
import kotlin.reflect.jvm.internal.impl.descriptors.FindClassInModuleKt;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyGetterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertySetterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.deserialization.AdditionalClassPartsProvider;
import kotlin.reflect.jvm.internal.impl.descriptors.deserialization.PlatformDependentDeclarationFilter;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.ModuleDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.incremental.components.NoLookupLocation;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.FqNameUnsafe;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorUtils;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.storage.MemoizedFunctionToNotNull;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeAttributesKt;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.TypeProjectionImpl;
import kotlin.reflect.jvm.internal.impl.types.TypeUtils;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class KotlinBuiltIns {
    public static final Name BUILTINS_MODULE_NAME = Name.special("<built-ins module>");

    /* renamed from: a  reason: collision with root package name */
    private ModuleDescriptorImpl f33426a;

    /* renamed from: b  reason: collision with root package name */
    private NotNullLazyValue f33427b;

    /* renamed from: c  reason: collision with root package name */
    private final NotNullLazyValue f33428c;

    /* renamed from: d  reason: collision with root package name */
    private final NotNullLazyValue f33429d;

    /* renamed from: e  reason: collision with root package name */
    private final MemoizedFunctionToNotNull f33430e;

    /* renamed from: f  reason: collision with root package name */
    private final StorageManager f33431f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class a implements Function0 {
        a() {
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public Collection invoke() {
            return Arrays.asList(KotlinBuiltIns.this.getBuiltInsModule().getPackage(StandardNames.BUILT_INS_PACKAGE_FQ_NAME), KotlinBuiltIns.this.getBuiltInsModule().getPackage(StandardNames.COLLECTIONS_PACKAGE_FQ_NAME), KotlinBuiltIns.this.getBuiltInsModule().getPackage(StandardNames.RANGES_PACKAGE_FQ_NAME), KotlinBuiltIns.this.getBuiltInsModule().getPackage(StandardNames.ANNOTATION_PACKAGE_FQ_NAME));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class b implements Function0 {
        b() {
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public e invoke() {
            PrimitiveType[] values;
            EnumMap enumMap = new EnumMap(PrimitiveType.class);
            HashMap hashMap = new HashMap();
            HashMap hashMap2 = new HashMap();
            for (PrimitiveType primitiveType : PrimitiveType.values()) {
                SimpleType i10 = KotlinBuiltIns.this.i(primitiveType.getTypeName().asString());
                SimpleType i11 = KotlinBuiltIns.this.i(primitiveType.getArrayTypeName().asString());
                enumMap.put((EnumMap) primitiveType, (PrimitiveType) i11);
                hashMap.put(i10, i11);
                hashMap2.put(i11, i10);
            }
            return new e(enumMap, hashMap, hashMap2, null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class c implements Function1 {
        c() {
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public ClassDescriptor invoke(Name name) {
            ClassifierDescriptor mo1199getContributedClassifier = KotlinBuiltIns.this.getBuiltInsPackageScope().mo1199getContributedClassifier(name, NoLookupLocation.FROM_BUILTINS);
            if (mo1199getContributedClassifier != null) {
                if (mo1199getContributedClassifier instanceof ClassDescriptor) {
                    return (ClassDescriptor) mo1199getContributedClassifier;
                }
                throw new AssertionError("Must be a class descriptor " + name + ", but was " + mo1199getContributedClassifier);
            }
            throw new AssertionError("Built-in class " + StandardNames.BUILT_INS_PACKAGE_FQ_NAME.child(name) + " is not found");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class d implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ModuleDescriptorImpl f33435d;

        d(ModuleDescriptorImpl moduleDescriptorImpl) {
            this.f33435d = moduleDescriptorImpl;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public Void invoke() {
            if (KotlinBuiltIns.this.f33426a == null) {
                KotlinBuiltIns.this.f33426a = this.f33435d;
                return null;
            }
            throw new AssertionError("Built-ins module is already set: " + KotlinBuiltIns.this.f33426a + " (attempting to reset to " + this.f33435d + ")");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class e {

        /* renamed from: a  reason: collision with root package name */
        public final Map f33437a;

        /* renamed from: b  reason: collision with root package name */
        public final Map f33438b;

        /* renamed from: c  reason: collision with root package name */
        public final Map f33439c;

        /* synthetic */ e(Map map, Map map2, Map map3, a aVar) {
            this(map, map2, map3);
        }

        private static /* synthetic */ void a(int i10) {
            Object[] objArr = new Object[3];
            if (i10 == 1) {
                objArr[0] = "primitiveKotlinTypeToKotlinArrayType";
            } else if (i10 != 2) {
                objArr[0] = "primitiveTypeToArrayKotlinType";
            } else {
                objArr[0] = "kotlinArrayTypeToPrimitiveKotlinType";
            }
            objArr[1] = "kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns$Primitives";
            objArr[2] = "<init>";
            throw new IllegalArgumentException(String.format("Argument for @NotNull parameter '%s' of %s.%s must not be null", objArr));
        }

        private e(Map map, Map map2, Map map3) {
            if (map == null) {
                a(0);
            }
            if (map2 == null) {
                a(1);
            }
            if (map3 == null) {
                a(2);
            }
            this.f33437a = map;
            this.f33438b = map2;
            this.f33439c = map3;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public KotlinBuiltIns(StorageManager storageManager) {
        if (storageManager == null) {
            a(0);
        }
        this.f33431f = storageManager;
        this.f33429d = storageManager.createLazyValue(new a());
        this.f33428c = storageManager.createLazyValue(new b());
        this.f33430e = storageManager.createMemoizedFunction(new c());
    }

    /* JADX WARN: Removed duplicated region for block: B:131:0x023c  */
    /* JADX WARN: Removed duplicated region for block: B:133:0x0243  */
    /* JADX WARN: Removed duplicated region for block: B:134:0x0249  */
    /* JADX WARN: Removed duplicated region for block: B:135:0x024f  */
    /* JADX WARN: Removed duplicated region for block: B:136:0x0255  */
    /* JADX WARN: Removed duplicated region for block: B:137:0x025b  */
    /* JADX WARN: Removed duplicated region for block: B:138:0x0261  */
    /* JADX WARN: Removed duplicated region for block: B:139:0x0267  */
    /* JADX WARN: Removed duplicated region for block: B:140:0x026d  */
    /* JADX WARN: Removed duplicated region for block: B:141:0x0273  */
    /* JADX WARN: Removed duplicated region for block: B:142:0x0279  */
    /* JADX WARN: Removed duplicated region for block: B:143:0x027f  */
    /* JADX WARN: Removed duplicated region for block: B:144:0x0285  */
    /* JADX WARN: Removed duplicated region for block: B:145:0x028b  */
    /* JADX WARN: Removed duplicated region for block: B:146:0x0291  */
    /* JADX WARN: Removed duplicated region for block: B:147:0x0297  */
    /* JADX WARN: Removed duplicated region for block: B:148:0x029d  */
    /* JADX WARN: Removed duplicated region for block: B:149:0x02a3  */
    /* JADX WARN: Removed duplicated region for block: B:150:0x02a9  */
    /* JADX WARN: Removed duplicated region for block: B:151:0x02af  */
    /* JADX WARN: Removed duplicated region for block: B:152:0x02b5  */
    /* JADX WARN: Removed duplicated region for block: B:153:0x02bb  */
    /* JADX WARN: Removed duplicated region for block: B:154:0x02c1  */
    /* JADX WARN: Removed duplicated region for block: B:155:0x02c7  */
    /* JADX WARN: Removed duplicated region for block: B:156:0x02cd  */
    /* JADX WARN: Removed duplicated region for block: B:157:0x02d3  */
    /* JADX WARN: Removed duplicated region for block: B:158:0x02d9  */
    /* JADX WARN: Removed duplicated region for block: B:159:0x02df  */
    /* JADX WARN: Removed duplicated region for block: B:160:0x02e5  */
    /* JADX WARN: Removed duplicated region for block: B:161:0x02eb  */
    /* JADX WARN: Removed duplicated region for block: B:162:0x02f1  */
    /* JADX WARN: Removed duplicated region for block: B:163:0x02f7  */
    /* JADX WARN: Removed duplicated region for block: B:164:0x02fd  */
    /* JADX WARN: Removed duplicated region for block: B:165:0x0303  */
    /* JADX WARN: Removed duplicated region for block: B:166:0x0309  */
    /* JADX WARN: Removed duplicated region for block: B:167:0x030f  */
    /* JADX WARN: Removed duplicated region for block: B:168:0x0315  */
    /* JADX WARN: Removed duplicated region for block: B:169:0x031b  */
    /* JADX WARN: Removed duplicated region for block: B:170:0x0321  */
    /* JADX WARN: Removed duplicated region for block: B:171:0x0327  */
    /* JADX WARN: Removed duplicated region for block: B:172:0x032d  */
    /* JADX WARN: Removed duplicated region for block: B:173:0x0333  */
    /* JADX WARN: Removed duplicated region for block: B:174:0x0339  */
    /* JADX WARN: Removed duplicated region for block: B:175:0x033f  */
    /* JADX WARN: Removed duplicated region for block: B:176:0x0345  */
    /* JADX WARN: Removed duplicated region for block: B:177:0x034b  */
    /* JADX WARN: Removed duplicated region for block: B:178:0x0351  */
    /* JADX WARN: Removed duplicated region for block: B:179:0x0357  */
    /* JADX WARN: Removed duplicated region for block: B:17:0x0035 A[FALL_THROUGH] */
    /* JADX WARN: Removed duplicated region for block: B:180:0x035d  */
    /* JADX WARN: Removed duplicated region for block: B:181:0x0363  */
    /* JADX WARN: Removed duplicated region for block: B:182:0x0369  */
    /* JADX WARN: Removed duplicated region for block: B:183:0x036f  */
    /* JADX WARN: Removed duplicated region for block: B:184:0x0375  */
    /* JADX WARN: Removed duplicated region for block: B:185:0x037b  */
    /* JADX WARN: Removed duplicated region for block: B:186:0x0381  */
    /* JADX WARN: Removed duplicated region for block: B:187:0x0387  */
    /* JADX WARN: Removed duplicated region for block: B:188:0x038d  */
    /* JADX WARN: Removed duplicated region for block: B:189:0x0393  */
    /* JADX WARN: Removed duplicated region for block: B:190:0x0399  */
    /* JADX WARN: Removed duplicated region for block: B:191:0x039f  */
    /* JADX WARN: Removed duplicated region for block: B:192:0x03a5  */
    /* JADX WARN: Removed duplicated region for block: B:193:0x03ab  */
    /* JADX WARN: Removed duplicated region for block: B:194:0x03b0  */
    /* JADX WARN: Removed duplicated region for block: B:195:0x03b5  */
    /* JADX WARN: Removed duplicated region for block: B:196:0x03b8  */
    /* JADX WARN: Removed duplicated region for block: B:197:0x03bb  */
    /* JADX WARN: Removed duplicated region for block: B:198:0x03c0  */
    /* JADX WARN: Removed duplicated region for block: B:199:0x03c5  */
    /* JADX WARN: Removed duplicated region for block: B:200:0x03ca  */
    /* JADX WARN: Removed duplicated region for block: B:201:0x03cd  */
    /* JADX WARN: Removed duplicated region for block: B:202:0x03d2  */
    /* JADX WARN: Removed duplicated region for block: B:203:0x03d7  */
    /* JADX WARN: Removed duplicated region for block: B:204:0x03da  */
    /* JADX WARN: Removed duplicated region for block: B:205:0x03dd  */
    /* JADX WARN: Removed duplicated region for block: B:206:0x03e0  */
    /* JADX WARN: Removed duplicated region for block: B:207:0x03e5  */
    /* JADX WARN: Removed duplicated region for block: B:208:0x03ea  */
    /* JADX WARN: Removed duplicated region for block: B:209:0x03ed  */
    /* JADX WARN: Removed duplicated region for block: B:210:0x03f0  */
    /* JADX WARN: Removed duplicated region for block: B:211:0x03f5  */
    /* JADX WARN: Removed duplicated region for block: B:212:0x03fa  */
    /* JADX WARN: Removed duplicated region for block: B:213:0x03ff  */
    /* JADX WARN: Removed duplicated region for block: B:216:0x0409 A[ADDED_TO_REGION] */
    /* JADX WARN: Removed duplicated region for block: B:225:0x041c  */
    /* JADX WARN: Removed duplicated region for block: B:29:0x004d  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x0058 A[FALL_THROUGH] */
    /* JADX WARN: Removed duplicated region for block: B:36:0x0061  */
    /* JADX WARN: Removed duplicated region for block: B:37:0x0066  */
    /* JADX WARN: Removed duplicated region for block: B:38:0x006b  */
    /* JADX WARN: Removed duplicated region for block: B:39:0x0070  */
    /* JADX WARN: Removed duplicated region for block: B:40:0x0075  */
    /* JADX WARN: Removed duplicated region for block: B:41:0x007a  */
    /* JADX WARN: Removed duplicated region for block: B:42:0x007f  */
    /* JADX WARN: Removed duplicated region for block: B:43:0x0084  */
    /* JADX WARN: Removed duplicated region for block: B:44:0x0089  */
    /* JADX WARN: Removed duplicated region for block: B:45:0x008e  */
    /* JADX WARN: Removed duplicated region for block: B:46:0x0093  */
    /* JADX WARN: Removed duplicated region for block: B:47:0x0098  */
    /* JADX WARN: Removed duplicated region for block: B:48:0x009d  */
    /* JADX WARN: Removed duplicated region for block: B:49:0x00a2  */
    /* JADX WARN: Removed duplicated region for block: B:50:0x00a7  */
    /* JADX WARN: Removed duplicated region for block: B:51:0x00ac  */
    /* JADX WARN: Removed duplicated region for block: B:52:0x00b1  */
    /* JADX WARN: Removed duplicated region for block: B:53:0x00b4  */
    /* JADX WARN: Removed duplicated region for block: B:54:0x00b9  */
    /* JADX WARN: Removed duplicated region for block: B:57:0x00d1  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static /* synthetic */ void a(int r23) {
        /*
            Method dump skipped, instructions count: 2222
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns.a(int):void");
    }

    private static boolean e(ClassifierDescriptor classifierDescriptor, FqNameUnsafe fqNameUnsafe) {
        if (classifierDescriptor == null) {
            a(103);
        }
        if (fqNameUnsafe == null) {
            a(104);
        }
        if (classifierDescriptor.getName().equals(fqNameUnsafe.shortName()) && fqNameUnsafe.equals(DescriptorUtils.getFqName(classifierDescriptor))) {
            return true;
        }
        return false;
    }

    public static PrimitiveType getPrimitiveArrayElementType(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(92);
        }
        ClassifierDescriptor mo1198getDeclarationDescriptor = kotlinType.getConstructor().mo1198getDeclarationDescriptor();
        if (mo1198getDeclarationDescriptor == null) {
            return null;
        }
        return getPrimitiveArrayType(mo1198getDeclarationDescriptor);
    }

    public static PrimitiveType getPrimitiveArrayType(@NotNull DeclarationDescriptor declarationDescriptor) {
        if (declarationDescriptor == null) {
            a(77);
        }
        if (StandardNames.FqNames.primitiveArrayTypeShortNames.contains(declarationDescriptor.getName())) {
            return StandardNames.FqNames.arrayClassFqNameToPrimitiveType.get(DescriptorUtils.getFqName(declarationDescriptor));
        }
        return null;
    }

    public static PrimitiveType getPrimitiveType(@NotNull DeclarationDescriptor declarationDescriptor) {
        if (declarationDescriptor == null) {
            a(76);
        }
        if (StandardNames.FqNames.primitiveTypeShortNames.contains(declarationDescriptor.getName())) {
            return StandardNames.FqNames.fqNameToPrimitiveType.get(DescriptorUtils.getFqName(declarationDescriptor));
        }
        return null;
    }

    private ClassDescriptor h(String str) {
        if (str == null) {
            a(14);
        }
        ClassDescriptor classDescriptor = (ClassDescriptor) this.f33430e.invoke(Name.identifier(str));
        if (classDescriptor == null) {
            a(15);
        }
        return classDescriptor;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public SimpleType i(String str) {
        if (str == null) {
            a(47);
        }
        SimpleType defaultType = h(str).getDefaultType();
        if (defaultType == null) {
            a(48);
        }
        return defaultType;
    }

    public static boolean isAny(@NotNull ClassDescriptor classDescriptor) {
        if (classDescriptor == null) {
            a(108);
        }
        return e(classDescriptor, StandardNames.FqNames.any);
    }

    public static boolean isAnyOrNullableAny(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(139);
        }
        return n(kotlinType, StandardNames.FqNames.any);
    }

    public static boolean isArray(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(88);
        }
        return n(kotlinType, StandardNames.FqNames.array);
    }

    public static boolean isArrayOrPrimitiveArray(@NotNull ClassDescriptor classDescriptor) {
        if (classDescriptor == null) {
            a(89);
        }
        return e(classDescriptor, StandardNames.FqNames.array) || getPrimitiveArrayType(classDescriptor) != null;
    }

    public static boolean isBoolean(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(110);
        }
        return o(kotlinType, StandardNames.FqNames._boolean);
    }

    public static boolean isBuiltIn(@NotNull DeclarationDescriptor declarationDescriptor) {
        if (declarationDescriptor == null) {
            a(9);
        }
        if (DescriptorUtils.getParentOfType(declarationDescriptor, BuiltInsPackageFragment.class, false) == null) {
            return false;
        }
        return true;
    }

    public static boolean isDefaultBound(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(141);
        }
        return isNullableAny(kotlinType);
    }

    public static boolean isDeprecated(@NotNull DeclarationDescriptor declarationDescriptor) {
        if (declarationDescriptor == null) {
            a(160);
        }
        if (declarationDescriptor.getOriginal().getAnnotations().hasAnnotation(StandardNames.FqNames.deprecated)) {
            return true;
        }
        if (declarationDescriptor instanceof PropertyDescriptor) {
            PropertyDescriptor propertyDescriptor = (PropertyDescriptor) declarationDescriptor;
            boolean isVar = propertyDescriptor.isVar();
            PropertyGetterDescriptor getter = propertyDescriptor.getGetter();
            PropertySetterDescriptor setter = propertyDescriptor.getSetter();
            if (getter != null && isDeprecated(getter) && (!isVar || (setter != null && isDeprecated(setter)))) {
                return true;
            }
        }
        return false;
    }

    public static boolean isKClass(@NotNull ClassDescriptor classDescriptor) {
        if (classDescriptor == null) {
            a(158);
        }
        return e(classDescriptor, StandardNames.FqNames.kClass);
    }

    public static boolean isNothing(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(136);
        }
        if (isNothingOrNullableNothing(kotlinType) && !TypeUtils.isNullableType(kotlinType)) {
            return true;
        }
        return false;
    }

    public static boolean isNothingOrNullableNothing(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(138);
        }
        return n(kotlinType, StandardNames.FqNames.nothing);
    }

    public static boolean isNullableAny(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(140);
        }
        if (isAnyOrNullableAny(kotlinType) && kotlinType.isMarkedNullable()) {
            return true;
        }
        return false;
    }

    public static boolean isPrimitiveArray(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(91);
        }
        ClassifierDescriptor mo1198getDeclarationDescriptor = kotlinType.getConstructor().mo1198getDeclarationDescriptor();
        if (mo1198getDeclarationDescriptor != null && getPrimitiveArrayType(mo1198getDeclarationDescriptor) != null) {
            return true;
        }
        return false;
    }

    public static boolean isPrimitiveClass(@NotNull ClassDescriptor classDescriptor) {
        if (classDescriptor == null) {
            a(96);
        }
        if (getPrimitiveType(classDescriptor) != null) {
            return true;
        }
        return false;
    }

    public static boolean isPrimitiveType(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(94);
        }
        if (!kotlinType.isMarkedNullable() && isPrimitiveTypeOrNullablePrimitiveType(kotlinType)) {
            return true;
        }
        return false;
    }

    public static boolean isPrimitiveTypeOrNullablePrimitiveType(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(95);
        }
        ClassifierDescriptor mo1198getDeclarationDescriptor = kotlinType.getConstructor().mo1198getDeclarationDescriptor();
        if ((mo1198getDeclarationDescriptor instanceof ClassDescriptor) && isPrimitiveClass((ClassDescriptor) mo1198getDeclarationDescriptor)) {
            return true;
        }
        return false;
    }

    public static boolean isSpecialClassWithNoSupertypes(@NotNull ClassDescriptor classDescriptor) {
        if (classDescriptor == null) {
            a(107);
        }
        if (!e(classDescriptor, StandardNames.FqNames.any) && !e(classDescriptor, StandardNames.FqNames.nothing)) {
            return false;
        }
        return true;
    }

    public static boolean isString(KotlinType kotlinType) {
        if (kotlinType != null && p(kotlinType, StandardNames.FqNames.string)) {
            return true;
        }
        return false;
    }

    public static boolean isTypeConstructorForGivenClass(@NotNull TypeConstructor typeConstructor, @NotNull FqNameUnsafe fqNameUnsafe) {
        if (typeConstructor == null) {
            a(101);
        }
        if (fqNameUnsafe == null) {
            a(102);
        }
        ClassifierDescriptor mo1198getDeclarationDescriptor = typeConstructor.mo1198getDeclarationDescriptor();
        if ((mo1198getDeclarationDescriptor instanceof ClassDescriptor) && e(mo1198getDeclarationDescriptor, fqNameUnsafe)) {
            return true;
        }
        return false;
    }

    public static boolean isUByteArray(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        }
        return o(kotlinType, StandardNames.FqNames.uByteArrayFqName.toUnsafe());
    }

    public static boolean isUIntArray(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(130);
        }
        return o(kotlinType, StandardNames.FqNames.uIntArrayFqName.toUnsafe());
    }

    public static boolean isULongArray(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(131);
        }
        return o(kotlinType, StandardNames.FqNames.uLongArrayFqName.toUnsafe());
    }

    public static boolean isUShortArray(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(129);
        }
        return o(kotlinType, StandardNames.FqNames.uShortArrayFqName.toUnsafe());
    }

    public static boolean isUnderKotlinPackage(@NotNull DeclarationDescriptor declarationDescriptor) {
        if (declarationDescriptor == null) {
            a(10);
        }
        while (declarationDescriptor != null) {
            if (declarationDescriptor instanceof PackageFragmentDescriptor) {
                return ((PackageFragmentDescriptor) declarationDescriptor).getFqName().startsWith(StandardNames.BUILT_INS_PACKAGE_NAME);
            }
            declarationDescriptor = declarationDescriptor.getContainingDeclaration();
        }
        return false;
    }

    public static boolean isUnit(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(142);
        }
        return p(kotlinType, StandardNames.FqNames.unit);
    }

    public static boolean isUnsignedArrayType(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(132);
        }
        if (!isUByteArray(kotlinType) && !isUShortArray(kotlinType) && !isUIntArray(kotlinType) && !isULongArray(kotlinType)) {
            return false;
        }
        return true;
    }

    private static KotlinType j(KotlinType kotlinType, ModuleDescriptor moduleDescriptor) {
        ClassId classId;
        ClassId unsignedClassIdByArrayClassId;
        ClassDescriptor findClassAcrossModuleDependencies;
        if (kotlinType == null) {
            a(71);
        }
        if (moduleDescriptor == null) {
            a(72);
        }
        ClassifierDescriptor mo1198getDeclarationDescriptor = kotlinType.getConstructor().mo1198getDeclarationDescriptor();
        if (mo1198getDeclarationDescriptor == null) {
            return null;
        }
        UnsignedTypes unsignedTypes = UnsignedTypes.INSTANCE;
        if (!unsignedTypes.isShortNameOfUnsignedArray(mo1198getDeclarationDescriptor.getName()) || (classId = DescriptorUtilsKt.getClassId(mo1198getDeclarationDescriptor)) == null || (unsignedClassIdByArrayClassId = unsignedTypes.getUnsignedClassIdByArrayClassId(classId)) == null || (findClassAcrossModuleDependencies = FindClassInModuleKt.findClassAcrossModuleDependencies(moduleDescriptor, unsignedClassIdByArrayClassId)) == null) {
            return null;
        }
        return findClassAcrossModuleDependencies.getDefaultType();
    }

    private ClassDescriptor l(PrimitiveType primitiveType) {
        if (primitiveType == null) {
            a(16);
        }
        return h(primitiveType.getTypeName().asString());
    }

    private static boolean n(KotlinType kotlinType, FqNameUnsafe fqNameUnsafe) {
        if (kotlinType == null) {
            a(97);
        }
        if (fqNameUnsafe == null) {
            a(98);
        }
        return isTypeConstructorForGivenClass(kotlinType.getConstructor(), fqNameUnsafe);
    }

    private static boolean o(KotlinType kotlinType, FqNameUnsafe fqNameUnsafe) {
        if (kotlinType == null) {
            a(134);
        }
        if (fqNameUnsafe == null) {
            a(135);
        }
        if (n(kotlinType, fqNameUnsafe) && !kotlinType.isMarkedNullable()) {
            return true;
        }
        return false;
    }

    private static boolean p(KotlinType kotlinType, FqNameUnsafe fqNameUnsafe) {
        if (kotlinType == null) {
            a(105);
        }
        if (fqNameUnsafe == null) {
            a(106);
        }
        if (!kotlinType.isMarkedNullable() && n(kotlinType, fqNameUnsafe)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void f(boolean z10) {
        ModuleDescriptorImpl moduleDescriptorImpl = new ModuleDescriptorImpl(BUILTINS_MODULE_NAME, this.f33431f, this, null);
        this.f33426a = moduleDescriptorImpl;
        moduleDescriptorImpl.initialize(BuiltInsLoader.Companion.getInstance().createPackageFragmentProvider(this.f33431f, this.f33426a, getClassDescriptorFactories(), k(), g(), z10));
        ModuleDescriptorImpl moduleDescriptorImpl2 = this.f33426a;
        moduleDescriptorImpl2.setDependencies(moduleDescriptorImpl2);
    }

    protected AdditionalClassPartsProvider g() {
        AdditionalClassPartsProvider.None none = AdditionalClassPartsProvider.None.INSTANCE;
        if (none == null) {
            a(3);
        }
        return none;
    }

    @NotNull
    public ClassDescriptor getAny() {
        return h("Any");
    }

    @NotNull
    public SimpleType getAnyType() {
        SimpleType defaultType = getAny().getDefaultType();
        if (defaultType == null) {
            a(51);
        }
        return defaultType;
    }

    @NotNull
    public ClassDescriptor getArray() {
        return h("Array");
    }

    @NotNull
    public KotlinType getArrayElementType(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(68);
        }
        KotlinType arrayElementTypeOrNull = getArrayElementTypeOrNull(kotlinType);
        if (arrayElementTypeOrNull != null) {
            return arrayElementTypeOrNull;
        }
        throw new IllegalStateException("not array: " + kotlinType);
    }

    public KotlinType getArrayElementTypeOrNull(@NotNull KotlinType kotlinType) {
        KotlinType j10;
        if (kotlinType == null) {
            a(70);
        }
        if (isArray(kotlinType)) {
            if (kotlinType.getArguments().size() != 1) {
                return null;
            }
            return kotlinType.getArguments().get(0).getType();
        }
        KotlinType makeNotNullable = TypeUtils.makeNotNullable(kotlinType);
        KotlinType kotlinType2 = (KotlinType) ((e) this.f33428c.invoke()).f33439c.get(makeNotNullable);
        if (kotlinType2 != null) {
            return kotlinType2;
        }
        ModuleDescriptor containingModuleOrNull = DescriptorUtils.getContainingModuleOrNull(makeNotNullable);
        if (containingModuleOrNull == null || (j10 = j(makeNotNullable, containingModuleOrNull)) == null) {
            return null;
        }
        return j10;
    }

    @NotNull
    public SimpleType getArrayType(@NotNull Variance variance, @NotNull KotlinType kotlinType, @NotNull Annotations annotations) {
        if (variance == null) {
            a(78);
        }
        if (kotlinType == null) {
            a(79);
        }
        if (annotations == null) {
            a(80);
        }
        SimpleType simpleNotNullType = KotlinTypeFactory.simpleNotNullType(TypeAttributesKt.toDefaultAttributes(annotations), getArray(), Collections.singletonList(new TypeProjectionImpl(variance, kotlinType)));
        if (simpleNotNullType == null) {
            a(81);
        }
        return simpleNotNullType;
    }

    @NotNull
    public SimpleType getBooleanType() {
        SimpleType primitiveKotlinType = getPrimitiveKotlinType(PrimitiveType.BOOLEAN);
        if (primitiveKotlinType == null) {
            a(64);
        }
        return primitiveKotlinType;
    }

    @NotNull
    public ClassDescriptor getBuiltInClassByFqName(@NotNull FqName fqName) {
        if (fqName == null) {
            a(12);
        }
        ClassDescriptor resolveClassByFqName = DescriptorUtilKt.resolveClassByFqName(getBuiltInsModule(), fqName, NoLookupLocation.FROM_BUILTINS);
        if (resolveClassByFqName == null) {
            a(13);
        }
        return resolveClassByFqName;
    }

    @NotNull
    public ModuleDescriptorImpl getBuiltInsModule() {
        if (this.f33426a == null) {
            this.f33426a = (ModuleDescriptorImpl) this.f33427b.invoke();
        }
        ModuleDescriptorImpl moduleDescriptorImpl = this.f33426a;
        if (moduleDescriptorImpl == null) {
            a(7);
        }
        return moduleDescriptorImpl;
    }

    @NotNull
    public MemberScope getBuiltInsPackageScope() {
        MemberScope memberScope = getBuiltInsModule().getPackage(StandardNames.BUILT_INS_PACKAGE_FQ_NAME).getMemberScope();
        if (memberScope == null) {
            a(11);
        }
        return memberScope;
    }

    @NotNull
    public SimpleType getByteType() {
        SimpleType primitiveKotlinType = getPrimitiveKotlinType(PrimitiveType.BYTE);
        if (primitiveKotlinType == null) {
            a(57);
        }
        return primitiveKotlinType;
    }

    @NotNull
    public SimpleType getCharType() {
        SimpleType primitiveKotlinType = getPrimitiveKotlinType(PrimitiveType.CHAR);
        if (primitiveKotlinType == null) {
            a(63);
        }
        return primitiveKotlinType;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public Iterable getClassDescriptorFactories() {
        List singletonList = Collections.singletonList(new BuiltInFictitiousFunctionClassFactory(this.f33431f, getBuiltInsModule()));
        if (singletonList == null) {
            a(5);
        }
        return singletonList;
    }

    @NotNull
    public ClassDescriptor getCollection() {
        ClassDescriptor builtInClassByFqName = getBuiltInClassByFqName(StandardNames.FqNames.collection);
        if (builtInClassByFqName == null) {
            a(35);
        }
        return builtInClassByFqName;
    }

    @NotNull
    public ClassDescriptor getComparable() {
        return h("Comparable");
    }

    @NotNull
    public SimpleType getDefaultBound() {
        SimpleType nullableAnyType = getNullableAnyType();
        if (nullableAnyType == null) {
            a(53);
        }
        return nullableAnyType;
    }

    @NotNull
    public SimpleType getDoubleType() {
        SimpleType primitiveKotlinType = getPrimitiveKotlinType(PrimitiveType.DOUBLE);
        if (primitiveKotlinType == null) {
            a(62);
        }
        return primitiveKotlinType;
    }

    @NotNull
    public SimpleType getFloatType() {
        SimpleType primitiveKotlinType = getPrimitiveKotlinType(PrimitiveType.FLOAT);
        if (primitiveKotlinType == null) {
            a(61);
        }
        return primitiveKotlinType;
    }

    @NotNull
    public ClassDescriptor getFunction(int i10) {
        return h(StandardNames.getFunctionName(i10));
    }

    @NotNull
    public SimpleType getIntType() {
        SimpleType primitiveKotlinType = getPrimitiveKotlinType(PrimitiveType.INT);
        if (primitiveKotlinType == null) {
            a(59);
        }
        return primitiveKotlinType;
    }

    @NotNull
    public ClassDescriptor getKClass() {
        ClassDescriptor builtInClassByFqName = getBuiltInClassByFqName(StandardNames.FqNames.kClass.toSafe());
        if (builtInClassByFqName == null) {
            a(21);
        }
        return builtInClassByFqName;
    }

    @NotNull
    public SimpleType getLongType() {
        SimpleType primitiveKotlinType = getPrimitiveKotlinType(PrimitiveType.LONG);
        if (primitiveKotlinType == null) {
            a(60);
        }
        return primitiveKotlinType;
    }

    @NotNull
    public ClassDescriptor getNothing() {
        return h("Nothing");
    }

    @NotNull
    public SimpleType getNothingType() {
        SimpleType defaultType = getNothing().getDefaultType();
        if (defaultType == null) {
            a(49);
        }
        return defaultType;
    }

    @NotNull
    public SimpleType getNullableAnyType() {
        SimpleType makeNullableAsSpecified = getAnyType().makeNullableAsSpecified(true);
        if (makeNullableAsSpecified == null) {
            a(52);
        }
        return makeNullableAsSpecified;
    }

    @NotNull
    public SimpleType getNullableNothingType() {
        SimpleType makeNullableAsSpecified = getNothingType().makeNullableAsSpecified(true);
        if (makeNullableAsSpecified == null) {
            a(50);
        }
        return makeNullableAsSpecified;
    }

    @NotNull
    public ClassDescriptor getNumber() {
        return h("Number");
    }

    @NotNull
    public SimpleType getNumberType() {
        SimpleType defaultType = getNumber().getDefaultType();
        if (defaultType == null) {
            a(56);
        }
        return defaultType;
    }

    @NotNull
    public SimpleType getPrimitiveArrayKotlinType(@NotNull PrimitiveType primitiveType) {
        if (primitiveType == null) {
            a(73);
        }
        SimpleType simpleType = (SimpleType) ((e) this.f33428c.invoke()).f33437a.get(primitiveType);
        if (simpleType == null) {
            a(74);
        }
        return simpleType;
    }

    @NotNull
    public SimpleType getPrimitiveKotlinType(@NotNull PrimitiveType primitiveType) {
        if (primitiveType == null) {
            a(54);
        }
        SimpleType defaultType = l(primitiveType).getDefaultType();
        if (defaultType == null) {
            a(55);
        }
        return defaultType;
    }

    @NotNull
    public SimpleType getShortType() {
        SimpleType primitiveKotlinType = getPrimitiveKotlinType(PrimitiveType.SHORT);
        if (primitiveKotlinType == null) {
            a(58);
        }
        return primitiveKotlinType;
    }

    @NotNull
    public ClassDescriptor getString() {
        return h("String");
    }

    @NotNull
    public SimpleType getStringType() {
        SimpleType defaultType = getString().getDefaultType();
        if (defaultType == null) {
            a(66);
        }
        return defaultType;
    }

    @NotNull
    public ClassDescriptor getSuspendFunction(int i10) {
        ClassDescriptor builtInClassByFqName = getBuiltInClassByFqName(StandardNames.COROUTINES_PACKAGE_FQ_NAME.child(Name.identifier(StandardNames.getSuspendFunctionName(i10))));
        if (builtInClassByFqName == null) {
            a(18);
        }
        return builtInClassByFqName;
    }

    @NotNull
    public ClassDescriptor getUnit() {
        return h("Unit");
    }

    @NotNull
    public SimpleType getUnitType() {
        SimpleType defaultType = getUnit().getDefaultType();
        if (defaultType == null) {
            a(65);
        }
        return defaultType;
    }

    protected PlatformDependentDeclarationFilter k() {
        PlatformDependentDeclarationFilter.NoPlatformDependent noPlatformDependent = PlatformDependentDeclarationFilter.NoPlatformDependent.INSTANCE;
        if (noPlatformDependent == null) {
            a(4);
        }
        return noPlatformDependent;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public StorageManager m() {
        StorageManager storageManager = this.f33431f;
        if (storageManager == null) {
            a(6);
        }
        return storageManager;
    }

    public void setBuiltInsModule(@NotNull ModuleDescriptorImpl moduleDescriptorImpl) {
        if (moduleDescriptorImpl == null) {
            a(1);
        }
        this.f33431f.compute(new d(moduleDescriptorImpl));
    }

    public static boolean isArrayOrPrimitiveArray(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(90);
        }
        return isArray(kotlinType) || isPrimitiveArray(kotlinType);
    }

    @NotNull
    public SimpleType getArrayType(@NotNull Variance variance, @NotNull KotlinType kotlinType) {
        if (variance == null) {
            a(82);
        }
        if (kotlinType == null) {
            a(83);
        }
        SimpleType arrayType = getArrayType(variance, kotlinType, Annotations.Companion.getEMPTY());
        if (arrayType == null) {
            a(84);
        }
        return arrayType;
    }
}
