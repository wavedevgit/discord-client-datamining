package com.horcrux.svg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
enum w {
    OBJECT_BOUNDING_BOX("objectBoundingBox"),
    USER_SPACE_ON_USE("userSpaceOnUse");
    

    /* renamed from: o  reason: collision with root package name */
    private static final Map f18087o = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f18089d;

    static {
        w[] values;
        for (w wVar : values()) {
            f18087o.put(wVar.f18089d, wVar);
        }
    }

    w(String str) {
        this.f18089d = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static w d(String str) {
        Map map = f18087o;
        if (map.containsKey(str)) {
            return (w) map.get(str);
        }
        throw new IllegalArgumentException("Unknown 'Unit' Value: " + str);
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f18089d;
    }
}
