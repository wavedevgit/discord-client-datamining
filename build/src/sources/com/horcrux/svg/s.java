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
    private static final Map f17908q = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f17910d;

    static {
        s[] values;
        int i10;
        for (s sVar : values()) {
            f17908q.put(sVar.f17910d, sVar);
        }
    }

    s(String str) {
        this.f17910d = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s d(String str) {
        Map map = f17908q;
        if (map.containsKey(str)) {
            return (s) map.get(str);
        }
        throw new IllegalArgumentException("Unknown 'edgeMode' Value: " + str);
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f17910d;
    }
}
