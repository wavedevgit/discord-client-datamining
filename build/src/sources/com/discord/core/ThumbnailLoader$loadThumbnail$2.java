package com.discord.core;

import android.content.Context;
import android.graphics.Bitmap;
import android.net.Uri;
import android.util.Size;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import or.b;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u0004\u0018\u00010\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "Landroid/graphics/Bitmap;", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.core.ThumbnailLoader$loadThumbnail$2", f = "ThumbnailLoader.kt", l = {118, 108, 109}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nThumbnailLoader.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ThumbnailLoader.kt\ncom/discord/core/ThumbnailLoader$loadThumbnail$2\n+ 2 Mutex.kt\nkotlinx/coroutines/sync/MutexKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,112:1\n116#2,8:113\n125#2,2:122\n1#3:121\n*S KotlinDebug\n*F\n+ 1 ThumbnailLoader.kt\ncom/discord/core/ThumbnailLoader$loadThumbnail$2\n*L\n53#1:113,8\n53#1:122,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ThumbnailLoader$loadThumbnail$2 extends k implements Function2<CoroutineScope, Continuation<? super Bitmap>, Object> {
    final /* synthetic */ Context $context;
    final /* synthetic */ Size $size;
    final /* synthetic */ Uri $uri;
    private /* synthetic */ Object L$0;
    Object L$1;
    Object L$2;
    Object L$3;
    Object L$4;
    Object L$5;
    Object L$6;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u0004\u0018\u00010\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "Landroid/graphics/Bitmap;", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @e(c = "com.discord.core.ThumbnailLoader$loadThumbnail$2$2", f = "ThumbnailLoader.kt", l = {}, m = "invokeSuspend")
    /* renamed from: com.discord.core.ThumbnailLoader$loadThumbnail$2$2  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class AnonymousClass2 extends k implements Function2<CoroutineScope, Continuation<? super Bitmap>, Object> {
        final /* synthetic */ Bitmap $bitmap;
        int label;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass2(Bitmap bitmap, Continuation<? super AnonymousClass2> continuation) {
            super(2, continuation);
            this.$bitmap = bitmap;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            return new AnonymousClass2(this.$bitmap, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            b.f();
            if (this.label == 0) {
                c.b(obj);
                return this.$bitmap;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Bitmap> continuation) {
            return ((AnonymousClass2) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ThumbnailLoader$loadThumbnail$2(Uri uri, Size size, Context context, Continuation<? super ThumbnailLoader$loadThumbnail$2> continuation) {
        super(2, continuation);
        this.$uri = uri;
        this.$size = size;
        this.$context = context;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        ThumbnailLoader$loadThumbnail$2 thumbnailLoader$loadThumbnail$2 = new ThumbnailLoader$loadThumbnail$2(this.$uri, this.$size, this.$context, continuation);
        thumbnailLoader$loadThumbnail$2.L$0 = obj;
        return thumbnailLoader$loadThumbnail$2;
    }

    /* JADX WARN: Code restructure failed: missing block: B:15:0x0089, code lost:
        if (r9.b(null, r25) == r0) goto L14;
     */
    /* JADX WARN: Code restructure failed: missing block: B:27:0x0138, code lost:
        if (r2 == r0) goto L14;
     */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(java.lang.Object r26) {
        /*
            Method dump skipped, instructions count: 340
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.core.ThumbnailLoader$loadThumbnail$2.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Bitmap> continuation) {
        return ((ThumbnailLoader$loadThumbnail$2) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
    }
}
