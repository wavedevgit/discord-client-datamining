package k5;

import java.io.IOException;
import kotlin.Result;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlinx.coroutines.CancellableContinuation;
import okhttp3.Call;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class m implements zt.b, Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final Call f31647d;

    /* renamed from: e  reason: collision with root package name */
    private final CancellableContinuation f31648e;

    public m(Call call, CancellableContinuation cancellableContinuation) {
        this.f31647d = call;
        this.f31648e = cancellableContinuation;
    }

    public void a(Throwable th2) {
        try {
            this.f31647d.cancel();
        } catch (Throwable unused) {
        }
    }

    @Override // kotlin.jvm.functions.Function1
    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        a((Throwable) obj);
        return Unit.f31988a;
    }

    @Override // zt.b
    public void onFailure(Call call, IOException iOException) {
        if (!call.y()) {
            CancellableContinuation cancellableContinuation = this.f31648e;
            Result.a aVar = Result.f31985e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(iOException)));
        }
    }

    @Override // zt.b
    public void onResponse(Call call, Response response) {
        this.f31648e.resumeWith(Result.b(response));
    }
}
