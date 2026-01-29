package in;

import java.util.Collections;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends a {

    /* renamed from: b  reason: collision with root package name */
    private final int f28639b;

    public b(int i10) {
        super(false, 1, null);
        this.f28639b = i10;
    }

    @Override // com.swmansion.rnscreens.stack.views.ChildrenDrawingOrderStrategy
    public void a(List drawingOperations) {
        Intrinsics.checkNotNullParameter(drawingOperations, "drawingOperations");
        if (b()) {
            int i10 = this.f28639b;
            for (int n10 = CollectionsKt.n(drawingOperations); i10 < n10; n10--) {
                Collections.swap(drawingOperations, i10, n10);
                i10++;
            }
        }
    }
}
