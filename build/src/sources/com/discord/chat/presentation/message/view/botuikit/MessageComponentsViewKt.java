package com.discord.chat.presentation.message.view.botuikit;

import android.view.View;
import android.view.ViewGroup;
import com.discord.chat.bridge.botuikit.Component;
import com.facebook.react.uimanager.ViewProps;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000(\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\u001a>\u0010\u0000\u001a\u00020\u0001*\u00020\u00022\u0014\u0010\u0003\u001a\u0010\u0012\f\u0012\n\u0012\u0006\b\u0001\u0012\u00020\u00060\u00050\u00042\b\u0010\u0007\u001a\u0004\u0018\u00010\b2\b\b\u0002\u0010\t\u001a\u00020\n2\b\b\u0002\u0010\u000b\u001a\u00020\n\u001a\u0014\u0010\f\u001a\u00020\u0001*\u00020\u00022\b\u0010\u0007\u001a\u0004\u0018\u00010\b¨\u0006\r"}, d2 = {"replaceViews", "", "Landroid/view/ViewGroup;", "views", "", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentView;", "Lcom/discord/chat/bridge/botuikit/Component;", "componentProvider", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;", ViewProps.PADDING_BOTTOM, "", ViewProps.PADDING_RIGHT, "recycleChildComponents", "chat_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMessageComponentsView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MessageComponentsView.kt\ncom/discord/chat/presentation/message/view/botuikit/MessageComponentsViewKt\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,131:1\n1878#2,2:132\n1880#2:142\n327#3,4:134\n327#3,4:138\n*S KotlinDebug\n*F\n+ 1 MessageComponentsView.kt\ncom/discord/chat/presentation/message/view/botuikit/MessageComponentsViewKt\n*L\n81#1:132,2\n81#1:142\n94#1:134,4\n98#1:138,4\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageComponentsViewKt {
    public static final void recycleChildComponents(@NotNull ViewGroup viewGroup, ComponentProvider componentProvider) {
        Intrinsics.checkNotNullParameter(viewGroup, "<this>");
        int childCount = viewGroup.getChildCount();
        while (true) {
            childCount--;
            if (-1 < childCount) {
                if (componentProvider != null) {
                    View childAt = viewGroup.getChildAt(childCount);
                    Intrinsics.checkNotNull(childAt, "null cannot be cast to non-null type com.discord.chat.presentation.message.view.botuikit.ComponentView<out com.discord.chat.bridge.botuikit.Component>");
                    componentProvider.recycleComponentView((ComponentView) childAt);
                }
                viewGroup.removeViewAt(childCount);
            } else {
                return;
            }
        }
    }

    public static final void replaceViews(@NotNull ViewGroup viewGroup, @NotNull List<? extends ComponentView<? extends Component>> views, ComponentProvider componentProvider, int i10, int i11) {
        int size;
        int i12;
        Intrinsics.checkNotNullParameter(viewGroup, "<this>");
        Intrinsics.checkNotNullParameter(views, "views");
        int i13 = 0;
        for (Object obj : views) {
            int i14 = i13 + 1;
            if (i13 < 0) {
                CollectionsKt.v();
            }
            ComponentView componentView = (ComponentView) obj;
            Intrinsics.checkNotNull(componentView, "null cannot be cast to non-null type android.view.View");
            View view = (View) componentView;
            ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
            if (layoutParams == null) {
                layoutParams = new ViewGroup.MarginLayoutParams(-1, -2);
            }
            view.setLayoutParams(layoutParams);
            if (i13 < views.size() - 1) {
                ViewGroup.LayoutParams layoutParams2 = view.getLayoutParams();
                if (layoutParams2 != null) {
                    ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams2;
                    marginLayoutParams.setMargins(0, 0, i11, i10);
                    view.setLayoutParams(marginLayoutParams);
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.MarginLayoutParams");
                }
            } else {
                ViewGroup.LayoutParams layoutParams3 = view.getLayoutParams();
                if (layoutParams3 != null) {
                    ViewGroup.MarginLayoutParams marginLayoutParams2 = (ViewGroup.MarginLayoutParams) layoutParams3;
                    marginLayoutParams2.setMargins(0, 0, 0, 0);
                    view.setLayoutParams(marginLayoutParams2);
                } else {
                    throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.MarginLayoutParams");
                }
            }
            if (i13 < viewGroup.getChildCount()) {
                if (viewGroup.getChildAt(i13) != componentView) {
                    if (componentProvider != null) {
                        View childAt = viewGroup.getChildAt(i13);
                        Intrinsics.checkNotNull(childAt, "null cannot be cast to non-null type com.discord.chat.presentation.message.view.botuikit.ComponentView<out com.discord.chat.bridge.botuikit.Component>");
                        componentProvider.recycleComponentView((ComponentView) childAt);
                    }
                    viewGroup.removeViewAt(i13);
                    viewGroup.addView(view, i13);
                }
            } else {
                viewGroup.addView(view, i13);
            }
            i13 = i14;
        }
        if (views.size() >= viewGroup.getChildCount() || (size = views.size()) > viewGroup.getChildCount() - 1) {
            return;
        }
        while (true) {
            if (viewGroup.getChildAt(i12) != null) {
                View childAt2 = viewGroup.getChildAt(i12);
                if (componentProvider != null) {
                    Intrinsics.checkNotNull(childAt2, "null cannot be cast to non-null type com.discord.chat.presentation.message.view.botuikit.ComponentView<out com.discord.chat.bridge.botuikit.Component>");
                    componentProvider.recycleComponentView((ComponentView) childAt2);
                }
                viewGroup.removeViewAt(i12);
            }
            if (i12 == size) {
                return;
            }
            i12--;
        }
    }

    public static /* synthetic */ void replaceViews$default(ViewGroup viewGroup, List list, ComponentProvider componentProvider, int i10, int i11, int i12, Object obj) {
        if ((i12 & 4) != 0) {
            i10 = 0;
        }
        if ((i12 & 8) != 0) {
            i11 = 0;
        }
        replaceViews(viewGroup, list, componentProvider, i10, i11);
    }
}
