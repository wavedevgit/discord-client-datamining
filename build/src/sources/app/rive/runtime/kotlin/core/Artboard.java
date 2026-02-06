package app.rive.runtime.kotlin.core;

import android.graphics.RectF;
import app.rive.runtime.kotlin.core.ViewModelInstance;
import app.rive.runtime.kotlin.core.errors.AnimationException;
import app.rive.runtime.kotlin.core.errors.StateMachineException;
import app.rive.runtime.kotlin.core.errors.StateMachineInputException;
import app.rive.runtime.kotlin.core.errors.TextValueRunException;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.locks.ReentrantLock;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.m0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import kotlin.ranges.d;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u008e\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\f\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u001d\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\b\u0017\u0018\u00002\u00020\u0001B!\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\u0002\u0010\bJ\u0010\u0010:\u001a\u00020;2\u0006\u0010<\u001a\u00020!H\u0016J\u0010\u0010=\u001a\u00020\u00192\u0006\u0010>\u001a\u00020\nH\u0016J\u0010\u0010=\u001a\u00020\u00192\u0006\u0010'\u001a\u00020\u000fH\u0016J\u0010\u0010?\u001a\u00020@2\u0006\u0010A\u001a\u00020@H\u0012J\u0019\u0010B\u001a\u00020;2\u0006\u0010C\u001a\u00020\u00032\u0006\u0010<\u001a\u00020!H\u0092 J\u0019\u0010D\u001a\u00020\u00032\u0006\u0010C\u001a\u00020\u00032\u0006\u0010>\u001a\u00020\nH\u0092 J\u0019\u0010E\u001a\u00020\u00032\u0006\u0010C\u001a\u00020\u00032\u0006\u0010'\u001a\u00020\u000fH\u0092 J\u0011\u0010F\u001a\u00020\n2\u0006\u0010C\u001a\u00020\u0003H\u0092 J\u0019\u0010G\u001a\u00020\u000f2\u0006\u0010C\u001a\u00020\u00032\u0006\u0010>\u001a\u00020\nH\u0092 J\u0011\u0010H\u001a\u00020\u00132\u0006\u0010C\u001a\u00020\u0003H\u0092 J\u0011\u0010I\u001a\u00020J2\u0006\u0010K\u001a\u00020\u0003H\u0096 J\u0019\u0010L\u001a\u00020J2\u0006\u0010C\u001a\u00020\u00032\u0006\u0010M\u001a\u00020\u0003H\u0092 J1\u0010N\u001a\u00020J2\u0006\u0010C\u001a\u00020\u00032\u0006\u0010M\u001a\u00020\u00032\u0006\u0010O\u001a\u00020P2\u0006\u0010Q\u001a\u00020R2\u0006\u0010S\u001a\u00020!H\u0095 J\u0019\u0010T\u001a\u00020\u00032\u0006\u0010C\u001a\u00020\u00032\u0006\u0010'\u001a\u00020\u000fH\u0092 J!\u0010U\u001a\u00020\u00032\u0006\u0010C\u001a\u00020\u00032\u0006\u0010'\u001a\u00020\u000f2\u0006\u0010V\u001a\u00020\u000fH\u0092 J\u001b\u0010W\u001a\u0004\u0018\u00010\u000f2\u0006\u0010C\u001a\u00020\u00032\u0006\u0010'\u001a\u00020\u000fH\u0092 J#\u0010X\u001a\u0004\u0018\u00010\u000f2\u0006\u0010C\u001a\u00020\u00032\u0006\u0010'\u001a\u00020\u000f2\u0006\u0010V\u001a\u00020\u000fH\u0092 J\u0011\u0010Y\u001a\u00020!2\u0006\u0010C\u001a\u00020\u0003H\u0092 J\u0011\u0010Z\u001a\u00020!2\u0006\u0010C\u001a\u00020\u0003H\u0092 J\u0011\u0010[\u001a\u00020!2\u0006\u0010C\u001a\u00020\u0003H\u0092 J!\u0010\\\u001a\u00020\u00032\u0006\u0010C\u001a\u00020\u00032\u0006\u0010'\u001a\u00020\u000f2\u0006\u0010V\u001a\u00020\u000fH\u0092 J\u0011\u0010]\u001a\u00020\u000f2\u0006\u0010C\u001a\u00020\u0003H\u0092 J\u0011\u0010^\u001a\u00020J2\u0006\u0010C\u001a\u00020\u0003H\u0092 J\u0019\u0010_\u001a\u00020J2\u0006\u0010C\u001a\u00020\u00032\u0006\u0010\"\u001a\u00020!H\u0092 J\u0019\u0010`\u001a\u00020J2\u0006\u0010C\u001a\u00020\u00032\u0006\u00107\u001a\u00020!H\u0092 J!\u0010a\u001a\u00020;2\u0006\u0010C\u001a\u00020\u00032\u0006\u0010'\u001a\u00020\u000f2\u0006\u0010b\u001a\u00020\u000fH\u0092 J)\u0010c\u001a\u00020;2\u0006\u0010C\u001a\u00020\u00032\u0006\u0010'\u001a\u00020\u000f2\u0006\u0010b\u001a\u00020\u000f2\u0006\u0010V\u001a\u00020\u000fH\u0092 J\u0019\u0010d\u001a\u00020J2\u0006\u0010C\u001a\u00020\u00032\u0006\u0010e\u001a\u00020\u0003H\u0092 J\u0019\u0010f\u001a\u00020J2\u0006\u0010C\u001a\u00020\u00032\u0006\u00104\u001a\u00020!H\u0092 J\u0019\u0010g\u001a\u00020\u00032\u0006\u0010C\u001a\u00020\u00032\u0006\u0010>\u001a\u00020\nH\u0092 J\u0019\u0010h\u001a\u00020\u00032\u0006\u0010C\u001a\u00020\u00032\u0006\u0010'\u001a\u00020\u000fH\u0092 J\u0011\u0010i\u001a\u00020\n2\u0006\u0010C\u001a\u00020\u0003H\u0092 J\u0019\u0010j\u001a\u00020\u000f2\u0006\u0010C\u001a\u00020\u00032\u0006\u0010>\u001a\u00020\nH\u0092 J\u0010\u0010k\u001a\u00020J2\u0006\u0010l\u001a\u00020\u0003H\u0017J*\u0010k\u001a\u00020J2\u0006\u0010l\u001a\u00020\u00032\u0006\u0010O\u001a\u00020P2\u0006\u0010Q\u001a\u00020R2\b\b\u0002\u0010S\u001a\u00020!H\u0017J\u0012\u0010m\u001a\u0004\u0018\u00010\u000f2\u0006\u0010'\u001a\u00020\u000fH\u0016J\u001a\u0010m\u001a\u0004\u0018\u00010\u000f2\u0006\u0010'\u001a\u00020\u000f2\u0006\u0010V\u001a\u00020\u000fH\u0016J\u0018\u0010A\u001a\u00020@2\u0006\u0010'\u001a\u00020\u000f2\u0006\u0010V\u001a\u00020\u000fH\u0016J\u0010\u0010n\u001a\u00020.2\u0006\u0010o\u001a\u00020pH\u0016J\b\u0010q\u001a\u00020\nH\u0016J\b\u0010r\u001a\u00020JH\u0016J\u0018\u0010s\u001a\u00020J2\u0006\u0010'\u001a\u00020\u000f2\u0006\u0010t\u001a\u00020\u000fH\u0016J \u0010s\u001a\u00020J2\u0006\u0010'\u001a\u00020\u000f2\u0006\u0010t\u001a\u00020\u000f2\u0006\u0010V\u001a\u00020\u000fH\u0016J\u0010\u0010u\u001a\u00020\u001d2\u0006\u0010>\u001a\u00020\nH\u0016J\u0010\u0010u\u001a\u00020\u001d2\u0006\u0010'\u001a\u00020\u000fH\u0016J\u0010\u0010v\u001a\u00020w2\u0006\u0010'\u001a\u00020\u000fH\u0016J\u0018\u0010v\u001a\u00020w2\u0006\u0010'\u001a\u00020\u000f2\u0006\u0010V\u001a\u00020\u000fH\u0016R\u0014\u0010\t\u001a\u00020\n8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u000b\u0010\fR\u001a\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u000f0\u000e8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0010\u0010\u0011R\u0014\u0010\u0012\u001a\u00020\u00138VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0014\u0010\u0015R\u0016\u0010\u0006\u001a\u0004\u0018\u00010\u0007X\u0090\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0014\u0010\u0018\u001a\u00020\u00198VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u001a\u0010\u001bR\u0014\u0010\u001c\u001a\u00020\u001d8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u001e\u0010\u001fR$\u0010\"\u001a\u00020!2\u0006\u0010 \u001a\u00020!8V@VX\u0096\u000e¢\u0006\f\u001a\u0004\b#\u0010$\"\u0004\b%\u0010&R\u000e\u0010\u0004\u001a\u00020\u0005X\u0092\u0004¢\u0006\u0002\n\u0000R\u0014\u0010'\u001a\u00020\u000f8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b(\u0010)R\u0014\u0010*\u001a\u00020\n8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b+\u0010\fR\u001a\u0010,\u001a\b\u0012\u0004\u0012\u00020\u000f0\u000e8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b-\u0010\u0011R(\u0010/\u001a\u0004\u0018\u00010.2\b\u0010 \u001a\u0004\u0018\u00010.@VX\u0096\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b0\u00101\"\u0004\b2\u00103R$\u00104\u001a\u00020!2\u0006\u0010 \u001a\u00020!8V@PX\u0096\u000e¢\u0006\f\u001a\u0004\b5\u0010$\"\u0004\b6\u0010&R$\u00107\u001a\u00020!2\u0006\u0010 \u001a\u00020!8V@VX\u0096\u000e¢\u0006\f\u001a\u0004\b8\u0010$\"\u0004\b9\u0010&¨\u0006x"}, d2 = {"Lapp/rive/runtime/kotlin/core/Artboard;", "Lapp/rive/runtime/kotlin/core/NativeObject;", "unsafeCppPointer", "", "lock", "Ljava/util/concurrent/locks/ReentrantLock;", "file", "Lapp/rive/runtime/kotlin/core/File;", "(JLjava/util/concurrent/locks/ReentrantLock;Lapp/rive/runtime/kotlin/core/File;)V", "animationCount", "", "getAnimationCount", "()I", "animationNames", "", "", "getAnimationNames", "()Ljava/util/List;", "bounds", "Landroid/graphics/RectF;", "getBounds", "()Landroid/graphics/RectF;", "getFile$kotlin_release", "()Lapp/rive/runtime/kotlin/core/File;", "firstAnimation", "Lapp/rive/runtime/kotlin/core/LinearAnimationInstance;", "getFirstAnimation", "()Lapp/rive/runtime/kotlin/core/LinearAnimationInstance;", "firstStateMachine", "Lapp/rive/runtime/kotlin/core/StateMachineInstance;", "getFirstStateMachine", "()Lapp/rive/runtime/kotlin/core/StateMachineInstance;", "value", "", "height", "getHeight", "()F", "setHeight", "(F)V", StackTraceHelper.NAME_KEY, "getName", "()Ljava/lang/String;", "stateMachineCount", "getStateMachineCount", "stateMachineNames", "getStateMachineNames", "Lapp/rive/runtime/kotlin/core/ViewModelInstance;", "viewModelInstance", "getViewModelInstance", "()Lapp/rive/runtime/kotlin/core/ViewModelInstance;", "setViewModelInstance", "(Lapp/rive/runtime/kotlin/core/ViewModelInstance;)V", "volume", "getVolume", "setVolume$kotlin_release", "width", "getWidth", "setWidth", "advance", "", "elapsedTime", "animation", "index", "convertInput", "Lapp/rive/runtime/kotlin/core/SMIInput;", "input", "cppAdvance", "cppPointer", "cppAnimationByIndex", "cppAnimationByName", "cppAnimationCount", "cppAnimationNameByIndex", "cppBounds", "cppDelete", "", "pointer", "cppDraw", "rendererPointer", "cppDrawAligned", "fit", "Lapp/rive/runtime/kotlin/core/Fit;", "alignment", "Lapp/rive/runtime/kotlin/core/Alignment;", "scaleFactor", "cppFindTextValueRun", "cppFindTextValueRunAtPath", "path", "cppFindValueOfTextValueRun", "cppFindValueOfTextValueRunAtPath", "cppGetArtboardHeight", "cppGetArtboardWidth", "cppGetVolume", "cppInputByNameAtPath", "cppName", "cppResetArtboardSize", "cppSetArtboardHeight", "cppSetArtboardWidth", "cppSetValueOfTextValueRun", "newText", "cppSetValueOfTextValueRunAtPath", "cppSetViewModelInstance", "instancePointer", "cppSetVolume", "cppStateMachineByIndex", "cppStateMachineByName", "cppStateMachineCount", "cppStateMachineNameByIndex", "draw", "rendererAddress", "getTextRunValue", "receiveViewModelInstance", "transfer", "Lapp/rive/runtime/kotlin/core/ViewModelInstance$Transfer;", "release", "resetArtboardSize", "setTextRunValue", "textValue", "stateMachine", "textRun", "Lapp/rive/runtime/kotlin/core/RiveTextValueRun;", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nArtboard.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Artboard.kt\napp/rive/runtime/kotlin/core/Artboard\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,407:1\n1557#2:408\n1628#2,3:409\n1557#2:413\n1628#2,3:414\n1557#2:417\n1628#2,3:418\n1#3:412\n*S KotlinDebug\n*F\n+ 1 Artboard.kt\napp/rive/runtime/kotlin/core/Artboard\n*L\n146#1:408\n146#1:409,3\n393#1:413\n393#1:414,3\n397#1:417\n397#1:418,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class Artboard extends NativeObject {
    public static final int $stable = 8;
    private final File file;
    @NotNull
    private final ReentrantLock lock;
    private ViewModelInstance viewModelInstance;

    public /* synthetic */ Artboard(long j10, ReentrantLock reentrantLock, File file, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, reentrantLock, (i10 & 4) != 0 ? null : file);
    }

    private SMIInput convertInput(SMIInput sMIInput) {
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

    private native boolean cppAdvance(long j10, float f10);

    private native long cppAnimationByIndex(long j10, int i10);

    private native long cppAnimationByName(long j10, String str);

    private native int cppAnimationCount(long j10);

    private native String cppAnimationNameByIndex(long j10, int i10);

    private native RectF cppBounds(long j10);

    private native void cppDraw(long j10, long j11);

    private native long cppFindTextValueRun(long j10, String str);

    private native long cppFindTextValueRunAtPath(long j10, String str, String str2);

    private native String cppFindValueOfTextValueRun(long j10, String str);

    private native String cppFindValueOfTextValueRunAtPath(long j10, String str, String str2);

    private native float cppGetArtboardHeight(long j10);

    private native float cppGetArtboardWidth(long j10);

    private native float cppGetVolume(long j10);

    private native long cppInputByNameAtPath(long j10, String str, String str2);

    private native String cppName(long j10);

    private native void cppResetArtboardSize(long j10);

    private native void cppSetArtboardHeight(long j10, float f10);

    private native void cppSetArtboardWidth(long j10, float f10);

    private native boolean cppSetValueOfTextValueRun(long j10, String str, String str2);

    private native boolean cppSetValueOfTextValueRunAtPath(long j10, String str, String str2, String str3);

    private native void cppSetViewModelInstance(long j10, long j11);

    private native void cppSetVolume(long j10, float f10);

    private native long cppStateMachineByIndex(long j10, int i10);

    private native long cppStateMachineByName(long j10, String str);

    private native int cppStateMachineCount(long j10);

    private native String cppStateMachineNameByIndex(long j10, int i10);

    public static /* synthetic */ void draw$default(Artboard artboard, long j10, Fit fit, Alignment alignment, float f10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 8) != 0) {
                f10 = 1.0f;
            }
            artboard.draw(j10, fit, alignment, f10);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: draw");
    }

    public boolean advance(float f10) {
        boolean cppAdvance;
        synchronized (this.lock) {
            cppAdvance = cppAdvance(getCppPointer(), f10);
        }
        return cppAdvance;
    }

    @NotNull
    public LinearAnimationInstance animation(int i10) {
        long cppAnimationByIndex = cppAnimationByIndex(getCppPointer(), i10);
        if (cppAnimationByIndex != 0) {
            LinearAnimationInstance linearAnimationInstance = new LinearAnimationInstance(cppAnimationByIndex, this.lock, 0.0f, 4, null);
            getDependencies().add(linearAnimationInstance);
            return linearAnimationInstance;
        }
        throw new AnimationException("No Animation found at index " + i10 + ".");
    }

    @Override // app.rive.runtime.kotlin.core.NativeObject
    public native void cppDelete(long j10);

    protected native void cppDrawAligned(long j10, long j11, @NotNull Fit fit, @NotNull Alignment alignment, float f10);

    public void draw(long j10) {
        synchronized (this.lock) {
            if (getHasCppObject()) {
                cppDraw(getCppPointer(), j10);
                Unit unit = Unit.f32008a;
            }
        }
    }

    public int getAnimationCount() {
        return cppAnimationCount(getCppPointer());
    }

    @NotNull
    public List<String> getAnimationNames() {
        IntRange u10 = d.u(0, getAnimationCount());
        ArrayList arrayList = new ArrayList(CollectionsKt.w(u10, 10));
        Iterator it = u10.iterator();
        while (it.hasNext()) {
            arrayList.add(cppAnimationNameByIndex(getCppPointer(), ((m0) it).nextInt()));
        }
        return arrayList;
    }

    @NotNull
    public RectF getBounds() {
        return cppBounds(getCppPointer());
    }

    public File getFile$kotlin_release() {
        return this.file;
    }

    @NotNull
    public LinearAnimationInstance getFirstAnimation() {
        return animation(0);
    }

    @NotNull
    public StateMachineInstance getFirstStateMachine() {
        return stateMachine(0);
    }

    public float getHeight() {
        return cppGetArtboardHeight(getCppPointer());
    }

    @NotNull
    public String getName() {
        return cppName(getCppPointer());
    }

    public int getStateMachineCount() {
        return cppStateMachineCount(getCppPointer());
    }

    @NotNull
    public List<String> getStateMachineNames() {
        IntRange u10 = d.u(0, getStateMachineCount());
        ArrayList arrayList = new ArrayList(CollectionsKt.w(u10, 10));
        Iterator it = u10.iterator();
        while (it.hasNext()) {
            arrayList.add(cppStateMachineNameByIndex(getCppPointer(), ((m0) it).nextInt()));
        }
        return arrayList;
    }

    public String getTextRunValue(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return cppFindValueOfTextValueRun(getCppPointer(), name);
    }

    public ViewModelInstance getViewModelInstance() {
        return this.viewModelInstance;
    }

    public float getVolume() {
        return cppGetVolume(getCppPointer());
    }

    public float getWidth() {
        return cppGetArtboardWidth(getCppPointer());
    }

    @NotNull
    public SMIInput input(@NotNull String name, @NotNull String path) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(path, "path");
        long cppInputByNameAtPath = cppInputByNameAtPath(getCppPointer(), name, path);
        if (cppInputByNameAtPath != 0) {
            return convertInput(new SMIInput(cppInputByNameAtPath));
        }
        throw new StateMachineInputException("No StateMachineInput found with name \"" + name + "\" in nested artboard " + path + ".");
    }

    @NotNull
    public ViewModelInstance receiveViewModelInstance(@NotNull ViewModelInstance.Transfer transfer) {
        Intrinsics.checkNotNullParameter(transfer, "transfer");
        ViewModelInstance end$kotlin_release = transfer.end$kotlin_release();
        getDependencies().add(end$kotlin_release);
        setViewModelInstance(end$kotlin_release);
        return end$kotlin_release;
    }

    @Override // app.rive.runtime.kotlin.core.NativeObject, app.rive.runtime.kotlin.core.RefCount
    public int release() {
        int release;
        synchronized (this.lock) {
            release = super.release();
        }
        return release;
    }

    public void resetArtboardSize() {
        cppResetArtboardSize(getCppPointer());
    }

    public void setHeight(float f10) {
        cppSetArtboardHeight(getCppPointer(), f10);
    }

    public void setTextRunValue(@NotNull String name, @NotNull String textValue) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(textValue, "textValue");
        if (cppSetValueOfTextValueRun(getCppPointer(), name, textValue)) {
            return;
        }
        throw new TextValueRunException("Could not set text run. No Rive TextValueRun found with name \"" + name + ".\"");
    }

    public void setViewModelInstance(ViewModelInstance viewModelInstance) {
        if (viewModelInstance != null) {
            cppSetViewModelInstance(getCppPointer(), viewModelInstance.getCppPointer());
            this.viewModelInstance = viewModelInstance;
        }
    }

    public void setVolume$kotlin_release(float f10) {
        cppSetVolume(getCppPointer(), f10);
    }

    public void setWidth(float f10) {
        cppSetArtboardWidth(getCppPointer(), f10);
    }

    @NotNull
    public StateMachineInstance stateMachine(int i10) {
        long cppStateMachineByIndex = cppStateMachineByIndex(getCppPointer(), i10);
        if (cppStateMachineByIndex != 0) {
            StateMachineInstance stateMachineInstance = new StateMachineInstance(cppStateMachineByIndex, this.lock);
            getDependencies().add(stateMachineInstance);
            return stateMachineInstance;
        }
        throw new StateMachineException("No StateMachine found at index " + i10 + ".");
    }

    @NotNull
    public RiveTextValueRun textRun(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        long cppFindTextValueRun = cppFindTextValueRun(getCppPointer(), name);
        if (cppFindTextValueRun != 0) {
            RiveTextValueRun riveTextValueRun = new RiveTextValueRun(cppFindTextValueRun);
            getDependencies().add(riveTextValueRun);
            return riveTextValueRun;
        }
        throw new TextValueRunException("No Rive TextValueRun found with name \"" + name + ".\"");
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public Artboard(long j10, @NotNull ReentrantLock lock, File file) {
        super(j10);
        Intrinsics.checkNotNullParameter(lock, "lock");
        this.lock = lock;
        this.file = file;
    }

    public String getTextRunValue(@NotNull String name, @NotNull String path) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(path, "path");
        return cppFindValueOfTextValueRunAtPath(getCppPointer(), name, path);
    }

    public void setTextRunValue(@NotNull String name, @NotNull String textValue, @NotNull String path) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(textValue, "textValue");
        Intrinsics.checkNotNullParameter(path, "path");
        if (cppSetValueOfTextValueRunAtPath(getCppPointer(), name, textValue, path)) {
            return;
        }
        throw new TextValueRunException("Could not set text run value at path. No Rive TextValueRun found with name \"" + name + ".\" in nested artboard \"" + path + ".\"");
    }

    @NotNull
    public LinearAnimationInstance animation(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        long cppAnimationByName = cppAnimationByName(getCppPointer(), name);
        if (cppAnimationByName == 0) {
            List<String> animationNames = getAnimationNames();
            ArrayList arrayList = new ArrayList(CollectionsKt.w(animationNames, 10));
            Iterator<T> it = animationNames.iterator();
            while (it.hasNext()) {
                arrayList.add("\"" + ((String) it.next()) + "\"");
            }
            throw new AnimationException("Animation \"" + name + "\" not found. Available Animations: " + arrayList + "\"");
        }
        LinearAnimationInstance linearAnimationInstance = new LinearAnimationInstance(cppAnimationByName, this.lock, 0.0f, 4, null);
        getDependencies().add(linearAnimationInstance);
        return linearAnimationInstance;
    }

    @NotNull
    public StateMachineInstance stateMachine(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        long cppStateMachineByName = cppStateMachineByName(getCppPointer(), name);
        if (cppStateMachineByName != 0) {
            StateMachineInstance stateMachineInstance = new StateMachineInstance(cppStateMachineByName, this.lock);
            getDependencies().add(stateMachineInstance);
            return stateMachineInstance;
        }
        throw new StateMachineException("No StateMachine found with name " + name + ".");
    }

    @NotNull
    public RiveTextValueRun textRun(@NotNull String name, @NotNull String path) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(path, "path");
        long cppFindTextValueRunAtPath = cppFindTextValueRunAtPath(getCppPointer(), name, path);
        if (cppFindTextValueRunAtPath != 0) {
            RiveTextValueRun riveTextValueRun = new RiveTextValueRun(cppFindTextValueRunAtPath);
            getDependencies().add(riveTextValueRun);
            return riveTextValueRun;
        }
        throw new TextValueRunException("No Rive TextValueRun found with name \"" + name + ".\" in nested artboard " + path);
    }

    public void draw(long j10, @NotNull Fit fit, @NotNull Alignment alignment, float f10) {
        Intrinsics.checkNotNullParameter(fit, "fit");
        Intrinsics.checkNotNullParameter(alignment, "alignment");
        synchronized (this.lock) {
            if (getHasCppObject()) {
                cppDrawAligned(getCppPointer(), j10, fit, alignment, f10);
                Unit unit = Unit.f32008a;
            }
        }
    }
}
