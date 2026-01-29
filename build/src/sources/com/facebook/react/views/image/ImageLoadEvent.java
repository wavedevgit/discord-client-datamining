package com.facebook.react.views.image;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import com.horcrux.svg.events.SvgLoadEvent;
import ir.c;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\t\n\u0002\u0010\n\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u0000 \u00162\b\u0012\u0004\u0012\u00020\u00000\u0001:\u0002\u0015\u0016Ba\b\u0002\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\b\b\u0002\u0010\t\u001a\u00020\u0003\u0012\b\b\u0002\u0010\n\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u000b\u001a\u00020\u0003\u0012\b\b\u0002\u0010\f\u001a\u00020\u0003¢\u0006\u0004\b\r\u0010\u000eJ\b\u0010\u000f\u001a\u00020\u0007H\u0016J\b\u0010\u0010\u001a\u00020\u0011H\u0016J\b\u0010\u0012\u001a\u00020\u0013H\u0014J\b\u0010\u0014\u001a\u00020\u0013H\u0002R\u000e\u0010\u0005\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0006\u001a\u0004\u0018\u00010\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\b\u001a\u0004\u0018\u00010\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0017"}, d2 = {"Lcom/facebook/react/views/image/ImageLoadEvent;", "Lcom/facebook/react/uimanager/events/Event;", "surfaceId", "", "viewId", "eventType", "errorMessage", "", "sourceUri", "width", "height", "loaded", "total", "<init>", "(IIILjava/lang/String;Ljava/lang/String;IIII)V", "getEventName", "getCoalescingKey", "", "getEventData", "Lcom/facebook/react/bridge/WritableMap;", "createEventDataSource", "ImageEventType", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ImageLoadEvent extends Event<ImageLoadEvent> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    public static final int ON_ERROR = 1;
    public static final int ON_LOAD = 2;
    public static final int ON_LOAD_END = 3;
    public static final int ON_LOAD_START = 4;
    public static final int ON_PROGRESS = 5;
    private final String errorMessage;
    private final int eventType;
    private final int height;
    private final int loaded;
    private final String sourceUri;
    private final int total;
    private final int width;

    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\u0003\n\u0002\b\u0005\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u0005H\u0007J*\u0010\r\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u00052\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\u0010\u001a\u00020\u00052\u0006\u0010\u0011\u001a\u00020\u0005H\u0007J*\u0010\u0012\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u00052\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\u0013\u001a\u00020\u00052\u0006\u0010\u0014\u001a\u00020\u0005H\u0007J\u0018\u0010\u0015\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u00052\u0006\u0010\u0016\u001a\u00020\u0017H\u0007J\u0010\u0010\u0018\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u0005H\u0007J\u0018\u0010\n\u001a\u00020\u000b2\u0006\u0010\u0019\u001a\u00020\u00052\u0006\u0010\f\u001a\u00020\u0005H\u0007J2\u0010\r\u001a\u00020\u000b2\u0006\u0010\u0019\u001a\u00020\u00052\u0006\u0010\f\u001a\u00020\u00052\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\u0010\u001a\u00020\u00052\u0006\u0010\u0011\u001a\u00020\u0005H\u0007J2\u0010\u0012\u001a\u00020\u000b2\u0006\u0010\u0019\u001a\u00020\u00052\u0006\u0010\f\u001a\u00020\u00052\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f2\u0006\u0010\u0013\u001a\u00020\u00052\u0006\u0010\u0014\u001a\u00020\u0005H\u0007J \u0010\u0015\u001a\u00020\u000b2\u0006\u0010\u0019\u001a\u00020\u00052\u0006\u0010\f\u001a\u00020\u00052\u0006\u0010\u0016\u001a\u00020\u0017H\u0007J\u0018\u0010\u0018\u001a\u00020\u000b2\u0006\u0010\u0019\u001a\u00020\u00052\u0006\u0010\f\u001a\u00020\u0005H\u0007J\u0010\u0010\u001a\u001a\u00020\u000f2\u0006\u0010\u001b\u001a\u00020\u0005H\u0007R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u001c"}, d2 = {"Lcom/facebook/react/views/image/ImageLoadEvent$Companion;", "", "<init>", "()V", "ON_ERROR", "", "ON_LOAD", "ON_LOAD_END", "ON_LOAD_START", "ON_PROGRESS", "createLoadStartEvent", "Lcom/facebook/react/views/image/ImageLoadEvent;", "viewId", "createProgressEvent", "imageUri", "", "loaded", "total", "createLoadEvent", "width", "height", "createErrorEvent", "throwable", "", "createLoadEndEvent", "surfaceId", "eventNameForType", "eventType", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @c
        @NotNull
        public final ImageLoadEvent createErrorEvent(int i10, @NotNull Throwable throwable) {
            Intrinsics.checkNotNullParameter(throwable, "throwable");
            return createErrorEvent(-1, i10, throwable);
        }

        @c
        @NotNull
        public final ImageLoadEvent createLoadEndEvent(int i10) {
            return createLoadEndEvent(-1, i10);
        }

        @c
        @NotNull
        public final ImageLoadEvent createLoadEvent(int i10, String str, int i11, int i12) {
            return createLoadEvent(-1, i10, str, i11, i12);
        }

        @c
        @NotNull
        public final ImageLoadEvent createLoadStartEvent(int i10) {
            return createLoadStartEvent(-1, i10);
        }

        @c
        @NotNull
        public final ImageLoadEvent createProgressEvent(int i10, String str, int i11, int i12) {
            return createProgressEvent(-1, i10, str, i11, i12);
        }

        @NotNull
        public final String eventNameForType(int i10) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 == 5) {
                                return "topProgress";
                            }
                            throw new IllegalStateException(("Invalid image event: " + i10).toString());
                        }
                        return "topLoadStart";
                    }
                    return "topLoadEnd";
                }
                return SvgLoadEvent.EVENT_NAME;
            }
            return "topError";
        }

        private Companion() {
        }

        @NotNull
        public final ImageLoadEvent createErrorEvent(int i10, int i11, @NotNull Throwable throwable) {
            Intrinsics.checkNotNullParameter(throwable, "throwable");
            return new ImageLoadEvent(i10, i11, 1, throwable.getMessage(), null, 0, 0, 0, 0, null);
        }

        @NotNull
        public final ImageLoadEvent createLoadEndEvent(int i10, int i11) {
            return new ImageLoadEvent(i10, i11, 3, null, null, 0, 0, 0, 0, 504, null);
        }

        @NotNull
        public final ImageLoadEvent createLoadEvent(int i10, int i11, String str, int i12, int i13) {
            return new ImageLoadEvent(i10, i11, 2, null, str, i12, i13, 0, 0, null);
        }

        @NotNull
        public final ImageLoadEvent createLoadStartEvent(int i10, int i11) {
            return new ImageLoadEvent(i10, i11, 4, null, null, 0, 0, 0, 0, 504, null);
        }

        @NotNull
        public final ImageLoadEvent createProgressEvent(int i10, int i11, String str, int i12, int i13) {
            return new ImageLoadEvent(i10, i11, 5, null, str, 0, 0, i12, i13, null);
        }
    }

    @Retention(RetentionPolicy.SOURCE)
    @Metadata(d1 = {"\u0000\n\n\u0002\u0018\u0002\n\u0002\u0010\u001b\n\u0000\b\u0081\u0002\u0018\u00002\u00020\u0001B\u0000¨\u0006\u0002"}, d2 = {"Lcom/facebook/react/views/image/ImageLoadEvent$ImageEventType;", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public @interface ImageEventType {
    }

    public /* synthetic */ ImageLoadEvent(int i10, int i11, int i12, String str, String str2, int i13, int i14, int i15, int i16, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, i12, str, str2, i13, i14, i15, i16);
    }

    @NotNull
    public static final ImageLoadEvent createErrorEvent(int i10, int i11, @NotNull Throwable th2) {
        return Companion.createErrorEvent(i10, i11, th2);
    }

    private final WritableMap createEventDataSource() {
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        createMap.putString("uri", this.sourceUri);
        createMap.putDouble("width", this.width);
        createMap.putDouble("height", this.height);
        return createMap;
    }

    @c
    @NotNull
    public static final ImageLoadEvent createLoadEndEvent(int i10) {
        return Companion.createLoadEndEvent(i10);
    }

    @NotNull
    public static final ImageLoadEvent createLoadEvent(int i10, int i11, String str, int i12, int i13) {
        return Companion.createLoadEvent(i10, i11, str, i12, i13);
    }

    @c
    @NotNull
    public static final ImageLoadEvent createLoadStartEvent(int i10) {
        return Companion.createLoadStartEvent(i10);
    }

    @NotNull
    public static final ImageLoadEvent createProgressEvent(int i10, int i11, String str, int i12, int i13) {
        return Companion.createProgressEvent(i10, i11, str, i12, i13);
    }

    @NotNull
    public static final String eventNameForType(int i10) {
        return Companion.eventNameForType(i10);
    }

    @Override // com.facebook.react.uimanager.events.Event
    public short getCoalescingKey() {
        return (short) this.eventType;
    }

    @Override // com.facebook.react.uimanager.events.Event
    @NotNull
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        int i10 = this.eventType;
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 5) {
                    return createMap;
                }
                createMap.putInt("loaded", this.loaded);
                createMap.putInt("total", this.total);
                createMap.putDouble(ReactProgressBarViewManager.PROP_PROGRESS, this.loaded / this.total);
                return createMap;
            }
            createMap.putMap("source", createEventDataSource());
            return createMap;
        }
        createMap.putString("error", this.errorMessage);
        return createMap;
    }

    @Override // com.facebook.react.uimanager.events.Event
    @NotNull
    public String getEventName() {
        return Companion.eventNameForType(this.eventType);
    }

    /* synthetic */ ImageLoadEvent(int i10, int i11, int i12, String str, String str2, int i13, int i14, int i15, int i16, int i17, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, i12, (i17 & 8) != 0 ? null : str, (i17 & 16) != 0 ? null : str2, (i17 & 32) != 0 ? 0 : i13, (i17 & 64) != 0 ? 0 : i14, (i17 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? 0 : i15, (i17 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? 0 : i16);
    }

    @c
    @NotNull
    public static final ImageLoadEvent createErrorEvent(int i10, @NotNull Throwable th2) {
        return Companion.createErrorEvent(i10, th2);
    }

    @NotNull
    public static final ImageLoadEvent createLoadEndEvent(int i10, int i11) {
        return Companion.createLoadEndEvent(i10, i11);
    }

    @c
    @NotNull
    public static final ImageLoadEvent createLoadEvent(int i10, String str, int i11, int i12) {
        return Companion.createLoadEvent(i10, str, i11, i12);
    }

    @NotNull
    public static final ImageLoadEvent createLoadStartEvent(int i10, int i11) {
        return Companion.createLoadStartEvent(i10, i11);
    }

    @c
    @NotNull
    public static final ImageLoadEvent createProgressEvent(int i10, String str, int i11, int i12) {
        return Companion.createProgressEvent(i10, str, i11, i12);
    }

    private ImageLoadEvent(int i10, int i11, int i12, String str, String str2, int i13, int i14, int i15, int i16) {
        super(i10, i11);
        this.eventType = i12;
        this.errorMessage = str;
        this.sourceUri = str2;
        this.width = i13;
        this.height = i14;
        this.loaded = i15;
        this.total = i16;
    }
}
