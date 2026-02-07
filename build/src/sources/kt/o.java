package kt;

import ht.d;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.json.JsonArray;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonObject;
import kotlinx.serialization.json.JsonPrimitive;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final o f35566a = new o();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f35567b = ht.j.d("kotlinx.serialization.json.JsonElement", d.b.f26517a, new SerialDescriptor[0], new Function1() { // from class: kt.i
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit g10;
            g10 = o.g((ht.a) obj);
            return g10;
        }
    });

    private o() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(ht.a buildSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        ht.a.b(buildSerialDescriptor, "JsonPrimitive", p.a(new Function0() { // from class: kt.j
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor h10;
                h10 = o.h();
                return h10;
            }
        }), null, false, 12, null);
        ht.a.b(buildSerialDescriptor, "JsonNull", p.a(new Function0() { // from class: kt.k
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor i10;
                i10 = o.i();
                return i10;
            }
        }), null, false, 12, null);
        ht.a.b(buildSerialDescriptor, "JsonLiteral", p.a(new Function0() { // from class: kt.l
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor j10;
                j10 = o.j();
                return j10;
            }
        }), null, false, 12, null);
        ht.a.b(buildSerialDescriptor, "JsonObject", p.a(new Function0() { // from class: kt.m
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor k10;
                k10 = o.k();
                return k10;
            }
        }), null, false, 12, null);
        ht.a.b(buildSerialDescriptor, "JsonArray", p.a(new Function0() { // from class: kt.n
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor l10;
                l10 = o.l();
                return l10;
            }
        }), null, false, 12, null);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor h() {
        return z.f35582a.getDescriptor();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor i() {
        return v.f35574a.getDescriptor();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor j() {
        return s.f35572a.getDescriptor();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor k() {
        return y.f35577a.getDescriptor();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor l() {
        return b.f35544a.getDescriptor();
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f35567b;
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: m */
    public JsonElement deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return p.d(decoder).g();
    }

    @Override // ft.o
    /* renamed from: n */
    public void serialize(Encoder encoder, JsonElement value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        p.c(encoder);
        if (value instanceof JsonPrimitive) {
            encoder.v(z.f35582a, value);
        } else if (value instanceof JsonObject) {
            encoder.v(y.f35577a, value);
        } else if (value instanceof JsonArray) {
            encoder.v(b.f35544a, value);
        } else {
            throw new qr.p();
        }
    }
}
