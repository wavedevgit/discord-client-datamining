package at;

import java.util.Iterator;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.encoding.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class s extends a {

    /* renamed from: a  reason: collision with root package name */
    private final KSerializer f6879a;

    public /* synthetic */ s(KSerializer kSerializer, DefaultConstructorMarker defaultConstructorMarker) {
        this(kSerializer);
    }

    @Override // at.a
    protected final void g(kotlinx.serialization.encoding.c decoder, Object obj, int i10, int i11) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        if (i11 >= 0) {
            for (int i12 = 0; i12 < i11; i12++) {
                h(decoder, i10 + i12, obj, false);
            }
            return;
        }
        throw new IllegalArgumentException("Size must be known in advance when using READ_ALL");
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public abstract SerialDescriptor getDescriptor();

    @Override // at.a
    protected void h(kotlinx.serialization.encoding.c decoder, int i10, Object obj, boolean z10) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        n(obj, i10, c.a.c(decoder, getDescriptor(), i10, this.f6879a, null, 8, null));
    }

    protected abstract void n(Object obj, int i10, Object obj2);

    @Override // xs.o
    public void serialize(Encoder encoder, Object obj) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        int e10 = e(obj);
        SerialDescriptor descriptor = getDescriptor();
        CompositeEncoder i10 = encoder.i(descriptor, e10);
        Iterator d10 = d(obj);
        for (int i11 = 0; i11 < e10; i11++) {
            i10.j(getDescriptor(), i11, this.f6879a, d10.next());
        }
        i10.c(descriptor);
    }

    private s(KSerializer kSerializer) {
        super(null);
        this.f6879a = kSerializer;
    }
}
