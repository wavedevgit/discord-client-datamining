package com.discord.media_player;

import android.app.Activity;
import android.view.View;
import com.discord.logging.Log;
import com.discord.media_player.reactevents.MediaPlayerDownloadProgress;
import com.discord.media_player.reactevents.MediaPlayerMuteStateChanged;
import com.discord.media_player.reactevents.MediaPlayerPause;
import com.discord.media_player.reactevents.MediaPlayerPlaybackProgressUpdated;
import com.discord.media_player.reactevents.MediaPlayerPlaybackRateChanged;
import com.discord.media_player.reactevents.MediaPlayerPlaybackSource;
import com.discord.media_player.reactevents.MediaPlayerPlaybackSourceChanged;
import com.discord.media_player.reactevents.MediaPlayerProgress;
import com.discord.media_player.reactevents.MediaPlayerViewDidDisappear;
import com.discord.media_player.reactevents.MediaPlayerViewWillAppear;
import com.discord.portals.from_native.PortalFromNativeContextManager;
import com.discord.reactevents.ReactEvents;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.google.android.exoplayer2.Player;
import com.google.android.exoplayer2.SimpleExoPlayer;
import com.google.android.exoplayer2.ui.PlayerView;
import hs.j1;
import hs.m0;
import hs.u0;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import jr.v;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.time.Duration;
import kotlinx.coroutines.CompletableJob;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ks.l0;
import org.jetbrains.annotations.NotNull;
@ReactModule(name = MediaPlayerManagerModule.NAME)
@Metadata(d1 = {"\u0000\u0086\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010%\n\u0002\u0010\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\r\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\t\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0011\n\u0002\b\b\n\u0002\u0010\b\n\u0002\b\u0003\b\u0007\u0018\u0000 G2\u00020\u0001:\u0001GB\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u0013\u001a\u00020\u000eH\u0016J\b\u0010\u0016\u001a\u00020\u0017H\u0007J\u0018\u0010\u0018\u001a\u00020\u00172\u0006\u0010\u0019\u001a\u00020\b2\u0006\u0010\u001a\u001a\u00020\u001bH\u0007J\u0018\u0010\u001c\u001a\u00020\u00172\u0006\u0010\u0019\u001a\u00020\b2\u0006\u0010\u001d\u001a\u00020\bH\u0007J\u0018\u0010\u001e\u001a\u00020\u00172\u0006\u0010\u0019\u001a\u00020\b2\u0006\u0010\u001f\u001a\u00020\u001bH\u0007J\u0018\u0010 \u001a\u00020\u00172\u0006\u0010\u0019\u001a\u00020\b2\u0006\u0010!\u001a\u00020\u001bH\u0007J\b\u0010\"\u001a\u00020\u0017H\u0007J\b\u0010#\u001a\u00020\u0017H\u0007J\b\u0010$\u001a\u00020\u0017H\u0007J\u0016\u0010%\u001a\u00020\u00172\u0006\u0010\u0019\u001a\u00020\b2\u0006\u0010&\u001a\u00020\u001bJ$\u0010'\u001a\u00020\u00172\u0006\u0010\u0019\u001a\u00020\b2\u0012\u0010(\u001a\u000e\u0012\u0004\u0012\u00020*\u0012\u0004\u0012\u00020\u00170)H\u0002J\u0016\u0010+\u001a\u00020\u00172\u0006\u0010,\u001a\u00020-2\u0006\u0010.\u001a\u00020/J\u000e\u00100\u001a\u00020\u00172\u0006\u0010,\u001a\u00020-J\"\u00101\u001a\u00020\u00172\b\u0010,\u001a\u0004\u0018\u00010-2\u0006\u00102\u001a\u0002032\u0006\u00104\u001a\u000203H\u0002J \u00105\u001a\u00020\u00172\u0006\u0010\u0019\u001a\u00020\b2\u0006\u00106\u001a\u0002032\u0006\u00107\u001a\u000203H\u0002J)\u00108\u001a\u00020\t2\u0006\u00109\u001a\u00020:2\u0012\u0010;\u001a\n\u0012\u0006\b\u0001\u0012\u00020-0<\"\u00020-¢\u0006\u0004\b=\u0010>J)\u0010?\u001a\u00020\t2\u0006\u00109\u001a\u00020:2\u0012\u0010;\u001a\n\u0012\u0006\b\u0001\u0012\u00020-0<\"\u00020-¢\u0006\u0004\b@\u0010>J\u0010\u0010A\u001a\u00020\u00172\u0006\u0010B\u001a\u00020\u000eH\u0007J\u0010\u0010C\u001a\u00020\u00172\u0006\u0010D\u001a\u00020EH\u0007J\b\u0010F\u001a\u00020\u0017H\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\u0006\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\t0\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u000bX\u0082\u0004¢\u0006\u0002\n\u0000R\u0016\u0010\f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u000e0\rX\u0082\u000e¢\u0006\u0002\n\u0000R\u0019\u0010\u000f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u000e0\u0010¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u000e\u0010\u0014\u001a\u00020\u0015X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006H"}, d2 = {"Lcom/discord/media_player/MediaPlayerManagerModule;", "Lcom/facebook/react/bridge/ReactContextBaseJavaModule;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "mediaPlayerProgressMap", "", "", "Lkotlinx/coroutines/Job;", "scope", "Lkotlinx/coroutines/CoroutineScope;", "_pausePlayerFlow", "Lkotlinx/coroutines/flow/MutableStateFlow;", "", "pausePlayerFlow", "Lkotlinx/coroutines/flow/Flow;", "getPausePlayerFlow", "()Lkotlinx/coroutines/flow/Flow;", "getName", "reactEvents", "Lcom/discord/reactevents/ReactEvents;", "pauseAllMediaPlayers", "", "toggle", "portal", "play", "", "changeProgress", "seekToSec", "setMuted", "muted", "setLoopPlayback", "loop", "pauseCurrentPlayer", "playCurrentPlayer", "subscribeToPlaybackEvents", "onMuteToggle", "isMuted", "withPlayer", "callback", "Lkotlin/Function1;", "Lcom/google/android/exoplayer2/SimpleExoPlayer;", "startPlayerProgressInterval", "mediaSource", "Lcom/discord/media_player/MediaSource;", "mediaPlayer", "Lcom/discord/media_player/MediaPlayer;", "stopPlayerProgressInterval", "onMediaPlayerPlaybackProgress", "timeMs", "", "durationMs", "onMediaPlayerDownloadProgress", "bufferedPosition", "duration", "onMediaPlayerViewWillAppear", "channelId", "Lcom/discord/primitives/ChannelId;", "mediaSources", "", "onMediaPlayerViewWillAppear-LJLSWy8", "(J[Lcom/discord/media_player/MediaSource;)Lkotlinx/coroutines/Job;", "onMediaPlayerViewDetached", "onMediaPlayerViewDetached-LJLSWy8", "addListener", "type", "removeListeners", "count", "", "invalidate", "Companion", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nMediaPlayerManagerModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MediaPlayerManagerModule.kt\ncom/discord/media_player/MediaPlayerManagerModule\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 CastUtils.kt\ncom/discord/misc/utilities/kotlin/CastUtilsKt\n*L\n1#1,342:1\n1#2:343\n8#3:344\n8#3:345\n*S KotlinDebug\n*F\n+ 1 MediaPlayerManagerModule.kt\ncom/discord/media_player/MediaPlayerManagerModule\n*L\n213#1:344\n215#1:345\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaPlayerManagerModule extends ReactContextBaseJavaModule {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String NAME = "MediaPlayerManager";
    @NotNull
    private MutableStateFlow _pausePlayerFlow;
    @NotNull
    private final Map<Double, Job> mediaPlayerProgressMap;
    @NotNull
    private final Flow pausePlayerFlow;
    @NotNull
    private final ReactApplicationContext reactContext;
    @NotNull
    private final ReactEvents reactEvents;
    @NotNull
    private final CoroutineScope scope;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0080T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/media_player/MediaPlayerManagerModule$Companion;", "", "<init>", "()V", "NAME", "", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaPlayerManagerModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
        this.mediaPlayerProgressMap = new LinkedHashMap();
        CompletableJob b10 = j1.b(null, 1, null);
        ExecutorService newSingleThreadExecutor = Executors.newSingleThreadExecutor();
        Intrinsics.checkNotNullExpressionValue(newSingleThreadExecutor, "newSingleThreadExecutor(...)");
        this.scope = kotlinx.coroutines.i.a(b10.Z0(u0.c(newSingleThreadExecutor)));
        MutableStateFlow a10 = l0.a(null);
        this._pausePlayerFlow = a10;
        this.pausePlayerFlow = a10;
        this.reactEvents = new ReactEvents(v.a("MediaPlayerPlaybackProgressUpdated", Reflection.getOrCreateKotlinClass(MediaPlayerPlaybackProgressUpdated.class)), v.a("MediaPlayerPlaybackRateChanged", Reflection.getOrCreateKotlinClass(MediaPlayerPlaybackRateChanged.class)), v.a("MediaPlayerPlaybackSourceChanged", Reflection.getOrCreateKotlinClass(MediaPlayerPlaybackSourceChanged.class)), v.a("MediaPlayerPause", Reflection.getOrCreateKotlinClass(MediaPlayerPause.class)), v.a("MediaPlayerProgress", Reflection.getOrCreateKotlinClass(MediaPlayerProgress.class)), v.a("MediaPlayerDownloadProgress", Reflection.getOrCreateKotlinClass(MediaPlayerDownloadProgress.class)), v.a("MediaPlayerMuteStateChanged", Reflection.getOrCreateKotlinClass(MediaPlayerMuteStateChanged.class)), v.a("MediaPlayerViewWillAppear", Reflection.getOrCreateKotlinClass(MediaPlayerViewWillAppear.class)), v.a("MediaPlayerViewDidDisappear", Reflection.getOrCreateKotlinClass(MediaPlayerViewDidDisappear.class)));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit changeProgress$lambda$1(double d10, SimpleExoPlayer player) {
        Intrinsics.checkNotNullParameter(player, "player");
        Duration.a aVar = Duration.f36073e;
        long t10 = Duration.t(kotlin.time.b.r(d10, fs.b.f25570p));
        long duration = player.getDuration();
        if (duration > 0 && t10 >= 0 && t10 <= duration) {
            try {
                player.l0(t10);
            } catch (IllegalArgumentException e10) {
                Log log = Log.INSTANCE;
                log.e(NAME, "Invalid seek position: " + t10 + ", duration: " + duration, e10);
            }
        } else {
            Log log2 = Log.INSTANCE;
            Log.w$default(log2, NAME, "Invalid seek attempt: position=" + t10 + ", duration=" + duration, (Throwable) null, 4, (Object) null);
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void onMediaPlayerDownloadProgress(double d10, long j10, long j11) {
        TimeUnit timeUnit = TimeUnit.MILLISECONDS;
        long seconds = timeUnit.toSeconds(j11);
        long seconds2 = timeUnit.toSeconds(j10);
        this.reactEvents.emitModuleEvent(this.reactContext, new MediaPlayerDownloadProgress(d10, seconds2, kotlin.ranges.d.k(j10 / j11, 0.0d, 1.0d), seconds));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void onMediaPlayerPlaybackProgress(MediaSource mediaSource, long j10, long j11) {
        MediaPlayerPlaybackSource mediaPlayerPlaybackSource;
        Double portal;
        ReactEvents reactEvents = this.reactEvents;
        ReactApplicationContext reactApplicationContext = this.reactContext;
        if (mediaSource != null) {
            mediaPlayerPlaybackSource = MediaPlayerPlaybackSource.Companion.fromMediaSource(mediaSource);
        } else {
            mediaPlayerPlaybackSource = null;
        }
        reactEvents.emitModuleEvent(reactApplicationContext, new MediaPlayerPlaybackProgressUpdated(mediaPlayerPlaybackSource, j10, j11));
        if (mediaSource != null && (portal = mediaSource.getPortal()) != null) {
            double doubleValue = portal.doubleValue();
            ReactEvents reactEvents2 = this.reactEvents;
            ReactApplicationContext reactApplicationContext2 = this.reactContext;
            Duration.a aVar = Duration.f36073e;
            fs.b bVar = fs.b.f25569o;
            long t10 = kotlin.time.b.t(j10, bVar);
            fs.b bVar2 = fs.b.f25570p;
            reactEvents2.emitModuleEvent(reactApplicationContext2, new MediaPlayerProgress(doubleValue, Duration.J(t10, bVar2), Duration.J(kotlin.time.b.t(j11, bVar), bVar2)));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setLoopPlayback$lambda$3(boolean z10, SimpleExoPlayer player) {
        Intrinsics.checkNotNullParameter(player, "player");
        if (z10) {
            player.R(1);
        } else {
            player.R(0);
        }
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit setMuted$lambda$2(boolean z10, SimpleExoPlayer player) {
        float f10;
        Intrinsics.checkNotNullParameter(player, "player");
        if (z10) {
            f10 = 0.0f;
        } else {
            f10 = 1.0f;
        }
        player.F0(f10);
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit toggle$lambda$0(boolean z10, MediaPlayerManagerModule mediaPlayerManagerModule, double d10, SimpleExoPlayer player) {
        Intrinsics.checkNotNullParameter(player, "player");
        if (z10 && player.O() == 11) {
            try {
                player.l0(0L);
            } catch (IllegalArgumentException e10) {
                Log.INSTANCE.e(NAME, "Failed to seek to beginning", e10);
            }
        }
        if (player.P() == z10) {
            return Unit.f33074a;
        }
        player.n(z10);
        mediaPlayerManagerModule.reactEvents.emitModuleEvent(mediaPlayerManagerModule.reactContext, new MediaPlayerPause(d10, !z10));
        return Unit.f33074a;
    }

    private final void withPlayer(final double d10, final Function1<? super SimpleExoPlayer, Unit> function1) {
        Activity currentActivity = this.reactContext.getCurrentActivity();
        if (currentActivity != null) {
            currentActivity.runOnUiThread(new Runnable() { // from class: com.discord.media_player.f
                @Override // java.lang.Runnable
                public final void run() {
                    MediaPlayerManagerModule.withPlayer$lambda$6(d10, function1);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void withPlayer$lambda$6(double d10, Function1 function1) {
        Player player;
        View view = PortalFromNativeContextManager.INSTANCE.getView(d10);
        if (view != null) {
            SimpleExoPlayer simpleExoPlayer = null;
            if (!(view instanceof PlayerView)) {
                view = null;
            }
            PlayerView playerView = (PlayerView) view;
            if (playerView != null && (player = playerView.getPlayer()) != null) {
                if (player instanceof SimpleExoPlayer) {
                    simpleExoPlayer = player;
                }
                SimpleExoPlayer simpleExoPlayer2 = simpleExoPlayer;
                if (simpleExoPlayer2 != null) {
                    function1.invoke(simpleExoPlayer2);
                }
            }
        }
    }

    @ReactMethod
    public final void addListener(@NotNull String type) {
        Intrinsics.checkNotNullParameter(type, "type");
    }

    @ReactMethod
    public final void changeProgress(double d10, final double d11) {
        withPlayer(d10, new Function1() { // from class: com.discord.media_player.i
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit changeProgress$lambda$1;
                changeProgress$lambda$1 = MediaPlayerManagerModule.changeProgress$lambda$1(d11, (SimpleExoPlayer) obj);
                return changeProgress$lambda$1;
            }
        });
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return NAME;
    }

    @NotNull
    public final Flow getPausePlayerFlow() {
        return this.pausePlayerFlow;
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        kotlinx.coroutines.i.f(this.scope, null, 1, null);
        super.invalidate();
    }

    @NotNull
    /* renamed from: onMediaPlayerViewDetached-LJLSWy8  reason: not valid java name */
    public final Job m944onMediaPlayerViewDetachedLJLSWy8(long j10, @NotNull MediaSource... mediaSources) {
        Job d10;
        Intrinsics.checkNotNullParameter(mediaSources, "mediaSources");
        d10 = hs.i.d(this.scope, m0.c(), null, new MediaPlayerManagerModule$onMediaPlayerViewDetached$1(this, j10, mediaSources, null), 2, null);
        return d10;
    }

    @NotNull
    /* renamed from: onMediaPlayerViewWillAppear-LJLSWy8  reason: not valid java name */
    public final Job m945onMediaPlayerViewWillAppearLJLSWy8(long j10, @NotNull MediaSource... mediaSources) {
        Job d10;
        Intrinsics.checkNotNullParameter(mediaSources, "mediaSources");
        d10 = hs.i.d(this.scope, m0.c(), null, new MediaPlayerManagerModule$onMediaPlayerViewWillAppear$1(this, j10, mediaSources, null), 2, null);
        return d10;
    }

    public final void onMuteToggle(double d10, boolean z10) {
        this.reactEvents.emitModuleEvent(this.reactContext, new MediaPlayerMuteStateChanged(d10, z10));
    }

    @ReactMethod
    public final void pauseAllMediaPlayers() {
        this._pausePlayerFlow.setValue(UUID.randomUUID().toString());
    }

    @ReactMethod
    public final void pauseCurrentPlayer() {
        MediaPlayerManager.INSTANCE.pauseActivePlayer();
    }

    @ReactMethod
    public final void playCurrentPlayer() {
        MediaPlayerManager.INSTANCE.playActivePlayer();
    }

    @ReactMethod
    public final void removeListeners(int i10) {
    }

    @ReactMethod
    public final void setLoopPlayback(double d10, final boolean z10) {
        withPlayer(d10, new Function1() { // from class: com.discord.media_player.h
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit loopPlayback$lambda$3;
                loopPlayback$lambda$3 = MediaPlayerManagerModule.setLoopPlayback$lambda$3(z10, (SimpleExoPlayer) obj);
                return loopPlayback$lambda$3;
            }
        });
    }

    @ReactMethod
    public final void setMuted(double d10, final boolean z10) {
        withPlayer(d10, new Function1() { // from class: com.discord.media_player.g
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit muted$lambda$2;
                muted$lambda$2 = MediaPlayerManagerModule.setMuted$lambda$2(z10, (SimpleExoPlayer) obj);
                return muted$lambda$2;
            }
        });
    }

    public final void startPlayerProgressInterval(@NotNull MediaSource mediaSource, @NotNull MediaPlayer mediaPlayer) {
        Job d10;
        Intrinsics.checkNotNullParameter(mediaSource, "mediaSource");
        Intrinsics.checkNotNullParameter(mediaPlayer, "mediaPlayer");
        stopPlayerProgressInterval(mediaSource);
        onMediaPlayerPlaybackProgress(mediaSource, mediaPlayer.currentPositionMs(), mediaPlayer.durationMs());
        Map<Double, Job> map = this.mediaPlayerProgressMap;
        Double portal = mediaSource.getPortal();
        Intrinsics.checkNotNull(portal);
        d10 = hs.i.d(this.scope, null, null, new MediaPlayerManagerModule$startPlayerProgressInterval$1(mediaPlayer, this, mediaSource, null), 3, null);
        map.put(portal, d10);
    }

    public final void stopPlayerProgressInterval(@NotNull MediaSource mediaSource) {
        Job remove;
        Intrinsics.checkNotNullParameter(mediaSource, "mediaSource");
        if (mediaSource.getPortal() != null && (remove = this.mediaPlayerProgressMap.remove(mediaSource.getPortal())) != null) {
            Job.a.a(remove, null, 1, null);
        }
    }

    @ReactMethod
    public final void subscribeToPlaybackEvents() {
        hs.i.d(this.scope, null, null, new MediaPlayerManagerModule$subscribeToPlaybackEvents$1(this, null), 3, null);
        hs.i.d(this.scope, null, null, new MediaPlayerManagerModule$subscribeToPlaybackEvents$2(this, null), 3, null);
        hs.i.d(this.scope, null, null, new MediaPlayerManagerModule$subscribeToPlaybackEvents$3(this, null), 3, null);
    }

    @ReactMethod
    public final void toggle(final double d10, final boolean z10) {
        withPlayer(d10, new Function1() { // from class: com.discord.media_player.e
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit unit;
                unit = MediaPlayerManagerModule.toggle$lambda$0(z10, this, d10, (SimpleExoPlayer) obj);
                return unit;
            }
        });
    }
}
