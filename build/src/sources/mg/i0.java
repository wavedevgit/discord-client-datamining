package mg;

import android.content.Context;
import com.google.android.gms.dynamite.DynamiteModule;
import com.google.android.gms.tasks.Task;
import java.util.HashMap;
import java.util.Objects;
import java.util.concurrent.Callable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 {

    /* renamed from: i  reason: collision with root package name */
    private static final i f37165i = i.c("optional-module-barcode", "com.google.android.gms.vision.barcode");

    /* renamed from: a  reason: collision with root package name */
    private final String f37166a;

    /* renamed from: b  reason: collision with root package name */
    private final String f37167b;

    /* renamed from: c  reason: collision with root package name */
    private final b0 f37168c;

    /* renamed from: d  reason: collision with root package name */
    private final tj.m f37169d;

    /* renamed from: e  reason: collision with root package name */
    private final Task f37170e;

    /* renamed from: f  reason: collision with root package name */
    private final Task f37171f;

    /* renamed from: g  reason: collision with root package name */
    private final String f37172g;

    /* renamed from: h  reason: collision with root package name */
    private final int f37173h;

    public i0(Context context, final tj.m mVar, b0 b0Var, String str) {
        int i10;
        new HashMap();
        new HashMap();
        this.f37166a = context.getPackageName();
        this.f37167b = tj.c.a(context);
        this.f37169d = mVar;
        this.f37168c = b0Var;
        s0.a();
        this.f37172g = str;
        this.f37170e = tj.g.a().b(new Callable() { // from class: mg.g0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return i0.this.a();
            }
        });
        tj.g a10 = tj.g.a();
        Objects.requireNonNull(mVar);
        this.f37171f = a10.b(new Callable() { // from class: mg.h0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return tj.m.this.a();
            }
        });
        i iVar = f37165i;
        if (iVar.containsKey(str)) {
            i10 = DynamiteModule.c(context, (String) iVar.get(str));
        } else {
            i10 = -1;
        }
        this.f37173h = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ String a() {
        return gf.m.a().b(this.f37172g);
    }
}
