package com.facebook.react.views.scroll;

import android.os.SystemClock;
import androidx.core.util.Pools$SynchronizedPool;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactSoftExceptionLogger;
import com.facebook.react.bridge.ReadableMapBuilder;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.views.scroll.ScrollEventType;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u0000 \u001d2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\u001dB\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u0012\u001a\u00020\u0013H\u0016Jb\u0010\u0014\u001a\u00020\u00132\u0006\u0010\u0015\u001a\u00020\n2\u0006\u0010\u0016\u001a\u00020\n2\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0007\u001a\u00020\u00052\u0006\u0010\b\u001a\u00020\u00052\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\n2\u0006\u0010\f\u001a\u00020\n2\u0006\u0010\r\u001a\u00020\nH\u0002J\b\u0010\u0017\u001a\u00020\u0018H\u0016J\b\u0010\u0019\u001a\u00020\u001aH\u0016J\b\u0010\u001b\u001a\u00020\u001cH\u0014R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\nX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\nX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\nX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\nX\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u000e\u001a\u0004\u0018\u00010\u000fX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u0011X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u001e"}, d2 = {"Lcom/facebook/react/views/scroll/ScrollEvent;", "Lcom/facebook/react/uimanager/events/Event;", "<init>", "()V", "scrollX", "", "scrollY", "xVelocity", "yVelocity", "contentWidth", "", "contentHeight", "scrollViewWidth", "scrollViewHeight", "scrollEventType", "Lcom/facebook/react/views/scroll/ScrollEventType;", "timestamp", "", "onDispose", "", "init", "surfaceId", "viewTag", "getEventName", "", "canCoalesce", "", "getEventData", "Lcom/facebook/react/bridge/WritableMap;", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nScrollEvent.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ScrollEvent.kt\ncom/facebook/react/views/scroll/ScrollEvent\n+ 2 ReadableMapBuilder.kt\ncom/facebook/react/bridge/ReadableMapBuilderKt\n*L\n1#1,182:1\n30#2,3:183\n30#2,3:186\n30#2,3:189\n30#2,3:192\n30#2,3:195\n*S KotlinDebug\n*F\n+ 1 ScrollEvent.kt\ncom/facebook/react/views/scroll/ScrollEvent\n*L\n78#1:183,3\n85#1:186,3\n90#1:189,3\n95#1:192,3\n100#1:195,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ScrollEvent extends Event<ScrollEvent> {
    private int contentHeight;
    private int contentWidth;
    private ScrollEventType scrollEventType;
    private int scrollViewHeight;
    private int scrollViewWidth;
    private float scrollX;
    private float scrollY;
    private long timestamp;
    private float xVelocity;
    private float yVelocity;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final String TAG = ScrollEvent.class.getSimpleName();
    @NotNull
    private static final Pools$SynchronizedPool EVENTS_POOL = new Pools$SynchronizedPool(3);

    @Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0007\n\u0002\b\b\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003Jb\u0010\n\u001a\u00020\t2\u0006\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\f2\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u0013\u001a\u00020\u00112\u0006\u0010\u0014\u001a\u00020\u00112\u0006\u0010\u0015\u001a\u00020\f2\u0006\u0010\u0016\u001a\u00020\f2\u0006\u0010\u0017\u001a\u00020\f2\u0006\u0010\u0018\u001a\u00020\fH\u0007JZ\u0010\n\u001a\u00020\t2\u0006\u0010\r\u001a\u00020\f2\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u0013\u001a\u00020\u00112\u0006\u0010\u0014\u001a\u00020\u00112\u0006\u0010\u0015\u001a\u00020\f2\u0006\u0010\u0016\u001a\u00020\f2\u0006\u0010\u0017\u001a\u00020\f2\u0006\u0010\u0018\u001a\u00020\fH\u0007R\u0016\u0010\u0004\u001a\n \u0006*\u0004\u0018\u00010\u00050\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\bX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0019"}, d2 = {"Lcom/facebook/react/views/scroll/ScrollEvent$Companion;", "", "<init>", "()V", "TAG", "", "kotlin.jvm.PlatformType", "EVENTS_POOL", "Landroidx/core/util/Pools$SynchronizedPool;", "Lcom/facebook/react/views/scroll/ScrollEvent;", "obtain", "surfaceId", "", "viewTag", "scrollEventType", "Lcom/facebook/react/views/scroll/ScrollEventType;", "scrollX", "", "scrollY", "xVelocity", "yVelocity", "contentWidth", "contentHeight", "scrollViewWidth", "scrollViewHeight", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final ScrollEvent obtain(int i10, int i11, ScrollEventType scrollEventType, float f10, float f11, float f12, float f13, int i12, int i13, int i14, int i15) {
            ScrollEvent scrollEvent = (ScrollEvent) ScrollEvent.EVENTS_POOL.acquire();
            if (scrollEvent == null) {
                scrollEvent = new ScrollEvent(null);
            }
            ScrollEvent scrollEvent2 = scrollEvent;
            scrollEvent2.init(i10, i11, scrollEventType, f10, f11, f12, f13, i12, i13, i14, i15);
            return scrollEvent2;
        }

        private Companion() {
        }

        @NotNull
        @qr.c
        public final ScrollEvent obtain(int i10, ScrollEventType scrollEventType, float f10, float f11, float f12, float f13, int i11, int i12, int i13, int i14) {
            return obtain(-1, i10, scrollEventType, f10, f11, f12, f13, i11, i12, i13, i14);
        }
    }

    public /* synthetic */ ScrollEvent(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void init(int i10, int i11, ScrollEventType scrollEventType, float f10, float f11, float f12, float f13, int i12, int i13, int i14, int i15) {
        long uptimeMillis = SystemClock.uptimeMillis();
        super.init(i10, i11, uptimeMillis);
        this.scrollEventType = scrollEventType;
        this.scrollX = f10;
        this.scrollY = f11;
        this.xVelocity = f12;
        this.yVelocity = f13;
        this.contentWidth = i12;
        this.contentHeight = i13;
        this.scrollViewWidth = i14;
        this.scrollViewHeight = i15;
        this.timestamp = uptimeMillis;
    }

    @NotNull
    public static final ScrollEvent obtain(int i10, int i11, ScrollEventType scrollEventType, float f10, float f11, float f12, float f13, int i12, int i13, int i14, int i15) {
        return Companion.obtain(i10, i11, scrollEventType, f10, f11, f12, f13, i12, i13, i14, i15);
    }

    @Override // com.facebook.react.uimanager.events.Event
    public boolean canCoalesce() {
        if (this.scrollEventType == ScrollEventType.SCROLL) {
            return true;
        }
        return false;
    }

    @Override // com.facebook.react.uimanager.events.Event
    @NotNull
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
        readableMapBuilder.put(ViewProps.TOP, 0.0d);
        readableMapBuilder.put(ViewProps.BOTTOM, 0.0d);
        readableMapBuilder.put(ViewProps.LEFT, 0.0d);
        readableMapBuilder.put(ViewProps.RIGHT, 0.0d);
        WritableMap createMap2 = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap2, "createMap(...)");
        ReadableMapBuilder readableMapBuilder2 = new ReadableMapBuilder(createMap2);
        readableMapBuilder2.put("x", PixelUtil.toDIPFromPixel(this.scrollX));
        readableMapBuilder2.put("y", PixelUtil.toDIPFromPixel(this.scrollY));
        WritableMap createMap3 = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap3, "createMap(...)");
        ReadableMapBuilder readableMapBuilder3 = new ReadableMapBuilder(createMap3);
        readableMapBuilder3.put("width", PixelUtil.toDIPFromPixel(this.contentWidth));
        readableMapBuilder3.put("height", PixelUtil.toDIPFromPixel(this.contentHeight));
        WritableMap createMap4 = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap4, "createMap(...)");
        ReadableMapBuilder readableMapBuilder4 = new ReadableMapBuilder(createMap4);
        readableMapBuilder4.put("width", PixelUtil.toDIPFromPixel(this.scrollViewWidth));
        readableMapBuilder4.put("height", PixelUtil.toDIPFromPixel(this.scrollViewHeight));
        WritableMap createMap5 = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap5, "createMap(...)");
        ReadableMapBuilder readableMapBuilder5 = new ReadableMapBuilder(createMap5);
        readableMapBuilder5.put("x", PixelUtil.toDIPFromPixel(this.xVelocity));
        readableMapBuilder5.put("y", PixelUtil.toDIPFromPixel(this.yVelocity));
        WritableMap createMap6 = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap6, "createMap(...)");
        createMap6.putMap("contentInset", createMap);
        createMap6.putMap("contentOffset", createMap2);
        createMap6.putMap("contentSize", createMap3);
        createMap6.putMap("layoutMeasurement", createMap4);
        createMap6.putMap("velocity", createMap5);
        createMap6.putInt("target", getViewTag());
        createMap6.putDouble("timestamp", this.timestamp);
        createMap6.putBoolean("responderIgnoreScroll", true);
        return createMap6;
    }

    @Override // com.facebook.react.uimanager.events.Event
    @NotNull
    public String getEventName() {
        ScrollEventType.Companion companion = ScrollEventType.Companion;
        Object c10 = db.a.c(this.scrollEventType);
        Intrinsics.checkNotNullExpressionValue(c10, "assertNotNull(...)");
        return companion.getJSEventName((ScrollEventType) c10);
    }

    @Override // com.facebook.react.uimanager.events.Event
    public void onDispose() {
        try {
            EVENTS_POOL.release(this);
        } catch (IllegalStateException e10) {
            String TAG2 = TAG;
            Intrinsics.checkNotNullExpressionValue(TAG2, "TAG");
            ReactSoftExceptionLogger.logSoftException(TAG2, e10);
        }
    }

    private ScrollEvent() {
    }

    @NotNull
    @qr.c
    public static final ScrollEvent obtain(int i10, ScrollEventType scrollEventType, float f10, float f11, float f12, float f13, int i11, int i12, int i13, int i14) {
        return Companion.obtain(i10, scrollEventType, f10, f11, f12, f13, i11, i12, i13, i14);
    }
}
