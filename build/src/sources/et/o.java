package et;

import ct.d;
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
    public static final o f22668a = new o();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f22669b = ct.j.d("kotlinx.serialization.json.JsonElement", d.b.f19833a, new SerialDescriptor[0], new Function1() { // from class: et.i
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit g10;
            g10 = o.g((ct.a) obj);
            return g10;
        }
    });

    private o() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(ct.a buildSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        ct.a.b(buildSerialDescriptor, "JsonPrimitive", p.a(new Function0() { // from class: et.j
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor h10;
                h10 = o.h();
                return h10;
            }
        }), null, false, 12, null);
        ct.a.b(buildSerialDescriptor, "JsonNull", p.a(new Function0() { // from class: et.k
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor i10;
                i10 = o.i();
                return i10;
            }
        }), null, false, 12, null);
        ct.a.b(buildSerialDescriptor, "JsonLiteral", p.a(new Function0() { // from class: et.l
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor j10;
                j10 = o.j();
                return j10;
            }
        }), null, false, 12, null);
        ct.a.b(buildSerialDescriptor, "JsonObject", p.a(new Function0() { // from class: et.m
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor k10;
                k10 = o.k();
                return k10;
            }
        }), null, false, 12, null);
        ct.a.b(buildSerialDescriptor, "JsonArray", p.a(new Function0() { // from class: et.n
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor l10;
                l10 = o.l();
                return l10;
            }
        }), null, false, 12, null);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor h() {
        return z.f22684a.getDescriptor();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor i() {
        return v.f22676a.getDescriptor();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor j() {
        return s.f22674a.getDescriptor();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor k() {
        return y.f22679a.getDescriptor();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor l() {
        return b.f22646a.getDescriptor();
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f22669b;
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: m */
    public JsonElement deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return p.d(decoder).g();
    }

    @Override // at.o
    /* renamed from: n */
    public void serialize(Encoder encoder, JsonElement value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        p.c(encoder);
        if (value instanceof JsonPrimitive) {
            encoder.h(z.f22684a, value);
        } else if (value instanceof JsonObject) {
            encoder.h(y.f22679a, value);
        } else if (value instanceof JsonArray) {
            encoder.h(b.f22646a, value);
        } else {
            throw new lr.p();
        }
    }
}
