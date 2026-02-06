package com.discord.notifications.renderer;

import android.content.Context;
import android.graphics.Bitmap;
import android.widget.ImageView;
import android.widget.TextView;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.primitives.GuildId;
import com.discord.primitives.UserId;
import com.discord.snowflake.SnowflakeUtils;
import com.discord.theme.ThemeManagerKt;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import os.g0;
import os.i;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.notifications.renderer.IncomingCallActivity$configureUser$1", f = "IncomingCallActivity.kt", l = {144}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nIncomingCallActivity.kt\nKotlin\n*S Kotlin\n*F\n+ 1 IncomingCallActivity.kt\ncom/discord/notifications/renderer/IncomingCallActivity$configureUser$1\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,274:1\n1#2:275\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class IncomingCallActivity$configureUser$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    private /* synthetic */ Object L$0;
    int label;
    final /* synthetic */ IncomingCallActivity this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u0004\u0018\u00010\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "Landroid/graphics/Bitmap;", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @e(c = "com.discord.notifications.renderer.IncomingCallActivity$configureUser$1$1", f = "IncomingCallActivity.kt", l = {145}, m = "invokeSuspend")
    /* renamed from: com.discord.notifications.renderer.IncomingCallActivity$configureUser$1$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AnonymousClass1 extends k implements Function2<CoroutineScope, Continuation<? super Bitmap>, Object> {
        final /* synthetic */ GuildId $guildId;
        final /* synthetic */ String $userAvatar;
        final /* synthetic */ int $userDiscriminator;
        final /* synthetic */ String $userGuildAvatar;
        final /* synthetic */ UserId $userId;
        int label;
        final /* synthetic */ IncomingCallActivity this$0;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass1(IncomingCallActivity incomingCallActivity, String str, GuildId guildId, UserId userId, String str2, int i10, Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
            this.this$0 = incomingCallActivity;
            this.$userGuildAvatar = str;
            this.$guildId = guildId;
            this.$userId = userId;
            this.$userAvatar = str2;
            this.$userDiscriminator = i10;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            return new AnonymousClass1(this.this$0, this.$userGuildAvatar, this.$guildId, this.$userId, this.$userAvatar, this.$userDiscriminator, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            String m1041getIconUrlForAvatarr1nfqec;
            Object fetchImage;
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
            IncomingCallActivity incomingCallActivity = this.this$0;
            Context applicationContext = incomingCallActivity.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            m1041getIconUrlForAvatarr1nfqec = incomingCallActivity.m1041getIconUrlForAvatarr1nfqec(applicationContext, this.$userGuildAvatar, this.$guildId, this.$userId, this.$userAvatar, this.$userDiscriminator);
            this.label = 1;
            fetchImage = incomingCallActivity.fetchImage(m1041getIconUrlForAvatarr1nfqec, this);
            if (fetchImage == f10) {
                return f10;
            }
            return fetchImage;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Bitmap> continuation) {
            return ((AnonymousClass1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public IncomingCallActivity$configureUser$1(IncomingCallActivity incomingCallActivity, Continuation<? super IncomingCallActivity$configureUser$1> continuation) {
        super(2, continuation);
        this.this$0 = incomingCallActivity;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        IncomingCallActivity$configureUser$1 incomingCallActivity$configureUser$1 = new IncomingCallActivity$configureUser$1(this.this$0, continuation);
        incomingCallActivity$configureUser$1.L$0 = obj;
        return incomingCallActivity$configureUser$1;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        UserId userId;
        g0 b10;
        Long snowflake;
        Long snowflake2;
        Object f10 = wr.b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                kotlin.c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            CoroutineScope coroutineScope = (CoroutineScope) this.L$0;
            String stringExtra = this.this$0.getIntent().getStringExtra(NotificationRenderer.USERNAME);
            String stringExtra2 = this.this$0.getIntent().getStringExtra("userId");
            GuildId guildId = null;
            if (stringExtra2 != null && (snowflake2 = SnowflakeUtils.INSTANCE.toSnowflake(stringExtra2)) != null) {
                userId = UserId.m1135boximpl(UserId.m1136constructorimpl(snowflake2.longValue()));
            } else {
                userId = null;
            }
            String stringExtra3 = this.this$0.getIntent().getStringExtra("userAvatar");
            String stringExtra4 = this.this$0.getIntent().getStringExtra("userGuildAvatar");
            int intExtra = this.this$0.getIntent().getIntExtra("userDiscriminator", 0);
            String stringExtra5 = this.this$0.getIntent().getStringExtra("guildId");
            if (stringExtra5 != null && (snowflake = SnowflakeUtils.INSTANCE.toSnowflake(stringExtra5)) != null) {
                guildId = GuildId.m1070boximpl(GuildId.m1071constructorimpl(snowflake.longValue()));
            }
            TextView textView = (TextView) this.this$0.findViewById(R.id.userName);
            textView.setText(stringExtra);
            Intrinsics.checkNotNull(textView);
            DiscordFontUtilsKt.setDiscordFont(textView, DiscordFont.PrimaryMedium);
            textView.setTextColor(ThemeManagerKt.getTheme().getWhite());
            b10 = i.b(coroutineScope, null, null, new AnonymousClass1(this.this$0, stringExtra4, guildId, userId, stringExtra3, intExtra, null), 3, null);
            this.label = 1;
            obj = os.d.b(new g0[]{b10}, this);
            if (obj == f10) {
                return f10;
            }
        }
        ((ImageView) this.this$0.findViewById(R.id.imageView)).setImageBitmap((Bitmap) ((List) obj).get(0));
        return Unit.f32008a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((IncomingCallActivity$configureUser$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
    }
}
