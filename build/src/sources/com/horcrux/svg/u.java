package com.horcrux.svg;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
enum u {
    MATRIX("matrix"),
    SATURATE("saturate"),
    HUE_ROTATE("hueRotate"),
    LUMINANCE_TO_ALPHA("luminanceToAlpha");
    

    /* renamed from: q  reason: collision with root package name */
    private static final Map f17064q = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f17066d;

    static {
        u[] values;
        int i10;
        for (u uVar : values()) {
            f17064q.put(uVar.f17066d, uVar);
        }
    }

    u(String str) {
        this.f17066d = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static u d(String str) {
        Map map = f17064q;
        if (map.containsKey(str)) {
            return (u) map.get(str);
        }
        throw new IllegalArgumentException("Unknown String Value: " + str);
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f17066d;
    }
}
