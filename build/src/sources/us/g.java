package us;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements e {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f50561a;

    /* renamed from: b  reason: collision with root package name */
    private final int f50562b;

    /* renamed from: c  reason: collision with root package name */
    private final Integer f50563c;

    public g(Function1 number, int i10, Integer num) {
        Intrinsics.checkNotNullParameter(number, "number");
        this.f50561a = number;
        this.f50562b = i10;
        this.f50563c = num;
        if (i10 >= 0) {
            if (i10 <= 9) {
                return;
            }
            throw new IllegalArgumentException(("The minimum number of digits (" + i10 + ") exceeds the length of an Int").toString());
        }
        throw new IllegalArgumentException(("The minimum number of digits (" + i10 + ") is negative").toString());
    }
}
