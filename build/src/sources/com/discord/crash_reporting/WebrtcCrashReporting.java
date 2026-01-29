package com.discord.crash_reporting;

import io.sentry.b5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class WebrtcCrashReporting {
    WebrtcCrashReporting() {
    }

    static String reportWebrtcException(Throwable th2) {
        b5.l(th2);
        return th2.toString();
    }
}
