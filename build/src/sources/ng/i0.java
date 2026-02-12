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
    private static final i f37855i = i.c("optional-module-barcode", "com.google.android.gms.vision.barcode");

    /* renamed from: a  reason: collision with root package name */
    private final String f37856a;

    /* renamed from: b  reason: collision with root package name */
    private final String f37857b;

    /* renamed from: c  reason: collision with root package name */
    private final b0 f37858c;

    /* renamed from: d  reason: collision with root package name */
    private final wj.m f37859d;

    /* renamed from: e  reason: collision with root package name */
    private final Task f37860e;

    /* renamed from: f  reason: collision with root package name */
    private final Task f37861f;

    /* renamed from: g  reason: collision with root package name */
    private final String f37862g;

    /* renamed from: h  reason: collision with root package name */
    private final int f37863h;

    public i0(Context context, final wj.m mVar, b0 b0Var, String str) {
        int i10;
        new HashMap();
        new HashMap();
        this.f37856a = context.getPackageName();
        this.f37857b = wj.c.a(context);
        this.f37859d = mVar;
        this.f37858c = b0Var;
        s0.a();
        this.f37862g = str;
        this.f37860e = wj.g.a().b(new Callable() { // from class: ng.g0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return i0.this.a();
            }
        });
        wj.g a10 = wj.g.a();
        Objects.requireNonNull(mVar);
        this.f37861f = a10.b(new Callable() { // from class: ng.h0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return wj.m.this.a();
            }
        });
        i iVar = f37855i;
        if (iVar.containsKey(str)) {
            i10 = DynamiteModule.c(context, (String) iVar.get(str));
        } else {
            i10 = -1;
        }
        this.f37863h = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ String a() {
        return hf.m.a().b(this.f37862g);
    }
}
