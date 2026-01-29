package dt;

import ir.p;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.TypeIntrinsics;
import kotlin.reflect.KClass;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.KSerializer;
import xs.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a extends b {

    /* renamed from: a  reason: collision with root package name */
    private final Map f22407a;

    /* renamed from: b  reason: collision with root package name */
    public final Map f22408b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f22409c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f22410d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f22411e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f22412f;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(Map class2ContextualFactory, Map polyBase2Serializers, Map polyBase2DefaultSerializerProvider, Map polyBase2NamedSerializers, Map polyBase2DefaultDeserializerProvider, boolean z10) {
        super(null);
        Intrinsics.checkNotNullParameter(class2ContextualFactory, "class2ContextualFactory");
        Intrinsics.checkNotNullParameter(polyBase2Serializers, "polyBase2Serializers");
        Intrinsics.checkNotNullParameter(polyBase2DefaultSerializerProvider, "polyBase2DefaultSerializerProvider");
        Intrinsics.checkNotNullParameter(polyBase2NamedSerializers, "polyBase2NamedSerializers");
        Intrinsics.checkNotNullParameter(polyBase2DefaultDeserializerProvider, "polyBase2DefaultDeserializerProvider");
        this.f22407a = class2ContextualFactory;
        this.f22408b = polyBase2Serializers;
        this.f22409c = polyBase2DefaultSerializerProvider;
        this.f22410d = polyBase2NamedSerializers;
        this.f22411e = polyBase2DefaultDeserializerProvider;
        this.f22412f = z10;
    }

    @Override // dt.b
    public void a(d collector) {
        Intrinsics.checkNotNullParameter(collector, "collector");
        Iterator it = this.f22407a.entrySet().iterator();
        if (!it.hasNext()) {
            for (Map.Entry entry : this.f22408b.entrySet()) {
                KClass kClass = (KClass) entry.getKey();
                for (Map.Entry entry2 : ((Map) entry.getValue()).entrySet()) {
                    KClass kClass2 = (KClass) entry2.getKey();
                    KSerializer kSerializer = (KSerializer) entry2.getValue();
                    Intrinsics.checkNotNull(kClass, "null cannot be cast to non-null type kotlin.reflect.KClass<kotlin.Any>");
                    Intrinsics.checkNotNull(kClass2, "null cannot be cast to non-null type kotlin.reflect.KClass<kotlin.Any>");
                    Intrinsics.checkNotNull(kSerializer, "null cannot be cast to non-null type kotlinx.serialization.KSerializer<T of kotlinx.serialization.internal.Platform_commonKt.cast>");
                    collector.a(kClass, kClass2, kSerializer);
                }
            }
            for (Map.Entry entry3 : this.f22409c.entrySet()) {
                KClass kClass3 = (KClass) entry3.getKey();
                Function1 function1 = (Function1) entry3.getValue();
                Intrinsics.checkNotNull(kClass3, "null cannot be cast to non-null type kotlin.reflect.KClass<kotlin.Any>");
                Intrinsics.checkNotNull(function1, "null cannot be cast to non-null type kotlin.Function1<@[ParameterName(name = \"value\")] kotlin.Any, kotlinx.serialization.SerializationStrategy<kotlin.Any>?>");
                collector.c(kClass3, (Function1) TypeIntrinsics.beforeCheckcastToFunctionOfArity(function1, 1));
            }
            for (Map.Entry entry4 : this.f22411e.entrySet()) {
                KClass kClass4 = (KClass) entry4.getKey();
                Function1 function12 = (Function1) entry4.getValue();
                Intrinsics.checkNotNull(kClass4, "null cannot be cast to non-null type kotlin.reflect.KClass<kotlin.Any>");
                Intrinsics.checkNotNull(function12, "null cannot be cast to non-null type kotlin.Function1<@[ParameterName(name = \"className\")] kotlin.String?, kotlinx.serialization.DeserializationStrategy<kotlin.Any>?>");
                collector.b(kClass4, (Function1) TypeIntrinsics.beforeCheckcastToFunctionOfArity(function12, 1));
            }
            return;
        }
        Map.Entry entry5 = (Map.Entry) it.next();
        KClass kClass5 = (KClass) entry5.getKey();
        android.support.v4.media.session.b.a(entry5.getValue());
        throw new p();
    }

    @Override // dt.b
    public KSerializer b(KClass kClass, List typeArgumentsSerializers) {
        Intrinsics.checkNotNullParameter(kClass, "kClass");
        Intrinsics.checkNotNullParameter(typeArgumentsSerializers, "typeArgumentsSerializers");
        android.support.v4.media.session.b.a(this.f22407a.get(kClass));
        return null;
    }

    @Override // dt.b
    public boolean d() {
        return this.f22412f;
    }

    @Override // dt.b
    public DeserializationStrategy e(KClass baseClass, String str) {
        KSerializer kSerializer;
        Function1 function1;
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Map map = (Map) this.f22410d.get(baseClass);
        if (map != null) {
            kSerializer = (KSerializer) map.get(str);
        } else {
            kSerializer = null;
        }
        if (!(kSerializer instanceof KSerializer)) {
            kSerializer = null;
        }
        if (kSerializer != null) {
            return kSerializer;
        }
        Object obj = this.f22411e.get(baseClass);
        if (TypeIntrinsics.isFunctionOfArity(obj, 1)) {
            function1 = (Function1) obj;
        } else {
            function1 = null;
        }
        if (function1 == null) {
            return null;
        }
        return (DeserializationStrategy) function1.invoke(str);
    }

    @Override // dt.b
    public o f(KClass baseClass, Object value) {
        KSerializer kSerializer;
        KSerializer kSerializer2;
        Function1 function1;
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Intrinsics.checkNotNullParameter(value, "value");
        if (!baseClass.isInstance(value)) {
            return null;
        }
        Map map = (Map) this.f22408b.get(baseClass);
        if (map != null) {
            kSerializer = (KSerializer) map.get(Reflection.getOrCreateKotlinClass(value.getClass()));
        } else {
            kSerializer = null;
        }
        if (kSerializer instanceof o) {
            kSerializer2 = kSerializer;
        } else {
            kSerializer2 = null;
        }
        if (kSerializer2 != null) {
            return kSerializer2;
        }
        Object obj = this.f22409c.get(baseClass);
        if (TypeIntrinsics.isFunctionOfArity(obj, 1)) {
            function1 = (Function1) obj;
        } else {
            function1 = null;
        }
        if (function1 == null) {
            return null;
        }
        return (o) function1.invoke(value);
    }
}
