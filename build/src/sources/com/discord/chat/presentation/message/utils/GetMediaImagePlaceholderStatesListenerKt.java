package com.discord.chat.presentation.message.utils;

import android.graphics.drawable.ColorDrawable;
import com.discord.image.fresco.listeners.CompoundControllerListener;
import com.discord.image.fresco.listeners.ControllerListener;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.theme.ThemeManager;
import com.discord.theme.ThemeManagerKt;
import com.discord.thumbhash.ThumbhashPlaceholderControllerListener;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001c\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\u001a'\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\b\u0010\u0004\u001a\u0004\u0018\u00010\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0002\u0010\b¨\u0006\t"}, d2 = {"getMediaImagePlaceholderStatesListener", "Lcom/discord/image/fresco/listeners/CompoundControllerListener;", "imageView", "Lcom/facebook/drawee/view/SimpleDraweeView;", ReactTextInputShadowNode.PROP_PLACEHOLDER, "", "placeholderVersion", "", "(Lcom/facebook/drawee/view/SimpleDraweeView;Ljava/lang/String;Ljava/lang/Integer;)Lcom/discord/image/fresco/listeners/CompoundControllerListener;", "chat_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nGetMediaImagePlaceholderStatesListener.kt\nKotlin\n*S Kotlin\n*F\n+ 1 GetMediaImagePlaceholderStatesListener.kt\ncom/discord/chat/presentation/message/utils/GetMediaImagePlaceholderStatesListenerKt\n+ 2 ColorDrawable.kt\nandroidx/core/graphics/drawable/ColorDrawableKt\n*L\n1#1,49:1\n27#2:50\n*S KotlinDebug\n*F\n+ 1 GetMediaImagePlaceholderStatesListener.kt\ncom/discord/chat/presentation/message/utils/GetMediaImagePlaceholderStatesListenerKt\n*L\n24#1:50\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GetMediaImagePlaceholderStatesListenerKt {
    @NotNull
    public static final CompoundControllerListener getMediaImagePlaceholderStatesListener(@NotNull final SimpleDraweeView imageView, String str, Integer num) {
        Intrinsics.checkNotNullParameter(imageView, "imageView");
        return new CompoundControllerListener(new ThumbhashPlaceholderControllerListener(imageView, new ColorDrawable(ThemeManagerKt.getTheme().getBackgroundSurfaceHigh()), str, num), new ControllerListener() { // from class: com.discord.chat.presentation.message.utils.GetMediaImagePlaceholderStatesListenerKt$getMediaImagePlaceholderStatesListener$1
            private final ScalingUtils$ScaleType imageViewInitialScaleType;

            /* JADX INFO: Access modifiers changed from: package-private */
            {
                this.imageViewInitialScaleType = ((GenericDraweeHierarchy) SimpleDraweeView.this.getHierarchy()).m();
            }

            @Override // com.discord.image.fresco.listeners.ControllerListener, com.facebook.drawee.controller.ControllerListener
            public void onFailure(String str2, Throwable th2) {
                ReactAsset reactAsset;
                ((GenericDraweeHierarchy) SimpleDraweeView.this.getHierarchy()).t(ScalingUtils$ScaleType.f10019e);
                SimpleDraweeView simpleDraweeView = SimpleDraweeView.this;
                if (ThemeManager.INSTANCE.isThemeDark()) {
                    reactAsset = ReactAsset.PoopDark;
                } else {
                    reactAsset = ReactAsset.PoopLight;
                }
                ReactAssetUtilsKt.setReactAsset(simpleDraweeView, reactAsset);
            }

            @Override // com.discord.image.fresco.listeners.ControllerListener, com.facebook.drawee.controller.ControllerListener
            public void onSubmit(String str2, Object obj) {
                ((GenericDraweeHierarchy) SimpleDraweeView.this.getHierarchy()).t(this.imageViewInitialScaleType);
            }
        });
    }
}
