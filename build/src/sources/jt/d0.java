package jt;

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
    private final Enum[] f31032a;

    /* renamed from: b  reason: collision with root package name */
    private SerialDescriptor f31033b;

    /* renamed from: c  reason: collision with root package name */
    private final Lazy f31034c;

    public d0(final String serialName, Enum[] values) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(values, "values");
        this.f31032a = values;
        this.f31034c = qr.l.a(new Function0() { // from class: jt.c0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor c10;
                c10 = d0.c(d0.this, serialName);
                return c10;
            }
        });
    }

    private final SerialDescriptor b(String str) {
        b0 b0Var = new b0(str, this.f31032a.length);
        for (Enum r42 : this.f31032a) {
            a2.p(b0Var, r42.name(), false, 2, null);
        }
        return b0Var;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor c(d0 d0Var, String str) {
        SerialDescriptor serialDescriptor = d0Var.f31033b;
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
            Enum[] enumArr = this.f31032a;
            if (e10 < enumArr.length) {
                return enumArr[e10];
            }
        }
        throw new ft.n(e10 + " is not among valid " + getDescriptor().h() + " enum values, values size is " + this.f31032a.length);
    }

    @Override // ft.o
    /* renamed from: e */
    public void serialize(Encoder encoder, Enum value) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        int h02 = kotlin.collections.i.h0(this.f31032a, value);
        if (h02 != -1) {
            encoder.i(getDescriptor(), h02);
            return;
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append(value);
        sb2.append(" is not a valid enum ");
        sb2.append(getDescriptor().h());
        sb2.append(", must be one of ");
        String arrays = Arrays.toString(this.f31032a);
        Intrinsics.checkNotNullExpressionValue(arrays, "toString(...)");
        sb2.append(arrays);
        throw new ft.n(sb2.toString());
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return (SerialDescriptor) this.f31034c.getValue();
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
        this.f31033b = descriptor;
    }
}
