package com.horcrux.svg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
enum w {
    OBJECT_BOUNDING_BOX("objectBoundingBox"),
    USER_SPACE_ON_USE("userSpaceOnUse");
    

    /* renamed from: o  reason: collision with root package name */
    private static final Map f16684o = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f16686d;

    static {
        w[] values;
        for (w wVar : values()) {
            f16684o.put(wVar.f16686d, wVar);
        }
    }

    w(String str) {
        this.f16686d = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static w d(String str) {
        Map map = f16684o;
        if (map.containsKey(str)) {
            return (w) map.get(str);
        }
        throw new IllegalArgumentException("Unknown 'Unit' Value: " + str);
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f16686d;
    }
}
