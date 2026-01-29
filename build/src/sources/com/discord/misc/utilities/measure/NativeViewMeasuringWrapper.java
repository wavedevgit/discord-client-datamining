package com.discord.misc.utilities.measure;

import android.annotation.SuppressLint;
import android.view.View;
import android.widget.FrameLayout;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0002\u0010\u0002\n\u0002\b\r\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0007\u0018\u0000*\b\b\u0000\u0010\u0002*\u00020\u00012\u00020\u0003B/\u0012\u0006\u0010\u0004\u001a\u00028\u0000\u0012\u001e\u0010\b\u001a\u001a\u0012\u0004\u0012\u00020\u0001\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u0005¢\u0006\u0004\b\t\u0010\nJ\u000f\u0010\u000b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\u000b\u0010\fJ\u001f\u0010\u000f\u001a\u00020\u00072\u0006\u0010\r\u001a\u00020\u00062\u0006\u0010\u000e\u001a\u00020\u0006H\u0014¢\u0006\u0004\b\u000f\u0010\u0010R\u0017\u0010\u0004\u001a\u00028\u00008\u0006¢\u0006\f\n\u0004\b\u0004\u0010\u0011\u001a\u0004\b\u0012\u0010\u0013R,\u0010\b\u001a\u001a\u0012\u0004\u0012\u00020\u0001\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u00070\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\b\u0010\u0014R\u0014\u0010\u0016\u001a\u00020\u00158\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0016\u0010\u0017¨\u0006\u0018"}, d2 = {"Lcom/discord/misc/utilities/measure/NativeViewMeasuringWrapper;", "Landroid/view/View;", "T", "Landroid/widget/FrameLayout;", "view", "Lkotlin/Function3;", "", "", "onMeasured", "<init>", "(Landroid/view/View;Lkotlin/jvm/functions/Function3;)V", "requestLayout", "()V", "widthMeasureSpec", "heightMeasureSpec", "onMeasure", "(II)V", "Landroid/view/View;", "getView", "()Landroid/view/View;", "Lkotlin/jvm/functions/Function3;", "Ljava/lang/Runnable;", "runnable", "Ljava/lang/Runnable;", "misc_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SuppressLint({"ViewConstructor"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NativeViewMeasuringWrapper<T extends View> extends FrameLayout {
    @NotNull
    private final Function3 onMeasured;
    @NotNull
    private final Runnable runnable;
    @NotNull
    private final T view;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public NativeViewMeasuringWrapper(@NotNull T view, @NotNull Function3 onMeasured) {
        super(view.getContext());
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(onMeasured, "onMeasured");
        this.view = view;
        this.onMeasured = onMeasured;
        addView(view);
        this.runnable = new Runnable() { // from class: com.discord.misc.utilities.measure.a
            @Override // java.lang.Runnable
            public final void run() {
                ViewMeasureExtensionsKt.measureAndLayout(NativeViewMeasuringWrapper.this);
            }
        };
    }

    @NotNull
    public final T getView() {
        return this.view;
    }

    @Override // android.widget.FrameLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        Pair<Integer, Integer> maximumSizeOfChildren = ViewMeasureExtensionsKt.getMaximumSizeOfChildren(this, i10);
        int intValue = ((Number) maximumSizeOfChildren.a()).intValue();
        int intValue2 = ((Number) maximumSizeOfChildren.b()).intValue();
        setMeasuredDimension(intValue, intValue2);
        this.onMeasured.invoke(this, Integer.valueOf(intValue), Integer.valueOf(intValue2));
    }

    @Override // android.view.View, android.view.ViewParent
    public void requestLayout() {
        super.requestLayout();
        post(this.runnable);
    }
}
