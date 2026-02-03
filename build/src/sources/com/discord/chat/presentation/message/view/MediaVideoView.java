package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.databinding.VideoAttachmentViewBinding;
import com.discord.chat.presentation.message.view.mosaic_recycler.MosaicView;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.image.fresco.R;
import com.discord.media_player.reactevents.MediaPlayFinishedAnalytics;
import com.discord.misc.utilities.view.ViewUtilsKt;
import com.discord.theme.ThemeManagerKt;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.textinput.ReactTextInputShadowNode;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000º\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\u0018\u00002\u00020\u00012\u00020\u0002:\u0002`aB\u001d\b\u0007\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0007\u0010\bJó\u0001\u00100\u001a\u00020-2\b\u0010\n\u001a\u0004\u0018\u00010\t2\b\u0010\f\u001a\u0004\u0018\u00010\u000b2\b\u0010\u000e\u001a\u0004\u0018\u00010\r2\u0006\u0010\u0010\u001a\u00020\u000f2\u0006\u0010\u0011\u001a\u00020\u000f2\u0006\u0010\u0012\u001a\u00020\r2\u0006\u0010\u0013\u001a\u00020\r2\b\u0010\u0014\u001a\u0004\u0018\u00010\u000f2\b\u0010\u0015\u001a\u0004\u0018\u00010\r2\u0006\u0010\u0016\u001a\u00020\r2\u0006\u0010\u0018\u001a\u00020\u00172\u0006\u0010\u0019\u001a\u00020\u00172\b\u0010\u001b\u001a\u0004\u0018\u00010\u001a2\u0006\u0010\u001c\u001a\u00020\u00172\u0006\u0010\u001d\u001a\u00020\u00172\u0006\u0010\u001e\u001a\u00020\u00172\u0006\u0010\u001f\u001a\u00020\u00172\b\u0010!\u001a\u0004\u0018\u00010 2\u0006\u0010\"\u001a\u00020\u00172\u0006\u0010#\u001a\u00020\u00172\b\u0010$\u001a\u0004\u0018\u00010\u000f2\b\u0010&\u001a\u0004\u0018\u00010%2\b\u0010'\u001a\u0004\u0018\u00010\r2\b\u0010(\u001a\u0004\u0018\u00010\r2\u0006\u0010*\u001a\u00020)2\u0006\u0010,\u001a\u00020+¢\u0006\u0004\b.\u0010/J!\u00103\u001a\u00020-2\b\u00101\u001a\u0004\u0018\u00010\u000f2\b\u00102\u001a\u0004\u0018\u00010\u000f¢\u0006\u0004\b3\u00104J\u001f\u00106\u001a\u00020-2\u0006\u00105\u001a\u00020\u00172\b\u00101\u001a\u0004\u0018\u00010\u000f¢\u0006\u0004\b6\u00107J;\u0010;\u001a\u00020-2\u0006\u00105\u001a\u00020\u00172\b\u00101\u001a\u0004\u0018\u00010\u000f2\u001a\u0010:\u001a\u0016\u0012\u0004\u0012\u00020\u000f\u0012\u0004\u0012\u00020-\u0018\u000108j\u0004\u0018\u0001`9¢\u0006\u0004\b;\u0010<J\u0017\u0010>\u001a\u00020-2\b\u0010=\u001a\u0004\u0018\u00010\u000f¢\u0006\u0004\b>\u0010?J\u001f\u0010D\u001a\u00020-2\u0006\u0010A\u001a\u00020@2\b\u0010C\u001a\u0004\u0018\u00010B¢\u0006\u0004\bD\u0010EJ!\u0010H\u001a\u00020-2\u0012\u0010G\u001a\u000e\u0012\u0004\u0012\u00020F\u0012\u0004\u0012\u00020-08¢\u0006\u0004\bH\u0010IJ\u000f\u0010K\u001a\u00020JH\u0016¢\u0006\u0004\bK\u0010LJ\u001f\u0010M\u001a\u00020-2\u0006\u0010\u0012\u001a\u00020\r2\u0006\u0010\u0013\u001a\u00020\rH\u0016¢\u0006\u0004\bM\u0010NR\u0016\u0010P\u001a\u00020O8\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\bP\u0010QR\u0016\u0010S\u001a\u00020R8\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\bS\u0010TR\u0014\u0010V\u001a\u00020U8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bV\u0010WR\u0014\u0010Y\u001a\u00020X8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bY\u0010ZR\u0014\u0010\\\u001a\u00020[8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\\\u0010]R\u0014\u0010^\u001a\u00020\r8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b^\u0010_¨\u0006b"}, d2 = {"Lcom/discord/chat/presentation/message/view/MediaVideoView;", "Landroid/widget/FrameLayout;", "Lcom/discord/chat/presentation/message/view/mosaic_recycler/MosaicView;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "Lcom/discord/primitives/ChannelId;", "channelId", "Lcom/discord/primitives/MessageId;", "messageId", "", "attachmentIndex", "", "sourceUrl", "previewUrl", "width", "height", ReactTextInputShadowNode.PROP_PLACEHOLDER, "placeholderVersion", "radiusPx", "", "isPartOfMosaic", "isSpoiler", "Lcom/discord/chat/bridge/spoiler/SpoilerConfig;", "spoilerConfig", "isObscure", "isObscureAwaitingScan", "obscureHideControls", "obscureIsOpaque", "Lcom/discord/chat/presentation/message/view/UploadItemProps;", "uploadItemProps", "canPlayInline", "hideMediaPlayButton", "overlayTagText", "Lcom/discord/react_asset_fetcher/ReactAsset;", "overlayTagIcon", "overlayTagBackgroundColor", "overlayTagTextColor", "", "portal", "Lcom/discord/media_player/MediaPlayer$PlayerSettings;", "playerSettings", "", "setContent-w--JTRs", "(Lcom/discord/primitives/ChannelId;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;IILjava/lang/String;Ljava/lang/Integer;IZZLcom/discord/chat/bridge/spoiler/SpoilerConfig;ZZZZLcom/discord/chat/presentation/message/view/UploadItemProps;ZZLjava/lang/String;Lcom/discord/react_asset_fetcher/ReactAsset;Ljava/lang/Integer;Ljava/lang/Integer;DLcom/discord/media_player/MediaPlayer$PlayerSettings;)V", "setContent", "description", "hint", "setDescription", "(Ljava/lang/String;Ljava/lang/String;)V", "show", "showDescription", "(ZLjava/lang/String;)V", "Lkotlin/Function1;", "Lcom/discord/chat/presentation/events/MessageTapShowAltText;", "onAltTextButtonClicked", "showAltTextButton", "(ZLjava/lang/String;Lkotlin/jvm/functions/Function1;)V", ViewProps.ROLE, "setRole", "(Ljava/lang/String;)V", "Landroid/view/View$OnClickListener;", "onClickListener", "Landroid/view/View$OnLongClickListener;", "onLongClickListener", "setOnMediaClickListeners", "(Landroid/view/View$OnClickListener;Landroid/view/View$OnLongClickListener;)V", "Lcom/discord/media_player/reactevents/MediaPlayFinishedAnalytics;", "onMediaPlayFinishedAnalytics", "setMediaAnalyticsListener", "(Lkotlin/jvm/functions/Function1;)V", "", "getSingleAspectRatio", "()F", "setMosaicSize", "(II)V", "Lcom/discord/chat/presentation/message/view/MediaVideoView$TargetSize;", "targetSize", "Lcom/discord/chat/presentation/message/view/MediaVideoView$TargetSize;", "Lcom/discord/chat/presentation/message/view/MediaVideoView$TargetUrl;", "targetUrl", "Lcom/discord/chat/presentation/message/view/MediaVideoView$TargetUrl;", "Lcom/discord/chat/databinding/VideoAttachmentViewBinding;", "binding", "Lcom/discord/chat/databinding/VideoAttachmentViewBinding;", "Lcom/discord/chat/presentation/message/view/SpoilerViewManager;", "spoilerViewManager", "Lcom/discord/chat/presentation/message/view/SpoilerViewManager;", "Lcom/discord/chat/presentation/message/view/AttachmentUploadOverlayViewManager;", "attachmentUploadOverlay", "Lcom/discord/chat/presentation/message/view/AttachmentUploadOverlayViewManager;", "thumbnailFadeDuration", "I", "TargetSize", "TargetUrl", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMediaVideoView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaVideoView.kt\ncom/discord/chat/presentation/message/view/MediaVideoView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,222:1\n257#2,2:223\n311#2:225\n327#2,4:226\n312#2:230\n*S KotlinDebug\n*F\n+ 1 MediaVideoView.kt\ncom/discord/chat/presentation/message/view/MediaVideoView\n*L\n168#1:223,2\n216#1:225\n216#1:226,4\n216#1:230\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MediaVideoView extends FrameLayout implements MosaicView {
    @NotNull
    private final AttachmentUploadOverlayViewManager attachmentUploadOverlay;
    @NotNull
    private final VideoAttachmentViewBinding binding;
    @NotNull
    private final SpoilerViewManager spoilerViewManager;
    private TargetSize targetSize;
    private TargetUrl targetUrl;
    private final int thumbnailFadeDuration;

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\t\u0010\n\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\u001d\u0010\f\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\r\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0010\u001a\u00020\u0003HÖ\u0001J\t\u0010\u0011\u001a\u00020\u0012HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u0013"}, d2 = {"Lcom/discord/chat/presentation/message/view/MediaVideoView$TargetSize;", "", "width", "", "height", "<init>", "(II)V", "getWidth", "()I", "getHeight", "component1", "component2", "copy", "equals", "", "other", "hashCode", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class TargetSize {
        private final int height;
        private final int width;

        public TargetSize(int i10, int i11) {
            this.width = i10;
            this.height = i11;
        }

        public static /* synthetic */ TargetSize copy$default(TargetSize targetSize, int i10, int i11, int i12, Object obj) {
            if ((i12 & 1) != 0) {
                i10 = targetSize.width;
            }
            if ((i12 & 2) != 0) {
                i11 = targetSize.height;
            }
            return targetSize.copy(i10, i11);
        }

        public final int component1() {
            return this.width;
        }

        public final int component2() {
            return this.height;
        }

        @NotNull
        public final TargetSize copy(int i10, int i11) {
            return new TargetSize(i10, i11);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof TargetSize) {
                TargetSize targetSize = (TargetSize) obj;
                return this.width == targetSize.width && this.height == targetSize.height;
            }
            return false;
        }

        public final int getHeight() {
            return this.height;
        }

        public final int getWidth() {
            return this.width;
        }

        public int hashCode() {
            return (Integer.hashCode(this.width) * 31) + Integer.hashCode(this.height);
        }

        @NotNull
        public String toString() {
            int i10 = this.width;
            int i11 = this.height;
            return "TargetSize(width=" + i10 + ", height=" + i11 + ")";
        }
    }

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\t\u0010\n\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\u001d\u0010\f\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\r\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0010\u001a\u00020\u0011HÖ\u0001J\t\u0010\u0012\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u0013"}, d2 = {"Lcom/discord/chat/presentation/message/view/MediaVideoView$TargetUrl;", "", "sourceUrl", "", "previewUrl", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "getSourceUrl", "()Ljava/lang/String;", "getPreviewUrl", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class TargetUrl {
        @NotNull
        private final String previewUrl;
        @NotNull
        private final String sourceUrl;

        public TargetUrl(@NotNull String sourceUrl, @NotNull String previewUrl) {
            Intrinsics.checkNotNullParameter(sourceUrl, "sourceUrl");
            Intrinsics.checkNotNullParameter(previewUrl, "previewUrl");
            this.sourceUrl = sourceUrl;
            this.previewUrl = previewUrl;
        }

        public static /* synthetic */ TargetUrl copy$default(TargetUrl targetUrl, String str, String str2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = targetUrl.sourceUrl;
            }
            if ((i10 & 2) != 0) {
                str2 = targetUrl.previewUrl;
            }
            return targetUrl.copy(str, str2);
        }

        @NotNull
        public final String component1() {
            return this.sourceUrl;
        }

        @NotNull
        public final String component2() {
            return this.previewUrl;
        }

        @NotNull
        public final TargetUrl copy(@NotNull String sourceUrl, @NotNull String previewUrl) {
            Intrinsics.checkNotNullParameter(sourceUrl, "sourceUrl");
            Intrinsics.checkNotNullParameter(previewUrl, "previewUrl");
            return new TargetUrl(sourceUrl, previewUrl);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof TargetUrl) {
                TargetUrl targetUrl = (TargetUrl) obj;
                return Intrinsics.areEqual(this.sourceUrl, targetUrl.sourceUrl) && Intrinsics.areEqual(this.previewUrl, targetUrl.previewUrl);
            }
            return false;
        }

        @NotNull
        public final String getPreviewUrl() {
            return this.previewUrl;
        }

        @NotNull
        public final String getSourceUrl() {
            return this.sourceUrl;
        }

        public int hashCode() {
            return (this.sourceUrl.hashCode() * 31) + this.previewUrl.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.sourceUrl;
            String str2 = this.previewUrl;
            return "TargetUrl(sourceUrl=" + str + ", previewUrl=" + str2 + ")";
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public MediaVideoView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setContent_w__JTRs$lambda$1(boolean z10, MediaVideoView mediaVideoView) {
        SpoilerView spoilerView;
        if (z10 && (spoilerView = mediaVideoView.spoilerViewManager.getSpoilerView()) != null) {
            spoilerView.makeObscureHideButtonHidden();
        }
        return Unit.f32464a;
    }

    @Override // com.discord.chat.presentation.message.view.mosaic_recycler.MosaicView
    public float getSingleAspectRatio() {
        TargetSize targetSize = this.targetSize;
        TargetSize targetSize2 = null;
        if (targetSize == null) {
            Intrinsics.throwUninitializedPropertyAccessException("targetSize");
            targetSize = null;
        }
        float width = targetSize.getWidth();
        TargetSize targetSize3 = this.targetSize;
        if (targetSize3 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("targetSize");
        } else {
            targetSize2 = targetSize3;
        }
        return width / targetSize2.getHeight();
    }

    /* JADX WARN: Code restructure failed: missing block: B:20:0x00b9, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r3, r2) == false) goto L27;
     */
    /* JADX WARN: Removed duplicated region for block: B:17:0x00ac  */
    /* renamed from: setContent-w--JTRs  reason: not valid java name */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void m699setContentwJTRs(com.discord.primitives.ChannelId r26, java.lang.String r27, java.lang.Integer r28, @org.jetbrains.annotations.NotNull java.lang.String r29, @org.jetbrains.annotations.NotNull java.lang.String r30, int r31, int r32, java.lang.String r33, java.lang.Integer r34, int r35, boolean r36, boolean r37, com.discord.chat.bridge.spoiler.SpoilerConfig r38, boolean r39, boolean r40, boolean r41, boolean r42, com.discord.chat.presentation.message.view.UploadItemProps r43, boolean r44, boolean r45, java.lang.String r46, com.discord.react_asset_fetcher.ReactAsset r47, java.lang.Integer r48, java.lang.Integer r49, double r50, @org.jetbrains.annotations.NotNull com.discord.media_player.MediaPlayer.PlayerSettings r52) {
        /*
            Method dump skipped, instructions count: 279
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.view.MediaVideoView.m699setContentwJTRs(com.discord.primitives.ChannelId, java.lang.String, java.lang.Integer, java.lang.String, java.lang.String, int, int, java.lang.String, java.lang.Integer, int, boolean, boolean, com.discord.chat.bridge.spoiler.SpoilerConfig, boolean, boolean, boolean, boolean, com.discord.chat.presentation.message.view.UploadItemProps, boolean, boolean, java.lang.String, com.discord.react_asset_fetcher.ReactAsset, java.lang.Integer, java.lang.Integer, double, com.discord.media_player.MediaPlayer$PlayerSettings):void");
    }

    public final void setDescription(String str, String str2) {
        MediaView mediaView = this.binding.mediaView;
        if (str == null) {
            str = "";
        }
        if (str2 == null) {
            str2 = "";
        }
        mediaView.setContentDescription(str + ", " + str2);
    }

    public final void setMediaAnalyticsListener(@NotNull Function1<? super MediaPlayFinishedAnalytics, Unit> onMediaPlayFinishedAnalytics) {
        Intrinsics.checkNotNullParameter(onMediaPlayFinishedAnalytics, "onMediaPlayFinishedAnalytics");
        this.binding.mediaView.setAnalyticsListener(onMediaPlayFinishedAnalytics);
    }

    @Override // com.discord.chat.presentation.message.view.mosaic_recycler.MosaicView
    public void setMosaicSize(int i10, int i11) {
        ConstraintLayout container = this.binding.container;
        Intrinsics.checkNotNullExpressionValue(container, "container");
        ViewGroup.LayoutParams layoutParams = container.getLayoutParams();
        if (layoutParams != null) {
            layoutParams.width = i10;
            layoutParams.height = i11;
            container.setLayoutParams(layoutParams);
            return;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
    }

    public final void setOnMediaClickListeners(@NotNull View.OnClickListener onClickListener, View.OnLongClickListener onLongClickListener) {
        Intrinsics.checkNotNullParameter(onClickListener, "onClickListener");
        this.binding.mediaView.setOnMediaClickListeners(onClickListener, onLongClickListener);
    }

    public final void setRole(final String str) {
        if (str != null) {
            androidx.core.view.h0.n0(this.binding.mediaView, new androidx.core.view.a() { // from class: com.discord.chat.presentation.message.view.MediaVideoView$setRole$1
                @Override // androidx.core.view.a
                public void onInitializeAccessibilityNodeInfo(View host, AccessibilityNodeInfoCompat info) {
                    Intrinsics.checkNotNullParameter(host, "host");
                    Intrinsics.checkNotNullParameter(info, "info");
                    super.onInitializeAccessibilityNodeInfo(host, info);
                    info.T0(str);
                }
            });
        }
    }

    public final void showAltTextButton(boolean z10, String str, Function1<? super String, Unit> function1) {
        AltTextButtonView altTextButtonView = this.binding.mediaViewAltTextButton;
        if (!z10) {
            str = null;
        }
        altTextButtonView.configure(str, function1);
    }

    public final void showDescription(boolean z10, String str) {
        boolean z11;
        TextView textView = this.binding.mediaViewAltText;
        Intrinsics.checkNotNull(textView);
        ViewUtilsKt.setOptionalText(textView, str);
        int i10 = 0;
        if (str != null && z10) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (!z11) {
            i10 = 8;
        }
        textView.setVisibility(i10);
    }

    public /* synthetic */ MediaVideoView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaVideoView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        VideoAttachmentViewBinding inflate = VideoAttachmentViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        this.spoilerViewManager = new SpoilerViewManager();
        this.attachmentUploadOverlay = new AttachmentUploadOverlayViewManager();
        this.thumbnailFadeDuration = getResources().getInteger(R.integer.image_fade_duration);
        TextView textView = inflate.mediaViewAltText;
        textView.setImportantForAccessibility(4);
        Intrinsics.checkNotNull(textView);
        DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimaryNormal);
        textView.setTextColor(ThemeManagerKt.getTheme().getTextMuted());
        SetTextSizeSpKt.setTextSizeSp(textView, 12.0f);
    }
}
