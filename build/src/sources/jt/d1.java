package jt;

import java.util.Iterator;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.encoding.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d1 extends a {

    /* renamed from: a  reason: collision with root package name */
    private final KSerializer f31035a;

    /* renamed from: b  reason: collision with root package name */
    private final KSerializer f31036b;

    public /* synthetic */ d1(KSerializer kSerializer, KSerializer kSerializer2, DefaultConstructorMarker defaultConstructorMarker) {
        this(kSerializer, kSerializer2);
    }

    @Override // kotlinx.serialization.KSerializer, ft.o, kotlinx.serialization.DeserializationStrategy
    public abstract SerialDescriptor getDescriptor();

    public final KSerializer m() {
        return this.f31035a;
    }

    public final KSerializer n() {
        return this.f31036b;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.a
    /* renamed from: o */
    public final void g(kotlinx.serialization.encoding.c decoder, Map builder, int i10, int i11) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        Intrinsics.checkNotNullParameter(builder, "builder");
        if (i11 >= 0) {
            kotlin.ranges.a s10 = kotlin.ranges.d.s(kotlin.ranges.d.u(0, i11 * 2), 2);
            int d10 = s10.d();
            int e10 = s10.e();
            int f10 = s10.f();
            if ((f10 <= 0 || d10 > e10) && (f10 >= 0 || e10 > d10)) {
                return;
            }
            while (true) {
                h(decoder, i10 + d10, builder, false);
                if (d10 != e10) {
                    d10 += f10;
                } else {
                    return;
                }
            }
        } else {
            throw new IllegalArgumentException("Size must be known in advance when using READ_ALL");
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.a
    /* renamed from: p */
    public final void h(kotlinx.serialization.encoding.c decoder, int i10, Map builder, boolean z10) {
        int i11;
        Object c10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        Intrinsics.checkNotNullParameter(builder, "builder");
        Object c11 = c.a.c(decoder, getDescriptor(), i10, this.f31035a, null, 8, null);
        if (z10) {
            i11 = decoder.o(getDescriptor());
            if (i11 != i10 + 1) {
                throw new IllegalArgumentException(("Value must follow key in a map, index for key: " + i10 + ", returned index for value: " + i11).toString());
            }
        } else {
            i11 = i10 + 1;
        }
        int i12 = i11;
        if (builder.containsKey(c11) && !(this.f31036b.getDescriptor().getKind() instanceof ht.e)) {
            c10 = decoder.y(getDescriptor(), i12, this.f31036b, kotlin.collections.o0.j(builder, c11));
        } else {
            c10 = c.a.c(decoder, getDescriptor(), i12, this.f31036b, null, 8, null);
        }
        builder.put(c11, c10);
    }

    @Override // ft.o
    public void serialize(Encoder encoder, Object obj) {
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        int e10 = e(obj);
        SerialDescriptor descriptor = getDescriptor();
        CompositeEncoder h10 = encoder.h(descriptor, e10);
        Iterator d10 = d(obj);
        int i10 = 0;
        while (d10.hasNext()) {
            Map.Entry entry = (Map.Entry) d10.next();
            Object key = entry.getKey();
            Object value = entry.getValue();
            int i11 = i10 + 1;
            h10.s(getDescriptor(), i10, m(), key);
            i10 += 2;
            h10.s(getDescriptor(), i11, n(), value);
        }
        h10.c(descriptor);
    }

    private d1(KSerializer kSerializer, KSerializer kSerializer2) {
        super(null);
        this.f31035a = kSerializer;
        this.f31036b = kSerializer2;
    }
}
