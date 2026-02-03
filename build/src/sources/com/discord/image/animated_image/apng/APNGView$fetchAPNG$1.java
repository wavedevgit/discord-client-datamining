package com.discord.image.animated_image.apng;

import android.content.Context;
import com.discord.file_downloader.DownloadState;
import com.discord.file_downloader.FileDownloader;
import com.discord.image.animated_image.animated_image_utils.AnimatedImageStateManager;
import com.discord.image.animated_image.apng.APNGView;
import com.linecorp.apng.ApngDrawable;
import java.io.File;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@kotlin.coroutines.jvm.internal.e(c = "com.discord.image.animated_image.apng.APNGView$fetchAPNG$1", f = "APNGView.kt", l = {91}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class APNGView$fetchAPNG$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ APNGView.Config $config;
    int label;
    final /* synthetic */ APNGView this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public APNGView$fetchAPNG$1(APNGView aPNGView, APNGView.Config config, Continuation<? super APNGView$fetchAPNG$1> continuation) {
        super(2, continuation);
        this.this$0 = aPNGView;
        this.$config = config;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new APNGView$fetchAPNG$1(this.this$0, this.$config, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        String filename;
        Object f10 = rr.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                kotlin.c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            FileDownloader fileDownloader = FileDownloader.INSTANCE;
            Context context = this.this$0.getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            String url = this.$config.getUrl();
            filename = APNGView.Companion.getFilename(this.$config.getUrl());
            Flow downloadFile$default = FileDownloader.downloadFile$default(fileDownloader, context, url, filename, new File(this.this$0.getContext().getCacheDir(), this.$config.getCacheDirectory()), false, 16, null);
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(this.this$0, this.$config);
            this.label = 1;
            if (downloadFile$default.collect(anonymousClass1, this) == f10) {
                return f10;
            }
        }
        return Unit.f32464a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((APNGView$fetchAPNG$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* renamed from: com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AnonymousClass1<T> implements FlowCollector {
        final /* synthetic */ APNGView.Config $config;
        final /* synthetic */ APNGView this$0;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u0004\u0018\u00010\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
        @kotlin.coroutines.jvm.internal.e(c = "com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1$1", f = "APNGView.kt", l = {}, m = "invokeSuspend")
        /* renamed from: com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1$1  reason: invalid class name and collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C01311 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
            final /* synthetic */ APNGView.Config $config;
            final /* synthetic */ ApngDrawable $drawable;
            int label;
            final /* synthetic */ APNGView this$0;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C01311(APNGView aPNGView, ApngDrawable apngDrawable, APNGView.Config config, Continuation<? super C01311> continuation) {
                super(2, continuation);
                this.this$0 = aPNGView;
                this.$drawable = apngDrawable;
                this.$config = config;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
                return new C01311(this.this$0, this.$drawable, this.$config, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                AnimatedImageStateManager animatedImageStateManager;
                rr.b.f();
                if (this.label == 0) {
                    kotlin.c.b(obj);
                    this.this$0.setImageDrawable(null);
                    this.this$0.setImageDrawable(this.$drawable);
                    this.this$0.setBackground(null);
                    animatedImageStateManager = this.this$0.apngStateManager;
                    animatedImageStateManager.onFetchFinished(true, this.$config.getAnimate());
                    Function1<String, Unit> onImageLoaded = this.this$0.getOnImageLoaded();
                    if (onImageLoaded == null) {
                        return null;
                    }
                    onImageLoaded.invoke(this.$config.getUrl());
                    return Unit.f32464a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
                return ((C01311) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u000b\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
        @kotlin.coroutines.jvm.internal.e(c = "com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1$2", f = "APNGView.kt", l = {}, m = "invokeSuspend")
        /* renamed from: com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1$2  reason: invalid class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class AnonymousClass2 extends k implements Function2<CoroutineScope, Continuation<? super Boolean>, Object> {
            int label;
            final /* synthetic */ APNGView this$0;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            AnonymousClass2(APNGView aPNGView, Continuation<? super AnonymousClass2> continuation) {
                super(2, continuation);
                this.this$0 = aPNGView;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
                return new AnonymousClass2(this.this$0, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                AnimatedImageStateManager animatedImageStateManager;
                rr.b.f();
                if (this.label == 0) {
                    kotlin.c.b(obj);
                    animatedImageStateManager = this.this$0.apngStateManager;
                    return kotlin.coroutines.jvm.internal.b.a(AnimatedImageStateManager.onFetchFinished$default(animatedImageStateManager, false, false, 2, null));
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Boolean> continuation) {
                return ((AnonymousClass2) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
        @kotlin.coroutines.jvm.internal.e(c = "com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1$3", f = "APNGView.kt", l = {}, m = "invokeSuspend")
        /* renamed from: com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1$3  reason: invalid class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class AnonymousClass3 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
            int label;
            final /* synthetic */ APNGView this$0;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            AnonymousClass3(APNGView aPNGView, Continuation<? super AnonymousClass3> continuation) {
                super(2, continuation);
                this.this$0 = aPNGView;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
                return new AnonymousClass3(this.this$0, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                AnimatedImageStateManager animatedImageStateManager;
                rr.b.f();
                if (this.label == 0) {
                    kotlin.c.b(obj);
                    animatedImageStateManager = this.this$0.apngStateManager;
                    AnimatedImageStateManager.onFetchFinished$default(animatedImageStateManager, false, false, 2, null);
                    return Unit.f32464a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
                return ((AnonymousClass3) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        AnonymousClass1(APNGView aPNGView, APNGView.Config config) {
            this.this$0 = aPNGView;
            this.$config = config;
        }

        /* JADX WARN: Can't wrap try/catch for region: R(8:1|(2:3|(5:5|6|7|(1:(1:(1:(3:12|13|14)(2:16|17))(3:18|19|20))(4:21|22|19|20))(3:24|(1:26)(4:29|(1:31)|19|20)|28)|33))|35|6|7|(0)(0)|33|(1:(0))) */
        /* JADX WARN: Code restructure failed: missing block: B:22:0x006a, code lost:
            if (js.g.g(r15, r2, r0) == r1) goto L28;
         */
        /* JADX WARN: Code restructure failed: missing block: B:25:0x007e, code lost:
            if (js.g.g(r14, r15, r0) != r1) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:30:0x0096, code lost:
            if (js.g.g(r14, r15, r0) == r1) goto L28;
         */
        /* JADX WARN: Removed duplicated region for block: B:10:0x0026  */
        /* JADX WARN: Removed duplicated region for block: B:19:0x0040  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object emit(com.discord.file_downloader.DownloadState r14, kotlin.coroutines.Continuation<? super kotlin.Unit> r15) {
            /*
                r13 = this;
                boolean r0 = r15 instanceof com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1$emit$1
                if (r0 == 0) goto L13
                r0 = r15
                com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1$emit$1 r0 = (com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1$emit$1) r0
                int r1 = r0.label
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.label = r1
                goto L18
            L13:
                com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1$emit$1 r0 = new com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1$emit$1
                r0.<init>(r13, r15)
            L18:
                java.lang.Object r15 = r0.result
                java.lang.Object r1 = rr.b.f()
                int r2 = r0.label
                r3 = 3
                r4 = 2
                r5 = 1
                r6 = 0
                if (r2 == 0) goto L40
                if (r2 == r5) goto L3c
                if (r2 == r4) goto L38
                if (r2 != r3) goto L30
                kotlin.c.b(r15)
                goto L99
            L30:
                java.lang.IllegalStateException r14 = new java.lang.IllegalStateException
                java.lang.String r15 = "call to 'resume' before 'invoke' with coroutine"
                r14.<init>(r15)
                throw r14
            L38:
                kotlin.c.b(r15)
                goto L9c
            L3c:
                kotlin.c.b(r15)     // Catch: java.lang.Exception -> L6d
                goto L9c
            L40:
                kotlin.c.b(r15)
                boolean r15 = r14 instanceof com.discord.file_downloader.DownloadState.Completed
                if (r15 == 0) goto L81
                com.linecorp.apng.ApngDrawable$b r7 = com.linecorp.apng.ApngDrawable.D     // Catch: java.lang.Exception -> L6d
                com.discord.file_downloader.DownloadState$Completed r14 = (com.discord.file_downloader.DownloadState.Completed) r14     // Catch: java.lang.Exception -> L6d
                java.io.File r8 = r14.getFile()     // Catch: java.lang.Exception -> L6d
                r11 = 6
                r12 = 0
                r9 = 0
                r10 = 0
                com.linecorp.apng.ApngDrawable r14 = com.linecorp.apng.ApngDrawable.b.c(r7, r8, r9, r10, r11, r12)     // Catch: java.lang.Exception -> L6d
                js.c1 r15 = js.m0.c()     // Catch: java.lang.Exception -> L6d
                com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1$1 r2 = new com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1$1     // Catch: java.lang.Exception -> L6d
                com.discord.image.animated_image.apng.APNGView r3 = r13.this$0     // Catch: java.lang.Exception -> L6d
                com.discord.image.animated_image.apng.APNGView$Config r7 = r13.$config     // Catch: java.lang.Exception -> L6d
                r2.<init>(r3, r14, r7, r6)     // Catch: java.lang.Exception -> L6d
                r0.label = r5     // Catch: java.lang.Exception -> L6d
                java.lang.Object r14 = js.g.g(r15, r2, r0)     // Catch: java.lang.Exception -> L6d
                if (r14 != r1) goto L9c
                goto L98
            L6d:
                js.c1 r14 = js.m0.c()
                com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1$2 r15 = new com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1$2
                com.discord.image.animated_image.apng.APNGView r2 = r13.this$0
                r15.<init>(r2, r6)
                r0.label = r4
                java.lang.Object r14 = js.g.g(r14, r15, r0)
                if (r14 != r1) goto L9c
                goto L98
            L81:
                boolean r14 = r14 instanceof com.discord.file_downloader.DownloadState.Failure
                if (r14 == 0) goto L9c
                js.c1 r14 = js.m0.c()
                com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1$3 r15 = new com.discord.image.animated_image.apng.APNGView$fetchAPNG$1$1$3
                com.discord.image.animated_image.apng.APNGView r2 = r13.this$0
                r15.<init>(r2, r6)
                r0.label = r3
                java.lang.Object r14 = js.g.g(r14, r15, r0)
                if (r14 != r1) goto L99
            L98:
                return r1
            L99:
                kotlin.Unit r14 = kotlin.Unit.f32464a
                return r14
            L9c:
                kotlin.Unit r14 = kotlin.Unit.f32464a
                return r14
            */
            throw new UnsupportedOperationException("Method not decompiled: com.discord.image.animated_image.apng.APNGView$fetchAPNG$1.AnonymousClass1.emit(com.discord.file_downloader.DownloadState, kotlin.coroutines.Continuation):java.lang.Object");
        }

        @Override // kotlinx.coroutines.flow.FlowCollector
        public /* bridge */ /* synthetic */ Object emit(Object obj, Continuation continuation) {
            return emit((DownloadState) obj, (Continuation<? super Unit>) continuation);
        }
    }
}
