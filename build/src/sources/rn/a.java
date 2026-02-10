package rn;

import com.swmansion.rnscreens.stack.views.ChildrenDrawingOrderStrategy;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a implements ChildrenDrawingOrderStrategy {

    /* renamed from: a  reason: collision with root package name */
    private boolean f49070a;

    public a(boolean z10) {
        this.f49070a = z10;
    }

    public boolean b() {
        return this.f49070a;
    }

    @Override // com.swmansion.rnscreens.stack.views.ChildrenDrawingOrderStrategy
    public void disable() {
        this.f49070a = false;
    }

    @Override // com.swmansion.rnscreens.stack.views.ChildrenDrawingOrderStrategy
    public void enable() {
        this.f49070a = true;
    }

    public /* synthetic */ a(boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10);
    }
}
