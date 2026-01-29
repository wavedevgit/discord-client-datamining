package com.mkuczera;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    static Map f18260a;

    static {
        HashMap hashMap = new HashMap();
        f18260a = hashMap;
        hashMap.put("impactLight", new e(new long[]{0, 20}));
        f18260a.put("impactMedium", new e(new long[]{0, 40}));
        f18260a.put("impactHeavy", new e(new long[]{0, 60}));
        f18260a.put("notificationSuccess", new e(new long[]{0, 40, 60, 20}));
        f18260a.put("notificationWarning", new e(new long[]{0, 20, 60, 40}));
        f18260a.put("notificationError", new e(new long[]{0, 20, 40, 30, 40, 40}));
        f18260a.put("rigid", new e(new long[]{0, 30}));
        f18260a.put("soft", new e(new long[]{0, 10}));
        f18260a.put("clockTick", new f(4));
        f18260a.put("contextClick", new f(6));
        f18260a.put("keyboardPress", new f(3));
        f18260a.put("keyboardRelease", new f(7));
        f18260a.put("keyboardTap", new f(3));
        f18260a.put("longPress", new f(0));
        f18260a.put("textHandleMove", new f(9));
        f18260a.put("virtualKey", new f(1));
        f18260a.put("virtualKeyRelease", new f(8));
        f18260a.put("effectClick", new d(0));
        f18260a.put("effectDoubleClick", new d(1));
        f18260a.put("effectHeavyClick", new d(5));
        f18260a.put("effectTick", new d(2));
    }

    public static b a(String str) {
        return (b) f18260a.get(str);
    }
}
