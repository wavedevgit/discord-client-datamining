package com.discord.recycler_view.scroll;

import androidx.recyclerview.widget.RecyclerView;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public /* synthetic */ class DebouncedVelocityTrackingScrollListener$velocityTracker$1 extends FunctionReferenceImpl implements Function2<RecyclerView, Float, Unit> {
    /* JADX INFO: Access modifiers changed from: package-private */
    public DebouncedVelocityTrackingScrollListener$velocityTracker$1(Object obj) {
        super(2, obj, DebouncedVelocityTrackingScrollListener.class, "onScrollVelocityChanged", "onScrollVelocityChanged(Landroidx/recyclerview/widget/RecyclerView;F)V", 0);
    }

    @Override // kotlin.jvm.functions.Function2
    public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
        invoke((RecyclerView) obj, ((Number) obj2).floatValue());
        return Unit.f33074a;
    }

    public final void invoke(RecyclerView p02, float f10) {
        Intrinsics.checkNotNullParameter(p02, "p0");
        ((DebouncedVelocityTrackingScrollListener) this.receiver).onScrollVelocityChanged(p02, f10);
    }
}
