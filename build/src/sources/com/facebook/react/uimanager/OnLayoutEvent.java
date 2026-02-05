package com.facebook.react.uimanager;

import androidx.core.util.Pools$SynchronizedPool;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMapBuilder;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.annotations.VisibleForTesting;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogLevel;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import com.facebook.react.uimanager.events.Event;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0012\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u0000  2\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0001 B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u0017\u001a\u00020\u0018H\u0016J8\u0010\u0019\u001a\u00020\u00182\u0006\u0010\u001a\u001a\u00020\u00052\u0006\u0010\u001b\u001a\u00020\u00052\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u000b\u001a\u00020\u00052\u0006\u0010\u000f\u001a\u00020\u00052\u0006\u0010\u0013\u001a\u00020\u0005H\u0004J\b\u0010\u001c\u001a\u00020\u001dH\u0016J\b\u0010\u001e\u001a\u00020\u001fH\u0014R$\u0010\u0004\u001a\u00020\u00058\u0000@\u0000X\u0081\u000e¢\u0006\u0014\n\u0000\u0012\u0004\b\u0006\u0010\u0003\u001a\u0004\b\u0007\u0010\b\"\u0004\b\t\u0010\nR$\u0010\u000b\u001a\u00020\u00058\u0000@\u0000X\u0081\u000e¢\u0006\u0014\n\u0000\u0012\u0004\b\f\u0010\u0003\u001a\u0004\b\r\u0010\b\"\u0004\b\u000e\u0010\nR$\u0010\u000f\u001a\u00020\u00058\u0000@\u0000X\u0081\u000e¢\u0006\u0014\n\u0000\u0012\u0004\b\u0010\u0010\u0003\u001a\u0004\b\u0011\u0010\b\"\u0004\b\u0012\u0010\nR$\u0010\u0013\u001a\u00020\u00058\u0000@\u0000X\u0081\u000e¢\u0006\u0014\n\u0000\u0012\u0004\b\u0014\u0010\u0003\u001a\u0004\b\u0015\u0010\b\"\u0004\b\u0016\u0010\n¨\u0006!"}, d2 = {"Lcom/facebook/react/uimanager/OnLayoutEvent;", "Lcom/facebook/react/uimanager/events/Event;", "<init>", "()V", "x", "", "getX$ReactAndroid_release$annotations", "getX$ReactAndroid_release", "()I", "setX$ReactAndroid_release", "(I)V", "y", "getY$ReactAndroid_release$annotations", "getY$ReactAndroid_release", "setY$ReactAndroid_release", "width", "getWidth$ReactAndroid_release$annotations", "getWidth$ReactAndroid_release", "setWidth$ReactAndroid_release", "height", "getHeight$ReactAndroid_release$annotations", "getHeight$ReactAndroid_release", "setHeight$ReactAndroid_release", "onDispose", "", "init", "surfaceId", "viewTag", "getEventName", "", "getEventData", "Lcom/facebook/react/bridge/WritableMap;", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nOnLayoutEvent.kt\nKotlin\n*S Kotlin\n*F\n+ 1 OnLayoutEvent.kt\ncom/facebook/react/uimanager/OnLayoutEvent\n+ 2 ReadableMapBuilder.kt\ncom/facebook/react/bridge/ReadableMapBuilderKt\n*L\n1#1,94:1\n30#2,3:95\n*S KotlinDebug\n*F\n+ 1 OnLayoutEvent.kt\ncom/facebook/react/uimanager/OnLayoutEvent\n*L\n44#1:95,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class OnLayoutEvent extends Event<OnLayoutEvent> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Pools$SynchronizedPool EVENTS_POOL;
    private int height;
    private int width;

    /* renamed from: x  reason: collision with root package name */
    private int f11331x;

    /* renamed from: y  reason: collision with root package name */
    private int f11332y;

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0006\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J0\u0010\u0007\u001a\u00020\u00062\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\t2\u0006\u0010\u000b\u001a\u00020\t2\u0006\u0010\f\u001a\u00020\t2\u0006\u0010\r\u001a\u00020\tH\u0007J8\u0010\u0007\u001a\u00020\u00062\u0006\u0010\u000e\u001a\u00020\t2\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\t2\u0006\u0010\u000b\u001a\u00020\t2\u0006\u0010\f\u001a\u00020\t2\u0006\u0010\r\u001a\u00020\tH\u0007R\u0014\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u000f"}, d2 = {"Lcom/facebook/react/uimanager/OnLayoutEvent$Companion;", "", "<init>", "()V", "EVENTS_POOL", "Landroidx/core/util/Pools$SynchronizedPool;", "Lcom/facebook/react/uimanager/OnLayoutEvent;", "obtain", "viewTag", "", "x", "y", "width", "height", "surfaceId", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @or.c
        @NotNull
        public final OnLayoutEvent obtain(int i10, int i11, int i12, int i13, int i14) {
            return obtain(-1, i10, i11, i12, i13, i14);
        }

        private Companion() {
        }

        @NotNull
        public final OnLayoutEvent obtain(int i10, int i11, int i12, int i13, int i14, int i15) {
            OnLayoutEvent onLayoutEvent = (OnLayoutEvent) OnLayoutEvent.EVENTS_POOL.acquire();
            if (onLayoutEvent == null) {
                onLayoutEvent = new OnLayoutEvent(null);
            }
            OnLayoutEvent onLayoutEvent2 = onLayoutEvent;
            onLayoutEvent2.init(i10, i11, i12, i13, i14, i15);
            return onLayoutEvent2;
        }
    }

    static {
        LegacyArchitectureLogger.assertLegacyArchitecture("OnLayoutEvent", LegacyArchitectureLogLevel.ERROR);
        EVENTS_POOL = new Pools$SynchronizedPool(20);
    }

    public /* synthetic */ OnLayoutEvent(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    @VisibleForTesting
    public static /* synthetic */ void getHeight$ReactAndroid_release$annotations() {
    }

    @VisibleForTesting
    public static /* synthetic */ void getWidth$ReactAndroid_release$annotations() {
    }

    @VisibleForTesting
    public static /* synthetic */ void getX$ReactAndroid_release$annotations() {
    }

    @VisibleForTesting
    public static /* synthetic */ void getY$ReactAndroid_release$annotations() {
    }

    @or.c
    @NotNull
    public static final OnLayoutEvent obtain(int i10, int i11, int i12, int i13, int i14) {
        return Companion.obtain(i10, i11, i12, i13, i14);
    }

    @Override // com.facebook.react.uimanager.events.Event
    @NotNull
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
        readableMapBuilder.put("x", PixelUtil.toDIPFromPixel(this.f11331x));
        readableMapBuilder.put("y", PixelUtil.toDIPFromPixel(this.f11332y));
        readableMapBuilder.put("width", PixelUtil.toDIPFromPixel(this.width));
        readableMapBuilder.put("height", PixelUtil.toDIPFromPixel(this.height));
        WritableMap createMap2 = Arguments.createMap();
        createMap2.putMap("layout", createMap);
        createMap2.putInt("target", getViewTag());
        Intrinsics.checkNotNullExpressionValue(createMap2, "apply(...)");
        return createMap2;
    }

    @Override // com.facebook.react.uimanager.events.Event
    @NotNull
    public String getEventName() {
        return "topLayout";
    }

    public final int getHeight$ReactAndroid_release() {
        return this.height;
    }

    public final int getWidth$ReactAndroid_release() {
        return this.width;
    }

    public final int getX$ReactAndroid_release() {
        return this.f11331x;
    }

    public final int getY$ReactAndroid_release() {
        return this.f11332y;
    }

    protected final void init(int i10, int i11, int i12, int i13, int i14, int i15) {
        super.init(i10, i11);
        this.f11331x = i12;
        this.f11332y = i13;
        this.width = i14;
        this.height = i15;
    }

    @Override // com.facebook.react.uimanager.events.Event
    public void onDispose() {
        EVENTS_POOL.release(this);
    }

    public final void setHeight$ReactAndroid_release(int i10) {
        this.height = i10;
    }

    public final void setWidth$ReactAndroid_release(int i10) {
        this.width = i10;
    }

    public final void setX$ReactAndroid_release(int i10) {
        this.f11331x = i10;
    }

    public final void setY$ReactAndroid_release(int i10) {
        this.f11332y = i10;
    }

    private OnLayoutEvent() {
    }

    @NotNull
    public static final OnLayoutEvent obtain(int i10, int i11, int i12, int i13, int i14, int i15) {
        return Companion.obtain(i10, i11, i12, i13, i14, i15);
    }
}
