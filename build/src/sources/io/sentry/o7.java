package io.sentry;

import io.sentry.protocol.SentryStackFrame;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o7 {

    /* renamed from: a  reason: collision with root package name */
    private final k7 f28388a;

    public o7(k7 k7Var) {
        this.f28388a = k7Var;
    }

    public List a(StackTraceElement[] stackTraceElementArr, boolean z10) {
        if (stackTraceElementArr != null && stackTraceElementArr.length > 0) {
            ArrayList arrayList = new ArrayList();
            for (StackTraceElement stackTraceElement : stackTraceElementArr) {
                if (stackTraceElement != null) {
                    String className = stackTraceElement.getClassName();
                    if (z10 || !className.startsWith("io.sentry.") || className.startsWith("io.sentry.samples.") || className.startsWith("io.sentry.mobile.")) {
                        SentryStackFrame sentryStackFrame = new SentryStackFrame();
                        sentryStackFrame.D(b(className));
                        sentryStackFrame.H(className);
                        sentryStackFrame.C(stackTraceElement.getMethodName());
                        sentryStackFrame.B(stackTraceElement.getFileName());
                        if (stackTraceElement.getLineNumber() >= 0) {
                            sentryStackFrame.F(Integer.valueOf(stackTraceElement.getLineNumber()));
                        }
                        sentryStackFrame.I(Boolean.valueOf(stackTraceElement.isNativeMethod()));
                        arrayList.add(sentryStackFrame);
                        if (arrayList.size() >= 100) {
                            break;
                        }
                    }
                }
            }
            Collections.reverse(arrayList);
            return arrayList;
        }
        return null;
    }

    public Boolean b(String str) {
        if (str != null && !str.isEmpty()) {
            for (String str2 : this.f28388a.getInAppIncludes()) {
                if (str.startsWith(str2)) {
                    return Boolean.TRUE;
                }
            }
            for (String str3 : this.f28388a.getInAppExcludes()) {
                if (str.startsWith(str3)) {
                    return Boolean.FALSE;
                }
            }
            return null;
        }
        return Boolean.TRUE;
    }
}
