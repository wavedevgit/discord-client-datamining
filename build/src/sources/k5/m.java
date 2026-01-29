package k5;

import java.io.IOException;
import kotlin.Result;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlinx.coroutines.CancellableContinuation;
import okhttp3.Call;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class m implements tt.b, Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final Call f33024d;

    /* renamed from: e  reason: collision with root package name */
    private final CancellableContinuation f33025e;

    public m(Call call, CancellableContinuation cancellableContinuation) {
        this.f33024d = call;
        this.f33025e = cancellableContinuation;
    }

    public void a(Throwable th2) {
        try {
            this.f33024d.cancel();
        } catch (Throwable unused) {
        }
    }

    @Override // kotlin.jvm.functions.Function1
    public /* bridge */ /* synthetic */ Object invoke(Object obj) {
        a((Throwable) obj);
        return Unit.f33282a;
    }

    @Override // tt.b
    public void onFailure(Call call, IOException iOException) {
        if (!call.x()) {
            CancellableContinuation cancellableContinuation = this.f33025e;
            Result.a aVar = Result.f33279e;
            cancellableContinuation.resumeWith(Result.b(kotlin.c.a(iOException)));
        }
    }

    @Override // tt.b
    public void onResponse(Call call, Response response) {
        this.f33025e.resumeWith(Result.b(response));
    }
}
