package ys;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class u implements o {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f55331a;

    public u(Function1 operation) {
        Intrinsics.checkNotNullParameter(operation, "operation");
        this.f55331a = operation;
    }

    @Override // ys.o
    public Object a(Object obj, CharSequence input, int i10) {
        Intrinsics.checkNotNullParameter(input, "input");
        this.f55331a.invoke(obj);
        return k.f55299a.b(i10);
    }
}
