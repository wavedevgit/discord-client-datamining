package com.horcrux.svg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
enum b1 {
    Normal("normal"),
    Bold("bold"),
    w100("100"),
    w200("200"),
    w300("300"),
    w400("400"),
    w500("500"),
    w600("600"),
    w700("700"),
    w800("800"),
    w900("900"),
    Bolder("bolder"),
    Lighter("lighter");
    

    /* renamed from: z  reason: collision with root package name */
    private static final Map f16821z = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f16822d;

    static {
        b1[] values;
        int i10;
        for (b1 b1Var : values()) {
            f16821z.put(b1Var.f16822d, b1Var);
        }
    }

    b1(String str) {
        this.f16822d = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b1 d(String str) {
        return (b1) f16821z.get(str);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean e(String str) {
        return f16821z.containsKey(str);
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f16822d;
    }
}
