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
    private static final Map f17073s = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f17075d;

    static {
        v[] values;
        int i10;
        for (v vVar : values()) {
            f17073s.put(vVar.f17075d, vVar);
        }
    }

    v(String str) {
        this.f17075d = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static v d(String str) {
        Map map = f17073s;
        if (map.containsKey(str)) {
            return (v) map.get(str);
        }
        throw new IllegalArgumentException("Unknown String Value: " + str);
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f17075d;
    }
}
