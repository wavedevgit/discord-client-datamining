package com.discord.recycler_view.utils;

import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.SourceDebugExtension;
@Metadata(d1 = {"\u0000\u0014\n\u0000\n\u0002\u0010\u000b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\u001a#\u0010\u0000\u001a\u0004\u0018\u00010\u0001*\u00020\u00022\u0006\u0010\u0003\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u0001H\u0000¢\u0006\u0002\u0010\u0006¨\u0006\u0007"}, d2 = {"isPositionVisible", "", "Landroidx/recyclerview/widget/LinearLayoutManager;", ViewProps.POSITION, "", "prioritizeCompletelyVisible", "(Landroidx/recyclerview/widget/LinearLayoutManager;IZ)Ljava/lang/Boolean;", "recycler_view_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nLayoutManagerUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 LayoutManagerUtils.kt\ncom/discord/recycler_view/utils/LayoutManagerUtilsKt\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,32:1\n1#2:33\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class LayoutManagerUtilsKt {
    /* JADX WARN: Code restructure failed: missing block: B:10:0x0027, code lost:
        if (r2.intValue() != (-1)) goto L10;
     */
    /* JADX WARN: Code restructure failed: missing block: B:12:0x002a, code lost:
        r2 = null;
     */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x0038, code lost:
        if (r2.intValue() != (-1)) goto L10;
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x005a, code lost:
        if (r6.intValue() != (-1)) goto L18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x005d, code lost:
        r6 = null;
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x006b, code lost:
        if (r6.intValue() != (-1)) goto L18;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Boolean isPositionVisible(@org.jetbrains.annotations.NotNull androidx.recyclerview.widget.LinearLayoutManager r4, int r5, boolean r6) {
        /*
            java.lang.String r0 = "<this>"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            r0 = -1
            r1 = 0
            if (r6 == 0) goto L2c
            int r2 = r4.findFirstCompletelyVisibleItemPosition()
            java.lang.Integer r2 = java.lang.Integer.valueOf(r2)
            int r3 = r2.intValue()
            if (r3 == r0) goto L18
            goto L19
        L18:
            r2 = r1
        L19:
            if (r2 != 0) goto L3a
            int r2 = r4.findFirstVisibleItemPosition()
            java.lang.Integer r2 = java.lang.Integer.valueOf(r2)
            int r3 = r2.intValue()
            if (r3 == r0) goto L2a
            goto L3a
        L2a:
            r2 = r1
            goto L3a
        L2c:
            int r2 = r4.findFirstVisibleItemPosition()
            java.lang.Integer r2 = java.lang.Integer.valueOf(r2)
            int r3 = r2.intValue()
            if (r3 == r0) goto L2a
        L3a:
            if (r6 == 0) goto L5f
            int r6 = r4.findLastCompletelyVisibleItemPosition()
            java.lang.Integer r6 = java.lang.Integer.valueOf(r6)
            int r3 = r6.intValue()
            if (r3 == r0) goto L4b
            goto L4c
        L4b:
            r6 = r1
        L4c:
            if (r6 != 0) goto L6d
            int r4 = r4.findLastVisibleItemPosition()
            java.lang.Integer r6 = java.lang.Integer.valueOf(r4)
            int r4 = r6.intValue()
            if (r4 == r0) goto L5d
            goto L6d
        L5d:
            r6 = r1
            goto L6d
        L5f:
            int r4 = r4.findLastVisibleItemPosition()
            java.lang.Integer r6 = java.lang.Integer.valueOf(r4)
            int r4 = r6.intValue()
            if (r4 == r0) goto L5d
        L6d:
            if (r2 == 0) goto L88
            if (r6 != 0) goto L72
            goto L88
        L72:
            kotlin.ranges.IntRange r4 = new kotlin.ranges.IntRange
            int r0 = r2.intValue()
            int r6 = r6.intValue()
            r4.<init>(r0, r6)
            boolean r4 = r4.contains(r5)
            java.lang.Boolean r4 = java.lang.Boolean.valueOf(r4)
            return r4
        L88:
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.recycler_view.utils.LayoutManagerUtilsKt.isPositionVisible(androidx.recyclerview.widget.LinearLayoutManager, int, boolean):java.lang.Boolean");
    }
}
