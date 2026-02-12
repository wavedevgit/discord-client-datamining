package nt;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements e {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f38369a;

    /* renamed from: b  reason: collision with root package name */
    private final int f38370b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f38371c;

    public g(Function1 number, int i10, Integer num) {
        Intrinsics.checkNotNullParameter(number, "number");
        this.f38369a = number;
        this.f38370b = i10;
        this.f38371c = num;
        if (i10 >= 0) {
            if (i10 <= 9) {
                return;
            }
            throw new IllegalArgumentException(("The minimum number of digits (" + i10 + ") exceeds the length of an Int").toString());
        }
        throw new IllegalArgumentException(("The minimum number of digits (" + i10 + ") is negative").toString());
    }
}
