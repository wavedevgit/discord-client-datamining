package com.discord.notifications.renderer;

import android.app.KeyguardManager;
import android.content.Context;
import android.graphics.Bitmap;
import android.os.Build;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import com.discord.icons.IconUrlUtils;
import com.discord.image.fresco.FrescoFetchDecodedImageKt;
import com.discord.image.fresco.FrescoModuleDiscord;
import com.discord.image.fresco.postprocessors.PostProcessor;
import com.discord.primitives.GuildId;
import com.discord.primitives.UserId;
import com.discord.tti_manager.TTIModule;
import js.g;
import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0004\u0018\u0000 !2\u00020\u0001:\u0001!B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007H\u0014J\b\u0010\b\u001a\u00020\u0005H\u0002J\b\u0010\t\u001a\u00020\u0005H\u0002J\u0012\u0010\n\u001a\u00020\u00052\b\u0010\u000b\u001a\u0004\u0018\u00010\fH\u0014J\b\u0010\r\u001a\u00020\u0005H\u0002J\u0018\u0010\u000e\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\u0010\u001a\u00020\u0011H\u0082@¢\u0006\u0002\u0010\u0012J\b\u0010\u0013\u001a\u00020\u0005H\u0002J\b\u0010\u0014\u001a\u00020\u0005H\u0003JE\u0010\u0015\u001a\u00020\u00112\u0006\u0010\u0016\u001a\u00020\u00072\b\u0010\u0017\u001a\u0004\u0018\u00010\u00112\b\u0010\u0018\u001a\u0004\u0018\u00010\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u001b2\b\u0010\u001c\u001a\u0004\u0018\u00010\u00112\u0006\u0010\u001d\u001a\u00020\u001eH\u0002¢\u0006\u0002\b\u001fJ\b\u0010 \u001a\u00020\u0005H\u0014¨\u0006\""}, d2 = {"Lcom/discord/notifications/renderer/IncomingCallActivity;", "Landroidx/appcompat/app/AppCompatActivity;", "<init>", "()V", "attachBaseContext", "", "newBase", "Landroid/content/Context;", "turnScreenOnAndKeyguardOff", "turnScreenOffAndKeyguardOn", "onCreate", "savedInstanceState", "Landroid/os/Bundle;", "initView", "fetchImage", "Landroid/graphics/Bitmap;", "uri", "", "(Ljava/lang/String;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "configureUser", "configureActions", "getIconUrlForAvatar", "context", "userGuildAvatar", "guildId", "Lcom/discord/primitives/GuildId;", "userId", "Lcom/discord/primitives/UserId;", "userAvatar", "userDiscriminator", "", "getIconUrlForAvatar-r1nfqec", "onDestroy", "Companion", "notification_renderer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class IncomingCallActivity extends AppCompatActivity {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static AppCompatActivity selfIntent;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u001c\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0006\u0010\u0007\"\u0004\b\b\u0010\t¨\u0006\n"}, d2 = {"Lcom/discord/notifications/renderer/IncomingCallActivity$Companion;", "", "<init>", "()V", "selfIntent", "Landroidx/appcompat/app/AppCompatActivity;", "getSelfIntent", "()Landroidx/appcompat/app/AppCompatActivity;", "setSelfIntent", "(Landroidx/appcompat/app/AppCompatActivity;)V", "notification_renderer_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final AppCompatActivity getSelfIntent() {
            return IncomingCallActivity.selfIntent;
        }

        public final void setSelfIntent(AppCompatActivity appCompatActivity) {
            IncomingCallActivity.selfIntent = appCompatActivity;
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void configureActions() {
        g.f(null, new IncomingCallActivity$configureActions$1(this, null), 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void configureUser() {
        g.f(null, new IncomingCallActivity$configureUser$1(this, null), 1, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object fetchImage(String str, Continuation<? super Bitmap> continuation) {
        FrescoModuleDiscord.Companion companion = FrescoModuleDiscord.Companion;
        Context applicationContext = getApplicationContext();
        Intrinsics.checkNotNullExpressionValue(applicationContext, "getApplicationContext(...)");
        companion.initializeFresco(applicationContext);
        Context applicationContext2 = getApplicationContext();
        Intrinsics.checkNotNullExpressionValue(applicationContext2, "getApplicationContext(...)");
        return FrescoFetchDecodedImageKt.fetchDecodedImage(applicationContext2, str, (PostProcessor) PostProcessor.Circle.INSTANCE, true, continuation);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: getIconUrlForAvatar-r1nfqec  reason: not valid java name */
    public final String m1043getIconUrlForAvatarr1nfqec(Context context, String str, GuildId guildId, UserId userId, String str2, int i10) {
        IconUrlUtils iconUrlUtils = IconUrlUtils.INSTANCE;
        IconUrlUtils.init$default(iconUrlUtils, context, null, null, 6, null);
        String m916getForGuildMember2tNb6hE$default = IconUrlUtils.m916getForGuildMember2tNb6hE$default(iconUrlUtils, str, guildId, userId, null, false, 24, null);
        if (m916getForGuildMember2tNb6hE$default.length() == 0) {
            return IconUrlUtils.m917getForUser_fRzTXg$default(iconUrlUtils, context, userId, str2, Integer.valueOf(i10), false, null, 32, null);
        }
        return m916getForGuildMember2tNb6hE$default;
    }

    private final void initView() {
        g.f(null, new IncomingCallActivity$initView$1(this, null), 1, null);
    }

    private final void turnScreenOffAndKeyguardOn() {
        if (Build.VERSION.SDK_INT >= 27) {
            setShowWhenLocked(false);
            setTurnScreenOn(false);
            return;
        }
        getWindow().clearFlags(129);
    }

    private final void turnScreenOnAndKeyguardOff() {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 27) {
            setShowWhenLocked(true);
            setTurnScreenOn(true);
        } else {
            getWindow().addFlags(129);
        }
        Object systemService = getSystemService("keyguard");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.app.KeyguardManager");
        KeyguardManager keyguardManager = (KeyguardManager) systemService;
        if (i10 >= 26) {
            keyguardManager.requestDismissKeyguard(this, null);
        }
    }

    @Override // androidx.appcompat.app.AppCompatActivity, android.app.Activity, android.view.ContextThemeWrapper, android.content.ContextWrapper
    protected void attachBaseContext(@NotNull Context newBase) {
        Intrinsics.checkNotNullParameter(newBase, "newBase");
        if (Build.VERSION.SDK_INT < 28) {
            TTIModule.Companion companion = TTIModule.Companion;
            String name = IncomingCallActivity.class.getName();
            Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
            companion.markActivityBeforeMain(name);
        }
        super.attachBaseContext(newBase);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        setContentView(R.layout.incoming_call_screen);
        initView();
        turnScreenOnAndKeyguardOff();
        selfIntent = this;
    }

    @Override // androidx.appcompat.app.AppCompatActivity, androidx.fragment.app.FragmentActivity, android.app.Activity
    protected void onDestroy() {
        super.onDestroy();
        turnScreenOffAndKeyguardOn();
    }
}
