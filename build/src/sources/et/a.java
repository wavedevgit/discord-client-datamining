package et;

import java.util.Iterator;
import java.util.List;
import java.util.Map;
import jr.p;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.TypeIntrinsics;
import kotlin.reflect.KClass;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.KSerializer;
import ys.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a extends b {

    /* renamed from: a  reason: collision with root package name */
    private final Map f23210a;

    /* renamed from: b  reason: collision with root package name */
    public final Map f23211b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f23212c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f23213d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f23214e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f23215f;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public a(Map class2ContextualFactory, Map polyBase2Serializers, Map polyBase2DefaultSerializerProvider, Map polyBase2NamedSerializers, Map polyBase2DefaultDeserializerProvider, boolean z10) {
        super(null);
        Intrinsics.checkNotNullParameter(class2ContextualFactory, "class2ContextualFactory");
        Intrinsics.checkNotNullParameter(polyBase2Serializers, "polyBase2Serializers");
        Intrinsics.checkNotNullParameter(polyBase2DefaultSerializerProvider, "polyBase2DefaultSerializerProvider");
        Intrinsics.checkNotNullParameter(polyBase2NamedSerializers, "polyBase2NamedSerializers");
        Intrinsics.checkNotNullParameter(polyBase2DefaultDeserializerProvider, "polyBase2DefaultDeserializerProvider");
        this.f23210a = class2ContextualFactory;
        this.f23211b = polyBase2Serializers;
        this.f23212c = polyBase2DefaultSerializerProvider;
        this.f23213d = polyBase2NamedSerializers;
        this.f23214e = polyBase2DefaultDeserializerProvider;
        this.f23215f = z10;
    }

    @Override // et.b
    public void a(d collector) {
        Intrinsics.checkNotNullParameter(collector, "collector");
        Iterator it = this.f23210a.entrySet().iterator();
        if (!it.hasNext()) {
            for (Map.Entry entry : this.f23211b.entrySet()) {
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
            for (Map.Entry entry3 : this.f23212c.entrySet()) {
                KClass kClass3 = (KClass) entry3.getKey();
                Function1 function1 = (Function1) entry3.getValue();
                Intrinsics.checkNotNull(kClass3, "null cannot be cast to non-null type kotlin.reflect.KClass<kotlin.Any>");
                Intrinsics.checkNotNull(function1, "null cannot be cast to non-null type kotlin.Function1<@[ParameterName(name = \"value\")] kotlin.Any, kotlinx.serialization.SerializationStrategy<kotlin.Any>?>");
                collector.c(kClass3, (Function1) TypeIntrinsics.beforeCheckcastToFunctionOfArity(function1, 1));
            }
            for (Map.Entry entry4 : this.f23214e.entrySet()) {
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

    @Override // et.b
    public KSerializer b(KClass kClass, List typeArgumentsSerializers) {
        Intrinsics.checkNotNullParameter(kClass, "kClass");
        Intrinsics.checkNotNullParameter(typeArgumentsSerializers, "typeArgumentsSerializers");
        android.support.v4.media.session.b.a(this.f23210a.get(kClass));
        return null;
    }

    @Override // et.b
    public boolean d() {
        return this.f23215f;
    }

    @Override // et.b
    public DeserializationStrategy e(KClass baseClass, String str) {
        KSerializer kSerializer;
        Function1 function1;
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Map map = (Map) this.f23213d.get(baseClass);
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
        Object obj = this.f23214e.get(baseClass);
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

    @Override // et.b
    public o f(KClass baseClass, Object value) {
        KSerializer kSerializer;
        KSerializer kSerializer2;
        Function1 function1;
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Intrinsics.checkNotNullParameter(value, "value");
        if (!baseClass.isInstance(value)) {
            return null;
        }
        Map map = (Map) this.f23211b.get(baseClass);
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
        Object obj = this.f23212c.get(baseClass);
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
