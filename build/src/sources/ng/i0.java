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
    private static final i f37854i = i.c("optional-module-barcode", "com.google.android.gms.vision.barcode");

    /* renamed from: a  reason: collision with root package name */
    private final String f37855a;

    /* renamed from: b  reason: collision with root package name */
    private final String f37856b;

    /* renamed from: c  reason: collision with root package name */
    private final b0 f37857c;

    /* renamed from: d  reason: collision with root package name */
    private final wj.m f37858d;

    /* renamed from: e  reason: collision with root package name */
    private final Task f37859e;

    /* renamed from: f  reason: collision with root package name */
    private final Task f37860f;

    /* renamed from: g  reason: collision with root package name */
    private final String f37861g;

    /* renamed from: h  reason: collision with root package name */
    private final int f37862h;

    public i0(Context context, final wj.m mVar, b0 b0Var, String str) {
        int i10;
        new HashMap();
        new HashMap();
        this.f37855a = context.getPackageName();
        this.f37856b = wj.c.a(context);
        this.f37858d = mVar;
        this.f37857c = b0Var;
        s0.a();
        this.f37861g = str;
        this.f37859e = wj.g.a().b(new Callable() { // from class: ng.g0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return i0.this.a();
            }
        });
        wj.g a10 = wj.g.a();
        Objects.requireNonNull(mVar);
        this.f37860f = a10.b(new Callable() { // from class: ng.h0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return wj.m.this.a();
            }
        });
        i iVar = f37854i;
        if (iVar.containsKey(str)) {
            i10 = DynamiteModule.c(context, (String) iVar.get(str));
        } else {
            i10 = -1;
        }
        this.f37862h = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ String a() {
        return hf.m.a().b(this.f37861g);
    }
}
