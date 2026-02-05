package rr;

import java.util.Comparator;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements Comparator {
    @NotNull

    /* renamed from: d  reason: collision with root package name */
    public static final g f48947d = new g();

    private g() {
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(Comparable a10, Comparable b10) {
        Intrinsics.checkNotNullParameter(a10, "a");
        Intrinsics.checkNotNullParameter(b10, "b");
        return b10.compareTo(a10);
    }

    @Override // java.util.Comparator
    public final Comparator reversed() {
        return f.f48946d;
    }
}
