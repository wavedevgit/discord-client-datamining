package zi;

import android.content.Context;
import android.util.Base64OutputStream;
import com.google.android.gms.tasks.Task;
import java.io.ByteArrayOutputStream;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
import java.util.zip.GZIPOutputStream;
import org.json.JSONArray;
import org.json.JSONObject;
import qi.d0;
import qi.q;
import wg.m;
import zi.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f implements i, j {

    /* renamed from: a  reason: collision with root package name */
    private final bj.b f55852a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f55853b;

    /* renamed from: c  reason: collision with root package name */
    private final bj.b f55854c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f55855d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f55856e;

    private f(final Context context, final String str, Set set, bj.b bVar, Executor executor) {
        this(new bj.b() { // from class: zi.c
            @Override // bj.b
            public final Object get() {
                return f.d(context, str);
            }
        }, set, executor, bVar, context);
    }

    public static /* synthetic */ String c(f fVar) {
        String byteArrayOutputStream;
        synchronized (fVar) {
            try {
                k kVar = (k) fVar.f55852a.get();
                List c10 = kVar.c();
                kVar.b();
                JSONArray jSONArray = new JSONArray();
                for (int i10 = 0; i10 < c10.size(); i10++) {
                    l lVar = (l) c10.get(i10);
                    JSONObject jSONObject = new JSONObject();
                    jSONObject.put("agent", lVar.c());
                    jSONObject.put("dates", new JSONArray((Collection) lVar.b()));
                    jSONArray.put(jSONObject);
                }
                JSONObject jSONObject2 = new JSONObject();
                jSONObject2.put("heartbeats", jSONArray);
                jSONObject2.put("version", "2");
                ByteArrayOutputStream byteArrayOutputStream2 = new ByteArrayOutputStream();
                Base64OutputStream base64OutputStream = new Base64OutputStream(byteArrayOutputStream2, 11);
                GZIPOutputStream gZIPOutputStream = new GZIPOutputStream(base64OutputStream);
                gZIPOutputStream.write(jSONObject2.toString().getBytes("UTF-8"));
                gZIPOutputStream.close();
                base64OutputStream.close();
                byteArrayOutputStream = byteArrayOutputStream2.toString("UTF-8");
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return byteArrayOutputStream;
    }

    public static /* synthetic */ k d(Context context, String str) {
        return new k(context, str);
    }

    public static /* synthetic */ f e(d0 d0Var, qi.d dVar) {
        return new f((Context) dVar.a(Context.class), ((ni.e) dVar.a(ni.e.class)).n(), dVar.b(g.class), dVar.c(jj.i.class), (Executor) dVar.d(d0Var));
    }

    public static /* synthetic */ Void f(f fVar) {
        synchronized (fVar) {
            ((k) fVar.f55852a.get()).k(System.currentTimeMillis(), ((jj.i) fVar.f55854c.get()).a());
        }
        return null;
    }

    public static qi.c g() {
        final d0 a10 = d0.a(pi.a.class, Executor.class);
        return qi.c.d(f.class, i.class, j.class).b(q.j(Context.class)).b(q.j(ni.e.class)).b(q.m(g.class)).b(q.l(jj.i.class)).b(q.k(a10)).e(new qi.g() { // from class: zi.b
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return f.e(d0.this, dVar);
            }
        }).d();
    }

    @Override // zi.i
    public Task a() {
        if (!w1.j.a(this.f55853b)) {
            return m.f("");
        }
        return m.c(this.f55856e, new Callable() { // from class: zi.d
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return f.c(f.this);
            }
        });
    }

    @Override // zi.j
    public synchronized j.a b(String str) {
        long currentTimeMillis = System.currentTimeMillis();
        k kVar = (k) this.f55852a.get();
        if (kVar.i(currentTimeMillis)) {
            kVar.g();
            return j.a.GLOBAL;
        }
        return j.a.NONE;
    }

    public Task h() {
        if (this.f55855d.size() <= 0) {
            return m.f(null);
        }
        if (!w1.j.a(this.f55853b)) {
            return m.f(null);
        }
        return m.c(this.f55856e, new Callable() { // from class: zi.e
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return f.f(f.this);
            }
        });
    }

    f(bj.b bVar, Set set, Executor executor, bj.b bVar2, Context context) {
        this.f55852a = bVar;
        this.f55855d = set;
        this.f55856e = executor;
        this.f55854c = bVar2;
        this.f55853b = context;
    }
}
