package app.rive;

import app.rive.core.CloseOnce;
import app.rive.core.CommandQueue;
import app.rive.core.FileHandle;
import app.rive.core.ViewModelInstanceHandle;
import app.rive.runtime.kotlin.core.ViewModel;
import is.a;
import java.util.LinkedHashMap;
import java.util.Map;
import js.a0;
import js.c0;
import js.g;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.d;
import kotlin.coroutines.jvm.internal.e;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import or.b;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000t\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010%\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0005\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0011\n\u0002\u0018\u0002\n\u0002\b\u000f\b\u0007\u0018\u0000 I2\u00020\u0001:\u0001IB!\b\u0000\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\tJ\u0083\u0001\u0010\u0019\u001a\b\u0012\u0004\u0012\u00028\u00000\u000e\"\u0004\b\u0000\u0010\n2\u0006\u0010\f\u001a\u00020\u000b2\u0018\u0010\u000f\u001a\u0014\u0012\u0004\u0012\u00020\u000b\u0012\n\u0012\b\u0012\u0004\u0012\u00028\u00000\u000e0\r2(\u0010\u0013\u001a$\b\u0001\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u000b\u0012\n\u0012\b\u0012\u0004\u0012\u00028\u00000\u0011\u0012\u0006\u0012\u0004\u0018\u00010\u00120\u00102\u0012\u0010\u0016\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00028\u00000\u00150\u00142\u0006\u0010\u0018\u001a\u00020\u0017H\u0002¢\u0006\u0004\b\u0019\u0010\u001aJE\u0010\u001e\u001a\u00020\u001c\"\u0004\b\u0000\u0010\n2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001b\u001a\u00028\u00002\u001e\u0010\u001d\u001a\u001a\u0012\u0004\u0012\u00020\u0002\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00028\u0000\u0012\u0004\u0012\u00020\u001c0\u0010H\u0002¢\u0006\u0004\b\u001e\u0010\u001fJ\u0010\u0010 \u001a\u00020\u001cH\u0096\u0001¢\u0006\u0004\b \u0010!J\u001b\u0010#\u001a\b\u0012\u0004\u0012\u00020\"0\u000e2\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b#\u0010$J\u001b\u0010%\u001a\b\u0012\u0004\u0012\u00020\u000b0\u000e2\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b%\u0010$J\u001b\u0010'\u001a\b\u0012\u0004\u0012\u00020&0\u000e2\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b'\u0010$J\u001b\u0010(\u001a\b\u0012\u0004\u0012\u00020\u000b0\u000e2\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b(\u0010$J\u001b\u0010*\u001a\b\u0012\u0004\u0012\u00020)0\u000e2\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b*\u0010$J\u001b\u0010+\u001a\b\u0012\u0004\u0012\u00020\u001c0\u000e2\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b+\u0010$J\u001d\u0010,\u001a\u00020\u001c2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001b\u001a\u00020\"¢\u0006\u0004\b,\u0010-J\u001d\u0010.\u001a\u00020\u001c2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001b\u001a\u00020\u000b¢\u0006\u0004\b.\u0010/J\u001d\u00100\u001a\u00020\u001c2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001b\u001a\u00020&¢\u0006\u0004\b0\u00101J\u001d\u00102\u001a\u00020\u001c2\u0006\u0010\f\u001a\u00020\u000b2\u0006\u0010\u001b\u001a\u00020\u000b¢\u0006\u0004\b2\u0010/J\u001f\u00103\u001a\u00020\u001c2\u0006\u0010\f\u001a\u00020\u000b2\b\b\u0001\u0010\u001b\u001a\u00020)¢\u0006\u0004\b3\u00104J\u0015\u00105\u001a\u00020\u001c2\u0006\u0010\f\u001a\u00020\u000b¢\u0006\u0004\b5\u00106R \u0010\u0003\u001a\u00020\u00028\u0000X\u0080\u0004ø\u0001\u0000ø\u0001\u0001¢\u0006\f\n\u0004\b\u0003\u00107\u001a\u0004\b8\u00109R\u0014\u0010\u0005\u001a\u00020\u00048\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0005\u0010:R\u001a\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004ø\u0001\u0000ø\u0001\u0001¢\u0006\u0006\n\u0004\b\u0007\u00107R\u001a\u0010<\u001a\b\u0012\u0004\u0012\u00020\u001c0;8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b<\u0010=R \u0010>\u001a\b\u0012\u0004\u0012\u00020\u001c0\u00148\u0000X\u0080\u0004¢\u0006\f\n\u0004\b>\u0010?\u001a\u0004\b@\u0010AR&\u0010B\u001a\u0014\u0012\u0004\u0012\u00020\u000b\u0012\n\u0012\b\u0012\u0004\u0012\u00020\"0\u000e0\r8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bB\u0010CR&\u0010D\u001a\u0014\u0012\u0004\u0012\u00020\u000b\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u000b0\u000e0\r8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bD\u0010CR&\u0010E\u001a\u0014\u0012\u0004\u0012\u00020\u000b\u0012\n\u0012\b\u0012\u0004\u0012\u00020&0\u000e0\r8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bE\u0010CR&\u0010F\u001a\u0014\u0012\u0004\u0012\u00020\u000b\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u000b0\u000e0\r8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bF\u0010CR&\u0010G\u001a\u0014\u0012\u0004\u0012\u00020\u000b\u0012\n\u0012\b\u0012\u0004\u0012\u00020)0\u000e0\r8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bG\u0010CR&\u0010H\u001a\u0014\u0012\u0004\u0012\u00020\u000b\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u001c0\u000e0\r8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bH\u0010C\u0082\u0002\u000b\n\u0005\b¡\u001e0\u0001\n\u0002\b!¨\u0006J"}, d2 = {"Lapp/rive/ViewModelInstance;", "Ljava/lang/AutoCloseable;", "Lapp/rive/core/ViewModelInstanceHandle;", "instanceHandle", "Lapp/rive/core/CommandQueue;", "commandQueue", "Lapp/rive/core/FileHandle;", "fileHandle", "<init>", "(JLapp/rive/core/CommandQueue;JLkotlin/jvm/internal/DefaultConstructorMarker;)V", "T", "", "propertyPath", "", "Lkotlinx/coroutines/flow/Flow;", "cache", "Lkotlin/Function3;", "Lkotlin/coroutines/Continuation;", "", "getter", "Ljs/a0;", "Lapp/rive/core/CommandQueue$PropertyUpdate;", "updateFlow", "Lapp/rive/runtime/kotlin/core/ViewModel$PropertyDataType;", "propertyType", "getPropertyFlow", "(Ljava/lang/String;Ljava/util/Map;Lkotlin/jvm/functions/Function3;Ljs/a0;Lapp/rive/runtime/kotlin/core/ViewModel$PropertyDataType;)Lkotlinx/coroutines/flow/Flow;", "value", "", "setter", "setProperty", "(Ljava/lang/String;Ljava/lang/Object;Lkotlin/jvm/functions/Function3;)V", "close", "()V", "", "getNumberFlow", "(Ljava/lang/String;)Lkotlinx/coroutines/flow/Flow;", "getStringFlow", "", "getBooleanFlow", "getEnumFlow", "", "getColorFlow", "getTriggerFlow", "setNumber", "(Ljava/lang/String;F)V", "setString", "(Ljava/lang/String;Ljava/lang/String;)V", "setBoolean", "(Ljava/lang/String;Z)V", "setEnum", "setColor", "(Ljava/lang/String;I)V", "fireTrigger", "(Ljava/lang/String;)V", "J", "getInstanceHandle-VPLto4w$kotlin_release", "()J", "Lapp/rive/core/CommandQueue;", "Lkotlinx/coroutines/flow/MutableSharedFlow;", "_dirtyFlow", "Lkotlinx/coroutines/flow/MutableSharedFlow;", "dirtyFlow", "Ljs/a0;", "getDirtyFlow$kotlin_release", "()Ljs/a0;", "numberFlows", "Ljava/util/Map;", "stringFlows", "booleanFlows", "enumFlows", "colorFlows", "triggerFlows", "Companion", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nViewModelInstance.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ViewModelInstance.kt\napp/rive/ViewModelInstance\n+ 2 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n+ 3 Transform.kt\nkotlinx/coroutines/flow/FlowKt__TransformKt\n+ 4 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt\n+ 5 SafeCollector.common.kt\nkotlinx/coroutines/flow/internal/SafeCollector_commonKt\n*L\n1#1,364:1\n381#2,3:365\n384#2,4:378\n381#2,3:382\n384#2,4:395\n17#3:368\n19#3:372\n49#3:373\n51#3:377\n17#3:385\n19#3:389\n49#3:390\n51#3:394\n46#4:369\n51#4:371\n46#4:374\n51#4:376\n46#4:386\n51#4:388\n46#4:391\n51#4:393\n105#5:370\n105#5:375\n105#5:387\n105#5:392\n*S KotlinDebug\n*F\n+ 1 ViewModelInstance.kt\napp/rive/ViewModelInstance\n*L\n84#1:365,3\n84#1:378,4\n201#1:382,3\n201#1:395,4\n93#1:368\n93#1:372\n94#1:373\n94#1:377\n210#1:385\n210#1:389\n211#1:390\n211#1:394\n93#1:369\n93#1:371\n94#1:374\n94#1:376\n210#1:386\n210#1:388\n211#1:391\n211#1:393\n93#1:370\n94#1:375\n210#1:387\n211#1:392\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ViewModelInstance implements AutoCloseable {
    private final /* synthetic */ CloseOnce $$delegate_0;
    @NotNull
    private final MutableSharedFlow _dirtyFlow;
    @NotNull
    private final Map<String, Flow> booleanFlows;
    @NotNull
    private final Map<String, Flow> colorFlows;
    @NotNull
    private final CommandQueue commandQueue;
    @NotNull
    private final a0 dirtyFlow;
    @NotNull
    private final Map<String, Flow> enumFlows;
    private final long fileHandle;
    private final long instanceHandle;
    @NotNull
    private final Map<String, Flow> numberFlows;
    @NotNull
    private final Map<String, Flow> stringFlows;
    @NotNull
    private final Map<String, Flow> triggerFlows;
    @NotNull
    public static final Companion Companion = new Companion(null);
    public static final int $stable = 8;

    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J\u0016\u0010\u0003\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\b¨\u0006\t"}, d2 = {"Lapp/rive/ViewModelInstance$Companion;", "", "()V", "fromFile", "Lapp/rive/ViewModelInstance;", "file", "Lapp/rive/RiveFile;", "source", "Lapp/rive/ViewModelInstanceSource;", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nViewModelInstance.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ViewModelInstance.kt\napp/rive/ViewModelInstance$Companion\n+ 2 RiveLog.kt\napp/rive/RiveLog\n*L\n1#1,364:1\n57#2:365\n*S KotlinDebug\n*F\n+ 1 ViewModelInstance.kt\napp/rive/ViewModelInstance$Companion\n*L\n59#1:365\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final ViewModelInstance fromFile(@NotNull final RiveFile file, @NotNull final ViewModelInstanceSource source) {
            Intrinsics.checkNotNullParameter(file, "file");
            Intrinsics.checkNotNullParameter(source, "source");
            final long m114createViewModelInstancej73Dd8U = file.getCommandQueue$kotlin_release().m114createViewModelInstancej73Dd8U(file.m31getFileHandleENT3xMk$kotlin_release(), source);
            RiveLog.INSTANCE.getLogger().d(ViewModelInstanceKt.VM_INSTANCE_TAG, new Function0<String>() { // from class: app.rive.ViewModelInstance$Companion$fromFile$1
                /* JADX INFO: Access modifiers changed from: package-private */
                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                {
                    super(0);
                }

                @Override // kotlin.jvm.functions.Function0
                @NotNull
                public final String invoke() {
                    String m202toStringimpl = ViewModelInstanceHandle.m202toStringimpl(m114createViewModelInstancej73Dd8U);
                    ViewModelInstanceSource viewModelInstanceSource = source;
                    String m170toStringimpl = FileHandle.m170toStringimpl(file.m31getFileHandleENT3xMk$kotlin_release());
                    return "Created " + m202toStringimpl + " from source: " + viewModelInstanceSource + " (" + m170toStringimpl + ")";
                }
            });
            return new ViewModelInstance(m114createViewModelInstancej73Dd8U, file.getCommandQueue$kotlin_release(), file.m31getFileHandleENT3xMk$kotlin_release(), null);
        }

        private Companion() {
        }
    }

    public /* synthetic */ ViewModelInstance(long j10, CommandQueue commandQueue, long j11, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, commandQueue, j11);
    }

    private final <T> Flow getPropertyFlow(final String str, Map<String, Flow> map, Function3 function3, a0 a0Var, ViewModel.PropertyDataType propertyDataType) {
        Flow flow = map.get(str);
        if (flow == null) {
            final a0 D = g.D(a0Var, new ViewModelInstance$getPropertyFlow$1$1(this, str, propertyDataType, function3, null));
            final Flow flow2 = new Flow() { // from class: app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$filter$1

                @Metadata(d1 = {"\u0000\f\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0003\u0010\u0006\u001a\u00020\u0003\"\u0004\b\u0000\u0010\u0000\"\u0004\b\u0001\u0010\u00012\u0006\u0010\u0002\u001a\u00028\u0000H\u008a@¢\u0006\u0004\b\u0004\u0010\u0005"}, d2 = {"T", "R", "value", "", "emit", "(Ljava/lang/Object;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "<anonymous>"}, k = 3, mv = {1, 9, 0})
                @SourceDebugExtension({"SMAP\nEmitters.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt$unsafeTransform$1$1\n+ 2 Transform.kt\nkotlinx/coroutines/flow/FlowKt__TransformKt\n+ 3 ViewModelInstance.kt\napp/rive/ViewModelInstance\n*L\n1#1,218:1\n18#2:219\n19#2:221\n93#3:220\n*E\n"})
                /* renamed from: app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$filter$1$2  reason: invalid class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                public static final class AnonymousClass2<T> implements FlowCollector {
                    final /* synthetic */ String $propertyPath$inlined;
                    final /* synthetic */ FlowCollector $this_unsafeFlow;
                    final /* synthetic */ ViewModelInstance this$0;

                    @Metadata(k = 3, mv = {1, 9, 0}, xi = 48)
                    @e(c = "app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$filter$1$2", f = "ViewModelInstance.kt", l = {219}, m = "emit")
                    @SourceDebugExtension({"SMAP\nEmitters.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt$unsafeTransform$1$1$emit$1\n*L\n1#1,218:1\n*E\n"})
                    /* renamed from: app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$filter$1$2$1  reason: invalid class name */
                    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                    public static final class AnonymousClass1 extends d {
                        Object L$0;
                        Object L$1;
                        int label;
                        /* synthetic */ Object result;

                        public AnonymousClass1(Continuation continuation) {
                            super(continuation);
                        }

                        @Override // kotlin.coroutines.jvm.internal.a
                        public final Object invokeSuspend(@NotNull Object obj) {
                            this.result = obj;
                            this.label |= Integer.MIN_VALUE;
                            return AnonymousClass2.this.emit(null, this);
                        }
                    }

                    public AnonymousClass2(FlowCollector flowCollector, ViewModelInstance viewModelInstance, String str) {
                        this.$this_unsafeFlow = flowCollector;
                        this.this$0 = viewModelInstance;
                        this.$propertyPath$inlined = str;
                    }

                    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
                    /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
                    @Override // kotlinx.coroutines.flow.FlowCollector
                    /*
                        Code decompiled incorrectly, please refer to instructions dump.
                        To view partially-correct add '--show-bad-code' argument
                    */
                    public final java.lang.Object emit(java.lang.Object r9, @org.jetbrains.annotations.NotNull kotlin.coroutines.Continuation r10) {
                        /*
                            r8 = this;
                            boolean r0 = r10 instanceof app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$filter$1.AnonymousClass2.AnonymousClass1
                            if (r0 == 0) goto L13
                            r0 = r10
                            app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$filter$1$2$1 r0 = (app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$filter$1.AnonymousClass2.AnonymousClass1) r0
                            int r1 = r0.label
                            r2 = -2147483648(0xffffffff80000000, float:-0.0)
                            r3 = r1 & r2
                            if (r3 == 0) goto L13
                            int r1 = r1 - r2
                            r0.label = r1
                            goto L18
                        L13:
                            app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$filter$1$2$1 r0 = new app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$filter$1$2$1
                            r0.<init>(r10)
                        L18:
                            java.lang.Object r10 = r0.result
                            java.lang.Object r1 = or.b.f()
                            int r2 = r0.label
                            r3 = 1
                            if (r2 == 0) goto L31
                            if (r2 != r3) goto L29
                            kotlin.c.b(r10)
                            goto L5e
                        L29:
                            java.lang.IllegalStateException r9 = new java.lang.IllegalStateException
                            java.lang.String r10 = "call to 'resume' before 'invoke' with coroutine"
                            r9.<init>(r10)
                            throw r9
                        L31:
                            kotlin.c.b(r10)
                            kotlinx.coroutines.flow.FlowCollector r10 = r8.$this_unsafeFlow
                            r2 = r9
                            app.rive.core.CommandQueue$PropertyUpdate r2 = (app.rive.core.CommandQueue.PropertyUpdate) r2
                            long r4 = r2.m155getHandleVPLto4w()
                            app.rive.ViewModelInstance r6 = r8.this$0
                            long r6 = r6.m46getInstanceHandleVPLto4w$kotlin_release()
                            boolean r4 = app.rive.core.ViewModelInstanceHandle.m200equalsimpl0(r4, r6)
                            if (r4 == 0) goto L5e
                            java.lang.String r2 = r2.getPropertyPath()
                            java.lang.String r4 = r8.$propertyPath$inlined
                            boolean r2 = kotlin.jvm.internal.Intrinsics.areEqual(r2, r4)
                            if (r2 == 0) goto L5e
                            r0.label = r3
                            java.lang.Object r9 = r10.emit(r9, r0)
                            if (r9 != r1) goto L5e
                            return r1
                        L5e:
                            kotlin.Unit r9 = kotlin.Unit.f33282a
                            return r9
                        */
                        throw new UnsupportedOperationException("Method not decompiled: app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$filter$1.AnonymousClass2.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
                    }
                }

                @Override // kotlinx.coroutines.flow.Flow
                public Object collect(@NotNull FlowCollector flowCollector, @NotNull Continuation continuation) {
                    Object collect = Flow.this.collect(new AnonymousClass2(flowCollector, this, str), continuation);
                    if (collect == b.f()) {
                        return collect;
                    }
                    return Unit.f33282a;
                }
            };
            flow = g.l(new Flow() { // from class: app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$map$1

                @Metadata(d1 = {"\u0000\f\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0003\u0010\u0006\u001a\u00020\u0003\"\u0004\b\u0000\u0010\u0000\"\u0004\b\u0001\u0010\u00012\u0006\u0010\u0002\u001a\u00028\u0000H\u008a@¢\u0006\u0004\b\u0004\u0010\u0005"}, d2 = {"T", "R", "value", "", "emit", "(Ljava/lang/Object;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "<anonymous>"}, k = 3, mv = {1, 9, 0})
                @SourceDebugExtension({"SMAP\nEmitters.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt$unsafeTransform$1$1\n+ 2 Transform.kt\nkotlinx/coroutines/flow/FlowKt__TransformKt\n+ 3 ViewModelInstance.kt\napp/rive/ViewModelInstance\n*L\n1#1,218:1\n50#2:219\n94#3:220\n*E\n"})
                /* renamed from: app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$map$1$2  reason: invalid class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                public static final class AnonymousClass2<T> implements FlowCollector {
                    final /* synthetic */ FlowCollector $this_unsafeFlow;

                    @Metadata(k = 3, mv = {1, 9, 0}, xi = 48)
                    @e(c = "app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$map$1$2", f = "ViewModelInstance.kt", l = {219}, m = "emit")
                    @SourceDebugExtension({"SMAP\nEmitters.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt$unsafeTransform$1$1$emit$1\n*L\n1#1,218:1\n*E\n"})
                    /* renamed from: app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$map$1$2$1  reason: invalid class name */
                    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                    public static final class AnonymousClass1 extends d {
                        Object L$0;
                        int label;
                        /* synthetic */ Object result;

                        public AnonymousClass1(Continuation continuation) {
                            super(continuation);
                        }

                        @Override // kotlin.coroutines.jvm.internal.a
                        public final Object invokeSuspend(@NotNull Object obj) {
                            this.result = obj;
                            this.label |= Integer.MIN_VALUE;
                            return AnonymousClass2.this.emit(null, this);
                        }
                    }

                    public AnonymousClass2(FlowCollector flowCollector) {
                        this.$this_unsafeFlow = flowCollector;
                    }

                    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
                    /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
                    @Override // kotlinx.coroutines.flow.FlowCollector
                    /*
                        Code decompiled incorrectly, please refer to instructions dump.
                        To view partially-correct add '--show-bad-code' argument
                    */
                    public final java.lang.Object emit(java.lang.Object r5, @org.jetbrains.annotations.NotNull kotlin.coroutines.Continuation r6) {
                        /*
                            r4 = this;
                            boolean r0 = r6 instanceof app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$map$1.AnonymousClass2.AnonymousClass1
                            if (r0 == 0) goto L13
                            r0 = r6
                            app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$map$1$2$1 r0 = (app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$map$1.AnonymousClass2.AnonymousClass1) r0
                            int r1 = r0.label
                            r2 = -2147483648(0xffffffff80000000, float:-0.0)
                            r3 = r1 & r2
                            if (r3 == 0) goto L13
                            int r1 = r1 - r2
                            r0.label = r1
                            goto L18
                        L13:
                            app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$map$1$2$1 r0 = new app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$map$1$2$1
                            r0.<init>(r6)
                        L18:
                            java.lang.Object r6 = r0.result
                            java.lang.Object r1 = or.b.f()
                            int r2 = r0.label
                            r3 = 1
                            if (r2 == 0) goto L31
                            if (r2 != r3) goto L29
                            kotlin.c.b(r6)
                            goto L45
                        L29:
                            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                            java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
                            r5.<init>(r6)
                            throw r5
                        L31:
                            kotlin.c.b(r6)
                            kotlinx.coroutines.flow.FlowCollector r6 = r4.$this_unsafeFlow
                            app.rive.core.CommandQueue$PropertyUpdate r5 = (app.rive.core.CommandQueue.PropertyUpdate) r5
                            java.lang.Object r5 = r5.getValue()
                            r0.label = r3
                            java.lang.Object r5 = r6.emit(r5, r0)
                            if (r5 != r1) goto L45
                            return r1
                        L45:
                            kotlin.Unit r5 = kotlin.Unit.f33282a
                            return r5
                        */
                        throw new UnsupportedOperationException("Method not decompiled: app.rive.ViewModelInstance$getPropertyFlow$lambda$2$$inlined$map$1.AnonymousClass2.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
                    }
                }

                @Override // kotlinx.coroutines.flow.Flow
                public Object collect(@NotNull FlowCollector flowCollector, @NotNull Continuation continuation) {
                    Object collect = Flow.this.collect(new AnonymousClass2(flowCollector), continuation);
                    if (collect == b.f()) {
                        return collect;
                    }
                    return Unit.f33282a;
                }
            });
            map.put(str, flow);
        }
        return flow;
    }

    private final <T> void setProperty(String str, T t10, Function3 function3) {
        function3.invoke(ViewModelInstanceHandle.m197boximpl(this.instanceHandle), str, t10);
        this._dirtyFlow.b(Unit.f33282a);
    }

    @Override // java.lang.AutoCloseable
    public void close() {
        this.$$delegate_0.close();
    }

    public final void fireTrigger(@NotNull String propertyPath) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        this.commandQueue.m126fireTriggerPropertyippgHXQ(this.instanceHandle, propertyPath);
    }

    @NotNull
    public final Flow getBooleanFlow(@NotNull String propertyPath) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        return getPropertyFlow(propertyPath, this.booleanFlows, new ViewModelInstance$getBooleanFlow$1(this.commandQueue), this.commandQueue.getBooleanPropertyFlow(), ViewModel.PropertyDataType.BOOLEAN);
    }

    @NotNull
    public final Flow getColorFlow(@NotNull String propertyPath) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        return getPropertyFlow(propertyPath, this.colorFlows, new ViewModelInstance$getColorFlow$1(this.commandQueue), this.commandQueue.getColorPropertyFlow(), ViewModel.PropertyDataType.COLOR);
    }

    @NotNull
    public final a0 getDirtyFlow$kotlin_release() {
        return this.dirtyFlow;
    }

    @NotNull
    public final Flow getEnumFlow(@NotNull String propertyPath) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        return getPropertyFlow(propertyPath, this.enumFlows, new ViewModelInstance$getEnumFlow$1(this.commandQueue), this.commandQueue.getEnumPropertyFlow(), ViewModel.PropertyDataType.ENUM);
    }

    /* renamed from: getInstanceHandle-VPLto4w$kotlin_release  reason: not valid java name */
    public final long m46getInstanceHandleVPLto4w$kotlin_release() {
        return this.instanceHandle;
    }

    @NotNull
    public final Flow getNumberFlow(@NotNull String propertyPath) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        return getPropertyFlow(propertyPath, this.numberFlows, new ViewModelInstance$getNumberFlow$1(this.commandQueue), this.commandQueue.getNumberPropertyFlow(), ViewModel.PropertyDataType.NUMBER);
    }

    @NotNull
    public final Flow getStringFlow(@NotNull String propertyPath) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        return getPropertyFlow(propertyPath, this.stringFlows, new ViewModelInstance$getStringFlow$1(this.commandQueue), this.commandQueue.getStringPropertyFlow(), ViewModel.PropertyDataType.STRING);
    }

    @NotNull
    public final Flow getTriggerFlow(@NotNull final String propertyPath) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        Map<String, Flow> map = this.triggerFlows;
        Flow flow = map.get(propertyPath);
        if (flow == null) {
            final a0 D = g.D(this.commandQueue.getTriggerPropertyFlow(), new ViewModelInstance$getTriggerFlow$1$1(this, propertyPath, null));
            final Flow flow2 = new Flow() { // from class: app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$filter$1

                @Metadata(d1 = {"\u0000\f\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0003\u0010\u0006\u001a\u00020\u0003\"\u0004\b\u0000\u0010\u0000\"\u0004\b\u0001\u0010\u00012\u0006\u0010\u0002\u001a\u00028\u0000H\u008a@¢\u0006\u0004\b\u0004\u0010\u0005"}, d2 = {"T", "R", "value", "", "emit", "(Ljava/lang/Object;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "<anonymous>"}, k = 3, mv = {1, 9, 0})
                @SourceDebugExtension({"SMAP\nEmitters.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt$unsafeTransform$1$1\n+ 2 Transform.kt\nkotlinx/coroutines/flow/FlowKt__TransformKt\n+ 3 ViewModelInstance.kt\napp/rive/ViewModelInstance\n*L\n1#1,218:1\n18#2:219\n19#2:221\n210#3:220\n*E\n"})
                /* renamed from: app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$filter$1$2  reason: invalid class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                public static final class AnonymousClass2<T> implements FlowCollector {
                    final /* synthetic */ String $propertyPath$inlined;
                    final /* synthetic */ FlowCollector $this_unsafeFlow;
                    final /* synthetic */ ViewModelInstance this$0;

                    @Metadata(k = 3, mv = {1, 9, 0}, xi = 48)
                    @e(c = "app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$filter$1$2", f = "ViewModelInstance.kt", l = {219}, m = "emit")
                    @SourceDebugExtension({"SMAP\nEmitters.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt$unsafeTransform$1$1$emit$1\n*L\n1#1,218:1\n*E\n"})
                    /* renamed from: app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$filter$1$2$1  reason: invalid class name */
                    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                    public static final class AnonymousClass1 extends d {
                        Object L$0;
                        Object L$1;
                        int label;
                        /* synthetic */ Object result;

                        public AnonymousClass1(Continuation continuation) {
                            super(continuation);
                        }

                        @Override // kotlin.coroutines.jvm.internal.a
                        public final Object invokeSuspend(@NotNull Object obj) {
                            this.result = obj;
                            this.label |= Integer.MIN_VALUE;
                            return AnonymousClass2.this.emit(null, this);
                        }
                    }

                    public AnonymousClass2(FlowCollector flowCollector, ViewModelInstance viewModelInstance, String str) {
                        this.$this_unsafeFlow = flowCollector;
                        this.this$0 = viewModelInstance;
                        this.$propertyPath$inlined = str;
                    }

                    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
                    /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
                    @Override // kotlinx.coroutines.flow.FlowCollector
                    /*
                        Code decompiled incorrectly, please refer to instructions dump.
                        To view partially-correct add '--show-bad-code' argument
                    */
                    public final java.lang.Object emit(java.lang.Object r9, @org.jetbrains.annotations.NotNull kotlin.coroutines.Continuation r10) {
                        /*
                            r8 = this;
                            boolean r0 = r10 instanceof app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$filter$1.AnonymousClass2.AnonymousClass1
                            if (r0 == 0) goto L13
                            r0 = r10
                            app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$filter$1$2$1 r0 = (app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$filter$1.AnonymousClass2.AnonymousClass1) r0
                            int r1 = r0.label
                            r2 = -2147483648(0xffffffff80000000, float:-0.0)
                            r3 = r1 & r2
                            if (r3 == 0) goto L13
                            int r1 = r1 - r2
                            r0.label = r1
                            goto L18
                        L13:
                            app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$filter$1$2$1 r0 = new app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$filter$1$2$1
                            r0.<init>(r10)
                        L18:
                            java.lang.Object r10 = r0.result
                            java.lang.Object r1 = or.b.f()
                            int r2 = r0.label
                            r3 = 1
                            if (r2 == 0) goto L31
                            if (r2 != r3) goto L29
                            kotlin.c.b(r10)
                            goto L5e
                        L29:
                            java.lang.IllegalStateException r9 = new java.lang.IllegalStateException
                            java.lang.String r10 = "call to 'resume' before 'invoke' with coroutine"
                            r9.<init>(r10)
                            throw r9
                        L31:
                            kotlin.c.b(r10)
                            kotlinx.coroutines.flow.FlowCollector r10 = r8.$this_unsafeFlow
                            r2 = r9
                            app.rive.core.CommandQueue$PropertyUpdate r2 = (app.rive.core.CommandQueue.PropertyUpdate) r2
                            long r4 = r2.m155getHandleVPLto4w()
                            app.rive.ViewModelInstance r6 = r8.this$0
                            long r6 = r6.m46getInstanceHandleVPLto4w$kotlin_release()
                            boolean r4 = app.rive.core.ViewModelInstanceHandle.m200equalsimpl0(r4, r6)
                            if (r4 == 0) goto L5e
                            java.lang.String r2 = r2.getPropertyPath()
                            java.lang.String r4 = r8.$propertyPath$inlined
                            boolean r2 = kotlin.jvm.internal.Intrinsics.areEqual(r2, r4)
                            if (r2 == 0) goto L5e
                            r0.label = r3
                            java.lang.Object r9 = r10.emit(r9, r0)
                            if (r9 != r1) goto L5e
                            return r1
                        L5e:
                            kotlin.Unit r9 = kotlin.Unit.f33282a
                            return r9
                        */
                        throw new UnsupportedOperationException("Method not decompiled: app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$filter$1.AnonymousClass2.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
                    }
                }

                @Override // kotlinx.coroutines.flow.Flow
                public Object collect(@NotNull FlowCollector flowCollector, @NotNull Continuation continuation) {
                    Object collect = Flow.this.collect(new AnonymousClass2(flowCollector, this, propertyPath), continuation);
                    if (collect == b.f()) {
                        return collect;
                    }
                    return Unit.f33282a;
                }
            };
            flow = g.b(new Flow() { // from class: app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$map$1

                @Metadata(d1 = {"\u0000\f\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0003\u0010\u0006\u001a\u00020\u0003\"\u0004\b\u0000\u0010\u0000\"\u0004\b\u0001\u0010\u00012\u0006\u0010\u0002\u001a\u00028\u0000H\u008a@¢\u0006\u0004\b\u0004\u0010\u0005"}, d2 = {"T", "R", "value", "", "emit", "(Ljava/lang/Object;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "<anonymous>"}, k = 3, mv = {1, 9, 0})
                @SourceDebugExtension({"SMAP\nEmitters.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt$unsafeTransform$1$1\n+ 2 Transform.kt\nkotlinx/coroutines/flow/FlowKt__TransformKt\n+ 3 ViewModelInstance.kt\napp/rive/ViewModelInstance\n*L\n1#1,218:1\n50#2:219\n211#3:220\n*E\n"})
                /* renamed from: app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$map$1$2  reason: invalid class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                public static final class AnonymousClass2<T> implements FlowCollector {
                    final /* synthetic */ FlowCollector $this_unsafeFlow;

                    @Metadata(k = 3, mv = {1, 9, 0}, xi = 48)
                    @e(c = "app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$map$1$2", f = "ViewModelInstance.kt", l = {219}, m = "emit")
                    @SourceDebugExtension({"SMAP\nEmitters.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt$unsafeTransform$1$1$emit$1\n*L\n1#1,218:1\n*E\n"})
                    /* renamed from: app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$map$1$2$1  reason: invalid class name */
                    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                    public static final class AnonymousClass1 extends d {
                        Object L$0;
                        int label;
                        /* synthetic */ Object result;

                        public AnonymousClass1(Continuation continuation) {
                            super(continuation);
                        }

                        @Override // kotlin.coroutines.jvm.internal.a
                        public final Object invokeSuspend(@NotNull Object obj) {
                            this.result = obj;
                            this.label |= Integer.MIN_VALUE;
                            return AnonymousClass2.this.emit(null, this);
                        }
                    }

                    public AnonymousClass2(FlowCollector flowCollector) {
                        this.$this_unsafeFlow = flowCollector;
                    }

                    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
                    /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
                    @Override // kotlinx.coroutines.flow.FlowCollector
                    /*
                        Code decompiled incorrectly, please refer to instructions dump.
                        To view partially-correct add '--show-bad-code' argument
                    */
                    public final java.lang.Object emit(java.lang.Object r5, @org.jetbrains.annotations.NotNull kotlin.coroutines.Continuation r6) {
                        /*
                            r4 = this;
                            boolean r0 = r6 instanceof app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$map$1.AnonymousClass2.AnonymousClass1
                            if (r0 == 0) goto L13
                            r0 = r6
                            app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$map$1$2$1 r0 = (app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$map$1.AnonymousClass2.AnonymousClass1) r0
                            int r1 = r0.label
                            r2 = -2147483648(0xffffffff80000000, float:-0.0)
                            r3 = r1 & r2
                            if (r3 == 0) goto L13
                            int r1 = r1 - r2
                            r0.label = r1
                            goto L18
                        L13:
                            app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$map$1$2$1 r0 = new app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$map$1$2$1
                            r0.<init>(r6)
                        L18:
                            java.lang.Object r6 = r0.result
                            java.lang.Object r1 = or.b.f()
                            int r2 = r0.label
                            r3 = 1
                            if (r2 == 0) goto L31
                            if (r2 != r3) goto L29
                            kotlin.c.b(r6)
                            goto L43
                        L29:
                            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                            java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
                            r5.<init>(r6)
                            throw r5
                        L31:
                            kotlin.c.b(r6)
                            kotlinx.coroutines.flow.FlowCollector r6 = r4.$this_unsafeFlow
                            app.rive.core.CommandQueue$PropertyUpdate r5 = (app.rive.core.CommandQueue.PropertyUpdate) r5
                            kotlin.Unit r5 = kotlin.Unit.f33282a
                            r0.label = r3
                            java.lang.Object r5 = r6.emit(r5, r0)
                            if (r5 != r1) goto L43
                            return r1
                        L43:
                            kotlin.Unit r5 = kotlin.Unit.f33282a
                            return r5
                        */
                        throw new UnsupportedOperationException("Method not decompiled: app.rive.ViewModelInstance$getTriggerFlow$lambda$5$$inlined$map$1.AnonymousClass2.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
                    }
                }

                @Override // kotlinx.coroutines.flow.Flow
                public Object collect(@NotNull FlowCollector flowCollector, @NotNull Continuation continuation) {
                    Object collect = Flow.this.collect(new AnonymousClass2(flowCollector), continuation);
                    if (collect == b.f()) {
                        return collect;
                    }
                    return Unit.f33282a;
                }
            }, 32, a.f31126e);
            map.put(propertyPath, flow);
        }
        return flow;
    }

    public final void setBoolean(@NotNull String propertyPath, boolean z10) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        setProperty(propertyPath, Boolean.valueOf(z10), new ViewModelInstance$setBoolean$1(this.commandQueue));
    }

    public final void setColor(@NotNull String propertyPath, int i10) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        setProperty(propertyPath, Integer.valueOf(i10), new ViewModelInstance$setColor$1(this.commandQueue));
    }

    public final void setEnum(@NotNull String propertyPath, @NotNull String value) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        Intrinsics.checkNotNullParameter(value, "value");
        setProperty(propertyPath, value, new ViewModelInstance$setEnum$1(this.commandQueue));
    }

    public final void setNumber(@NotNull String propertyPath, float f10) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        setProperty(propertyPath, Float.valueOf(f10), new ViewModelInstance$setNumber$1(this.commandQueue));
    }

    public final void setString(@NotNull String propertyPath, @NotNull String value) {
        Intrinsics.checkNotNullParameter(propertyPath, "propertyPath");
        Intrinsics.checkNotNullParameter(value, "value");
        setProperty(propertyPath, value, new ViewModelInstance$setString$1(this.commandQueue));
    }

    private ViewModelInstance(final long j10, final CommandQueue commandQueue, final long j11) {
        Intrinsics.checkNotNullParameter(commandQueue, "commandQueue");
        this.instanceHandle = j10;
        this.commandQueue = commandQueue;
        this.fileHandle = j11;
        this.$$delegate_0 = new CloseOnce(new Function0<Unit>() { // from class: app.rive.ViewModelInstance.1
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m47invoke();
                return Unit.f33282a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m47invoke() {
                final long j12 = j10;
                final long j13 = j11;
                RiveLog.INSTANCE.getLogger().d(ViewModelInstanceKt.VM_INSTANCE_TAG, new Function0<String>() { // from class: app.rive.ViewModelInstance.1.1
                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    {
                        super(0);
                    }

                    @Override // kotlin.jvm.functions.Function0
                    @NotNull
                    public final String invoke() {
                        String m202toStringimpl = ViewModelInstanceHandle.m202toStringimpl(j12);
                        String m170toStringimpl = FileHandle.m170toStringimpl(j13);
                        return "Deleting " + m202toStringimpl + "} (" + m170toStringimpl + ")";
                    }
                });
                CommandQueue.this.m124deleteViewModelInstancemBajs_U(j10);
            }
        });
        MutableSharedFlow a10 = c0.a(1, 1, a.f31126e);
        this._dirtyFlow = a10;
        this.dirtyFlow = a10;
        this.numberFlows = new LinkedHashMap();
        this.stringFlows = new LinkedHashMap();
        this.booleanFlows = new LinkedHashMap();
        this.enumFlows = new LinkedHashMap();
        this.colorFlows = new LinkedHashMap();
        this.triggerFlows = new LinkedHashMap();
    }
}
