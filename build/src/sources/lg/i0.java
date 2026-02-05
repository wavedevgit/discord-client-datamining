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
    private static final i f36828i = i.c("optional-module-barcode", "com.google.android.gms.vision.barcode");

    /* renamed from: a  reason: collision with root package name */
    private final String f36829a;

    /* renamed from: b  reason: collision with root package name */
    private final String f36830b;

    /* renamed from: c  reason: collision with root package name */
    private final b0 f36831c;

    /* renamed from: d  reason: collision with root package name */
    private final sj.m f36832d;

    /* renamed from: e  reason: collision with root package name */
    private final Task f36833e;

    /* renamed from: f  reason: collision with root package name */
    private final Task f36834f;

    /* renamed from: g  reason: collision with root package name */
    private final String f36835g;

    /* renamed from: h  reason: collision with root package name */
    private final int f36836h;

    public i0(Context context, final sj.m mVar, b0 b0Var, String str) {
        int i10;
        new HashMap();
        new HashMap();
        this.f36829a = context.getPackageName();
        this.f36830b = sj.c.a(context);
        this.f36832d = mVar;
        this.f36831c = b0Var;
        s0.a();
        this.f36835g = str;
        this.f36833e = sj.g.a().b(new Callable() { // from class: lg.g0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return i0.this.a();
            }
        });
        sj.g a10 = sj.g.a();
        Objects.requireNonNull(mVar);
        this.f36834f = a10.b(new Callable() { // from class: lg.h0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return sj.m.this.a();
            }
        });
        i iVar = f36828i;
        if (iVar.containsKey(str)) {
            i10 = DynamiteModule.b(context, (String) iVar.get(str));
        } else {
            i10 = -1;
        }
        this.f36836h = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ String a() {
        return gf.m.a().b(this.f36835g);
    }
}
