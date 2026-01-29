package com.discord.chat.presentation.message.viewholder;

import android.view.View;
import com.discord.chat.bridge.spoiler.SpoilerConfig;
import com.discord.chat.presentation.media.MediaContainingViewResizer;
import com.discord.chat.presentation.message.view.MediaImageView;
import com.discord.chat.presentation.message.view.UploadItemProps;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000X\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\b\u0016\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u0085\u0002\u0010+\u001a\u00020\u001a2\u0006\u0010\u0007\u001a\u00020\u00062\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\n\u001a\u00020\b2\b\u0010\u000b\u001a\u0004\u0018\u00010\u00062\b\u0010\f\u001a\u0004\u0018\u00010\b2\u0006\u0010\u000e\u001a\u00020\r2\b\u0010\u0010\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\u0011\u001a\u00020\r2\u0006\u0010\u0012\u001a\u00020\r2\u0006\u0010\u0013\u001a\u00020\r2\u0006\u0010\u0014\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\r2\b\u0010\u0016\u001a\u0004\u0018\u00010\u00062\b\u0010\u0017\u001a\u0004\u0018\u00010\u00062\u0006\u0010\u0018\u001a\u00020\r2\u001a\u0010\u001c\u001a\u0016\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020\u001a\u0018\u00010\u0019j\u0004\u0018\u0001`\u001b2\u0006\u0010\u001d\u001a\u00020\b2\u0006\u0010\u001f\u001a\u00020\u001e2\u0006\u0010 \u001a\u00020\r2\b\u0010\"\u001a\u0004\u0018\u00010!2\b\u0010$\u001a\u0004\u0018\u00010#2\b\u0010&\u001a\u0004\u0018\u00010%2\b\u0010'\u001a\u0004\u0018\u00010\u00062\u0006\u0010(\u001a\u00020\r2\b\u0010)\u001a\u0004\u0018\u00010\u00062\u0006\u0010*\u001a\u00020\r¢\u0006\u0004\b+\u0010,R\u0014\u0010\u0003\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0003\u0010-¨\u0006."}, d2 = {"Lcom/discord/chat/presentation/message/viewholder/MediaImageViewHolder;", "Lcom/discord/chat/presentation/message/viewholder/MessagePartViewHolder;", "Lcom/discord/chat/presentation/message/view/MediaImageView;", "view", "<init>", "(Lcom/discord/chat/presentation/message/view/MediaImageView;)V", "", "url", "", "width", "height", ReactTextInputShadowNode.PROP_PLACEHOLDER, "placeholderVersion", "", "isSpoiler", "Lcom/discord/chat/bridge/spoiler/SpoilerConfig;", "spoilerConfig", "isObscure", "isObscureAwaitingScan", "obscureHideControls", "obscureIsOpaque", "showDescription", "description", "descriptionHint", "useNewAltTextButton", "Lkotlin/Function1;", "", "Lcom/discord/chat/presentation/events/MessageTapShowAltText;", "onAltTextButtonClicked", "radiusPx", "Lcom/discord/chat/presentation/media/MediaContainingViewResizer$ResizeMode;", ViewProps.RESIZE_MODE, "isPartOfMosaic", "Landroid/view/View$OnClickListener;", "onClicked", "Landroid/view/View$OnLongClickListener;", "onLongClicked", "Lcom/discord/chat/presentation/message/view/UploadItemProps;", "uploadItemProps", ViewProps.ACCESSIBILITY_ROLE, "shouldAutoPlayGif", "filename", "srcIsAnimated", "bind", "(Ljava/lang/String;IILjava/lang/String;Ljava/lang/Integer;ZLcom/discord/chat/bridge/spoiler/SpoilerConfig;ZZZZZLjava/lang/String;Ljava/lang/String;ZLkotlin/jvm/functions/Function1;ILcom/discord/chat/presentation/media/MediaContainingViewResizer$ResizeMode;ZLandroid/view/View$OnClickListener;Landroid/view/View$OnLongClickListener;Lcom/discord/chat/presentation/message/view/UploadItemProps;Ljava/lang/String;ZLjava/lang/String;Z)V", "Lcom/discord/chat/presentation/message/view/MediaImageView;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class MediaImageViewHolder extends MessagePartViewHolder {
    @NotNull
    private final MediaImageView view;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaImageViewHolder(@NotNull MediaImageView view) {
        super(view, null);
        Intrinsics.checkNotNullParameter(view, "view");
        this.view = view;
    }

    public final void bind(@NotNull String url, int i10, int i11, String str, Integer num, boolean z10, SpoilerConfig spoilerConfig, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, String str2, String str3, boolean z16, Function1<? super String, Unit> function1, int i12, @NotNull MediaContainingViewResizer.ResizeMode resizeMode, boolean z17, View.OnClickListener onClickListener, View.OnLongClickListener onLongClickListener, UploadItemProps uploadItemProps, String str4, boolean z18, String str5, boolean z19) {
        boolean z20;
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(resizeMode, "resizeMode");
        this.view.setContent(url, i10, i11, resizeMode, str, num, z10, spoilerConfig, i12, uploadItemProps, z11, z12, z13, z14, z17, z18, str5, z19);
        boolean z21 = true;
        if (onClickListener != null) {
            NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(this.view, false, onClickListener, 1, null);
        }
        if (onLongClickListener != null) {
            NestedScrollOnTouchUtilsKt.setOnLongClickListenerNested$default(this.view, false, onLongClickListener, 1, null);
        }
        this.view.setDescription(str2, str3);
        MediaImageView mediaImageView = this.view;
        if (z16 && z15) {
            z20 = true;
        } else {
            z20 = false;
        }
        mediaImageView.showAltTextButton(z20, str2, function1);
        MediaImageView mediaImageView2 = this.view;
        if (z16 || !z15) {
            z21 = false;
        }
        mediaImageView2.showDescription(z21, str2);
        this.view.setRole(str4);
    }
}
