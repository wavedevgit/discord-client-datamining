package com.discord.chat.presentation.message.view.botuikit;

import android.content.Context;
import com.discord.chat.bridge.botuikit.Component;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0016\u0010\u000e\u001a\u00020\u000f2\u000e\u0010\u0010\u001a\n\u0012\u0006\b\u0001\u0012\u00020\u00120\u0011J=\u0010\u0013\u001a\n\u0012\u0004\u0012\u0002H\u0014\u0018\u00010\u0011\"\b\b\u0000\u0010\u0014*\u00020\u00122\u0006\u0010\u0015\u001a\u0002H\u00142\u0006\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u001b¢\u0006\u0002\u0010\u001cR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\n\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\r¨\u0006\u001d"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/ComponentProvider;", "", "context", "Landroid/content/Context;", "preInflateRecycledViews", "", "<init>", "(Landroid/content/Context;Z)V", "getContext", "()Landroid/content/Context;", "inflater", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentInflater;", "getInflater", "()Lcom/discord/chat/presentation/message/view/botuikit/ComponentInflater;", "recycleComponentView", "", "componentView", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentView;", "Lcom/discord/chat/bridge/botuikit/Component;", "getConfiguredComponentView", "T", "component", "componentContext", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentContext;", "root", "Landroid/view/ViewGroup;", "childIndex", "", "(Lcom/discord/chat/bridge/botuikit/Component;Lcom/discord/chat/presentation/message/view/botuikit/ComponentContext;Landroid/view/ViewGroup;I)Lcom/discord/chat/presentation/message/view/botuikit/ComponentView;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ComponentProvider {
    @NotNull
    private final Context context;
    @NotNull
    private final ComponentInflater inflater;

    public ComponentProvider(@NotNull Context context, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.context = context;
        this.inflater = new ComponentInflater(context, z10);
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x0031, code lost:
        if (r1 == null) goto L13;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final <T extends com.discord.chat.bridge.botuikit.Component> com.discord.chat.presentation.message.view.botuikit.ComponentView<T> getConfiguredComponentView(@org.jetbrains.annotations.NotNull T r4, @org.jetbrains.annotations.NotNull com.discord.chat.presentation.message.view.botuikit.ComponentContext r5, @org.jetbrains.annotations.NotNull android.view.ViewGroup r6, int r7) {
        /*
            r3 = this;
            java.lang.String r0 = "component"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            java.lang.String r0 = "componentContext"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
            java.lang.String r0 = "root"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r6, r0)
            android.view.View r7 = r6.getChildAt(r7)
            boolean r0 = r7 instanceof com.discord.chat.presentation.message.view.botuikit.ComponentView
            r1 = 0
            if (r0 == 0) goto L1b
            com.discord.chat.presentation.message.view.botuikit.ComponentView r7 = (com.discord.chat.presentation.message.view.botuikit.ComponentView) r7
            goto L1c
        L1b:
            r7 = r1
        L1c:
            if (r7 == 0) goto L33
            kotlin.reflect.KClass r0 = r7.getComponentType()
            java.lang.Class r2 = r4.getClass()
            kotlin.reflect.KClass r2 = kotlin.jvm.internal.Reflection.getOrCreateKotlinClass(r2)
            boolean r0 = kotlin.jvm.internal.Intrinsics.areEqual(r0, r2)
            if (r0 == 0) goto L31
            r1 = r7
        L31:
            if (r1 != 0) goto L39
        L33:
            com.discord.chat.presentation.message.view.botuikit.ComponentInflater r7 = r3.inflater
            com.discord.chat.presentation.message.view.botuikit.ComponentView r1 = r7.getComponent(r4, r6)
        L39:
            if (r1 == 0) goto L3e
            r1.configure(r4, r3, r5)
        L3e:
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.view.botuikit.ComponentProvider.getConfiguredComponentView(com.discord.chat.bridge.botuikit.Component, com.discord.chat.presentation.message.view.botuikit.ComponentContext, android.view.ViewGroup, int):com.discord.chat.presentation.message.view.botuikit.ComponentView");
    }

    @NotNull
    public final Context getContext() {
        return this.context;
    }

    @NotNull
    public final ComponentInflater getInflater() {
        return this.inflater;
    }

    public final void recycleComponentView(@NotNull ComponentView<? extends Component> componentView) {
        Intrinsics.checkNotNullParameter(componentView, "componentView");
        componentView.onRecycle(this);
        this.inflater.recycleComponent(componentView);
    }
}
