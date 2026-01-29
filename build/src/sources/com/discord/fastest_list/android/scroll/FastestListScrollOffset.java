package com.discord.fastest_list.android.scroll;

import android.view.View;
import com.discord.fastest_list.android.FastestListLayoutManager;
import com.discord.fastest_list.android.FastestListSections;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0004\b\u0000\u0018\u00002\u00020\u0001:\u0001\u0014B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\b\u0010\n\u001a\u0004\u0018\u00010\tJ \u0010\u000b\u001a\u00020\t2\u0006\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000f2\u0006\u0010\u0010\u001a\u00020\u0011H\u0002J\b\u0010\u0012\u001a\u00020\rH\u0002J\b\u0010\u0013\u001a\u00020\rH\u0002R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\tX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0015"}, d2 = {"Lcom/discord/fastest_list/android/scroll/FastestListScrollOffset;", "", "layoutManager", "Lcom/discord/fastest_list/android/FastestListLayoutManager;", "sections", "Lcom/discord/fastest_list/android/FastestListSections;", "<init>", "(Lcom/discord/fastest_list/android/FastestListLayoutManager;Lcom/discord/fastest_list/android/FastestListSections;)V", "data", "Lcom/discord/fastest_list/android/scroll/FastestListScrollOffset$Data;", "compute", "computeScrollOffset", "firstVisibleItemPosition", "", "firstVisibleItemView", "Landroid/view/View;", "horizontal", "", "getContentWidth", "getContentHeight", "Data", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FastestListScrollOffset {
    @NotNull
    private Data data;
    @NotNull
    private final FastestListLayoutManager layoutManager;
    @NotNull
    private final FastestListSections sections;

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u001d\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001BC\u0012\b\b\u0002\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0005\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0007\u001a\u00020\u0003\u0012\b\b\u0002\u0010\b\u001a\u00020\u0003¢\u0006\u0004\b\t\u0010\nJ\t\u0010\u0019\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001a\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001b\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001c\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001d\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001e\u001a\u00020\u0003HÆ\u0003JE\u0010\u001f\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u00032\b\b\u0002\u0010\u0007\u001a\u00020\u00032\b\b\u0002\u0010\b\u001a\u00020\u0003HÆ\u0001J\u0013\u0010 \u001a\u00020!2\b\u0010\"\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010#\u001a\u00020\u0003HÖ\u0001J\t\u0010$\u001a\u00020%HÖ\u0001R\u001a\u0010\u0002\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000b\u0010\f\"\u0004\b\r\u0010\u000eR\u001a\u0010\u0004\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000f\u0010\f\"\u0004\b\u0010\u0010\u000eR\u001a\u0010\u0005\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0011\u0010\f\"\u0004\b\u0012\u0010\u000eR\u001a\u0010\u0006\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0013\u0010\f\"\u0004\b\u0014\u0010\u000eR\u001a\u0010\u0007\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0015\u0010\f\"\u0004\b\u0016\u0010\u000eR\u001a\u0010\b\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0017\u0010\f\"\u0004\b\u0018\u0010\u000e¨\u0006&"}, d2 = {"Lcom/discord/fastest_list/android/scroll/FastestListScrollOffset$Data;", "", "x", "", "y", "width", "height", "contentWidth", "contentHeight", "<init>", "(IIIIII)V", "getX", "()I", "setX", "(I)V", "getY", "setY", "getWidth", "setWidth", "getHeight", "setHeight", "getContentWidth", "setContentWidth", "getContentHeight", "setContentHeight", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "equals", "", "other", "hashCode", "toString", "", "fastest_list_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Data {
        private int contentHeight;
        private int contentWidth;
        private int height;
        private int width;

        /* renamed from: x  reason: collision with root package name */
        private int f10416x;

        /* renamed from: y  reason: collision with root package name */
        private int f10417y;

        public Data() {
            this(0, 0, 0, 0, 0, 0, 63, null);
        }

        public static /* synthetic */ Data copy$default(Data data, int i10, int i11, int i12, int i13, int i14, int i15, int i16, Object obj) {
            if ((i16 & 1) != 0) {
                i10 = data.f10416x;
            }
            if ((i16 & 2) != 0) {
                i11 = data.f10417y;
            }
            if ((i16 & 4) != 0) {
                i12 = data.width;
            }
            if ((i16 & 8) != 0) {
                i13 = data.height;
            }
            if ((i16 & 16) != 0) {
                i14 = data.contentWidth;
            }
            if ((i16 & 32) != 0) {
                i15 = data.contentHeight;
            }
            int i17 = i14;
            int i18 = i15;
            return data.copy(i10, i11, i12, i13, i17, i18);
        }

        public final int component1() {
            return this.f10416x;
        }

        public final int component2() {
            return this.f10417y;
        }

        public final int component3() {
            return this.width;
        }

        public final int component4() {
            return this.height;
        }

        public final int component5() {
            return this.contentWidth;
        }

        public final int component6() {
            return this.contentHeight;
        }

        @NotNull
        public final Data copy(int i10, int i11, int i12, int i13, int i14, int i15) {
            return new Data(i10, i11, i12, i13, i14, i15);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Data) {
                Data data = (Data) obj;
                return this.f10416x == data.f10416x && this.f10417y == data.f10417y && this.width == data.width && this.height == data.height && this.contentWidth == data.contentWidth && this.contentHeight == data.contentHeight;
            }
            return false;
        }

        public final int getContentHeight() {
            return this.contentHeight;
        }

        public final int getContentWidth() {
            return this.contentWidth;
        }

        public final int getHeight() {
            return this.height;
        }

        public final int getWidth() {
            return this.width;
        }

        public final int getX() {
            return this.f10416x;
        }

        public final int getY() {
            return this.f10417y;
        }

        public int hashCode() {
            return (((((((((Integer.hashCode(this.f10416x) * 31) + Integer.hashCode(this.f10417y)) * 31) + Integer.hashCode(this.width)) * 31) + Integer.hashCode(this.height)) * 31) + Integer.hashCode(this.contentWidth)) * 31) + Integer.hashCode(this.contentHeight);
        }

        public final void setContentHeight(int i10) {
            this.contentHeight = i10;
        }

        public final void setContentWidth(int i10) {
            this.contentWidth = i10;
        }

        public final void setHeight(int i10) {
            this.height = i10;
        }

        public final void setWidth(int i10) {
            this.width = i10;
        }

        public final void setX(int i10) {
            this.f10416x = i10;
        }

        public final void setY(int i10) {
            this.f10417y = i10;
        }

        @NotNull
        public String toString() {
            int i10 = this.f10416x;
            int i11 = this.f10417y;
            int i12 = this.width;
            int i13 = this.height;
            int i14 = this.contentWidth;
            int i15 = this.contentHeight;
            return "Data(x=" + i10 + ", y=" + i11 + ", width=" + i12 + ", height=" + i13 + ", contentWidth=" + i14 + ", contentHeight=" + i15 + ")";
        }

        public Data(int i10, int i11, int i12, int i13, int i14, int i15) {
            this.f10416x = i10;
            this.f10417y = i11;
            this.width = i12;
            this.height = i13;
            this.contentWidth = i14;
            this.contentHeight = i15;
        }

        public /* synthetic */ Data(int i10, int i11, int i12, int i13, int i14, int i15, int i16, DefaultConstructorMarker defaultConstructorMarker) {
            this((i16 & 1) != 0 ? 0 : i10, (i16 & 2) != 0 ? 0 : i11, (i16 & 4) != 0 ? 0 : i12, (i16 & 8) != 0 ? 0 : i13, (i16 & 16) != 0 ? 0 : i14, (i16 & 32) != 0 ? 0 : i15);
        }
    }

    public FastestListScrollOffset(@NotNull FastestListLayoutManager layoutManager, @NotNull FastestListSections sections) {
        Intrinsics.checkNotNullParameter(layoutManager, "layoutManager");
        Intrinsics.checkNotNullParameter(sections, "sections");
        this.layoutManager = layoutManager;
        this.sections = sections;
        this.data = new Data(0, 0, 0, 0, 0, 0, 63, null);
    }

    private final Data computeScrollOffset(int i10, View view, boolean z10) {
        int abs;
        int i11;
        int itemOffset = this.sections.getItemOffset(i10);
        if (z10) {
            abs = Math.abs(view.getLeft() - this.layoutManager.getPaddingLeft());
        } else {
            abs = Math.abs(view.getTop() - this.layoutManager.getPaddingTop());
        }
        int i12 = itemOffset + abs;
        Data data = this.data;
        if (z10) {
            i11 = i12;
        } else {
            i11 = 0;
        }
        data.setX(i11);
        if (z10) {
            i12 = 0;
        }
        data.setY(i12);
        data.setWidth(this.layoutManager.getWidth());
        data.setHeight(this.layoutManager.getHeight());
        data.setContentWidth(getContentWidth());
        data.setContentHeight(getContentHeight());
        return data;
    }

    private final int getContentHeight() {
        if (!this.layoutManager.getHorizontal()) {
            return this.sections.getItemCumulativeSize();
        }
        return this.layoutManager.getHeight();
    }

    private final int getContentWidth() {
        if (this.layoutManager.getHorizontal()) {
            return this.sections.getItemCumulativeSize();
        }
        return this.layoutManager.getWidth();
    }

    public final Data compute() {
        View findViewByPosition;
        int findFirstVisibleItemPosition = this.layoutManager.findFirstVisibleItemPosition();
        if (findFirstVisibleItemPosition != -1 && (findViewByPosition = this.layoutManager.findViewByPosition(findFirstVisibleItemPosition)) != null) {
            return computeScrollOffset(findFirstVisibleItemPosition, findViewByPosition, this.layoutManager.getHorizontal());
        }
        return null;
    }
}
