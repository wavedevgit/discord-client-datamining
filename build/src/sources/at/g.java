package at;

import ct.d;
import ct.k;
import java.lang.annotation.Annotation;
import java.util.List;
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
public final class g extends dt.b {

    /* renamed from: a  reason: collision with root package name */
    private final KClass f6127a;

    /* renamed from: b  reason: collision with root package name */
    private List f6128b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f6129c;

    public g(KClass baseClass) {
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        this.f6127a = baseClass;
        this.f6128b = CollectionsKt.l();
        this.f6129c = lr.l.b(lr.o.f37120e, new Function0() { // from class: at.e
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
        return ct.b.c(ct.j.d("kotlinx.serialization.Polymorphic", d.a.f19832a, new SerialDescriptor[0], new Function1() { // from class: at.f
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit i10;
                i10 = g.i(g.this, (ct.a) obj);
                return i10;
            }
        }), gVar.e());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(g gVar, ct.a buildSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        ct.a.b(buildSerialDescriptor, "type", bt.a.F(StringCompanionObject.INSTANCE).getDescriptor(), null, false, 12, null);
        ct.a.b(buildSerialDescriptor, "value", ct.j.e("kotlinx.serialization.Polymorphic<" + gVar.e().getSimpleName() + '>', k.a.f19851a, new SerialDescriptor[0], null, 8, null), null, false, 12, null);
        buildSerialDescriptor.h(gVar.f6128b);
        return Unit.f32464a;
    }

    @Override // dt.b
    public KClass e() {
        return this.f6127a;
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) this.f6129c.getValue();
    }

    public String toString() {
        return "kotlinx.serialization.PolymorphicSerializer(baseClass: " + e() + ')';
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public g(KClass baseClass, Annotation[] classAnnotations) {
        this(baseClass);
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Intrinsics.checkNotNullParameter(classAnnotations, "classAnnotations");
        this.f6128b = kotlin.collections.i.e(classAnnotations);
    }
}
