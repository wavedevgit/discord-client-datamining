package com.horcrux.svg;

import com.facebook.react.uimanager.ViewProps;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
enum y0 {
    baseline("baseline"),
    textBottom("text-bottom"),
    alphabetic("alphabetic"),
    ideographic("ideographic"),
    middle("middle"),
    central("central"),
    mathematical("mathematical"),
    textTop("text-top"),
    bottom(ViewProps.BOTTOM),
    center("center"),
    top(ViewProps.TOP),
    textBeforeEdge("text-before-edge"),
    textAfterEdge("text-after-edge"),
    beforeEdge("before-edge"),
    afterEdge("after-edge"),
    hanging("hanging");
    
    private static final Map C = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f16726d;

    static {
        y0[] values;
        int i10;
        for (y0 y0Var : values()) {
            C.put(y0Var.f16726d, y0Var);
        }
    }

    y0(String str) {
        this.f16726d = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static y0 d(String str) {
        Map map = C;
        if (map.containsKey(str)) {
            return (y0) map.get(str);
        }
        throw new IllegalArgumentException("Unknown String Value: " + str);
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f16726d;
    }
}
