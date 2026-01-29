package com.discord.chat.presentation.list;

import android.view.View;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.uimanager.ViewProps;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0002\b\t\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\b\u0000\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u0015J\b\u0010\u0016\u001a\u00020\u0013H\u0002J\u0018\u0010\u0017\u001a\u00020\t2\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0018\u001a\u00020\u0005H\u0002J(\u0010\u0019\u001a\u00020\u00052\u0006\u0010\u001a\u001a\u00020\u00052\u0006\u0010\u001b\u001a\u00020\u00052\u0006\u0010\u001c\u001a\u00020\u00052\u0006\u0010\u001d\u001a\u00020\u0005H\u0002J\u0010\u0010\u001e\u001a\u00020\t2\u0006\u0010\u001f\u001a\u00020\tH\u0002R\u001e\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0004\u001a\u00020\u0005@BX\u0086\u000e¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR$\u0010\n\u001a\u0004\u0018\u00010\t2\b\u0010\u0004\u001a\u0004\u0018\u00010\t@BX\u0086\u000e¢\u0006\n\n\u0002\u0010\r\u001a\u0004\b\u000b\u0010\fR\u001e\u0010\u000e\u001a\u00020\u00052\u0006\u0010\u0004\u001a\u00020\u0005@BX\u0086\u000e¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\bR$\u0010\u0010\u001a\u0004\u0018\u00010\t2\b\u0010\u0004\u001a\u0004\u0018\u00010\t@BX\u0086\u000e¢\u0006\n\n\u0002\u0010\r\u001a\u0004\b\u0011\u0010\f¨\u0006 "}, d2 = {"Lcom/discord/chat/presentation/list/ChatListVisibilityCalculator;", "", "<init>", "()V", "value", "", "firstMessagePosition", "getFirstMessagePosition", "()I", "", "firstMessagePercentVisible", "getFirstMessagePercentVisible", "()Ljava/lang/Double;", "Ljava/lang/Double;", "lastMessagePosition", "getLastMessagePosition", "lastMessagePercentVisible", "getLastMessagePercentVisible", "updateFirstAndLastMessageVisibilityData", "", "recyclerView", "Landroidx/recyclerview/widget/RecyclerView;", "resetVisibilityData", "getItemPercentVisible", ViewProps.POSITION, "intersectIntervals", "min1", "max1", "min2", "max2", "floorToOneDecimal", InquiryField.FloatField.TYPE2, "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatListVisibilityCalculator {
    private Double firstMessagePercentVisible;
    private Double lastMessagePercentVisible;
    private int firstMessagePosition = -1;
    private int lastMessagePosition = -1;

    private final double floorToOneDecimal(double d10) {
        double d11 = 10;
        return Math.floor(d10 * d11) / d11;
    }

    private final double getItemPercentVisible(RecyclerView recyclerView, int i10) {
        RecyclerView.LayoutManager layoutManager = recyclerView.getLayoutManager();
        Intrinsics.checkNotNull(layoutManager, "null cannot be cast to non-null type androidx.recyclerview.widget.LinearLayoutManager");
        View findViewByPosition = ((LinearLayoutManager) layoutManager).findViewByPosition(i10);
        double d10 = 0.0d;
        if (findViewByPosition == null) {
            return 0.0d;
        }
        int min = Math.min(findViewByPosition.getTop(), findViewByPosition.getBottom());
        int max = Math.max(findViewByPosition.getTop(), findViewByPosition.getBottom());
        int i11 = max - min;
        int intersectIntervals = intersectIntervals(0, recyclerView.getHeight(), min, max);
        if (i11 > 0) {
            d10 = intersectIntervals / i11;
        }
        return floorToOneDecimal(d10);
    }

    private final int intersectIntervals(int i10, int i11, int i12, int i13) {
        int max = Math.max(i10, i12);
        int min = Math.min(i11, i13);
        if (max <= min) {
            return min - max;
        }
        return 0;
    }

    private final void resetVisibilityData() {
        this.firstMessagePosition = -1;
        this.firstMessagePercentVisible = null;
        this.lastMessagePosition = -1;
        this.lastMessagePercentVisible = null;
    }

    public final Double getFirstMessagePercentVisible() {
        return this.firstMessagePercentVisible;
    }

    public final int getFirstMessagePosition() {
        return this.firstMessagePosition;
    }

    public final Double getLastMessagePercentVisible() {
        return this.lastMessagePercentVisible;
    }

    public final int getLastMessagePosition() {
        return this.lastMessagePosition;
    }

    public final void updateFirstAndLastMessageVisibilityData(@NotNull RecyclerView recyclerView) {
        Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
        resetVisibilityData();
        RecyclerView.LayoutManager layoutManager = recyclerView.getLayoutManager();
        Intrinsics.checkNotNull(layoutManager, "null cannot be cast to non-null type androidx.recyclerview.widget.LinearLayoutManager");
        LinearLayoutManager linearLayoutManager = (LinearLayoutManager) layoutManager;
        int findFirstVisibleItemPosition = linearLayoutManager.findFirstVisibleItemPosition();
        int findLastVisibleItemPosition = linearLayoutManager.findLastVisibleItemPosition();
        if (findFirstVisibleItemPosition != -1 && findLastVisibleItemPosition != -1) {
            if (findFirstVisibleItemPosition <= findLastVisibleItemPosition) {
                int i10 = findFirstVisibleItemPosition;
                while (true) {
                    double itemPercentVisible = getItemPercentVisible(recyclerView, i10);
                    if (itemPercentVisible > 0.0d && this.firstMessagePosition == -1) {
                        this.firstMessagePosition = i10;
                        this.firstMessagePercentVisible = Double.valueOf(itemPercentVisible);
                    }
                    if (i10 == findLastVisibleItemPosition) {
                        break;
                    }
                    i10++;
                }
            }
            if (findFirstVisibleItemPosition > findLastVisibleItemPosition) {
                return;
            }
            while (true) {
                double itemPercentVisible2 = getItemPercentVisible(recyclerView, findLastVisibleItemPosition);
                if (itemPercentVisible2 > 0.0d && this.lastMessagePosition == -1) {
                    this.lastMessagePosition = findLastVisibleItemPosition;
                    this.lastMessagePercentVisible = Double.valueOf(itemPercentVisible2);
                }
                if (findLastVisibleItemPosition != findFirstVisibleItemPosition) {
                    findLastVisibleItemPosition--;
                } else {
                    return;
                }
            }
        }
    }
}
