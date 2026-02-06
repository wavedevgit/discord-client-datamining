package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.IndexedValue;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.load.kotlin.SignatureBuildingComponents;
import kotlin.reflect.jvm.internal.impl.resolve.jvm.JvmPrimitiveType;
import org.jetbrains.annotations.NotNull;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class SignatureEnhancementBuilder {

    /* renamed from: a  reason: collision with root package name */
    private final Map f33081a = new LinkedHashMap();

    public final Map b() {
        return this.f33081a;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class ClassEnhancementBuilder {

        /* renamed from: a  reason: collision with root package name */
        private final String f33082a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ SignatureEnhancementBuilder f33083b;

        public ClassEnhancementBuilder(@NotNull SignatureEnhancementBuilder signatureEnhancementBuilder, String className) {
            Intrinsics.checkNotNullParameter(className, "className");
            this.f33083b = signatureEnhancementBuilder;
            this.f33082a = className;
        }

        public static /* synthetic */ void function$default(ClassEnhancementBuilder classEnhancementBuilder, String str, String str2, Function1 function1, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                str2 = null;
            }
            classEnhancementBuilder.function(str, str2, function1);
        }

        public final void function(@NotNull String name, String str, @NotNull Function1<? super FunctionEnhancementBuilder, Unit> block) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(block, "block");
            Map map = this.f33083b.f33081a;
            FunctionEnhancementBuilder functionEnhancementBuilder = new FunctionEnhancementBuilder(this, name, str);
            block.invoke(functionEnhancementBuilder);
            Pair<String, PredefinedFunctionEnhancementInfo> build = functionEnhancementBuilder.build();
            map.put(build.c(), build.d());
        }

        @NotNull
        public final String getClassName() {
            return this.f33082a;
        }

        @SourceDebugExtension({"SMAP\npredefinedEnhancementInfo.kt\nKotlin\n*S Kotlin\n*F\n+ 1 predefinedEnhancementInfo.kt\norg/jetbrains/kotlin/load/java/typeEnhancement/SignatureEnhancementBuilder$ClassEnhancementBuilder$FunctionEnhancementBuilder\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,347:1\n1222#2,2:348\n1252#2,4:350\n1222#2,2:354\n1252#2,4:356\n1563#2:360\n1634#2,3:361\n1563#2:364\n1634#2,3:365\n*S KotlinDebug\n*F\n+ 1 predefinedEnhancementInfo.kt\norg/jetbrains/kotlin/load/java/typeEnhancement/SignatureEnhancementBuilder$ClassEnhancementBuilder$FunctionEnhancementBuilder\n*L\n319#1:348,2\n319#1:350,4\n330#1:354,2\n330#1:356,4\n338#1:360\n338#1:361,3\n339#1:364\n339#1:365,3\n*E\n"})
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public final class FunctionEnhancementBuilder {

            /* renamed from: a  reason: collision with root package name */
            private final String f33084a;

            /* renamed from: b  reason: collision with root package name */
            private final String f33085b;

            /* renamed from: c  reason: collision with root package name */
            private final List f33086c;

            /* renamed from: d  reason: collision with root package name */
            private Pair f33087d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ ClassEnhancementBuilder f33088e;

            public FunctionEnhancementBuilder(@NotNull ClassEnhancementBuilder classEnhancementBuilder, String functionName, String str) {
                Intrinsics.checkNotNullParameter(functionName, "functionName");
                this.f33088e = classEnhancementBuilder;
                this.f33084a = functionName;
                this.f33085b = str;
                this.f33086c = new ArrayList();
                this.f33087d = qr.v.a("V", null);
            }

            @NotNull
            public final Pair<String, PredefinedFunctionEnhancementInfo> build() {
                SignatureBuildingComponents signatureBuildingComponents = SignatureBuildingComponents.INSTANCE;
                String className = this.f33088e.getClassName();
                String str = this.f33084a;
                List<Pair> list = this.f33086c;
                ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
                for (Pair pair : list) {
                    arrayList.add((String) pair.c());
                }
                String signature = signatureBuildingComponents.signature(className, signatureBuildingComponents.jvmDescriptor(str, arrayList, (String) this.f33087d.c()));
                TypeEnhancementInfo typeEnhancementInfo = (TypeEnhancementInfo) this.f33087d.d();
                List<Pair> list2 = this.f33086c;
                ArrayList arrayList2 = new ArrayList(CollectionsKt.w(list2, 10));
                for (Pair pair2 : list2) {
                    arrayList2.add((TypeEnhancementInfo) pair2.d());
                }
                return qr.v.a(signature, new PredefinedFunctionEnhancementInfo(typeEnhancementInfo, arrayList2, this.f33085b));
            }

            public final void parameter(@NotNull String type, @NotNull JavaTypeQualifiers... qualifiers) {
                TypeEnhancementInfo typeEnhancementInfo;
                Intrinsics.checkNotNullParameter(type, "type");
                Intrinsics.checkNotNullParameter(qualifiers, "qualifiers");
                List list = this.f33086c;
                if (qualifiers.length == 0) {
                    typeEnhancementInfo = null;
                } else {
                    Iterable<IndexedValue> g12 = kotlin.collections.i.g1(qualifiers);
                    LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(CollectionsKt.w(g12, 10)), 16));
                    for (IndexedValue indexedValue : g12) {
                        linkedHashMap.put(Integer.valueOf(indexedValue.c()), (JavaTypeQualifiers) indexedValue.d());
                    }
                    typeEnhancementInfo = new TypeEnhancementInfo(linkedHashMap);
                }
                list.add(qr.v.a(type, typeEnhancementInfo));
            }

            public final void returns(@NotNull String type, @NotNull JavaTypeQualifiers... qualifiers) {
                Intrinsics.checkNotNullParameter(type, "type");
                Intrinsics.checkNotNullParameter(qualifiers, "qualifiers");
                Iterable<IndexedValue> g12 = kotlin.collections.i.g1(qualifiers);
                LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(kotlin.collections.o0.e(CollectionsKt.w(g12, 10)), 16));
                for (IndexedValue indexedValue : g12) {
                    linkedHashMap.put(Integer.valueOf(indexedValue.c()), (JavaTypeQualifiers) indexedValue.d());
                }
                this.f33087d = qr.v.a(type, new TypeEnhancementInfo(linkedHashMap));
            }

            public final void returns(@NotNull JvmPrimitiveType type) {
                Intrinsics.checkNotNullParameter(type, "type");
                String desc = type.getDesc();
                Intrinsics.checkNotNullExpressionValue(desc, "getDesc(...)");
                this.f33087d = qr.v.a(desc, null);
            }
        }
    }
}
