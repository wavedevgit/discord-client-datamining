package com.discord.notifications.renderer;

import android.content.Context;
import android.graphics.Bitmap;
import com.discord.image.fresco.FrescoFetchDecodedImageKt;
import com.discord.image.fresco.postprocessors.PostProcessor;
import com.discord.notifications.api.NotificationData;
import com.discord.notifications.renderer.utils.NotificationDataUtilsKt;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Ref;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.notifications.renderer.NotificationRenderer$display$1", f = "NotificationRenderer.kt", l = {319, 327}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nNotificationRenderer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NotificationRenderer.kt\ncom/discord/notifications/renderer/NotificationRenderer$display$1\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,471:1\n1011#2,2:472\n1869#2,2:474\n1617#2,9:476\n1869#2:485\n1870#2:487\n1626#2:488\n1#3:486\n*S KotlinDebug\n*F\n+ 1 NotificationRenderer.kt\ncom/discord/notifications/renderer/NotificationRenderer$display$1\n*L\n411#1:472,2\n412#1:474,2\n452#1:476,9\n452#1:485\n452#1:487\n452#1:488\n452#1:486\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NotificationRenderer$display$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ NotificationBehaviors $behaviors;
    final /* synthetic */ Context $context;
    final /* synthetic */ String $currentUsername;
    final /* synthetic */ boolean $makeOrUpdateShortcut;
    final /* synthetic */ NotificationData $notification;
    final /* synthetic */ Map<String, String> $notificationDataMap;
    final /* synthetic */ boolean $notifyEveryTime;
    int I$0;
    private /* synthetic */ Object L$0;
    Object L$1;
    Object L$2;
    int label;
    final /* synthetic */ NotificationRenderer this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u0004\u0018\u00010\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "Landroid/graphics/Bitmap;", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @e(c = "com.discord.notifications.renderer.NotificationRenderer$display$1$1", f = "NotificationRenderer.kt", l = {320}, m = "invokeSuspend")
    /* renamed from: com.discord.notifications.renderer.NotificationRenderer$display$1$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AnonymousClass1 extends k implements Function2<CoroutineScope, Continuation<? super Bitmap>, Object> {
        final /* synthetic */ Context $context;
        final /* synthetic */ Ref.ObjectRef<String> $iconUrl;
        final /* synthetic */ Ref.ObjectRef<PostProcessor> $postProcessor;
        int label;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass1(Ref.ObjectRef<String> objectRef, Context context, Ref.ObjectRef<PostProcessor> objectRef2, Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
            this.$iconUrl = objectRef;
            this.$context = context;
            this.$postProcessor = objectRef2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            return new AnonymousClass1(this.$iconUrl, this.$context, this.$postProcessor, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.label;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            this.label = 1;
            Object invokeSuspend$fetchImage = NotificationRenderer$display$1.invokeSuspend$fetchImage(this.$context, this.$postProcessor, this.$iconUrl.element, this);
            if (invokeSuspend$fetchImage == f10) {
                return f10;
            }
            return invokeSuspend$fetchImage;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Bitmap> continuation) {
            return ((AnonymousClass1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u0004\u0018\u00010\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "Landroid/graphics/Bitmap;", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @e(c = "com.discord.notifications.renderer.NotificationRenderer$display$1$2", f = "NotificationRenderer.kt", l = {321}, m = "invokeSuspend")
    /* renamed from: com.discord.notifications.renderer.NotificationRenderer$display$1$2  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AnonymousClass2 extends k implements Function2<CoroutineScope, Continuation<? super Bitmap>, Object> {
        final /* synthetic */ Context $context;
        final /* synthetic */ NotificationData $notification;
        final /* synthetic */ Ref.ObjectRef<PostProcessor> $postProcessor;
        int label;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass2(NotificationData notificationData, Context context, Ref.ObjectRef<PostProcessor> objectRef, Continuation<? super AnonymousClass2> continuation) {
            super(2, continuation);
            this.$notification = notificationData;
            this.$context = context;
            this.$postProcessor = objectRef;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            return new AnonymousClass2(this.$notification, this.$context, this.$postProcessor, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.label;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            Context context = this.$context;
            Ref.ObjectRef<PostProcessor> objectRef = this.$postProcessor;
            String iconUrlForAvatar = NotificationDataUtilsKt.getIconUrlForAvatar(this.$notification, context);
            this.label = 1;
            Object invokeSuspend$fetchImage = NotificationRenderer$display$1.invokeSuspend$fetchImage(context, objectRef, iconUrlForAvatar, this);
            if (invokeSuspend$fetchImage == f10) {
                return f10;
            }
            return invokeSuspend$fetchImage;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Bitmap> continuation) {
            return ((AnonymousClass2) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public NotificationRenderer$display$1(NotificationData notificationData, Context context, boolean z10, Map<String, String> map, NotificationBehaviors notificationBehaviors, NotificationRenderer notificationRenderer, String str, boolean z11, Continuation<? super NotificationRenderer$display$1> continuation) {
        super(2, continuation);
        this.$notification = notificationData;
        this.$context = context;
        this.$notifyEveryTime = z10;
        this.$notificationDataMap = map;
        this.$behaviors = notificationBehaviors;
        this.this$0 = notificationRenderer;
        this.$currentUsername = str;
        this.$makeOrUpdateShortcut = z11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object invokeSuspend$fetchImage(Context context, Ref.ObjectRef<PostProcessor> objectRef, String str, Continuation<? super Bitmap> continuation) {
        return FrescoFetchDecodedImageKt.fetchDecodedImage(context, str, objectRef.element, true, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        NotificationRenderer$display$1 notificationRenderer$display$1 = new NotificationRenderer$display$1(this.$notification, this.$context, this.$notifyEveryTime, this.$notificationDataMap, this.$behaviors, this.this$0, this.$currentUsername, this.$makeOrUpdateShortcut, continuation);
        notificationRenderer$display$1.L$0 = obj;
        return notificationRenderer$display$1;
    }

    /* JADX WARN: Code restructure failed: missing block: B:17:0x0096, code lost:
        if (r2 == r1) goto L84;
     */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:29:0x0189  */
    /* JADX WARN: Removed duplicated region for block: B:44:0x0205  */
    /* JADX WARN: Removed duplicated region for block: B:47:0x020d  */
    /* JADX WARN: Removed duplicated region for block: B:74:0x02dc  */
    /* JADX WARN: Removed duplicated region for block: B:80:0x0325  */
    /* JADX WARN: Removed duplicated region for block: B:85:0x0340  */
    /* JADX WARN: Removed duplicated region for block: B:88:0x034c  */
    /* JADX WARN: Removed duplicated region for block: B:89:0x034e  */
    /* JADX WARN: Type inference failed for: r10v1, types: [T, java.lang.String] */
    /* JADX WARN: Type inference failed for: r9v0, types: [com.discord.image.fresco.postprocessors.PostProcessor$Circle, T] */
    @Override // kotlin.coroutines.jvm.internal.a
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object invokeSuspend(java.lang.Object r20) {
        /*
            Method dump skipped, instructions count: 865
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.notifications.renderer.NotificationRenderer$display$1.invokeSuspend(java.lang.Object):java.lang.Object");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((NotificationRenderer$display$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
    }
}
