package com.discord.media_player;

import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.media_player.MediaPlayerManagerModule$startPlayerProgressInterval$1", f = "MediaPlayerManagerModule.kt", l = {231, 247}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaPlayerManagerModule$startPlayerProgressInterval$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ MediaPlayer $mediaPlayer;
    final /* synthetic */ MediaSource $mediaSource;
    private /* synthetic */ Object L$0;
    int label;
    final /* synthetic */ MediaPlayerManagerModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @kotlin.coroutines.jvm.internal.e(c = "com.discord.media_player.MediaPlayerManagerModule$startPlayerProgressInterval$1$1", f = "MediaPlayerManagerModule.kt", l = {}, m = "invokeSuspend")
    /* renamed from: com.discord.media_player.MediaPlayerManagerModule$startPlayerProgressInterval$1$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AnonymousClass1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
        final /* synthetic */ MediaPlayer $mediaPlayer;
        final /* synthetic */ MediaSource $mediaSource;
        int label;
        final /* synthetic */ MediaPlayerManagerModule this$0;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass1(MediaPlayer mediaPlayer, MediaPlayerManagerModule mediaPlayerManagerModule, MediaSource mediaSource, Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
            this.$mediaPlayer = mediaPlayer;
            this.this$0 = mediaPlayerManagerModule;
            this.$mediaSource = mediaSource;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            return new AnonymousClass1(this.$mediaPlayer, this.this$0, this.$mediaSource, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.label == 0) {
                kotlin.c.b(obj);
                if (this.$mediaPlayer.isPlaying()) {
                    this.this$0.onMediaPlayerPlaybackProgress(this.$mediaSource, this.$mediaPlayer.currentPositionMs(), this.$mediaPlayer.durationMs());
                }
                if (this.$mediaPlayer.durationMs() > 0 && (this.$mediaPlayer.isPlaying() || this.$mediaPlayer.isBuffering())) {
                    this.this$0.onMediaPlayerDownloadProgress(this.$mediaSource.getPortal().doubleValue(), this.$mediaPlayer.bufferedPositionMs(), this.$mediaPlayer.durationMs());
                }
                return Unit.f33282a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
            return ((AnonymousClass1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public MediaPlayerManagerModule$startPlayerProgressInterval$1(MediaPlayer mediaPlayer, MediaPlayerManagerModule mediaPlayerManagerModule, MediaSource mediaSource, Continuation<? super MediaPlayerManagerModule$startPlayerProgressInterval$1> continuation) {
        super(2, continuation);
        this.$mediaPlayer = mediaPlayer;
        this.this$0 = mediaPlayerManagerModule;
        this.$mediaSource = mediaSource;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        MediaPlayerManagerModule$startPlayerProgressInterval$1 mediaPlayerManagerModule$startPlayerProgressInterval$1 = new MediaPlayerManagerModule$startPlayerProgressInterval$1(this.$mediaPlayer, this.this$0, this.$mediaSource, continuation);
        mediaPlayerManagerModule$startPlayerProgressInterval$1.L$0 = obj;
        return mediaPlayerManagerModule$startPlayerProgressInterval$1;
    }

    /* JADX WARN: Code restructure failed: missing block: B:19:0x005a, code lost:
        if (gs.i0.a(100, r9) != r0) goto L6;
     */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0034  */
    /* JADX WARN: Removed duplicated region for block: B:21:0x005d  */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:19:0x005a -> B:7:0x0015). Please submit an issue!!! */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(java.lang.Object r10) {
        /*
            r9 = this;
            java.lang.Object r0 = or.b.f()
            int r1 = r9.label
            r2 = 2
            r3 = 1
            if (r1 == 0) goto L27
            if (r1 == r3) goto L1f
            if (r1 != r2) goto L17
            java.lang.Object r1 = r9.L$0
            kotlinx.coroutines.CoroutineScope r1 = (kotlinx.coroutines.CoroutineScope) r1
            kotlin.c.b(r10)
        L15:
            r10 = r1
            goto L2e
        L17:
            java.lang.IllegalStateException r10 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r10.<init>(r0)
            throw r10
        L1f:
            java.lang.Object r1 = r9.L$0
            kotlinx.coroutines.CoroutineScope r1 = (kotlinx.coroutines.CoroutineScope) r1
            kotlin.c.b(r10)
            goto L50
        L27:
            kotlin.c.b(r10)
            java.lang.Object r10 = r9.L$0
            kotlinx.coroutines.CoroutineScope r10 = (kotlinx.coroutines.CoroutineScope) r10
        L2e:
            boolean r1 = kotlinx.coroutines.i.i(r10)
            if (r1 == 0) goto L5d
            gs.c1 r1 = gs.m0.c()
            com.discord.media_player.MediaPlayerManagerModule$startPlayerProgressInterval$1$1 r4 = new com.discord.media_player.MediaPlayerManagerModule$startPlayerProgressInterval$1$1
            com.discord.media_player.MediaPlayer r5 = r9.$mediaPlayer
            com.discord.media_player.MediaPlayerManagerModule r6 = r9.this$0
            com.discord.media_player.MediaSource r7 = r9.$mediaSource
            r8 = 0
            r4.<init>(r5, r6, r7, r8)
            r9.L$0 = r10
            r9.label = r3
            java.lang.Object r1 = gs.g.g(r1, r4, r9)
            if (r1 != r0) goto L4f
            goto L5c
        L4f:
            r1 = r10
        L50:
            r9.L$0 = r1
            r9.label = r2
            r4 = 100
            java.lang.Object r10 = gs.i0.a(r4, r9)
            if (r10 != r0) goto L15
        L5c:
            return r0
        L5d:
            kotlin.Unit r10 = kotlin.Unit.f33282a
            return r10
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.media_player.MediaPlayerManagerModule$startPlayerProgressInterval$1.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((MediaPlayerManagerModule$startPlayerProgressInterval$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
    }
}
