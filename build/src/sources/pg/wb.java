package pg;

import android.content.Context;
import android.content.res.Resources;
import android.os.SystemClock;
import androidx.core.os.LocaleListCompat;
import com.google.android.gms.dynamite.DynamiteModule;
import com.google.android.gms.tasks.Task;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Callable;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class wb {

    /* renamed from: k  reason: collision with root package name */
    private static mc f44153k;

    /* renamed from: l  reason: collision with root package name */
    private static final oc f44154l = oc.c("optional-module-barcode", "com.google.android.gms.vision.barcode");

    /* renamed from: a  reason: collision with root package name */
    private final String f44155a;

    /* renamed from: b  reason: collision with root package name */
    private final String f44156b;

    /* renamed from: c  reason: collision with root package name */
    private final pb f44157c;

    /* renamed from: d  reason: collision with root package name */
    private final uj.m f44158d;

    /* renamed from: e  reason: collision with root package name */
    private final Task f44159e;

    /* renamed from: f  reason: collision with root package name */
    private final Task f44160f;

    /* renamed from: g  reason: collision with root package name */
    private final String f44161g;

    /* renamed from: h  reason: collision with root package name */
    private final int f44162h;

    /* renamed from: i  reason: collision with root package name */
    private final Map f44163i = new HashMap();

    /* renamed from: j  reason: collision with root package name */
    private final Map f44164j = new HashMap();

    public wb(Context context, final uj.m mVar, pb pbVar, String str) {
        int i10;
        this.f44155a = context.getPackageName();
        this.f44156b = uj.c.a(context);
        this.f44158d = mVar;
        this.f44157c = pbVar;
        jc.a();
        this.f44161g = str;
        this.f44159e = uj.g.a().b(new Callable() { // from class: pg.tb
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return wb.this.a();
            }
        });
        uj.g a10 = uj.g.a();
        mVar.getClass();
        this.f44160f = a10.b(new Callable() { // from class: pg.ub
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return uj.m.this.a();
            }
        });
        oc ocVar = f44154l;
        if (ocVar.containsKey(str)) {
            i10 = DynamiteModule.c(context, (String) ocVar.get(str));
        } else {
            i10 = -1;
        }
        this.f44162h = i10;
    }

    private static synchronized mc d() {
        synchronized (wb.class) {
            try {
                mc mcVar = f44153k;
                if (mcVar != null) {
                    return mcVar;
                }
                LocaleListCompat a10 = w1.e.a(Resources.getSystem().getConfiguration());
                mb mbVar = new mb();
                for (int i10 = 0; i10 < a10.f(); i10++) {
                    mbVar.c(uj.c.b(a10.c(i10)));
                }
                mc d10 = mbVar.d();
                f44153k = d10;
                return d10;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ String a() {
        return hf.m.a().b(this.f44161g);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void b(ob obVar, e8 e8Var, String str) {
        String a10;
        obVar.d(e8Var);
        String a11 = obVar.a();
        ja jaVar = new ja();
        jaVar.b(this.f44155a);
        jaVar.c(this.f44156b);
        jaVar.h(d());
        jaVar.g(Boolean.TRUE);
        jaVar.l(a11);
        jaVar.j(str);
        if (this.f44160f.p()) {
            a10 = (String) this.f44160f.l();
        } else {
            a10 = this.f44158d.a();
        }
        jaVar.i(a10);
        jaVar.d(10);
        jaVar.k(Integer.valueOf(this.f44162h));
        obVar.b(jaVar);
        this.f44157c.a(obVar);
    }

    public final void c(gc gcVar, final e8 e8Var) {
        r7 r7Var;
        x7 x7Var;
        final String b10;
        long elapsedRealtime = SystemClock.elapsedRealtime();
        if (this.f44163i.get(e8Var) != null && elapsedRealtime - ((Long) this.f44163i.get(e8Var)).longValue() <= TimeUnit.SECONDS.toMillis(30L)) {
            return;
        }
        this.f44163i.put(e8Var, Long.valueOf(elapsedRealtime));
        int i10 = gcVar.f43574a;
        int i11 = gcVar.f43575b;
        int i12 = gcVar.f43576c;
        int i13 = gcVar.f43577d;
        int i14 = gcVar.f43578e;
        long j10 = gcVar.f43579f;
        int i15 = gcVar.f43580g;
        w7 w7Var = new w7();
        if (i10 != -1) {
            if (i10 != 35) {
                if (i10 != 842094169) {
                    if (i10 != 16) {
                        if (i10 != 17) {
                            r7Var = r7.UNKNOWN_FORMAT;
                        } else {
                            r7Var = r7.NV21;
                        }
                    } else {
                        r7Var = r7.NV16;
                    }
                } else {
                    r7Var = r7.YV12;
                }
            } else {
                r7Var = r7.YUV_420_888;
            }
        } else {
            r7Var = r7.BITMAP;
        }
        w7Var.d(r7Var);
        if (i11 != 1) {
            if (i11 != 2) {
                if (i11 != 3) {
                    if (i11 != 4) {
                        x7Var = x7.ANDROID_MEDIA_IMAGE;
                    } else {
                        x7Var = x7.FILEPATH;
                    }
                } else {
                    x7Var = x7.BYTEBUFFER;
                }
            } else {
                x7Var = x7.BYTEARRAY;
            }
        } else {
            x7Var = x7.BITMAP;
        }
        w7Var.f(x7Var);
        w7Var.c(Integer.valueOf(i12));
        w7Var.e(Integer.valueOf(i13));
        w7Var.g(Integer.valueOf(i14));
        w7Var.b(Long.valueOf(j10));
        w7Var.h(Integer.valueOf(i15));
        z7 j11 = w7Var.j();
        f8 f8Var = new f8();
        f8Var.d(j11);
        final ob e10 = xb.e(f8Var);
        if (this.f44159e.p()) {
            b10 = (String) this.f44159e.l();
        } else {
            b10 = hf.m.a().b(this.f44161g);
        }
        uj.g.d().execute(new Runnable() { // from class: pg.vb
            @Override // java.lang.Runnable
            public final void run() {
                wb.this.b(e10, e8Var, b10);
            }
        });
    }
}
