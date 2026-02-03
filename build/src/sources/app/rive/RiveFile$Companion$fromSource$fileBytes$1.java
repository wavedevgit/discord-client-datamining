package app.rive;

import app.rive.RiveFileSource;
import java.io.InputStream;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import org.jetbrains.annotations.NotNull;
import pr.b;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0012\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u008a@"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {1, 9, 0}, xi = 48)
@e(c = "app.rive.RiveFile$Companion$fromSource$fileBytes$1", f = "RiveFile.kt", l = {}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nRiveFile.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RiveFile.kt\napp/rive/RiveFile$Companion$fromSource$fileBytes$1\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,188:1\n1#2:189\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RiveFile$Companion$fromSource$fileBytes$1 extends k implements Function2<CoroutineScope, Continuation<? super byte[]>, Object> {
    final /* synthetic */ RiveFileSource $source;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RiveFile$Companion$fromSource$fileBytes$1(RiveFileSource riveFileSource, Continuation<? super RiveFile$Companion$fromSource$fileBytes$1> continuation) {
        super(2, continuation);
        this.$source = riveFileSource;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    @NotNull
    public final Continuation<Unit> create(Object obj, @NotNull Continuation<?> continuation) {
        return new RiveFile$Companion$fromSource$fileBytes$1(this.$source, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(@NotNull Object obj) {
        b.f();
        if (this.label == 0) {
            c.b(obj);
            InputStream openRawResource = ((RiveFileSource.RawRes) this.$source).getResources().openRawResource(((RiveFileSource.RawRes) this.$source).getResId());
            try {
                Intrinsics.checkNotNull(openRawResource);
                byte[] c10 = ur.b.c(openRawResource);
                ur.c.a(openRawResource, null);
                return c10;
            } finally {
            }
        } else {
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(@NotNull CoroutineScope coroutineScope, Continuation<? super byte[]> continuation) {
        return ((RiveFile$Companion$fromSource$fileBytes$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
    }
}
