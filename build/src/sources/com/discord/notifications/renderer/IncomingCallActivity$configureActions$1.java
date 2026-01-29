package com.discord.notifications.renderer;

import android.app.KeyguardManager;
import android.app.KeyguardManager$KeyguardDismissCallback;
import android.content.Context;
import android.content.Intent;
import android.content.res.ColorStateList;
import android.graphics.Bitmap;
import android.view.View;
import android.widget.ImageButton;
import android.widget.TextView;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.activity.ActivityUtilities;
import com.discord.misc.utilities.intent.IntentUtilsKt;
import com.discord.notifications.actions.NotificationActions;
import com.discord.notifications.actions.intents.ContentAction;
import com.discord.notifications.actions.intents.DismissCallAction;
import com.discord.react_activities.ReactActivity;
import com.discord.react_asset_fetcher.ReactAsset;
import com.discord.react_asset_fetcher.ReactAssetUtilsKt;
import com.discord.react_strings.I18nMessage;
import com.discord.react_strings.I18nUtilsKt;
import com.discord.theme.ThemeManagerKt;
import gs.g0;
import gs.i;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
@e(c = "com.discord.notifications.renderer.IncomingCallActivity$configureActions$1", f = "IncomingCallActivity.kt", l = {164}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nIncomingCallActivity.kt\nKotlin\n*S Kotlin\n*F\n+ 1 IncomingCallActivity.kt\ncom/discord/notifications/renderer/IncomingCallActivity$configureActions$1\n+ 2 Bitmap.kt\nandroidx/core/graphics/BitmapKt\n*L\n1#1,274:1\n70#2,2:275\n70#2,2:277\n*S KotlinDebug\n*F\n+ 1 IncomingCallActivity.kt\ncom/discord/notifications/renderer/IncomingCallActivity$configureActions$1\n*L\n169#1:275,2\n173#1:277,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class IncomingCallActivity$configureActions$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    private /* synthetic */ Object L$0;
    Object L$1;
    Object L$2;
    Object L$3;
    Object L$4;
    Object L$5;
    int label;
    final /* synthetic */ IncomingCallActivity this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u0004\u0018\u00010\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "Landroid/graphics/Bitmap;", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @e(c = "com.discord.notifications.renderer.IncomingCallActivity$configureActions$1$1", f = "IncomingCallActivity.kt", l = {165}, m = "invokeSuspend")
    /* renamed from: com.discord.notifications.renderer.IncomingCallActivity$configureActions$1$1  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AnonymousClass1 extends k implements Function2<CoroutineScope, Continuation<? super Bitmap>, Object> {
        final /* synthetic */ String $callDisconnectUrl;
        int label;
        final /* synthetic */ IncomingCallActivity this$0;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass1(IncomingCallActivity incomingCallActivity, String str, Continuation<? super AnonymousClass1> continuation) {
            super(2, continuation);
            this.this$0 = incomingCallActivity;
            this.$callDisconnectUrl = str;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            return new AnonymousClass1(this.this$0, this.$callDisconnectUrl, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object fetchImage;
            Object f10 = or.b.f();
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
            String str = this.$callDisconnectUrl;
            this.label = 1;
            fetchImage = incomingCallActivity.fetchImage(str, this);
            if (fetchImage == f10) {
                return f10;
            }
            return fetchImage;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Bitmap> continuation) {
            return ((AnonymousClass1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u0004\u0018\u00010\u0001*\u00020\u0002H\n"}, d2 = {"<anonymous>", "Landroid/graphics/Bitmap;", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {2, 1, 0}, xi = 48)
    @e(c = "com.discord.notifications.renderer.IncomingCallActivity$configureActions$1$2", f = "IncomingCallActivity.kt", l = {166}, m = "invokeSuspend")
    /* renamed from: com.discord.notifications.renderer.IncomingCallActivity$configureActions$1$2  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class AnonymousClass2 extends k implements Function2<CoroutineScope, Continuation<? super Bitmap>, Object> {
        final /* synthetic */ String $callConnectUrl;
        int label;
        final /* synthetic */ IncomingCallActivity this$0;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        AnonymousClass2(IncomingCallActivity incomingCallActivity, String str, Continuation<? super AnonymousClass2> continuation) {
            super(2, continuation);
            this.this$0 = incomingCallActivity;
            this.$callConnectUrl = str;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
            return new AnonymousClass2(this.this$0, this.$callConnectUrl, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object fetchImage;
            Object f10 = or.b.f();
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
            String str = this.$callConnectUrl;
            this.label = 1;
            fetchImage = incomingCallActivity.fetchImage(str, this);
            if (fetchImage == f10) {
                return f10;
            }
            return fetchImage;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Bitmap> continuation) {
            return ((AnonymousClass2) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public IncomingCallActivity$configureActions$1(IncomingCallActivity incomingCallActivity, Continuation<? super IncomingCallActivity$configureActions$1> continuation) {
        super(2, continuation);
        this.this$0 = incomingCallActivity;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void invokeSuspend$lambda$1(final IncomingCallActivity incomingCallActivity, ContentAction contentAction, View view) {
        Intent addFlags = IntentUtilsKt.putExtra(new Intent("android.intent.action.VIEW", null, incomingCallActivity.getBaseContext(), ReactActivity.Registry.getMainActivity()), Reflection.getOrCreateKotlinClass(ContentAction.class)).addCategory("android.intent.category.HOME").addFlags(268435456);
        Intrinsics.checkNotNullExpressionValue(addFlags, "addFlags(...)");
        final Intent putIntentParcelable = IntentUtilsKt.putIntentParcelable(addFlags, "action_intent_arg_key", contentAction);
        Object systemService = incomingCallActivity.getSystemService("keyguard");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.app.KeyguardManager");
        ((KeyguardManager) systemService).requestDismissKeyguard(incomingCallActivity, new KeyguardManager$KeyguardDismissCallback() { // from class: com.discord.notifications.renderer.IncomingCallActivity$configureActions$1$3$1$1
            public void onDismissSucceeded() {
                super.onDismissSucceeded();
                ActivityUtilities activityUtilities = ActivityUtilities.INSTANCE;
                Context baseContext = IncomingCallActivity.this.getBaseContext();
                Intrinsics.checkNotNullExpressionValue(baseContext, "getBaseContext(...)");
                ActivityUtilities.startActivityAsync$default(activityUtilities, baseContext, putIntentParcelable, null, 4, null);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void invokeSuspend$lambda$3(final IncomingCallActivity incomingCallActivity, DismissCallAction dismissCallAction, View view) {
        Intent addCategory = IntentUtilsKt.putExtra(new Intent("com.discord.intent.action.NOTIFICATION_ACTION", null, incomingCallActivity.getBaseContext(), NotificationActions.class), Reflection.getOrCreateKotlinClass(DismissCallAction.class)).addCategory("android.intent.category.HOME");
        Intrinsics.checkNotNullExpressionValue(addCategory, "addCategory(...)");
        final Intent putIntentParcelable = IntentUtilsKt.putIntentParcelable(addCategory, "action_intent_arg_key", dismissCallAction);
        Object systemService = incomingCallActivity.getSystemService("keyguard");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.app.KeyguardManager");
        ((KeyguardManager) systemService).requestDismissKeyguard(incomingCallActivity, new KeyguardManager$KeyguardDismissCallback() { // from class: com.discord.notifications.renderer.IncomingCallActivity$configureActions$1$4$1$1
            public void onDismissSucceeded() {
                super.onDismissSucceeded();
                IncomingCallActivity.this.getBaseContext().sendBroadcast(putIntentParcelable);
                IncomingCallActivity.this.finishAndRemoveTask();
            }
        });
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Continuation<Unit> create(Object obj, Continuation<?> continuation) {
        IncomingCallActivity$configureActions$1 incomingCallActivity$configureActions$1 = new IncomingCallActivity$configureActions$1(this.this$0, continuation);
        incomingCallActivity$configureActions$1.L$0 = obj;
        return incomingCallActivity$configureActions$1;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r5v0 */
    /* JADX WARN: Type inference failed for: r5v6 */
    /* JADX WARN: Type inference failed for: r5v7, types: [boolean, int] */
    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(Object obj) {
        int i10;
        ImageButton imageButton;
        g0 b10;
        g0 b11;
        Object b12;
        final ContentAction contentAction;
        TextView textView;
        TextView textView2;
        final DismissCallAction dismissCallAction;
        ImageButton imageButton2;
        Object f10 = or.b.f();
        int i11 = this.label;
        ?? r52 = 1;
        if (i11 != 0) {
            if (i11 == 1) {
                textView2 = (TextView) this.L$5;
                textView = (TextView) this.L$4;
                imageButton2 = (ImageButton) this.L$2;
                dismissCallAction = (DismissCallAction) this.L$1;
                contentAction = (ContentAction) this.L$0;
                kotlin.c.b(obj);
                imageButton = (ImageButton) this.L$3;
                i10 = 0;
                b12 = obj;
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            kotlin.c.b(obj);
            CoroutineScope coroutineScope = (CoroutineScope) this.L$0;
            Object parcelableExtra = this.this$0.getIntent().getParcelableExtra("acceptAction", ContentAction.class);
            Intrinsics.checkNotNull(parcelableExtra, "null cannot be cast to non-null type com.discord.notifications.actions.intents.ContentAction");
            ContentAction contentAction2 = (ContentAction) parcelableExtra;
            Object parcelableExtra2 = this.this$0.getIntent().getParcelableExtra("dismissAction", DismissCallAction.class);
            Intrinsics.checkNotNull(parcelableExtra2, "null cannot be cast to non-null type com.discord.notifications.actions.intents.DismissCallAction");
            DismissCallAction dismissCallAction2 = (DismissCallAction) parcelableExtra2;
            ImageButton imageButton3 = (ImageButton) this.this$0.findViewById(R.id.acceptCallContainer);
            TextView textView3 = (TextView) this.this$0.findViewById(R.id.acceptCallText);
            TextView textView4 = (TextView) this.this$0.findViewById(R.id.declineCallText);
            Context applicationContext = this.this$0.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
            ReactAsset reactAsset = ReactAsset.CallDisconnect;
            i10 = 0;
            Context applicationContext2 = this.this$0.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext2, "getApplicationContext(...)");
            String reactImageUrl = ReactAssetUtilsKt.getReactImageUrl(applicationContext, reactAsset.getUri(applicationContext2));
            Context applicationContext3 = this.this$0.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext3, "getApplicationContext(...)");
            ReactAsset reactAsset2 = ReactAsset.CallConnect;
            Context applicationContext4 = this.this$0.getApplicationContext();
            Intrinsics.checkNotNullExpressionValue(applicationContext4, "getApplicationContext(...)");
            String reactImageUrl2 = ReactAssetUtilsKt.getReactImageUrl(applicationContext3, reactAsset2.getUri(applicationContext4));
            AnonymousClass1 anonymousClass1 = new AnonymousClass1(this.this$0, reactImageUrl, null);
            imageButton = (ImageButton) this.this$0.findViewById(R.id.declineCallContainer);
            b10 = i.b(coroutineScope, null, null, anonymousClass1, 3, null);
            b11 = i.b(coroutineScope, null, null, new AnonymousClass2(this.this$0, reactImageUrl2, null), 3, null);
            g0[] g0VarArr = {b10, b11};
            this.L$0 = contentAction2;
            this.L$1 = dismissCallAction2;
            this.L$2 = imageButton3;
            this.L$3 = imageButton;
            this.L$4 = textView3;
            this.L$5 = textView4;
            r52 = 1;
            this.label = 1;
            b12 = gs.d.b(g0VarArr, this);
            if (b12 == f10) {
                return f10;
            }
            contentAction = contentAction2;
            textView = textView3;
            textView2 = textView4;
            dismissCallAction = dismissCallAction2;
            imageButton2 = imageButton3;
        }
        List list = (List) b12;
        Bitmap bitmap = (Bitmap) list.get(i10);
        Bitmap bitmap2 = (Bitmap) list.get(r52);
        Intrinsics.checkNotNull(bitmap);
        imageButton.setImageBitmap(Bitmap.createScaledBitmap(bitmap, 110, 110, r52));
        imageButton.setImageTintList(ColorStateList.valueOf(ThemeManagerKt.getTheme().getWhite()));
        Intrinsics.checkNotNull(bitmap2);
        imageButton2.setImageBitmap(Bitmap.createScaledBitmap(bitmap2, 110, 110, r52));
        imageButton2.setImageTintList(ColorStateList.valueOf(ThemeManagerKt.getTheme().getWhite()));
        Context applicationContext5 = this.this$0.getApplicationContext();
        Intrinsics.checkNotNullExpressionValue(applicationContext5, "getApplicationContext(...)");
        imageButton2.setContentDescription(I18nUtilsKt.i18nFormat$default(applicationContext5, I18nMessage.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT, null, 2, null));
        imageButton2.setBackgroundTintList(ColorStateList.valueOf(ThemeManagerKt.getTheme().getStatusPositive()));
        Context applicationContext6 = this.this$0.getApplicationContext();
        Intrinsics.checkNotNullExpressionValue(applicationContext6, "getApplicationContext(...)");
        imageButton.setContentDescription(I18nUtilsKt.i18nFormat$default(applicationContext6, I18nMessage.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE, null, 2, null));
        imageButton.setBackgroundTintList(ColorStateList.valueOf(ThemeManagerKt.getTheme().getBackgroundFeedbackCritical()));
        Context applicationContext7 = this.this$0.getApplicationContext();
        Intrinsics.checkNotNullExpressionValue(applicationContext7, "getApplicationContext(...)");
        textView.setText(I18nUtilsKt.i18nFormat$default(applicationContext7, I18nMessage.JOIN_CALL, null, 2, null));
        Intrinsics.checkNotNull(textView);
        DiscordFont discordFont = DiscordFont.PrimaryMedium;
        DiscordFontUtilsKt.setDiscordFont(textView, discordFont);
        textView.setTextColor(ThemeManagerKt.getTheme().getWhite());
        Context applicationContext8 = this.this$0.getApplicationContext();
        Intrinsics.checkNotNullExpressionValue(applicationContext8, "getApplicationContext(...)");
        textView2.setText(I18nUtilsKt.i18nFormat$default(applicationContext8, I18nMessage.DECLINE, null, 2, null));
        Intrinsics.checkNotNull(textView2);
        DiscordFontUtilsKt.setDiscordFont(textView2, discordFont);
        textView2.setTextColor(ThemeManagerKt.getTheme().getWhite());
        final IncomingCallActivity incomingCallActivity = this.this$0;
        imageButton2.setOnClickListener(new View.OnClickListener() { // from class: com.discord.notifications.renderer.a
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                IncomingCallActivity$configureActions$1.invokeSuspend$lambda$1(IncomingCallActivity.this, contentAction, view);
            }
        });
        final IncomingCallActivity incomingCallActivity2 = this.this$0;
        imageButton.setOnClickListener(new View.OnClickListener() { // from class: com.discord.notifications.renderer.b
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                IncomingCallActivity$configureActions$1.invokeSuspend$lambda$3(IncomingCallActivity.this, dismissCallAction, view);
            }
        });
        return Unit.f33282a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((IncomingCallActivity$configureActions$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
    }
}
