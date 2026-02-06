package com.discord.sticker.sticker_types;

import com.discord.sticker.sticker_types.RLottieImageView;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.sticker.sticker_types.RLottieImageView$fetchSticker$1", f = "RLottieImageView.kt", l = {74, 84}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class RLottieImageView$fetchSticker$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ RLottieImageView.Config $config;
    int label;
    final /* synthetic */ RLottieImageView this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @kotlin.coroutines.jvm.internal.e(c = "com.discord.sticker.sticker_types.RLottieImageView$fetchSticker$1$1", f = "RLottieImageView.kt", l = {}, m = "invokeSuspend")
    /* renamed from: com.discord.sticker.sticker_types.RLottieImageView$fetchSticker$1$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AnonymousClass1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
        int label;
        final /* synthetic */ RLottieImageView this$0;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass1(RLottieImageView rLottieImageView, Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
            this.this$0 = rLottieImageView;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            return new AnonymousClass1(this.this$0, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.label == 0) {
                kotlin.c.b(obj);
                this.this$0.clearAnimation();
                return Unit.f32008a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
            return ((AnonymousClass1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RLottieImageView$fetchSticker$1(RLottieImageView rLottieImageView, RLottieImageView.Config config, Continuation<? super RLottieImageView$fetchSticker$1> continuation) {
        super(2, continuation);
        this.this$0 = rLottieImageView;
        this.$config = config;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new RLottieImageView$fetchSticker$1(this.this$0, this.$config, continuation);
    }

    /* JADX WARN: Code restructure failed: missing block: B:11:0x0034, code lost:
        if (os.g.g(r12, r1, r11) == r0) goto L14;
     */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x0089, code lost:
        if (r12.collect(r1, r11) == r0) goto L14;
     */
    /* JADX WARN: Code restructure failed: missing block: B:15:0x008b, code lost:
        return r0;
     */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(java.lang.Object r12) {
        /*
            r11 = this;
            java.lang.Object r0 = wr.b.f()
            int r1 = r11.label
            r2 = 2
            r3 = 1
            if (r1 == 0) goto L1f
            if (r1 == r3) goto L1b
            if (r1 != r2) goto L13
            kotlin.c.b(r12)
            goto L8c
        L13:
            java.lang.IllegalStateException r12 = new java.lang.IllegalStateException
            java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
            r12.<init>(r0)
            throw r12
        L1b:
            kotlin.c.b(r12)
            goto L37
        L1f:
            kotlin.c.b(r12)
            os.c1 r12 = os.m0.c()
            com.discord.sticker.sticker_types.RLottieImageView$fetchSticker$1$1 r1 = new com.discord.sticker.sticker_types.RLottieImageView$fetchSticker$1$1
            com.discord.sticker.sticker_types.RLottieImageView r4 = r11.this$0
            r5 = 0
            r1.<init>(r4, r5)
            r11.label = r3
            java.lang.Object r12 = os.g.g(r12, r1, r11)
            if (r12 != r0) goto L37
            goto L8b
        L37:
            com.discord.file_downloader.FileDownloader r3 = com.discord.file_downloader.FileDownloader.INSTANCE
            com.discord.sticker.sticker_types.RLottieImageView r12 = r11.this$0
            android.content.Context r4 = r12.getContext()
            java.lang.String r12 = "getContext(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r4, r12)
            com.discord.sticker.sticker_types.RLottieImageView$Config r12 = r11.$config
            java.lang.String r5 = r12.getUrl()
            com.discord.sticker.sticker_types.RLottieImageView$Config r12 = r11.$config
            java.lang.String r12 = r12.getAsset()
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            r1.<init>()
            r1.append(r12)
            java.lang.String r12 = ".json"
            r1.append(r12)
            java.lang.String r6 = r1.toString()
            java.io.File r7 = new java.io.File
            com.discord.sticker.sticker_types.RLottieImageView r12 = r11.this$0
            android.content.Context r12 = r12.getContext()
            java.io.File r12 = r12.getCacheDir()
            java.lang.String r1 = "stickers"
            r7.<init>(r12, r1)
            r9 = 16
            r10 = 0
            r8 = 0
            kotlinx.coroutines.flow.Flow r12 = com.discord.file_downloader.FileDownloader.downloadFile$default(r3, r4, r5, r6, r7, r8, r9, r10)
            com.discord.sticker.sticker_types.RLottieImageView$fetchSticker$1$2 r1 = new com.discord.sticker.sticker_types.RLottieImageView$fetchSticker$1$2
            com.discord.sticker.sticker_types.RLottieImageView r3 = r11.this$0
            com.discord.sticker.sticker_types.RLottieImageView$Config r4 = r11.$config
            r1.<init>()
            r11.label = r2
            java.lang.Object r12 = r12.collect(r1, r11)
            if (r12 != r0) goto L8c
        L8b:
            return r0
        L8c:
            kotlin.Unit r12 = kotlin.Unit.f32008a
            return r12
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.sticker.sticker_types.RLottieImageView$fetchSticker$1.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((RLottieImageView$fetchSticker$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
    }
}
