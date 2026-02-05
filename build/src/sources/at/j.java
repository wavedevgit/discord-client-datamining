package at;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements e {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f5988a;

    /* renamed from: b  reason: collision with root package name */
    private final int f5989b;

    public j(Function1 number, int i10) {
        Intrinsics.checkNotNullParameter(number, "number");
        this.f5988a = number;
        this.f5989b = i10;
        if (i10 >= 0) {
            if (i10 <= 9) {
                return;
            }
            throw new IllegalArgumentException(("The minimum number of digits (" + i10 + ") exceeds the length of an Int").toString());
        }
        throw new IllegalArgumentException(("The minimum number of digits (" + i10 + ") is negative").toString());
    }
}
