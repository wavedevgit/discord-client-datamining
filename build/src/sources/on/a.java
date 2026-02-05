package on;

import com.swmansion.rnscreens.stack.views.ChildrenDrawingOrderStrategy;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a implements ChildrenDrawingOrderStrategy {

    /* renamed from: a  reason: collision with root package name */
    private boolean f44092a;

    public a(boolean z10) {
        this.f44092a = z10;
    }

    public boolean b() {
        return this.f44092a;
    }

    @Override // com.swmansion.rnscreens.stack.views.ChildrenDrawingOrderStrategy
    public void disable() {
        this.f44092a = false;
    }

    @Override // com.swmansion.rnscreens.stack.views.ChildrenDrawingOrderStrategy
    public void enable() {
        this.f44092a = true;
    }

    public /* synthetic */ a(boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10);
    }
}
