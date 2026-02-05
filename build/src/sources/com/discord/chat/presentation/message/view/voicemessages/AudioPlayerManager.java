package com.discord.chat.presentation.message.view.voicemessages;

import android.content.Context;
import android.media.AudioAttributes;
import android.media.AudioFocusRequest;
import android.media.AudioManager;
import android.os.Build;
import com.discord.chat.presentation.message.view.voicemessages.AudioPlayerManager;
import com.discord.media_player.MediaPlayer;
import com.discord.media_player.MediaSource;
import com.discord.primitives.ChannelId;
import com.discord.primitives.MessageId;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import org.jetbrains.annotations.NotNull;
import org.webrtc.MediaStreamTrack;
import ps.l0;
@Metadata(d1 = {"\u0000z\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010%\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u0007\n\u0000\n\u0002\u0010\t\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\r\bÆ\u0002\u0018\u00002\u00020\u0001:\u0002<=B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020#J\u0010\u0010$\u001a\u00020\u001f2\b\u0010%\u001a\u0004\u0018\u00010\u000fJ\u0012\u0010&\u001a\u0004\u0018\u00010\u00102\b\u0010'\u001a\u0004\u0018\u00010\u000fJ\u001e\u0010(\u001a\u00020!2\u0006\u0010'\u001a\u00020\u000f2\u0006\u0010)\u001a\u00020*2\u0006\u0010+\u001a\u00020,J\u0012\u0010-\u001a\u0004\u0018\u00010\u00142\b\u0010'\u001a\u0004\u0018\u00010\u000fJ\u0012\u0010.\u001a\u0004\u0018\u00010\u00122\b\u0010'\u001a\u0004\u0018\u00010\u000fJ2\u0010/\u001a\u00020!2\u0006\u0010\"\u001a\u00020#2\u0006\u0010'\u001a\u00020\u000f2\u0006\u0010+\u001a\u00020,2\u0012\u00100\u001a\u000e\u0012\u0004\u0012\u00020\u0012\u0012\u0004\u0012\u00020!01J\u0010\u00102\u001a\u00020!2\b\u0010'\u001a\u0004\u0018\u00010\u000fJ\u000e\u00103\u001a\u00020!2\u0006\u00104\u001a\u00020\u001fJ\u0006\u00105\u001a\u00020!J\u001a\u00106\u001a\u0004\u0018\u00010\u00102\u0006\u0010'\u001a\u00020\u000f2\u0006\u0010+\u001a\u00020,H\u0002J\u0010\u00107\u001a\u00020!2\b\u0010'\u001a\u0004\u0018\u00010\u000fJ\b\u00108\u001a\u00020!H\u0002J\b\u00109\u001a\u00020!H\u0002J\u0010\u00108\u001a\u00020!2\b\u0010%\u001a\u0004\u0018\u00010\u000fJ\u0010\u00109\u001a\u00020!2\b\u0010%\u001a\u0004\u0018\u00010\u000fJ\b\u0010:\u001a\u00020\u001fH\u0002J\b\u0010;\u001a\u00020!H\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082.¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0016\u0010\b\u001a\n \n*\u0004\u0018\u00010\t0\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\fX\u0082.¢\u0006\u0002\n\u0000R\u001a\u0010\r\u001a\u000e\u0012\u0004\u0012\u00020\u000f\u0012\u0004\u0012\u00020\u00100\u000eX\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0011\u001a\u0004\u0018\u00010\u0012X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0013\u001a\u0004\u0018\u00010\u0014X\u0082\u000e¢\u0006\u0002\n\u0000R\u0016\u0010\u0015\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u000f0\u0016X\u0082\u0004¢\u0006\u0002\n\u0000R\u0016\u0010\u0017\u001a\u0004\u0018\u00010\u000f8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u0018\u0010\u0019R\u0019\u0010\u001a\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u000f0\u001b¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u001dR\u000e\u0010\u001e\u001a\u00020\u001fX\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006>"}, d2 = {"Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerManager;", "", "<init>", "()V", "audioManager", "Landroid/media/AudioManager;", "focusListener", "Landroid/media/AudioManager$OnAudioFocusChangeListener;", "playbackAttributes", "Landroid/media/AudioAttributes;", "kotlin.jvm.PlatformType", "focusRequest", "Landroid/media/AudioFocusRequest;", "currentProgressMap", "", "Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerManager$AudioSource;", "Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerManager$CurrentProgress;", "mediaPlayerState", "Lcom/discord/media_player/MediaPlayer$Event;", "mediaPlayer", "Lcom/discord/media_player/MediaPlayer;", "_currentPlayerSourceFlow", "Lkotlinx/coroutines/flow/MutableStateFlow;", "currentPlayerSource", "getCurrentPlayerSource", "()Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerManager$AudioSource;", "currentPlayerSourceFlow", "Lkotlinx/coroutines/flow/Flow;", "getCurrentPlayerSourceFlow", "()Lkotlinx/coroutines/flow/Flow;", "wasPlayingBeforePause", "", "init", "", "context", "Landroid/content/Context;", "hasCurrentPlayer", "audioSource", "getCurrentProgress", "source", "setCurrentProgress", ReactProgressBarViewManager.PROP_PROGRESS, "", "durationMs", "", "getPlayer", "getState", "setupPlayer", "onStateChanged", "Lkotlin/Function1;", "releasePlayer", "pauseCurrentPlayer", "storePauseState", "maybePlayCurrentPlayer", "maybeCreateDuration", "storeDuration", "playOrReset", "pause", "requestAudioFocus", "abandonAudioFocus", "AudioSource", "CurrentProgress", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AudioPlayerManager {
    @NotNull
    private static final MutableStateFlow _currentPlayerSourceFlow;
    private static AudioManager audioManager;
    @NotNull
    private static final Flow currentPlayerSourceFlow;
    private static AudioFocusRequest focusRequest;
    private static MediaPlayer mediaPlayer;
    private static MediaPlayer.Event mediaPlayerState;
    private static boolean wasPlayingBeforePause;
    @NotNull
    public static final AudioPlayerManager INSTANCE = new AudioPlayerManager();
    @NotNull
    private static final AudioManager.OnAudioFocusChangeListener focusListener = new AudioManager.OnAudioFocusChangeListener() { // from class: com.discord.chat.presentation.message.view.voicemessages.b
        @Override // android.media.AudioManager.OnAudioFocusChangeListener
        public final void onAudioFocusChange(int i10) {
            AudioPlayerManager.focusListener$lambda$0(i10);
        }
    };
    private static final AudioAttributes playbackAttributes = new AudioAttributes.Builder().setUsage(2).setContentType(1).build();
    @NotNull
    private static final Map<AudioSource, CurrentProgress> currentProgressMap = new LinkedHashMap();

    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0015\n\u0002\u0010\u000b\n\u0002\b\u0004\b\u0086\b\u0018\u00002\u00020\u0001B-\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\n\u0010\u000bJ\u0010\u0010\u0015\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\b\u0016J\u0010\u0010\u0017\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u0018\u0010\u000fJ\t\u0010\u0019\u001a\u00020\u0007HÆ\u0003J\u0010\u0010\u001a\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\u0010\u0013J<\u0010\u001b\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\tHÆ\u0001¢\u0006\u0004\b\u001c\u0010\u001dJ\u0013\u0010\u001e\u001a\u00020\u001f2\b\u0010 \u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010!\u001a\u00020\tHÖ\u0001J\t\u0010\"\u001a\u00020\u0007HÖ\u0001R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0013\u0010\u0004\u001a\u00020\u0005¢\u0006\n\n\u0002\u0010\u0010\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000fR\u0015\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\n\n\u0002\u0010\u0014\u001a\u0004\b\u0012\u0010\u0013¨\u0006#"}, d2 = {"Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerManager$AudioSource;", "", "channelId", "Lcom/discord/primitives/ChannelId;", "messageId", "Lcom/discord/primitives/MessageId;", "url", "", "index", "", "<init>", "(Lcom/discord/primitives/ChannelId;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getChannelId-qMVnFVQ", "()Lcom/discord/primitives/ChannelId;", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getUrl", "getIndex", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "component1", "component1-qMVnFVQ", "component2", "component2-3Eiw7ao", "component3", "component4", "copy", "copy-fxiT1bo", "(Lcom/discord/primitives/ChannelId;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;)Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerManager$AudioSource;", "equals", "", "other", "hashCode", "toString", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class AudioSource {
        private final ChannelId channelId;
        private final Integer index;
        @NotNull
        private final String messageId;
        @NotNull
        private final String url;

        public /* synthetic */ AudioSource(ChannelId channelId, String str, String str2, Integer num, DefaultConstructorMarker defaultConstructorMarker) {
            this(channelId, str, str2, num);
        }

        /* renamed from: copy-fxiT1bo$default  reason: not valid java name */
        public static /* synthetic */ AudioSource m712copyfxiT1bo$default(AudioSource audioSource, ChannelId channelId, String str, String str2, Integer num, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                channelId = audioSource.channelId;
            }
            if ((i10 & 2) != 0) {
                str = audioSource.messageId;
            }
            if ((i10 & 4) != 0) {
                str2 = audioSource.url;
            }
            if ((i10 & 8) != 0) {
                num = audioSource.index;
            }
            return audioSource.m715copyfxiT1bo(channelId, str, str2, num);
        }

        /* renamed from: component1-qMVnFVQ  reason: not valid java name */
        public final ChannelId m713component1qMVnFVQ() {
            return this.channelId;
        }

        @NotNull
        /* renamed from: component2-3Eiw7ao  reason: not valid java name */
        public final String m714component23Eiw7ao() {
            return this.messageId;
        }

        @NotNull
        public final String component3() {
            return this.url;
        }

        public final Integer component4() {
            return this.index;
        }

        @NotNull
        /* renamed from: copy-fxiT1bo  reason: not valid java name */
        public final AudioSource m715copyfxiT1bo(ChannelId channelId, @NotNull String messageId, @NotNull String url, Integer num) {
            Intrinsics.checkNotNullParameter(messageId, "messageId");
            Intrinsics.checkNotNullParameter(url, "url");
            return new AudioSource(channelId, messageId, url, num, null);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof AudioSource) {
                AudioSource audioSource = (AudioSource) obj;
                return Intrinsics.areEqual(this.channelId, audioSource.channelId) && MessageId.m1089equalsimpl0(this.messageId, audioSource.messageId) && Intrinsics.areEqual(this.url, audioSource.url) && Intrinsics.areEqual(this.index, audioSource.index);
            }
            return false;
        }

        /* renamed from: getChannelId-qMVnFVQ  reason: not valid java name */
        public final ChannelId m716getChannelIdqMVnFVQ() {
            return this.channelId;
        }

        public final Integer getIndex() {
            return this.index;
        }

        @NotNull
        /* renamed from: getMessageId-3Eiw7ao  reason: not valid java name */
        public final String m717getMessageId3Eiw7ao() {
            return this.messageId;
        }

        @NotNull
        public final String getUrl() {
            return this.url;
        }

        public int hashCode() {
            ChannelId channelId = this.channelId;
            int m1064hashCodeimpl = (((((channelId == null ? 0 : ChannelId.m1064hashCodeimpl(channelId.m1068unboximpl())) * 31) + MessageId.m1090hashCodeimpl(this.messageId)) * 31) + this.url.hashCode()) * 31;
            Integer num = this.index;
            return m1064hashCodeimpl + (num != null ? num.hashCode() : 0);
        }

        @NotNull
        public String toString() {
            ChannelId channelId = this.channelId;
            String m1092toStringimpl = MessageId.m1092toStringimpl(this.messageId);
            String str = this.url;
            Integer num = this.index;
            return "AudioSource(channelId=" + channelId + ", messageId=" + m1092toStringimpl + ", url=" + str + ", index=" + num + ")";
        }

        private AudioSource(ChannelId channelId, String messageId, String url, Integer num) {
            Intrinsics.checkNotNullParameter(messageId, "messageId");
            Intrinsics.checkNotNullParameter(url, "url");
            this.channelId = channelId;
            this.messageId = messageId;
            this.url = url;
            this.index = num;
        }

        public /* synthetic */ AudioSource(ChannelId channelId, String str, String str2, Integer num, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(channelId, str, str2, (i10 & 8) != 0 ? null : num, null);
        }
    }

    @Metadata(d1 = {"\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\t\n\u0002\b\u0007\n\u0002\u0010\u0007\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\t\u0010\u000e\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000f\u001a\u00020\u0003HÆ\u0003J\u001d\u0010\u0010\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0011\u001a\u00020\u00122\b\u0010\u0013\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0014\u001a\u00020\u0015HÖ\u0001J\t\u0010\u0016\u001a\u00020\u0017HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\bR\u0011\u0010\n\u001a\u00020\u000b¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\r¨\u0006\u0018"}, d2 = {"Lcom/discord/chat/presentation/message/view/voicemessages/AudioPlayerManager$CurrentProgress;", "", "currentProgress", "", "durationMs", "<init>", "(JJ)V", "getCurrentProgress", "()J", "getDurationMs", "currentProgressPercentage", "", "getCurrentProgressPercentage", "()F", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class CurrentProgress {
        private final long currentProgress;
        private final float currentProgressPercentage;
        private final long durationMs;

        public CurrentProgress(long j10, long j11) {
            this.currentProgress = j10;
            this.durationMs = j11;
            this.currentProgressPercentage = ((float) j10) / ((float) j11);
        }

        public static /* synthetic */ CurrentProgress copy$default(CurrentProgress currentProgress, long j10, long j11, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                j10 = currentProgress.currentProgress;
            }
            if ((i10 & 2) != 0) {
                j11 = currentProgress.durationMs;
            }
            return currentProgress.copy(j10, j11);
        }

        public final long component1() {
            return this.currentProgress;
        }

        public final long component2() {
            return this.durationMs;
        }

        @NotNull
        public final CurrentProgress copy(long j10, long j11) {
            return new CurrentProgress(j10, j11);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof CurrentProgress) {
                CurrentProgress currentProgress = (CurrentProgress) obj;
                return this.currentProgress == currentProgress.currentProgress && this.durationMs == currentProgress.durationMs;
            }
            return false;
        }

        public final long getCurrentProgress() {
            return this.currentProgress;
        }

        public final float getCurrentProgressPercentage() {
            return this.currentProgressPercentage;
        }

        public final long getDurationMs() {
            return this.durationMs;
        }

        public int hashCode() {
            return (Long.hashCode(this.currentProgress) * 31) + Long.hashCode(this.durationMs);
        }

        @NotNull
        public String toString() {
            long j10 = this.currentProgress;
            long j11 = this.durationMs;
            return "CurrentProgress(currentProgress=" + j10 + ", durationMs=" + j11 + ")";
        }
    }

    static {
        MutableStateFlow a10 = l0.a(null);
        _currentPlayerSourceFlow = a10;
        currentPlayerSourceFlow = a10;
    }

    private AudioPlayerManager() {
    }

    private final void abandonAudioFocus() {
        AudioManager audioManager2 = null;
        AudioFocusRequest audioFocusRequest = null;
        if (Build.VERSION.SDK_INT >= 26) {
            AudioManager audioManager3 = audioManager;
            if (audioManager3 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("audioManager");
                audioManager3 = null;
            }
            AudioFocusRequest audioFocusRequest2 = focusRequest;
            if (audioFocusRequest2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("focusRequest");
            } else {
                audioFocusRequest = audioFocusRequest2;
            }
            audioManager3.abandonAudioFocusRequest(audioFocusRequest);
            return;
        }
        AudioManager audioManager4 = audioManager;
        if (audioManager4 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("audioManager");
        } else {
            audioManager2 = audioManager4;
        }
        audioManager2.abandonAudioFocus(focusListener);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void focusListener$lambda$0(int i10) {
        if (i10 == 1) {
            INSTANCE.maybePlayCurrentPlayer();
        } else {
            INSTANCE.pauseCurrentPlayer(false);
        }
    }

    private final AudioSource getCurrentPlayerSource() {
        return (AudioSource) _currentPlayerSourceFlow.getValue();
    }

    private final CurrentProgress maybeCreateDuration(AudioSource audioSource, long j10) {
        Map<AudioSource, CurrentProgress> map = currentProgressMap;
        if (map.get(audioSource) != null) {
            return null;
        }
        CurrentProgress currentProgress = new CurrentProgress(0L, j10);
        map.put(audioSource, currentProgress);
        return currentProgress;
    }

    private final void pause() {
        MediaPlayer mediaPlayer2 = mediaPlayer;
        if (mediaPlayer2 != null) {
            mediaPlayer2.pause();
        }
    }

    private final void playOrReset() {
        MediaPlayer mediaPlayer2;
        if (!requestAudioFocus() || (mediaPlayer2 = mediaPlayer) == null) {
            return;
        }
        mediaPlayer2.playOrReset();
    }

    private final boolean requestAudioFocus() {
        int requestAudioFocus;
        AudioManager audioManager2 = null;
        AudioFocusRequest audioFocusRequest = null;
        if (Build.VERSION.SDK_INT >= 26) {
            AudioManager audioManager3 = audioManager;
            if (audioManager3 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("audioManager");
                audioManager3 = null;
            }
            AudioFocusRequest audioFocusRequest2 = focusRequest;
            if (audioFocusRequest2 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("focusRequest");
            } else {
                audioFocusRequest = audioFocusRequest2;
            }
            requestAudioFocus = audioManager3.requestAudioFocus(audioFocusRequest);
        } else {
            AudioManager audioManager4 = audioManager;
            if (audioManager4 == null) {
                Intrinsics.throwUninitializedPropertyAccessException("audioManager");
            } else {
                audioManager2 = audioManager4;
            }
            requestAudioFocus = audioManager2.requestAudioFocus(focusListener, 3, 4);
        }
        if (requestAudioFocus == 1) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setupPlayer$lambda$2$lambda$1(AudioSource audioSource, Function1 function1, MediaPlayer.Event event) {
        Intrinsics.checkNotNullParameter(event, "event");
        if (Intrinsics.areEqual(event, MediaPlayer.Event.PlaybackEnded.INSTANCE)) {
            currentProgressMap.remove(audioSource);
            INSTANCE.abandonAudioFocus();
        } else {
            INSTANCE.storeDuration(audioSource);
        }
        if (!Intrinsics.areEqual(mediaPlayerState, event)) {
            mediaPlayerState = event;
            function1.invoke(event);
        }
        return Unit.f31988a;
    }

    @NotNull
    public final Flow getCurrentPlayerSourceFlow() {
        return currentPlayerSourceFlow;
    }

    public final CurrentProgress getCurrentProgress(AudioSource audioSource) {
        MediaPlayer mediaPlayer2;
        if (Intrinsics.areEqual(getCurrentPlayerSource(), audioSource) && (mediaPlayer2 = mediaPlayer) != null) {
            Intrinsics.checkNotNull(mediaPlayer2);
            long currentPositionMs = mediaPlayer2.currentPositionMs();
            MediaPlayer mediaPlayer3 = mediaPlayer;
            Intrinsics.checkNotNull(mediaPlayer3);
            return new CurrentProgress(currentPositionMs, mediaPlayer3.durationMs());
        }
        return currentProgressMap.get(audioSource);
    }

    public final MediaPlayer getPlayer(AudioSource audioSource) {
        if (hasCurrentPlayer(audioSource)) {
            return mediaPlayer;
        }
        return null;
    }

    public final MediaPlayer.Event getState(AudioSource audioSource) {
        if (hasCurrentPlayer(audioSource)) {
            return mediaPlayerState;
        }
        return null;
    }

    public final boolean hasCurrentPlayer(AudioSource audioSource) {
        if (audioSource != null && Intrinsics.areEqual(getCurrentPlayerSource(), audioSource)) {
            return true;
        }
        return false;
    }

    public final void init(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        Object systemService = context.getSystemService(MediaStreamTrack.AUDIO_TRACK_KIND);
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.media.AudioManager");
        audioManager = (AudioManager) systemService;
        if (Build.VERSION.SDK_INT >= 26) {
            focusRequest = a.a(4).setOnAudioFocusChangeListener(focusListener).setAudioAttributes(playbackAttributes).build();
        }
    }

    public final void maybePlayCurrentPlayer() {
        if (wasPlayingBeforePause) {
            wasPlayingBeforePause = false;
            playOrReset();
        }
    }

    public final void pauseCurrentPlayer(boolean z10) {
        if (z10) {
            MediaPlayer mediaPlayer2 = mediaPlayer;
            boolean z11 = false;
            if (mediaPlayer2 != null && mediaPlayer2.shouldPlay()) {
                z11 = true;
            }
            wasPlayingBeforePause = z11;
        }
        pause();
        storeDuration(getCurrentPlayerSource());
    }

    public final void releasePlayer(AudioSource audioSource) {
        if (hasCurrentPlayer(audioSource)) {
            _currentPlayerSourceFlow.setValue(null);
            MediaPlayer mediaPlayer2 = mediaPlayer;
            if (mediaPlayer2 != null) {
                mediaPlayer2.reset();
            }
            mediaPlayerState = null;
            wasPlayingBeforePause = false;
        }
    }

    public final void setCurrentProgress(@NotNull AudioSource source, float f10, long j10) {
        Intrinsics.checkNotNullParameter(source, "source");
        Map<AudioSource, CurrentProgress> map = currentProgressMap;
        CurrentProgress currentProgress = map.get(source);
        if (currentProgress == null && (currentProgress = maybeCreateDuration(source, j10)) == null) {
            return;
        }
        map.put(source, CurrentProgress.copy$default(currentProgress, f10 * ((float) j10), 0L, 2, null));
    }

    public final void setupPlayer(@NotNull Context context, @NotNull final AudioSource source, long j10, @NotNull final Function1<? super MediaPlayer.Event, Unit> onStateChanged) {
        long j11;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(onStateChanged, "onStateChanged");
        if (mediaPlayer == null) {
            mediaPlayer = MediaPlayer.Factory.create$default(MediaPlayer.Factory, context, null, 2, null);
        }
        if (!Intrinsics.areEqual(source, getCurrentPlayerSource())) {
            storeDuration(getCurrentPlayerSource());
            mediaPlayerState = null;
            MutableStateFlow mutableStateFlow = _currentPlayerSourceFlow;
            mutableStateFlow.setValue(source);
            maybeCreateDuration(source, j10);
            if (requestAudioFocus()) {
                mutableStateFlow.setValue(source);
                MediaPlayer mediaPlayer2 = mediaPlayer;
                Intrinsics.checkNotNull(mediaPlayer2);
                MediaSource mediaSource$default = AudioPlayerUtilsKt.toMediaSource$default(source, null, 1, null);
                CurrentProgress currentProgress = currentProgressMap.get(source);
                if (currentProgress != null) {
                    j11 = currentProgress.getCurrentProgress();
                } else {
                    j11 = 0;
                }
                MediaPlayer.preparePlayer$default(mediaPlayer2, mediaSource$default, true, false, j11, null, null, 52, null);
            }
        }
        MediaPlayer mediaPlayer3 = mediaPlayer;
        Intrinsics.checkNotNull(mediaPlayer3);
        mediaPlayer3.setEventListener(new Function1() { // from class: com.discord.chat.presentation.message.view.voicemessages.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit unit;
                unit = AudioPlayerManager.setupPlayer$lambda$2$lambda$1(AudioPlayerManager.AudioSource.this, onStateChanged, (MediaPlayer.Event) obj);
                return unit;
            }
        });
        mediaPlayer3.setVolume(1.0f);
    }

    public final void storeDuration(AudioSource audioSource) {
        MediaPlayer mediaPlayer2;
        CurrentProgress copy$default;
        if (hasCurrentPlayer(audioSource) && (mediaPlayer2 = mediaPlayer) != null) {
            Map<AudioSource, CurrentProgress> map = currentProgressMap;
            Intrinsics.checkNotNull(audioSource);
            CurrentProgress currentProgress = map.get(audioSource);
            if (currentProgress != null && (copy$default = CurrentProgress.copy$default(currentProgress, mediaPlayer2.currentPositionMs(), 0L, 2, null)) != null) {
                map.put(audioSource, copy$default);
            }
        }
    }

    public final void pause(AudioSource audioSource) {
        if (hasCurrentPlayer(audioSource)) {
            pause();
        }
    }

    public final void playOrReset(AudioSource audioSource) {
        if (hasCurrentPlayer(audioSource)) {
            playOrReset();
        }
    }
}
