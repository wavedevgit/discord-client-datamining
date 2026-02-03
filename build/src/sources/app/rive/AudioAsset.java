package app.rive;

import app.rive.core.AudioHandle;
import app.rive.core.CommandQueue;
import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import org.webrtc.MediaStreamTrack;
@Metadata(d1 = {"\u0000\u0018\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0007\u0018\u0000 \u00072\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0001\u0007B\u0015\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0002\u0010\u0006¨\u0006\b"}, d2 = {"Lapp/rive/AudioAsset;", "Lapp/rive/Asset;", "Lapp/rive/core/AudioHandle;", "handle", "queue", "Lapp/rive/core/CommandQueue;", "(JLapp/rive/core/CommandQueue;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "Companion", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AudioAsset extends Asset<AudioHandle> {
    public static final int $stable = 0;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String tag = "Rive/Audio";
    @NotNull
    private static final String label = MediaStreamTrack.AUDIO_TRACK_KIND;

    @Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0012\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0007\b\u0086\u0003\u0018\u00002\u000e\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u00030\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0004J\"\u0010\u000b\u001a\u00020\u00032\u0006\u0010\f\u001a\u00020\u00022\u0006\u0010\r\u001a\u00020\u000eH\u0016ø\u0001\u0000¢\u0006\u0004\b\u000f\u0010\u0010J&\u0010\u0011\u001a\u00020\u00022\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u0012\u001a\u00020\u0013H\u0096@ø\u0001\u0001ø\u0001\u0000¢\u0006\u0004\b\u0014\u0010\u0015J\"\u0010\u0016\u001a\u00020\u00172\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\f\u001a\u00020\u0002H\u0016ø\u0001\u0000¢\u0006\u0004\b\u0018\u0010\u0019J$\u0010\u001a\u001a\b\u0012\u0004\u0012\u00020\u00030\u001b2\u0006\u0010\u001c\u001a\u00020\u000e2\u0006\u0010\u0012\u001a\u00020\u0013H\u0086@¢\u0006\u0002\u0010\u0015J*\u0010\u001d\u001a\u00020\u00172\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u001e\u001a\u00020\u00062\u0006\u0010\f\u001a\u00020\u0002H\u0016ø\u0001\u0000¢\u0006\u0004\b\u001f\u0010 J\u0018\u0010!\u001a\u00020\u00172\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u001e\u001a\u00020\u0006H\u0016R\u0014\u0010\u0005\u001a\u00020\u0006X\u0096D¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0014\u0010\t\u001a\u00020\u0006X\u0096D¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\b\u0082\u0002\u000b\n\u0005\b¡\u001e0\u0001\n\u0002\b!¨\u0006\""}, d2 = {"Lapp/rive/AudioAsset$Companion;", "Lapp/rive/AssetOps;", "Lapp/rive/core/AudioHandle;", "Lapp/rive/AudioAsset;", "()V", "label", "", "getLabel", "()Ljava/lang/String;", "tag", "getTag", "construct", "handle", "queue", "Lapp/rive/core/CommandQueue;", "construct-QxJutAs", "(JLapp/rive/core/CommandQueue;)Lapp/rive/AudioAsset;", "decode", "bytes", "", "decode-Z6pBmcA", "(Lapp/rive/core/CommandQueue;[BLkotlin/coroutines/Continuation;)Ljava/lang/Object;", "delete", "", "delete-4kKS7jM", "(Lapp/rive/core/CommandQueue;J)V", "fromBytes", "Lapp/rive/Result;", "commandQueue", "register", "key", "register-d3xxSlE", "(Lapp/rive/core/CommandQueue;Ljava/lang/String;J)V", "unregister", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion implements AssetOps<AudioHandle, AudioAsset> {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // app.rive.AssetOps
        public /* bridge */ /* synthetic */ AudioAsset construct(AudioHandle audioHandle, CommandQueue commandQueue) {
            return m21constructQxJutAs(audioHandle.m107unboximpl(), commandQueue);
        }

        @NotNull
        /* renamed from: construct-QxJutAs  reason: not valid java name */
        public AudioAsset m21constructQxJutAs(long j10, @NotNull CommandQueue queue) {
            Intrinsics.checkNotNullParameter(queue, "queue");
            return new AudioAsset(j10, queue, null);
        }

        @Override // app.rive.AssetOps
        /* renamed from: decode-Z6pBmcA  reason: not valid java name */
        public Object decode(@NotNull CommandQueue commandQueue, @NotNull byte[] bArr, @NotNull Continuation<? super AudioHandle> continuation) {
            return commandQueue.m117decodeAudioWLIIakE(bArr, continuation);
        }

        @Override // app.rive.AssetOps
        public /* bridge */ /* synthetic */ void delete(CommandQueue commandQueue, AudioHandle audioHandle) {
            m23delete4kKS7jM(commandQueue, audioHandle.m107unboximpl());
        }

        /* renamed from: delete-4kKS7jM  reason: not valid java name */
        public void m23delete4kKS7jM(@NotNull CommandQueue queue, long j10) {
            Intrinsics.checkNotNullParameter(queue, "queue");
            queue.m121deleteAudioQAnvCWo(j10);
        }

        public final Object fromBytes(@NotNull CommandQueue commandQueue, @NotNull byte[] bArr, @NotNull Continuation<? super Result<AudioAsset>> continuation) {
            return Asset.Companion.fromBytes$kotlin_release(this, commandQueue, bArr, continuation);
        }

        @Override // app.rive.AssetOps
        @NotNull
        public String getLabel() {
            return AudioAsset.label;
        }

        @Override // app.rive.AssetOps
        @NotNull
        public String getTag() {
            return AudioAsset.tag;
        }

        @Override // app.rive.AssetOps
        public /* bridge */ /* synthetic */ void register(CommandQueue commandQueue, String str, AudioHandle audioHandle) {
            m24registerd3xxSlE(commandQueue, str, audioHandle.m107unboximpl());
        }

        /* renamed from: register-d3xxSlE  reason: not valid java name */
        public void m24registerd3xxSlE(@NotNull CommandQueue queue, @NotNull String key, long j10) {
            Intrinsics.checkNotNullParameter(queue, "queue");
            Intrinsics.checkNotNullParameter(key, "key");
            queue.m145registerAudio4kKS7jM(key, j10);
        }

        @Override // app.rive.AssetOps
        public void unregister(@NotNull CommandQueue queue, @NotNull String key) {
            Intrinsics.checkNotNullParameter(queue, "queue");
            Intrinsics.checkNotNullParameter(key, "key");
            queue.unregisterAudio(key);
        }

        private Companion() {
        }
    }

    public /* synthetic */ AudioAsset(long j10, CommandQueue commandQueue, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, commandQueue);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private AudioAsset(long j10, CommandQueue queue) {
        super(AudioHandle.m101boximpl(j10), queue, Companion, null);
        Intrinsics.checkNotNullParameter(queue, "queue");
    }
}
