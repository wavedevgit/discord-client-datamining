package com.discord.chat.presentation.message.view.voicemessages;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Paint;
import android.graphics.drawable.ShapeDrawable;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.accessibility.AccessibilityEvent;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.h0;
import com.discord.SetTextSizeSpKt;
import com.discord.chat.R;
import com.discord.chat.bridge.attachment.Attachment;
import com.discord.chat.databinding.AudioPlayerViewBinding;
import com.discord.chat.presentation.message.messagepart.AudioAttachmentMessageAccessory;
import com.discord.chat.presentation.message.view.AttachmentUploadOverlayView;
import com.discord.chat.presentation.message.view.UploadItemProps;
import com.discord.chat.presentation.message.view.media.ViewAttachedListener;
import com.discord.chat.presentation.message.view.voicemessages.AudioPlayerManager;
import com.discord.chat.presentation.message.view.voicemessages.AudioProgressView;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.media_player.MediaPlayer;
import com.discord.misc.utilities.coroutines.CoroutineViewUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewClippingUtilsKt;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.react_strings.I18nMessage;
import com.discord.react_strings.I18nUtilsKt;
import com.discord.react_strings.RenderContext;
import com.discord.theme.DiscordThemeObject;
import com.discord.theme.ThemeManager;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.react.uimanager.ViewProps;
import java.util.Arrays;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.time.Duration;
import kotlinx.coroutines.Job;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000®\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0012\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\r\n\u0002\b\u0012\u0018\u0000 p2\u00020\u0001:\u0002opB'\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\b\u00106\u001a\u000207H\u0003J\u000e\u00108\u001a\u0002072\u0006\u00109\u001a\u00020:J\u000e\u0010;\u001a\u0002072\u0006\u0010\u001a\u001a\u00020\u001bJ\u0006\u0010<\u001a\u000207J\u000e\u0010\u001d\u001a\u0002072\u0006\u0010\u001d\u001a\u00020\u001eJ\u000e\u0010=\u001a\u0002072\u0006\u0010>\u001a\u00020?J\u000e\u0010@\u001a\u0002072\u0006\u0010A\u001a\u00020BJ\u000e\u0010C\u001a\u0002072\u0006\u00104\u001a\u000205J\u0010\u0010D\u001a\u0002072\b\u0010E\u001a\u0004\u0018\u00010FJ\u0015\u0010G\u001a\u0002072\b\u0010H\u001a\u0004\u0018\u00010\u0007¢\u0006\u0002\u0010IJ\u0010\u0010J\u001a\u0002072\u0006\u0010\u0018\u001a\u00020\u0019H\u0002J\u0010\u0010K\u001a\u0002072\u0006\u0010\u0018\u001a\u00020\u0019H\u0002J\u0010\u0010L\u001a\u0002072\u0006\u0010\u0018\u001a\u00020\u0019H\u0002J\u0010\u0010M\u001a\u0002072\u0006\u0010N\u001a\u00020OH\u0002J\u0010\u0010P\u001a\u0002072\u0006\u0010\u0018\u001a\u00020\u0019H\u0002J\b\u0010Q\u001a\u000207H\u0002J\u0010\u0010R\u001a\u0002072\u0006\u0010S\u001a\u00020\u001eH\u0002J\b\u0010T\u001a\u000207H\u0002J\u0010\u0010U\u001a\u0002072\u0006\u0010\u0018\u001a\u00020\u0019H\u0002J\f\u0010V\u001a\u00020W*\u00020\u0007H\u0002J\f\u0010X\u001a\u00020W*\u00020\u0007H\u0002J\f\u0010Y\u001a\u00020\u0007*\u00020\u001bH\u0002J#\u0010Z\u001a\u0002072\n\b\u0002\u0010[\u001a\u0004\u0018\u00010\u001b2\b\b\u0002\u0010\\\u001a\u00020\u001eH\u0002¢\u0006\u0002\u0010]J \u0010^\u001a\u00020_2\u0006\u0010\\\u001a\u00020\u001e2\u0006\u0010`\u001a\u00020\u00072\u0006\u0010a\u001a\u00020\u0007H\u0002J\u001a\u0010b\u001a\u0002072\u0006\u0010\u0018\u001a\u00020\u00192\b\b\u0002\u0010c\u001a\u00020\u001eH\u0002J\u001c\u0010d\u001a\u0002072\b\b\u0002\u0010\u0018\u001a\u00020\u00192\b\b\u0002\u0010e\u001a\u00020\u001eH\u0002J\u0010\u0010f\u001a\u0002072\u0006\u0010g\u001a\u00020\u001eH\u0002J\b\u0010i\u001a\u000207H\u0002J\b\u0010j\u001a\u000207H\u0002J\u000f\u0010k\u001a\u0004\u0018\u00010\u001bH\u0002¢\u0006\u0002\u0010lJ\u0012\u0010m\u001a\u0002072\b\u0010n\u001a\u0004\u0018\u00010WH\u0002R\u0011\u0010\n\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u001c\u0010\u000e\u001a\u0004\u0018\u00010\u000fX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0010\u0010\u0011\"\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0014\u001a\u00020\u00158BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u0016\u0010\u0017R\u000e\u0010\u0018\u001a\u00020\u0019X\u0082\u000e¢\u0006\u0002\n\u0000R\u0012\u0010\u001a\u001a\u0004\u0018\u00010\u001bX\u0082\u000e¢\u0006\u0004\n\u0002\u0010\u001cR\u000e\u0010\u001d\u001a\u00020\u001eX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u001f\u001a\u0004\u0018\u00010 X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010!\u001a\u0004\u0018\u00010 X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\"\u001a\u0004\u0018\u00010 X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010#\u001a\u00020\u001eX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010$\u001a\u00020\u001eX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010%\u001a\u00020\u001eX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010&\u001a\u00020'X\u0082\u0004¢\u0006\u0002\n\u0000R#\u0010(\u001a\n **\u0004\u0018\u00010)0)8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b-\u0010.\u001a\u0004\b+\u0010,R\u001b\u0010/\u001a\u0002008BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b3\u0010.\u001a\u0004\b1\u00102R\u0010\u00104\u001a\u0004\u0018\u000105X\u0082\u000e¢\u0006\u0002\n\u0000R\u0012\u0010h\u001a\u0004\u0018\u00010\u001bX\u0082\u000e¢\u0006\u0004\n\u0002\u0010\u001c¨\u0006q"}, d2 = {"Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerView;", "Landroid/widget/FrameLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "defStyleAttr", "", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "binding", "Lcom/discord/chat/databinding/AudioPlayerViewBinding;", "getBinding", "()Lcom/discord/chat/databinding/AudioPlayerViewBinding;", "listener", "Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerView$Listener;", "getListener", "()Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerView$Listener;", "setListener", "(Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerView$Listener;)V", "audioProgressView", "Lcom/discord/chat/presentation/message/view/voicemessages/AudioProgressView;", "getAudioProgressView", "()Lcom/discord/chat/presentation/message/view/voicemessages/AudioProgressView;", "state", "Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerViewState;", "durationMs", "", "Ljava/lang/Long;", "shouldAnimate", "", "durationJob", "Lkotlinx/coroutines/Job;", "playerJob", "resetJob", "isScrubbingEnabled", "wasPlayingBeforeBeingPaused", "uploadFinished", "attachStateChangeListener", "Lcom/discord/chat/presentation/message/view/media/ViewAttachedListener;", "bounceAnimator", "Landroid/view/animation/Animation;", "kotlin.jvm.PlatformType", "getBounceAnimator", "()Landroid/view/animation/Animation;", "bounceAnimator$delegate", "Lkotlin/Lazy;", "animatorManager", "Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerWipeAnimatorManager;", "getAnimatorManager", "()Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerWipeAnimatorManager;", "animatorManager$delegate", "onLongPress", "Landroid/view/View$OnLongClickListener;", "configureGestures", "", "setSourceUrl", "accessory", "Lcom/discord/chat/presentation/message/messagepart/AudioAttachmentMessageAccessory;", "setDurationMs", "setUnknownDuration", "setSampleData", "sampleData", "", "setAudioFileDetails", "attachment", "Lcom/discord/chat/bridge/attachment/Attachment;", "setOnLongPress", "setUploadProgress", "uploadItemProps", "Lcom/discord/chat/presentation/message/view/UploadItemProps;", "setContainerBackgroundColor", ViewProps.COLOR, "(Ljava/lang/Integer;)V", "configurePlayButton", "prepareAudio", "configureLoading", "onAudioProgressChange", "progressEvent", "Lcom/discord/chat/presentation/message/view/voicemessages/AudioProgressEvent;", "configureAudioProgressView", "pauseForScrubbing", "toggleDurationEmitter", "shouldEmit", "configureProgress", "configureAudioDetails", "timeRemainingText", "", "timeRemainingAccessibilityText", "toSeconds", "configureDuration", "overrideDuration", "isPlaying", "(Ljava/lang/Long;Z)V", "getA11yAudioProgressDescription", "", "durationSecs", "timeRemaining", "configurePlayerState", "hasSourceChanged", "setState", "forceRefresh", "reset", "logDuration", "startTimeMS", "maybeLogPlaybackStarted", "maybeLogPlaybackEnded", "getCurrentPosition", "()Ljava/lang/Long;", "maybeLogPlaybackFailed", "errorMessage", "Listener", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nAudioPlayerView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AudioPlayerView.kt\ncom/discord/chat/presentation/message/view/voicemessages/AudioPlayerView\n+ 2 View.kt\nandroidx/core/view/ViewKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,740:1\n176#2,2:741\n255#2:743\n257#2,2:744\n257#2,2:746\n297#2:749\n255#2:750\n257#2,2:751\n1#3:748\n*S KotlinDebug\n*F\n+ 1 AudioPlayerView.kt\ncom/discord/chat/presentation/message/view/voicemessages/AudioPlayerView\n*L\n139#1:741,2\n84#1:743\n387#1:744,2\n451#1:746,2\n533#1:749\n600#1:750\n390#1:751,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AudioPlayerView extends FrameLayout {
    @NotNull
    public static final Companion Companion = new Companion(null);
    public static final long RESET_DELAY_MS = 500;
    @NotNull
    private final Lazy animatorManager$delegate;
    @NotNull
    private final ViewAttachedListener attachStateChangeListener;
    @NotNull
    private final AudioPlayerViewBinding binding;
    @NotNull
    private final Lazy bounceAnimator$delegate;
    private Job durationJob;
    private Long durationMs;
    private boolean isScrubbingEnabled;
    private Listener listener;
    private View.OnLongClickListener onLongPress;
    private Job playerJob;
    private Job resetJob;
    private boolean shouldAnimate;
    private Long startTimeMS;
    @NotNull
    private AudioPlayerViewState state;
    private boolean uploadFinished;
    private boolean wasPlayingBeforeBeingPaused;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\t\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerView$Companion;", "", "<init>", "()V", "RESET_DELAY_MS", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0002\b\u0002\bf\u0018\u0000 \f2\u00020\u0001:\u0001\fJ\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H&J\u0018\u0010\u0006\u001a\u00020\u00032\u0006\u0010\u0007\u001a\u00020\u00052\u0006\u0010\b\u001a\u00020\u0005H&J\u0012\u0010\t\u001a\u00020\u00032\b\u0010\n\u001a\u0004\u0018\u00010\u000bH&¨\u0006\r"}, d2 = {"Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerView$Listener;", "", "mediaAttachmentPlaybackStarted", "", "startedDurationSecs", "", "mediaAttachmentPlaybackEnded", "endDurationSecs", "durationListeningSecs", "voiceMessagePlaybackFailed", "errorMessage", "", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface Listener {
        @NotNull
        public static final Companion Companion = Companion.$$INSTANCE;

        @Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0000\n\u0002\u0010\t\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007¨\u0006\b"}, d2 = {"Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerView$Listener$Companion;", "", "<init>", "()V", "secondsSinceStart", "", "startTimeMS", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            static final /* synthetic */ Companion $$INSTANCE = new Companion();

            private Companion() {
            }

            public final float secondsSinceStart(long j10) {
                Duration.a aVar = Duration.f35055e;
                return (float) Duration.J(((Duration) kotlin.ranges.d.f(Duration.h(kotlin.time.b.t(System.currentTimeMillis() - j10, ms.b.f38331o)), Duration.h(Duration.f35055e.c()))).O(), ms.b.f38332p);
            }
        }

        void mediaAttachmentPlaybackEnded(float f10, float f11);

        void mediaAttachmentPlaybackStarted(float f10);

        void voiceMessagePlaybackFailed(String str);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public AudioPlayerView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void _init_$lambda$8(AudioPlayerView audioPlayerView, View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        boolean isPlaying$chat_release = audioPlayerView.state.isPlaying$chat_release(audioPlayerView.wasPlayingBeforeBeingPaused);
        if (isPlaying$chat_release) {
            audioPlayerView.getAnimatorManager().startAnimator(isPlaying$chat_release, false);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final AudioPlayerWipeAnimatorManager animatorManager_delegate$lambda$3(Context context, AudioPlayerView audioPlayerView) {
        return new AudioPlayerWipeAnimatorManager(context, audioPlayerView.binding);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit attachStateChangeListener$lambda$0(AudioPlayerView audioPlayerView, boolean z10) {
        Job d10;
        Job job = audioPlayerView.playerJob;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        if (z10) {
            d10 = os.i.d(CoroutineViewUtilsKt.getAttachedScope(audioPlayerView), null, null, new AudioPlayerView$attachStateChangeListener$1$1(audioPlayerView, null), 3, null);
            audioPlayerView.playerJob = d10;
        }
        setState$default(audioPlayerView, AudioPlayerViewState.copy$default(audioPlayerView.state, null, z10, 1, null), false, 2, null);
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Animation bounceAnimator_delegate$lambda$2(Context context) {
        Animation loadAnimation = AnimationUtils.loadAnimation(context, R.anim.bounce);
        loadAnimation.setDuration(100L);
        loadAnimation.start();
        return loadAnimation;
    }

    private final void configureAudioDetails(AudioPlayerViewState audioPlayerViewState) {
        boolean z10;
        int interactiveTextDefault;
        LinearLayout audioDetailsView = this.binding.audioDetailsView;
        Intrinsics.checkNotNullExpressionValue(audioDetailsView, "audioDetailsView");
        if (audioDetailsView.getVisibility() == 8) {
            return;
        }
        MediaPlayer player$chat_release = audioPlayerViewState.getPlayer$chat_release();
        if (player$chat_release != null) {
            z10 = player$chat_release.isPlaying();
        } else {
            z10 = false;
        }
        DiscordThemeObject theme = ThemeManagerKt.getTheme();
        if (z10) {
            interactiveTextDefault = theme.getWhite();
        } else {
            interactiveTextDefault = theme.getInteractiveTextDefault();
        }
        this.binding.audioFileName.setTextColor(interactiveTextDefault);
        this.binding.audioFileSize.setTextColor(interactiveTextDefault);
        this.binding.audioProgressBar.setPlaying(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void configureAudioProgressView(AudioPlayerViewState audioPlayerViewState) {
        int interactiveTextDefault;
        Float f10;
        AudioProgressView audioProgressView = getAudioProgressView();
        if (audioPlayerViewState.isPlaying$chat_release(this.wasPlayingBeforeBeingPaused)) {
            interactiveTextDefault = getContext().getColor(com.discord.theme.R.color.brand_430);
        } else if (audioPlayerViewState.getCurrentProgress$chat_release() != null) {
            interactiveTextDefault = ThemeManagerKt.getTheme().getBackgroundModMuted();
        } else {
            interactiveTextDefault = ThemeManagerKt.getTheme().getInteractiveTextDefault();
        }
        audioProgressView.setDefaultPaintColor(interactiveTextDefault);
        MediaPlayer player$chat_release = audioPlayerViewState.getPlayer$chat_release();
        if (player$chat_release != null) {
            f10 = Float.valueOf(player$chat_release.currentPositionPercentage());
        } else {
            f10 = null;
        }
        if (f10 != null) {
            AudioProgressView.DefaultImpls.setAudioProgress$default(getAudioProgressView(), f10.floatValue(), false, 2, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:30:0x008c  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void configureDuration(java.lang.Long r8, boolean r9) {
        /*
            r7 = this;
            r0 = 0
            r1 = 0
            if (r8 == 0) goto La
        L5:
            long r3 = r8.longValue()
            goto L30
        La:
            com.discord.chat.presentation.message.view.voicemessages.AudioPlayerViewState r8 = r7.state
            com.discord.media_player.MediaPlayer r8 = r8.getPlayer$chat_release()
            if (r8 == 0) goto L2c
            long r3 = r8.durationMs()
            int r3 = (r3 > r1 ? 1 : (r3 == r1 ? 0 : -1))
            if (r3 <= 0) goto L1b
            goto L1c
        L1b:
            r8 = r0
        L1c:
            if (r8 == 0) goto L2c
            long r3 = r8.durationMs()
            long r5 = r8.currentPositionMs()
            long r3 = r3 - r5
            java.lang.Long r8 = java.lang.Long.valueOf(r3)
            goto L2d
        L2c:
            r8 = r0
        L2d:
            if (r8 == 0) goto L8c
            goto L5
        L30:
            int r8 = r7.toSeconds(r3)
            java.lang.Long r3 = r7.durationMs
            if (r3 != 0) goto L55
            com.discord.chat.presentation.message.view.voicemessages.AudioPlayerViewState r3 = r7.state
            com.discord.media_player.MediaPlayer r3 = r3.getPlayer$chat_release()
            if (r3 == 0) goto L55
            long r4 = r3.durationMs()
            int r4 = (r4 > r1 ? 1 : (r4 == r1 ? 0 : -1))
            if (r4 <= 0) goto L49
            r0 = r3
        L49:
            if (r0 == 0) goto L55
            long r3 = r0.durationMs()
            java.lang.Long r0 = java.lang.Long.valueOf(r3)
            r7.durationMs = r0
        L55:
            java.lang.Long r0 = r7.durationMs
            if (r0 == 0) goto L5d
            long r1 = r0.longValue()
        L5d:
            int r0 = r7.toSeconds(r1)
            com.discord.chat.databinding.AudioPlayerViewBinding r1 = r7.binding
            android.widget.LinearLayout r1 = r1.audioProgressView
            java.lang.CharSequence r9 = r7.getA11yAudioProgressDescription(r9, r0, r8)
            r1.setContentDescription(r9)
            com.discord.chat.databinding.AudioPlayerViewBinding r9 = r7.binding
            com.facebook.drawee.span.SimpleDraweeSpanTextView r9 = r9.text
            java.lang.String r8 = r7.timeRemainingText(r8)
            java.lang.StringBuilder r0 = new java.lang.StringBuilder
            r0.<init>()
            java.lang.String r1 = "  "
            r0.append(r1)
            r0.append(r8)
            r0.append(r1)
            java.lang.String r8 = r0.toString()
            r9.setText(r8)
            return
        L8c:
            com.discord.chat.databinding.AudioPlayerViewBinding r8 = r7.binding
            com.facebook.drawee.span.SimpleDraweeSpanTextView r8 = r8.text
            java.lang.String r9 = "  --:--  "
            r8.setText(r9)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.view.voicemessages.AudioPlayerView.configureDuration(java.lang.Long, boolean):void");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void configureDuration$default(AudioPlayerView audioPlayerView, Long l10, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            l10 = null;
        }
        if ((i10 & 2) != 0) {
            z10 = true;
        }
        audioPlayerView.configureDuration(l10, z10);
    }

    @SuppressLint({"ClickableViewAccessibility"})
    private final void configureGestures() {
        this.binding.audioProgressView.setOnTouchListener(new AudioPlayerView$configureGestures$onTouchListener$1(this));
    }

    /* JADX WARN: Code restructure failed: missing block: B:7:0x0021, code lost:
        if (r4.shouldPlay() == true) goto L7;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final void configureLoading(com.discord.chat.presentation.message.view.voicemessages.AudioPlayerViewState r4) {
        /*
            r3 = this;
            com.discord.chat.databinding.AudioPlayerViewBinding r0 = r3.binding
            android.widget.ProgressBar r0 = r0.progress
            java.lang.String r1 = "progress"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)
            com.discord.media_player.MediaPlayer$Event r1 = r4.getMediaState$chat_release()
            com.discord.media_player.MediaPlayer$Event$BufferStart r2 = com.discord.media_player.MediaPlayer.Event.BufferStart.INSTANCE
            boolean r1 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r2)
            r2 = 0
            if (r1 == 0) goto L24
            com.discord.media_player.MediaPlayer r4 = r4.getPlayer$chat_release()
            if (r4 == 0) goto L24
            boolean r4 = r4.shouldPlay()
            r1 = 1
            if (r4 != r1) goto L24
            goto L25
        L24:
            r1 = r2
        L25:
            if (r1 == 0) goto L28
            goto L2a
        L28:
            r2 = 8
        L2a:
            r0.setVisibility(r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.presentation.message.view.voicemessages.AudioPlayerView.configureLoading(com.discord.chat.presentation.message.view.voicemessages.AudioPlayerViewState):void");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void configurePlayButton(final AudioPlayerViewState audioPlayerViewState) {
        View.OnClickListener onClickListener;
        final boolean isPlaying$chat_release = audioPlayerViewState.isPlaying$chat_release(this.wasPlayingBeforeBeingPaused);
        if (isPlaying$chat_release) {
            View view = this.binding.buttonContainer;
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            view.setContentDescription(I18nUtilsKt.i18nFormat$default(context, I18nMessage.PAUSE, null, 2, null));
            SimpleDraweeView button = this.binding.button;
            Intrinsics.checkNotNullExpressionValue(button, "button");
            ReactAssetUtilsKt.setReactAsset(button, ReactAsset.Pause);
            this.binding.button.setPadding(0, 0, 0, 0);
        } else {
            View view2 = this.binding.buttonContainer;
            Context context2 = getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            view2.setContentDescription(I18nUtilsKt.i18nFormat$default(context2, I18nMessage.PLAY, null, 2, null));
            SimpleDraweeView button2 = this.binding.button;
            Intrinsics.checkNotNullExpressionValue(button2, "button");
            ReactAssetUtilsKt.setReactAsset(button2, ReactAsset.Play);
            this.binding.button.setPadding(2, 0, 0, 0);
        }
        getAnimatorManager().startAnimator(isPlaying$chat_release, this.shouldAnimate);
        View buttonContainer = this.binding.buttonContainer;
        Intrinsics.checkNotNullExpressionValue(buttonContainer, "buttonContainer");
        if (audioPlayerViewState.getSourceUrl() != null) {
            onClickListener = new View.OnClickListener() { // from class: com.discord.chat.presentation.message.view.voicemessages.f
                @Override // android.view.View.OnClickListener
                public final void onClick(View view3) {
                    AudioPlayerView.configurePlayButton$lambda$12(AudioPlayerView.this, audioPlayerViewState, isPlaying$chat_release, view3);
                }
            };
        } else {
            onClickListener = null;
        }
        NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(buttonContainer, false, onClickListener, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void configurePlayButton$lambda$12(AudioPlayerView audioPlayerView, AudioPlayerViewState audioPlayerViewState, boolean z10, View view) {
        audioPlayerView.binding.buttonContainer.startAnimation(audioPlayerView.getBounceAnimator());
        if (audioPlayerViewState.getPlayer$chat_release() == null) {
            audioPlayerView.prepareAudio(audioPlayerViewState);
        } else if (!z10) {
            audioPlayerViewState.play$chat_release();
        } else {
            audioPlayerViewState.pause$chat_release();
        }
    }

    private final void configurePlayerState(AudioPlayerViewState audioPlayerViewState, boolean z10) {
        boolean areEqual = Intrinsics.areEqual(audioPlayerViewState.getMediaState$chat_release(), MediaPlayer.Event.PlaybackEnded.INSTANCE);
        boolean z11 = true;
        if ((z10 && !AudioPlayerManager.INSTANCE.hasCurrentPlayer(audioPlayerViewState.getAudioSource())) || areEqual) {
            reset(!areEqual);
        } else {
            setKeepScreenOn((Intrinsics.areEqual(audioPlayerViewState.getMediaState$chat_release(), MediaPlayer.Event.StartedPlaying.INSTANCE) && hasWindowFocus() && audioPlayerViewState.getAttached()) ? false : false);
        }
    }

    static /* synthetic */ void configurePlayerState$default(AudioPlayerView audioPlayerView, AudioPlayerViewState audioPlayerViewState, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        audioPlayerView.configurePlayerState(audioPlayerViewState, z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void configureProgress() {
        float f10;
        AudioProgressView audioProgressView = getAudioProgressView();
        MediaPlayer player$chat_release = this.state.getPlayer$chat_release();
        if (player$chat_release != null) {
            f10 = player$chat_release.currentPositionPercentage();
        } else {
            AudioPlayerManager.CurrentProgress currentProgress$chat_release = this.state.getCurrentProgress$chat_release();
            if (currentProgress$chat_release != null) {
                f10 = currentProgress$chat_release.getCurrentProgressPercentage();
            } else {
                f10 = 0.0f;
            }
        }
        audioProgressView.setAudioProgress(f10, true);
    }

    private final CharSequence getA11yAudioProgressDescription(boolean z10, final int i10, final int i11) {
        AudioWaveView wave = this.binding.wave;
        Intrinsics.checkNotNullExpressionValue(wave, "wave");
        if (wave.getVisibility() == 0) {
            if (z10) {
                Context context = getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                return I18nUtilsKt.i18nFormat(context, I18nMessage.VOICE_MESSAGES_PLAYING_A11Y_STATUS, new Function1() { // from class: com.discord.chat.presentation.message.view.voicemessages.k
                    @Override // kotlin.jvm.functions.Function1
                    public final Object invoke(Object obj) {
                        Unit a11yAudioProgressDescription$lambda$22;
                        a11yAudioProgressDescription$lambda$22 = AudioPlayerView.getA11yAudioProgressDescription$lambda$22(AudioPlayerView.this, i10, i11, (RenderContext) obj);
                        return a11yAudioProgressDescription$lambda$22;
                    }
                });
            }
            Context context2 = getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            return I18nUtilsKt.i18nFormat(context2, I18nMessage.VOICE_MESSAGES_A11Y_STATUS, new Function1() { // from class: com.discord.chat.presentation.message.view.voicemessages.l
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit a11yAudioProgressDescription$lambda$23;
                    a11yAudioProgressDescription$lambda$23 = AudioPlayerView.getA11yAudioProgressDescription$lambda$23(AudioPlayerView.this, i10, (RenderContext) obj);
                    return a11yAudioProgressDescription$lambda$23;
                }
            });
        } else if (z10) {
            Context context3 = getContext();
            Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
            return I18nUtilsKt.i18nFormat(context3, I18nMessage.AUDIO_FILE_PLAYING_VALUE, new Function1() { // from class: com.discord.chat.presentation.message.view.voicemessages.m
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit a11yAudioProgressDescription$lambda$24;
                    a11yAudioProgressDescription$lambda$24 = AudioPlayerView.getA11yAudioProgressDescription$lambda$24(AudioPlayerView.this, i10, i11, (RenderContext) obj);
                    return a11yAudioProgressDescription$lambda$24;
                }
            });
        } else {
            Context context4 = getContext();
            Intrinsics.checkNotNullExpressionValue(context4, "getContext(...)");
            return I18nUtilsKt.i18nFormat(context4, I18nMessage.AUDIO_FILE_NOT_PLAYING_VALUE, new Function1() { // from class: com.discord.chat.presentation.message.view.voicemessages.n
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit a11yAudioProgressDescription$lambda$25;
                    a11yAudioProgressDescription$lambda$25 = AudioPlayerView.getA11yAudioProgressDescription$lambda$25(AudioPlayerView.this, i10, (RenderContext) obj);
                    return a11yAudioProgressDescription$lambda$25;
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getA11yAudioProgressDescription$lambda$22(AudioPlayerView audioPlayerView, int i10, int i11, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("duration", audioPlayerView.timeRemainingAccessibilityText(i10));
        i18nFormat.getArgs().put("currentTime", audioPlayerView.timeRemainingAccessibilityText(i10 - i11));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getA11yAudioProgressDescription$lambda$23(AudioPlayerView audioPlayerView, int i10, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("duration", audioPlayerView.timeRemainingAccessibilityText(i10));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getA11yAudioProgressDescription$lambda$24(AudioPlayerView audioPlayerView, int i10, int i11, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("duration", audioPlayerView.timeRemainingAccessibilityText(i10));
        i18nFormat.getArgs().put("currentTime", audioPlayerView.timeRemainingAccessibilityText(i10 - i11));
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getA11yAudioProgressDescription$lambda$25(AudioPlayerView audioPlayerView, int i10, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("duration", audioPlayerView.timeRemainingAccessibilityText(i10));
        return Unit.f32056a;
    }

    private final AudioPlayerWipeAnimatorManager getAnimatorManager() {
        return (AudioPlayerWipeAnimatorManager) this.animatorManager$delegate.getValue();
    }

    private final AudioProgressView getAudioProgressView() {
        AudioWaveView wave = this.binding.wave;
        Intrinsics.checkNotNullExpressionValue(wave, "wave");
        if (wave.getVisibility() == 0) {
            AudioWaveView wave2 = this.binding.wave;
            Intrinsics.checkNotNullExpressionValue(wave2, "wave");
            return wave2;
        }
        AudioProgressBar audioProgressBar = this.binding.audioProgressBar;
        Intrinsics.checkNotNullExpressionValue(audioProgressBar, "audioProgressBar");
        return audioProgressBar;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Animation getBounceAnimator() {
        return (Animation) this.bounceAnimator$delegate.getValue();
    }

    private final Long getCurrentPosition() {
        MediaPlayer player$chat_release = this.state.getPlayer$chat_release();
        if (player$chat_release != null) {
            return Long.valueOf(player$chat_release.currentPositionMs());
        }
        AudioPlayerManager.CurrentProgress currentProgress$chat_release = this.state.getCurrentProgress$chat_release();
        if (currentProgress$chat_release != null) {
            return Long.valueOf(currentProgress$chat_release.getCurrentProgress());
        }
        return null;
    }

    private final void maybeLogPlaybackEnded() {
        Long currentPosition = getCurrentPosition();
        if (currentPosition != null) {
            long longValue = currentPosition.longValue();
            Long l10 = this.startTimeMS;
            if (l10 != null) {
                float secondsSinceStart = Listener.Companion.secondsSinceStart(l10.longValue());
                this.startTimeMS = null;
                Listener listener = this.listener;
                if (listener != null) {
                    Duration.a aVar = Duration.f35055e;
                    listener.mediaAttachmentPlaybackEnded((float) Duration.J(kotlin.time.b.t(longValue, ms.b.f38331o), ms.b.f38332p), secondsSinceStart);
                }
            }
        }
    }

    private final void maybeLogPlaybackFailed(String str) {
        Listener listener = this.listener;
        if (listener != null) {
            listener.voiceMessagePlaybackFailed(str);
        }
    }

    private final void maybeLogPlaybackStarted() {
        Long currentPosition = getCurrentPosition();
        if (currentPosition != null) {
            long longValue = currentPosition.longValue();
            this.startTimeMS = Long.valueOf(System.currentTimeMillis());
            Listener listener = this.listener;
            if (listener != null) {
                Duration.a aVar = Duration.f35055e;
                listener.mediaAttachmentPlaybackStarted((float) Duration.J(kotlin.time.b.t(longValue, ms.b.f38331o), ms.b.f38332p));
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void onAudioProgressChange(AudioProgressEvent audioProgressEvent) {
        long j10;
        Job job = this.resetJob;
        if (job != null) {
            Job.a.a(job, null, 1, null);
        }
        MediaPlayer player$chat_release = this.state.getPlayer$chat_release();
        int eventAction = audioProgressEvent.getEventAction();
        long j11 = 0;
        if (eventAction != 0) {
            if (eventAction == 1) {
                if (player$chat_release != null) {
                    toggleDurationEmitter(this.state.shouldEmitDuration$chat_release());
                    player$chat_release.seekTo(audioProgressEvent.getProgress() * ((float) player$chat_release.durationMs()));
                    if (this.wasPlayingBeforeBeingPaused) {
                        this.wasPlayingBeforeBeingPaused = false;
                        this.state.play$chat_release();
                    }
                } else {
                    AudioPlayerViewState audioPlayerViewState = this.state;
                    float progress = audioProgressEvent.getProgress();
                    Long l10 = this.durationMs;
                    if (l10 != null) {
                        j10 = l10.longValue();
                    } else {
                        j10 = 0;
                    }
                    audioPlayerViewState.setCurrentProgress$chat_release(progress, j10);
                }
            }
        } else {
            pauseForScrubbing();
        }
        float progress2 = 1 - audioProgressEvent.getProgress();
        if (player$chat_release != null) {
            j11 = player$chat_release.durationMs();
        }
        configureDuration$default(this, Long.valueOf(progress2 * ((float) j11)), false, 2, null);
        getAudioProgressView().setAudioProgress(audioProgressEvent.getProgress(), true);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void pauseForScrubbing() {
        MediaPlayer player$chat_release = this.state.getPlayer$chat_release();
        if (player$chat_release != null) {
            this.wasPlayingBeforeBeingPaused = player$chat_release.shouldPlay();
            this.state.pause$chat_release();
            toggleDurationEmitter(false);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void prepareAudio(AudioPlayerViewState audioPlayerViewState) {
        long j10;
        AudioPlayerManager.AudioSource audioSource = audioPlayerViewState.getAudioSource();
        if (audioSource == null) {
            return;
        }
        AudioPlayerManager audioPlayerManager = AudioPlayerManager.INSTANCE;
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Long l10 = this.durationMs;
        if (l10 != null) {
            j10 = l10.longValue();
        } else {
            j10 = 0;
        }
        audioPlayerManager.setupPlayer(context, audioSource, j10, new Function1() { // from class: com.discord.chat.presentation.message.view.voicemessages.j
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit prepareAudio$lambda$13;
                prepareAudio$lambda$13 = AudioPlayerView.prepareAudio$lambda$13(AudioPlayerView.this, (MediaPlayer.Event) obj);
                return prepareAudio$lambda$13;
            }
        });
        this.isScrubbingEnabled = true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit prepareAudio$lambda$13(AudioPlayerView audioPlayerView, MediaPlayer.Event event) {
        Intrinsics.checkNotNullParameter(event, "event");
        if (!Intrinsics.areEqual(event, MediaPlayer.Event.Paused.INSTANCE) && !Intrinsics.areEqual(event, MediaPlayer.Event.PlaybackEnded.INSTANCE)) {
            if (event instanceof MediaPlayer.Event.PlaybackError) {
                audioPlayerView.maybeLogPlaybackFailed(((MediaPlayer.Event.PlaybackError) event).getException().getMessage());
            } else if (Intrinsics.areEqual(event, MediaPlayer.Event.StartedPlaying.INSTANCE)) {
                audioPlayerView.maybeLogPlaybackStarted();
            }
        } else {
            audioPlayerView.maybeLogPlaybackEnded();
        }
        setState$default(audioPlayerView, null, true, 1, null);
        return Unit.f32056a;
    }

    private final void reset(boolean z10) {
        Job d10;
        boolean z11 = false;
        toggleDurationEmitter(false);
        MediaPlayer player$chat_release = this.state.getPlayer$chat_release();
        if (player$chat_release != null && player$chat_release.shouldPlay()) {
            z11 = true;
        }
        this.wasPlayingBeforeBeingPaused = z11;
        if (z10) {
            this.state.storeDuration$chat_release();
        }
        this.state.releasePlayer$chat_release();
        d10 = os.i.d(CoroutineViewUtilsKt.getAttachedScope(this), null, null, new AudioPlayerView$reset$1(this, null), 3, null);
        this.resetJob = d10;
        os.i.d(CoroutineViewUtilsKt.getAttachedScope(this), null, null, new AudioPlayerView$reset$2(this, null), 3, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setAudioFileDetails$lambda$9(Attachment attachment, RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("filename", attachment.getFilename());
        return Unit.f32056a;
    }

    private final synchronized void setState(AudioPlayerViewState audioPlayerViewState, boolean z10) {
        if (!z10) {
            if (Intrinsics.areEqual(this.state, audioPlayerViewState)) {
                return;
            }
        }
        boolean areEqual = Intrinsics.areEqual(audioPlayerViewState.getSourceUrl(), this.state.getSourceUrl());
        boolean z11 = !areEqual;
        if (!areEqual && AudioPlayerManager.INSTANCE.hasCurrentPlayer(audioPlayerViewState.getAudioSource())) {
            prepareAudio(audioPlayerViewState);
        }
        this.state = audioPlayerViewState;
        configurePlayButton(audioPlayerViewState);
        configureLoading(audioPlayerViewState);
        configureAudioProgressView(audioPlayerViewState);
        configureAudioDetails(audioPlayerViewState);
        toggleDurationEmitter(audioPlayerViewState.shouldEmitDuration$chat_release());
        configurePlayerState(audioPlayerViewState, z11);
    }

    static /* synthetic */ void setState$default(AudioPlayerView audioPlayerView, AudioPlayerViewState audioPlayerViewState, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            audioPlayerViewState = audioPlayerView.state;
        }
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        audioPlayerView.setState(audioPlayerViewState, z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setUploadProgress$lambda$11(AudioPlayerView audioPlayerView) {
        LinearLayout uploadOverlayBackground = audioPlayerView.binding.uploadOverlayBackground;
        Intrinsics.checkNotNullExpressionValue(uploadOverlayBackground, "uploadOverlayBackground");
        uploadOverlayBackground.setVisibility(8);
        audioPlayerView.uploadFinished = true;
        return Unit.f32056a;
    }

    private final String timeRemainingAccessibilityText(int i10) {
        if (i10 >= 60) {
            return timeRemainingText(i10);
        }
        return String.valueOf(i10);
    }

    private final String timeRemainingText(int i10) {
        String format = String.format("%01d:%02d", Arrays.copyOf(new Object[]{Integer.valueOf(i10 / 60), Integer.valueOf(i10 % 60)}, 2));
        Intrinsics.checkNotNullExpressionValue(format, "format(...)");
        return format;
    }

    private final int toSeconds(long j10) {
        Duration.a aVar = Duration.f35055e;
        return (int) Math.ceil(Duration.J(kotlin.time.b.t(j10, ms.b.f38331o), ms.b.f38332p));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void toggleDurationEmitter(boolean z10) {
        Job d10;
        Job job = this.durationJob;
        if (job != null) {
            Job.a.a(job, null, 1, null);
            Unit unit = Unit.f32056a;
        }
        this.durationJob = null;
        if (z10) {
            d10 = os.i.d(CoroutineViewUtilsKt.getAttachedScope(this), null, null, new AudioPlayerView$toggleDurationEmitter$2(this, null), 3, null);
            this.durationJob = d10;
        }
    }

    @NotNull
    public final AudioPlayerViewBinding getBinding() {
        return this.binding;
    }

    public final Listener getListener() {
        return this.listener;
    }

    public final void setAudioFileDetails(@NotNull final Attachment attachment) {
        Intrinsics.checkNotNullParameter(attachment, "attachment");
        this.binding.wave.setVisibility(8);
        this.binding.audioDetailsView.setVisibility(0);
        this.binding.audioFileName.setText(attachment.getFilename());
        this.binding.audioFileSize.setText(attachment.getSize());
        LinearLayout linearLayout = this.binding.playerContainer;
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        linearLayout.setContentDescription(I18nUtilsKt.i18nFormat(context, I18nMessage.AUDIO_FILE_A11Y_LABEL, new Function1() { // from class: com.discord.chat.presentation.message.view.voicemessages.h
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit audioFileDetails$lambda$9;
                audioFileDetails$lambda$9 = AudioPlayerView.setAudioFileDetails$lambda$9(Attachment.this, (RenderContext) obj);
                return audioFileDetails$lambda$9;
            }
        }));
    }

    public final void setContainerBackgroundColor(Integer num) {
        int embedBackground;
        LinearLayout linearLayout = this.binding.playerContainer;
        if (num != null) {
            embedBackground = num.intValue();
        } else {
            embedBackground = ThemeManagerKt.getTheme().getEmbedBackground();
        }
        linearLayout.setBackgroundColor(embedBackground);
    }

    public final void setDurationMs(long j10) {
        long j11;
        boolean z10;
        this.durationMs = Long.valueOf(j10);
        AudioPlayerManager.CurrentProgress currentProgress$chat_release = this.state.getCurrentProgress$chat_release();
        if (currentProgress$chat_release != null) {
            j11 = currentProgress$chat_release.getCurrentProgress();
        } else {
            j11 = 0;
        }
        AudioProgressView.DefaultImpls.setAudioProgress$default(getAudioProgressView(), ((float) j11) / ((float) j10), false, 2, null);
        if (this.state.getCurrentProgress$chat_release() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.isScrubbingEnabled = z10;
        this.binding.wave.setDuration(Long.valueOf(j10));
        configureDuration(Long.valueOf(j10 - j11), false);
    }

    public final void setListener(Listener listener) {
        this.listener = listener;
    }

    public final void setOnLongPress(@NotNull View.OnLongClickListener onLongPress) {
        Intrinsics.checkNotNullParameter(onLongPress, "onLongPress");
        this.onLongPress = onLongPress;
    }

    public final void setSampleData(@NotNull byte[] sampleData) {
        Intrinsics.checkNotNullParameter(sampleData, "sampleData");
        this.binding.wave.setVisibility(0);
        this.binding.audioDetailsView.setVisibility(8);
        this.binding.wave.setOriginalSampleData(sampleData);
        LinearLayout linearLayout = this.binding.playerContainer;
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        linearLayout.setContentDescription(I18nUtilsKt.i18nFormat$default(context, I18nMessage.VOICE_MESSAGES_A11Y_LABEL, null, 2, null));
    }

    public final void setSourceUrl(@NotNull AudioAttachmentMessageAccessory accessory) {
        Intrinsics.checkNotNullParameter(accessory, "accessory");
        this.isScrubbingEnabled = false;
        if (Intrinsics.areEqual(accessory.getAttachment().getUrl(), this.state.getSourceUrl())) {
            return;
        }
        setState(new AudioPlayerViewState(accessory, false, 2, null), true);
    }

    public final void setUnknownDuration() {
        configureDuration$default(this, null, false, 2, null);
    }

    public final void setUploadProgress(UploadItemProps uploadItemProps) {
        boolean z10;
        float f10;
        if (uploadItemProps != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        View root = this.binding.getRoot();
        if (uploadItemProps != null) {
            f10 = uploadItemProps.getUploadOpacity();
        } else {
            f10 = 1.0f;
        }
        root.setAlpha(f10);
        AttachmentUploadOverlayView attachmentUploadOverlayView = this.binding.uploadOverlay;
        Integer valueOf = Integer.valueOf(SizeUtilsKt.getDpToPx(32));
        ShapeDrawable shapeDrawable = new ShapeDrawable();
        Paint paint = shapeDrawable.getPaint();
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        paint.setColor(ColorUtilsKt.getColorCompat(context, 17170445));
        Unit unit = Unit.f32056a;
        attachmentUploadOverlayView.configureProgressView(valueOf, shapeDrawable, Integer.valueOf(SizeUtilsKt.getDpToPx(16)), Integer.valueOf(ThemeManagerKt.getTheme().getInteractiveTextDefault()), Integer.valueOf(SizeUtilsKt.getDpToPx(29)), Integer.valueOf(ThemeManagerKt.getTheme().getBorderSubtle()));
        this.binding.uploadOverlay.configureCompleteView(Integer.valueOf(SizeUtilsKt.getDpToPx(32)), Integer.valueOf(SizeUtilsKt.getDpToPx(19)));
        if (z10 && !this.uploadFinished) {
            this.binding.uploadOverlayBackground.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundSurfaceHigh());
            LinearLayout uploadOverlayBackground = this.binding.uploadOverlayBackground;
            Intrinsics.checkNotNullExpressionValue(uploadOverlayBackground, "uploadOverlayBackground");
            uploadOverlayBackground.setVisibility(0);
        }
        Function0<Unit> function0 = new Function0() { // from class: com.discord.chat.presentation.message.view.voicemessages.i
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit uploadProgress$lambda$11;
                uploadProgress$lambda$11 = AudioPlayerView.setUploadProgress$lambda$11(AudioPlayerView.this);
                return uploadProgress$lambda$11;
            }
        };
        this.binding.uploadOverlay.setProgress(uploadItemProps);
        this.binding.uploadOverlay.setUploadCancel(uploadItemProps);
        this.binding.uploadOverlay.setOnProgressAnimationComplete(function0);
    }

    public final void shouldAnimate(boolean z10) {
        this.shouldAnimate = z10;
        getAudioProgressView().setShouldAnimate(z10);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public AudioPlayerView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ AudioPlayerView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AudioPlayerView(@NotNull final Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        int i11;
        Intrinsics.checkNotNullParameter(context, "context");
        AudioPlayerViewBinding inflate = AudioPlayerViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        this.state = new AudioPlayerViewState(null, false, 3, null);
        this.shouldAnimate = true;
        ViewAttachedListener viewAttachedListener = new ViewAttachedListener(this, new Function1() { // from class: com.discord.chat.presentation.message.view.voicemessages.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit attachStateChangeListener$lambda$0;
                attachStateChangeListener$lambda$0 = AudioPlayerView.attachStateChangeListener$lambda$0(AudioPlayerView.this, ((Boolean) obj).booleanValue());
                return attachStateChangeListener$lambda$0;
            }
        }, null, 4, null);
        this.attachStateChangeListener = viewAttachedListener;
        this.bounceAnimator$delegate = qr.l.a(new Function0() { // from class: com.discord.chat.presentation.message.view.voicemessages.p
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Animation bounceAnimator_delegate$lambda$2;
                bounceAnimator_delegate$lambda$2 = AudioPlayerView.bounceAnimator_delegate$lambda$2(context);
                return bounceAnimator_delegate$lambda$2;
            }
        });
        this.animatorManager$delegate = qr.l.a(new Function0() { // from class: com.discord.chat.presentation.message.view.voicemessages.q
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                AudioPlayerWipeAnimatorManager animatorManager_delegate$lambda$3;
                animatorManager_delegate$lambda$3 = AudioPlayerView.animatorManager_delegate$lambda$3(context, this);
                return animatorManager_delegate$lambda$3;
            }
        });
        addOnAttachStateChangeListener(viewAttachedListener);
        LinearLayout linearLayout = inflate.playerContainer;
        Intrinsics.checkNotNull(linearLayout);
        int dpToPx = SizeUtilsKt.getDpToPx(4);
        linearLayout.setPadding(dpToPx, dpToPx, dpToPx, dpToPx);
        linearLayout.setBackgroundColor(ThemeManagerKt.getTheme().getBackgroundSurfaceHigh());
        ViewClippingUtilsKt.clipToRoundedRectangle(linearLayout, SizeUtilsKt.getDpToPx(24));
        linearLayout.setOrientation(0);
        linearLayout.setGravity(16);
        SimpleDraweeView button = inflate.button;
        Intrinsics.checkNotNullExpressionValue(button, "button");
        ViewClippingUtilsKt.clipToCircle(button);
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = inflate.text;
        Intrinsics.checkNotNull(simpleDraweeSpanTextView);
        SetTextSizeSpKt.setTextSizeSp(simpleDraweeSpanTextView, 12.0f);
        DiscordFontUtilsKt.setDiscordFont(simpleDraweeSpanTextView, DiscordFont.PrimaryMedium);
        simpleDraweeSpanTextView.setTextColor(ThemeManagerKt.getTheme().getInteractiveTextDefault());
        if (ThemeManager.INSTANCE.isThemeLight()) {
            i11 = R.drawable.drawable_audio_play_button_gradient_light;
        } else {
            i11 = R.drawable.drawable_audio_play_button_gradient_dark;
        }
        inflate.buttonContainer.setBackgroundResource(i11);
        inflate.wipe.setBackgroundResource(i11);
        h0.n0(inflate.buttonContainer, new androidx.core.view.a() { // from class: com.discord.chat.presentation.message.view.voicemessages.AudioPlayerView.3
            @Override // androidx.core.view.a
            public void onInitializeAccessibilityNodeInfo(View host, AccessibilityNodeInfoCompat info) {
                Intrinsics.checkNotNullParameter(host, "host");
                Intrinsics.checkNotNullParameter(info, "info");
                super.onInitializeAccessibilityNodeInfo(host, info);
                info.w0("android.widget.Button");
            }
        });
        TextView textView = inflate.audioFileName;
        textView.setTextColor(ThemeManagerKt.getTheme().getInteractiveTextDefault());
        Intrinsics.checkNotNull(textView);
        DiscordFont discordFont = DiscordFont.PrimaryNormal;
        DiscordFontUtilsKt.setDiscordFont(textView, discordFont);
        TextView textView2 = inflate.audioFileSize;
        textView2.setTextColor(ThemeManagerKt.getTheme().getInteractiveTextDefault());
        Intrinsics.checkNotNull(textView2);
        DiscordFontUtilsKt.setDiscordFont(textView2, discordFont);
        configureGestures();
        h0.n0(this, new androidx.core.view.a() { // from class: com.discord.chat.presentation.message.view.voicemessages.AudioPlayerView.6
            @Override // androidx.core.view.a
            public boolean onRequestSendAccessibilityEvent(ViewGroup host, View child, AccessibilityEvent event) {
                int i12;
                Intrinsics.checkNotNullParameter(host, "host");
                Intrinsics.checkNotNullParameter(child, "child");
                Intrinsics.checkNotNullParameter(event, "event");
                LinearLayout linearLayout2 = AudioPlayerView.this.getBinding().audioDetailsView;
                if (event.getAction() == 32768) {
                    i12 = 2;
                } else {
                    i12 = 0;
                }
                linearLayout2.setImportantForAccessibility(i12);
                return super.onRequestSendAccessibilityEvent(host, child, event);
            }
        });
        addOnLayoutChangeListener(new View.OnLayoutChangeListener() { // from class: com.discord.chat.presentation.message.view.voicemessages.g
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view, int i12, int i13, int i14, int i15, int i16, int i17, int i18, int i19) {
                AudioPlayerView._init_$lambda$8(AudioPlayerView.this, view, i12, i13, i14, i15, i16, i17, i18, i19);
            }
        });
    }
}
