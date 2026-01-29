package com.discord.chat.presentation.message.decorations;

import android.content.Context;
import android.graphics.Canvas;
import android.view.View;
import android.view.ViewParent;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.presentation.message.view.MessageContentView;
import com.discord.chat.presentation.message.view.ThreadEmbedView;
import com.discord.chat.presentation.spine.SpineParentMessage;
import com.discord.misc.utilities.size.SizeUtilsKt;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J \u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u0017H\u0016R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\n\u001a\u00020\u000bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\f\u0010\r\"\u0004\b\u000e\u0010\u000f¨\u0006\u0018"}, d2 = {"Lcom/discord/chat/presentation/message/decorations/ThreadSpineItemDecoration;", "Landroidx/recyclerview/widget/RecyclerView$ItemDecoration;", "context", "Landroid/content/Context;", "contentStartPositionPx", "", "<init>", "(Landroid/content/Context;I)V", "spineDrawer", "Lcom/discord/chat/presentation/message/decorations/SpineDrawer;", "showThreadSpine", "", "getShowThreadSpine", "()Z", "setShowThreadSpine", "(Z)V", "onDraw", "", "canvas", "Landroid/graphics/Canvas;", "parent", "Landroidx/recyclerview/widget/RecyclerView;", "state", "Landroidx/recyclerview/widget/RecyclerView$State;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ThreadSpineItemDecoration extends RecyclerView.ItemDecoration {
    private boolean showThreadSpine;
    @NotNull
    private final SpineDrawer spineDrawer;

    public ThreadSpineItemDecoration(@NotNull Context context, int i10) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.spineDrawer = new SpineDrawer(context, i10);
        this.showThreadSpine = true;
    }

    public final boolean getShowThreadSpine() {
        return this.showThreadSpine;
    }

    @Override // androidx.recyclerview.widget.RecyclerView.ItemDecoration
    public void onDraw(@NotNull Canvas canvas, @NotNull RecyclerView parent, @NotNull RecyclerView.State state) {
        SpineParentMessage spineParentMessage;
        View spineOriginView;
        Canvas canvas2;
        RecyclerView recyclerView;
        int i10;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(state, "state");
        super.onDraw(canvas, parent, state);
        if (this.showThreadSpine) {
            ViewParent parent2 = parent.getParent();
            if (parent2 instanceof SpineParentMessage) {
                spineParentMessage = (SpineParentMessage) parent2;
            } else {
                spineParentMessage = null;
            }
            if (spineParentMessage != null && (spineOriginView = spineParentMessage.getSpineOriginView()) != null) {
                int left = spineOriginView.getLeft() + (spineOriginView.getMeasuredWidth() / 2);
                int childCount = parent.getChildCount();
                int i11 = 0;
                while (i11 < childCount) {
                    View childAt = parent.getChildAt(i11);
                    if (childAt != null) {
                        if (childAt instanceof ThreadEmbedView) {
                            int i12 = left;
                            canvas2 = canvas;
                            recyclerView = parent;
                            this.spineDrawer.drawSpineCurve(canvas2, recyclerView, childAt, childAt, i12);
                            left = i12;
                        } else {
                            canvas2 = canvas;
                            recyclerView = parent;
                            if (childAt instanceof MessageContentView) {
                                if (i11 == 0) {
                                    i10 = ((MessageContentView) childAt).getLineHeight() + SizeUtilsKt.getDpToPx(2);
                                } else {
                                    i10 = 0;
                                }
                                this.spineDrawer.drawSpinePiece(canvas2, recyclerView, childAt, left, i10);
                            } else {
                                SpineDrawer.drawSpinePiece$default(this.spineDrawer, canvas2, recyclerView, childAt, left, 0, 16, null);
                            }
                        }
                    } else {
                        canvas2 = canvas;
                        recyclerView = parent;
                    }
                    i11++;
                    canvas = canvas2;
                    parent = recyclerView;
                }
            }
        }
    }

    public final void setShowThreadSpine(boolean z10) {
        this.showThreadSpine = z10;
    }
}
