package com.horcrux.svg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
enum t {
    UNKNOWN("unknown"),
    NORMAL("normal"),
    MULTIPLY("multiply"),
    SCREEN("screen"),
    DARKEN("darken"),
    LIGHTEN("lighten");
    

    /* renamed from: s  reason: collision with root package name */
    private static final Map f16657s = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f16659d;

    static {
        t[] values;
        int i10;
        for (t tVar : values()) {
            f16657s.put(tVar.f16659d, tVar);
        }
    }

    t(String str) {
        this.f16659d = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t d(String str) {
        Map map = f16657s;
        if (map.containsKey(str)) {
            return (t) map.get(str);
        }
        throw new IllegalArgumentException("Unknown String Value: " + str);
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f16659d;
    }
}
