package qt;

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
import st.d;
import st.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g extends tt.b {

    /* renamed from: a  reason: collision with root package name */
    private final KClass f46228a;

    /* renamed from: b  reason: collision with root package name */
    private List f46229b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f46230c;

    public g(KClass baseClass) {
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        this.f46228a = baseClass;
        this.f46229b = CollectionsKt.l();
        this.f46230c = as.l.a(as.o.f6082e, new Function0() { // from class: qt.e
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
        return st.b.c(st.j.d("kotlinx.serialization.Polymorphic", d.a.f48927a, new SerialDescriptor[0], new Function1() { // from class: qt.f
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit i10;
                i10 = g.i(g.this, (st.a) obj);
                return i10;
            }
        }), gVar.e());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(g gVar, st.a buildSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        st.a.b(buildSerialDescriptor, "type", rt.a.I(StringCompanionObject.INSTANCE).getDescriptor(), null, false, 12, null);
        st.a.b(buildSerialDescriptor, "value", st.j.e("kotlinx.serialization.Polymorphic<" + gVar.e().getSimpleName() + '>', k.a.f48946a, new SerialDescriptor[0], null, 8, null), null, false, 12, null);
        buildSerialDescriptor.h(gVar.f46229b);
        return Unit.f32556a;
    }

    @Override // tt.b
    public KClass e() {
        return this.f46228a;
    }

    @Override // kotlinx.serialization.KSerializer, qt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) this.f46230c.getValue();
    }

    public String toString() {
        return "kotlinx.serialization.PolymorphicSerializer(baseClass: " + e() + ')';
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public g(KClass baseClass, Annotation[] classAnnotations) {
        this(baseClass);
        Intrinsics.checkNotNullParameter(baseClass, "baseClass");
        Intrinsics.checkNotNullParameter(classAnnotations, "classAnnotations");
        this.f46229b = kotlin.collections.i.e(classAnnotations);
    }
}
