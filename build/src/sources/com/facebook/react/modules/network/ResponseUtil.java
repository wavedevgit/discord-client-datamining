package com.facebook.react.modules.network;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArrayBuilder;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import java.net.SocketTimeoutException;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0003\n\u0002\b\u0006\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J*\u0010\u0004\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u000bH\u0007J4\u0010\r\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\b\u001a\u00020\t2\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u000bH\u0007J*\u0010\u0010\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u000bH\u0007J$\u0010\u0011\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\b\u001a\u00020\t2\b\u0010\u000e\u001a\u0004\u0018\u00010\u000fH\u0007J$\u0010\u0011\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\b\u001a\u00020\t2\b\u0010\u000e\u001a\u0004\u0018\u00010\u0012H\u0007J.\u0010\u0013\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\b\u001a\u00020\t2\b\u0010\u0014\u001a\u0004\u0018\u00010\u000f2\b\u0010\u0015\u001a\u0004\u0018\u00010\u0016H\u0007J\u001a\u0010\u0017\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\b\u001a\u00020\tH\u0007J6\u0010\u0018\u001a\u00020\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\u0019\u001a\u00020\t2\b\u0010\u001a\u001a\u0004\u0018\u00010\u00122\b\u0010\u001b\u001a\u0004\u0018\u00010\u000fH\u0007¨\u0006\u001c"}, d2 = {"Lcom/facebook/react/modules/network/ResponseUtil;", "", "<init>", "()V", "onDataSend", "", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "requestId", "", ReactProgressBarViewManager.PROP_PROGRESS, "", "total", "onIncrementalDataReceived", "data", "", "onDataReceivedProgress", "onDataReceived", "Lcom/facebook/react/bridge/WritableMap;", "onRequestError", "error", "e", "", "onRequestSuccess", "onResponseReceived", "statusCode", "headers", "url", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nResponseUtil.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ResponseUtil.kt\ncom/facebook/react/modules/network/ResponseUtil\n+ 2 ReadableArrayBuilder.kt\ncom/facebook/react/bridge/ReadableArrayBuilderKt\n*L\n1#1,134:1\n24#2,3:135\n24#2,3:138\n24#2,3:141\n24#2,3:144\n24#2,3:147\n24#2,3:150\n*S KotlinDebug\n*F\n+ 1 ResponseUtil.kt\ncom/facebook/react/modules/network/ResponseUtil\n*L\n27#1:135,3\n44#1:138,3\n61#1:141,3\n72#1:144,3\n97#1:147,3\n110#1:150,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ResponseUtil {
    @NotNull
    public static final ResponseUtil INSTANCE = new ResponseUtil();

    private ResponseUtil() {
    }

    public static final void onDataReceived(ReactApplicationContext reactApplicationContext, int i10, WritableMap writableMap) {
        if (reactApplicationContext != null) {
            WritableArray createArray = Arguments.createArray();
            createArray.pushInt(i10);
            createArray.pushMap(writableMap);
            Unit unit = Unit.f33298a;
            reactApplicationContext.emitDeviceEvent("didReceiveNetworkData", createArray);
        }
    }

    public static final void onDataReceivedProgress(ReactApplicationContext reactApplicationContext, int i10, long j10, long j11) {
        if (reactApplicationContext != null) {
            WritableArray createArray = Arguments.createArray();
            Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
            ReadableArrayBuilder readableArrayBuilder = new ReadableArrayBuilder(createArray);
            readableArrayBuilder.add(i10);
            readableArrayBuilder.add((int) j10);
            readableArrayBuilder.add((int) j11);
            Unit unit = Unit.f33298a;
            reactApplicationContext.emitDeviceEvent("didReceiveNetworkDataProgress", createArray);
        }
    }

    public static final void onDataSend(ReactApplicationContext reactApplicationContext, int i10, long j10, long j11) {
        if (reactApplicationContext != null) {
            WritableArray createArray = Arguments.createArray();
            Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
            ReadableArrayBuilder readableArrayBuilder = new ReadableArrayBuilder(createArray);
            readableArrayBuilder.add(i10);
            readableArrayBuilder.add((int) j10);
            readableArrayBuilder.add((int) j11);
            Unit unit = Unit.f33298a;
            reactApplicationContext.emitDeviceEvent("didSendNetworkData", createArray);
        }
    }

    public static final void onIncrementalDataReceived(ReactApplicationContext reactApplicationContext, int i10, String str, long j10, long j11) {
        if (reactApplicationContext != null) {
            WritableArray createArray = Arguments.createArray();
            Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
            ReadableArrayBuilder readableArrayBuilder = new ReadableArrayBuilder(createArray);
            readableArrayBuilder.add(i10);
            readableArrayBuilder.add(str);
            readableArrayBuilder.add((int) j10);
            readableArrayBuilder.add((int) j11);
            Unit unit = Unit.f33298a;
            reactApplicationContext.emitDeviceEvent("didReceiveNetworkIncrementalData", createArray);
        }
    }

    public static final void onRequestError(ReactApplicationContext reactApplicationContext, int i10, String str, Throwable th2) {
        Class<?> cls;
        if (reactApplicationContext != null) {
            WritableArray createArray = Arguments.createArray();
            Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
            ReadableArrayBuilder readableArrayBuilder = new ReadableArrayBuilder(createArray);
            readableArrayBuilder.add(i10);
            readableArrayBuilder.add(str);
            if (th2 != null) {
                cls = th2.getClass();
            } else {
                cls = null;
            }
            if (Intrinsics.areEqual(cls, SocketTimeoutException.class)) {
                readableArrayBuilder.add(true);
            }
            Unit unit = Unit.f33298a;
            reactApplicationContext.emitDeviceEvent("didCompleteNetworkResponse", createArray);
        }
    }

    public static final void onRequestSuccess(ReactApplicationContext reactApplicationContext, int i10) {
        if (reactApplicationContext != null) {
            WritableArray createArray = Arguments.createArray();
            Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
            ReadableArrayBuilder readableArrayBuilder = new ReadableArrayBuilder(createArray);
            readableArrayBuilder.add(i10);
            readableArrayBuilder.addNull();
            Unit unit = Unit.f33298a;
            reactApplicationContext.emitDeviceEvent("didCompleteNetworkResponse", createArray);
        }
    }

    public static final void onResponseReceived(ReactApplicationContext reactApplicationContext, int i10, int i11, WritableMap writableMap, String str) {
        if (reactApplicationContext != null) {
            WritableArray createArray = Arguments.createArray();
            createArray.pushInt(i10);
            createArray.pushInt(i11);
            createArray.pushMap(writableMap);
            createArray.pushString(str);
            Unit unit = Unit.f33298a;
            reactApplicationContext.emitDeviceEvent("didReceiveNetworkResponse", createArray);
        }
    }

    public static final void onDataReceived(ReactApplicationContext reactApplicationContext, int i10, String str) {
        if (reactApplicationContext != null) {
            WritableArray createArray = Arguments.createArray();
            Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
            ReadableArrayBuilder readableArrayBuilder = new ReadableArrayBuilder(createArray);
            readableArrayBuilder.add(i10);
            readableArrayBuilder.add(str);
            Unit unit = Unit.f33298a;
            reactApplicationContext.emitDeviceEvent("didReceiveNetworkData", createArray);
        }
    }
}
