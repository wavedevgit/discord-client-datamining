package com.discord.chat.presentation.message.view.botuikit;

import android.content.Context;
import android.view.ViewGroup;
import com.discord.chat.bridge.botuikit.ActionRowComponent;
import com.discord.chat.bridge.botuikit.ButtonComponent;
import com.discord.chat.bridge.botuikit.CheckpointCardComponent;
import com.discord.chat.bridge.botuikit.Component;
import com.discord.chat.bridge.botuikit.ContainerComponent;
import com.discord.chat.bridge.botuikit.ContentInventoryEntryComponent;
import com.discord.chat.bridge.botuikit.FileDisplayComponent;
import com.discord.chat.bridge.botuikit.MediaGalleryDisplayComponent;
import com.discord.chat.bridge.botuikit.SectionComponent;
import com.discord.chat.bridge.botuikit.SelectComponent;
import com.discord.chat.bridge.botuikit.SeparatorDisplayComponent;
import com.discord.chat.bridge.botuikit.TextDisplayComponent;
import com.discord.chat.bridge.botuikit.ThumbnailDisplayComponent;
import com.discord.chat.presentation.message.view.botuikit.components.ActionRowComponentView;
import com.discord.chat.presentation.message.view.botuikit.components.ButtonComponentView;
import com.discord.chat.presentation.message.view.botuikit.components.CheckpointCardComponentView;
import com.discord.chat.presentation.message.view.botuikit.components.ContainerComponentView;
import com.discord.chat.presentation.message.view.botuikit.components.ContentInventoryComponentView;
import com.discord.chat.presentation.message.view.botuikit.components.FileDisplayComponentView;
import com.discord.chat.presentation.message.view.botuikit.components.SectionComponentView;
import com.discord.chat.presentation.message.view.botuikit.components.SelectComponentView;
import com.discord.chat.presentation.message.view.botuikit.components.SeparatorDisplayComponentView;
import com.discord.chat.presentation.message.view.botuikit.components.TextDisplayComponentView;
import com.discord.chat.presentation.message.view.botuikit.components.ThumbnailDisplayComponentView;
import com.discord.chat.presentation.message.view.botuikit.components.UnknownComponentView;
import com.discord.chat.presentation.message.view.botuikit.components.media_gallery.MediaGalleryDisplayComponentView;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000@\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0010%\n\u0002\u0010\u000e\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J-\u0010\u0010\u001a\n\u0012\u0004\u0012\u0002H\u0011\u0018\u00010\u000e\"\b\b\u0000\u0010\u0011*\u00020\u000f2\u0006\u0010\u0012\u001a\u0002H\u00112\u0006\u0010\u0013\u001a\u00020\u0014¢\u0006\u0002\u0010\u0015J\u001e\u0010\u0016\u001a\u00020\u0017\"\b\b\u0000\u0010\u0011*\u00020\u000f2\f\u0010\u0018\u001a\b\u0012\u0004\u0012\u0002H\u00110\u000eJ/\u0010\u0019\u001a\n\u0012\u0004\u0012\u0002H\u0011\u0018\u00010\u000e\"\b\b\u0000\u0010\u0011*\u00020\u000f2\u0006\u0010\u0012\u001a\u0002H\u00112\u0006\u0010\u0013\u001a\u00020\u0014H\u0002¢\u0006\u0002\u0010\u0015R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR(\u0010\n\u001a\u001c\u0012\u0004\u0012\u00020\f\u0012\u0012\u0012\u0010\u0012\f\u0012\n\u0012\u0006\b\u0001\u0012\u00020\u000f0\u000e0\r0\u000bX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001a"}, d2 = {"Lcom/discord/chat/presentation/message/view/botuikit/ComponentInflater;", "", "context", "Landroid/content/Context;", "preInflateRecycledViews", "", "<init>", "(Landroid/content/Context;Z)V", "getContext", "()Landroid/content/Context;", "viewCache", "", "", "", "Lcom/discord/chat/presentation/message/view/botuikit/ComponentView;", "Lcom/discord/chat/bridge/botuikit/Component;", "getComponent", "T", "component", "root", "Landroid/view/ViewGroup;", "(Lcom/discord/chat/bridge/botuikit/Component;Landroid/view/ViewGroup;)Lcom/discord/chat/presentation/message/view/botuikit/ComponentView;", "recycleComponent", "", "componentView", "inflateComponent", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nComponentInflater.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ComponentInflater.kt\ncom/discord/chat/presentation/message/view/botuikit/ComponentInflater\n+ 2 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n*L\n1#1,97:1\n384#2,7:98\n384#2,7:105\n384#2,7:112\n*S KotlinDebug\n*F\n+ 1 ComponentInflater.kt\ncom/discord/chat/presentation/message/view/botuikit/ComponentInflater\n*L\n48#1:98,7\n57#1:105,7\n73#1:112,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ComponentInflater {
    @NotNull
    private final Context context;
    @NotNull
    private final Map<String, List<ComponentView<? extends Component>>> viewCache;

    public ComponentInflater(@NotNull Context context, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.context = context;
        this.viewCache = new LinkedHashMap();
        if (z10) {
            for (int i10 = 0; i10 < 20; i10++) {
                Map<String, List<ComponentView<? extends Component>>> map = this.viewCache;
                String simpleName = ButtonComponent.class.getSimpleName();
                List<ComponentView<? extends Component>> list = map.get(simpleName);
                if (list == null) {
                    list = new ArrayList<>();
                    map.put(simpleName, list);
                }
                list.add(ButtonComponentView.Companion.inflateComponent(this.context));
            }
            for (int i11 = 0; i11 < 10; i11++) {
                Map<String, List<ComponentView<? extends Component>>> map2 = this.viewCache;
                String simpleName2 = ActionRowComponent.class.getSimpleName();
                List<ComponentView<? extends Component>> list2 = map2.get(simpleName2);
                if (list2 == null) {
                    list2 = new ArrayList<>();
                    map2.put(simpleName2, list2);
                }
                list2.add(ActionRowComponentView.Companion.inflateComponent(this.context));
            }
        }
    }

    private final <T extends Component> ComponentView<T> inflateComponent(T t10, ViewGroup viewGroup) {
        ComponentView<ActionRowComponent> inflateComponent;
        if (t10 instanceof ActionRowComponent) {
            inflateComponent = ActionRowComponentView.Companion.inflateComponent(this.context);
        } else if (t10 instanceof ButtonComponent) {
            inflateComponent = ButtonComponentView.Companion.inflateComponent(this.context);
        } else if (t10 instanceof SelectComponent) {
            inflateComponent = SelectComponentView.Companion.inflateComponent(this.context);
        } else if (t10 instanceof SectionComponent) {
            inflateComponent = SectionComponentView.Companion.inflateComponent(this.context);
        } else if (t10 instanceof TextDisplayComponent) {
            inflateComponent = TextDisplayComponentView.Companion.inflateComponent(this.context);
        } else if (t10 instanceof ThumbnailDisplayComponent) {
            inflateComponent = ThumbnailDisplayComponentView.Companion.inflateComponent(this.context);
        } else if (t10 instanceof MediaGalleryDisplayComponent) {
            inflateComponent = MediaGalleryDisplayComponentView.Companion.inflateComponent(this.context);
        } else if (t10 instanceof FileDisplayComponent) {
            inflateComponent = FileDisplayComponentView.Companion.inflateComponent(this.context);
        } else if (t10 instanceof SeparatorDisplayComponent) {
            inflateComponent = SeparatorDisplayComponentView.Companion.inflateComponent(this.context);
        } else if (t10 instanceof ContentInventoryEntryComponent) {
            inflateComponent = ContentInventoryComponentView.Companion.inflateComponent(this.context, viewGroup);
        } else if (t10 instanceof ContainerComponent) {
            inflateComponent = ContainerComponentView.Companion.inflateComponent(this.context);
        } else if (t10 instanceof CheckpointCardComponent) {
            inflateComponent = CheckpointCardComponentView.Companion.inflateComponent(this.context, viewGroup);
        } else {
            inflateComponent = UnknownComponentView.Companion.inflateComponent(this.context);
        }
        if (inflateComponent != null) {
            return inflateComponent;
        }
        return null;
    }

    public final <T extends Component> ComponentView<T> getComponent(@NotNull T component, @NotNull ViewGroup root) {
        ComponentView<T> componentView;
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(root, "root");
        List<ComponentView<? extends Component>> list = this.viewCache.get(component.getClass().getSimpleName());
        ComponentView<T> componentView2 = null;
        if (list != null) {
            componentView = (ComponentView) CollectionsKt.K(list);
        } else {
            componentView = null;
        }
        if (componentView != null) {
            componentView2 = componentView;
        }
        if (componentView2 == null) {
            return inflateComponent(component, root);
        }
        return componentView2;
    }

    @NotNull
    public final Context getContext() {
        return this.context;
    }

    public final <T extends Component> void recycleComponent(@NotNull ComponentView<T> componentView) {
        Intrinsics.checkNotNullParameter(componentView, "componentView");
        String simpleName = componentView.getComponentType().getSimpleName();
        if (simpleName == null) {
            return;
        }
        Map<String, List<ComponentView<? extends Component>>> map = this.viewCache;
        List<ComponentView<? extends Component>> list = map.get(simpleName);
        if (list == null) {
            list = new ArrayList<>();
            map.put(simpleName, list);
        }
        list.add(componentView);
    }
}
