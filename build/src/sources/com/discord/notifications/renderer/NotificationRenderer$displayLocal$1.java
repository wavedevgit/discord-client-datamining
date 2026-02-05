package com.discord.notifications.renderer;

import android.content.Context;
import androidx.core.app.NotificationCompat;
import com.discord.notifications.api.NotificationData;
import com.discord.notifications.api.NotificationDataDeserializationUtilsKt;
import com.discord.notifications.renderer.utils.NotificationDataUtilsKt;
import com.discord.notifications.renderer.utils.NotificationManagerUtilsKt;
import com.discord.theme.utils.ColorUtilsKt;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.o0;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.notifications.renderer.NotificationRenderer$displayLocal$1", f = "NotificationRenderer.kt", l = {}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nNotificationRenderer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NotificationRenderer.kt\ncom/discord/notifications/renderer/NotificationRenderer$displayLocal$1\n+ 2 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n*L\n1#1,471:1\n216#2,2:472\n*S KotlinDebug\n*F\n+ 1 NotificationRenderer.kt\ncom/discord/notifications/renderer/NotificationRenderer$displayLocal$1\n*L\n230#1:472,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NotificationRenderer$displayLocal$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ Context $context;
    final /* synthetic */ Map<String, Object> $notification;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public NotificationRenderer$displayLocal$1(Map<String, ? extends Object> map, Context context, Continuation<? super NotificationRenderer$displayLocal$1> continuation) {
        super(2, continuation);
        this.$notification = map;
        this.$context = context;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        return new NotificationRenderer$displayLocal$1(this.$notification, this.$context, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        ur.b.f();
        if (this.label == 0) {
            kotlin.c.b(obj);
            NotificationData localNotificationData = NotificationDataDeserializationUtilsKt.localNotificationData(NotificationData.Companion, this.$notification);
            Map y10 = o0.y(localNotificationData.getUserInfo());
            for (Map.Entry<String, Object> entry : this.$notification.entrySet()) {
                String key = entry.getKey();
                Object value = entry.getValue();
                if (value instanceof String) {
                    y10.put(key, value);
                }
            }
            Context context = this.$context;
            NotificationCompat.Builder m10 = new NotificationCompat.Builder(context, NotificationChannels.INSTANCE.getNotificationChannelId(localNotificationData, context)).U(NotificationDataUtilsKt.getSmallIcon(localNotificationData)).s(ColorUtilsKt.getColorCompat(this.$context, com.discord.theme.R.color.brand_500)).p(NotificationDataUtilsKt.getNotificationCategory(localNotificationData)).x(localNotificationData.getTitle()).w(localNotificationData.getSubtitle()).D(NotificationDataUtilsKt.getGroupKey(localNotificationData)).T(localNotificationData.getSilent()).M(0).v(NotificationDataUtilsKt.getContentPendingIntent(localNotificationData, this.$context, y10)).m(true);
            Intrinsics.checkNotNullExpressionValue(m10, "setAutoCancel(...)");
            NotificationManagerUtilsKt.notify$default(NotificationManagerUtilsKt.getNotificationManagerCompat(this.$context), NotificationDataUtilsKt.getTag(localNotificationData), m10, 0, 4, null);
            return Unit.f31988a;
        }
        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((NotificationRenderer$displayLocal$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
    }
}
