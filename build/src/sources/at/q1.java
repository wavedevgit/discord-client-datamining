package at;

import kotlin.Pair;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q1 extends s0 {

    /* renamed from: c  reason: collision with root package name */
    private final SerialDescriptor f6873c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public q1(final KSerializer keySerializer, final KSerializer valueSerializer) {
        super(keySerializer, valueSerializer, null);
        Intrinsics.checkNotNullParameter(keySerializer, "keySerializer");
        Intrinsics.checkNotNullParameter(valueSerializer, "valueSerializer");
        this.f6873c = zs.j.c("kotlin.Pair", new SerialDescriptor[0], new Function1() { // from class: at.p1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit g10;
                g10 = q1.g(KSerializer.this, valueSerializer, (zs.a) obj);
                return g10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(KSerializer kSerializer, KSerializer kSerializer2, zs.a buildClassSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildClassSerialDescriptor, "$this$buildClassSerialDescriptor");
        zs.a.b(buildClassSerialDescriptor, "first", kSerializer.getDescriptor(), null, false, 12, null);
        zs.a.b(buildClassSerialDescriptor, "second", kSerializer2.getDescriptor(), null, false, 12, null);
        return Unit.f33298a;
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f6873c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // at.s0
    /* renamed from: h */
    public Object a(Pair pair) {
        Intrinsics.checkNotNullParameter(pair, "<this>");
        return pair.c();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // at.s0
    /* renamed from: i */
    public Object c(Pair pair) {
        Intrinsics.checkNotNullParameter(pair, "<this>");
        return pair.d();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // at.s0
    /* renamed from: j */
    public Pair e(Object obj, Object obj2) {
        return ir.v.a(obj, obj2);
    }
}
