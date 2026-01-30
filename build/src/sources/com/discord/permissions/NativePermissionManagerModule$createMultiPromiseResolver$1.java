package com.discord.permissions;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.WritableMap;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
@Metadata(d1 = {"\u00005\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0003\n\u0000\n\u0002\u0018\u0002\n\u0000*\u0001\u0000\b\n\u0018\u00002\u00020\u0001J\u001c\u0010\u0002\u001a\u00020\u00032\u0012\u0010\u0004\u001a\u000e\u0012\u0004\u0012\u00020\u0001\u0012\u0004\u0012\u00020\u00030\u0005H\u0002J\u0012\u0010\u0006\u001a\u00020\u00032\b\u0010\u0007\u001a\u0004\u0018\u00010\bH\u0016J\u001a\u0010\t\u001a\u00020\u00032\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\u000bH\u0016J\u001a\u0010\t\u001a\u00020\u00032\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\r\u001a\u0004\u0018\u00010\u000eH\u0016J$\u0010\t\u001a\u00020\u00032\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\u000b2\b\u0010\r\u001a\u0004\u0018\u00010\u000eH\u0016J\u0010\u0010\t\u001a\u00020\u00032\u0006\u0010\r\u001a\u00020\u000eH\u0016J\u0018\u0010\t\u001a\u00020\u00032\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u0010H\u0016J\u0018\u0010\t\u001a\u00020\u00032\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\u000f\u001a\u00020\u0010H\u0016J\"\u0010\t\u001a\u00020\u00032\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\r\u001a\u0004\u0018\u00010\u000e2\u0006\u0010\u000f\u001a\u00020\u0010H\u0016J\"\u0010\t\u001a\u00020\u00032\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\u000f\u001a\u00020\u0010H\u0016J\u0010\u0010\t\u001a\u00020\u00032\u0006\u0010\f\u001a\u00020\u000bH\u0016J0\u0010\t\u001a\u00020\u00032\b\u0010\n\u001a\u0004\u0018\u00010\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\u000b2\b\u0010\r\u001a\u0004\u0018\u00010\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010H\u0016¨\u0006\u0011"}, d2 = {"com/discord/permissions/NativePermissionManagerModule$createMultiPromiseResolver$1", "Lcom/facebook/react/bridge/Promise;", "executeOnAllPending", "", "action", "Lkotlin/Function1;", "resolve", "value", "", "reject", "code", "", "message", "throwable", "", "userInfo", "Lcom/facebook/react/bridge/WritableMap;", "permissions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNativePermissionManagerModule.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NativePermissionManagerModule.kt\ncom/discord/permissions/NativePermissionManagerModule$createMultiPromiseResolver$1\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,384:1\n1869#2,2:385\n*S KotlinDebug\n*F\n+ 1 NativePermissionManagerModule.kt\ncom/discord/permissions/NativePermissionManagerModule$createMultiPromiseResolver$1\n*L\n300#1:385,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NativePermissionManagerModule$createMultiPromiseResolver$1 implements Promise {
    final /* synthetic */ String $permissionKey;
    final /* synthetic */ NativePermissionManagerModule this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public NativePermissionManagerModule$createMultiPromiseResolver$1(NativePermissionManagerModule nativePermissionManagerModule, String str) {
        this.this$0 = nativePermissionManagerModule;
        this.$permissionKey = str;
    }

    private final void executeOnAllPending(Function1<? super Promise, Unit> function1) {
        Map map;
        Map map2;
        map = this.this$0.pendingPermissionRequests;
        NativePermissionManagerModule nativePermissionManagerModule = this.this$0;
        String str = this.$permissionKey;
        synchronized (map) {
            map2 = nativePermissionManagerModule.pendingPermissionRequests;
            List<Promise> list = (List) map2.remove(str);
            if (list == null) {
                return;
            }
            for (Promise promise : list) {
                try {
                    function1.invoke(promise);
                } catch (Exception e10) {
                    String message = e10.getMessage();
                    promise.reject("PROMISE_RESOLUTION_ERROR", "Failed to resolve promise: " + message, e10);
                }
            }
            Unit unit = Unit.f33298a;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit reject$lambda$10(String str, String str2, WritableMap writableMap, Promise it) {
        Intrinsics.checkNotNullParameter(it, "it");
        it.reject(str, str2, writableMap);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit reject$lambda$11(String str, Promise it) {
        Intrinsics.checkNotNullParameter(it, "it");
        it.reject(str);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit reject$lambda$12(String str, String str2, Throwable th2, WritableMap writableMap, Promise it) {
        Intrinsics.checkNotNullParameter(it, "it");
        it.reject(str, str2, th2, writableMap);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit reject$lambda$3(String str, String str2, Promise it) {
        Intrinsics.checkNotNullParameter(it, "it");
        it.reject(str, str2);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit reject$lambda$4(String str, Throwable th2, Promise it) {
        Intrinsics.checkNotNullParameter(it, "it");
        it.reject(str, th2);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit reject$lambda$5(String str, String str2, Throwable th2, Promise it) {
        Intrinsics.checkNotNullParameter(it, "it");
        it.reject(str, str2, th2);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit reject$lambda$6(Throwable th2, Promise it) {
        Intrinsics.checkNotNullParameter(it, "it");
        it.reject(th2);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit reject$lambda$7(Throwable th2, WritableMap writableMap, Promise it) {
        Intrinsics.checkNotNullParameter(it, "it");
        it.reject(th2, writableMap);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit reject$lambda$8(String str, WritableMap writableMap, Promise it) {
        Intrinsics.checkNotNullParameter(it, "it");
        it.reject(str, writableMap);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit reject$lambda$9(String str, Throwable th2, WritableMap writableMap, Promise it) {
        Intrinsics.checkNotNullParameter(it, "it");
        it.reject(str, th2, writableMap);
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit resolve$lambda$2(Object obj, Promise it) {
        Intrinsics.checkNotNullParameter(it, "it");
        it.resolve(obj);
        return Unit.f33298a;
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(final String code, final String str) {
        Intrinsics.checkNotNullParameter(code, "code");
        executeOnAllPending(new Function1() { // from class: com.discord.permissions.n
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit reject$lambda$3;
                reject$lambda$3 = NativePermissionManagerModule$createMultiPromiseResolver$1.reject$lambda$3(code, str, (Promise) obj);
                return reject$lambda$3;
            }
        });
    }

    @Override // com.facebook.react.bridge.Promise
    public void resolve(final Object obj) {
        executeOnAllPending(new Function1() { // from class: com.discord.permissions.p
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj2) {
                Unit resolve$lambda$2;
                resolve$lambda$2 = NativePermissionManagerModule$createMultiPromiseResolver$1.resolve$lambda$2(obj, (Promise) obj2);
                return resolve$lambda$2;
            }
        });
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(final String code, final Throwable th2) {
        Intrinsics.checkNotNullParameter(code, "code");
        executeOnAllPending(new Function1() { // from class: com.discord.permissions.o
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit reject$lambda$4;
                reject$lambda$4 = NativePermissionManagerModule$createMultiPromiseResolver$1.reject$lambda$4(code, th2, (Promise) obj);
                return reject$lambda$4;
            }
        });
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(final String code, final String str, final Throwable th2) {
        Intrinsics.checkNotNullParameter(code, "code");
        executeOnAllPending(new Function1() { // from class: com.discord.permissions.m
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit reject$lambda$5;
                reject$lambda$5 = NativePermissionManagerModule$createMultiPromiseResolver$1.reject$lambda$5(code, str, th2, (Promise) obj);
                return reject$lambda$5;
            }
        });
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(final Throwable throwable) {
        Intrinsics.checkNotNullParameter(throwable, "throwable");
        executeOnAllPending(new Function1() { // from class: com.discord.permissions.l
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit reject$lambda$6;
                reject$lambda$6 = NativePermissionManagerModule$createMultiPromiseResolver$1.reject$lambda$6(throwable, (Promise) obj);
                return reject$lambda$6;
            }
        });
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(final Throwable throwable, final WritableMap userInfo) {
        Intrinsics.checkNotNullParameter(throwable, "throwable");
        Intrinsics.checkNotNullParameter(userInfo, "userInfo");
        executeOnAllPending(new Function1() { // from class: com.discord.permissions.i
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit reject$lambda$7;
                reject$lambda$7 = NativePermissionManagerModule$createMultiPromiseResolver$1.reject$lambda$7(throwable, userInfo, (Promise) obj);
                return reject$lambda$7;
            }
        });
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(final String code, final WritableMap userInfo) {
        Intrinsics.checkNotNullParameter(code, "code");
        Intrinsics.checkNotNullParameter(userInfo, "userInfo");
        executeOnAllPending(new Function1() { // from class: com.discord.permissions.q
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit reject$lambda$8;
                reject$lambda$8 = NativePermissionManagerModule$createMultiPromiseResolver$1.reject$lambda$8(code, userInfo, (Promise) obj);
                return reject$lambda$8;
            }
        });
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(final String code, final Throwable th2, final WritableMap userInfo) {
        Intrinsics.checkNotNullParameter(code, "code");
        Intrinsics.checkNotNullParameter(userInfo, "userInfo");
        executeOnAllPending(new Function1() { // from class: com.discord.permissions.s
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit reject$lambda$9;
                reject$lambda$9 = NativePermissionManagerModule$createMultiPromiseResolver$1.reject$lambda$9(code, th2, userInfo, (Promise) obj);
                return reject$lambda$9;
            }
        });
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(final String code, final String str, final WritableMap userInfo) {
        Intrinsics.checkNotNullParameter(code, "code");
        Intrinsics.checkNotNullParameter(userInfo, "userInfo");
        executeOnAllPending(new Function1() { // from class: com.discord.permissions.h
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit reject$lambda$10;
                reject$lambda$10 = NativePermissionManagerModule$createMultiPromiseResolver$1.reject$lambda$10(code, str, userInfo, (Promise) obj);
                return reject$lambda$10;
            }
        });
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(final String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        executeOnAllPending(new Function1() { // from class: com.discord.permissions.k
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit reject$lambda$11;
                reject$lambda$11 = NativePermissionManagerModule$createMultiPromiseResolver$1.reject$lambda$11(message, (Promise) obj);
                return reject$lambda$11;
            }
        });
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(final String str, final String str2, final Throwable th2, final WritableMap writableMap) {
        executeOnAllPending(new Function1() { // from class: com.discord.permissions.j
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit reject$lambda$12;
                reject$lambda$12 = NativePermissionManagerModule$createMultiPromiseResolver$1.reject$lambda$12(str, str2, th2, writableMap, (Promise) obj);
                return reject$lambda$12;
            }
        });
    }
}
