package com.facebook.react.animated;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.bridge.UnexpectedNativeTypeException;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTModernEventEmitter;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0003\b\u0000\u0018\u00002\u00020\u0001B-\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\f\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00030\u0007\u0012\u0006\u0010\b\u001a\u00020\t¢\u0006\u0004\b\n\u0010\u000bJ\"\u0010\f\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u00052\u0006\u0010\u0002\u001a\u00020\u00032\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010H\u0017J*\u0010\f\u001a\u00020\r2\u0006\u0010\u0011\u001a\u00020\u00052\u0006\u0010\u000e\u001a\u00020\u00052\u0006\u0010\u0002\u001a\u00020\u00032\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010H\u0016J \u0010\u0012\u001a\u00020\r2\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0013\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u0014H\u0017JB\u0010\f\u001a\u00020\r2\u0006\u0010\u0011\u001a\u00020\u00052\u0006\u0010\u000e\u001a\u00020\u00052\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u00052\b\u0010\u000f\u001a\u0004\u0018\u00010\u00102\u0006\u0010\u0019\u001a\u00020\u0005H\u0016R\u0012\u0010\u0002\u001a\u00020\u00038\u0006@\u0006X\u0087\u000e¢\u0006\u0002\n\u0000R\u0012\u0010\u0004\u001a\u00020\u00058\u0000@\u0000X\u0081\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00030\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0012\u0010\b\u001a\u00020\t8\u0000@\u0000X\u0081\u000e¢\u0006\u0002\n\u0000¨\u0006\u001a"}, d2 = {"Lcom/facebook/react/animated/EventAnimationDriver;", "Lcom/facebook/react/uimanager/events/RCTModernEventEmitter;", "eventName", "", "viewTag", "", "eventPath", "", "valueNode", "Lcom/facebook/react/animated/ValueAnimatedNode;", "<init>", "(Ljava/lang/String;ILjava/util/List;Lcom/facebook/react/animated/ValueAnimatedNode;)V", "receiveEvent", "", "targetTag", "params", "Lcom/facebook/react/bridge/WritableMap;", "surfaceId", "receiveTouches", "touches", "Lcom/facebook/react/bridge/WritableArray;", "changedIndices", "canCoalesceEvent", "", "customCoalesceKey", "category", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nEventAnimationDriver.kt\nKotlin\n*S Kotlin\n*F\n+ 1 EventAnimationDriver.kt\ncom/facebook/react/animated/EventAnimationDriver\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,99:1\n1#2:100\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class EventAnimationDriver implements RCTModernEventEmitter {
    @NotNull
    public String eventName;
    @NotNull
    private final List<String> eventPath;
    @NotNull
    public ValueAnimatedNode valueNode;
    public int viewTag;

    public EventAnimationDriver(@NotNull String eventName, int i10, @NotNull List<String> eventPath, @NotNull ValueAnimatedNode valueNode) {
        Intrinsics.checkNotNullParameter(eventName, "eventName");
        Intrinsics.checkNotNullParameter(eventPath, "eventPath");
        Intrinsics.checkNotNullParameter(valueNode, "valueNode");
        this.eventName = eventName;
        this.viewTag = i10;
        this.eventPath = eventPath;
        this.valueNode = valueNode;
    }

    @Override // com.facebook.react.uimanager.events.RCTEventEmitter
    @qr.c
    public void receiveEvent(int i10, @NotNull String eventName, WritableMap writableMap) {
        Intrinsics.checkNotNullParameter(eventName, "eventName");
        receiveEvent(-1, i10, eventName, writableMap);
    }

    @Override // com.facebook.react.uimanager.events.RCTEventEmitter
    @qr.c
    public void receiveTouches(@NotNull String eventName, @NotNull WritableArray touches, @NotNull WritableArray changedIndices) {
        Intrinsics.checkNotNullParameter(eventName, "eventName");
        Intrinsics.checkNotNullParameter(touches, "touches");
        Intrinsics.checkNotNullParameter(changedIndices, "changedIndices");
        throw new UnsupportedOperationException("receiveTouches is not support by native animated events");
    }

    @Override // com.facebook.react.uimanager.events.RCTModernEventEmitter
    public void receiveEvent(int i10, int i11, @NotNull String eventName, WritableMap writableMap) {
        Intrinsics.checkNotNullParameter(eventName, "eventName");
        receiveEvent(i10, i11, eventName, false, 0, writableMap, 2);
    }

    @Override // com.facebook.react.uimanager.events.RCTModernEventEmitter
    public void receiveEvent(int i10, int i11, @NotNull String eventName, boolean z10, int i12, WritableMap writableMap, int i13) {
        List<String> list;
        ReadableMap map;
        Intrinsics.checkNotNullParameter(eventName, "eventName");
        if (writableMap != null) {
            int size = this.eventPath.size() - 1;
            ReadableArray readableArray = null;
            for (int i14 = 0; i14 < size; i14++) {
                if (writableMap != null) {
                    String str = this.eventPath.get(i14);
                    ReadableType type = writableMap.getType(str);
                    if (type == ReadableType.Map) {
                        map = writableMap.getMap(str);
                        writableMap = map;
                        readableArray = null;
                    } else if (type == ReadableType.Array) {
                        readableArray = writableMap.getArray(str);
                        writableMap = null;
                    } else {
                        throw new UnexpectedNativeTypeException("Unexpected type " + type + " for key '" + str + "'");
                    }
                } else {
                    int parseInt = Integer.parseInt(this.eventPath.get(i14));
                    ReadableType type2 = readableArray != null ? readableArray.getType(parseInt) : null;
                    if (type2 == ReadableType.Map) {
                        map = readableArray.getMap(parseInt);
                        writableMap = map;
                        readableArray = null;
                    } else if (type2 == ReadableType.Array) {
                        readableArray = readableArray.getArray(parseInt);
                        writableMap = null;
                    } else {
                        throw new UnexpectedNativeTypeException("Unexpected type " + type2 + " for index '" + parseInt + "'");
                    }
                }
            }
            String str2 = this.eventPath.get(list.size() - 1);
            if (writableMap != null) {
                this.valueNode.nodeValue = writableMap.getDouble(str2);
                return;
            }
            this.valueNode.nodeValue = readableArray != null ? readableArray.getDouble(Integer.parseInt(str2)) : 0.0d;
            return;
        }
        throw new IllegalArgumentException("Native animated events must have event data.");
    }
}
