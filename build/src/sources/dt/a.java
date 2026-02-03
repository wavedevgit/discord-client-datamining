package dt;

import java.util.Iterator;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.encoding.Decoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a implements KSerializer {
    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    public static /* synthetic */ void i(a aVar, kotlinx.serialization.encoding.c cVar, int i10, Object obj, boolean z10, int i11, Object obj2) {
        if (obj2 == null) {
            if ((i11 & 8) != 0) {
                z10 = true;
            }
            aVar.h(cVar, i10, obj, z10);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: readElement");
    }

    private final int j(kotlinx.serialization.encoding.c cVar, Object obj) {
        int k10 = cVar.k(getDescriptor());
        c(obj, k10);
        return k10;
    }

    protected abstract Object a();

    protected abstract int b(Object obj);

    protected abstract void c(Object obj, int i10);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract Iterator d(Object obj);

    @Override // kotlinx.serialization.DeserializationStrategy
    public Object deserialize(Decoder decoder) {
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        return f(decoder, null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract int e(Object obj);

    public final Object f(Decoder decoder, Object obj) {
        Object a10;
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        if (obj == null || (a10 = k(obj)) == null) {
            a10 = a();
        }
        Object obj2 = a10;
        int b10 = b(obj2);
        kotlinx.serialization.encoding.c b11 = decoder.b(getDescriptor());
        if (!b11.p()) {
            while (true) {
                int o10 = b11.o(getDescriptor());
                if (o10 == -1) {
                    break;
                }
                i(this, b11, b10 + o10, obj2, false, 8, null);
            }
        } else {
            g(b11, obj2, b10, j(b11, obj2));
        }
        b11.c(getDescriptor());
        return l(obj2);
    }

    protected abstract void g(kotlinx.serialization.encoding.c cVar, Object obj, int i10, int i11);

    protected abstract void h(kotlinx.serialization.encoding.c cVar, int i10, Object obj, boolean z10);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract Object k(Object obj);

    protected abstract Object l(Object obj);

    private a() {
    }
}
