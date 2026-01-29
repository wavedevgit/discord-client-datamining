package com.discord.sounds;

import android.content.Context;
import android.content.res.AssetFileDescriptor;
import android.media.AudioAttributes;
import android.media.MediaPlayer;
import android.net.Uri;
import com.discord.logging.Log;
import java.io.IOException;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00008\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\t\n\u0002\u0010\u0007\n\u0002\b\u0012\b\u0000\u0018\u0000 )2\u00020\u0001:\u0001)B/\b\u0001\u0012\b\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0012\u0010\b\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u00070\u0006¢\u0006\u0004\b\t\u0010\nBC\b\u0016\u0012\u0006\u0010\f\u001a\u00020\u000b\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\n\b\u0001\u0010\r\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u000e\u0012\u0012\u0010\b\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u00070\u0006¢\u0006\u0004\b\t\u0010\u0010J#\u0010\u0011\u001a\u00020\u00072\u0012\u0010\b\u001a\u000e\u0012\u0004\u0012\u00020\u0004\u0012\u0004\u0012\u00020\u00070\u0006H\u0002¢\u0006\u0004\b\u0011\u0010\u0012J\r\u0010\u0013\u001a\u00020\u0007¢\u0006\u0004\b\u0013\u0010\u0014J\r\u0010\u0015\u001a\u00020\u0007¢\u0006\u0004\b\u0015\u0010\u0014J\r\u0010\u0016\u001a\u00020\u0007¢\u0006\u0004\b\u0016\u0010\u0014J\r\u0010\u0017\u001a\u00020\u0007¢\u0006\u0004\b\u0017\u0010\u0014J\u0015\u0010\u001a\u001a\u00020\u00072\u0006\u0010\u0019\u001a\u00020\u0018¢\u0006\u0004\b\u001a\u0010\u001bJ\u0015\u0010\u001d\u001a\u00020\u00072\u0006\u0010\u001c\u001a\u00020\u0018¢\u0006\u0004\b\u001d\u0010\u001bJ\u0015\u0010\u001f\u001a\u00020\u00072\u0006\u0010\u001e\u001a\u00020\u0004¢\u0006\u0004\b\u001f\u0010 R\u0018\u0010\u0003\u001a\u0004\u0018\u00010\u00028\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0003\u0010!R\u0017\u0010\u0005\u001a\u00020\u00048\u0006¢\u0006\f\n\u0004\b\u0005\u0010\"\u001a\u0004\b#\u0010$R\u0016\u0010\u0019\u001a\u00020\u00188\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0019\u0010%R\"\u0010&\u001a\u00020\u00048\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b&\u0010\"\u001a\u0004\b'\u0010$\"\u0004\b(\u0010 ¨\u0006*"}, d2 = {"Lcom/discord/sounds/SoundPlayer;", "", "Landroid/media/MediaPlayer;", "mediaPlayer", "", "usage", "Lkotlin/Function1;", "", "soundResIdPrepared", "<init>", "(Landroid/media/MediaPlayer;ILkotlin/jvm/functions/Function1;)V", "Landroid/content/Context;", "context", "soundResId", "", "filePath", "(Landroid/content/Context;ILjava/lang/Integer;Ljava/lang/String;Lkotlin/jvm/functions/Function1;)V", "initializeMediaPlayer", "(Lkotlin/jvm/functions/Function1;)V", "play", "()V", "pause", "stop", "release", "", "volume", "setVolume", "(F)V", "pan", "setPan", "time", "setCurrentTime", "(I)V", "Landroid/media/MediaPlayer;", "I", "getUsage", "()I", "F", "numberOfLoops", "getNumberOfLoops", "setNumberOfLoops", "Companion", "sounds_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SoundPlayer {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private MediaPlayer mediaPlayer;
    private int numberOfLoops;
    private final int usage;
    private float volume;

    @Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J3\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\t2\n\b\u0001\u0010\n\u001a\u0004\u0018\u00010\t2\b\u0010\u000b\u001a\u0004\u0018\u00010\fH\u0002¢\u0006\u0002\u0010\r¨\u0006\u000e"}, d2 = {"Lcom/discord/sounds/SoundPlayer$Companion;", "", "<init>", "()V", "createMediaPlayer", "Landroid/media/MediaPlayer;", "context", "Landroid/content/Context;", "usage", "", "soundResId", "filePath", "", "(Landroid/content/Context;ILjava/lang/Integer;Ljava/lang/String;)Landroid/media/MediaPlayer;", "sounds_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nSoundPlayer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SoundPlayer.kt\ncom/discord/sounds/SoundPlayer$Companion\n+ 2 Uri.kt\nandroidx/core/net/UriKt\n*L\n1#1,181:1\n29#2:182\n*S KotlinDebug\n*F\n+ 1 SoundPlayer.kt\ncom/discord/sounds/SoundPlayer$Companion\n*L\n173#1:182\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final MediaPlayer createMediaPlayer(Context context, int i10, Integer num, String str) {
            MediaPlayer mediaPlayer = new MediaPlayer();
            mediaPlayer.setAudioAttributes(new AudioAttributes.Builder().setContentType(4).setUsage(i10).build());
            if (num != null) {
                AssetFileDescriptor openRawResourceFd = context.getResources().openRawResourceFd(num.intValue());
                mediaPlayer.setDataSource(openRawResourceFd.getFileDescriptor(), openRawResourceFd.getStartOffset(), openRawResourceFd.getLength());
            }
            if (str != null) {
                try {
                    mediaPlayer.setDataSource(context, Uri.parse(str));
                    return mediaPlayer;
                } catch (Exception e10) {
                    Log.INSTANCE.w(SoundManager.Companion.getLogTag(), "Failed to set sound.", e10);
                }
            }
            return mediaPlayer;
        }

        private Companion() {
        }
    }

    public SoundPlayer(MediaPlayer mediaPlayer, int i10, @NotNull Function1<? super Integer, Unit> soundResIdPrepared) {
        Intrinsics.checkNotNullParameter(soundResIdPrepared, "soundResIdPrepared");
        this.mediaPlayer = mediaPlayer;
        this.usage = i10;
        this.volume = 1.0f;
        initializeMediaPlayer(soundResIdPrepared);
    }

    private final void initializeMediaPlayer(final Function1<? super Integer, Unit> function1) {
        MediaPlayer mediaPlayer = this.mediaPlayer;
        if (mediaPlayer != null) {
            mediaPlayer.setOnCompletionListener(new MediaPlayer.OnCompletionListener() { // from class: com.discord.sounds.c
                @Override // android.media.MediaPlayer.OnCompletionListener
                public final void onCompletion(MediaPlayer mediaPlayer2) {
                    SoundPlayer.initializeMediaPlayer$lambda$0(SoundPlayer.this, mediaPlayer2);
                }
            });
        }
        MediaPlayer mediaPlayer2 = this.mediaPlayer;
        if (mediaPlayer2 != null) {
            mediaPlayer2.setOnPreparedListener(new MediaPlayer.OnPreparedListener() { // from class: com.discord.sounds.d
                @Override // android.media.MediaPlayer.OnPreparedListener
                public final void onPrepared(MediaPlayer mediaPlayer3) {
                    SoundPlayer.initializeMediaPlayer$lambda$1(Function1.this, mediaPlayer3);
                }
            });
        }
        try {
            MediaPlayer mediaPlayer3 = this.mediaPlayer;
            if (mediaPlayer3 != null) {
                mediaPlayer3.prepare();
            }
        } catch (IOException unused) {
            this.mediaPlayer = null;
            function1.invoke(0);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void initializeMediaPlayer$lambda$0(SoundPlayer soundPlayer, MediaPlayer mediaPlayer) {
        int i10 = soundPlayer.numberOfLoops;
        if (i10 != 0) {
            soundPlayer.numberOfLoops = i10 - 1;
            soundPlayer.play();
            return;
        }
        soundPlayer.release();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void initializeMediaPlayer$lambda$1(Function1 function1, MediaPlayer mediaPlayer) {
        function1.invoke(Integer.valueOf(mediaPlayer.getDuration()));
    }

    public final int getNumberOfLoops() {
        return this.numberOfLoops;
    }

    public final int getUsage() {
        return this.usage;
    }

    public final void pause() {
        try {
            MediaPlayer mediaPlayer = this.mediaPlayer;
            if (mediaPlayer != null) {
                mediaPlayer.pause();
            }
        } catch (Exception e10) {
            Log.INSTANCE.w(SoundManager.Companion.getLogTag(), "Failed to pause.", e10);
        }
    }

    public final void play() {
        try {
            MediaPlayer mediaPlayer = this.mediaPlayer;
            if (mediaPlayer != null) {
                mediaPlayer.start();
            }
        } catch (Exception e10) {
            Log.INSTANCE.w(SoundManager.Companion.getLogTag(), "Failed to start.", e10);
        }
    }

    public final void release() {
        try {
            MediaPlayer mediaPlayer = this.mediaPlayer;
            if (mediaPlayer != null) {
                mediaPlayer.release();
            }
            this.mediaPlayer = null;
        } catch (Exception unused) {
            this.mediaPlayer = null;
            Log.w$default(Log.INSTANCE, SoundManager.Companion.getLogTag(), "Unable to release media player.", (Throwable) null, 4, (Object) null);
        }
    }

    public final void setCurrentTime(int i10) {
        try {
            MediaPlayer mediaPlayer = this.mediaPlayer;
            if (mediaPlayer != null) {
                mediaPlayer.seekTo(i10);
            }
        } catch (Exception e10) {
            Log.INSTANCE.w(SoundManager.Companion.getLogTag(), "Failed to seek to.", e10);
        }
    }

    public final void setNumberOfLoops(int i10) {
        this.numberOfLoops = i10;
    }

    public final void setPan(float f10) {
        float f11;
        float f12;
        int i10 = (f10 > 0.5f ? 1 : (f10 == 0.5f ? 0 : -1));
        try {
            if (i10 >= 0) {
                float f13 = 2;
                f11 = this.volume * (f13 - (f10 * f13));
            } else {
                f11 = this.volume;
            }
            if (i10 >= 0) {
                f12 = this.volume;
            } else {
                f12 = f10 * 2 * this.volume;
            }
            MediaPlayer mediaPlayer = this.mediaPlayer;
            if (mediaPlayer != null) {
                mediaPlayer.setVolume(f11, f12);
            }
        } catch (Exception e10) {
            Log.INSTANCE.w(SoundManager.Companion.getLogTag(), "Failed to pan.", e10);
        }
    }

    public final void setVolume(float f10) {
        try {
            MediaPlayer mediaPlayer = this.mediaPlayer;
            if (mediaPlayer != null) {
                mediaPlayer.setVolume(f10, f10);
            }
            this.volume = f10;
        } catch (Exception e10) {
            Log.INSTANCE.w(SoundManager.Companion.getLogTag(), "Failed to set volume.", e10);
        }
    }

    public final void stop() {
        try {
            MediaPlayer mediaPlayer = this.mediaPlayer;
            if (mediaPlayer != null) {
                mediaPlayer.pause();
            }
            MediaPlayer mediaPlayer2 = this.mediaPlayer;
            if (mediaPlayer2 != null) {
                mediaPlayer2.seekTo(0);
            }
        } catch (Exception e10) {
            Log.INSTANCE.w(SoundManager.Companion.getLogTag(), "Failed to stop.", e10);
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public SoundPlayer(@NotNull Context context, int i10, Integer num, String str, @NotNull Function1<? super Integer, Unit> soundResIdPrepared) {
        this(Companion.createMediaPlayer(context, i10, num, str), i10, soundResIdPrepared);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(soundResIdPrepared, "soundResIdPrepared");
    }
}
