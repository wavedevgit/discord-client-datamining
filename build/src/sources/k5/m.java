package k5;

import java.io.IOException;
import kotlin.Result;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlinx.coroutines.CancellableContinuation;
import okhttp3.Call;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class m implements cu.b, Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final Call f30707d;

    /* renamed from: e  reason: collision with root package name */
    private final CancellableContinuation f30708e;

    public m(Call call, CancellableContinuation cancellableContinuation) {
        this.f30707d = call;
        this.f30708e = cancellableContinuation;
    }

    public void a(Throwable th2) {
        try {
            this.f30707d.cancel();
        } catch (Throwable unused) {
        }
    }

    @Override // kotlin.jvm.functions.Function1
    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        a((Throwable) obj);
        return Unit.f31765a;
    }

    @Override // cu.b
    public void onFailure(Call call, IOException iOException) {
        if (!call.C()) {
            CancellableContinuation cancellableContinuation = this.f30708e;
            Result.a aVar = Result.f31762e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(iOException)));
        }
    }

    @Override // cu.b
    public void onResponse(Call call, Response response) {
        this.f30708e.resumeWith(Result.b(response));
    }
}
