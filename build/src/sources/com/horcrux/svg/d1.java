package com.horcrux.svg;

import com.facebook.react.uimanager.ViewProps;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
enum d1 {
    None(ViewProps.NONE),
    Underline("underline"),
    Overline("overline"),
    LineThrough("line-through"),
    Blink("blink");
    

    /* renamed from: r  reason: collision with root package name */
    private static final Map f17877r = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private final String f17879d;

    static {
        d1[] values;
        int i10;
        for (d1 d1Var : values()) {
            f17877r.put(d1Var.f17879d, d1Var);
        }
    }

    d1(String str) {
        this.f17879d = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static d1 d(String str) {
        Map map = f17877r;
        if (map.containsKey(str)) {
            return (d1) map.get(str);
        }
        throw new IllegalArgumentException("Unknown String Value: " + str);
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f17879d;
    }
}
