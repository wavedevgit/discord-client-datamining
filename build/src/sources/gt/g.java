package gt;

import java.lang.annotation.Annotation;
import java.util.List;
import jt.d;
import jt.k;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.StringCompanionObject;
import kotlin.reflect.KClass;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends kt.b {

    /* renamed from: a  reason: collision with root package name */
    private final KClass f24794a;

    /* renamed from: b  reason: collision with root package name */
    private List f24795b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f24796c;

    public g(KClass baseClass) {
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        this.f24794a = baseClass;
        this.f24795b = CollectionsKt.l();
        this.f24796c = rr.l.b(rr.o.f49210e, new Function0() { // from class: gt.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor h10;
                h10 = g.h(g.this);
                return h10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor h(final g gVar) {
        return jt.b.c(jt.j.d("kotlinx.serialization.Polymorphic", d.a.f30474a, new SerialDescriptor[0], new Function1() { // from class: gt.f
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit i10;
                i10 = g.i(g.this, (jt.a) obj);
                return i10;
            }
        }), gVar.e());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(g gVar, jt.a buildSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        jt.a.b(buildSerialDescriptor, "type", ht.a.E(StringCompanionObject.INSTANCE).getDescriptor(), null, false, 12, null);
        jt.a.b(buildSerialDescriptor, "value", jt.j.e("kotlinx.serialization.Polymorphic<" + gVar.e().getSimpleName() + '>', k.a.f30493a, new SerialDescriptor[0], null, 8, null), null, false, 12, null);
        buildSerialDescriptor.h(gVar.f24795b);
        return Unit.f31765a;
    }

    @Override // kt.b
    public KClass e() {
        return this.f24794a;
    }

    @Override // kotlinx.serialization.KSerializer, gt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) this.f24796c.getValue();
    }

    public String toString() {
        return "kotlinx.serialization.PolymorphicSerializer(baseClass: " + e() + ')';
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public g(KClass baseClass, Annotation[] classAnnotations) {
        this(baseClass);
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Intrinsics.checkNotNullParameter(classAnnotations, "classAnnotations");
        this.f24795b = kotlin.collections.i.e(classAnnotations);
    }
}
