package dt;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class u implements o {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f21189a;

    public u(Function1 operation) {
        Intrinsics.checkNotNullParameter(operation, "operation");
        this.f21189a = operation;
    }

    @Override // dt.o
    public Object a(Object obj, CharSequence input, int i10) {
        Intrinsics.checkNotNullParameter(input, "input");
        this.f21189a.invoke(obj);
        return k.f21157a.b(i10);
    }
}
