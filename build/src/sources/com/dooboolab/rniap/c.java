package com.dooboolab.rniap;

import com.facebook.react.bridge.Promise;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    public static final c f9463a = new c();

    /* renamed from: b  reason: collision with root package name */
    private static final HashMap f9464b = new HashMap();

    private c() {
    }

    public final void a(String key, Promise promise) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(promise, "promise");
        HashMap hashMap = f9464b;
        Object obj = hashMap.get(key);
        if (obj == null) {
            obj = new ArrayList();
            hashMap.put(key, obj);
        }
        ((List) obj).add(promise);
    }

    public final void b() {
        HashMap hashMap = f9464b;
        ArrayList<Promise> arrayList = new ArrayList();
        for (Map.Entry entry : hashMap.entrySet()) {
            CollectionsKt.B(arrayList, (Iterable) entry.getValue());
        }
        for (Promise promise : arrayList) {
            d.c(promise, "E_CONNECTION_CLOSED", "Connection has been closed", null);
        }
        f9464b.clear();
    }

    public final void c(String key, String code, String str, Exception exc) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(code, "code");
        List<Promise> list = (List) f9464b.get(key);
        if (list != null) {
            for (Promise promise : list) {
                d.c(promise, code, str, exc);
            }
        }
        f9464b.remove(key);
    }

    public final void d(String key, Object obj) {
        Intrinsics.checkNotNullParameter(key, "key");
        List<Promise> list = (List) f9464b.get(key);
        if (list != null) {
            for (Promise promise : list) {
                d.d(promise, obj);
            }
        }
        f9464b.remove(key);
    }
}
