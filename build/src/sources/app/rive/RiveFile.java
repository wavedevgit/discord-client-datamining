package app.rive;

import app.rive.core.CloseOnce;
import app.rive.core.CommandQueue;
import app.rive.core.FileHandle;
import app.rive.core.SuspendLazy;
import app.rive.runtime.kotlin.core.File;
import app.rive.runtime.kotlin.core.ViewModel;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010%\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\n\b\u0007\u0018\u0000 !2\u00020\u0001:\u0001!B\u0017\b\u0000\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005¢\u0006\u0002\u0010\u0006J\t\u0010\u0017\u001a\u00020\u0018H\u0096\u0001J\u0014\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\n0\tH\u0086@¢\u0006\u0002\u0010\u001aJ\u0014\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u000e0\tH\u0086@¢\u0006\u0002\u0010\u001aJ\u001c\u0010\u001c\u001a\b\u0012\u0004\u0012\u00020\n0\t2\u0006\u0010\u001d\u001a\u00020\nH\u0086@¢\u0006\u0002\u0010\u001eJ\u0014\u0010\u001f\u001a\b\u0012\u0004\u0012\u00020\n0\tH\u0086@¢\u0006\u0002\u0010\u001aJ\u001c\u0010 \u001a\b\u0012\u0004\u0012\u00020\u00150\t2\u0006\u0010\u001d\u001a\u00020\nH\u0086@¢\u0006\u0002\u0010\u001eR\u001a\u0010\u0007\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\n0\t0\bX\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0004\u001a\u00020\u0005X\u0080\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\fR\u001a\u0010\r\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u000e0\t0\bX\u0082\u0004¢\u0006\u0002\n\u0000R\u001c\u0010\u0002\u001a\u00020\u0003X\u0080\u0004ø\u0001\u0000ø\u0001\u0001¢\u0006\n\n\u0002\u0010\u0011\u001a\u0004\b\u000f\u0010\u0010R&\u0010\u0012\u001a\u001a\u0012\u0004\u0012\u00020\n\u0012\u0010\u0012\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\n0\t0\b0\u0013X\u0082\u0004¢\u0006\u0002\n\u0000R&\u0010\u0014\u001a\u001a\u0012\u0004\u0012\u00020\n\u0012\u0010\u0012\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00150\t0\b0\u0013X\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\u0016\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\n0\t0\bX\u0082\u0004¢\u0006\u0002\n\u0000\u0082\u0002\u000b\n\u0005\b¡\u001e0\u0001\n\u0002\b!¨\u0006\""}, d2 = {"Lapp/rive/RiveFile;", "Ljava/lang/AutoCloseable;", "fileHandle", "Lapp/rive/core/FileHandle;", "commandQueue", "Lapp/rive/core/CommandQueue;", "(JLapp/rive/core/CommandQueue;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "artboardNamesCache", "Lapp/rive/core/SuspendLazy;", "", "", "getCommandQueue$kotlin_release", "()Lapp/rive/core/CommandQueue;", "enumsCache", "Lapp/rive/runtime/kotlin/core/File$Enum;", "getFileHandle-ENT3xMk$kotlin_release", "()J", "J", "instanceNamesCache", "", "propertiesCache", "Lapp/rive/runtime/kotlin/core/ViewModel$Property;", "viewModelNamesCache", "close", "", "getArtboardNames", "(Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "getEnums", "getViewModelInstanceNames", "viewModel", "(Ljava/lang/String;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "getViewModelNames", "getViewModelProperties", "Companion", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nRiveFile.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RiveFile.kt\napp/rive/RiveFile\n+ 2 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n*L\n1#1,188:1\n381#2,7:189\n381#2,7:196\n*S KotlinDebug\n*F\n+ 1 RiveFile.kt\napp/rive/RiveFile\n*L\n108#1:189,7\n123#1:196,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RiveFile implements AutoCloseable {
    public static final int $stable = 0;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final /* synthetic */ CloseOnce $$delegate_0;
    @NotNull
    private final SuspendLazy<List<String>> artboardNamesCache;
    @NotNull
    private final CommandQueue commandQueue;
    @NotNull
    private final SuspendLazy<List<File.Enum>> enumsCache;
    private final long fileHandle;
    @NotNull
    private final Map<String, SuspendLazy<List<String>>> instanceNamesCache;
    @NotNull
    private final Map<String, SuspendLazy<List<ViewModel.Property>>> propertiesCache;
    @NotNull
    private final SuspendLazy<List<String>> viewModelNamesCache;

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J$\u0010\u0003\u001a\b\u0012\u0004\u0012\u00020\u00050\u00042\u0006\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tH\u0086@¢\u0006\u0002\u0010\n¨\u0006\u000b"}, d2 = {"Lapp/rive/RiveFile$Companion;", "", "()V", "fromSource", "Lapp/rive/Result;", "Lapp/rive/RiveFile;", "source", "Lapp/rive/RiveFileSource;", "commandQueue", "Lapp/rive/core/CommandQueue;", "(Lapp/rive/RiveFileSource;Lapp/rive/core/CommandQueue;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nRiveFile.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RiveFile.kt\napp/rive/RiveFile$Companion\n+ 2 RiveLog.kt\napp/rive/RiveLog\n*L\n1#1,188:1\n57#2:189\n53#2:190\n57#2:191\n57#2:192\n70#2:193\n*S KotlinDebug\n*F\n+ 1 RiveFile.kt\napp/rive/RiveFile$Companion\n*L\n60#1:189\n74#1:190\n77#1:191\n81#1:192\n86#1:193\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX WARN: Code restructure failed: missing block: B:35:0x00a8, code lost:
            if (r10 == r1) goto L23;
         */
        /* JADX WARN: Removed duplicated region for block: B:10:0x0027  */
        /* JADX WARN: Removed duplicated region for block: B:24:0x0054  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object fromSource(@org.jetbrains.annotations.NotNull final app.rive.RiveFileSource r8, @org.jetbrains.annotations.NotNull app.rive.core.CommandQueue r9, @org.jetbrains.annotations.NotNull kotlin.coroutines.Continuation<? super app.rive.Result<app.rive.RiveFile>> r10) {
            /*
                Method dump skipped, instructions count: 253
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: app.rive.RiveFile.Companion.fromSource(app.rive.RiveFileSource, app.rive.core.CommandQueue, kotlin.coroutines.Continuation):java.lang.Object");
        }

        private Companion() {
        }
    }

    public /* synthetic */ RiveFile(long j10, CommandQueue commandQueue, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, commandQueue);
    }

    @Override // java.lang.AutoCloseable
    public void close() {
        this.$$delegate_0.close();
    }

    public final Object getArtboardNames(@NotNull Continuation<? super List<String>> continuation) {
        return this.artboardNamesCache.await(continuation);
    }

    @NotNull
    public final CommandQueue getCommandQueue$kotlin_release() {
        return this.commandQueue;
    }

    public final Object getEnums(@NotNull Continuation<? super List<File.Enum>> continuation) {
        return this.enumsCache.await(continuation);
    }

    /* renamed from: getFileHandle-ENT3xMk$kotlin_release  reason: not valid java name */
    public final long m33getFileHandleENT3xMk$kotlin_release() {
        return this.fileHandle;
    }

    public final Object getViewModelInstanceNames(@NotNull String str, @NotNull Continuation<? super List<String>> continuation) {
        SuspendLazy<List<String>> suspendLazy;
        synchronized (this.instanceNamesCache) {
            try {
                Map<String, SuspendLazy<List<String>>> map = this.instanceNamesCache;
                SuspendLazy<List<String>> suspendLazy2 = map.get(str);
                if (suspendLazy2 == null) {
                    suspendLazy2 = new SuspendLazy<>(new RiveFile$getViewModelInstanceNames$2$1$1(this, str, null));
                    map.put(str, suspendLazy2);
                }
                suspendLazy = suspendLazy2;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return suspendLazy.await(continuation);
    }

    public final Object getViewModelNames(@NotNull Continuation<? super List<String>> continuation) {
        return this.viewModelNamesCache.await(continuation);
    }

    public final Object getViewModelProperties(@NotNull String str, @NotNull Continuation<? super List<ViewModel.Property>> continuation) {
        SuspendLazy<List<ViewModel.Property>> suspendLazy;
        synchronized (this.propertiesCache) {
            try {
                Map<String, SuspendLazy<List<ViewModel.Property>>> map = this.propertiesCache;
                SuspendLazy<List<ViewModel.Property>> suspendLazy2 = map.get(str);
                if (suspendLazy2 == null) {
                    suspendLazy2 = new SuspendLazy<>(new RiveFile$getViewModelProperties$2$1$1(this, str, null));
                    map.put(str, suspendLazy2);
                }
                suspendLazy = suspendLazy2;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return suspendLazy.await(continuation);
    }

    private RiveFile(final long j10, final CommandQueue commandQueue) {
        Intrinsics.checkNotNullParameter(commandQueue, "commandQueue");
        this.fileHandle = j10;
        this.commandQueue = commandQueue;
        this.$$delegate_0 = new CloseOnce(new Function0<Unit>() { // from class: app.rive.RiveFile.1
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m34invoke();
                return Unit.f33074a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m34invoke() {
                final long j11 = j10;
                RiveLog.INSTANCE.getLogger().d("Rive/File", new Function0<String>() { // from class: app.rive.RiveFile.1.1
                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    {
                        super(0);
                    }

                    @Override // kotlin.jvm.functions.Function0
                    @NotNull
                    public final String invoke() {
                        String m172toStringimpl = FileHandle.m172toStringimpl(j11);
                        return "Deleting " + m172toStringimpl;
                    }
                });
                CommandQueue.this.m122deleteFiledJ1Evnk(j10);
                CommandQueue.this.release("Rive/File", "RiveFile closed");
            }
        });
        this.artboardNamesCache = new SuspendLazy<>(new RiveFile$artboardNamesCache$1(this, null));
        this.viewModelNamesCache = new SuspendLazy<>(new RiveFile$viewModelNamesCache$1(this, null));
        this.instanceNamesCache = new LinkedHashMap();
        this.propertiesCache = new LinkedHashMap();
        this.enumsCache = new SuspendLazy<>(new RiveFile$enumsCache$1(this, null));
    }
}
