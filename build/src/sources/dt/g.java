package dt;

import ft.d;
import ft.k;
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
public final class g extends gt.b {

    /* renamed from: a  reason: collision with root package name */
    private final KClass f21232a;

    /* renamed from: b  reason: collision with root package name */
    private List f21233b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f21234c;

    public g(KClass baseClass) {
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        this.f21232a = baseClass;
        this.f21233b = CollectionsKt.l();
        this.f21234c = or.l.b(or.o.f44232e, new Function0() { // from class: dt.e
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
        return ft.b.c(ft.j.d("kotlinx.serialization.Polymorphic", d.a.f23473a, new SerialDescriptor[0], new Function1() { // from class: dt.f
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit i10;
                i10 = g.i(g.this, (ft.a) obj);
                return i10;
            }
        }), gVar.e());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(g gVar, ft.a buildSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        ft.a.b(buildSerialDescriptor, "type", et.a.E(StringCompanionObject.INSTANCE).getDescriptor(), null, false, 12, null);
        ft.a.b(buildSerialDescriptor, "value", ft.j.e("kotlinx.serialization.Polymorphic<" + gVar.e().getSimpleName() + '>', k.a.f23492a, new SerialDescriptor[0], null, 8, null), null, false, 12, null);
        buildSerialDescriptor.h(gVar.f21233b);
        return Unit.f31988a;
    }

    @Override // gt.b
    public KClass e() {
        return this.f21232a;
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) this.f21234c.getValue();
    }

    public String toString() {
        return "kotlinx.serialization.PolymorphicSerializer(baseClass: " + e() + ')';
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public g(KClass baseClass, Annotation[] classAnnotations) {
        this(baseClass);
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Intrinsics.checkNotNullParameter(classAnnotations, "classAnnotations");
        this.f21233b = kotlin.collections.i.e(classAnnotations);
    }
}
