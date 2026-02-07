package kotlinx.serialization;

import ht.d;
import ht.j;
import ht.k;
import java.lang.annotation.Annotation;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import jt.b;
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
import qr.l;
import qr.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class SealedClassSerializer extends b {

    /* renamed from: a  reason: collision with root package name */
    private final KClass f35138a;

    /* renamed from: b  reason: collision with root package name */
    private List f35139b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f35140c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f35141d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f35142e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements j0 {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Iterable f35143a;

        public a(Iterable iterable) {
            this.f35143a = iterable;
        }

        @Override // kotlin.collections.j0
        public Object a(Object obj) {
            return ((KSerializer) ((Map.Entry) obj).getValue()).getDescriptor().h();
        }

        @Override // kotlin.collections.j0
        public Iterator b() {
            return this.f35143a.iterator();
        }
    }

    public SealedClassSerializer(final String serialName, KClass baseClass, KClass[] subclasses, KSerializer[] subclassSerializers) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Intrinsics.checkNotNullParameter(subclasses, "subclasses");
        Intrinsics.checkNotNullParameter(subclassSerializers, "subclassSerializers");
        this.f35138a = baseClass;
        this.f35139b = CollectionsKt.l();
        this.f35140c = l.b(o.f48092e, new Function0() { // from class: ft.i
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor i10;
                i10 = SealedClassSerializer.i(serialName, this);
                return i10;
            }
        });
        if (subclasses.length == subclassSerializers.length) {
            Map u10 = o0.u(i.j1(subclasses, subclassSerializers));
            this.f35141d = u10;
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
            this.f35142e = linkedHashMap2;
            return;
        }
        throw new IllegalArgumentException("All subclasses of sealed class " + e().getSimpleName() + " should be marked @Serializable");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor i(String str, final SealedClassSerializer sealedClassSerializer) {
        return j.d(str, d.b.f26517a, new SerialDescriptor[0], new Function1() { // from class: ft.j
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit j10;
                j10 = SealedClassSerializer.j(SealedClassSerializer.this, (ht.a) obj);
                return j10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(final SealedClassSerializer sealedClassSerializer, ht.a buildSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        ht.a.b(buildSerialDescriptor, "type", gt.a.E(StringCompanionObject.INSTANCE).getDescriptor(), null, false, 12, null);
        ht.a.b(buildSerialDescriptor, "value", j.d("kotlinx.serialization.Sealed<" + sealedClassSerializer.e().getSimpleName() + '>', k.a.f26535a, new SerialDescriptor[0], new Function1() { // from class: ft.k
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit k10;
                k10 = SealedClassSerializer.k(SealedClassSerializer.this, (ht.a) obj);
                return k10;
            }
        }), null, false, 12, null);
        buildSerialDescriptor.h(sealedClassSerializer.f35139b);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(SealedClassSerializer sealedClassSerializer, ht.a buildSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        for (Map.Entry entry : sealedClassSerializer.f35142e.entrySet()) {
            ht.a.b(buildSerialDescriptor, (String) entry.getKey(), ((KSerializer) entry.getValue()).getDescriptor(), null, false, 12, null);
        }
        return Unit.f32056a;
    }

    @Override // jt.b
    public ft.o c(Encoder encoder, Object value) {
        KSerializer c10;
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        KSerializer kSerializer = (KSerializer) this.f35141d.get(Reflection.getOrCreateKotlinClass(value.getClass()));
        if (kSerializer != null) {
            c10 = kSerializer;
        } else {
            c10 = super.c(encoder, value);
        }
        if (c10 != null) {
            return c10;
        }
        return null;
    }

    @Override // jt.b
    public DeserializationStrategy d(c decoder, String str) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        KSerializer kSerializer = (KSerializer) this.f35142e.get(str);
        if (kSerializer != null) {
            return kSerializer;
        }
        return super.d(decoder, str);
    }

    @Override // jt.b
    public KClass e() {
        return this.f35138a;
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) this.f35140c.getValue();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public SealedClassSerializer(String serialName, KClass baseClass, KClass[] subclasses, KSerializer[] subclassSerializers, Annotation[] classAnnotations) {
        this(serialName, baseClass, subclasses, subclassSerializers);
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Intrinsics.checkNotNullParameter(subclasses, "subclasses");
        Intrinsics.checkNotNullParameter(subclassSerializers, "subclassSerializers");
        Intrinsics.checkNotNullParameter(classAnnotations, "classAnnotations");
        this.f35139b = i.e(classAnnotations);
    }
}
