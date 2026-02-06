package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Paint;
import android.graphics.drawable.ShapeDrawable;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.bridge.spoiler.SpoilerConfig;
import com.discord.chat.databinding.FileAttachmentViewBinding;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.coroutines.AttachedViewCoroutineScope;
import com.discord.misc.utilities.coroutines.CoroutineViewUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.misc.utilities.view.ViewUtilsKt;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.react_strings.I18nMessage;
import com.discord.react_strings.I18nUtilsKt;
import com.discord.theme.R;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0016\u0018\u00002\u00020\u0001B\u001d\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007Je\u0010\u0017\u001a\u00020\r2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\n\u001a\u00020\b2\u0006\u0010\u000b\u001a\u00020\b2\u0018\u0010\u000e\u001a\u0014\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\r0\f2\u0006\u0010\u0010\u001a\u00020\u000f2\b\u0010\u0012\u001a\u0004\u0018\u00010\u00112\b\u0010\u0014\u001a\u0004\u0018\u00010\u00132\b\u0010\u0016\u001a\u0004\u0018\u00010\u0015¢\u0006\u0004\b\u0017\u0010\u0018R\u0014\u0010\u001a\u001a\u00020\u00198\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u001bR\u0016\u0010\u001c\u001a\u00020\u000f8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001c\u0010\u001dR\u0018\u0010\u001f\u001a\u0004\u0018\u00010\u001e8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001f\u0010 ¨\u0006!"}, d2 = {"Lcom/discord/chat/presentation/message/view/FileAttachmentView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "attachmentName", "attachmentDescription", "url", "Lkotlin/Function2;", "", ViewProps.ON_CLICK, "", "isSpoiler", "Lcom/discord/chat/bridge/spoiler/SpoilerConfig;", "spoilerConfig", "Lcom/discord/chat/presentation/message/view/UploadItemProps;", "uploadItemProps", "", ViewProps.BACKGROUND_COLOR, "setContent", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlin/jvm/functions/Function2;ZLcom/discord/chat/bridge/spoiler/SpoilerConfig;Lcom/discord/chat/presentation/message/view/UploadItemProps;Ljava/lang/Integer;)V", "Lcom/discord/chat/databinding/FileAttachmentViewBinding;", "binding", "Lcom/discord/chat/databinding/FileAttachmentViewBinding;", "uploadFinished", "Z", "Lcom/discord/chat/presentation/message/view/UploadContext;", "uploadContext", "Lcom/discord/chat/presentation/message/view/UploadContext;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nFileAttachmentView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FileAttachmentView.kt\ncom/discord/chat/presentation/message/view/FileAttachmentView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,142:1\n176#2,2:143\n257#2,2:145\n278#2,2:147\n255#2:149\n257#2,2:150\n257#2,2:152\n*S KotlinDebug\n*F\n+ 1 FileAttachmentView.kt\ncom/discord/chat/presentation/message/view/FileAttachmentView\n*L\n56#1:143,2\n71#1:145,2\n72#1:147,2\n107#1:149\n131#1:150,2\n134#1:152,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class FileAttachmentView extends ConstraintLayout {
    @NotNull
    private final FileAttachmentViewBinding binding;
    private UploadContext uploadContext;
    private boolean uploadFinished;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public FileAttachmentView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setContent$lambda$1(FileAttachmentView fileAttachmentView, String str, String str2, String str3, View view) {
        os.i.d(CoroutineViewUtilsKt.getAttachedScope(fileAttachmentView), os.m0.b(), null, new FileAttachmentView$setContent$2$1(fileAttachmentView, str, str2, str3, null), 2, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setContent$lambda$3(FileAttachmentView fileAttachmentView) {
        LinearLayout uploadOverlayBackground = fileAttachmentView.binding.uploadOverlayBackground;
        Intrinsics.checkNotNullExpressionValue(uploadOverlayBackground, "uploadOverlayBackground");
        uploadOverlayBackground.setVisibility(8);
        fileAttachmentView.uploadFinished = true;
        return Unit.f32008a;
    }

    public final void setContent(@NotNull final String attachmentName, @NotNull final String attachmentDescription, @NotNull final String url, @NotNull final Function2<? super String, ? super String, Unit> onClick, boolean z10, SpoilerConfig spoilerConfig, UploadItemProps uploadItemProps, Integer num) {
        boolean z11;
        int i10;
        int backgroundSurfaceHigh;
        float f10;
        Intrinsics.checkNotNullParameter(attachmentName, "attachmentName");
        Intrinsics.checkNotNullParameter(attachmentDescription, "attachmentDescription");
        Intrinsics.checkNotNullParameter(url, "url");
        Intrinsics.checkNotNullParameter(onClick, "onClick");
        if (uploadItemProps != null) {
            z11 = true;
        } else {
            z11 = false;
        }
        AttachedViewCoroutineScope.cancelAllWork$default(CoroutineViewUtilsKt.getAttachedScope(this), "Binding " + getClass().getSimpleName(), null, 2, null);
        SimpleDraweeView fileAttachmentDownload = this.binding.fileAttachmentDownload;
        Intrinsics.checkNotNullExpressionValue(fileAttachmentDownload, "fileAttachmentDownload");
        if (!z11) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        fileAttachmentDownload.setVisibility(i10);
        ProgressBar fileAttachmentDownloadProgressBar = this.binding.fileAttachmentDownloadProgressBar;
        Intrinsics.checkNotNullExpressionValue(fileAttachmentDownloadProgressBar, "fileAttachmentDownloadProgressBar");
        fileAttachmentDownloadProgressBar.setVisibility(4);
        TextView fileAttachmentName = this.binding.fileAttachmentName;
        Intrinsics.checkNotNullExpressionValue(fileAttachmentName, "fileAttachmentName");
        ViewUtilsKt.setOptionalText(fileAttachmentName, attachmentName);
        TextView fileAttachmentDescription = this.binding.fileAttachmentDescription;
        Intrinsics.checkNotNullExpressionValue(fileAttachmentDescription, "fileAttachmentDescription");
        ViewUtilsKt.setOptionalText(fileAttachmentDescription, attachmentDescription);
        if (num != null) {
            backgroundSurfaceHigh = num.intValue();
        } else {
            backgroundSurfaceHigh = ThemeManagerKt.getTheme().getBackgroundSurfaceHigh();
        }
        View root = this.binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        ViewBackgroundUtilsKt.setBackgroundRectangle(root, backgroundSurfaceHigh, SizeUtilsKt.getDpToPx(8), Integer.valueOf(ColorUtilsKt.getColorCompat(this, R.color.primary_dark_700_alpha_60)), SizeUtilsKt.getDpToPx(0.25f));
        if (!z11) {
            NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(this, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.w0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    Function2.this.invoke(url, attachmentName);
                }
            }, 1, null);
        }
        SimpleDraweeView fileAttachmentDownload2 = this.binding.fileAttachmentDownload;
        Intrinsics.checkNotNullExpressionValue(fileAttachmentDownload2, "fileAttachmentDownload");
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(fileAttachmentDownload2, false, new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.x0
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                FileAttachmentView.setContent$lambda$1(FileAttachmentView.this, url, attachmentName, attachmentDescription, view);
            }
        }, 1, null);
        this.binding.spoiler.configure(spoilerConfig, this);
        if (z10) {
            SpoilerView spoiler = this.binding.spoiler;
            Intrinsics.checkNotNullExpressionValue(spoiler, "spoiler");
            if (spoiler.getVisibility() == 0) {
                this.binding.fileAttachmentDownload.setImportantForAccessibility(4);
                this.binding.fileAttachmentName.setImportantForAccessibility(4);
                this.binding.fileAttachmentDescription.setImportantForAccessibility(4);
            }
        }
        View root2 = this.binding.getRoot();
        if (uploadItemProps != null) {
            f10 = uploadItemProps.getUploadOpacity();
        } else {
            f10 = 1.0f;
        }
        root2.setAlpha(f10);
        AttachmentUploadOverlayView attachmentUploadOverlayView = this.binding.uploadOverlay;
        int interactiveTextDefault = ThemeManagerKt.getTheme().getInteractiveTextDefault();
        ShapeDrawable shapeDrawable = new ShapeDrawable();
        Paint paint = shapeDrawable.getPaint();
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        paint.setColor(ColorUtilsKt.getColorCompat(context, 17170445));
        AttachmentUploadOverlayView.configureProgressView$default(attachmentUploadOverlayView, null, shapeDrawable, null, Integer.valueOf(interactiveTextDefault), null, Integer.valueOf(ThemeManagerKt.getTheme().getBorderSubtle()), 21, null);
        UploadContext uploadContext = this.uploadContext;
        if (!Intrinsics.areEqual(uploadContext, uploadContext)) {
            this.uploadContext = this.uploadContext;
            this.uploadFinished = false;
        }
        if (z11 && !this.uploadFinished) {
            this.binding.uploadOverlayBackground.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundSurfaceHigh());
            LinearLayout uploadOverlayBackground = this.binding.uploadOverlayBackground;
            Intrinsics.checkNotNullExpressionValue(uploadOverlayBackground, "uploadOverlayBackground");
            uploadOverlayBackground.setVisibility(0);
        }
        Function0<Unit> function0 = new Function0() { // from class: com.discord.chat.presentation.message.view.y0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit content$lambda$3;
                content$lambda$3 = FileAttachmentView.setContent$lambda$3(FileAttachmentView.this);
                return content$lambda$3;
            }
        };
        this.binding.uploadOverlay.setProgress(uploadItemProps);
        this.binding.uploadOverlay.setUploadCancel(uploadItemProps);
        this.binding.uploadOverlay.setOnProgressAnimationComplete(function0);
    }

    public /* synthetic */ FileAttachmentView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FileAttachmentView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        FileAttachmentViewBinding inflate = FileAttachmentViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        SimpleDraweeView fileAttachmentDownload = inflate.fileAttachmentDownload;
        Intrinsics.checkNotNullExpressionValue(fileAttachmentDownload, "fileAttachmentDownload");
        ReactAssetUtilsKt.setReactAsset(fileAttachmentDownload, ReactAsset.Download);
        SimpleDraweeView fileAttachmentDownload2 = inflate.fileAttachmentDownload;
        Intrinsics.checkNotNullExpressionValue(fileAttachmentDownload2, "fileAttachmentDownload");
        ColorUtilsKt.setTintColor(fileAttachmentDownload2, Integer.valueOf(ThemeManagerKt.getTheme().getTextMuted()));
        inflate.fileAttachmentDownload.setContentDescription(I18nUtilsKt.i18nFormat$default(context, I18nMessage.DOWNLOAD, null, 2, null));
        SimpleDraweeView fileAttachmentIcon = inflate.fileAttachmentIcon;
        Intrinsics.checkNotNullExpressionValue(fileAttachmentIcon, "fileAttachmentIcon");
        ReactAssetUtilsKt.setReactAsset(fileAttachmentIcon, ReactAsset.File);
        SimpleDraweeView fileAttachmentIcon2 = inflate.fileAttachmentIcon;
        Intrinsics.checkNotNullExpressionValue(fileAttachmentIcon2, "fileAttachmentIcon");
        ColorUtilsKt.setTintColor(fileAttachmentIcon2, Integer.valueOf(ThemeManagerKt.getTheme().getTextMuted()));
        inflate.fileAttachmentName.setTextColor(ThemeManagerKt.getTheme().getTextLink());
        TextView fileAttachmentName = inflate.fileAttachmentName;
        Intrinsics.checkNotNullExpressionValue(fileAttachmentName, "fileAttachmentName");
        DiscordFont discordFont = DiscordFont.PrimaryMedium;
        DiscordFontUtilsKt.setDiscordFont(fileAttachmentName, discordFont);
        inflate.fileAttachmentDescription.setTextColor(ThemeManagerKt.getTheme().getTextDefault());
        TextView fileAttachmentDescription = inflate.fileAttachmentDescription;
        Intrinsics.checkNotNullExpressionValue(fileAttachmentDescription, "fileAttachmentDescription");
        SetTextSizeSpKt.setTextSizeSp(fileAttachmentDescription, 12.0f);
        TextView fileAttachmentDescription2 = inflate.fileAttachmentDescription;
        Intrinsics.checkNotNullExpressionValue(fileAttachmentDescription2, "fileAttachmentDescription");
        DiscordFontUtilsKt.setDiscordFont(fileAttachmentDescription2, discordFont);
        inflate.fileAttachmentDownloadProgressBar.setIndeterminateTintList(ColorStateList.valueOf(ThemeManagerKt.getTheme().getTextMuted()));
        View root = inflate.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        int dpToPx = SizeUtilsKt.getDpToPx(8);
        root.setPadding(dpToPx, dpToPx, dpToPx, dpToPx);
    }
}
