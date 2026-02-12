package k5;

import java.io.IOException;
import kotlin.Result;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlinx.coroutines.CancellableContinuation;
import okhttp3.Call;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class m implements lu.b, Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final Call f31566d;

    /* renamed from: e  reason: collision with root package name */
    private final CancellableContinuation f31567e;

    public m(Call call, CancellableContinuation cancellableContinuation) {
        this.f31566d = call;
        this.f31567e = cancellableContinuation;
    }

    public void a(Throwable th2) {
        try {
            this.f31566d.cancel();
        } catch (Throwable unused) {
        }
    }

    @Override // kotlin.jvm.functions.Function1
    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        a((Throwable) obj);
        return Unit.f31988a;
    }

    @Override // lu.b
    public void onFailure(Call call, IOException iOException) {
        if (!call.C()) {
            CancellableContinuation cancellableContinuation = this.f31567e;
            Result.a aVar = Result.f31985e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(iOException)));
        }
    }

    @Override // lu.b
    public void onResponse(Call call, Response response) {
        this.f31567e.resumeWith(Result.b(response));
    }
}
