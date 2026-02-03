package lg;

import android.content.Context;
import com.google.android.gms.dynamite.DynamiteModule;
import com.google.android.gms.tasks.Task;
import java.util.HashMap;
import java.util.Objects;
import java.util.concurrent.Callable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 {

    /* renamed from: i  reason: collision with root package name */
    private static final i f36901i = i.c("optional-module-barcode", "com.google.android.gms.vision.barcode");

    /* renamed from: a  reason: collision with root package name */
    private final String f36902a;

    /* renamed from: b  reason: collision with root package name */
    private final String f36903b;

    /* renamed from: c  reason: collision with root package name */
    private final b0 f36904c;

    /* renamed from: d  reason: collision with root package name */
    private final pj.m f36905d;

    /* renamed from: e  reason: collision with root package name */
    private final Task f36906e;

    /* renamed from: f  reason: collision with root package name */
    private final Task f36907f;

    /* renamed from: g  reason: collision with root package name */
    private final String f36908g;

    /* renamed from: h  reason: collision with root package name */
    private final int f36909h;

    public i0(Context context, final pj.m mVar, b0 b0Var, String str) {
        int i10;
        new HashMap();
        new HashMap();
        this.f36902a = context.getPackageName();
        this.f36903b = pj.c.a(context);
        this.f36905d = mVar;
        this.f36904c = b0Var;
        s0.a();
        this.f36908g = str;
        this.f36906e = pj.g.a().b(new Callable() { // from class: lg.g0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return i0.this.a();
            }
        });
        pj.g a10 = pj.g.a();
        Objects.requireNonNull(mVar);
        this.f36907f = a10.b(new Callable() { // from class: lg.h0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return pj.m.this.a();
            }
        });
        i iVar = f36901i;
        if (iVar.containsKey(str)) {
            i10 = DynamiteModule.b(context, (String) iVar.get(str));
        } else {
            i10 = -1;
        }
        this.f36909h = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ String a() {
        return gf.m.a().b(this.f36908g);
    }
}
