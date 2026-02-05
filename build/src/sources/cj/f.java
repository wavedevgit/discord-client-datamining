package cj;

import android.content.Context;
import android.util.Base64OutputStream;
import cj.j;
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
import ti.d0;
import ti.q;
import xg.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f implements i, j {

    /* renamed from: a  reason: collision with root package name */
    private final ej.b f7646a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f7647b;

    /* renamed from: c  reason: collision with root package name */
    private final ej.b f7648c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f7649d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f7650e;

    private f(final Context context, final String str, Set set, ej.b bVar, Executor executor) {
        this(new ej.b() { // from class: cj.c
            @Override // ej.b
            public final Object get() {
                return f.d(context, str);
            }
        }, set, executor, bVar, context);
    }

    public static /* synthetic */ String c(f fVar) {
        String byteArrayOutputStream;
        synchronized (fVar) {
            try {
                k kVar = (k) fVar.f7646a.get();
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

    public static /* synthetic */ f e(d0 d0Var, ti.d dVar) {
        return new f((Context) dVar.a(Context.class), ((qi.e) dVar.a(qi.e.class)).n(), dVar.b(g.class), dVar.e(mj.i.class), (Executor) dVar.g(d0Var));
    }

    public static /* synthetic */ Void f(f fVar) {
        synchronized (fVar) {
            ((k) fVar.f7646a.get()).k(System.currentTimeMillis(), ((mj.i) fVar.f7648c.get()).a());
        }
        return null;
    }

    public static ti.c g() {
        final d0 a10 = d0.a(si.a.class, Executor.class);
        return ti.c.d(f.class, i.class, j.class).b(q.j(Context.class)).b(q.j(qi.e.class)).b(q.m(g.class)).b(q.l(mj.i.class)).b(q.k(a10)).e(new ti.g() { // from class: cj.b
            @Override // ti.g
            public final Object a(ti.d dVar) {
                return f.e(d0.this, dVar);
            }
        }).d();
    }

    @Override // cj.i
    public Task a() {
        if (!w1.j.a(this.f7647b)) {
            return m.f("");
        }
        return m.c(this.f7650e, new Callable() { // from class: cj.d
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return f.c(f.this);
            }
        });
    }

    @Override // cj.j
    public synchronized j.a b(String str) {
        long currentTimeMillis = System.currentTimeMillis();
        k kVar = (k) this.f7646a.get();
        if (kVar.i(currentTimeMillis)) {
            kVar.g();
            return j.a.GLOBAL;
        }
        return j.a.NONE;
    }

    public Task h() {
        if (this.f7649d.size() <= 0) {
            return m.f(null);
        }
        if (!w1.j.a(this.f7647b)) {
            return m.f(null);
        }
        return m.c(this.f7650e, new Callable() { // from class: cj.e
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return f.f(f.this);
            }
        });
    }

    f(ej.b bVar, Set set, Executor executor, ej.b bVar2, Context context) {
        this.f7646a = bVar;
        this.f7649d = set;
        this.f7650e = executor;
        this.f7648c = bVar2;
        this.f7647b = context;
    }
}
