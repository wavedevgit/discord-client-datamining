package com.discord.chat.presentation.message.view.voicemessages;

import gs.m0;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineDispatcher;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.chat.presentation.message.view.voicemessages.AudioWaveView$recalculateSampleData$1", f = "AudioWaveView.kt", l = {140}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AudioWaveView$recalculateSampleData$1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ int $numChunks;
    final /* synthetic */ byte[] $originalSampleData;
    Object L$0;
    int label;
    final /* synthetic */ AudioWaveView this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0012\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @kotlin.coroutines.jvm.internal.e(c = "com.discord.chat.presentation.message.view.voicemessages.AudioWaveView$recalculateSampleData$1$1", f = "AudioWaveView.kt", l = {}, m = "invokeSuspend")
    /* renamed from: com.discord.chat.presentation.message.view.voicemessages.AudioWaveView$recalculateSampleData$1$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class AnonymousClass1 extends kotlin.coroutines.jvm.internal.k implements Function2<CoroutineScope, Continuation<? super byte[]>, Object> {
        final /* synthetic */ int $numChunks;
        final /* synthetic */ byte[] $originalSampleData;
        int label;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass1(byte[] bArr, int i10, Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
            this.$originalSampleData = bArr;
            this.$numChunks = i10;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            return new AnonymousClass1(this.$originalSampleData, this.$numChunks, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.label == 0) {
                kotlin.c.b(obj);
                return Sampler.INSTANCE.downSample(this.$originalSampleData, this.$numChunks);
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation<? super byte[]> continuation) {
            return ((AnonymousClass1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AudioWaveView$recalculateSampleData$1(AudioWaveView audioWaveView, byte[] bArr, int i10, Continuation<? super AudioWaveView$recalculateSampleData$1> continuation) {
        super(2, continuation);
        this.this$0 = audioWaveView;
        this.$originalSampleData = bArr;
        this.$numChunks = i10;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new AudioWaveView$recalculateSampleData$1(this.this$0, this.$originalSampleData, this.$numChunks, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        AudioWaveView audioWaveView;
        Object f10 = or.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                audioWaveView = (AudioWaveView) this.L$0;
                kotlin.c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            AudioWaveView audioWaveView2 = this.this$0;
            CoroutineDispatcher a10 = m0.a();
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(this.$originalSampleData, this.$numChunks, null);
            this.L$0 = audioWaveView2;
            this.label = 1;
            Object g10 = gs.g.g(a10, anonymousClass1, this);
            if (g10 == f10) {
                return f10;
            }
            audioWaveView = audioWaveView2;
            obj = g10;
        }
        audioWaveView.setDownSampleData((byte[]) obj);
        this.this$0.invalidate();
        return Unit.f33298a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((AudioWaveView$recalculateSampleData$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
    }
}
