package at;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Decoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.encoding.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class s0 implements KSerializer {

    /* renamed from: a  reason: collision with root package name */
    private final KSerializer f6880a;

    /* renamed from: b  reason: collision with root package name */
    private final KSerializer f6881b;

    public /* synthetic */ s0(KSerializer kSerializer, KSerializer kSerializer2, DefaultConstructorMarker defaultConstructorMarker) {
        this(kSerializer, kSerializer2);
    }

    protected abstract Object a(Object obj);

    protected final KSerializer b() {
        return this.f6880a;
    }

    protected abstract Object c(Object obj);

    protected final KSerializer d() {
        return this.f6881b;
    }

    @Override // kotlinx.serialization.DeserializationStrategy
    public Object deserialize(Decoder decoder) {
        Object obj;
        Object obj2;
        Object obj3;
        Object obj4;
        Object e10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        SerialDescriptor descriptor = getDescriptor();
        kotlinx.serialization.encoding.c b10 = decoder.b(descriptor);
        if (!b10.p()) {
            obj = u2.f6891a;
            obj2 = u2.f6891a;
            Object obj5 = obj2;
            while (true) {
                int o10 = b10.o(getDescriptor());
                if (o10 == -1) {
                    obj3 = u2.f6891a;
                    if (obj != obj3) {
                        obj4 = u2.f6891a;
                        if (obj5 != obj4) {
                            e10 = e(obj, obj5);
                        } else {
                            throw new xs.n("Element 'value' is missing");
                        }
                    } else {
                        throw new xs.n("Element 'key' is missing");
                    }
                } else if (o10 != 0) {
                    if (o10 == 1) {
                        obj5 = c.a.c(b10, getDescriptor(), 1, d(), null, 8, null);
                    } else {
                        throw new xs.n("Invalid index: " + o10);
                    }
                } else {
                    obj = c.a.c(b10, getDescriptor(), 0, b(), null, 8, null);
                }
            }
        } else {
            e10 = e(c.a.c(b10, getDescriptor(), 0, b(), null, 8, null), c.a.c(b10, getDescriptor(), 1, d(), null, 8, null));
        }
        b10.c(descriptor);
        return e10;
    }

    protected abstract Object e(Object obj, Object obj2);

    @Override // xs.o
    public void serialize(Encoder encoder, Object obj) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        CompositeEncoder b10 = encoder.b(getDescriptor());
        b10.j(getDescriptor(), 0, this.f6880a, a(obj));
        b10.j(getDescriptor(), 1, this.f6881b, c(obj));
        b10.c(getDescriptor());
    }

    private s0(KSerializer kSerializer, KSerializer kSerializer2) {
        this.f6880a = kSerializer;
        this.f6881b = kSerializer2;
    }
}
