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
    private final Call f32134d;

    /* renamed from: e  reason: collision with root package name */
    private final CancellableContinuation f32135e;

    public m(Call call, CancellableContinuation cancellableContinuation) {
        this.f32134d = call;
        this.f32135e = cancellableContinuation;
    }

    public void a(Throwable th2) {
        try {
            this.f32134d.cancel();
        } catch (Throwable unused) {
        }
    }

    @Override // kotlin.jvm.functions.Function1
    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        a((Throwable) obj);
        return Unit.f32556a;
    }

    @Override // lu.b
    public void onFailure(Call call, IOException iOException) {
        if (!call.C()) {
            CancellableContinuation cancellableContinuation = this.f32135e;
            Result.a aVar = Result.f32553e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(iOException)));
        }
    }

    @Override // lu.b
    public void onResponse(Call call, Response response) {
        this.f32135e.resumeWith(Result.b(response));
    }
}
