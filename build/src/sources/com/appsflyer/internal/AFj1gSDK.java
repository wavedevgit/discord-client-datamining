package com.appsflyer.internal;

import java.lang.reflect.Field;
import kotlin.Result;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFj1gSDK implements AFj1jSDK {
    @Override // com.appsflyer.internal.AFj1jSDK
    @NotNull
    public final String getRevenue() {
        Object obj;
        Object obj2 = "";
        try {
            Result.a aVar = Result.f31985e;
            Field declaredField = z5.a.class.getDeclaredField("a");
            declaredField.setAccessible(true);
            Object obj3 = declaredField.get(null);
            Intrinsics.checkNotNull(obj3, "");
            obj = Result.b((String) obj3);
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f31985e;
            obj = Result.b(kotlin.c.a(th2));
        }
        if (!Result.g(obj)) {
            obj2 = obj;
        }
        return (String) obj2;
    }
}
