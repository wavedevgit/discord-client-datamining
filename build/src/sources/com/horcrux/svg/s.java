package com.horcrux.svg;

import com.facebook.react.uimanager.ViewProps;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
enum s {
    UNKNOWN("unknown"),
    DUPLICATE("duplicate"),
    WRAP("wrap"),
    NONE(ViewProps.NONE);
    

    /* renamed from: q  reason: collision with root package name */
    private static final Map f16645q = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f16647d;

    static {
        s[] values;
        int i10;
        for (s sVar : values()) {
            f16645q.put(sVar.f16647d, sVar);
        }
    }

    s(String str) {
        this.f16647d = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s d(String str) {
        Map map = f16645q;
        if (map.containsKey(str)) {
            return (s) map.get(str);
        }
        throw new IllegalArgumentException("Unknown 'edgeMode' Value: " + str);
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f16647d;
    }
}
