package com.discord.chat.presentation.message.view;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.Configuration;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.GradientDrawable;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.databinding.MediaViewBinding;
import com.discord.chat.presentation.message.view.media.ViewAttachedListener;
import com.discord.media_player.MediaPlayer;
import com.discord.media_player.MediaPlayerManager;
import com.discord.media_player.MediaPlayerManagerModule;
import com.discord.media_player.MediaPlayerView;
import com.discord.media_player.MediaSource;
import com.discord.media_player.reactevents.MediaPlayFinishedAnalytics;
import com.discord.misc.utilities.coroutines.CoroutineViewUtilsKt;
import com.discord.misc.utilities.measure.ViewMeasureExtensionsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.portals.from_native.PortalFromNativeContextManager;
import com.discord.portals.utils.ViewRemoveFromParentKt;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.react_strings.I18nMessage;
import com.discord.react_strings.I18nUtilsKt;
import com.discord.theme.R;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
@Metadata(d1 = {"\u0000¹\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0014\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0007*\u0001i\b\u0016\u0018\u00002\u00020\u0001B'\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\b\b\u0002\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\tJ?\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u000b\u001a\u00020\n2\b\u0010\r\u001a\u0004\u0018\u00010\f2\b\u0010\u000f\u001a\u0004\u0018\u00010\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u00062\b\u0010\u0011\u001a\u0004\u0018\u00010\u0006H\u0002¢\u0006\u0004\b\u0013\u0010\u0014J\u000f\u0010\u0015\u001a\u00020\u0012H\u0002¢\u0006\u0004\b\u0015\u0010\u0016J\u000f\u0010\u0017\u001a\u00020\u0012H\u0002¢\u0006\u0004\b\u0017\u0010\u0016J\u000f\u0010\u0018\u001a\u00020\u0012H\u0002¢\u0006\u0004\b\u0018\u0010\u0016J\u0017\u0010\u0019\u001a\u00020\u00122\u0006\u0010\u0017\u001a\u00020\nH\u0002¢\u0006\u0004\b\u0019\u0010\u001aJ-\u0010!\u001a\u0010\u0012\u0004\u0012\u00020\u001f\u0012\u0004\u0012\u00020 \u0018\u00010\u001e2\u0006\u0010\u001c\u001a\u00020\u001b2\u0006\u0010\u001d\u001a\u00020\nH\u0002¢\u0006\u0004\b!\u0010\"J\u000f\u0010#\u001a\u00020\u0012H\u0002¢\u0006\u0004\b#\u0010\u0016J\u000f\u0010$\u001a\u00020\u0012H\u0002¢\u0006\u0004\b$\u0010\u0016J\u000f\u0010%\u001a\u00020\u0012H\u0014¢\u0006\u0004\b%\u0010\u0016J\u0019\u0010(\u001a\u00020\u00122\b\u0010'\u001a\u0004\u0018\u00010&H\u0014¢\u0006\u0004\b(\u0010)J\u000f\u0010*\u001a\u00020\u0012H\u0014¢\u0006\u0004\b*\u0010\u0016J×\u0001\u0010@\u001a\u00020\u00122\n\b\u0002\u0010\u001c\u001a\u0004\u0018\u00010\u001b2\b\b\u0002\u0010+\u001a\u00020\n2\b\b\u0002\u0010,\u001a\u00020\n2\b\b\u0002\u0010-\u001a\u00020\n2\n\b\u0002\u0010/\u001a\u0004\u0018\u00010.2\b\b\u0002\u00100\u001a\u00020\n2\n\b\u0002\u00101\u001a\u0004\u0018\u00010\u00062\n\b\u0002\u00103\u001a\u0004\u0018\u0001022\b\b\u0002\u00104\u001a\u00020\n2\b\b\u0002\u00105\u001a\u00020\n2\b\b\u0002\u00106\u001a\u00020\n2\b\b\u0002\u00107\u001a\u00020\u00062\u000e\b\u0002\u00109\u001a\b\u0012\u0004\u0012\u00020\u0012082\n\b\u0002\u0010:\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010;\u001a\u0004\u0018\u00010\u000e2\n\b\u0002\u0010<\u001a\u0004\u0018\u00010\u00062\n\b\u0002\u0010=\u001a\u0004\u0018\u00010\u00062\b\b\u0002\u0010?\u001a\u00020>¢\u0006\u0004\b@\u0010AJ!\u0010F\u001a\u00020\u00122\b\u0010C\u001a\u0004\u0018\u00010B2\b\u0010E\u001a\u0004\u0018\u00010D¢\u0006\u0004\bF\u0010GJ!\u0010K\u001a\u00020\u00122\u0012\u0010J\u001a\u000e\u0012\u0004\u0012\u00020I\u0012\u0004\u0012\u00020\u00120H¢\u0006\u0004\bK\u0010LR\u001a\u0010N\u001a\u00020M8\u0002X\u0082\u0004¢\u0006\f\n\u0004\bN\u0010O\u0012\u0004\bP\u0010\u0016R\u0018\u0010Q\u001a\u0004\u0018\u00010 8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bQ\u0010RR\u0018\u0010\u001c\u001a\u0004\u0018\u00010\u001b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001c\u0010SR\u0018\u0010T\u001a\u0004\u0018\u00010\u001f8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bT\u0010UR\u0016\u0010,\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b,\u0010VR\u0016\u0010-\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b-\u0010VR\u0016\u0010+\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b+\u0010VR\u0018\u0010/\u001a\u0004\u0018\u00010.8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b/\u0010WR\u0016\u00100\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b0\u0010VR\u0016\u0010X\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bX\u0010VR\u0018\u00101\u001a\u0004\u0018\u00010\u00068\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b1\u0010YR\u0018\u00103\u001a\u0004\u0018\u0001028\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b3\u0010ZR\u0016\u00104\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b4\u0010VR\u0016\u00105\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b5\u0010VR\u0016\u00106\u001a\u00020\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b6\u0010VR\u0016\u00107\u001a\u00020\u00068\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b7\u0010[R\u001c\u00109\u001a\b\u0012\u0004\u0012\u00020\u0012088\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b9\u0010\\R\u0018\u0010:\u001a\u0004\u0018\u00010\f8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b:\u0010]R\u0018\u0010;\u001a\u0004\u0018\u00010\u000e8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b;\u0010^R\u0018\u0010=\u001a\u0004\u0018\u00010\u00068\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b=\u0010YR\u0018\u0010<\u001a\u0004\u0018\u00010\u00068\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b<\u0010YR\"\u0010J\u001a\u000e\u0012\u0004\u0012\u00020I\u0012\u0004\u0012\u00020\u00120H8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bJ\u0010_R\u0016\u0010?\u001a\u00020>8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b?\u0010`R\u0018\u0010a\u001a\u0004\u0018\u00010\f8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\ba\u0010]R\u0016\u0010c\u001a\u0004\u0018\u00010b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bc\u0010dR\u001a\u0010f\u001a\u00020e8\u0002X\u0082\u0004¢\u0006\f\n\u0004\bf\u0010g\u0012\u0004\bh\u0010\u0016R\u0014\u0010j\u001a\u00020i8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bj\u0010kR\u0016\u0010o\u001a\u0004\u0018\u00010l8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\bm\u0010nR\u0018\u0010r\u001a\u00020\n*\u00020\u001b8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\bp\u0010q¨\u0006s"}, d2 = {"Lcom/discord/chat/presentation/message/view/MediaView;", "Landroid/widget/FrameLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "", "defStyleAttr", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "", "isTagVisible", "", "content", "Lcom/discord/react_asset_fetcher/ReactAsset;", "icon", ViewProps.BACKGROUND_COLOR, "textColor", "", "setupTag", "(ZLjava/lang/String;Lcom/discord/react_asset_fetcher/ReactAsset;Ljava/lang/Integer;Ljava/lang/Integer;)V", "pause", "()V", "play", "prepareAndPlay", "togglePortalControl", "(Z)V", "Lcom/discord/media_player/MediaSource;", "mediaSource", "loopMedia", "Lkotlin/Pair;", "Lcom/discord/media_player/MediaPlayer;", "Lcom/discord/media_player/MediaPlayerView;", "prepareMediaPlayer", "(Lcom/discord/media_player/MediaSource;Z)Lkotlin/Pair;", "registerForPortal", "releasePlayer", "onDetachedFromWindow", "Landroid/content/res/Configuration;", "newConfig", "onConfigurationChanged", "(Landroid/content/res/Configuration;)V", "onAttachedToWindow", "mediaViewDetached", "mediaViewScrolling", "mediaViewFocused", "Lcom/discord/media_player/MediaPlayer$Event;", "mediaPlaybackState", "mediaVolumeOn", "mediaOrientation", "Lcom/discord/portals/from_native/PortalFromNativeContextManager$Event;", "mediaPortalEvent", "mediaCanPlayInline", "mediaPlayThirdParty", "mediaHidePlayButton", "mediaThumbnailFadeDuration", "Lkotlin/Function0;", "mediaOnPlayCallback", "overlayTagText", "overlayTagIcon", "overlayTagBackgroundColor", "overlayTagTextColor", "Lcom/discord/media_player/MediaPlayer$PlayerSettings;", "playerSettings", "setMediaData", "(Lcom/discord/media_player/MediaSource;ZZZLcom/discord/media_player/MediaPlayer$Event;ZLjava/lang/Integer;Lcom/discord/portals/from_native/PortalFromNativeContextManager$Event;ZZZILkotlin/jvm/functions/Function0;Ljava/lang/String;Lcom/discord/react_asset_fetcher/ReactAsset;Ljava/lang/Integer;Ljava/lang/Integer;Lcom/discord/media_player/MediaPlayer$PlayerSettings;)V", "Landroid/view/View$OnClickListener;", "onClickListener", "Landroid/view/View$OnLongClickListener;", "onLongClickListener", "setOnMediaClickListeners", "(Landroid/view/View$OnClickListener;Landroid/view/View$OnLongClickListener;)V", "Lkotlin/Function1;", "Lcom/discord/media_player/reactevents/MediaPlayFinishedAnalytics;", "onMediaPlayFinishedAnalytics", "setAnalyticsListener", "(Lkotlin/jvm/functions/Function1;)V", "Lcom/discord/chat/databinding/MediaViewBinding;", "binding", "Lcom/discord/chat/databinding/MediaViewBinding;", "getBinding$annotations", "mediaPlayerView", "Lcom/discord/media_player/MediaPlayerView;", "Lcom/discord/media_player/MediaSource;", "mediaPlayer", "Lcom/discord/media_player/MediaPlayer;", "Z", "Lcom/discord/media_player/MediaPlayer$Event;", "mediaShouldResume", "Ljava/lang/Integer;", "Lcom/discord/portals/from_native/PortalFromNativeContextManager$Event;", "I", "Lkotlin/jvm/functions/Function0;", "Ljava/lang/String;", "Lcom/discord/react_asset_fetcher/ReactAsset;", "Lkotlin/jvm/functions/Function1;", "Lcom/discord/media_player/MediaPlayer$PlayerSettings;", "pauseId", "Lcom/discord/media_player/MediaPlayerManagerModule;", "managerModule", "Lcom/discord/media_player/MediaPlayerManagerModule;", "Lcom/discord/chat/presentation/message/view/media/ViewAttachedListener;", "attachStateChangeListener", "Lcom/discord/chat/presentation/message/view/media/ViewAttachedListener;", "getAttachStateChangeListener$annotations", "com/discord/chat/presentation/message/view/MediaView$lifecycleListener$1", "lifecycleListener", "Lcom/discord/chat/presentation/message/view/MediaView$lifecycleListener$1;", "Lcom/facebook/react/bridge/ReactContext;", "getReactContext", "()Lcom/facebook/react/bridge/ReactContext;", "reactContext", "getShouldShowGifIndicator", "(Lcom/discord/media_player/MediaSource;)Z", "shouldShowGifIndicator", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMediaView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaView.kt\ncom/discord/chat/presentation/message/view/MediaView\n+ 2 CastUtils.kt\ncom/discord/misc/utilities/kotlin/CastUtilsKt\n+ 3 ColorDrawable.kt\nandroidx/core/graphics/drawable/ColorDrawableKt\n+ 4 View.kt\nandroidx/core/view/ViewKt\n+ 5 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,623:1\n8#2:624\n27#3:625\n257#4,2:626\n257#4,2:628\n257#4,2:630\n257#4,2:632\n257#4,2:634\n255#4:636\n257#4,2:637\n255#4:639\n257#4,2:640\n257#4,2:642\n1#5:644\n*S KotlinDebug\n*F\n+ 1 MediaView.kt\ncom/discord/chat/presentation/message/view/MediaView\n*L\n84#1:624\n129#1:625\n257#1:626,2\n272#1:628,2\n276#1:630,2\n284#1:632,2\n296#1:634,2\n328#1:636\n452#1:637,2\n459#1:639\n465#1:640,2\n469#1:642,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class MediaView extends FrameLayout {
    @NotNull
    private final ViewAttachedListener attachStateChangeListener;
    @NotNull
    private final MediaViewBinding binding;
    @NotNull
    private final MediaView$lifecycleListener$1 lifecycleListener;
    private final MediaPlayerManagerModule managerModule;
    private boolean mediaCanPlayInline;
    private boolean mediaHidePlayButton;
    @NotNull
    private Function0<Unit> mediaOnPlayCallback;
    private Integer mediaOrientation;
    private boolean mediaPlayThirdParty;
    private MediaPlayer.Event mediaPlaybackState;
    private MediaPlayer mediaPlayer;
    private MediaPlayerView mediaPlayerView;
    private PortalFromNativeContextManager.Event mediaPortalEvent;
    private boolean mediaShouldResume;
    private MediaSource mediaSource;
    private int mediaThumbnailFadeDuration;
    private boolean mediaViewDetached;
    private boolean mediaViewFocused;
    private boolean mediaViewScrolling;
    private boolean mediaVolumeOn;
    @NotNull
    private Function1<? super MediaPlayFinishedAnalytics, Unit> onMediaPlayFinishedAnalytics;
    private Integer overlayTagBackgroundColor;
    private ReactAsset overlayTagIcon;
    private String overlayTagText;
    private Integer overlayTagTextColor;
    private String pauseId;
    @NotNull
    private MediaPlayer.PlayerSettings playerSettings;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public MediaView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit attachStateChangeListener$lambda$2(MediaView mediaView, boolean z10) {
        if (z10) {
            setMediaData$default(mediaView, null, false, false, false, null, false, null, null, false, false, false, 0, null, null, null, null, null, null, 262141, null);
        } else {
            setMediaData$default(mediaView, null, true, false, false, null, false, null, null, false, false, false, 0, null, null, null, null, null, null, 262137, null);
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit attachStateChangeListener$lambda$3(MediaView mediaView, boolean z10) {
        setMediaData$default(mediaView, null, false, z10, false, null, false, null, null, false, false, false, 0, null, null, null, null, null, null, 262139, null);
        return Unit.f33298a;
    }

    private static /* synthetic */ void getAttachStateChangeListener$annotations() {
    }

    private static /* synthetic */ void getBinding$annotations() {
    }

    private final ReactContext getReactContext() {
        Context context = getContext();
        if (context instanceof ReactContext) {
            return (ReactContext) context;
        }
        return null;
    }

    private final boolean getShouldShowGifIndicator(MediaSource mediaSource) {
        if (mediaSource.isGifv() && !mediaSource.getShouldAutoPlay()) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onMediaPlayFinishedAnalytics$lambda$1(MediaPlayFinishedAnalytics it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void pause() {
        MediaPlayer mediaPlayer = this.mediaPlayer;
        if (mediaPlayer != null) {
            mediaPlayer.pause();
        }
        togglePortalControl(false);
    }

    private final void play() {
        MediaPlayer mediaPlayer = this.mediaPlayer;
        if (mediaPlayer != null) {
            mediaPlayer.play();
        }
        togglePortalControl(true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void prepareAndPlay() {
        if (this.mediaPlayer != null && this.mediaPlayerView != null) {
            play();
            return;
        }
        MediaSource mediaSource = this.mediaSource;
        if (mediaSource == null) {
            return;
        }
        prepareMediaPlayer(mediaSource, false);
        this.mediaOnPlayCallback.invoke();
    }

    private final Pair<MediaPlayer, MediaPlayerView> prepareMediaPlayer(MediaSource mediaSource, boolean z10) {
        float f10;
        if (mediaSource.getSourceUrl() == null) {
            return null;
        }
        MediaPlayerView mediaPlayerView = this.mediaPlayerView;
        if (mediaPlayerView == null) {
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            mediaPlayerView = new MediaPlayerView(context);
            addView(mediaPlayerView.getView(), 0, new FrameLayout.LayoutParams(-1, -1));
        }
        MediaPlayerView mediaPlayerView2 = mediaPlayerView;
        mediaPlayerView2.setVisible(true);
        MediaPlayer mediaPlayer = this.mediaPlayer;
        if (mediaPlayer == null) {
            MediaPlayerManager mediaPlayerManager = MediaPlayerManager.INSTANCE;
            Context context2 = getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            Double portal = mediaSource.getPortal();
            Intrinsics.checkNotNull(portal);
            mediaPlayer = mediaPlayerManager.acquire(context2, portal.doubleValue(), this.playerSettings);
        }
        MediaPlayer mediaPlayer2 = mediaPlayer;
        mediaPlayer2.setEventListener(new Function1() { // from class: com.discord.chat.presentation.message.view.c2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit prepareMediaPlayer$lambda$19$lambda$16;
                prepareMediaPlayer$lambda$19$lambda$16 = MediaView.prepareMediaPlayer$lambda$19$lambda$16(MediaView.this, (MediaPlayer.Event) obj);
                return prepareMediaPlayer$lambda$19$lambda$16;
            }
        });
        mediaPlayer2.setVolumeListener(new Function1() { // from class: com.discord.chat.presentation.message.view.i2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit prepareMediaPlayer$lambda$19$lambda$17;
                prepareMediaPlayer$lambda$19$lambda$17 = MediaView.prepareMediaPlayer$lambda$19$lambda$17(MediaView.this, ((Float) obj).floatValue());
                return prepareMediaPlayer$lambda$19$lambda$17;
            }
        });
        mediaPlayer2.setAnalyticsListener(new Function1() { // from class: com.discord.chat.presentation.message.view.j2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit prepareMediaPlayer$lambda$19$lambda$18;
                prepareMediaPlayer$lambda$19$lambda$18 = MediaView.prepareMediaPlayer$lambda$19$lambda$18(MediaView.this, (MediaPlayFinishedAnalytics) obj);
                return prepareMediaPlayer$lambda$19$lambda$18;
            }
        });
        if (mediaSource.isGifv()) {
            f10 = 0.0f;
        } else {
            f10 = 1.0f;
        }
        mediaPlayer2.setVolume(f10);
        MediaPlayer.preparePlayer$default(mediaPlayer2, mediaSource, true, z10, 0L, mediaPlayerView2, null, 40, null);
        this.mediaPlayer = mediaPlayer2;
        this.mediaPlayerView = mediaPlayerView2;
        ViewMeasureExtensionsKt.measureAndLayout(this);
        return new Pair<>(mediaPlayer2, mediaPlayerView2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit prepareMediaPlayer$lambda$19$lambda$16(MediaView mediaView, MediaPlayer.Event event) {
        Intrinsics.checkNotNullParameter(event, "event");
        setMediaData$default(mediaView, null, false, false, false, event, false, null, null, false, false, false, 0, null, null, null, null, null, null, 262127, null);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit prepareMediaPlayer$lambda$19$lambda$17(MediaView mediaView, float f10) {
        boolean z10;
        if (f10 > 0.0f) {
            z10 = true;
        } else {
            z10 = false;
        }
        setMediaData$default(mediaView, null, false, false, false, null, z10, null, null, false, false, false, 0, null, null, null, null, null, null, 262111, null);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit prepareMediaPlayer$lambda$19$lambda$18(MediaView mediaView, MediaPlayFinishedAnalytics event) {
        Intrinsics.checkNotNullParameter(event, "event");
        mediaView.onMediaPlayFinishedAnalytics.invoke(event);
        return Unit.f33298a;
    }

    private final void registerForPortal() {
        Double portal;
        Pair<MediaPlayer, MediaPlayerView> prepareMediaPlayer;
        final MediaSource mediaSource = this.mediaSource;
        if (mediaSource != null && (portal = mediaSource.getPortal()) != null) {
            double doubleValue = portal.doubleValue();
            MediaPlayer mediaPlayer = this.mediaPlayer;
            if (mediaPlayer != null && this.mediaPlayerView != null) {
                Intrinsics.checkNotNull(mediaPlayer);
                MediaPlayerView mediaPlayerView = this.mediaPlayerView;
                Intrinsics.checkNotNull(mediaPlayerView);
                prepareMediaPlayer = new Pair<>(mediaPlayer, mediaPlayerView);
            } else if (!mediaSource.isValid() || (prepareMediaPlayer = prepareMediaPlayer(mediaSource, mediaSource.isGifv())) == null) {
                return;
            }
            final MediaPlayer mediaPlayer2 = (MediaPlayer) prepareMediaPlayer.a();
            final MediaPlayerView mediaPlayerView2 = (MediaPlayerView) prepareMediaPlayer.b();
            PortalFromNativeContextManager.INSTANCE.addPortal(doubleValue, mediaPlayerView2.getView(), new Function1() { // from class: com.discord.chat.presentation.message.view.q2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit registerForPortal$lambda$20;
                    registerForPortal$lambda$20 = MediaView.registerForPortal$lambda$20(MediaView.this, (View) obj);
                    return registerForPortal$lambda$20;
                }
            }, new Function1() { // from class: com.discord.chat.presentation.message.view.d2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit registerForPortal$lambda$22;
                    registerForPortal$lambda$22 = MediaView.registerForPortal$lambda$22(MediaView.this, mediaSource, mediaPlayer2, mediaPlayerView2, (View) obj);
                    return registerForPortal$lambda$22;
                }
            }, new Function1() { // from class: com.discord.chat.presentation.message.view.e2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit registerForPortal$lambda$23;
                    registerForPortal$lambda$23 = MediaView.registerForPortal$lambda$23(MediaView.this, mediaPlayer2, mediaSource, (View) obj);
                    return registerForPortal$lambda$23;
                }
            }, new Function1() { // from class: com.discord.chat.presentation.message.view.f2
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit registerForPortal$lambda$24;
                    registerForPortal$lambda$24 = MediaView.registerForPortal$lambda$24(MediaSource.this, this, (View) obj);
                    return registerForPortal$lambda$24;
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit registerForPortal$lambda$20(MediaView mediaView, View view) {
        Intrinsics.checkNotNullParameter(view, "view");
        mediaView.removeOnAttachStateChangeListener(mediaView.attachStateChangeListener);
        ViewRemoveFromParentKt.removeFromParent(view);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit registerForPortal$lambda$22(final MediaView mediaView, MediaSource mediaSource, final MediaPlayer mediaPlayer, final MediaPlayerView mediaPlayerView, View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        MediaPlayerManagerModule mediaPlayerManagerModule = mediaView.managerModule;
        if (mediaPlayerManagerModule != null) {
            mediaPlayerManagerModule.startPlayerProgressInterval(mediaSource, mediaPlayer);
        }
        mediaPlayerView.getView().post(new Runnable() { // from class: com.discord.chat.presentation.message.view.k2
            @Override // java.lang.Runnable
            public final void run() {
                MediaView.registerForPortal$lambda$22$lambda$21(MediaPlayer.this, mediaPlayerView, mediaView);
            }
        });
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void registerForPortal$lambda$22$lambda$21(MediaPlayer mediaPlayer, MediaPlayerView mediaPlayerView, MediaView mediaView) {
        mediaPlayer.reattachSurface(mediaPlayerView);
        mediaView.play();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit registerForPortal$lambda$23(MediaView mediaView, MediaPlayer mediaPlayer, MediaSource mediaSource, View it) {
        Double d10;
        Intrinsics.checkNotNullParameter(it, "it");
        mediaView.mediaVolumeOn = !mediaPlayer.isMuted();
        MediaPlayerManagerModule mediaPlayerManagerModule = mediaView.managerModule;
        if (mediaPlayerManagerModule != null) {
            mediaPlayerManagerModule.stopPlayerProgressInterval(mediaSource);
        }
        Double portal = mediaSource.getPortal();
        MediaSource mediaSource2 = mediaView.mediaSource;
        if (mediaSource2 != null) {
            d10 = mediaSource2.getPortal();
        } else {
            d10 = null;
        }
        if (!Intrinsics.areEqual(portal, d10) || mediaPlayer.hasEnded() || !mediaView.isAttachedToWindow()) {
            mediaView.releasePlayer();
        }
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit registerForPortal$lambda$24(MediaSource mediaSource, MediaView mediaView, View view) {
        Double d10;
        Intrinsics.checkNotNullParameter(view, "view");
        Double portal = mediaSource.getPortal();
        MediaSource mediaSource2 = mediaView.mediaSource;
        if (mediaSource2 != null) {
            d10 = mediaSource2.getPortal();
        } else {
            d10 = null;
        }
        if (Intrinsics.areEqual(portal, d10)) {
            setMediaData$default(mediaView, null, false, false, false, null, false, null, null, false, false, false, 0, null, null, null, null, null, null, 262143, null);
            mediaView.addView(view, 0);
            ViewMeasureExtensionsKt.measureAndLayout(mediaView);
        }
        mediaView.addOnAttachStateChangeListener(mediaView.attachStateChangeListener);
        return Unit.f33298a;
    }

    private final void releasePlayer() {
        Double d10;
        Double portal;
        MediaPlayerManagerModule mediaPlayerManagerModule = this.managerModule;
        if (mediaPlayerManagerModule != null) {
            MediaSource mediaSource = this.mediaSource;
            if (mediaSource != null && (portal = mediaSource.getPortal()) != null) {
                mediaPlayerManagerModule.toggle(portal.doubleValue(), false);
            } else {
                return;
            }
        }
        MediaPlayerManager mediaPlayerManager = MediaPlayerManager.INSTANCE;
        MediaSource mediaSource2 = this.mediaSource;
        if (mediaSource2 != null) {
            d10 = mediaSource2.getPortal();
        } else {
            d10 = null;
        }
        mediaPlayerManager.release(d10);
        MediaPlayer mediaPlayer = this.mediaPlayer;
        if (mediaPlayer != null) {
            mediaPlayer.reset();
            Unit unit = Unit.f33298a;
            this.mediaPlayer = null;
        }
        MediaPlayerView mediaPlayerView = this.mediaPlayerView;
        if (mediaPlayerView != null) {
            mediaPlayerView.reset();
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ void setMediaData$default(MediaView mediaView, MediaSource mediaSource, boolean z10, boolean z11, boolean z12, MediaPlayer.Event event, boolean z13, Integer num, PortalFromNativeContextManager.Event event2, boolean z14, boolean z15, boolean z16, int i10, Function0 function0, String str, ReactAsset reactAsset, Integer num2, Integer num3, MediaPlayer.PlayerSettings playerSettings, int i11, Object obj) {
        MediaPlayer.PlayerSettings playerSettings2;
        Integer num4;
        if (obj != null) {
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: setMediaData");
        }
        MediaSource mediaSource2 = (i11 & 1) != 0 ? mediaView.mediaSource : mediaSource;
        boolean z17 = (i11 & 2) != 0 ? mediaView.mediaViewDetached : z10;
        boolean z18 = (i11 & 4) != 0 ? mediaView.mediaViewScrolling : z11;
        boolean z19 = (i11 & 8) != 0 ? mediaView.mediaViewFocused : z12;
        MediaPlayer.Event event3 = (i11 & 16) != 0 ? mediaView.mediaPlaybackState : event;
        boolean z20 = (i11 & 32) != 0 ? mediaView.mediaVolumeOn : z13;
        Integer num5 = (i11 & 64) != 0 ? mediaView.mediaOrientation : num;
        PortalFromNativeContextManager.Event event4 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? mediaView.mediaPortalEvent : event2;
        boolean z21 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? mediaView.mediaCanPlayInline : z14;
        boolean z22 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? mediaView.mediaPlayThirdParty : z15;
        boolean z23 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? mediaView.mediaHidePlayButton : z16;
        int i12 = (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? mediaView.mediaThumbnailFadeDuration : i10;
        Function0<Unit> function02 = (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? mediaView.mediaOnPlayCallback : function0;
        String str2 = (i11 & 8192) != 0 ? mediaView.overlayTagText : str;
        MediaSource mediaSource3 = mediaSource2;
        ReactAsset reactAsset2 = (i11 & 16384) != 0 ? mediaView.overlayTagIcon : reactAsset;
        Integer num6 = (i11 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? mediaView.overlayTagBackgroundColor : num2;
        Integer num7 = (i11 & 65536) != 0 ? mediaView.overlayTagTextColor : num3;
        if ((i11 & 131072) != 0) {
            num4 = num7;
            playerSettings2 = mediaView.playerSettings;
        } else {
            playerSettings2 = playerSettings;
            num4 = num7;
        }
        mediaView.setMediaData(mediaSource3, z17, z18, z19, event3, z20, num5, event4, z21, z22, z23, i12, function02, str2, reactAsset2, num6, num4, playerSettings2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setMediaData$lambda$9(MediaView mediaView, boolean z10, MediaSource mediaSource, View view) {
        Double portal;
        float f10;
        MediaPlayer mediaPlayer = mediaView.mediaPlayer;
        if (mediaPlayer != null) {
            if (z10) {
                f10 = 0.0f;
            } else {
                f10 = 1.0f;
            }
            mediaPlayer.setVolume(f10);
        }
        if (mediaSource != null && (portal = mediaSource.getPortal()) != null) {
            double doubleValue = portal.doubleValue();
            MediaPlayerManagerModule mediaPlayerManagerModule = mediaView.managerModule;
            if (mediaPlayerManagerModule != null) {
                mediaPlayerManagerModule.onMuteToggle(doubleValue, z10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void setOnMediaClickListeners$lambda$10(MediaView mediaView, View.OnClickListener onClickListener, View view) {
        Double d10;
        if (mediaView.mediaCanPlayInline && !mediaView.mediaPlayThirdParty) {
            MediaSource mediaSource = mediaView.mediaSource;
            if (mediaSource != null) {
                d10 = mediaSource.getPortal();
            } else {
                d10 = null;
            }
            if (d10 != null) {
                mediaView.prepareAndPlay();
            }
        }
        mediaView.registerForPortal();
        onClickListener.onClick(mediaView);
    }

    private final void setupTag(boolean z10, String str, ReactAsset reactAsset, Integer num, Integer num2) {
        int i10;
        int i11;
        ConstraintLayout constraintLayout = this.binding.overlayTag;
        Intrinsics.checkNotNull(constraintLayout);
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        constraintLayout.setVisibility(i10);
        if (num != null) {
            constraintLayout.setBackgroundTintList(ColorStateList.valueOf(num.intValue()));
        }
        ConstraintLayout overlayTag = this.binding.overlayTag;
        Intrinsics.checkNotNullExpressionValue(overlayTag, "overlayTag");
        if (overlayTag.getVisibility() == 0) {
            if (num2 != null) {
                i11 = num2.intValue();
            } else {
                i11 = R.color.white_500;
            }
            SimpleDraweeView simpleDraweeView = this.binding.overlayTagIcon;
            if (reactAsset != null) {
                Intrinsics.checkNotNull(simpleDraweeView);
                simpleDraweeView.setVisibility(0);
                ReactAssetUtilsKt.setReactAsset(simpleDraweeView, reactAsset);
                ColorUtilsKt.setTintColor(simpleDraweeView, Integer.valueOf(i11));
            } else {
                Intrinsics.checkNotNull(simpleDraweeView);
                simpleDraweeView.setVisibility(8);
            }
            TextView textView = this.binding.overlayTagText;
            textView.setTextColor(i11);
            textView.setText(str);
        }
    }

    private final void togglePortalControl(boolean z10) {
        Double portal;
        MediaSource mediaSource = this.mediaSource;
        if (mediaSource != null && (portal = mediaSource.getPortal()) != null) {
            double doubleValue = portal.doubleValue();
            MediaPlayerManagerModule mediaPlayerManagerModule = this.managerModule;
            if (mediaPlayerManagerModule != null) {
                mediaPlayerManagerModule.toggle(doubleValue, z10);
            }
        }
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        ReactContext reactContext = getReactContext();
        if (reactContext != null) {
            reactContext.addLifecycleEventListener(this.lifecycleListener);
        }
        gs.i.d(CoroutineViewUtilsKt.attachedScope(this, true), null, null, new MediaView$onAttachedToWindow$1(this, null), 3, null);
        gs.i.d(CoroutineViewUtilsKt.attachedScope(this, true), null, null, new MediaView$onAttachedToWindow$2(this, null), 3, null);
    }

    @Override // android.view.View
    protected void onConfigurationChanged(Configuration configuration) {
        Integer num;
        super.onConfigurationChanged(configuration);
        if (configuration != null) {
            num = Integer.valueOf(configuration.orientation);
        } else {
            num = null;
        }
        setMediaData$default(this, null, false, false, false, null, false, num, null, false, false, false, 0, null, null, null, null, null, null, 262079, null);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        ReactContext reactContext = getReactContext();
        if (reactContext != null) {
            reactContext.removeLifecycleEventListener(this.lifecycleListener);
        }
    }

    public final void setAnalyticsListener(@NotNull Function1<? super MediaPlayFinishedAnalytics, Unit> onMediaPlayFinishedAnalytics) {
        Intrinsics.checkNotNullParameter(onMediaPlayFinishedAnalytics, "onMediaPlayFinishedAnalytics");
        this.onMediaPlayFinishedAnalytics = onMediaPlayFinishedAnalytics;
    }

    /* JADX WARN: Removed duplicated region for block: B:119:0x01ee  */
    /* JADX WARN: Removed duplicated region for block: B:120:0x01f0  */
    /* JADX WARN: Removed duplicated region for block: B:132:0x021f  */
    /* JADX WARN: Removed duplicated region for block: B:141:0x0234  */
    /* JADX WARN: Removed duplicated region for block: B:142:0x0236  */
    /* JADX WARN: Removed duplicated region for block: B:145:0x0244  */
    /* JADX WARN: Removed duplicated region for block: B:146:0x0247  */
    /* JADX WARN: Removed duplicated region for block: B:149:0x0264  */
    /* JADX WARN: Removed duplicated region for block: B:150:0x0267  */
    /* JADX WARN: Removed duplicated region for block: B:153:0x028c A[ADDED_TO_REGION] */
    /* JADX WARN: Removed duplicated region for block: B:162:0x02ab  */
    /* JADX WARN: Removed duplicated region for block: B:167:0x02b8 A[ADDED_TO_REGION] */
    /* JADX WARN: Removed duplicated region for block: B:176:0x02cc  */
    /* JADX WARN: Removed duplicated region for block: B:177:0x02d1  */
    /* JADX WARN: Removed duplicated region for block: B:182:0x02f8  */
    /* JADX WARN: Removed duplicated region for block: B:189:0x030a  */
    /* JADX WARN: Removed duplicated region for block: B:202:0x032c A[ADDED_TO_REGION] */
    /* JADX WARN: Removed duplicated region for block: B:210:0x033e  */
    /* JADX WARN: Removed duplicated region for block: B:225:0x0366  */
    /* JADX WARN: Removed duplicated region for block: B:230:0x0373  */
    /* JADX WARN: Removed duplicated region for block: B:236:0x0388  */
    /* JADX WARN: Removed duplicated region for block: B:98:0x01b7  */
    /* JADX WARN: Removed duplicated region for block: B:99:0x01b9  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void setMediaData(final com.discord.media_player.MediaSource r22, boolean r23, boolean r24, boolean r25, com.discord.media_player.MediaPlayer.Event r26, final boolean r27, java.lang.Integer r28, com.discord.portals.from_native.PortalFromNativeContextManager.Event r29, boolean r30, boolean r31, boolean r32, int r33, @org.jetbrains.annotations.NotNull kotlin.jvm.functions.Function0<kotlin.Unit> r34, java.lang.String r35, com.discord.react_asset_fetcher.ReactAsset r36, java.lang.Integer r37, java.lang.Integer r38, @org.jetbrains.annotations.NotNull com.discord.media_player.MediaPlayer.PlayerSettings r39) {
        /*
            Method dump skipped, instructions count: 926
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.view.MediaView.setMediaData(com.discord.media_player.MediaSource, boolean, boolean, boolean, com.discord.media_player.MediaPlayer$Event, boolean, java.lang.Integer, com.discord.portals.from_native.PortalFromNativeContextManager$Event, boolean, boolean, boolean, int, kotlin.jvm.functions.Function0, java.lang.String, com.discord.react_asset_fetcher.ReactAsset, java.lang.Integer, java.lang.Integer, com.discord.media_player.MediaPlayer$PlayerSettings):void");
    }

    public final void setOnMediaClickListeners(final View.OnClickListener onClickListener, View.OnLongClickListener onLongClickListener) {
        View.OnClickListener onClickListener2;
        if (onClickListener != null) {
            onClickListener2 = new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.l2
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    MediaView.setOnMediaClickListeners$lambda$10(MediaView.this, onClickListener, view);
                }
            };
        } else {
            onClickListener2 = null;
        }
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(this, false, onClickListener2, 1, null);
        NestedScrollOnTouchUtilsKt.setOnLongClickListenerNested$default(this, false, onLongClickListener, 1, null);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public MediaView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ MediaView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Type inference failed for: r1v1, types: [com.discord.chat.presentation.message.view.MediaView$lifecycleListener$1] */
    public MediaView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        MediaViewBinding inflate = MediaViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        this.mediaViewFocused = true;
        this.mediaViewDetached = true;
        this.mediaCanPlayInline = true;
        this.mediaThumbnailFadeDuration = getResources().getInteger(com.discord.image.fresco.R.integer.image_fade_duration);
        this.mediaOnPlayCallback = new Function0() { // from class: com.discord.chat.presentation.message.view.m2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit unit;
                unit = Unit.f33298a;
                return unit;
            }
        };
        this.onMediaPlayFinishedAnalytics = new Function1() { // from class: com.discord.chat.presentation.message.view.n2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit onMediaPlayFinishedAnalytics$lambda$1;
                onMediaPlayFinishedAnalytics$lambda$1 = MediaView.onMediaPlayFinishedAnalytics$lambda$1((MediaPlayFinishedAnalytics) obj);
                return onMediaPlayFinishedAnalytics$lambda$1;
            }
        };
        this.playerSettings = MediaPlayer.Factory.getDefaultSettings();
        ThemedReactContext themedReactContext = (ThemedReactContext) (!(context instanceof ThemedReactContext) ? null : context);
        this.managerModule = themedReactContext != null ? (MediaPlayerManagerModule) themedReactContext.getNativeModule(MediaPlayerManagerModule.class) : null;
        ViewAttachedListener viewAttachedListener = new ViewAttachedListener(this, new Function1() { // from class: com.discord.chat.presentation.message.view.o2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit attachStateChangeListener$lambda$2;
                attachStateChangeListener$lambda$2 = MediaView.attachStateChangeListener$lambda$2(MediaView.this, ((Boolean) obj).booleanValue());
                return attachStateChangeListener$lambda$2;
            }
        }, new Function1() { // from class: com.discord.chat.presentation.message.view.p2
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit attachStateChangeListener$lambda$3;
                attachStateChangeListener$lambda$3 = MediaView.attachStateChangeListener$lambda$3(MediaView.this, ((Boolean) obj).booleanValue());
                return attachStateChangeListener$lambda$3;
            }
        });
        this.attachStateChangeListener = viewAttachedListener;
        this.lifecycleListener = new LifecycleEventListener() { // from class: com.discord.chat.presentation.message.view.MediaView$lifecycleListener$1
            @Override // com.facebook.react.bridge.LifecycleEventListener
            public void onHostDestroy() {
            }

            @Override // com.facebook.react.bridge.LifecycleEventListener
            public void onHostPause() {
                MediaView.setMediaData$default(MediaView.this, null, false, false, false, null, false, null, null, false, false, false, 0, null, null, null, null, null, null, 262135, null);
            }

            @Override // com.facebook.react.bridge.LifecycleEventListener
            public void onHostResume() {
                MediaView.setMediaData$default(MediaView.this, null, false, false, true, null, false, null, null, false, false, false, 0, null, null, null, null, null, null, 262135, null);
            }
        };
        addOnAttachStateChangeListener(viewAttachedListener);
        ImageView imageView = inflate.inlineMediaPlayButton;
        Intrinsics.checkNotNull(imageView);
        ViewBackgroundUtilsKt.setBackgroundOval$default(imageView, -16777216, 0, 2, null);
        ColorUtilsKt.setTintColor(imageView, (Integer) (-1));
        I18nUtilsKt.i18nContentDescription$default(imageView, I18nMessage.PLAY_FULL_VIDEO, (Function1) null, 2, (Object) null);
        SimpleDraweeView inlineMediaGifIndicator = inflate.inlineMediaGifIndicator;
        Intrinsics.checkNotNullExpressionValue(inlineMediaGifIndicator, "inlineMediaGifIndicator");
        ReactAssetUtilsKt.setReactAsset(inlineMediaGifIndicator, ReactAsset.Gif);
        SimpleDraweeView simpleDraweeView = inflate.inlineMediaImagePreview;
        ((GenericDraweeHierarchy) simpleDraweeView.getHierarchy()).z(new ColorDrawable(ThemeManagerKt.getTheme().getBackgroundModNormal()));
        ((GenericDraweeHierarchy) simpleDraweeView.getHierarchy()).t(ScalingUtils$ScaleType.f11037e);
        GradientDrawable gradientDrawable = new GradientDrawable();
        gradientDrawable.setShape(0);
        gradientDrawable.setStroke(simpleDraweeView.getResources().getDimensionPixelSize(com.discord.chat.R.dimen.message_media_view_stroke), ColorUtilsKt.getColorCompat(context, com.discord.chat.R.color.chat_media_view_stroke));
        ((GenericDraweeHierarchy) simpleDraweeView.getHierarchy()).y(gradientDrawable);
    }
}
