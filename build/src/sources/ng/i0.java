package ng;

import android.content.Context;
import com.google.android.gms.dynamite.DynamiteModule;
import com.google.android.gms.tasks.Task;
import java.util.HashMap;
import java.util.Objects;
import java.util.concurrent.Callable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i0 {

    /* renamed from: i  reason: collision with root package name */
    private static final i f38423i = i.c("optional-module-barcode", "com.google.android.gms.vision.barcode");

    /* renamed from: a  reason: collision with root package name */
    private final String f38424a;

    /* renamed from: b  reason: collision with root package name */
    private final String f38425b;

    /* renamed from: c  reason: collision with root package name */
    private final b0 f38426c;

    /* renamed from: d  reason: collision with root package name */
    private final wj.m f38427d;

    /* renamed from: e  reason: collision with root package name */
    private final Task f38428e;

    /* renamed from: f  reason: collision with root package name */
    private final Task f38429f;

    /* renamed from: g  reason: collision with root package name */
    private final String f38430g;

    /* renamed from: h  reason: collision with root package name */
    private final int f38431h;

    public i0(Context context, final wj.m mVar, b0 b0Var, String str) {
        int i10;
        new HashMap();
        new HashMap();
        this.f38424a = context.getPackageName();
        this.f38425b = wj.c.a(context);
        this.f38427d = mVar;
        this.f38426c = b0Var;
        s0.a();
        this.f38430g = str;
        this.f38428e = wj.g.a().b(new Callable() { // from class: ng.g0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return i0.this.a();
            }
        });
        wj.g a10 = wj.g.a();
        Objects.requireNonNull(mVar);
        this.f38429f = a10.b(new Callable() { // from class: ng.h0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return wj.m.this.a();
            }
        });
        i iVar = f38423i;
        if (iVar.containsKey(str)) {
            i10 = DynamiteModule.c(context, (String) iVar.get(str));
        } else {
            i10 = -1;
        }
        this.f38431h = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ String a() {
        return hf.m.a().b(this.f38430g);
    }
}
