package us;

import java.util.List;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements e {

    /* renamed from: a  reason: collision with root package name */
    private final Function1 f50554a;

    /* renamed from: b  reason: collision with root package name */
    private final int f50555b;

    /* renamed from: c  reason: collision with root package name */
    private final int f50556c;

    /* renamed from: d  reason: collision with root package name */
    private final List f50557d;

    public d(Function1 number, int i10, int i11, List zerosToAdd) {
        Intrinsics.checkNotNullParameter(number, "number");
        Intrinsics.checkNotNullParameter(zerosToAdd, "zerosToAdd");
        this.f50554a = number;
        this.f50555b = i10;
        this.f50556c = i11;
        this.f50557d = zerosToAdd;
        if (1 <= i10 && i10 < 10) {
            if (i10 <= i11 && i11 < 10) {
                return;
            }
            throw new IllegalArgumentException(("The maximum number of digits (" + i11 + ") is not in range " + i10 + "..9").toString());
        }
        throw new IllegalArgumentException(("The minimum number of digits (" + i10 + ") is not in range 1..9").toString());
    }
}
