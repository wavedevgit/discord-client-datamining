package com.withpersona.sdk2.inquiry.selfie;

import android.content.Context;
import android.util.TypedValue;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.d;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0006\u0018\u00002\u00020\u0001B\u0019\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u001f\u0010\b\u001a\u00020\u00042\u0006\u0010\u0003\u001a\u00020\u00022\u0006\u0010\u0005\u001a\u00020\u0004H\u0002¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u000b2\u0006\u0010\n\u001a\u00020\u0004H\u0002¢\u0006\u0004\b\f\u0010\rJ%\u0010\u0013\u001a\u00020\u000b2\f\u0010\u0010\u001a\b\u0018\u00010\u000eR\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\u0011H\u0016¢\u0006\u0004\b\u0013\u0010\u0014R\u0016\u0010\u0005\u001a\u00020\u00048\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u0016\u0010\u001a\u001a\u00020\u00178\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u0016\u0010\u001c\u001a\u00020\u00048\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001b\u0010\u0016¨\u0006\u001d"}, d2 = {"Lcom/withpersona/sdk2/inquiry/selfie/GridAutoFitLayoutManager;", "Landroidx/recyclerview/widget/GridLayoutManager;", "Landroid/content/Context;", "context", "", "columnWidth", "<init>", "(Landroid/content/Context;I)V", "k0", "(Landroid/content/Context;I)I", "newColumnWidth", "", "l0", "(I)V", "Landroidx/recyclerview/widget/RecyclerView$Recycler;", "Landroidx/recyclerview/widget/RecyclerView;", "recycler", "Landroidx/recyclerview/widget/RecyclerView$State;", "state", "onLayoutChildren", "(Landroidx/recyclerview/widget/RecyclerView$Recycler;Landroidx/recyclerview/widget/RecyclerView$State;)V", "d", "I", "", "e", "Z", "columnWidthChanged", "i", "lastTotalSpace", "selfie_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class GridAutoFitLayoutManager extends GridLayoutManager {

    /* renamed from: d  reason: collision with root package name */
    private int f19429d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f19430e;

    /* renamed from: i  reason: collision with root package name */
    private int f19431i;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public GridAutoFitLayoutManager(Context context, int i10) {
        super(context, 1);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f19430e = true;
        l0(k0(context, i10));
    }

    private final int k0(Context context, int i10) {
        if (i10 <= 0) {
            return (int) TypedValue.applyDimension(1, 48.0f, context.getResources().getDisplayMetrics());
        }
        return i10;
    }

    private final void l0(int i10) {
        if (i10 > 0 && i10 != this.f19429d) {
            this.f19429d = i10;
            this.f19430e = true;
        }
    }

    @Override // androidx.recyclerview.widget.GridLayoutManager, androidx.recyclerview.widget.LinearLayoutManager, androidx.recyclerview.widget.RecyclerView.LayoutManager
    public void onLayoutChildren(RecyclerView.Recycler recycler, RecyclerView.State state) {
        int height;
        int paddingBottom;
        Intrinsics.checkNotNullParameter(state, "state");
        if (getOrientation() == 1) {
            height = getWidth() - getPaddingRight();
            paddingBottom = getPaddingLeft();
        } else {
            height = getHeight() - getPaddingTop();
            paddingBottom = getPaddingBottom();
        }
        int i10 = height - paddingBottom;
        if ((this.f19430e && this.f19429d > 0) || i10 != this.f19431i) {
            setSpanCount(d.d(1, i10 / this.f19429d));
            this.f19430e = false;
            this.f19431i = i10;
        }
        super.onLayoutChildren(recycler, state);
    }
}
