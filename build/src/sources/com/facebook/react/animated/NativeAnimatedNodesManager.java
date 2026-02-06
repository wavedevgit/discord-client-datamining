package com.facebook.react.animated;

import android.util.SparseArray;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.JSApplicationCausedNativeException;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactNoCrashSoftException;
import com.facebook.react.bridge.ReactSoftExceptionLogger;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapBuilder;
import com.facebook.react.bridge.UIManager;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.EventDispatcherListener;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u008c\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0006\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u000f\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\t\n\u0000\n\u0002\u0010\"\n\u0002\b\u0004\n\u0002\u0010 \n\u0002\b\u0003\u0018\u0000 U2\u00020\u0001:\u0001UB\u0011\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\u000e\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0018\u001a\u00020\u0010J\u0010\u0010\u0019\u001a\u0004\u0018\u00010\b2\u0006\u0010\u001a\u001a\u00020\u0010J\u0006\u0010\u001b\u001a\u00020\u0013J\u0018\u0010\u001c\u001a\u00020\u00172\u0006\u0010\u001d\u001a\u00020\u00102\u0006\u0010\u001e\u001a\u00020\u001fH\u0007J\u001a\u0010 \u001a\u00020\u00172\u0006\u0010\u001d\u001a\u00020\u00102\b\u0010\u001e\u001a\u0004\u0018\u00010\u001fH\u0007J\u0010\u0010!\u001a\u00020\u00172\u0006\u0010\u001d\u001a\u00020\u0010H\u0007J\u001a\u0010\"\u001a\u00020\u00172\u0006\u0010\u001d\u001a\u00020\u00102\b\u0010#\u001a\u0004\u0018\u00010$H\u0007J\u0010\u0010%\u001a\u00020\u00172\u0006\u0010\u001d\u001a\u00020\u0010H\u0007J\u0018\u0010&\u001a\u00020\u00172\u0006\u0010\u001d\u001a\u00020\u00102\u0006\u0010'\u001a\u00020(H\u0007J\u0018\u0010)\u001a\u00020\u00172\u0006\u0010\u001d\u001a\u00020\u00102\u0006\u0010*\u001a\u00020(H\u0007J\u0010\u0010+\u001a\u00020\u00172\u0006\u0010\u001d\u001a\u00020\u0010H\u0007J\u0010\u0010,\u001a\u00020\u00172\u0006\u0010\u001d\u001a\u00020\u0010H\u0007J*\u0010-\u001a\u00020\u00172\u0006\u0010.\u001a\u00020\u00102\u0006\u0010/\u001a\u00020\u00102\u0006\u00100\u001a\u00020\u001f2\b\u00101\u001a\u0004\u0018\u000102H\u0007J\u0010\u00103\u001a\u00020\u00172\u0006\u00104\u001a\u00020\bH\u0003J\u0010\u00105\u001a\u00020\u00172\u0006\u0010.\u001a\u00020\u0010H\u0007J\u0018\u00106\u001a\u00020\u00172\u0006\u00107\u001a\u00020\u00102\u0006\u00108\u001a\u00020\u0010H\u0007J\u0016\u00109\u001a\u00020\u00172\u0006\u00107\u001a\u00020\u00102\u0006\u00108\u001a\u00020\u0010J\u0018\u0010:\u001a\u00020\u00172\u0006\u0010/\u001a\u00020\u00102\u0006\u0010;\u001a\u00020\u0010H\u0007J\u0018\u0010<\u001a\u00020\u00172\u0006\u0010/\u001a\u00020\u00102\u0006\u0010;\u001a\u00020\u0010H\u0007J\u001a\u0010=\u001a\u00020\u00172\u0006\u0010\u001d\u001a\u00020\u00102\b\u0010>\u001a\u0004\u0018\u000102H\u0007J\u0010\u0010?\u001a\u00020\u00172\u0006\u0010/\u001a\u00020\u0010H\u0007J \u0010@\u001a\u00020\u00172\u0006\u0010;\u001a\u00020\u00102\u0006\u0010A\u001a\u00020B2\u0006\u0010C\u001a\u00020\u001fH\u0007J \u0010D\u001a\u00020\u00172\u0006\u0010;\u001a\u00020\u00102\u0006\u0010A\u001a\u00020B2\u0006\u0010E\u001a\u00020\u0010H\u0007J\u0014\u0010F\u001a\u00020\u00172\n\u0010G\u001a\u0006\u0012\u0002\b\u00030HH\u0016J\u0014\u0010I\u001a\u00020\u00172\n\u0010G\u001a\u0006\u0012\u0002\b\u00030HH\u0003J\u0010\u0010J\u001a\u00020\u00172\u0006\u0010K\u001a\u00020LH\u0007J#\u0010M\u001a\b\u0012\u0004\u0012\u00020\u00100N2\u0006\u0010\u001d\u001a\u00020\u00102\u0006\u0010O\u001a\u00020BH\u0000¢\u0006\u0002\bPJ\u0016\u0010Q\u001a\u00020\u00172\f\u0010R\u001a\b\u0012\u0004\u0012\u00020\b0SH\u0003J\u0010\u0010T\u001a\u00020B2\u0006\u0010A\u001a\u00020BH\u0002R\u0010\u0010\u0002\u001a\u0004\u0018\u00010\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\b0\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\t\u001a\b\u0012\u0004\u0012\u00020\n0\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\b0\u0007X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\f\u001a\b\u0012\u0004\u0012\u00020\u000e0\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0010X\u0082\u000e¢\u0006\u0002\n\u0000R\u0014\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\b0\rX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0012\u001a\u00020\u0013X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0014\u001a\u00020\u0013X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0015\u001a\u00020\u0013X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006V"}, d2 = {"Lcom/facebook/react/animated/NativeAnimatedNodesManager;", "Lcom/facebook/react/uimanager/events/EventDispatcherListener;", "reactApplicationContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "animatedNodes", "Landroid/util/SparseArray;", "Lcom/facebook/react/animated/AnimatedNode;", "activeAnimations", "Lcom/facebook/react/animated/AnimationDriver;", "updatedNodes", "eventDrivers", "", "Lcom/facebook/react/animated/EventAnimationDriver;", "animatedGraphBFSColor", "", "runUpdateNodeList", "eventListenerInitializedForFabric", "", "eventListenerInitializedForNonFabric", "warnedAboutGraphTraversal", "initializeEventListenerForUIManagerType", "", "uiManagerType", "getNodeById", StackTraceHelper.ID_KEY, "hasActiveAnimations", "createAnimatedNode", "tag", "config", "Lcom/facebook/react/bridge/ReadableMap;", "updateAnimatedNodeConfig", "dropAnimatedNode", "startListeningToAnimatedNodeValue", "listener", "Lcom/facebook/react/animated/AnimatedNodeValueListener;", "stopListeningToAnimatedNodeValue", "setAnimatedNodeValue", "value", "", "setAnimatedNodeOffset", "offset", "flattenAnimatedNodeOffset", "extractAnimatedNodeOffset", "startAnimatingNode", "animationId", "animatedNodeTag", "animationConfig", "endCallback", "Lcom/facebook/react/bridge/Callback;", "stopAnimationsForNode", "animatedNode", "stopAnimation", "connectAnimatedNodes", "parentNodeTag", "childNodeTag", "disconnectAnimatedNodes", "connectAnimatedNodeToView", "viewTag", "disconnectAnimatedNodeFromView", "getValue", "callback", "restoreDefaultValues", "addAnimatedEventToView", "eventHandlerName", "", "eventMapping", "removeAnimatedEventFromView", "animatedValueTag", "onEventDispatch", "event", "Lcom/facebook/react/uimanager/events/Event;", "handleEvent", "runUpdates", "frameTimeNanos", "", "getTagsOfConnectedNodes", "", "eventName", "getTagsOfConnectedNodes$ReactAndroid_release", "updateNodes", "nodes", "", "normalizeEventName", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNativeAnimatedNodesManager.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NativeAnimatedNodesManager.kt\ncom/facebook/react/animated/NativeAnimatedNodesManager\n+ 2 ReadableMapBuilder.kt\ncom/facebook/react/bridge/ReadableMapBuilderKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,781:1\n30#2,3:782\n30#2,3:785\n30#2,3:788\n30#2,3:791\n30#2,3:794\n30#2,3:798\n30#2,3:801\n1#3:797\n1869#4:804\n1869#4,2:805\n1870#4:807\n1869#4,2:808\n1869#4,2:810\n*S KotlinDebug\n*F\n+ 1 NativeAnimatedNodesManager.kt\ncom/facebook/react/animated/NativeAnimatedNodesManager\n*L\n271#1:782,3\n281#1:785,3\n312#1:788,3\n322#1:791,3\n431#1:794,3\n586#1:798,3\n596#1:801,3\n619#1:804\n622#1:805,2\n619#1:807\n656#1:808,2\n713#1:810,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class NativeAnimatedNodesManager implements EventDispatcherListener {
    @NotNull
    private static final Companion Companion = new Companion(null);
    @NotNull
    private static final String TAG = "NativeAnimatedNodesManager";
    private int animatedGraphBFSColor;
    private boolean eventListenerInitializedForFabric;
    private boolean eventListenerInitializedForNonFabric;
    private final ReactApplicationContext reactApplicationContext;
    private boolean warnedAboutGraphTraversal;
    @NotNull
    private final SparseArray<AnimatedNode> animatedNodes = new SparseArray<>();
    @NotNull
    private final SparseArray<AnimationDriver> activeAnimations = new SparseArray<>();
    @NotNull
    private final SparseArray<AnimatedNode> updatedNodes = new SparseArray<>();
    @NotNull
    private final List<EventAnimationDriver> eventDrivers = new ArrayList();
    @NotNull
    private final List<AnimatedNode> runUpdateNodeList = new LinkedList();

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0082\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/facebook/react/animated/NativeAnimatedNodesManager$Companion;", "", "<init>", "()V", "TAG", "", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    public NativeAnimatedNodesManager(ReactApplicationContext reactApplicationContext) {
        this.reactApplicationContext = reactApplicationContext;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void handleEvent(Event<?> event) {
        if (!this.eventDrivers.isEmpty()) {
            Event.EventAnimationDriverMatchSpec eventAnimationDriverMatchSpec = event.getEventAnimationDriverMatchSpec();
            boolean z10 = false;
            for (EventAnimationDriver eventAnimationDriver : this.eventDrivers) {
                if (eventAnimationDriverMatchSpec != null && eventAnimationDriverMatchSpec.match(eventAnimationDriver.viewTag, eventAnimationDriver.eventName)) {
                    stopAnimationsForNode(eventAnimationDriver.valueNode);
                    event.dispatchModern(eventAnimationDriver);
                    this.runUpdateNodeList.add(eventAnimationDriver.valueNode);
                    z10 = true;
                }
            }
            if (z10) {
                updateNodes(this.runUpdateNodeList);
                this.runUpdateNodeList.clear();
            }
        }
    }

    private final String normalizeEventName(String str) {
        if (StringsKt.P(str, ViewProps.ON, false, 2, null)) {
            String substring = str.substring(2);
            Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
            return ViewProps.TOP + substring;
        }
        return str;
    }

    private final void stopAnimationsForNode(AnimatedNode animatedNode) {
        ReactApplicationContext reactApplicationContext;
        WritableArray writableArray = null;
        int i10 = 0;
        while (i10 < this.activeAnimations.size()) {
            AnimationDriver valueAt = this.activeAnimations.valueAt(i10);
            if (Intrinsics.areEqual(animatedNode, valueAt.animatedValue)) {
                ValueAnimatedNode valueAnimatedNode = valueAt.animatedValue;
                if (valueAnimatedNode != null) {
                    if (valueAt.endCallback != null) {
                        WritableMap createMap = Arguments.createMap();
                        Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                        ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
                        readableMapBuilder.put("finished", false);
                        readableMapBuilder.put("value", valueAnimatedNode.nodeValue);
                        readableMapBuilder.put("offset", valueAnimatedNode.offset);
                        Callback callback = valueAt.endCallback;
                        if (callback != null) {
                            callback.invoke(createMap);
                        }
                    } else if (this.reactApplicationContext != null) {
                        WritableMap createMap2 = Arguments.createMap();
                        Intrinsics.checkNotNullExpressionValue(createMap2, "createMap(...)");
                        ReadableMapBuilder readableMapBuilder2 = new ReadableMapBuilder(createMap2);
                        readableMapBuilder2.put("animationId", valueAt.f10909id);
                        readableMapBuilder2.put("finished", false);
                        readableMapBuilder2.put("value", valueAnimatedNode.nodeValue);
                        readableMapBuilder2.put("offset", valueAnimatedNode.offset);
                        if (writableArray == null) {
                            writableArray = Arguments.createArray();
                            Intrinsics.checkNotNullExpressionValue(writableArray, "createArray(...)");
                        }
                        writableArray.pushMap(createMap2);
                    }
                    this.activeAnimations.removeAt(i10);
                    i10--;
                } else {
                    throw new IllegalStateException("Required value was null.");
                }
            }
            i10++;
        }
        if (writableArray != null && (reactApplicationContext = this.reactApplicationContext) != null) {
            reactApplicationContext.emitDeviceEvent("onNativeAnimatedModuleAnimationFinished", writableArray);
        }
    }

    private final void updateNodes(List<? extends AnimatedNode> list) {
        String str;
        List<AnimatedNode> list2;
        List<AnimatedNode> list3;
        int i10 = this.animatedGraphBFSColor;
        int i11 = i10 + 1;
        this.animatedGraphBFSColor = i11;
        if (i11 == 0) {
            this.animatedGraphBFSColor = i10 + 2;
        }
        ArrayDeque arrayDeque = new ArrayDeque();
        int i12 = 0;
        for (AnimatedNode animatedNode : list) {
            int i13 = animatedNode.BFSColor;
            int i14 = this.animatedGraphBFSColor;
            if (i13 != i14) {
                animatedNode.BFSColor = i14;
                i12++;
                arrayDeque.add(animatedNode);
            }
        }
        while (!arrayDeque.isEmpty()) {
            AnimatedNode animatedNode2 = (AnimatedNode) arrayDeque.poll();
            if (animatedNode2 != null && (list3 = animatedNode2.children) != null) {
                for (AnimatedNode animatedNode3 : list3) {
                    animatedNode3.activeIncomingNodes++;
                    int i15 = animatedNode3.BFSColor;
                    int i16 = this.animatedGraphBFSColor;
                    if (i15 != i16) {
                        animatedNode3.BFSColor = i16;
                        i12++;
                        arrayDeque.add(animatedNode3);
                    }
                }
            }
        }
        int i17 = this.animatedGraphBFSColor;
        int i18 = i17 + 1;
        this.animatedGraphBFSColor = i18;
        if (i18 == 0) {
            this.animatedGraphBFSColor = i17 + 2;
        }
        int i19 = 0;
        for (AnimatedNode animatedNode4 : list) {
            if (animatedNode4.activeIncomingNodes == 0) {
                int i20 = animatedNode4.BFSColor;
                int i21 = this.animatedGraphBFSColor;
                if (i20 != i21) {
                    animatedNode4.BFSColor = i21;
                    i19++;
                    arrayDeque.add(animatedNode4);
                }
            }
        }
        int i22 = 0;
        while (!arrayDeque.isEmpty()) {
            AnimatedNode animatedNode5 = (AnimatedNode) arrayDeque.poll();
            if (animatedNode5 != null) {
                try {
                    animatedNode5.update$ReactAndroid_release();
                } catch (JSApplicationCausedNativeException e10) {
                    p8.a.n(TAG, "Native animation workaround, frame lost as result of race condition", e10);
                }
            }
            if (animatedNode5 instanceof PropsAnimatedNode) {
                ((PropsAnimatedNode) animatedNode5).updateView();
            }
            if (animatedNode5 instanceof ValueAnimatedNode) {
                ((ValueAnimatedNode) animatedNode5).onValueUpdate();
            }
            if (animatedNode5 != null && (list2 = animatedNode5.children) != null) {
                for (AnimatedNode animatedNode6 : list2) {
                    int i23 = animatedNode6.activeIncomingNodes - 1;
                    animatedNode6.activeIncomingNodes = i23;
                    int i24 = animatedNode6.BFSColor;
                    int i25 = this.animatedGraphBFSColor;
                    if (i24 != i25 && i23 == 0) {
                        animatedNode6.BFSColor = i25;
                        i19++;
                        arrayDeque.add(animatedNode6);
                    } else if (i24 == i25) {
                        i22++;
                    }
                }
            }
        }
        if (i12 != i19) {
            if (!this.warnedAboutGraphTraversal) {
                this.warnedAboutGraphTraversal = true;
                p8.a.m(TAG, "Detected animation cycle or disconnected graph. ");
                for (AnimatedNode animatedNode7 : list) {
                    p8.a.m(TAG, animatedNode7.prettyPrintWithChildren$ReactAndroid_release());
                }
                if (i22 > 0) {
                    str = "cycles (" + i22 + ")";
                } else {
                    str = "disconnected regions";
                }
                IllegalStateException illegalStateException = new IllegalStateException("Looks like animated nodes graph has " + str + ", there are " + i12 + " but toposort visited only " + i19);
                boolean z10 = this.eventListenerInitializedForFabric;
                if (z10 && i22 == 0) {
                    ReactSoftExceptionLogger.logSoftException(TAG, new ReactNoCrashSoftException(illegalStateException));
                    return;
                } else if (z10) {
                    ReactSoftExceptionLogger.logSoftException(TAG, new ReactNoCrashSoftException(illegalStateException));
                    return;
                } else {
                    throw illegalStateException;
                }
            }
            return;
        }
        this.warnedAboutGraphTraversal = false;
    }

    public final void addAnimatedEventToView(int i10, @NotNull String eventHandlerName, @NotNull ReadableMap eventMapping) {
        Intrinsics.checkNotNullParameter(eventHandlerName, "eventHandlerName");
        Intrinsics.checkNotNullParameter(eventMapping, "eventMapping");
        int i11 = eventMapping.getInt("animatedValueTag");
        AnimatedNode animatedNode = this.animatedNodes.get(i11);
        if (animatedNode != null) {
            if (animatedNode instanceof ValueAnimatedNode) {
                ReadableArray array = eventMapping.getArray("nativeEventPath");
                if (array != null) {
                    ArrayList arrayList = new ArrayList(array.size());
                    int size = array.size();
                    for (int i12 = 0; i12 < size; i12++) {
                        String string = array.getString(i12);
                        if (string != null) {
                            arrayList.add(string);
                        } else {
                            throw new IllegalStateException("Required value was null.");
                        }
                    }
                    String normalizeEventName = normalizeEventName(eventHandlerName);
                    this.eventDrivers.add(new EventAnimationDriver(normalizeEventName, i10, arrayList, (ValueAnimatedNode) animatedNode));
                    if (Intrinsics.areEqual(normalizeEventName, "topScroll")) {
                        addAnimatedEventToView(i10, "topScrollEnded", eventMapping);
                        return;
                    }
                    return;
                }
                throw new IllegalStateException("Required value was null.");
            }
            String name = ValueAnimatedNode.class.getName();
            throw new JSApplicationIllegalArgumentException("addAnimatedEventToView: Animated node on view [" + i10 + "] connected to event handler (" + eventHandlerName + ") should be of type " + name);
        }
        throw new JSApplicationIllegalArgumentException("addAnimatedEventToView: Animated node with tag [" + i11 + "] does not exist");
    }

    public final void connectAnimatedNodeToView(int i10, int i11) {
        AnimatedNode animatedNode = this.animatedNodes.get(i10);
        if (animatedNode != null) {
            if (animatedNode instanceof PropsAnimatedNode) {
                ReactApplicationContext reactApplicationContext = this.reactApplicationContext;
                if (reactApplicationContext != null) {
                    UIManager uIManagerForReactTag = UIManagerHelper.getUIManagerForReactTag(reactApplicationContext, i11);
                    if (uIManagerForReactTag == null) {
                        ReactSoftExceptionLogger.logSoftException(TAG, new ReactNoCrashSoftException("connectAnimatedNodeToView: Animated node could not be connected to UIManager - uiManager disappeared for tag: " + i11));
                        return;
                    }
                    ((PropsAnimatedNode) animatedNode).connectToView(i11, uIManagerForReactTag);
                    this.updatedNodes.put(i10, animatedNode);
                    return;
                }
                throw new IllegalStateException(("connectAnimatedNodeToView: Animated node could not be connected, no ReactApplicationContext: " + i11).toString());
            }
            String name = PropsAnimatedNode.class.getName();
            throw new JSApplicationIllegalArgumentException("connectAnimatedNodeToView: Animated node connected to view [" + i11 + "] should be of type " + name);
        }
        throw new JSApplicationIllegalArgumentException("connectAnimatedNodeToView: Animated node with tag [" + i10 + "] does not exist");
    }

    public final void connectAnimatedNodes(int i10, int i11) {
        AnimatedNode animatedNode = this.animatedNodes.get(i10);
        if (animatedNode != null) {
            AnimatedNode animatedNode2 = this.animatedNodes.get(i11);
            if (animatedNode2 != null) {
                animatedNode.addChild$ReactAndroid_release(animatedNode2);
                this.updatedNodes.put(i11, animatedNode2);
                return;
            }
            throw new JSApplicationIllegalArgumentException("connectAnimatedNodes: Animated node with tag (child) [" + i11 + "] does not exist");
        }
        throw new JSApplicationIllegalArgumentException("connectAnimatedNodes: Animated node with tag (parent) [" + i10 + "] does not exist");
    }

    public final void createAnimatedNode(int i10, @NotNull ReadableMap config) {
        AnimatedNode subtractionAnimatedNode;
        Intrinsics.checkNotNullParameter(config, "config");
        if (this.animatedNodes.get(i10) == null) {
            String string = config.getString("type");
            if (string != null) {
                switch (string.hashCode()) {
                    case -1774341004:
                        if (string.equals("subtraction")) {
                            subtractionAnimatedNode = new SubtractionAnimatedNode(config, this);
                            subtractionAnimatedNode.tag = i10;
                            this.animatedNodes.put(i10, subtractionAnimatedNode);
                            this.updatedNodes.put(i10, subtractionAnimatedNode);
                            return;
                        }
                        break;
                    case -1226589444:
                        if (string.equals("addition")) {
                            subtractionAnimatedNode = new AdditionAnimatedNode(config, this);
                            subtractionAnimatedNode.tag = i10;
                            this.animatedNodes.put(i10, subtractionAnimatedNode);
                            this.updatedNodes.put(i10, subtractionAnimatedNode);
                            return;
                        }
                        break;
                    case -1023368385:
                        if (string.equals("object")) {
                            subtractionAnimatedNode = new ObjectAnimatedNode(config, this);
                            subtractionAnimatedNode.tag = i10;
                            this.animatedNodes.put(i10, subtractionAnimatedNode);
                            this.updatedNodes.put(i10, subtractionAnimatedNode);
                            return;
                        }
                        break;
                    case 94842723:
                        if (string.equals(ViewProps.COLOR)) {
                            ReactApplicationContext reactApplicationContext = this.reactApplicationContext;
                            if (reactApplicationContext != null) {
                                subtractionAnimatedNode = new ColorAnimatedNode(config, this, reactApplicationContext);
                                subtractionAnimatedNode.tag = i10;
                                this.animatedNodes.put(i10, subtractionAnimatedNode);
                                this.updatedNodes.put(i10, subtractionAnimatedNode);
                                return;
                            }
                            throw new IllegalStateException("Required value was null.");
                        }
                        break;
                    case 106940784:
                        if (string.equals("props")) {
                            subtractionAnimatedNode = new PropsAnimatedNode(config, this);
                            subtractionAnimatedNode.tag = i10;
                            this.animatedNodes.put(i10, subtractionAnimatedNode);
                            this.updatedNodes.put(i10, subtractionAnimatedNode);
                            return;
                        }
                        break;
                    case 109780401:
                        if (string.equals("style")) {
                            subtractionAnimatedNode = new StyleAnimatedNode(config, this);
                            subtractionAnimatedNode.tag = i10;
                            this.animatedNodes.put(i10, subtractionAnimatedNode);
                            this.updatedNodes.put(i10, subtractionAnimatedNode);
                            return;
                        }
                        break;
                    case 111972721:
                        if (string.equals("value")) {
                            subtractionAnimatedNode = new ValueAnimatedNode(config);
                            subtractionAnimatedNode.tag = i10;
                            this.animatedNodes.put(i10, subtractionAnimatedNode);
                            this.updatedNodes.put(i10, subtractionAnimatedNode);
                            return;
                        }
                        break;
                    case 364720301:
                        if (string.equals("division")) {
                            subtractionAnimatedNode = new DivisionAnimatedNode(config, this);
                            subtractionAnimatedNode.tag = i10;
                            this.animatedNodes.put(i10, subtractionAnimatedNode);
                            this.updatedNodes.put(i10, subtractionAnimatedNode);
                            return;
                        }
                        break;
                    case 559331748:
                        if (string.equals("interpolation")) {
                            subtractionAnimatedNode = new InterpolationAnimatedNode(config);
                            subtractionAnimatedNode.tag = i10;
                            this.animatedNodes.put(i10, subtractionAnimatedNode);
                            this.updatedNodes.put(i10, subtractionAnimatedNode);
                            return;
                        }
                        break;
                    case 668845958:
                        if (string.equals("multiplication")) {
                            subtractionAnimatedNode = new MultiplicationAnimatedNode(config, this);
                            subtractionAnimatedNode.tag = i10;
                            this.animatedNodes.put(i10, subtractionAnimatedNode);
                            this.updatedNodes.put(i10, subtractionAnimatedNode);
                            return;
                        }
                        break;
                    case 1052666732:
                        if (string.equals(ViewProps.TRANSFORM)) {
                            subtractionAnimatedNode = new TransformAnimatedNode(config, this);
                            subtractionAnimatedNode.tag = i10;
                            this.animatedNodes.put(i10, subtractionAnimatedNode);
                            this.updatedNodes.put(i10, subtractionAnimatedNode);
                            return;
                        }
                        break;
                    case 1227434359:
                        if (string.equals("modulus")) {
                            subtractionAnimatedNode = new ModulusAnimatedNode(config, this);
                            subtractionAnimatedNode.tag = i10;
                            this.animatedNodes.put(i10, subtractionAnimatedNode);
                            this.updatedNodes.put(i10, subtractionAnimatedNode);
                            return;
                        }
                        break;
                    case 1270488759:
                        if (string.equals("tracking")) {
                            subtractionAnimatedNode = new TrackingAnimatedNode(config, this);
                            subtractionAnimatedNode.tag = i10;
                            this.animatedNodes.put(i10, subtractionAnimatedNode);
                            this.updatedNodes.put(i10, subtractionAnimatedNode);
                            return;
                        }
                        break;
                    case 1300649942:
                        if (string.equals("diffclamp")) {
                            subtractionAnimatedNode = new DiffClampAnimatedNode(config, this);
                            subtractionAnimatedNode.tag = i10;
                            this.animatedNodes.put(i10, subtractionAnimatedNode);
                            this.updatedNodes.put(i10, subtractionAnimatedNode);
                            return;
                        }
                        break;
                }
            }
            throw new JSApplicationIllegalArgumentException("Unsupported node type: " + string);
        }
        throw new JSApplicationIllegalArgumentException("createAnimatedNode: Animated node [" + i10 + "] already exists");
    }

    public final void disconnectAnimatedNodeFromView(int i10, int i11) {
        AnimatedNode animatedNode = this.animatedNodes.get(i10);
        if (animatedNode != null) {
            if (animatedNode instanceof PropsAnimatedNode) {
                ((PropsAnimatedNode) animatedNode).disconnectFromView(i11);
                return;
            }
            String name = PropsAnimatedNode.class.getName();
            throw new JSApplicationIllegalArgumentException("disconnectAnimatedNodeFromView: Animated node connected to view [" + i11 + "] should be of type " + name);
        }
        throw new JSApplicationIllegalArgumentException("disconnectAnimatedNodeFromView: Animated node with tag [" + i10 + "] does not exist");
    }

    public final void disconnectAnimatedNodes(int i10, int i11) {
        AnimatedNode animatedNode = this.animatedNodes.get(i10);
        if (animatedNode != null) {
            AnimatedNode animatedNode2 = this.animatedNodes.get(i11);
            if (animatedNode2 != null) {
                animatedNode.removeChild$ReactAndroid_release(animatedNode2);
                this.updatedNodes.put(i11, animatedNode2);
                return;
            }
            throw new JSApplicationIllegalArgumentException("disconnectAnimatedNodes: Animated node with tag (child) [" + i11 + "] does not exist");
        }
        throw new JSApplicationIllegalArgumentException("disconnectAnimatedNodes: Animated node with tag (parent) [" + i10 + "] does not exist");
    }

    public final void dropAnimatedNode(int i10) {
        this.animatedNodes.remove(i10);
        this.updatedNodes.remove(i10);
    }

    public final void extractAnimatedNodeOffset(int i10) {
        AnimatedNode animatedNode = this.animatedNodes.get(i10);
        if (animatedNode != null && (animatedNode instanceof ValueAnimatedNode)) {
            ((ValueAnimatedNode) animatedNode).extractOffset();
            return;
        }
        throw new JSApplicationIllegalArgumentException("extractAnimatedNodeOffset: Animated node [" + i10 + "] does not exist, or is not a 'value' node");
    }

    public final void flattenAnimatedNodeOffset(int i10) {
        AnimatedNode animatedNode = this.animatedNodes.get(i10);
        if (animatedNode != null && (animatedNode instanceof ValueAnimatedNode)) {
            ((ValueAnimatedNode) animatedNode).flattenOffset();
            return;
        }
        throw new JSApplicationIllegalArgumentException("flattenAnimatedNodeOffset: Animated node [" + i10 + "] does not exist, or is not a 'value' node");
    }

    public final AnimatedNode getNodeById(int i10) {
        return this.animatedNodes.get(i10);
    }

    @NotNull
    public final Set<Integer> getTagsOfConnectedNodes$ReactAndroid_release(int i10, @NotNull String eventName) {
        int i11;
        Intrinsics.checkNotNullParameter(eventName, "eventName");
        HashSet hashSet = new HashSet();
        for (EventAnimationDriver eventAnimationDriver : this.eventDrivers) {
            if (Intrinsics.areEqual(eventName, eventAnimationDriver.eventName) && i10 == (i11 = eventAnimationDriver.viewTag)) {
                hashSet.add(Integer.valueOf(i11));
                List<AnimatedNode> list = eventAnimationDriver.valueNode.children;
                if (list != null) {
                    for (AnimatedNode animatedNode : list) {
                        hashSet.add(Integer.valueOf(animatedNode.tag));
                    }
                }
            }
        }
        return hashSet;
    }

    public final void getValue(int i10, Callback callback) {
        AnimatedNode animatedNode = this.animatedNodes.get(i10);
        if (animatedNode != null && (animatedNode instanceof ValueAnimatedNode)) {
            double value = ((ValueAnimatedNode) animatedNode).getValue();
            if (callback != null) {
                callback.invoke(Double.valueOf(value));
                return;
            } else if (this.reactApplicationContext == null) {
                return;
            } else {
                WritableMap createMap = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
                readableMapBuilder.put("tag", i10);
                readableMapBuilder.put("value", value);
                this.reactApplicationContext.emitDeviceEvent("onNativeAnimatedModuleGetValue", createMap);
                return;
            }
        }
        throw new JSApplicationIllegalArgumentException("getValue: Animated node with tag [" + i10 + "] does not exist or is not a 'value' node");
    }

    public final boolean hasActiveAnimations() {
        if (this.activeAnimations.size() <= 0 && this.updatedNodes.size() <= 0) {
            return false;
        }
        return true;
    }

    public final void initializeEventListenerForUIManagerType(int i10) {
        boolean z10;
        if (i10 == 2) {
            z10 = this.eventListenerInitializedForFabric;
        } else {
            z10 = this.eventListenerInitializedForNonFabric;
        }
        if (!z10) {
            ReactApplicationContext reactApplicationContext = this.reactApplicationContext;
            if (reactApplicationContext != null) {
                UIManager uIManager = UIManagerHelper.getUIManager(reactApplicationContext, i10);
                if (uIManager != null) {
                    uIManager.getEventDispatcher().addListener(this);
                    if (i10 == 2) {
                        this.eventListenerInitializedForFabric = true;
                        return;
                    } else {
                        this.eventListenerInitializedForNonFabric = true;
                        return;
                    }
                }
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
    }

    @Override // com.facebook.react.uimanager.events.EventDispatcherListener
    public void onEventDispatch(@NotNull final Event<?> event) {
        Intrinsics.checkNotNullParameter(event, "event");
        if (UiThreadUtil.isOnUiThread()) {
            handleEvent(event);
        } else {
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.facebook.react.animated.f
                @Override // java.lang.Runnable
                public final void run() {
                    NativeAnimatedNodesManager.this.handleEvent(event);
                }
            });
        }
    }

    public final void removeAnimatedEventFromView(int i10, @NotNull String eventHandlerName, int i11) {
        Object obj;
        Intrinsics.checkNotNullParameter(eventHandlerName, "eventHandlerName");
        String normalizeEventName = normalizeEventName(eventHandlerName);
        Iterator<T> it = this.eventDrivers.iterator();
        while (true) {
            if (it.hasNext()) {
                obj = it.next();
                EventAnimationDriver eventAnimationDriver = (EventAnimationDriver) obj;
                if (Intrinsics.areEqual(normalizeEventName, eventAnimationDriver.eventName) && i10 == eventAnimationDriver.viewTag && i11 == eventAnimationDriver.valueNode.tag) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        EventAnimationDriver eventAnimationDriver2 = (EventAnimationDriver) obj;
        if (eventAnimationDriver2 != null) {
            this.eventDrivers.remove(eventAnimationDriver2);
        }
        if (Intrinsics.areEqual(normalizeEventName, "topScroll")) {
            removeAnimatedEventFromView(i10, "topScrollEnded", i11);
        }
    }

    public final void restoreDefaultValues(int i10) {
        AnimatedNode animatedNode = this.animatedNodes.get(i10);
        if (animatedNode == null) {
            return;
        }
        if (animatedNode instanceof PropsAnimatedNode) {
            ((PropsAnimatedNode) animatedNode).restoreDefaultValues();
            return;
        }
        String name = PropsAnimatedNode.class.getName();
        throw new JSApplicationIllegalArgumentException("Animated node connected to view [?] should be of type " + name);
    }

    public final void runUpdates(long j10) {
        ReactApplicationContext reactApplicationContext;
        UiThreadUtil.assertOnUiThread();
        int size = this.updatedNodes.size();
        for (int i10 = 0; i10 < size; i10++) {
            AnimatedNode valueAt = this.updatedNodes.valueAt(i10);
            List<AnimatedNode> list = this.runUpdateNodeList;
            Intrinsics.checkNotNull(valueAt);
            list.add(valueAt);
        }
        this.updatedNodes.clear();
        int size2 = this.activeAnimations.size();
        boolean z10 = false;
        for (int i11 = 0; i11 < size2; i11++) {
            AnimationDriver valueAt2 = this.activeAnimations.valueAt(i11);
            valueAt2.runAnimationStep(j10);
            ValueAnimatedNode valueAnimatedNode = valueAt2.animatedValue;
            if (valueAnimatedNode != null) {
                this.runUpdateNodeList.add(valueAnimatedNode);
            }
            if (valueAt2.hasFinished) {
                z10 = true;
            }
        }
        updateNodes(this.runUpdateNodeList);
        this.runUpdateNodeList.clear();
        if (z10) {
            WritableArray writableArray = null;
            for (int size3 = this.activeAnimations.size() - 1; -1 < size3; size3--) {
                AnimationDriver valueAt3 = this.activeAnimations.valueAt(size3);
                if (valueAt3.hasFinished) {
                    ValueAnimatedNode valueAnimatedNode2 = valueAt3.animatedValue;
                    if (valueAnimatedNode2 != null) {
                        if (valueAt3.endCallback != null) {
                            WritableMap createMap = Arguments.createMap();
                            Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                            ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
                            readableMapBuilder.put("finished", true);
                            readableMapBuilder.put("value", valueAnimatedNode2.nodeValue);
                            readableMapBuilder.put("offset", valueAnimatedNode2.offset);
                            Callback callback = valueAt3.endCallback;
                            if (callback != null) {
                                callback.invoke(createMap);
                            }
                        } else if (this.reactApplicationContext != null) {
                            WritableMap createMap2 = Arguments.createMap();
                            Intrinsics.checkNotNullExpressionValue(createMap2, "createMap(...)");
                            ReadableMapBuilder readableMapBuilder2 = new ReadableMapBuilder(createMap2);
                            readableMapBuilder2.put("animationId", valueAt3.f10909id);
                            readableMapBuilder2.put("finished", true);
                            readableMapBuilder2.put("value", valueAnimatedNode2.nodeValue);
                            readableMapBuilder2.put("offset", valueAnimatedNode2.offset);
                            if (writableArray == null) {
                                writableArray = Arguments.createArray();
                                Intrinsics.checkNotNullExpressionValue(writableArray, "createArray(...)");
                            }
                            writableArray.pushMap(createMap2);
                        }
                        this.activeAnimations.removeAt(size3);
                    } else {
                        throw new IllegalStateException("Required value was null.");
                    }
                }
            }
            if (writableArray != null && (reactApplicationContext = this.reactApplicationContext) != null) {
                reactApplicationContext.emitDeviceEvent("onNativeAnimatedModuleAnimationFinished", writableArray);
            }
        }
    }

    public final void setAnimatedNodeOffset(int i10, double d10) {
        AnimatedNode animatedNode = this.animatedNodes.get(i10);
        if (animatedNode != null && (animatedNode instanceof ValueAnimatedNode)) {
            ((ValueAnimatedNode) animatedNode).offset = d10;
            this.updatedNodes.put(i10, animatedNode);
            return;
        }
        throw new JSApplicationIllegalArgumentException("setAnimatedNodeOffset: Animated node [" + i10 + "] does not exist, or is not a 'value' node");
    }

    public final void setAnimatedNodeValue(int i10, double d10) {
        AnimatedNode animatedNode = this.animatedNodes.get(i10);
        if (animatedNode != null && (animatedNode instanceof ValueAnimatedNode)) {
            stopAnimationsForNode(animatedNode);
            ((ValueAnimatedNode) animatedNode).nodeValue = d10;
            this.updatedNodes.put(i10, animatedNode);
            return;
        }
        throw new JSApplicationIllegalArgumentException("setAnimatedNodeValue: Animated node [" + i10 + "] does not exist, or is not a 'value' node");
    }

    public final void startAnimatingNode(int i10, int i11, @NotNull ReadableMap animationConfig, Callback callback) {
        AnimationDriver frameBasedAnimationDriver;
        Intrinsics.checkNotNullParameter(animationConfig, "animationConfig");
        AnimatedNode animatedNode = this.animatedNodes.get(i11);
        if (animatedNode != null) {
            if (animatedNode instanceof ValueAnimatedNode) {
                AnimationDriver animationDriver = this.activeAnimations.get(i10);
                if (animationDriver != null) {
                    animationDriver.resetConfig(animationConfig);
                    return;
                }
                String string = animationConfig.getString("type");
                if (string != null) {
                    int hashCode = string.hashCode();
                    if (hashCode != -1266514778) {
                        if (hashCode != -895679987) {
                            if (hashCode == 95459258 && string.equals("decay")) {
                                frameBasedAnimationDriver = new DecayAnimation(animationConfig);
                                frameBasedAnimationDriver.f10909id = i10;
                                frameBasedAnimationDriver.endCallback = callback;
                                frameBasedAnimationDriver.animatedValue = (ValueAnimatedNode) animatedNode;
                                this.activeAnimations.put(i10, frameBasedAnimationDriver);
                                return;
                            }
                        } else if (string.equals("spring")) {
                            frameBasedAnimationDriver = new SpringAnimation(animationConfig);
                            frameBasedAnimationDriver.f10909id = i10;
                            frameBasedAnimationDriver.endCallback = callback;
                            frameBasedAnimationDriver.animatedValue = (ValueAnimatedNode) animatedNode;
                            this.activeAnimations.put(i10, frameBasedAnimationDriver);
                            return;
                        }
                    } else if (string.equals("frames")) {
                        frameBasedAnimationDriver = new FrameBasedAnimationDriver(animationConfig);
                        frameBasedAnimationDriver.f10909id = i10;
                        frameBasedAnimationDriver.endCallback = callback;
                        frameBasedAnimationDriver.animatedValue = (ValueAnimatedNode) animatedNode;
                        this.activeAnimations.put(i10, frameBasedAnimationDriver);
                        return;
                    }
                }
                throw new JSApplicationIllegalArgumentException("startAnimatingNode: Unsupported animation type [" + i11 + "]: " + string);
            }
            String name = ValueAnimatedNode.class.getName();
            throw new JSApplicationIllegalArgumentException("startAnimatingNode: Animated node [" + i11 + "] should be of type " + name);
        }
        throw new JSApplicationIllegalArgumentException("startAnimatingNode: Animated node [" + i11 + "] does not exist");
    }

    public final void startListeningToAnimatedNodeValue(int i10, AnimatedNodeValueListener animatedNodeValueListener) {
        AnimatedNode animatedNode = this.animatedNodes.get(i10);
        if (animatedNode != null && (animatedNode instanceof ValueAnimatedNode)) {
            ((ValueAnimatedNode) animatedNode).setValueListener(animatedNodeValueListener);
            return;
        }
        throw new JSApplicationIllegalArgumentException("startListeningToAnimatedNodeValue: Animated node [" + i10 + "] does not exist, or is not a 'value' node");
    }

    public final void stopAnimation(int i10) {
        WritableArray writableArray;
        ReactApplicationContext reactApplicationContext;
        int size = this.activeAnimations.size();
        int i11 = 0;
        while (true) {
            writableArray = null;
            if (i11 >= size) {
                break;
            }
            AnimationDriver valueAt = this.activeAnimations.valueAt(i11);
            if (valueAt.f10909id == i10) {
                if (valueAt.endCallback != null) {
                    WritableMap createMap = Arguments.createMap();
                    Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                    ReadableMapBuilder readableMapBuilder = new ReadableMapBuilder(createMap);
                    readableMapBuilder.put("finished", false);
                    ValueAnimatedNode valueAnimatedNode = valueAt.animatedValue;
                    if (valueAnimatedNode != null) {
                        readableMapBuilder.put("value", valueAnimatedNode.nodeValue);
                        ValueAnimatedNode valueAnimatedNode2 = valueAt.animatedValue;
                        if (valueAnimatedNode2 != null) {
                            readableMapBuilder.put("offset", valueAnimatedNode2.offset);
                            Callback callback = valueAt.endCallback;
                            if (callback != null) {
                                callback.invoke(createMap);
                            } else {
                                throw new IllegalStateException("Required value was null.");
                            }
                        } else {
                            throw new IllegalStateException("Required value was null.");
                        }
                    } else {
                        throw new IllegalStateException("Required value was null.");
                    }
                } else if (this.reactApplicationContext != null) {
                    WritableMap createMap2 = Arguments.createMap();
                    Intrinsics.checkNotNullExpressionValue(createMap2, "createMap(...)");
                    ReadableMapBuilder readableMapBuilder2 = new ReadableMapBuilder(createMap2);
                    readableMapBuilder2.put("animationId", valueAt.f10909id);
                    readableMapBuilder2.put("finished", false);
                    ValueAnimatedNode valueAnimatedNode3 = valueAt.animatedValue;
                    if (valueAnimatedNode3 != null) {
                        readableMapBuilder2.put("value", valueAnimatedNode3.nodeValue);
                        ValueAnimatedNode valueAnimatedNode4 = valueAt.animatedValue;
                        if (valueAnimatedNode4 != null) {
                            readableMapBuilder2.put("offset", valueAnimatedNode4.offset);
                            writableArray = Arguments.createArray();
                            Intrinsics.checkNotNullExpressionValue(writableArray, "createArray(...)");
                            writableArray.pushMap(createMap2);
                        } else {
                            throw new IllegalStateException("Required value was null.");
                        }
                    } else {
                        throw new IllegalStateException("Required value was null.");
                    }
                }
                this.activeAnimations.removeAt(i11);
            } else {
                i11++;
            }
        }
        if (writableArray != null && (reactApplicationContext = this.reactApplicationContext) != null) {
            reactApplicationContext.emitDeviceEvent("onNativeAnimatedModuleAnimationFinished", writableArray);
        }
    }

    public final void stopListeningToAnimatedNodeValue(int i10) {
        AnimatedNode animatedNode = this.animatedNodes.get(i10);
        if (animatedNode != null && (animatedNode instanceof ValueAnimatedNode)) {
            ((ValueAnimatedNode) animatedNode).setValueListener(null);
            return;
        }
        throw new JSApplicationIllegalArgumentException("startListeningToAnimatedNodeValue: Animated node [" + i10 + "] does not exist, or is not a 'value' node");
    }

    public final void updateAnimatedNodeConfig(int i10, ReadableMap readableMap) {
        AnimatedNode animatedNode = this.animatedNodes.get(i10);
        if (animatedNode != null) {
            if (animatedNode instanceof AnimatedNodeWithUpdateableConfig) {
                stopAnimationsForNode(animatedNode);
                ((AnimatedNodeWithUpdateableConfig) animatedNode).onUpdateConfig(readableMap);
                this.updatedNodes.put(i10, animatedNode);
                return;
            }
            return;
        }
        throw new JSApplicationIllegalArgumentException("updateAnimatedNode: Animated node [" + i10 + "] does not exist");
    }
}
