package com.mkuczera;

import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    static Map f16861a;

    static {
        HashMap hashMap = new HashMap();
        f16861a = hashMap;
        hashMap.put("impactLight", new e(new long[]{0, 20}));
        f16861a.put("impactMedium", new e(new long[]{0, 40}));
        f16861a.put("impactHeavy", new e(new long[]{0, 60}));
        f16861a.put("notificationSuccess", new e(new long[]{0, 40, 60, 20}));
        f16861a.put("notificationWarning", new e(new long[]{0, 20, 60, 40}));
        f16861a.put("notificationError", new e(new long[]{0, 20, 40, 30, 40, 40}));
        f16861a.put("rigid", new e(new long[]{0, 30}));
        f16861a.put("soft", new e(new long[]{0, 10}));
        f16861a.put("clockTick", new f(4));
        f16861a.put("contextClick", new f(6));
        f16861a.put("keyboardPress", new f(3));
        f16861a.put("keyboardRelease", new f(7));
        f16861a.put("keyboardTap", new f(3));
        f16861a.put("longPress", new f(0));
        f16861a.put("textHandleMove", new f(9));
        f16861a.put("virtualKey", new f(1));
        f16861a.put("virtualKeyRelease", new f(8));
        f16861a.put("effectClick", new d(0));
        f16861a.put("effectDoubleClick", new d(1));
        f16861a.put("effectHeavyClick", new d(5));
        f16861a.put("effectTick", new d(2));
    }

    public static b a(String str) {
        return (b) f16861a.get(str);
    }
}
