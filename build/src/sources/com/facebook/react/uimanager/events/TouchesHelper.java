package com.facebook.react.uimanager.events;

import android.view.MotionEvent;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u000b\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\bÀ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001d\u0010\u0010\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00120\u00112\u0006\u0010\u0013\u001a\u00020\u0014H\u0002¢\u0006\u0002\u0010\u0015J\u0018\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u0014H\u0007J\u0018\u0010\u001b\u001a\u00020\u00172\u0006\u0010\u001c\u001a\u00020\u001d2\u0006\u0010\u0013\u001a\u00020\u0014H\u0007J%\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020!2\u000e\u0010\"\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00120\u0011H\u0002¢\u0006\u0002\u0010#R\u0016\u0010\u0004\u001a\u00020\u00058\u0006X\u0087D¢\u0006\b\n\u0000\u0012\u0004\b\u0006\u0010\u0003R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006$"}, d2 = {"Lcom/facebook/react/uimanager/events/TouchesHelper;", "", "<init>", "()V", "TARGET_KEY", "", "getTARGET_KEY$annotations", "TARGET_SURFACE_KEY", "CHANGED_TOUCHES_KEY", "TOUCHES_KEY", "PAGE_X_KEY", "PAGE_Y_KEY", "TIMESTAMP_KEY", "POINTER_IDENTIFIER_KEY", "LOCATION_X_KEY", "LOCATION_Y_KEY", "createPointersArray", "", "Lcom/facebook/react/bridge/WritableMap;", "event", "Lcom/facebook/react/uimanager/events/TouchEvent;", "(Lcom/facebook/react/uimanager/events/TouchEvent;)[Lcom/facebook/react/bridge/WritableMap;", "sendTouchesLegacy", "", "rctEventEmitter", "Lcom/facebook/react/uimanager/events/RCTEventEmitter;", "touchEvent", "sendTouchEvent", "eventEmitter", "Lcom/facebook/react/uimanager/events/RCTModernEventEmitter;", "getWritableArray", "Lcom/facebook/react/bridge/WritableArray;", "copyObjects", "", "objects", "(Z[Lcom/facebook/react/bridge/WritableMap;)Lcom/facebook/react/bridge/WritableArray;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class TouchesHelper {
    @NotNull
    private static final String CHANGED_TOUCHES_KEY = "changedTouches";
    @NotNull
    private static final String LOCATION_X_KEY = "locationX";
    @NotNull
    private static final String LOCATION_Y_KEY = "locationY";
    @NotNull
    private static final String PAGE_X_KEY = "pageX";
    @NotNull
    private static final String PAGE_Y_KEY = "pageY";
    @NotNull
    private static final String POINTER_IDENTIFIER_KEY = "identifier";
    @NotNull
    private static final String TARGET_SURFACE_KEY = "targetSurface";
    @NotNull
    private static final String TIMESTAMP_KEY = "timestamp";
    @NotNull
    private static final String TOUCHES_KEY = "touches";
    @NotNull
    public static final TouchesHelper INSTANCE = new TouchesHelper();
    @NotNull
    public static final String TARGET_KEY = "target";

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[TouchEventType.values().length];
            try {
                iArr[TouchEventType.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[TouchEventType.END.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[TouchEventType.MOVE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[TouchEventType.CANCEL.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    private TouchesHelper() {
    }

    private final WritableMap[] createPointersArray(TouchEvent touchEvent) {
        MotionEvent motionEvent = touchEvent.getMotionEvent();
        WritableMap[] writableMapArr = new WritableMap[motionEvent.getPointerCount()];
        float x10 = motionEvent.getX() - touchEvent.getViewX();
        float y10 = motionEvent.getY() - touchEvent.getViewY();
        int pointerCount = motionEvent.getPointerCount();
        for (int i10 = 0; i10 < pointerCount; i10++) {
            WritableMap createMap = Arguments.createMap();
            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
            PixelUtil pixelUtil = PixelUtil.INSTANCE;
            createMap.putDouble(PAGE_X_KEY, pixelUtil.pxToDp(motionEvent.getX(i10)));
            createMap.putDouble(PAGE_Y_KEY, pixelUtil.pxToDp(motionEvent.getY(i10)));
            createMap.putDouble(LOCATION_X_KEY, pixelUtil.pxToDp(motionEvent.getX(i10) - x10));
            createMap.putDouble(LOCATION_Y_KEY, pixelUtil.pxToDp(motionEvent.getY(i10) - y10));
            createMap.putInt(TARGET_SURFACE_KEY, touchEvent.getSurfaceId());
            createMap.putInt(TARGET_KEY, touchEvent.getViewTag());
            createMap.putDouble(TIMESTAMP_KEY, touchEvent.getTimestampMs());
            createMap.putDouble(POINTER_IDENTIFIER_KEY, motionEvent.getPointerId(i10));
            writableMapArr[i10] = createMap;
        }
        return writableMapArr;
    }

    @or.c
    public static /* synthetic */ void getTARGET_KEY$annotations() {
    }

    private final WritableArray getWritableArray(boolean z10, WritableMap[] writableMapArr) {
        WritableArray createArray = Arguments.createArray();
        Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
        for (WritableMap writableMap : writableMapArr) {
            if (writableMap != null) {
                if (z10) {
                    writableMap = writableMap.copy();
                }
                createArray.pushMap(writableMap);
            }
        }
        return createArray;
    }

    /* JADX WARN: Removed duplicated region for block: B:34:0x00a1 A[Catch: all -> 0x0056, TryCatch #0 {all -> 0x0056, blocks: (B:3:0x002d, B:11:0x0051, B:31:0x0097, B:32:0x009b, B:34:0x00a1, B:36:0x00a9, B:38:0x00c4, B:14:0x0059, B:15:0x005e, B:16:0x005f, B:17:0x0062, B:19:0x0065, B:21:0x0069, B:23:0x006f, B:25:0x0076, B:26:0x0083, B:28:0x008b, B:30:0x0091), top: B:44:0x002d }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final void sendTouchEvent(@org.jetbrains.annotations.NotNull com.facebook.react.uimanager.events.RCTModernEventEmitter r16, @org.jetbrains.annotations.NotNull com.facebook.react.uimanager.events.TouchEvent r17) {
        /*
            Method dump skipped, instructions count: 231
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.uimanager.events.TouchesHelper.sendTouchEvent(com.facebook.react.uimanager.events.RCTModernEventEmitter, com.facebook.react.uimanager.events.TouchEvent):void");
    }

    public static final void sendTouchesLegacy(@NotNull RCTEventEmitter rctEventEmitter, @NotNull TouchEvent touchEvent) {
        Intrinsics.checkNotNullParameter(rctEventEmitter, "rctEventEmitter");
        Intrinsics.checkNotNullParameter(touchEvent, "touchEvent");
        TouchEventType touchEventType = touchEvent.getTouchEventType();
        TouchesHelper touchesHelper = INSTANCE;
        WritableArray writableArray = touchesHelper.getWritableArray(false, touchesHelper.createPointersArray(touchEvent));
        MotionEvent motionEvent = touchEvent.getMotionEvent();
        WritableArray createArray = Arguments.createArray();
        Intrinsics.checkNotNullExpressionValue(createArray, "createArray(...)");
        if (touchEventType != TouchEventType.MOVE && touchEventType != TouchEventType.CANCEL) {
            if (touchEventType != TouchEventType.START && touchEventType != TouchEventType.END) {
                throw new RuntimeException("Unknown touch type: " + touchEventType);
            }
            createArray.pushInt(motionEvent.getActionIndex());
        } else {
            int pointerCount = motionEvent.getPointerCount();
            for (int i10 = 0; i10 < pointerCount; i10++) {
                createArray.pushInt(i10);
            }
        }
        rctEventEmitter.receiveTouches(TouchEventType.Companion.getJSEventName(touchEventType), writableArray, createArray);
    }
}
