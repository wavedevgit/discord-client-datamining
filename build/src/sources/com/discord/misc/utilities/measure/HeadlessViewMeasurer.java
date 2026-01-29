package com.discord.misc.utilities.measure;

import android.util.Size;
import android.view.View;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u0003\u0018\u0000*\b\b\u0000\u0010\u0001*\u00020\u00022\u00020\u0003:\u0001\u0019B\u0015\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00028\u00000\u0005¢\u0006\u0004\b\u0006\u0010\u0007J1\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\r2\u0012\u0010\u000e\u001a\u000e\u0012\u0004\u0012\u00028\u0000\u0012\u0004\u0012\u00020\u00100\u000f2\u0006\u0010\u0011\u001a\u00020\u0012H\u0001¢\u0006\u0002\b\u0013J'\u0010\n\u001a\u00020\u000b\"\b\b\u0001\u0010\u0001*\u00020\u00022\u0006\u0010\u0014\u001a\u0002H\u00012\u0006\u0010\u0011\u001a\u00020\u0012H\u0002¢\u0006\u0002\u0010\u0015J\u0010\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u0017H\u0002R\u0014\u0010\u0004\u001a\b\u0012\u0004\u0012\u00028\u00000\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\b\u001a\u00028\u0000X\u0082.¢\u0006\u0004\n\u0002\u0010\t¨\u0006\u001a"}, d2 = {"Lcom/discord/misc/utilities/measure/HeadlessViewMeasurer;", "T", "Landroid/view/View;", "", "clazz", "Ljava/lang/Class;", "<init>", "(Ljava/lang/Class;)V", "shadowView", "Landroid/view/View;", "measure", "Landroid/util/Size;", "context", "Landroid/content/Context;", "configureView", "Lkotlin/Function1;", "", "measureBounds", "Lcom/discord/misc/utilities/measure/HeadlessViewMeasurer$MeasureBounds;", "measure$misc_utilities_release", "view", "(Landroid/view/View;Lcom/discord/misc/utilities/measure/HeadlessViewMeasurer$MeasureBounds;)Landroid/util/Size;", "getMeasureSpecMode", "", "size", "MeasureBounds", "misc_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class HeadlessViewMeasurer<T extends View> {
    @NotNull
    private final Class<T> clazz;
    private T shadowView;

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\f\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u001f\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u0010\u0010\u000b\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\bJ\u0010\u0010\f\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\bJ&\u0010\r\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003HÆ\u0001¢\u0006\u0002\u0010\u000eJ\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0012\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0013\u001a\u00020\u0014HÖ\u0001R\u0015\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\t\u001a\u0004\b\u0007\u0010\bR\u0015\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\t\u001a\u0004\b\n\u0010\b¨\u0006\u0015"}, d2 = {"Lcom/discord/misc/utilities/measure/HeadlessViewMeasurer$MeasureBounds;", "", "widthPx", "", "heightPx", "<init>", "(Ljava/lang/Integer;Ljava/lang/Integer;)V", "getWidthPx", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getHeightPx", "component1", "component2", "copy", "(Ljava/lang/Integer;Ljava/lang/Integer;)Lcom/discord/misc/utilities/measure/HeadlessViewMeasurer$MeasureBounds;", "equals", "", "other", "hashCode", "toString", "", "misc_utilities_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class MeasureBounds {
        private final Integer heightPx;
        private final Integer widthPx;

        public MeasureBounds() {
            this(null, null, 3, null);
        }

        public static /* synthetic */ MeasureBounds copy$default(MeasureBounds measureBounds, Integer num, Integer num2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                num = measureBounds.widthPx;
            }
            if ((i10 & 2) != 0) {
                num2 = measureBounds.heightPx;
            }
            return measureBounds.copy(num, num2);
        }

        public final Integer component1() {
            return this.widthPx;
        }

        public final Integer component2() {
            return this.heightPx;
        }

        @NotNull
        public final MeasureBounds copy(Integer num, Integer num2) {
            return new MeasureBounds(num, num2);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof MeasureBounds) {
                MeasureBounds measureBounds = (MeasureBounds) obj;
                return Intrinsics.areEqual(this.widthPx, measureBounds.widthPx) && Intrinsics.areEqual(this.heightPx, measureBounds.heightPx);
            }
            return false;
        }

        public final Integer getHeightPx() {
            return this.heightPx;
        }

        public final Integer getWidthPx() {
            return this.widthPx;
        }

        public int hashCode() {
            Integer num = this.widthPx;
            int hashCode = (num == null ? 0 : num.hashCode()) * 31;
            Integer num2 = this.heightPx;
            return hashCode + (num2 != null ? num2.hashCode() : 0);
        }

        @NotNull
        public String toString() {
            Integer num = this.widthPx;
            Integer num2 = this.heightPx;
            return "MeasureBounds(widthPx=" + num + ", heightPx=" + num2 + ")";
        }

        public MeasureBounds(Integer num, Integer num2) {
            this.widthPx = num;
            this.heightPx = num2;
        }

        public /* synthetic */ MeasureBounds(Integer num, Integer num2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : num, (i10 & 2) != 0 ? null : num2);
        }
    }

    public HeadlessViewMeasurer(@NotNull Class<T> clazz) {
        Intrinsics.checkNotNullParameter(clazz, "clazz");
        this.clazz = clazz;
    }

    private final int getMeasureSpecMode(int i10) {
        return i10 == 0 ? 0 : 1073741824;
    }

    private final <T extends View> Size measure(T t10, MeasureBounds measureBounds) {
        int i10;
        Integer widthPx = measureBounds.getWidthPx();
        int i11 = 0;
        if (widthPx != null) {
            i10 = widthPx.intValue();
        } else {
            i10 = 0;
        }
        int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(i10, getMeasureSpecMode(i10));
        Integer heightPx = measureBounds.getHeightPx();
        if (heightPx != null) {
            i11 = heightPx.intValue();
        }
        t10.measure(makeMeasureSpec, View.MeasureSpec.makeMeasureSpec(i11, getMeasureSpecMode(i11)));
        return new Size(t10.getMeasuredWidth(), t10.getMeasuredHeight());
    }

    /* JADX WARN: Code restructure failed: missing block: B:7:0x0020, code lost:
        if (r0.getContext() != r5) goto L17;
     */
    @org.jetbrains.annotations.NotNull
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final android.util.Size measure$misc_utilities_release(@org.jetbrains.annotations.NotNull android.content.Context r5, @org.jetbrains.annotations.NotNull kotlin.jvm.functions.Function1<? super T, kotlin.Unit> r6, @org.jetbrains.annotations.NotNull com.discord.misc.utilities.measure.HeadlessViewMeasurer.MeasureBounds r7) {
        /*
            r4 = this;
            java.lang.String r0 = "context"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
            java.lang.String r0 = "configureView"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r6, r0)
            java.lang.String r0 = "measureBounds"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r7, r0)
            T extends android.view.View r0 = r4.shadowView
            r1 = 0
            java.lang.String r2 = "shadowView"
            if (r0 == 0) goto L22
            if (r0 != 0) goto L1c
            kotlin.jvm.internal.Intrinsics.throwUninitializedPropertyAccessException(r2)
            r0 = r1
        L1c:
            android.content.Context r0 = r0.getContext()
            if (r0 == r5) goto L3f
        L22:
            java.lang.Class<T extends android.view.View> r0 = r4.clazz
            java.lang.Class<android.content.Context> r3 = android.content.Context.class
            java.lang.Class[] r3 = new java.lang.Class[]{r3}
            java.lang.reflect.Constructor r0 = r0.getDeclaredConstructor(r3)
            java.lang.Object[] r5 = new java.lang.Object[]{r5}
            java.lang.Object r5 = r0.newInstance(r5)
            java.lang.String r0 = "null cannot be cast to non-null type T of com.discord.misc.utilities.measure.HeadlessViewMeasurer"
            kotlin.jvm.internal.Intrinsics.checkNotNull(r5, r0)
            android.view.View r5 = (android.view.View) r5
            r4.shadowView = r5
        L3f:
            T extends android.view.View r5 = r4.shadowView
            if (r5 != 0) goto L47
            kotlin.jvm.internal.Intrinsics.throwUninitializedPropertyAccessException(r2)
            r5 = r1
        L47:
            r6.invoke(r5)
            T extends android.view.View r5 = r4.shadowView
            if (r5 != 0) goto L52
            kotlin.jvm.internal.Intrinsics.throwUninitializedPropertyAccessException(r2)
            goto L53
        L52:
            r1 = r5
        L53:
            android.util.Size r5 = r4.measure(r1, r7)
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.misc.utilities.measure.HeadlessViewMeasurer.measure$misc_utilities_release(android.content.Context, kotlin.jvm.functions.Function1, com.discord.misc.utilities.measure.HeadlessViewMeasurer$MeasureBounds):android.util.Size");
    }
}
