package com.google.android.gms.internal.play_billing;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d3 {

    /* renamed from: c  reason: collision with root package name */
    private static final d3 f14311c = new d3();

    /* renamed from: b  reason: collision with root package name */
    private final ConcurrentMap f14313b = new ConcurrentHashMap();

    /* renamed from: a  reason: collision with root package name */
    private final h3 f14312a = new o2();

    private d3() {
    }

    public static d3 a() {
        return f14311c;
    }

    public final g3 b(Class cls) {
        y1.c(cls, "messageType");
        g3 g3Var = (g3) this.f14313b.get(cls);
        if (g3Var == null) {
            g3 a10 = this.f14312a.a(cls);
            y1.c(cls, "messageType");
            g3 g3Var2 = (g3) this.f14313b.putIfAbsent(cls, a10);
            if (g3Var2 == null) {
                return a10;
            }
            return g3Var2;
        }
        return g3Var;
    }
}
