package app.rive.runtime.kotlin.core;

import app.rive.runtime.kotlin.core.ViewModelInstance;
import app.rive.runtime.kotlin.core.errors.RiveEventException;
import app.rive.runtime.kotlin.core.errors.StateMachineInputException;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.locks.ReentrantLock;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.m0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import kotlin.ranges.d;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000v\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0007\n\u0002\b\b\n\u0002\u0010\u0002\n\u0002\b\f\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0007\u0018\u00002\u00020\u00012\u00020\u0002B\u0015\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0006¢\u0006\u0002\u0010\u0007J\u000e\u0010*\u001a\u00020+2\u0006\u0010,\u001a\u00020-J\u0010\u0010.\u001a\u00020\u00152\u0006\u0010/\u001a\u00020\u0015H\u0002J\u0010\u00100\u001a\u00020!2\u0006\u00101\u001a\u00020!H\u0002J\u0019\u00102\u001a\u00020+2\u0006\u00103\u001a\u00020\u00042\u0006\u00104\u001a\u00020-H\u0082 J\u0011\u00105\u001a\u0002062\u0006\u00103\u001a\u00020\u0004H\u0096 J\u0011\u00107\u001a\u00020\u000e2\u0006\u00108\u001a\u00020\u0004H\u0082 J\u0011\u00109\u001a\u00020\u000e2\u0006\u00108\u001a\u00020\u0004H\u0082 J\u0011\u0010:\u001a\u00020\u00122\u0006\u00108\u001a\u00020\u0004H\u0082 J)\u0010;\u001a\u0002062\u0006\u00108\u001a\u00020\u00042\u0006\u0010<\u001a\u00020\u000e2\u0006\u0010=\u001a\u00020-2\u0006\u0010>\u001a\u00020-H\u0082 J)\u0010?\u001a\u0002062\u0006\u00108\u001a\u00020\u00042\u0006\u0010<\u001a\u00020\u000e2\u0006\u0010=\u001a\u00020-2\u0006\u0010>\u001a\u00020-H\u0082 J)\u0010@\u001a\u0002062\u0006\u00108\u001a\u00020\u00042\u0006\u0010<\u001a\u00020\u000e2\u0006\u0010=\u001a\u00020-2\u0006\u0010>\u001a\u00020-H\u0082 J)\u0010A\u001a\u0002062\u0006\u00108\u001a\u00020\u00042\u0006\u0010<\u001a\u00020\u000e2\u0006\u0010=\u001a\u00020-2\u0006\u0010>\u001a\u00020-H\u0082 J\u0019\u0010B\u001a\u00020C2\u0006\u00108\u001a\u00020\u00042\u0006\u0010D\u001a\u00020\u000eH\u0082 J\u0011\u0010E\u001a\u00020\u000e2\u0006\u00108\u001a\u00020\u0004H\u0082 J\u0019\u0010F\u001a\u00020\u00042\u0006\u00108\u001a\u00020\u00042\u0006\u0010D\u001a\u00020\u000eH\u0082 J\u0019\u0010G\u001a\u0002062\u0006\u00108\u001a\u00020\u00042\u0006\u0010H\u001a\u00020\u0004H\u0082 J\u0019\u0010I\u001a\u00020\u00042\u0006\u00108\u001a\u00020\u00042\u0006\u0010D\u001a\u00020\u000eH\u0082 J\u0011\u0010J\u001a\u00020\u000e2\u0006\u00108\u001a\u00020\u0004H\u0082 J\u000e\u0010K\u001a\u00020\n2\u0006\u0010D\u001a\u00020\u000eJ\u000e\u0010/\u001a\u00020\u00152\u0006\u0010D\u001a\u00020\u000eJ\u000e\u0010/\u001a\u00020\u00152\u0006\u0010\u0019\u001a\u00020\u0012J\u001e\u0010L\u001a\u0002062\u0006\u0010<\u001a\u00020\u000e2\u0006\u0010=\u001a\u00020-2\u0006\u0010>\u001a\u00020-J\u001e\u0010M\u001a\u0002062\u0006\u0010<\u001a\u00020\u000e2\u0006\u0010=\u001a\u00020-2\u0006\u0010>\u001a\u00020-J\u001e\u0010N\u001a\u0002062\u0006\u0010<\u001a\u00020\u000e2\u0006\u0010=\u001a\u00020-2\u0006\u0010>\u001a\u00020-J\u001e\u0010O\u001a\u0002062\u0006\u0010<\u001a\u00020\u000e2\u0006\u0010=\u001a\u00020-2\u0006\u0010>\u001a\u00020-J\u000e\u0010P\u001a\u00020$2\u0006\u0010Q\u001a\u00020RJ\u000e\u0010S\u001a\u00020!2\u0006\u0010D\u001a\u00020\u000eR\u0017\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t8F¢\u0006\u0006\u001a\u0004\b\u000b\u0010\fR\u0011\u0010\r\u001a\u00020\u000e8F¢\u0006\u0006\u001a\u0004\b\u000f\u0010\u0010R\u0017\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00120\t8F¢\u0006\u0006\u001a\u0004\b\u0013\u0010\fR\u0017\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00150\t8F¢\u0006\u0006\u001a\u0004\b\u0016\u0010\fR\u0011\u0010\u0017\u001a\u00020\u000e8F¢\u0006\u0006\u001a\u0004\b\u0018\u0010\u0010R\u000e\u0010\u0005\u001a\u00020\u0006X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0019\u001a\u00020\u00128VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u001a\u0010\u001bR\u0014\u0010\u001c\u001a\u00020\u000e8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u001d\u0010\u0010R\u0014\u0010\u001e\u001a\u00020\u000e8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u001f\u0010\u0010R\u0017\u0010 \u001a\b\u0012\u0004\u0012\u00020!0\t8F¢\u0006\u0006\u001a\u0004\b\"\u0010\fR(\u0010%\u001a\u0004\u0018\u00010$2\b\u0010#\u001a\u0004\u0018\u00010$@FX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b&\u0010'\"\u0004\b(\u0010)¨\u0006T"}, d2 = {"Lapp/rive/runtime/kotlin/core/StateMachineInstance;", "Lapp/rive/runtime/kotlin/core/PlayableInstance;", "Lapp/rive/runtime/kotlin/core/NativeObject;", "unsafeCppPointer", "", "lock", "Ljava/util/concurrent/locks/ReentrantLock;", "(JLjava/util/concurrent/locks/ReentrantLock;)V", "eventsReported", "", "Lapp/rive/runtime/kotlin/core/RiveEvent;", "getEventsReported", "()Ljava/util/List;", "inputCount", "", "getInputCount", "()I", "inputNames", "", "getInputNames", "inputs", "Lapp/rive/runtime/kotlin/core/SMIInput;", "getInputs", "layerCount", "getLayerCount", StackTraceHelper.NAME_KEY, "getName", "()Ljava/lang/String;", "reportedEventCount", "getReportedEventCount", "stateChangedCount", "getStateChangedCount", "statesChanged", "Lapp/rive/runtime/kotlin/core/LayerState;", "getStatesChanged", "value", "Lapp/rive/runtime/kotlin/core/ViewModelInstance;", "viewModelInstance", "getViewModelInstance", "()Lapp/rive/runtime/kotlin/core/ViewModelInstance;", "setViewModelInstance", "(Lapp/rive/runtime/kotlin/core/ViewModelInstance;)V", "advance", "", "elapsed", "", "convertInput", "input", "convertLayerState", "state", "cppAdvance", "pointer", "elapsedTime", "cppDelete", "", "cppInputCount", "cppPointer", "cppLayerCount", "cppName", "cppPointerDown", "pointerID", "x", "y", "cppPointerExit", "cppPointerMove", "cppPointerUp", "cppReportedEventAt", "Lapp/rive/runtime/kotlin/core/RiveEventReport;", "index", "cppReportedEventCount", "cppSMIInputByIndex", "cppSetViewModelInstance", "viewModel", "cppStateChangedByIndex", "cppStateChangedCount", "eventAt", "pointerDown", "pointerExit", "pointerMove", "pointerUp", "receiveViewModelInstance", "transfer", "Lapp/rive/runtime/kotlin/core/ViewModelInstance$Transfer;", "stateChanged", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nStateMachineInstance.kt\nKotlin\n*S Kotlin\n*F\n+ 1 StateMachineInstance.kt\napp/rive/runtime/kotlin/core/StateMachineInstance\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,199:1\n1#2:200\n1557#3:201\n1628#3,3:202\n1557#3:205\n1628#3,3:206\n1557#3:209\n1628#3,3:210\n1557#3:213\n1628#3,3:214\n*S KotlinDebug\n*F\n+ 1 StateMachineInstance.kt\napp/rive/runtime/kotlin/core/StateMachineInstance\n*L\n144#1:201\n144#1:202,3\n148#1:205\n148#1:206,3\n193#1:209\n193#1:210,3\n197#1:213\n197#1:214,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class StateMachineInstance extends NativeObject implements PlayableInstance {
    public static final int $stable = 8;
    @NotNull
    private final ReentrantLock lock;
    private ViewModelInstance viewModelInstance;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public StateMachineInstance(long j10, @NotNull ReentrantLock lock) {
        super(j10);
        Intrinsics.checkNotNullParameter(lock, "lock");
        this.lock = lock;
    }

    private final SMIInput convertInput(SMIInput sMIInput) {
        if (sMIInput.isBoolean()) {
            return new SMIBoolean(sMIInput.getCppPointer());
        }
        if (sMIInput.isTrigger()) {
            return new SMITrigger(sMIInput.getCppPointer());
        }
        if (sMIInput.isNumber()) {
            return new SMINumber(sMIInput.getCppPointer());
        }
        String name = sMIInput.getName();
        throw new StateMachineInputException("Unknown State Machine Input Instance for " + name + ".");
    }

    private final LayerState convertLayerState(LayerState layerState) {
        if (layerState.isAnimationState()) {
            return new AnimationState(layerState.getCppPointer());
        }
        if (layerState.isAnyState()) {
            return new AnyState(layerState.getCppPointer());
        }
        if (layerState.isEntryState()) {
            return new EntryState(layerState.getCppPointer());
        }
        if (layerState.isExitState()) {
            return new ExitState(layerState.getCppPointer());
        }
        if (layerState.isBlendState()) {
            return new BlendState(layerState.getCppPointer());
        }
        throw new StateMachineInputException("Unknown Layer State for " + layerState + ".");
    }

    private final native boolean cppAdvance(long j10, float f10);

    private final native int cppInputCount(long j10);

    private final native int cppLayerCount(long j10);

    private final native String cppName(long j10);

    private final native void cppPointerDown(long j10, int i10, float f10, float f11);

    private final native void cppPointerExit(long j10, int i10, float f10, float f11);

    private final native void cppPointerMove(long j10, int i10, float f10, float f11);

    private final native void cppPointerUp(long j10, int i10, float f10, float f11);

    private final native RiveEventReport cppReportedEventAt(long j10, int i10);

    private final native int cppReportedEventCount(long j10);

    private final native long cppSMIInputByIndex(long j10, int i10);

    private final native void cppSetViewModelInstance(long j10, long j11);

    private final native long cppStateChangedByIndex(long j10, int i10);

    private final native int cppStateChangedCount(long j10);

    private final int getReportedEventCount() {
        return cppReportedEventCount(getCppPointer());
    }

    private final int getStateChangedCount() {
        return cppStateChangedCount(getCppPointer());
    }

    public final boolean advance(float f10) {
        boolean cppAdvance;
        synchronized (this.lock) {
            cppAdvance = cppAdvance(getCppPointer(), f10);
        }
        return cppAdvance;
    }

    @Override // app.rive.runtime.kotlin.core.NativeObject
    public native void cppDelete(long j10);

    @NotNull
    public final RiveEvent eventAt(int i10) {
        RiveEventReport cppReportedEventAt = cppReportedEventAt(getCppPointer(), i10);
        if (cppReportedEventAt.getUnsafeCppPointer() != 0) {
            return cppReportedEventAt.getEvent();
        }
        throw new RiveEventException("No Rive Event found at index " + i10 + ".");
    }

    @NotNull
    public final List<RiveEvent> getEventsReported() {
        IntRange u10 = d.u(0, getReportedEventCount());
        ArrayList arrayList = new ArrayList(CollectionsKt.w(u10, 10));
        Iterator it = u10.iterator();
        while (it.hasNext()) {
            arrayList.add(eventAt(((m0) it).nextInt()));
        }
        return arrayList;
    }

    public final int getInputCount() {
        return cppInputCount(getCppPointer());
    }

    @NotNull
    public final List<String> getInputNames() {
        IntRange u10 = d.u(0, getInputCount());
        ArrayList arrayList = new ArrayList(CollectionsKt.w(u10, 10));
        Iterator it = u10.iterator();
        while (it.hasNext()) {
            arrayList.add(input(((m0) it).nextInt()).getName());
        }
        return arrayList;
    }

    @NotNull
    public final List<SMIInput> getInputs() {
        IntRange u10 = d.u(0, getInputCount());
        ArrayList arrayList = new ArrayList(CollectionsKt.w(u10, 10));
        Iterator it = u10.iterator();
        while (it.hasNext()) {
            arrayList.add(input(((m0) it).nextInt()));
        }
        return arrayList;
    }

    public final int getLayerCount() {
        return cppLayerCount(getCppPointer());
    }

    @Override // app.rive.runtime.kotlin.core.PlayableInstance
    @NotNull
    public String getName() {
        return cppName(getCppPointer());
    }

    @NotNull
    public final List<LayerState> getStatesChanged() {
        IntRange u10 = d.u(0, getStateChangedCount());
        ArrayList arrayList = new ArrayList(CollectionsKt.w(u10, 10));
        Iterator it = u10.iterator();
        while (it.hasNext()) {
            arrayList.add(stateChanged(((m0) it).nextInt()));
        }
        return arrayList;
    }

    public final ViewModelInstance getViewModelInstance() {
        return this.viewModelInstance;
    }

    @NotNull
    public final SMIInput input(int i10) {
        long cppSMIInputByIndex = cppSMIInputByIndex(getCppPointer(), i10);
        if (cppSMIInputByIndex != 0) {
            return convertInput(new SMIInput(cppSMIInputByIndex));
        }
        throw new StateMachineInputException("No StateMachineInput found at index " + i10 + ".");
    }

    public final void pointerDown(int i10, float f10, float f11) {
        synchronized (this.lock) {
            cppPointerDown(getCppPointer(), i10, f10, f11);
            Unit unit = Unit.f32056a;
        }
    }

    public final void pointerExit(int i10, float f10, float f11) {
        synchronized (this.lock) {
            cppPointerExit(getCppPointer(), i10, f10, f11);
            Unit unit = Unit.f32056a;
        }
    }

    public final void pointerMove(int i10, float f10, float f11) {
        synchronized (this.lock) {
            cppPointerMove(getCppPointer(), i10, f10, f11);
            Unit unit = Unit.f32056a;
        }
    }

    public final void pointerUp(int i10, float f10, float f11) {
        synchronized (this.lock) {
            cppPointerUp(getCppPointer(), i10, f10, f11);
            Unit unit = Unit.f32056a;
        }
    }

    @NotNull
    public final ViewModelInstance receiveViewModelInstance(@NotNull ViewModelInstance.Transfer transfer) {
        Intrinsics.checkNotNullParameter(transfer, "transfer");
        ViewModelInstance end$kotlin_release = transfer.end$kotlin_release();
        getDependencies().add(end$kotlin_release);
        setViewModelInstance(end$kotlin_release);
        return end$kotlin_release;
    }

    public final void setViewModelInstance(ViewModelInstance viewModelInstance) {
        if (viewModelInstance != null) {
            cppSetViewModelInstance(getCppPointer(), viewModelInstance.getCppPointer());
        }
        this.viewModelInstance = viewModelInstance;
    }

    @NotNull
    public final LayerState stateChanged(int i10) {
        long cppStateChangedByIndex = cppStateChangedByIndex(getCppPointer(), i10);
        if (cppStateChangedByIndex != 0) {
            return convertLayerState(new LayerState(cppStateChangedByIndex));
        }
        throw new StateMachineInputException("No LayerState found at index " + i10 + ".");
    }

    @NotNull
    public final SMIInput input(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        int inputCount = getInputCount();
        for (int i10 = 0; i10 < inputCount; i10++) {
            SMIInput input = input(i10);
            if (Intrinsics.areEqual(input.getName(), name)) {
                return input;
            }
        }
        throw new StateMachineInputException("No StateMachineInput found with name " + name + ".");
    }
}
