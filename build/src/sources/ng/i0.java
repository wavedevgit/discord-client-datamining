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
    private static final i f38850i = i.c("optional-module-barcode", "com.google.android.gms.vision.barcode");

    /* renamed from: a  reason: collision with root package name */
    private final String f38851a;

    /* renamed from: b  reason: collision with root package name */
    private final String f38852b;

    /* renamed from: c  reason: collision with root package name */
    private final b0 f38853c;

    /* renamed from: d  reason: collision with root package name */
    private final uj.m f38854d;

    /* renamed from: e  reason: collision with root package name */
    private final Task f38855e;

    /* renamed from: f  reason: collision with root package name */
    private final Task f38856f;

    /* renamed from: g  reason: collision with root package name */
    private final String f38857g;

    /* renamed from: h  reason: collision with root package name */
    private final int f38858h;

    public i0(Context context, final uj.m mVar, b0 b0Var, String str) {
        int i10;
        new HashMap();
        new HashMap();
        this.f38851a = context.getPackageName();
        this.f38852b = uj.c.a(context);
        this.f38854d = mVar;
        this.f38853c = b0Var;
        s0.a();
        this.f38857g = str;
        this.f38855e = uj.g.a().b(new Callable() { // from class: ng.g0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return i0.this.a();
            }
        });
        uj.g a10 = uj.g.a();
        Objects.requireNonNull(mVar);
        this.f38856f = a10.b(new Callable() { // from class: ng.h0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return uj.m.this.a();
            }
        });
        i iVar = f38850i;
        if (iVar.containsKey(str)) {
            i10 = DynamiteModule.c(context, (String) iVar.get(str));
        } else {
            i10 = -1;
        }
        this.f38858h = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ String a() {
        return hf.m.a().b(this.f38857g);
    }
}
