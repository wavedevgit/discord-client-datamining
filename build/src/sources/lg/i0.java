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
    private static final i f37318i = i.c("optional-module-barcode", "com.google.android.gms.vision.barcode");

    /* renamed from: a  reason: collision with root package name */
    private final String f37319a;

    /* renamed from: b  reason: collision with root package name */
    private final String f37320b;

    /* renamed from: c  reason: collision with root package name */
    private final b0 f37321c;

    /* renamed from: d  reason: collision with root package name */
    private final pj.m f37322d;

    /* renamed from: e  reason: collision with root package name */
    private final Task f37323e;

    /* renamed from: f  reason: collision with root package name */
    private final Task f37324f;

    /* renamed from: g  reason: collision with root package name */
    private final String f37325g;

    /* renamed from: h  reason: collision with root package name */
    private final int f37326h;

    public i0(Context context, final pj.m mVar, b0 b0Var, String str) {
        int i10;
        new HashMap();
        new HashMap();
        this.f37319a = context.getPackageName();
        this.f37320b = pj.c.a(context);
        this.f37322d = mVar;
        this.f37321c = b0Var;
        s0.a();
        this.f37325g = str;
        this.f37323e = pj.g.a().b(new Callable() { // from class: lg.g0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return i0.this.a();
            }
        });
        pj.g a10 = pj.g.a();
        Objects.requireNonNull(mVar);
        this.f37324f = a10.b(new Callable() { // from class: lg.h0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return pj.m.this.a();
            }
        });
        i iVar = f37318i;
        if (iVar.containsKey(str)) {
            i10 = DynamiteModule.b(context, (String) iVar.get(str));
        } else {
            i10 = -1;
        }
        this.f37326h = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ String a() {
        return gf.m.a().b(this.f37325g);
    }
}
