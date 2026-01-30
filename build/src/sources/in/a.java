package in;

import com.swmansion.rnscreens.stack.views.ChildrenDrawingOrderStrategy;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a implements ChildrenDrawingOrderStrategy {

    /* renamed from: a  reason: collision with root package name */
    private boolean f28654a;

    public a(boolean z10) {
        this.f28654a = z10;
    }

    public boolean b() {
        return this.f28654a;
    }

    @Override // com.swmansion.rnscreens.stack.views.ChildrenDrawingOrderStrategy
    public void disable() {
        this.f28654a = false;
    }

    @Override // com.swmansion.rnscreens.stack.views.ChildrenDrawingOrderStrategy
    public void enable() {
        this.f28654a = true;
    }

    public /* synthetic */ a(boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10);
    }
}
