package com.google.android.play.core.assetpacks;

import java.util.HashMap;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f16700a = new HashMap();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final synchronized double a(String str) {
        Double d10 = (Double) this.f16700a.get(str);
        if (d10 == null) {
            return 0.0d;
        }
        return d10.doubleValue();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final synchronized double b(String str, t2 t2Var) {
        double d10;
        l1 l1Var = (l1) t2Var;
        d10 = (l1Var.f16885h + 1.0d) / l1Var.f16886i;
        this.f16700a.put(str, Double.valueOf(d10));
        return d10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final synchronized void c(String str) {
        this.f16700a.put(str, Double.valueOf(0.0d));
    }
}
