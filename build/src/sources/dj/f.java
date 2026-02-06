package dj;

import android.content.Context;
import android.util.Base64OutputStream;
import com.google.android.gms.tasks.Task;
import dj.j;
import java.io.ByteArrayOutputStream;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
import java.util.zip.GZIPOutputStream;
import org.json.JSONArray;
import org.json.JSONObject;
import ui.d0;
import ui.q;
import yg.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f implements i, j {

    /* renamed from: a  reason: collision with root package name */
    private final fj.b f20793a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f20794b;

    /* renamed from: c  reason: collision with root package name */
    private final fj.b f20795c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f20796d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f20797e;

    private f(final Context context, final String str, Set set, fj.b bVar, Executor executor) {
        this(new fj.b() { // from class: dj.c
            @Override // fj.b
            public final Object get() {
                return f.d(context, str);
            }
        }, set, executor, bVar, context);
    }

    public static /* synthetic */ String c(f fVar) {
        String byteArrayOutputStream;
        synchronized (fVar) {
            try {
                k kVar = (k) fVar.f20793a.get();
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

    public static /* synthetic */ f e(d0 d0Var, ui.d dVar) {
        return new f((Context) dVar.a(Context.class), ((ri.e) dVar.a(ri.e.class)).n(), dVar.b(g.class), dVar.g(nj.i.class), (Executor) dVar.e(d0Var));
    }

    public static /* synthetic */ Void f(f fVar) {
        synchronized (fVar) {
            ((k) fVar.f20793a.get()).k(System.currentTimeMillis(), ((nj.i) fVar.f20795c.get()).a());
        }
        return null;
    }

    public static ui.c g() {
        final d0 a10 = d0.a(ti.a.class, Executor.class);
        return ui.c.d(f.class, i.class, j.class).b(q.j(Context.class)).b(q.j(ri.e.class)).b(q.m(g.class)).b(q.l(nj.i.class)).b(q.k(a10)).e(new ui.g() { // from class: dj.b
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return f.e(d0.this, dVar);
            }
        }).d();
    }

    @Override // dj.i
    public Task a() {
        if (!w1.j.a(this.f20794b)) {
            return m.f("");
        }
        return m.c(this.f20797e, new Callable() { // from class: dj.d
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return f.c(f.this);
            }
        });
    }

    @Override // dj.j
    public synchronized j.a b(String str) {
        long currentTimeMillis = System.currentTimeMillis();
        k kVar = (k) this.f20793a.get();
        if (kVar.i(currentTimeMillis)) {
            kVar.g();
            return j.a.GLOBAL;
        }
        return j.a.NONE;
    }

    public Task h() {
        if (this.f20796d.size() <= 0) {
            return m.f(null);
        }
        if (!w1.j.a(this.f20794b)) {
            return m.f(null);
        }
        return m.c(this.f20797e, new Callable() { // from class: dj.e
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return f.f(f.this);
            }
        });
    }

    f(fj.b bVar, Set set, Executor executor, fj.b bVar2, Context context) {
        this.f20793a = bVar;
        this.f20796d = set;
        this.f20797e = executor;
        this.f20795c = bVar2;
        this.f20794b = context;
    }
}
