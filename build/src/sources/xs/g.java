package xs;

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
import zs.d;
import zs.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends at.b {

    /* renamed from: a  reason: collision with root package name */
    private final KClass f53815a;

    /* renamed from: b  reason: collision with root package name */
    private List f53816b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f53817c;

    public g(KClass baseClass) {
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        this.f53815a = baseClass;
        this.f53816b = CollectionsKt.l();
        this.f53817c = ir.l.a(ir.o.f31119e, new Function0() { // from class: xs.e
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
        return zs.b.c(zs.j.d("kotlinx.serialization.Polymorphic", d.a.f56097a, new SerialDescriptor[0], new Function1() { // from class: xs.f
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit i10;
                i10 = g.i(g.this, (zs.a) obj);
                return i10;
            }
        }), gVar.e());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(g gVar, zs.a buildSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        zs.a.b(buildSerialDescriptor, "type", ys.a.J(StringCompanionObject.INSTANCE).getDescriptor(), null, false, 12, null);
        zs.a.b(buildSerialDescriptor, "value", zs.j.e("kotlinx.serialization.Polymorphic<" + gVar.e().getSimpleName() + '>', k.a.f56116a, new SerialDescriptor[0], null, 8, null), null, false, 12, null);
        buildSerialDescriptor.h(gVar.f53816b);
        return Unit.f33298a;
    }

    @Override // at.b
    public KClass e() {
        return this.f53815a;
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) this.f53817c.getValue();
    }

    public String toString() {
        return "kotlinx.serialization.PolymorphicSerializer(baseClass: " + e() + ')';
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public g(KClass baseClass, Annotation[] classAnnotations) {
        this(baseClass);
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Intrinsics.checkNotNullParameter(classAnnotations, "classAnnotations");
        this.f53816b = kotlin.collections.i.e(classAnnotations);
    }
}
