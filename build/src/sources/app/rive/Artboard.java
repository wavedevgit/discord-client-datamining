package app.rive;

import app.rive.core.ArtboardHandle;
import app.rive.core.CloseOnce;
import app.rive.core.CommandQueue;
import app.rive.core.FileHandle;
import app.rive.core.SuspendLazy;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\b\u0007\u0018\u0000 \u00172\u00020\u0001:\u0001\u0017B)\b\u0000\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0002\u0010\nJ\t\u0010\u0013\u001a\u00020\u0014H\u0096\u0001J\u0014\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\t0\u0012H\u0086@¢\u0006\u0002\u0010\u0016R\u001c\u0010\u0002\u001a\u00020\u0003X\u0080\u0004ø\u0001\u0000ø\u0001\u0001¢\u0006\n\n\u0002\u0010\r\u001a\u0004\b\u000b\u0010\fR\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0016\u0010\u0006\u001a\u00020\u0007X\u0082\u0004ø\u0001\u0000ø\u0001\u0001¢\u0006\u0004\n\u0002\u0010\rR\u0013\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u001a\u0010\u0010\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\t0\u00120\u0011X\u0082\u0004¢\u0006\u0002\n\u0000\u0082\u0002\u000b\n\u0005\b¡\u001e0\u0001\n\u0002\b!¨\u0006\u0018"}, d2 = {"Lapp/rive/Artboard;", "Ljava/lang/AutoCloseable;", "artboardHandle", "Lapp/rive/core/ArtboardHandle;", "commandQueue", "Lapp/rive/core/CommandQueue;", "fileHandle", "Lapp/rive/core/FileHandle;", StackTraceHelper.NAME_KEY, "", "(JLapp/rive/core/CommandQueue;JLjava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getArtboardHandle-nSTdbJo$kotlin_release", "()J", "J", "getName", "()Ljava/lang/String;", "stateMachineNamesCache", "Lapp/rive/core/SuspendLazy;", "", "close", "", "getStateMachineNames", "(Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "Companion", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class Artboard implements AutoCloseable {
    private final /* synthetic */ CloseOnce $$delegate_0;
    private final long artboardHandle;
    @NotNull
    private final CommandQueue commandQueue;
    private final long fileHandle;
    private final String name;
    @NotNull
    private final SuspendLazy<List<String>> stateMachineNamesCache;
    @NotNull
    public static final Companion Companion = new Companion(null);
    public static final int $stable = 8;

    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J\u001a\u0010\u0003\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u00062\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b¨\u0006\t"}, d2 = {"Lapp/rive/Artboard$Companion;", "", "()V", "fromFile", "Lapp/rive/Artboard;", "file", "Lapp/rive/RiveFile;", "artboardName", "", "kotlin_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
    @SourceDebugExtension({"SMAP\nArtboard.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Artboard.kt\napp/rive/Artboard$Companion\n+ 2 RiveLog.kt\napp/rive/RiveLog\n*L\n1#1,92:1\n57#2:93\n*S KotlinDebug\n*F\n+ 1 Artboard.kt\napp/rive/Artboard$Companion\n*L\n53#1:93\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ Artboard fromFile$default(Companion companion, RiveFile riveFile, String str, int i10, Object obj) {
            if ((i10 & 2) != 0) {
                str = null;
            }
            return companion.fromFile(riveFile, str);
        }

        @NotNull
        public final Artboard fromFile(@NotNull final RiveFile file, final String str) {
            long m111createDefaultArtboard6NrLy0M;
            Intrinsics.checkNotNullParameter(file, "file");
            if (str != null) {
                m111createDefaultArtboard6NrLy0M = file.getCommandQueue$kotlin_release().m110createArtboardByName2ZIOzHc(file.m31getFileHandleENT3xMk$kotlin_release(), str);
            } else {
                m111createDefaultArtboard6NrLy0M = file.getCommandQueue$kotlin_release().m111createDefaultArtboard6NrLy0M(file.m31getFileHandleENT3xMk$kotlin_release());
            }
            final long j10 = m111createDefaultArtboard6NrLy0M;
            RiveLog.INSTANCE.getLogger().d("Rive/Artboard", new Function0<String>() { // from class: app.rive.Artboard$Companion$fromFile$1
                /* JADX INFO: Access modifiers changed from: package-private */
                /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                {
                    super(0);
                }

                @Override // kotlin.jvm.functions.Function0
                @NotNull
                public final String invoke() {
                    String m97toStringimpl = ArtboardHandle.m97toStringimpl(j10);
                    String str2 = str;
                    String m170toStringimpl = FileHandle.m170toStringimpl(file.m31getFileHandleENT3xMk$kotlin_release());
                    return "Created " + m97toStringimpl + " with name: " + str2 + " (" + m170toStringimpl + ")";
                }
            });
            return new Artboard(j10, file.getCommandQueue$kotlin_release(), file.m31getFileHandleENT3xMk$kotlin_release(), str, null);
        }

        private Companion() {
        }
    }

    public /* synthetic */ Artboard(long j10, CommandQueue commandQueue, long j11, String str, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, commandQueue, j11, str);
    }

    @Override // java.lang.AutoCloseable
    public void close() {
        this.$$delegate_0.close();
    }

    /* renamed from: getArtboardHandle-nSTdbJo$kotlin_release  reason: not valid java name */
    public final long m15getArtboardHandlenSTdbJo$kotlin_release() {
        return this.artboardHandle;
    }

    public final String getName() {
        return this.name;
    }

    public final Object getStateMachineNames(@NotNull Continuation<? super List<String>> continuation) {
        return this.stateMachineNamesCache.await(continuation);
    }

    private Artboard(final long j10, final CommandQueue commandQueue, final long j11, final String str) {
        Intrinsics.checkNotNullParameter(commandQueue, "commandQueue");
        this.artboardHandle = j10;
        this.commandQueue = commandQueue;
        this.fileHandle = j11;
        this.name = str;
        this.$$delegate_0 = new CloseOnce(new Function0<Unit>() { // from class: app.rive.Artboard.1
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m16invoke();
                return Unit.f33282a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m16invoke() {
                final long j12 = j10;
                final String str2 = str;
                final long j13 = j11;
                RiveLog.INSTANCE.getLogger().d("Rive/Artboard", new Function0<String>() { // from class: app.rive.Artboard.1.1
                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    {
                        super(0);
                    }

                    @Override // kotlin.jvm.functions.Function0
                    @NotNull
                    public final String invoke() {
                        String m97toStringimpl = ArtboardHandle.m97toStringimpl(j12);
                        String str3 = str2;
                        String m170toStringimpl = FileHandle.m170toStringimpl(j13);
                        return "Deleting " + m97toStringimpl + " with name: " + str3 + " (" + m170toStringimpl + ")";
                    }
                });
                CommandQueue.this.m118deleteArtboarduiJWFY8(j10);
            }
        });
        this.stateMachineNamesCache = new SuspendLazy<>(new Artboard$stateMachineNamesCache$1(this, null));
    }
}
