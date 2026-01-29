package com.google.android.gms.internal.play_billing;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d3 {

    /* renamed from: c  reason: collision with root package name */
    private static final d3 f15217c = new d3();

    /* renamed from: b  reason: collision with root package name */
    private final ConcurrentMap f15219b = new ConcurrentHashMap();

    /* renamed from: a  reason: collision with root package name */
    private final h3 f15218a = new o2();

    private d3() {
    }

    public static d3 a() {
        return f15217c;
    }

    public final g3 b(Class cls) {
        y1.c(cls, "messageType");
        g3 g3Var = (g3) this.f15219b.get(cls);
        if (g3Var == null) {
            g3 a10 = this.f15218a.a(cls);
            y1.c(cls, "messageType");
            g3 g3Var2 = (g3) this.f15219b.putIfAbsent(cls, a10);
            if (g3Var2 == null) {
                return a10;
            }
            return g3Var2;
        }
        return g3Var;
    }
}
