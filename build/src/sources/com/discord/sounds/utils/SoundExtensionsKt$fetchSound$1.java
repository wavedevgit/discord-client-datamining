package com.discord.sounds.utils;

import android.content.Context;
import com.discord.file_downloader.DownloadState;
import com.discord.file_downloader.FileDownloader;
import com.discord.logging.Log;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.discord.sounds.SoundManager;
import java.io.File;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import rr.b;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1", f = "SoundExtensions.kt", l = {ChatViewRecyclerTypes.REACTION_ADD_REACTION}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SoundExtensionsKt$fetchSound$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ Context $context;
    final /* synthetic */ String $fileName;
    final /* synthetic */ int $key;
    final /* synthetic */ File $soundDirectory;
    final /* synthetic */ SoundManager $soundManager;
    final /* synthetic */ Function1<Integer, Unit> $soundResIdPrepared;
    final /* synthetic */ String $url;
    final /* synthetic */ int $usage;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public SoundExtensionsKt$fetchSound$1(Context context, String str, String str2, File file, SoundManager soundManager, int i10, int i11, Function1<? super Integer, Unit> function1, Continuation<? super SoundExtensionsKt$fetchSound$1> continuation) {
        super(2, continuation);
        this.$context = context;
        this.$url = str;
        this.$fileName = str2;
        this.$soundDirectory = file;
        this.$soundManager = soundManager;
        this.$key = i10;
        this.$usage = i11;
        this.$soundResIdPrepared = function1;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new SoundExtensionsKt$fetchSound$1(this.$context, this.$url, this.$fileName, this.$soundDirectory, this.$soundManager, this.$key, this.$usage, this.$soundResIdPrepared, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        Object f10 = b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            c.b(obj);
            Flow downloadFile$default = FileDownloader.downloadFile$default(FileDownloader.INSTANCE, this.$context, this.$url, this.$fileName, this.$soundDirectory, false, 16, null);
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(this.$soundManager, this.$key, this.$usage, this.$soundResIdPrepared);
            this.label = 1;
            if (downloadFile$default.collect(anonymousClass1, this) == f10) {
                return f10;
            }
        }
        return Unit.f32464a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((SoundExtensionsKt$fetchSound$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* renamed from: com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AnonymousClass1<T> implements FlowCollector {
        final /* synthetic */ int $key;
        final /* synthetic */ SoundManager $soundManager;
        final /* synthetic */ Function1<Integer, Unit> $soundResIdPrepared;
        final /* synthetic */ int $usage;

        /* JADX INFO: Access modifiers changed from: package-private */
        @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
        @e(c = "com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1$1", f = "SoundExtensions.kt", l = {}, m = "invokeSuspend")
        /* renamed from: com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1$1  reason: invalid class name and collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C01331 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
            final /* synthetic */ DownloadState $downloadState;
            final /* synthetic */ int $key;
            final /* synthetic */ SoundManager $soundManager;
            final /* synthetic */ Function1<Integer, Unit> $soundResIdPrepared;
            final /* synthetic */ int $usage;
            int label;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            /* JADX WARN: Multi-variable type inference failed */
            C01331(SoundManager soundManager, int i10, int i11, DownloadState downloadState, Function1<? super Integer, Unit> function1, Continuation<? super C01331> continuation) {
                super(2, continuation);
                this.$soundManager = soundManager;
                this.$key = i10;
                this.$usage = i11;
                this.$downloadState = downloadState;
                this.$soundResIdPrepared = function1;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
                return new C01331(this.$soundManager, this.$key, this.$usage, this.$downloadState, this.$soundResIdPrepared, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                b.f();
                if (this.label == 0) {
                    c.b(obj);
                    this.$soundManager.prepare(this.$key, this.$usage, null, ((DownloadState.Completed) this.$downloadState).getFile().getAbsolutePath(), this.$soundResIdPrepared);
                    return Unit.f32464a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
                return ((C01331) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
        @e(c = "com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1$2", f = "SoundExtensions.kt", l = {}, m = "invokeSuspend")
        /* renamed from: com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1$2  reason: invalid class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class AnonymousClass2 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
            final /* synthetic */ Exception $e;
            int label;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            AnonymousClass2(Exception exc, Continuation<? super AnonymousClass2> continuation) {
                super(2, continuation);
                this.$e = exc;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
                return new AnonymousClass2(this.$e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                b.f();
                if (this.label == 0) {
                    c.b(obj);
                    Log.INSTANCE.w(SoundManager.Companion.getLogTag(), "Failed to download sound.", this.$e);
                    return Unit.f32464a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
                return ((AnonymousClass2) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
        @e(c = "com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1$3", f = "SoundExtensions.kt", l = {}, m = "invokeSuspend")
        /* renamed from: com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1$3  reason: invalid class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class AnonymousClass3 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
            int label;

            AnonymousClass3(Continuation<? super AnonymousClass3> continuation) {
                super(2, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
                return new AnonymousClass3(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                b.f();
                if (this.label == 0) {
                    c.b(obj);
                    return Unit.f32464a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
                return ((AnonymousClass3) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX WARN: Multi-variable type inference failed */
        AnonymousClass1(SoundManager soundManager, int i10, int i11, Function1<? super Integer, Unit> function1) {
            this.$soundManager = soundManager;
            this.$key = i10;
            this.$usage = i11;
            this.$soundResIdPrepared = function1;
        }

        /* JADX WARN: Can't wrap try/catch for region: R(9:1|(2:3|(6:5|6|7|(1:(1:(1:(3:12|13|14)(2:16|17))(3:18|19|20))(4:21|22|19|20))(3:24|(1:26)(1:29)|28)|31|32))|34|6|7|(0)(0)|31|32|(1:(0))) */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x0067, code lost:
            if (js.g.g(r0, r9, r2) == r3) goto L28;
         */
        /* JADX WARN: Code restructure failed: missing block: B:27:0x0079, code lost:
            if (js.g.g(r4, r6, r2) != r3) goto L19;
         */
        /* JADX WARN: Code restructure failed: missing block: B:32:0x008e, code lost:
            if (js.g.g(r0, r4, r2) == r3) goto L28;
         */
        /* JADX WARN: Removed duplicated region for block: B:10:0x002a  */
        /* JADX WARN: Removed duplicated region for block: B:21:0x0046  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object emit(com.discord.file_downloader.DownloadState r17, kotlin.coroutines.Continuation<? super kotlin.Unit> r18) {
            /*
                r16 = this;
                r1 = r16
                r0 = r18
                boolean r2 = r0 instanceof com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1$emit$1
                if (r2 == 0) goto L17
                r2 = r0
                com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1$emit$1 r2 = (com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1$emit$1) r2
                int r3 = r2.label
                r4 = -2147483648(0xffffffff80000000, float:-0.0)
                r5 = r3 & r4
                if (r5 == 0) goto L17
                int r3 = r3 - r4
                r2.label = r3
                goto L1c
            L17:
                com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1$emit$1 r2 = new com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1$emit$1
                r2.<init>(r1, r0)
            L1c:
                java.lang.Object r0 = r2.result
                java.lang.Object r3 = rr.b.f()
                int r4 = r2.label
                r5 = 0
                r6 = 3
                r7 = 2
                r8 = 1
                if (r4 == 0) goto L46
                if (r4 == r8) goto L40
                if (r4 == r7) goto L3c
                if (r4 != r6) goto L34
                kotlin.c.b(r0)
                goto L91
            L34:
                java.lang.IllegalStateException r0 = new java.lang.IllegalStateException
                java.lang.String r2 = "call to 'resume' before 'invoke' with coroutine"
                r0.<init>(r2)
                throw r0
            L3c:
                kotlin.c.b(r0)
                goto L7c
            L40:
                kotlin.c.b(r0)     // Catch: java.lang.Exception -> L44
                goto L7c
            L44:
                r0 = move-exception
                goto L6a
            L46:
                kotlin.c.b(r0)
                r13 = r17
                boolean r0 = r13 instanceof com.discord.file_downloader.DownloadState.Completed
                if (r0 == 0) goto L7f
                js.c1 r0 = js.m0.c()     // Catch: java.lang.Exception -> L44
                com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1$1 r9 = new com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1$1     // Catch: java.lang.Exception -> L44
                com.discord.sounds.SoundManager r10 = r1.$soundManager     // Catch: java.lang.Exception -> L44
                int r11 = r1.$key     // Catch: java.lang.Exception -> L44
                int r12 = r1.$usage     // Catch: java.lang.Exception -> L44
                kotlin.jvm.functions.Function1<java.lang.Integer, kotlin.Unit> r14 = r1.$soundResIdPrepared     // Catch: java.lang.Exception -> L44
                r15 = 0
                r9.<init>(r10, r11, r12, r13, r14, r15)     // Catch: java.lang.Exception -> L44
                r2.label = r8     // Catch: java.lang.Exception -> L44
                java.lang.Object r0 = js.g.g(r0, r9, r2)     // Catch: java.lang.Exception -> L44
                if (r0 != r3) goto L7c
                goto L90
            L6a:
                js.c1 r4 = js.m0.c()
                com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1$2 r6 = new com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1$2
                r6.<init>(r0, r5)
                r2.label = r7
                java.lang.Object r0 = js.g.g(r4, r6, r2)
                if (r0 != r3) goto L7c
                goto L90
            L7c:
                kotlin.Unit r0 = kotlin.Unit.f32464a
                return r0
            L7f:
                js.c1 r0 = js.m0.c()
                com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1$3 r4 = new com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1$1$3
                r4.<init>(r5)
                r2.label = r6
                java.lang.Object r0 = js.g.g(r0, r4, r2)
                if (r0 != r3) goto L91
            L90:
                return r3
            L91:
                kotlin.Unit r0 = kotlin.Unit.f32464a
                return r0
            */
            throw new UnsupportedOperationException("Method not decompiled: com.discord.sounds.utils.SoundExtensionsKt$fetchSound$1.AnonymousClass1.emit(com.discord.file_downloader.DownloadState, kotlin.coroutines.Continuation):java.lang.Object");
        }

        @Override // kotlinx.coroutines.flow.FlowCollector
        public /* bridge */ /* synthetic */ Object emit(Object obj, Continuation continuation) {
            return emit((DownloadState) obj, (Continuation<? super Unit>) continuation);
        }
    }
}
