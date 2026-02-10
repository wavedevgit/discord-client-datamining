package com.mkuczera;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    static Map f17387a;

    static {
        HashMap hashMap = new HashMap();
        f17387a = hashMap;
        hashMap.put("impactLight", new e(new long[]{0, 20}));
        f17387a.put("impactMedium", new e(new long[]{0, 40}));
        f17387a.put("impactHeavy", new e(new long[]{0, 60}));
        f17387a.put("notificationSuccess", new e(new long[]{0, 40, 60, 20}));
        f17387a.put("notificationWarning", new e(new long[]{0, 20, 60, 40}));
        f17387a.put("notificationError", new e(new long[]{0, 20, 40, 30, 40, 40}));
        f17387a.put("rigid", new e(new long[]{0, 30}));
        f17387a.put("soft", new e(new long[]{0, 10}));
        f17387a.put("clockTick", new f(4));
        f17387a.put("contextClick", new f(6));
        f17387a.put("keyboardPress", new f(3));
        f17387a.put("keyboardRelease", new f(7));
        f17387a.put("keyboardTap", new f(3));
        f17387a.put("longPress", new f(0));
        f17387a.put("textHandleMove", new f(9));
        f17387a.put("virtualKey", new f(1));
        f17387a.put("virtualKeyRelease", new f(8));
        f17387a.put("effectClick", new d(0));
        f17387a.put("effectDoubleClick", new d(1));
        f17387a.put("effectHeavyClick", new d(5));
        f17387a.put("effectTick", new d(2));
    }

    public static b a(String str) {
        return (b) f17387a.get(str);
    }
}
