package bt;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class u implements o {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f7273a;

    public u(Function1 operation) {
        Intrinsics.checkNotNullParameter(operation, "operation");
        this.f7273a = operation;
    }

    @Override // bt.o
    public Object a(Object obj, CharSequence input, int i10) {
        Intrinsics.checkNotNullParameter(input, "input");
        this.f7273a.invoke(obj);
        return k.f7241a.b(i10);
    }
}
