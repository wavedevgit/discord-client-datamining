package com.withpersona.sdk2.inquiry.steps.ui.view;

import android.content.Context;
import android.util.AttributeSet;
import androidx.core.widget.NestedScrollView;
import jp.g;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\u001b\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u000f\u0010\t\u001a\u00020\bH\u0016¢\u0006\u0004\b\t\u0010\n¨\u0006\u000b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/steps/ui/view/ShadowedNestedScrollView;", "Landroidx/core/widget/NestedScrollView;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "getSolidColor", "()I", "ui-step-renderer_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nShadowedNestedScrollView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ShadowedNestedScrollView.kt\ncom/withpersona/sdk2/inquiry/steps/ui/view/ShadowedNestedScrollView\n+ 2 Context.kt\nandroidx/core/content/ContextKt\n*L\n1#1,33:1\n51#2,9:34\n*S KotlinDebug\n*F\n+ 1 ShadowedNestedScrollView.kt\ncom/withpersona/sdk2/inquiry/steps/ui/view/ShadowedNestedScrollView\n*L\n21#1:34,9\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ShadowedNestedScrollView extends NestedScrollView {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ShadowedNestedScrollView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    @Override // android.view.View
    public int getSolidColor() {
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        int[] Theme = g.f30875h;
        Intrinsics.checkNotNullExpressionValue(Theme, "Theme");
        return context.obtainStyledAttributes(null, Theme, 0, 0).getColor(g.f30876i, -3355444);
    }
}
