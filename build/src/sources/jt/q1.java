package jt;

import kotlin.Pair;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q1 extends s0 {

    /* renamed from: c  reason: collision with root package name */
    private final SerialDescriptor f31066c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public q1(final KSerializer keySerializer, final KSerializer valueSerializer) {
        super(keySerializer, valueSerializer, null);
        Intrinsics.checkNotNullParameter(keySerializer, "keySerializer");
        Intrinsics.checkNotNullParameter(valueSerializer, "valueSerializer");
        this.f31066c = ht.j.c("kotlin.Pair", new SerialDescriptor[0], new Function1() { // from class: jt.p1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit g10;
                g10 = q1.g(KSerializer.this, valueSerializer, (ht.a) obj);
                return g10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(KSerializer kSerializer, KSerializer kSerializer2, ht.a buildClassSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildClassSerialDescriptor, "$this$buildClassSerialDescriptor");
        ht.a.b(buildClassSerialDescriptor, "first", kSerializer.getDescriptor(), null, false, 12, null);
        ht.a.b(buildClassSerialDescriptor, "second", kSerializer2.getDescriptor(), null, false, 12, null);
        return Unit.f32008a;
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f31066c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.s0
    /* renamed from: h */
    public Object a(Pair pair) {
        Intrinsics.checkNotNullParameter(pair, "<this>");
        return pair.c();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.s0
    /* renamed from: i */
    public Object c(Pair pair) {
        Intrinsics.checkNotNullParameter(pair, "<this>");
        return pair.d();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.s0
    /* renamed from: j */
    public Pair e(Object obj, Object obj2) {
        return qr.v.a(obj, obj2);
    }
}
