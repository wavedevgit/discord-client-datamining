package kotlinx.serialization;

import at.b;
import ir.l;
import ir.o;
import java.lang.annotation.Annotation;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.i;
import kotlin.collections.j0;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.StringCompanionObject;
import kotlin.reflect.KClass;
import kotlinx.serialization.SealedClassSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.encoding.c;
import zs.d;
import zs.j;
import zs.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class SealedClassSerializer extends b {

    /* renamed from: a  reason: collision with root package name */
    private final KClass f36364a;

    /* renamed from: b  reason: collision with root package name */
    private List f36365b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f36366c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f36367d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f36368e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements j0 {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Iterable f36369a;

        public a(Iterable iterable) {
            this.f36369a = iterable;
        }

        @Override // kotlin.collections.j0
        public Object a(Object obj) {
            return ((KSerializer) ((Map.Entry) obj).getValue()).getDescriptor().h();
        }

        @Override // kotlin.collections.j0
        public Iterator b() {
            return this.f36369a.iterator();
        }
    }

    public SealedClassSerializer(final String serialName, KClass baseClass, KClass[] subclasses, KSerializer[] subclassSerializers) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Intrinsics.checkNotNullParameter(subclasses, "subclasses");
        Intrinsics.checkNotNullParameter(subclassSerializers, "subclassSerializers");
        this.f36364a = baseClass;
        this.f36365b = CollectionsKt.l();
        this.f36366c = l.a(o.f31103e, new Function0() { // from class: xs.i
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor i10;
                i10 = SealedClassSerializer.i(serialName, this);
                return i10;
            }
        });
        if (subclasses.length == subclassSerializers.length) {
            Map u10 = o0.u(i.j1(subclasses, subclassSerializers));
            this.f36367d = u10;
            a aVar = new a(u10.entrySet());
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            Iterator b10 = aVar.b();
            while (b10.hasNext()) {
                Object next = b10.next();
                Object a10 = aVar.a(next);
                Object obj = linkedHashMap.get(a10);
                if (obj == null) {
                    linkedHashMap.containsKey(a10);
                }
                Map.Entry entry = (Map.Entry) next;
                Map.Entry entry2 = (Map.Entry) obj;
                String str = (String) a10;
                if (entry2 != null) {
                    throw new IllegalStateException(("Multiple sealed subclasses of '" + e() + "' have the same serial name '" + str + "': '" + entry2.getKey() + "', '" + entry.getKey() + '\'').toString());
                }
                linkedHashMap.put(a10, entry);
            }
            LinkedHashMap linkedHashMap2 = new LinkedHashMap(o0.e(linkedHashMap.size()));
            for (Map.Entry entry3 : linkedHashMap.entrySet()) {
                linkedHashMap2.put(entry3.getKey(), (KSerializer) ((Map.Entry) entry3.getValue()).getValue());
            }
            this.f36368e = linkedHashMap2;
            return;
        }
        throw new IllegalArgumentException("All subclasses of sealed class " + e().getSimpleName() + " should be marked @Serializable");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor i(String str, final SealedClassSerializer sealedClassSerializer) {
        return j.d(str, d.b.f56082a, new SerialDescriptor[0], new Function1() { // from class: xs.j
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit j10;
                j10 = SealedClassSerializer.j(SealedClassSerializer.this, (zs.a) obj);
                return j10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(final SealedClassSerializer sealedClassSerializer, zs.a buildSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        zs.a.b(buildSerialDescriptor, "type", ys.a.J(StringCompanionObject.INSTANCE).getDescriptor(), null, false, 12, null);
        zs.a.b(buildSerialDescriptor, "value", j.d("kotlinx.serialization.Sealed<" + sealedClassSerializer.e().getSimpleName() + '>', k.a.f56100a, new SerialDescriptor[0], new Function1() { // from class: xs.k
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit k10;
                k10 = SealedClassSerializer.k(SealedClassSerializer.this, (zs.a) obj);
                return k10;
            }
        }), null, false, 12, null);
        buildSerialDescriptor.h(sealedClassSerializer.f36365b);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(SealedClassSerializer sealedClassSerializer, zs.a buildSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        for (Map.Entry entry : sealedClassSerializer.f36368e.entrySet()) {
            zs.a.b(buildSerialDescriptor, (String) entry.getKey(), ((KSerializer) entry.getValue()).getDescriptor(), null, false, 12, null);
        }
        return Unit.f33282a;
    }

    @Override // at.b
    public DeserializationStrategy c(c decoder, String str) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        KSerializer kSerializer = (KSerializer) this.f36368e.get(str);
        if (kSerializer != null) {
            return kSerializer;
        }
        return super.c(decoder, str);
    }

    @Override // at.b
    public xs.o d(Encoder encoder, Object value) {
        KSerializer d10;
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        KSerializer kSerializer = (KSerializer) this.f36367d.get(Reflection.getOrCreateKotlinClass(value.getClass()));
        if (kSerializer != null) {
            d10 = kSerializer;
        } else {
            d10 = super.d(encoder, value);
        }
        if (d10 != null) {
            return d10;
        }
        return null;
    }

    @Override // at.b
    public KClass e() {
        return this.f36364a;
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) this.f36366c.getValue();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public SealedClassSerializer(String serialName, KClass baseClass, KClass[] subclasses, KSerializer[] subclassSerializers, Annotation[] classAnnotations) {
        this(serialName, baseClass, subclasses, subclassSerializers);
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Intrinsics.checkNotNullParameter(subclasses, "subclasses");
        Intrinsics.checkNotNullParameter(subclassSerializers, "subclassSerializers");
        Intrinsics.checkNotNullParameter(classAnnotations, "classAnnotations");
        this.f36365b = i.e(classAnnotations);
    }
}
