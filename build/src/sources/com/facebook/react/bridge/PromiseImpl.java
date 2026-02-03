package com.facebook.react.bridge;

import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u0003\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u0000 \u00112\u00020\u0001:\u0001\u0011B\u001d\b\u0007\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u0012\u0010\u0002\u001a\u00020\u00072\b\u0010\b\u001a\u0004\u0018\u00010\tH\u0016J\u001a\u0010\u0004\u001a\u00020\u00072\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\u000bH\u0016J\u001a\u0010\u0004\u001a\u00020\u00072\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\r\u001a\u0004\u0018\u00010\u000eH\u0016J$\u0010\u0004\u001a\u00020\u00072\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\u000b2\b\u0010\r\u001a\u0004\u0018\u00010\u000eH\u0016J\u0010\u0010\u0004\u001a\u00020\u00072\u0006\u0010\r\u001a\u00020\u000eH\u0016J\u0018\u0010\u0004\u001a\u00020\u00072\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u0010H\u0016J\u0018\u0010\u0004\u001a\u00020\u00072\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\u000f\u001a\u00020\u0010H\u0016J\"\u0010\u0004\u001a\u00020\u00072\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\r\u001a\u0004\u0018\u00010\u000e2\u0006\u0010\u000f\u001a\u00020\u0010H\u0016J\"\u0010\u0004\u001a\u00020\u00072\u0006\u0010\n\u001a\u00020\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\u000f\u001a\u00020\u0010H\u0016J0\u0010\u0004\u001a\u00020\u00072\b\u0010\n\u001a\u0004\u0018\u00010\u000b2\b\u0010\f\u001a\u0004\u0018\u00010\u000b2\b\u0010\r\u001a\u0004\u0018\u00010\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010H\u0016J\u0010\u0010\u0004\u001a\u00020\u00072\u0006\u0010\f\u001a\u00020\u000bH\u0017R\u0010\u0010\u0002\u001a\u0004\u0018\u00010\u0003X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u0003X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0012"}, d2 = {"Lcom/facebook/react/bridge/PromiseImpl;", "Lcom/facebook/react/bridge/Promise;", "resolve", "Lcom/facebook/react/bridge/Callback;", "reject", "<init>", "(Lcom/facebook/react/bridge/Callback;Lcom/facebook/react/bridge/Callback;)V", "", "value", "", PromiseImpl.ERROR_MAP_KEY_CODE, "", "message", "throwable", "", PromiseImpl.ERROR_MAP_KEY_USER_INFO, "Lcom/facebook/react/bridge/WritableMap;", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class PromiseImpl implements Promise {
    @NotNull
    private static final Companion Companion = new Companion(null);
    @NotNull
    private static final String ERROR_DEFAULT_CODE = "EUNSPECIFIED";
    @NotNull
    private static final String ERROR_DEFAULT_MESSAGE = "Error not specified.";
    @NotNull
    private static final String ERROR_MAP_KEY_CODE = "code";
    @NotNull
    private static final String ERROR_MAP_KEY_MESSAGE = "message";
    @NotNull
    private static final String ERROR_MAP_KEY_NAME = "name";
    @NotNull
    private static final String ERROR_MAP_KEY_NATIVE_STACK = "nativeStackAndroid";
    @NotNull
    private static final String ERROR_MAP_KEY_USER_INFO = "userInfo";
    private static final int ERROR_STACK_FRAME_LIMIT = 50;
    @NotNull
    private static final String STACK_FRAME_KEY_CLASS = "class";
    @NotNull
    private static final String STACK_FRAME_KEY_FILE = "file";
    @NotNull
    private static final String STACK_FRAME_KEY_LINE_NUMBER = "lineNumber";
    @NotNull
    private static final String STACK_FRAME_KEY_METHOD_NAME = "methodName";
    private Callback reject;
    private Callback resolve;

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u000b\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0012"}, d2 = {"Lcom/facebook/react/bridge/PromiseImpl$Companion;", "", "<init>", "()V", "ERROR_STACK_FRAME_LIMIT", "", "ERROR_DEFAULT_CODE", "", "ERROR_DEFAULT_MESSAGE", "ERROR_MAP_KEY_CODE", "ERROR_MAP_KEY_MESSAGE", "ERROR_MAP_KEY_NAME", "ERROR_MAP_KEY_USER_INFO", "ERROR_MAP_KEY_NATIVE_STACK", "STACK_FRAME_KEY_CLASS", "STACK_FRAME_KEY_FILE", "STACK_FRAME_KEY_LINE_NUMBER", "STACK_FRAME_KEY_METHOD_NAME", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @fb.a
    public PromiseImpl(Callback callback, Callback callback2) {
        this.resolve = callback;
        this.reject = callback2;
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(@NotNull String code, String str) {
        Intrinsics.checkNotNullParameter(code, "code");
        reject(code, str, null, null);
    }

    @Override // com.facebook.react.bridge.Promise
    public void resolve(Object obj) {
        Callback callback = this.resolve;
        if (callback != null) {
            callback.invoke(obj);
            this.resolve = null;
            this.reject = null;
        }
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(@NotNull String code, Throwable th2) {
        Intrinsics.checkNotNullParameter(code, "code");
        reject(code, null, th2, null);
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(@NotNull String code, String str, Throwable th2) {
        Intrinsics.checkNotNullParameter(code, "code");
        reject(code, str, th2, null);
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(@NotNull Throwable throwable) {
        Intrinsics.checkNotNullParameter(throwable, "throwable");
        reject(null, null, throwable, null);
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(@NotNull Throwable throwable, @NotNull WritableMap userInfo) {
        Intrinsics.checkNotNullParameter(throwable, "throwable");
        Intrinsics.checkNotNullParameter(userInfo, "userInfo");
        reject(null, null, throwable, userInfo);
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(@NotNull String code, @NotNull WritableMap userInfo) {
        Intrinsics.checkNotNullParameter(code, "code");
        Intrinsics.checkNotNullParameter(userInfo, "userInfo");
        reject(code, null, null, userInfo);
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(@NotNull String code, Throwable th2, @NotNull WritableMap userInfo) {
        Intrinsics.checkNotNullParameter(code, "code");
        Intrinsics.checkNotNullParameter(userInfo, "userInfo");
        reject(code, null, th2, userInfo);
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(@NotNull String code, String str, @NotNull WritableMap userInfo) {
        Intrinsics.checkNotNullParameter(code, "code");
        Intrinsics.checkNotNullParameter(userInfo, "userInfo");
        reject(code, str, null, userInfo);
    }

    @Override // com.facebook.react.bridge.Promise
    public void reject(String str, String str2, Throwable th2, WritableMap writableMap) {
        if (this.reject == null) {
            this.resolve = null;
            return;
        }
        WritableNativeMap writableNativeMap = new WritableNativeMap();
        if (str == null) {
            writableNativeMap.putString(ERROR_MAP_KEY_CODE, ERROR_DEFAULT_CODE);
        } else {
            writableNativeMap.putString(ERROR_MAP_KEY_CODE, str);
        }
        if (str2 != null) {
            writableNativeMap.putString("message", str2);
        } else if (th2 == null) {
            writableNativeMap.putString("message", ERROR_DEFAULT_MESSAGE);
        } else {
            String message = th2.getMessage();
            if (message == null || message.length() == 0) {
                message = th2.getClass().getCanonicalName();
            }
            writableNativeMap.putString("message", message);
        }
        if (writableMap != null) {
            writableNativeMap.putMap(ERROR_MAP_KEY_USER_INFO, writableMap);
        } else {
            writableNativeMap.putNull(ERROR_MAP_KEY_USER_INFO);
        }
        if (th2 == null) {
            writableNativeMap.putArray(ERROR_MAP_KEY_NATIVE_STACK, new WritableNativeArray());
        } else {
            writableNativeMap.putString("name", th2.getClass().getCanonicalName());
            StackTraceElement[] stackTrace = th2.getStackTrace();
            WritableNativeArray writableNativeArray = new WritableNativeArray();
            for (int i10 = 0; i10 < stackTrace.length && i10 < 50; i10++) {
                StackTraceElement stackTraceElement = stackTrace[i10];
                WritableNativeMap writableNativeMap2 = new WritableNativeMap();
                writableNativeMap2.putString(STACK_FRAME_KEY_CLASS, stackTraceElement.getClassName());
                writableNativeMap2.putString("file", stackTraceElement.getFileName());
                writableNativeMap2.putInt("lineNumber", stackTraceElement.getLineNumber());
                writableNativeMap2.putString("methodName", stackTraceElement.getMethodName());
                writableNativeArray.pushMap(writableNativeMap2);
            }
            writableNativeMap.putArray(ERROR_MAP_KEY_NATIVE_STACK, writableNativeArray);
        }
        Callback callback = this.reject;
        if (callback != null) {
            callback.invoke(writableNativeMap);
        }
        this.resolve = null;
        this.reject = null;
    }

    @Override // com.facebook.react.bridge.Promise
    @lr.c
    public void reject(@NotNull String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        reject(null, message, null, null);
    }
}
