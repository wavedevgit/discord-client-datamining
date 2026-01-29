package com.discord.phone_verification;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import com.discord.logging.Log;
import com.google.android.gms.common.api.Status;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.MatchResult;
import kotlin.text.Regex;
import org.jetbrains.annotations.NotNull;
import w1.b;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0010\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000b\n\u0002\b\u0004\u0018\u0000 \u00182\u00020\u0001:\u0001\u0018B\u001b\u0012\u0012\u0010\u0005\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u0002¢\u0006\u0004\b\u0006\u0010\u0007J\u0017\u0010\t\u001a\u00020\u00032\u0006\u0010\b\u001a\u00020\u0003H\u0002¢\u0006\u0004\b\t\u0010\nJ\u0013\u0010\f\u001a\u00020\u0004*\u00020\u000bH\u0002¢\u0006\u0004\b\f\u0010\rJ\u001f\u0010\u0012\u001a\u00020\u00042\u0006\u0010\u000f\u001a\u00020\u000e2\u0006\u0010\u0011\u001a\u00020\u0010H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R \u0010\u0005\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00040\u00028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0005\u0010\u0014R\u0016\u0010\u0016\u001a\u00020\u00158\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0016\u0010\u0017¨\u0006\u0019"}, d2 = {"Lcom/discord/phone_verification/SmsAuthCodeBroadcastReceiver;", "Landroid/content/BroadcastReceiver;", "Lkotlin/Function1;", "", "", "onReceiveCallback", "<init>", "(Lkotlin/jvm/functions/Function1;)V", "message", "extractCode", "(Ljava/lang/String;)Ljava/lang/String;", "Landroid/os/Bundle;", "extractSecurityCode", "(Landroid/os/Bundle;)V", "Landroid/content/Context;", "context", "Landroid/content/Intent;", "intent", "onReceive", "(Landroid/content/Context;Landroid/content/Intent;)V", "Lkotlin/jvm/functions/Function1;", "", "handled", "Z", "Companion", "phone_verification_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSmsAuthCodeBroadcastReceiver.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SmsAuthCodeBroadcastReceiver.kt\ncom/discord/phone_verification/SmsAuthCodeBroadcastReceiver\n+ 2 _Strings.kt\nkotlin/text/StringsKt___StringsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,77:1\n434#2:78\n507#2,5:79\n1#3:84\n*S KotlinDebug\n*F\n+ 1 SmsAuthCodeBroadcastReceiver.kt\ncom/discord/phone_verification/SmsAuthCodeBroadcastReceiver\n*L\n31#1:78\n31#1:79,5\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SmsAuthCodeBroadcastReceiver extends BroadcastReceiver {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String TAG = "SmsAuthCodeBroadcastReceiver";
    private boolean handled;
    @NotNull
    private final Function1<String, Unit> onReceiveCallback;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/phone_verification/SmsAuthCodeBroadcastReceiver$Companion;", "", "<init>", "()V", "TAG", "", "phone_verification_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: Multi-variable type inference failed */
    public SmsAuthCodeBroadcastReceiver(@NotNull Function1<? super String, Unit> onReceiveCallback) {
        Intrinsics.checkNotNullParameter(onReceiveCallback, "onReceiveCallback");
        this.onReceiveCallback = onReceiveCallback;
    }

    private final String extractCode(String str) {
        String value;
        String str2 = null;
        MatchResult d10 = Regex.d(new Regex("[\\d-]{6,11}"), str, 0, 2, null);
        if (d10 != null && (value = d10.getValue()) != null) {
            StringBuilder sb2 = new StringBuilder();
            int length = value.length();
            for (int i10 = 0; i10 < length; i10++) {
                char charAt = value.charAt(i10);
                if (Character.isDigit(charAt)) {
                    sb2.append(charAt);
                }
            }
            str2 = sb2.toString();
        }
        if (str2 == null) {
            return "";
        }
        return str2;
    }

    private final void extractSecurityCode(Bundle bundle) {
        String str;
        String str2 = null;
        if (bundle.containsKey("com.google.android.gms.auth.api.phone.EXTRA_SMS_MESSAGE")) {
            str = bundle.getString("com.google.android.gms.auth.api.phone.EXTRA_SMS_MESSAGE");
        } else {
            str = null;
        }
        if (str != null) {
            str2 = extractCode(str);
        }
        if (str2 != null && str2.length() != 0) {
            Log.i$default(Log.INSTANCE, TAG, "Successfully extracted code from SMS: " + str2, (Throwable) null, 4, (Object) null);
            this.onReceiveCallback.invoke(str2);
            this.handled = true;
            return;
        }
        Log.i$default(Log.INSTANCE, TAG, "Failed to extract code from SMS.", (Throwable) null, 4, (Object) null);
    }

    @Override // android.content.BroadcastReceiver
    public void onReceive(@NotNull Context context, @NotNull Intent intent) {
        Status status;
        Integer num;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(intent, "intent");
        if (this.handled) {
            return;
        }
        Bundle extras = intent.getExtras();
        Integer num2 = null;
        if (extras != null) {
            status = (Status) b.a(extras, "com.google.android.gms.auth.api.phone.EXTRA_STATUS", Status.class);
        } else {
            status = null;
        }
        if (status != null) {
            num = Integer.valueOf(status.d());
        } else {
            num = null;
        }
        if (num != null && num.intValue() == 0) {
            Log.i$default(Log.INSTANCE, TAG, "Successfully caught SMS code.", (Throwable) null, 4, (Object) null);
            extractSecurityCode(extras);
        } else if (num != null && num.intValue() == 15) {
            Log.i$default(Log.INSTANCE, TAG, "Timeout waiting for SMS code.", (Throwable) null, 4, (Object) null);
        } else {
            Log log = Log.INSTANCE;
            if (status != null) {
                num2 = Integer.valueOf(status.d());
            }
            Log.i$default(log, TAG, "Unexpected status code while waiting for SMS code: " + num2, (Throwable) null, 4, (Object) null);
        }
    }
}
