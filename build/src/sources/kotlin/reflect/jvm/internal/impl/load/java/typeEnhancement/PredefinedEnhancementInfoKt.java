package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import java.util.Map;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancementBuilder;
import kotlin.reflect.jvm.internal.impl.load.kotlin.SignatureBuildingComponents;
import kotlin.reflect.jvm.internal.impl.resolve.jvm.JvmPrimitiveType;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\npredefinedEnhancementInfo.kt\nKotlin\n*S Kotlin\n*F\n+ 1 predefinedEnhancementInfo.kt\norg/jetbrains/kotlin/load/java/typeEnhancement/PredefinedEnhancementInfoKt\n+ 2 SignatureBuildingComponents.kt\norg/jetbrains/kotlin/load/kotlin/SignatureBuildingComponentsKt\n+ 3 predefinedEnhancementInfo.kt\norg/jetbrains/kotlin/load/java/typeEnhancement/SignatureEnhancementBuilder\n*L\n1#1,347:1\n287#1:349\n13#2:348\n293#3:350\n293#3:351\n293#3:352\n293#3:353\n293#3:354\n293#3:355\n293#3:356\n293#3:357\n293#3:358\n293#3:359\n293#3:360\n293#3:361\n293#3:362\n293#3:363\n293#3:364\n293#3:365\n293#3:366\n*S KotlinDebug\n*F\n+ 1 predefinedEnhancementInfo.kt\norg/jetbrains/kotlin/load/java/typeEnhancement/PredefinedEnhancementInfoKt\n*L\n67#1:349\n56#1:348\n68#1:350\n73#1:351\n78#1:352\n93#1:353\n117#1:354\n134#1:355\n154#1:356\n202#1:357\n214#1:358\n234#1:359\n240#1:360\n246#1:361\n253#1:362\n258#1:363\n264#1:364\n270#1:365\n277#1:366\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class PredefinedEnhancementInfoKt {

    /* renamed from: a  reason: collision with root package name */
    private static final JavaTypeQualifiers f33072a = new JavaTypeQualifiers(NullabilityQualifier.NULLABLE, null, false, false, 8, null);

    /* renamed from: b  reason: collision with root package name */
    private static final JavaTypeQualifiers f33073b;

    /* renamed from: c  reason: collision with root package name */
    private static final JavaTypeQualifiers f33074c;

    /* renamed from: d  reason: collision with root package name */
    private static final Map f33075d;

    static {
        NullabilityQualifier nullabilityQualifier = NullabilityQualifier.NOT_NULL;
        f33073b = new JavaTypeQualifiers(nullabilityQualifier, null, false, false, 8, null);
        f33074c = new JavaTypeQualifiers(nullabilityQualifier, null, true, false, 8, null);
        SignatureBuildingComponents signatureBuildingComponents = SignatureBuildingComponents.INSTANCE;
        String javaLang = signatureBuildingComponents.javaLang("Object");
        String javaFunction = signatureBuildingComponents.javaFunction("Predicate");
        String javaFunction2 = signatureBuildingComponents.javaFunction("Function");
        String javaFunction3 = signatureBuildingComponents.javaFunction("Consumer");
        String javaFunction4 = signatureBuildingComponents.javaFunction("BiFunction");
        String javaFunction5 = signatureBuildingComponents.javaFunction("BiConsumer");
        String javaFunction6 = signatureBuildingComponents.javaFunction("UnaryOperator");
        String javaUtil = signatureBuildingComponents.javaUtil("stream/Stream");
        String javaUtil2 = signatureBuildingComponents.javaUtil("Optional");
        SignatureEnhancementBuilder signatureEnhancementBuilder = new SignatureEnhancementBuilder();
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(new SignatureEnhancementBuilder.ClassEnhancementBuilder(signatureEnhancementBuilder, signatureBuildingComponents.javaUtil("Iterator")), "forEachRemaining", null, new f(javaFunction3), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(new SignatureEnhancementBuilder.ClassEnhancementBuilder(signatureEnhancementBuilder, signatureBuildingComponents.javaLang("Iterable")), "spliterator", null, new q(signatureBuildingComponents), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder classEnhancementBuilder = new SignatureEnhancementBuilder.ClassEnhancementBuilder(signatureEnhancementBuilder, signatureBuildingComponents.javaUtil("Collection"));
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder, "removeIf", null, new b0(javaFunction), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder, "stream", null, new m0(javaUtil), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder, "parallelStream", null, new r0(javaUtil), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder classEnhancementBuilder2 = new SignatureEnhancementBuilder.ClassEnhancementBuilder(signatureEnhancementBuilder, signatureBuildingComponents.javaUtil("List"));
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder2, "replaceAll", null, new s0(javaFunction6), 2, null);
        classEnhancementBuilder2.function("addFirst", "2.1", new t0(javaLang));
        classEnhancementBuilder2.function("addLast", "2.1", new u0(javaLang));
        classEnhancementBuilder2.function("removeFirst", "2.1", new v0(javaLang));
        classEnhancementBuilder2.function("removeLast", "2.1", new w0(javaLang));
        SignatureEnhancementBuilder.ClassEnhancementBuilder classEnhancementBuilder3 = new SignatureEnhancementBuilder.ClassEnhancementBuilder(signatureEnhancementBuilder, signatureBuildingComponents.javaUtil("LinkedList"));
        classEnhancementBuilder3.function("addFirst", "2.1", new g(javaLang));
        classEnhancementBuilder3.function("addLast", "2.1", new h(javaLang));
        classEnhancementBuilder3.function("removeFirst", "2.1", new i(javaLang));
        classEnhancementBuilder3.function("removeLast", "2.1", new j(javaLang));
        SignatureEnhancementBuilder.ClassEnhancementBuilder classEnhancementBuilder4 = new SignatureEnhancementBuilder.ClassEnhancementBuilder(signatureEnhancementBuilder, signatureBuildingComponents.javaUtil("LinkedHashSet"));
        classEnhancementBuilder4.function("addFirst", "2.2", new k(javaLang));
        classEnhancementBuilder4.function("addLast", "2.2", new l(javaLang));
        classEnhancementBuilder4.function("removeFirst", "2.2", new m(javaLang));
        classEnhancementBuilder4.function("removeLast", "2.2", new n(javaLang));
        classEnhancementBuilder4.function("getFirst", "2.2", new o(javaLang));
        classEnhancementBuilder4.function("getLast", "2.2", new p(javaLang));
        SignatureEnhancementBuilder.ClassEnhancementBuilder classEnhancementBuilder5 = new SignatureEnhancementBuilder.ClassEnhancementBuilder(signatureEnhancementBuilder, signatureBuildingComponents.javaUtil("Map"));
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder5, "forEach", null, new r(javaFunction5), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder5, "putIfAbsent", null, new s(javaLang), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder5, "replace", null, new t(javaLang), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder5, "replace", null, new u(javaLang), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder5, "replaceAll", null, new v(javaFunction4), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder5, "compute", null, new w(javaLang, javaFunction4), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder5, "computeIfAbsent", null, new x(javaLang, javaFunction2), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder5, "computeIfPresent", null, new y(javaLang, javaFunction4), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder5, "merge", null, new z(javaLang, javaFunction4), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder classEnhancementBuilder6 = new SignatureEnhancementBuilder.ClassEnhancementBuilder(signatureEnhancementBuilder, signatureBuildingComponents.javaUtil("LinkedHashMap"));
        classEnhancementBuilder6.function("putFirst", "2.2", new a0(javaLang));
        classEnhancementBuilder6.function("putLast", "2.2", new c0(javaLang));
        SignatureEnhancementBuilder.ClassEnhancementBuilder classEnhancementBuilder7 = new SignatureEnhancementBuilder.ClassEnhancementBuilder(signatureEnhancementBuilder, javaUtil2);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder7, "empty", null, new d0(javaUtil2), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder7, "of", null, new e0(javaLang, javaUtil2), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder7, "ofNullable", null, new f0(javaLang, javaUtil2), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder7, "get", null, new g0(javaLang), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(classEnhancementBuilder7, "ifPresent", null, new h0(javaFunction3), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(new SignatureEnhancementBuilder.ClassEnhancementBuilder(signatureEnhancementBuilder, signatureBuildingComponents.javaLang("ref/Reference")), "get", null, new i0(javaLang), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(new SignatureEnhancementBuilder.ClassEnhancementBuilder(signatureEnhancementBuilder, javaFunction), "test", null, new j0(javaLang), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(new SignatureEnhancementBuilder.ClassEnhancementBuilder(signatureEnhancementBuilder, signatureBuildingComponents.javaFunction("BiPredicate")), "test", null, new k0(javaLang), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(new SignatureEnhancementBuilder.ClassEnhancementBuilder(signatureEnhancementBuilder, javaFunction3), "accept", null, new l0(javaLang), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(new SignatureEnhancementBuilder.ClassEnhancementBuilder(signatureEnhancementBuilder, javaFunction5), "accept", null, new n0(javaLang), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(new SignatureEnhancementBuilder.ClassEnhancementBuilder(signatureEnhancementBuilder, javaFunction2), "apply", null, new o0(javaLang), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(new SignatureEnhancementBuilder.ClassEnhancementBuilder(signatureEnhancementBuilder, javaFunction4), "apply", null, new p0(javaLang), 2, null);
        SignatureEnhancementBuilder.ClassEnhancementBuilder.function$default(new SignatureEnhancementBuilder.ClassEnhancementBuilder(signatureEnhancementBuilder, signatureBuildingComponents.javaFunction("Supplier")), "get", null, new q0(javaLang), 2, null);
        f33075d = signatureEnhancementBuilder.b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit A(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers);
        function.parameter(str, javaTypeQualifiers);
        function.returns(str, f33072a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit B(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers);
        function.parameter(str, javaTypeQualifiers);
        function.returns(str, f33072a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit C(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.returns(str, f33073b, f33074c);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit D(String str, String str2, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33074c;
        function.parameter(str, javaTypeQualifiers);
        function.returns(str2, f33073b, javaTypeQualifiers);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit E(String str, String str2, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.parameter(str, f33072a);
        function.returns(str2, f33073b, f33074c);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit F(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.returns(str, f33074c);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit G(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.parameter(str, f33073b, f33074c);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit H(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.returns(str, f33072a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit I(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.parameter(str, f33073b);
        function.returns(JvmPrimitiveType.BOOLEAN);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit J(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers);
        function.parameter(str, javaTypeQualifiers);
        function.returns(JvmPrimitiveType.BOOLEAN);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit K(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.parameter(str, f33073b);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit L(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers);
        function.parameter(str, javaTypeQualifiers);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit M(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers);
        function.returns(str, javaTypeQualifiers);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit N(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers);
        function.parameter(str, javaTypeQualifiers);
        function.returns(str, javaTypeQualifiers);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit O(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.returns(str, f33073b);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit P(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers, javaTypeQualifiers);
        function.returns(JvmPrimitiveType.BOOLEAN);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit Q(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.returns(str, javaTypeQualifiers, javaTypeQualifiers);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit R(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.returns(str, javaTypeQualifiers, javaTypeQualifiers);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit a(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers, javaTypeQualifiers);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit b(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.parameter(str, f33073b);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.returns(str, f33073b);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit d(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.returns(str, f33073b);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit e(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers, javaTypeQualifiers);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit f(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.parameter(str, f33073b);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.parameter(str, f33073b);
        return Unit.f32008a;
    }

    @NotNull
    public static final Map<String, PredefinedFunctionEnhancementInfo> getPREDEFINED_FUNCTION_ENHANCEMENT_INFO_BY_SIGNATURE() {
        return f33075d;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.parameter(str, f33073b);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.returns(str, f33073b);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.returns(str, f33073b);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.parameter(str, f33073b);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.parameter(str, f33073b);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.returns(str, f33073b);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.returns(str, f33073b);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.returns(str, f33073b);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit p(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        function.returns(str, f33073b);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit q(SignatureBuildingComponents signatureBuildingComponents, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        String javaUtil = signatureBuildingComponents.javaUtil("Spliterator");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.returns(javaUtil, javaTypeQualifiers, javaTypeQualifiers);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit r(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers, javaTypeQualifiers, javaTypeQualifiers);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit s(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers);
        function.parameter(str, javaTypeQualifiers);
        function.returns(str, f33072a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit t(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers);
        function.parameter(str, javaTypeQualifiers);
        function.returns(str, f33072a);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit u(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers);
        function.parameter(str, javaTypeQualifiers);
        function.parameter(str, javaTypeQualifiers);
        function.returns(JvmPrimitiveType.BOOLEAN);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit v(String str, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers, javaTypeQualifiers, javaTypeQualifiers, javaTypeQualifiers);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit w(String str, String str2, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers);
        JavaTypeQualifiers javaTypeQualifiers2 = f33072a;
        function.parameter(str2, javaTypeQualifiers, javaTypeQualifiers, javaTypeQualifiers2, javaTypeQualifiers2);
        function.returns(str, javaTypeQualifiers2);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit x(String str, String str2, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers);
        function.parameter(str2, javaTypeQualifiers, javaTypeQualifiers, javaTypeQualifiers);
        function.returns(str, javaTypeQualifiers);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit y(String str, String str2, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers);
        JavaTypeQualifiers javaTypeQualifiers2 = f33074c;
        JavaTypeQualifiers javaTypeQualifiers3 = f33072a;
        function.parameter(str2, javaTypeQualifiers, javaTypeQualifiers, javaTypeQualifiers2, javaTypeQualifiers3);
        function.returns(str, javaTypeQualifiers3);
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit z(String str, String str2, SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder function) {
        Intrinsics.checkNotNullParameter(function, "$this$function");
        JavaTypeQualifiers javaTypeQualifiers = f33073b;
        function.parameter(str, javaTypeQualifiers);
        JavaTypeQualifiers javaTypeQualifiers2 = f33074c;
        function.parameter(str, javaTypeQualifiers2);
        JavaTypeQualifiers javaTypeQualifiers3 = f33072a;
        function.parameter(str2, javaTypeQualifiers, javaTypeQualifiers2, javaTypeQualifiers2, javaTypeQualifiers3);
        function.returns(str, javaTypeQualifiers3);
        return Unit.f32008a;
    }
}
