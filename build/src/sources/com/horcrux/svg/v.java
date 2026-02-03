package com.horcrux.svg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
enum v {
    OVER("over"),
    IN("in"),
    OUT("out"),
    ATOP("atop"),
    XOR("xor"),
    ARITHMETIC("arithmetic");
    

    /* renamed from: s  reason: collision with root package name */
    private static final Map f16679s = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f16681d;

    static {
        v[] values;
        int i10;
        for (v vVar : values()) {
            f16679s.put(vVar.f16681d, vVar);
        }
    }

    v(String str) {
        this.f16681d = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static v d(String str) {
        Map map = f16679s;
        if (map.containsKey(str)) {
            return (v) map.get(str);
        }
        throw new IllegalArgumentException("Unknown String Value: " + str);
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f16681d;
    }
}
