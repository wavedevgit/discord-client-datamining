package ht;

import ft.d;
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
    public static final o f26980a = new o();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f26981b = ft.j.d("kotlinx.serialization.json.JsonElement", d.b.f23474a, new SerialDescriptor[0], new Function1() { // from class: ht.i
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Unit g10;
            g10 = o.g((ft.a) obj);
            return g10;
        }
    });

    private o() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(ft.a buildSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        ft.a.b(buildSerialDescriptor, "JsonPrimitive", p.a(new Function0() { // from class: ht.j
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor h10;
                h10 = o.h();
                return h10;
            }
        }), null, false, 12, null);
        ft.a.b(buildSerialDescriptor, "JsonNull", p.a(new Function0() { // from class: ht.k
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor i10;
                i10 = o.i();
                return i10;
            }
        }), null, false, 12, null);
        ft.a.b(buildSerialDescriptor, "JsonLiteral", p.a(new Function0() { // from class: ht.l
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor j10;
                j10 = o.j();
                return j10;
            }
        }), null, false, 12, null);
        ft.a.b(buildSerialDescriptor, "JsonObject", p.a(new Function0() { // from class: ht.m
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor k10;
                k10 = o.k();
                return k10;
            }
        }), null, false, 12, null);
        ft.a.b(buildSerialDescriptor, "JsonArray", p.a(new Function0() { // from class: ht.n
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor l10;
                l10 = o.l();
                return l10;
            }
        }), null, false, 12, null);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor h() {
        return z.f26996a.getDescriptor();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor i() {
        return v.f26988a.getDescriptor();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor j() {
        return s.f26986a.getDescriptor();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor k() {
        return y.f26991a.getDescriptor();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor l() {
        return b.f26958a.getDescriptor();
    }

    @Override // kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f26981b;
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: m */
    public JsonElement deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return p.d(decoder).g();
    }

    @Override // dt.o
    /* renamed from: n */
    public void serialize(Encoder encoder, JsonElement value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        p.c(encoder);
        if (value instanceof JsonPrimitive) {
            encoder.y(z.f26996a, value);
        } else if (value instanceof JsonObject) {
            encoder.y(y.f26991a, value);
        } else if (value instanceof JsonArray) {
            encoder.y(b.f26958a, value);
        } else {
            throw new or.p();
        }
    }
}
