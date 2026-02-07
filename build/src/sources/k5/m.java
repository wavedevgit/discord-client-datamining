package k5;

import java.io.IOException;
import kotlin.Result;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlinx.coroutines.CancellableContinuation;
import okhttp3.Call;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class m implements bu.b, Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final Call f31539d;

    /* renamed from: e  reason: collision with root package name */
    private final CancellableContinuation f31540e;

    public m(Call call, CancellableContinuation cancellableContinuation) {
        this.f31539d = call;
        this.f31540e = cancellableContinuation;
    }

    public void a(Throwable th2) {
        try {
            this.f31539d.cancel();
        } catch (Throwable unused) {
        }
    }

    @Override // kotlin.jvm.functions.Function1
    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        a((Throwable) obj);
        return Unit.f32056a;
    }

    @Override // bu.b
    public void onFailure(Call call, IOException iOException) {
        if (!call.C()) {
            CancellableContinuation cancellableContinuation = this.f31540e;
            Result.a aVar = Result.f32053e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(iOException)));
        }
    }

    @Override // bu.b
    public void onResponse(Call call, Response response) {
        this.f31540e.resumeWith(Result.b(response));
    }
}
