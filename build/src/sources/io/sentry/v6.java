package io.sentry;

import java.util.Locale;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public enum v6 implements w1 {
    Session("session"),
    Event("event"),
    UserFeedback("user_report"),
    Attachment("attachment"),
    Transaction("transaction"),
    Profile("profile"),
    ProfileChunk("profile_chunk"),
    ClientReport("client_report"),
    ReplayEvent("replay_event"),
    ReplayRecording("replay_recording"),
    ReplayVideo("replay_video"),
    CheckIn("check_in"),
    Feedback("feedback"),
    Log("log"),
    Unknown("__unknown__");
    
    private final String itemType;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements m1 {
        @Override // io.sentry.m1
        /* renamed from: b */
        public v6 a(e3 e3Var, ILogger iLogger) {
            return v6.valueOfLabel(e3Var.e1().toLowerCase(Locale.ROOT));
        }
    }

    v6(String str) {
        this.itemType = str;
    }

    public static v6 resolve(Object obj) {
        if (obj instanceof SentryEvent) {
            if (((SentryEvent) obj).C().g() == null) {
                return Event;
            }
            return Feedback;
        } else if (obj instanceof io.sentry.protocol.d0) {
            return Transaction;
        } else {
            if (obj instanceof z7) {
                return Session;
            }
            if (obj instanceof io.sentry.clientreport.c) {
                return ClientReport;
            }
            return Attachment;
        }
    }

    @NotNull
    public static v6 valueOfLabel(String str) {
        v6[] values;
        for (v6 v6Var : values()) {
            if (v6Var.itemType.equals(str)) {
                return v6Var;
            }
        }
        return Unknown;
    }

    public String getItemType() {
        return this.itemType;
    }

    @Override // io.sentry.w1
    public void serialize(@NotNull f3 f3Var, @NotNull ILogger iLogger) {
        f3Var.f(this.itemType);
    }
}
