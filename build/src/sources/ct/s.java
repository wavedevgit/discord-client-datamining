package ct;

import at.e;
import dt.g0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.text.StringsKt;
import kotlin.text.e0;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.json.JsonElement;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    public static final s f20828a = new s();

    /* renamed from: b  reason: collision with root package name */
    private static final SerialDescriptor f20829b = at.j.b("kotlinx.serialization.json.JsonLiteral", e.i.f6078a);

    private s() {
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: a */
    public r deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        JsonElement g10 = p.d(decoder).g();
        if (g10 instanceof r) {
            return (r) g10;
        }
        throw g0.e(-1, "Unexpected JSON element, expected JsonLiteral, had " + Reflection.getOrCreateKotlinClass(g10.getClass()), g10.toString());
    }

    @Override // ys.o
    /* renamed from: b */
    public void serialize(Encoder encoder, r value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        p.h(encoder);
        if (value.c()) {
            encoder.F(value.b());
        } else if (value.d() != null) {
            encoder.j(value.d()).F(value.b());
        } else {
            Long t10 = StringsKt.t(value.b());
            if (t10 != null) {
                encoder.k(t10.longValue());
                return;
            }
            jr.b0 h10 = e0.h(value.b());
            if (h10 != null) {
                encoder.j(zs.a.y(jr.b0.f32154e).getDescriptor()).k(h10.h());
                return;
            }
            Double p10 = StringsKt.p(value.b());
            if (p10 != null) {
                encoder.f(p10.doubleValue());
                return;
            }
            Boolean j12 = StringsKt.j1(value.b());
            if (j12 != null) {
                encoder.q(j12.booleanValue());
            } else {
                encoder.F(value.b());
            }
        }
    }

    @Override // kotlinx.serialization.KSerializer, ys.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return f20829b;
    }
}
