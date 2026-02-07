package io.sentry;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p7 {

    /* renamed from: a  reason: collision with root package name */
    private final o7 f28443a;

    /* renamed from: b  reason: collision with root package name */
    private final k7 f28444b;

    public p7(o7 o7Var, k7 k7Var) {
        this.f28443a = (o7) io.sentry.util.y.c(o7Var, "The SentryStackTraceFactory is required.");
        this.f28444b = (k7) io.sentry.util.y.c(k7Var, "The SentryOptions is required");
    }

    private io.sentry.protocol.c0 d(boolean z10, StackTraceElement[] stackTraceElementArr, Thread thread) {
        io.sentry.protocol.c0 c0Var = new io.sentry.protocol.c0();
        c0Var.w(thread.getName());
        c0Var.x(Integer.valueOf(thread.getPriority()));
        c0Var.u(Long.valueOf(thread.getId()));
        c0Var.s(Boolean.valueOf(thread.isDaemon()));
        c0Var.z(thread.getState().name());
        c0Var.q(Boolean.valueOf(z10));
        List a10 = this.f28443a.a(stackTraceElementArr, false);
        if (this.f28444b.isAttachStacktrace() && a10 != null && !a10.isEmpty()) {
            io.sentry.protocol.b0 b0Var = new io.sentry.protocol.b0(a10);
            b0Var.f(Boolean.TRUE);
            c0Var.y(b0Var);
        }
        return c0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List a() {
        HashMap hashMap = new HashMap();
        Thread currentThread = Thread.currentThread();
        hashMap.put(currentThread, currentThread.getStackTrace());
        return c(hashMap, null, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public List b(List list, boolean z10) {
        return c(Thread.getAllStackTraces(), list, z10);
    }

    List c(Map map, List list, boolean z10) {
        boolean z11;
        Thread currentThread = Thread.currentThread();
        if (!map.isEmpty()) {
            ArrayList arrayList = new ArrayList();
            if (!map.containsKey(currentThread)) {
                map.put(currentThread, currentThread.getStackTrace());
            }
            for (Map.Entry entry : map.entrySet()) {
                Thread thread = (Thread) entry.getKey();
                if ((thread == currentThread && !z10) || (list != null && list.contains(Long.valueOf(thread.getId())) && !z10)) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                arrayList.add(d(z11, (StackTraceElement[]) entry.getValue(), (Thread) entry.getKey()));
            }
            return arrayList;
        }
        return null;
    }
}
