package tt;

import java.util.Arrays;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d0 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    private final Enum[] f49975a;

    /* renamed from: b  reason: collision with root package name */
    private SerialDescriptor f49976b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f49977c;

    public d0(final String serialName, Enum[] values) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(values, "values");
        this.f49975a = values;
        this.f49977c = as.l.b(new Function0() { // from class: tt.c0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor c10;
                c10 = d0.c(d0.this, serialName);
                return c10;
            }
        });
    }

    private final SerialDescriptor b(String str) {
        b0 b0Var = new b0(str, this.f49975a.length);
        for (Enum r42 : this.f49975a) {
            a2.p(b0Var, r42.name(), false, 2, null);
        }
        return b0Var;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor c(d0 d0Var, String str) {
        SerialDescriptor serialDescriptor = d0Var.f49976b;
        if (serialDescriptor == null) {
            return d0Var.b(str);
        }
        return serialDescriptor;
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    /* renamed from: d */
    public Enum deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        int e10 = decoder.e(getDescriptor());
        if (e10 >= 0) {
            Enum[] enumArr = this.f49975a;
            if (e10 < enumArr.length) {
                return enumArr[e10];
            }
        }
        throw new qt.n(e10 + " is not among valid " + getDescriptor().h() + " enum values, values size is " + this.f49975a.length);
    }

    @Override // qt.o
    /* renamed from: e */
    public void serialize(Encoder encoder, Enum value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        int h02 = kotlin.collections.i.h0(this.f49975a, value);
        if (h02 != -1) {
            encoder.i(getDescriptor(), h02);
            return;
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append(value);
        sb2.append(" is not a valid enum ");
        sb2.append(getDescriptor().h());
        sb2.append(", must be one of ");
        String arrays = Arrays.toString(this.f49975a);
        Intrinsics.checkNotNullExpressionValue(arrays, "toString(...)");
        sb2.append(arrays);
        throw new qt.n(sb2.toString());
    }

    @Override // kotlinx.serialization.KSerializer, qt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) this.f49977c.getValue();
    }

    public String toString() {
        return "kotlinx.serialization.internal.EnumSerializer<" + getDescriptor().h() + '>';
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public d0(String serialName, Enum[] values, SerialDescriptor descriptor) {
        this(serialName, values);
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(values, "values");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        this.f49976b = descriptor;
    }
}
