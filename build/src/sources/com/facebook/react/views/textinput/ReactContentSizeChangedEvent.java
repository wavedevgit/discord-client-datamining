package com.facebook.react.views.textinput;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMapBuilder;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0007\n\u0002\b\u0007\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0000\u0018\u0000 \u00122\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0001\u0012B'\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\u0007¢\u0006\u0004\b\t\u0010\nB!\b\u0017\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0006\u0010\u000b\u001a\u00020\u0007\u0012\u0006\u0010\f\u001a\u00020\u0007¢\u0006\u0004\b\t\u0010\rJ\b\u0010\u000e\u001a\u00020\u000fH\u0016J\b\u0010\u0010\u001a\u00020\u0011H\u0014R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0007X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0013"}, d2 = {"Lcom/facebook/react/views/textinput/ReactContentSizeChangedEvent;", "Lcom/facebook/react/uimanager/events/Event;", "Lcom/facebook/react/views/textinput/ReactTextChangedEvent;", "surfaceId", "", "viewId", "contentWidth", "", "contentHeight", "<init>", "(IIFF)V", "contentSizeWidth", "contentSizeHeight", "(IFF)V", "getEventName", "", "getEventData", "Lcom/facebook/react/bridge/WritableMap;", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nReactContentSizeChangedEvent.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactContentSizeChangedEvent.kt\ncom/facebook/react/views/textinput/ReactContentSizeChangedEvent\n+ 2 ReadableMapBuilder.kt\ncom/facebook/react/bridge/ReadableMapBuilderKt\n*L\n1#1,51:1\n30#2,3:52\n*S KotlinDebug\n*F\n+ 1 ReactContentSizeChangedEvent.kt\ncom/facebook/react/views/textinput/ReactContentSizeChangedEvent\n*L\n36#1:52,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactContentSizeChangedEvent extends Event<ReactTextChangedEvent> {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String EVENT_NAME = "topContentSizeChange";
    private final float contentHeight;
    private final float contentWidth;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/facebook/react/views/textinput/ReactContentSizeChangedEvent$Companion;", "", "<init>", "()V", "EVENT_NAME", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public ReactContentSizeChangedEvent(int i10, int i11, float f10, float f11) {
        super(i10, i11);
        this.contentWidth = f10;
        this.contentHeight = f11;
    }

    @Override // com.facebook.react.uimanager.events.Event
    @NotNull
    protected WritableMap getEventData() {
        WritableMap createMap = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
        ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
        readableMapBuilder.put("width", this.contentWidth);
        readableMapBuilder.put("height", this.contentHeight);
        WritableMap createMap2 = Arguments.createMap();
        Intrinsics.checkNotNullExpressionValue(createMap2, "createMap(...)");
        createMap2.putMap("contentSize", createMap);
        createMap2.putInt("target", getViewTag());
        return createMap2;
    }

    @Override // com.facebook.react.uimanager.events.Event
    @NotNull
    public String getEventName() {
        return EVENT_NAME;
    }

    @jr.c
    public ReactContentSizeChangedEvent(int i10, float f10, float f11) {
        this(-1, i10, f10, f11);
    }
}
