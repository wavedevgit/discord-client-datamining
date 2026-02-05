package kotlin.reflect.jvm.internal.impl.load.java;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.load.kotlin.SignatureBuildingComponents;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.jvm.JvmPrimitiveType;
import or.v;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nSpecialGenericSignatures.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SpecialGenericSignatures.kt\norg/jetbrains/kotlin/load/java/SpecialGenericSignatures\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 SignatureBuildingComponents.kt\norg/jetbrains/kotlin/load/kotlin/SignatureBuildingComponentsKt\n+ 4 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n+ 5 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n*L\n1#1,194:1\n1563#2:195\n1634#2,3:196\n1563#2:199\n1634#2,3:200\n1563#2:203\n1634#2,3:204\n1252#2,4:210\n1563#2:214\n1634#2,3:215\n1563#2:218\n1634#2,3:219\n1252#2,4:225\n1634#2,3:232\n1563#2:235\n1634#2,3:236\n1222#2,2:239\n1252#2,4:241\n13#3:207\n13#3:222\n480#4:208\n426#4:209\n480#4:223\n426#4:224\n153#5,3:229\n*S KotlinDebug\n*F\n+ 1 SpecialGenericSignatures.kt\norg/jetbrains/kotlin/load/java/SpecialGenericSignatures\n*L\n57#1:195\n57#1:196,3\n59#1:199\n59#1:200,3\n60#1:203\n60#1:204,3\n98#1:210,4\n104#1:214\n104#1:215,3\n105#1:218\n105#1:219,3\n168#1:225,4\n176#1:232,3\n180#1:235\n180#1:236,3\n181#1:239,2\n181#1:241,4\n63#1:207\n114#1:222\n98#1:208\n98#1:209\n168#1:223\n168#1:224\n172#1:229,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class SpecialGenericSignatures {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: a  reason: collision with root package name */
    private static final List f32745a;

    /* renamed from: b  reason: collision with root package name */
    private static final List f32746b;

    /* renamed from: c  reason: collision with root package name */
    private static final List f32747c;

    /* renamed from: d  reason: collision with root package name */
    private static final Map f32748d;

    /* renamed from: e  reason: collision with root package name */
    private static final Map f32749e;

    /* renamed from: f  reason: collision with root package name */
    private static final Set f32750f;

    /* renamed from: g  reason: collision with root package name */
    private static final Set f32751g;

    /* renamed from: h  reason: collision with root package name */
    private static final Companion.NameAndSignature f32752h;

    /* renamed from: i  reason: collision with root package name */
    private static final Map f32753i;

    /* renamed from: j  reason: collision with root package name */
    private static final Map f32754j;

    /* renamed from: k  reason: collision with root package name */
    private static final Set f32755k;

    /* renamed from: l  reason: collision with root package name */
    private static final Set f32756l;

    /* renamed from: m  reason: collision with root package name */
    private static final Map f32757m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class NameAndSignature {

            /* renamed from: a  reason: collision with root package name */
            private final String f32758a;

            /* renamed from: b  reason: collision with root package name */
            private final Name f32759b;

            /* renamed from: c  reason: collision with root package name */
            private final String f32760c;

            /* renamed from: d  reason: collision with root package name */
            private final String f32761d;

            /* renamed from: e  reason: collision with root package name */
            private final String f32762e;

            public NameAndSignature(@NotNull String classInternalName, @NotNull Name name, @NotNull String parameters, @NotNull String returnType) {
                Intrinsics.checkNotNullParameter(classInternalName, "classInternalName");
                Intrinsics.checkNotNullParameter(name, "name");
                Intrinsics.checkNotNullParameter(parameters, "parameters");
                Intrinsics.checkNotNullParameter(returnType, "returnType");
                this.f32758a = classInternalName;
                this.f32759b = name;
                this.f32760c = parameters;
                this.f32761d = returnType;
                SignatureBuildingComponents signatureBuildingComponents = SignatureBuildingComponents.INSTANCE;
                this.f32762e = signatureBuildingComponents.signature(classInternalName, name + '(' + parameters + ')' + returnType);
            }

            public static /* synthetic */ NameAndSignature copy$default(NameAndSignature nameAndSignature, String str, Name name, String str2, String str3, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    str = nameAndSignature.f32758a;
                }
                if ((i10 & 2) != 0) {
                    name = nameAndSignature.f32759b;
                }
                if ((i10 & 4) != 0) {
                    str2 = nameAndSignature.f32760c;
                }
                if ((i10 & 8) != 0) {
                    str3 = nameAndSignature.f32761d;
                }
                return nameAndSignature.copy(str, name, str2, str3);
            }

            @NotNull
            public final NameAndSignature copy(@NotNull String classInternalName, @NotNull Name name, @NotNull String parameters, @NotNull String returnType) {
                Intrinsics.checkNotNullParameter(classInternalName, "classInternalName");
                Intrinsics.checkNotNullParameter(name, "name");
                Intrinsics.checkNotNullParameter(parameters, "parameters");
                Intrinsics.checkNotNullParameter(returnType, "returnType");
                return new NameAndSignature(classInternalName, name, parameters, returnType);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof NameAndSignature) {
                    NameAndSignature nameAndSignature = (NameAndSignature) obj;
                    return Intrinsics.areEqual(this.f32758a, nameAndSignature.f32758a) && Intrinsics.areEqual(this.f32759b, nameAndSignature.f32759b) && Intrinsics.areEqual(this.f32760c, nameAndSignature.f32760c) && Intrinsics.areEqual(this.f32761d, nameAndSignature.f32761d);
                }
                return false;
            }

            @NotNull
            public final Name getName() {
                return this.f32759b;
            }

            @NotNull
            public final String getSignature() {
                return this.f32762e;
            }

            public int hashCode() {
                return (((((this.f32758a.hashCode() * 31) + this.f32759b.hashCode()) * 31) + this.f32760c.hashCode()) * 31) + this.f32761d.hashCode();
            }

            @NotNull
            public String toString() {
                return "NameAndSignature(classInternalName=" + this.f32758a + ", name=" + this.f32759b + ", parameters=" + this.f32760c + ", returnType=" + this.f32761d + ')';
            }
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final NameAndSignature a(String str, String str2, String str3, String str4) {
            Name identifier = Name.identifier(str2);
            Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
            return new NameAndSignature(str, identifier, str3, str4);
        }

        public final Name getBuiltinFunctionNamesByJvmName(@NotNull Name name) {
            Intrinsics.checkNotNullParameter(name, "name");
            return getJVM_SHORT_NAME_TO_BUILTIN_SHORT_NAMES_MAP().get(name);
        }

        @NotNull
        public final List<String> getERASED_COLLECTION_PARAMETER_SIGNATURES() {
            return SpecialGenericSignatures.f32746b;
        }

        @NotNull
        public final Set<Name> getERASED_VALUE_PARAMETERS_SHORT_NAMES() {
            return SpecialGenericSignatures.f32750f;
        }

        @NotNull
        public final Set<String> getERASED_VALUE_PARAMETERS_SIGNATURES() {
            return SpecialGenericSignatures.f32751g;
        }

        @NotNull
        public final Map<Name, Name> getJVM_SHORT_NAME_TO_BUILTIN_SHORT_NAMES_MAP() {
            return SpecialGenericSignatures.f32757m;
        }

        @NotNull
        public final Set<Name> getORIGINAL_SHORT_NAMES() {
            return SpecialGenericSignatures.f32756l;
        }

        @NotNull
        public final NameAndSignature getREMOVE_AT_NAME_AND_SIGNATURE() {
            return SpecialGenericSignatures.f32752h;
        }

        @NotNull
        public final Map<String, TypeSafeBarrierDescription> getSIGNATURE_TO_DEFAULT_VALUES_MAP() {
            return SpecialGenericSignatures.f32749e;
        }

        @NotNull
        public final Map<String, Name> getSIGNATURE_TO_JVM_REPRESENTATION_NAME() {
            return SpecialGenericSignatures.f32754j;
        }

        public final boolean getSameAsRenamedInJvmBuiltin(@NotNull Name name) {
            Intrinsics.checkNotNullParameter(name, "<this>");
            return getORIGINAL_SHORT_NAMES().contains(name);
        }

        @NotNull
        public final SpecialSignatureInfo getSpecialSignatureInfo(@NotNull String builtinSignature) {
            Intrinsics.checkNotNullParameter(builtinSignature, "builtinSignature");
            if (getERASED_COLLECTION_PARAMETER_SIGNATURES().contains(builtinSignature)) {
                return SpecialSignatureInfo.ONE_COLLECTION_PARAMETER;
            }
            if (((TypeSafeBarrierDescription) o0.j(getSIGNATURE_TO_DEFAULT_VALUES_MAP(), builtinSignature)) == TypeSafeBarrierDescription.NULL) {
                return SpecialSignatureInfo.OBJECT_PARAMETER_GENERIC;
            }
            return SpecialSignatureInfo.OBJECT_PARAMETER_NON_GENERIC;
        }

        private Companion() {
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class SpecialSignatureInfo {

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ SpecialSignatureInfo[] f32763i;

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f32764o;

        /* renamed from: d  reason: collision with root package name */
        private final String f32765d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f32766e;
        public static final SpecialSignatureInfo ONE_COLLECTION_PARAMETER = new SpecialSignatureInfo("ONE_COLLECTION_PARAMETER", 0, "Ljava/util/Collection<+Ljava/lang/Object;>;", false);
        public static final SpecialSignatureInfo OBJECT_PARAMETER_NON_GENERIC = new SpecialSignatureInfo("OBJECT_PARAMETER_NON_GENERIC", 1, null, true);
        public static final SpecialSignatureInfo OBJECT_PARAMETER_GENERIC = new SpecialSignatureInfo("OBJECT_PARAMETER_GENERIC", 2, "Ljava/lang/Object;", true);

        static {
            SpecialSignatureInfo[] a10 = a();
            f32763i = a10;
            f32764o = vr.a.a(a10);
        }

        private SpecialSignatureInfo(String str, int i10, String str2, boolean z10) {
            this.f32765d = str2;
            this.f32766e = z10;
        }

        private static final /* synthetic */ SpecialSignatureInfo[] a() {
            return new SpecialSignatureInfo[]{ONE_COLLECTION_PARAMETER, OBJECT_PARAMETER_NON_GENERIC, OBJECT_PARAMETER_GENERIC};
        }

        public static SpecialSignatureInfo valueOf(String str) {
            return (SpecialSignatureInfo) Enum.valueOf(SpecialSignatureInfo.class, str);
        }

        public static SpecialSignatureInfo[] values() {
            return (SpecialSignatureInfo[]) f32763i.clone();
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class TypeSafeBarrierDescription {

        /* renamed from: e  reason: collision with root package name */
        private static final /* synthetic */ TypeSafeBarrierDescription[] f32767e;

        /* renamed from: i  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f32768i;

        /* renamed from: d  reason: collision with root package name */
        private final Object f32769d;
        public static final TypeSafeBarrierDescription NULL = new TypeSafeBarrierDescription("NULL", 0, null);
        public static final TypeSafeBarrierDescription INDEX = new TypeSafeBarrierDescription("INDEX", 1, -1);
        public static final TypeSafeBarrierDescription FALSE = new TypeSafeBarrierDescription("FALSE", 2, Boolean.FALSE);
        public static final TypeSafeBarrierDescription MAP_GET_OR_DEFAULT = new a("MAP_GET_OR_DEFAULT", 3);

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static final class a extends TypeSafeBarrierDescription {
            a(String str, int i10) {
                super(str, i10, null, null);
            }
        }

        static {
            TypeSafeBarrierDescription[] a10 = a();
            f32767e = a10;
            f32768i = vr.a.a(a10);
        }

        public /* synthetic */ TypeSafeBarrierDescription(String str, int i10, Object obj, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, i10, obj);
        }

        private static final /* synthetic */ TypeSafeBarrierDescription[] a() {
            return new TypeSafeBarrierDescription[]{NULL, INDEX, FALSE, MAP_GET_OR_DEFAULT};
        }

        public static TypeSafeBarrierDescription valueOf(String str) {
            return (TypeSafeBarrierDescription) Enum.valueOf(TypeSafeBarrierDescription.class, str);
        }

        public static TypeSafeBarrierDescription[] values() {
            return (TypeSafeBarrierDescription[]) f32767e.clone();
        }

        private TypeSafeBarrierDescription(String str, int i10, Object obj) {
            this.f32769d = obj;
        }
    }

    static {
        Set<String> i10 = x0.i("containsAll", "removeAll", "retainAll");
        ArrayList arrayList = new ArrayList(CollectionsKt.w(i10, 10));
        for (String str : i10) {
            Companion companion = Companion;
            String desc = JvmPrimitiveType.BOOLEAN.getDesc();
            Intrinsics.checkNotNullExpressionValue(desc, "getDesc(...)");
            arrayList.add(companion.a("java/util/Collection", str, "Ljava/util/Collection;", desc));
        }
        f32745a = arrayList;
        ArrayList<Companion.NameAndSignature> arrayList2 = arrayList;
        ArrayList arrayList3 = new ArrayList(CollectionsKt.w(arrayList2, 10));
        for (Companion.NameAndSignature nameAndSignature : arrayList2) {
            arrayList3.add(nameAndSignature.getSignature());
        }
        f32746b = arrayList3;
        List<Companion.NameAndSignature> list = f32745a;
        ArrayList arrayList4 = new ArrayList(CollectionsKt.w(list, 10));
        for (Companion.NameAndSignature nameAndSignature2 : list) {
            arrayList4.add(nameAndSignature2.getName().asString());
        }
        f32747c = arrayList4;
        SignatureBuildingComponents signatureBuildingComponents = SignatureBuildingComponents.INSTANCE;
        Companion companion2 = Companion;
        String javaUtil = signatureBuildingComponents.javaUtil("Collection");
        JvmPrimitiveType jvmPrimitiveType = JvmPrimitiveType.BOOLEAN;
        String desc2 = jvmPrimitiveType.getDesc();
        Intrinsics.checkNotNullExpressionValue(desc2, "getDesc(...)");
        Companion.NameAndSignature a10 = companion2.a(javaUtil, "contains", "Ljava/lang/Object;", desc2);
        TypeSafeBarrierDescription typeSafeBarrierDescription = TypeSafeBarrierDescription.FALSE;
        Pair a11 = v.a(a10, typeSafeBarrierDescription);
        String javaUtil2 = signatureBuildingComponents.javaUtil("Collection");
        String desc3 = jvmPrimitiveType.getDesc();
        Intrinsics.checkNotNullExpressionValue(desc3, "getDesc(...)");
        Pair a12 = v.a(companion2.a(javaUtil2, "remove", "Ljava/lang/Object;", desc3), typeSafeBarrierDescription);
        String javaUtil3 = signatureBuildingComponents.javaUtil("Map");
        String desc4 = jvmPrimitiveType.getDesc();
        Intrinsics.checkNotNullExpressionValue(desc4, "getDesc(...)");
        Pair a13 = v.a(companion2.a(javaUtil3, "containsKey", "Ljava/lang/Object;", desc4), typeSafeBarrierDescription);
        String javaUtil4 = signatureBuildingComponents.javaUtil("Map");
        String desc5 = jvmPrimitiveType.getDesc();
        Intrinsics.checkNotNullExpressionValue(desc5, "getDesc(...)");
        Pair a14 = v.a(companion2.a(javaUtil4, "containsValue", "Ljava/lang/Object;", desc5), typeSafeBarrierDescription);
        String javaUtil5 = signatureBuildingComponents.javaUtil("Map");
        String desc6 = jvmPrimitiveType.getDesc();
        Intrinsics.checkNotNullExpressionValue(desc6, "getDesc(...)");
        Pair a15 = v.a(companion2.a(javaUtil5, "remove", "Ljava/lang/Object;Ljava/lang/Object;", desc6), typeSafeBarrierDescription);
        Pair a16 = v.a(companion2.a(signatureBuildingComponents.javaUtil("Map"), "getOrDefault", "Ljava/lang/Object;Ljava/lang/Object;", "Ljava/lang/Object;"), TypeSafeBarrierDescription.MAP_GET_OR_DEFAULT);
        Companion.NameAndSignature a17 = companion2.a(signatureBuildingComponents.javaUtil("Map"), "get", "Ljava/lang/Object;", "Ljava/lang/Object;");
        TypeSafeBarrierDescription typeSafeBarrierDescription2 = TypeSafeBarrierDescription.NULL;
        Pair a18 = v.a(a17, typeSafeBarrierDescription2);
        Pair a19 = v.a(companion2.a(signatureBuildingComponents.javaUtil("Map"), "remove", "Ljava/lang/Object;", "Ljava/lang/Object;"), typeSafeBarrierDescription2);
        String javaUtil6 = signatureBuildingComponents.javaUtil("List");
        JvmPrimitiveType jvmPrimitiveType2 = JvmPrimitiveType.INT;
        String desc7 = jvmPrimitiveType2.getDesc();
        Intrinsics.checkNotNullExpressionValue(desc7, "getDesc(...)");
        Companion.NameAndSignature a20 = companion2.a(javaUtil6, "indexOf", "Ljava/lang/Object;", desc7);
        TypeSafeBarrierDescription typeSafeBarrierDescription3 = TypeSafeBarrierDescription.INDEX;
        Pair a21 = v.a(a20, typeSafeBarrierDescription3);
        String javaUtil7 = signatureBuildingComponents.javaUtil("List");
        String desc8 = jvmPrimitiveType2.getDesc();
        Intrinsics.checkNotNullExpressionValue(desc8, "getDesc(...)");
        Map m10 = o0.m(a11, a12, a13, a14, a15, a16, a18, a19, a21, v.a(companion2.a(javaUtil7, "lastIndexOf", "Ljava/lang/Object;", desc8), typeSafeBarrierDescription3));
        f32748d = m10;
        LinkedHashMap linkedHashMap = new LinkedHashMap(o0.e(m10.size()));
        for (Map.Entry entry : m10.entrySet()) {
            linkedHashMap.put(((Companion.NameAndSignature) entry.getKey()).getSignature(), entry.getValue());
        }
        f32749e = linkedHashMap;
        Set<Companion.NameAndSignature> l10 = x0.l(f32748d.keySet(), f32745a);
        ArrayList arrayList5 = new ArrayList(CollectionsKt.w(l10, 10));
        for (Companion.NameAndSignature nameAndSignature3 : l10) {
            arrayList5.add(nameAndSignature3.getName());
        }
        f32750f = CollectionsKt.l1(arrayList5);
        ArrayList arrayList6 = new ArrayList(CollectionsKt.w(l10, 10));
        for (Companion.NameAndSignature nameAndSignature4 : l10) {
            arrayList6.add(nameAndSignature4.getSignature());
        }
        f32751g = CollectionsKt.l1(arrayList6);
        Companion companion3 = Companion;
        JvmPrimitiveType jvmPrimitiveType3 = JvmPrimitiveType.INT;
        String desc9 = jvmPrimitiveType3.getDesc();
        Intrinsics.checkNotNullExpressionValue(desc9, "getDesc(...)");
        Companion.NameAndSignature a22 = companion3.a("java/util/List", "removeAt", desc9, "Ljava/lang/Object;");
        f32752h = a22;
        SignatureBuildingComponents signatureBuildingComponents2 = SignatureBuildingComponents.INSTANCE;
        String javaLang = signatureBuildingComponents2.javaLang("Number");
        String desc10 = JvmPrimitiveType.BYTE.getDesc();
        Intrinsics.checkNotNullExpressionValue(desc10, "getDesc(...)");
        Pair a23 = v.a(companion3.a(javaLang, "toByte", "", desc10), Name.identifier("byteValue"));
        String javaLang2 = signatureBuildingComponents2.javaLang("Number");
        String desc11 = JvmPrimitiveType.SHORT.getDesc();
        Intrinsics.checkNotNullExpressionValue(desc11, "getDesc(...)");
        Pair a24 = v.a(companion3.a(javaLang2, "toShort", "", desc11), Name.identifier("shortValue"));
        String javaLang3 = signatureBuildingComponents2.javaLang("Number");
        String desc12 = jvmPrimitiveType3.getDesc();
        Intrinsics.checkNotNullExpressionValue(desc12, "getDesc(...)");
        Pair a25 = v.a(companion3.a(javaLang3, "toInt", "", desc12), Name.identifier("intValue"));
        String javaLang4 = signatureBuildingComponents2.javaLang("Number");
        String desc13 = JvmPrimitiveType.LONG.getDesc();
        Intrinsics.checkNotNullExpressionValue(desc13, "getDesc(...)");
        Pair a26 = v.a(companion3.a(javaLang4, "toLong", "", desc13), Name.identifier("longValue"));
        String javaLang5 = signatureBuildingComponents2.javaLang("Number");
        String desc14 = JvmPrimitiveType.FLOAT.getDesc();
        Intrinsics.checkNotNullExpressionValue(desc14, "getDesc(...)");
        Pair a27 = v.a(companion3.a(javaLang5, "toFloat", "", desc14), Name.identifier("floatValue"));
        String javaLang6 = signatureBuildingComponents2.javaLang("Number");
        String desc15 = JvmPrimitiveType.DOUBLE.getDesc();
        Intrinsics.checkNotNullExpressionValue(desc15, "getDesc(...)");
        Pair a28 = v.a(companion3.a(javaLang6, "toDouble", "", desc15), Name.identifier("doubleValue"));
        Pair a29 = v.a(a22, Name.identifier("remove"));
        String javaLang7 = signatureBuildingComponents2.javaLang("CharSequence");
        String desc16 = jvmPrimitiveType3.getDesc();
        Intrinsics.checkNotNullExpressionValue(desc16, "getDesc(...)");
        String desc17 = JvmPrimitiveType.CHAR.getDesc();
        Intrinsics.checkNotNullExpressionValue(desc17, "getDesc(...)");
        Map m11 = o0.m(a23, a24, a25, a26, a27, a28, a29, v.a(companion3.a(javaLang7, "get", desc16, desc17), Name.identifier("charAt")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicInteger"), "load", "", "I"), Name.identifier("get")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicInteger"), "store", "I", "V"), Name.identifier("set")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicInteger"), "exchange", "I", "I"), Name.identifier("getAndSet")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicInteger"), "fetchAndAdd", "I", "I"), Name.identifier("getAndAdd")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicInteger"), "addAndFetch", "I", "I"), Name.identifier("addAndGet")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicLong"), "load", "", "J"), Name.identifier("get")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicLong"), "store", "J", "V"), Name.identifier("set")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicLong"), "exchange", "J", "J"), Name.identifier("getAndSet")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicLong"), "fetchAndAdd", "J", "J"), Name.identifier("getAndAdd")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicLong"), "addAndFetch", "J", "J"), Name.identifier("addAndGet")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicBoolean"), "load", "", "Z"), Name.identifier("get")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicBoolean"), "store", "Z", "V"), Name.identifier("set")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicBoolean"), "exchange", "Z", "Z"), Name.identifier("getAndSet")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicReference"), "load", "", "Ljava/lang/Object;"), Name.identifier("get")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicReference"), "store", "Ljava/lang/Object;", "V"), Name.identifier("set")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicReference"), "exchange", "Ljava/lang/Object;", "Ljava/lang/Object;"), Name.identifier("getAndSet")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicIntegerArray"), "loadAt", "I", "I"), Name.identifier("get")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicIntegerArray"), "storeAt", "II", "V"), Name.identifier("set")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicIntegerArray"), "exchangeAt", "II", "I"), Name.identifier("getAndSet")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicIntegerArray"), "compareAndSetAt", "III", "Z"), Name.identifier("compareAndSet")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicIntegerArray"), "fetchAndAddAt", "II", "I"), Name.identifier("getAndAdd")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicIntegerArray"), "addAndFetchAt", "II", "I"), Name.identifier("addAndGet")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicLongArray"), "loadAt", "I", "J"), Name.identifier("get")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicLongArray"), "storeAt", "IJ", "V"), Name.identifier("set")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicLongArray"), "exchangeAt", "IJ", "J"), Name.identifier("getAndSet")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicLongArray"), "compareAndSetAt", "IJJ", "Z"), Name.identifier("compareAndSet")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicLongArray"), "fetchAndAddAt", "IJ", "J"), Name.identifier("getAndAdd")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicLongArray"), "addAndFetchAt", "IJ", "J"), Name.identifier("addAndGet")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicReferenceArray"), "loadAt", "I", "Ljava/lang/Object;"), Name.identifier("get")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicReferenceArray"), "storeAt", "ILjava/lang/Object;", "V"), Name.identifier("set")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicReferenceArray"), "exchangeAt", "ILjava/lang/Object;", "Ljava/lang/Object;"), Name.identifier("getAndSet")), v.a(companion3.a(signatureBuildingComponents2.javaUtilConcurrentAtomic("AtomicReferenceArray"), "compareAndSetAt", "ILjava/lang/Object;Ljava/lang/Object;", "Z"), Name.identifier("compareAndSet")));
        f32753i = m11;
        LinkedHashMap linkedHashMap2 = new LinkedHashMap(o0.e(m11.size()));
        for (Map.Entry entry2 : m11.entrySet()) {
            linkedHashMap2.put(((Companion.NameAndSignature) entry2.getKey()).getSignature(), entry2.getValue());
        }
        f32754j = linkedHashMap2;
        Map map = f32753i;
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        for (Map.Entry entry3 : map.entrySet()) {
            linkedHashSet.add(Companion.NameAndSignature.copy$default((Companion.NameAndSignature) entry3.getKey(), null, (Name) entry3.getValue(), null, null, 13, null).getSignature());
        }
        f32755k = linkedHashSet;
        HashSet hashSet = new HashSet();
        for (Companion.NameAndSignature nameAndSignature5 : f32753i.keySet()) {
            hashSet.add(nameAndSignature5.getName());
        }
        f32756l = hashSet;
        Set<Map.Entry> entrySet = f32753i.entrySet();
        ArrayList<Pair> arrayList7 = new ArrayList(CollectionsKt.w(entrySet, 10));
        for (Map.Entry entry4 : entrySet) {
            arrayList7.add(new Pair(((Companion.NameAndSignature) entry4.getKey()).getName(), entry4.getValue()));
        }
        LinkedHashMap linkedHashMap3 = new LinkedHashMap(kotlin.ranges.d.d(o0.e(CollectionsKt.w(arrayList7, 10)), 16));
        for (Pair pair : arrayList7) {
            linkedHashMap3.put((Name) pair.d(), (Name) pair.c());
        }
        f32757m = linkedHashMap3;
    }
}
