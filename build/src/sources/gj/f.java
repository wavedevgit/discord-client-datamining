package gj;

import android.content.Context;
import android.util.Base64OutputStream;
import com.google.android.gms.tasks.Task;
import gj.j;
import java.io.ByteArrayOutputStream;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
import java.util.zip.GZIPOutputStream;
import org.json.JSONArray;
import org.json.JSONObject;
import xi.d0;
import xi.q;
import zg.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f implements i, j {

    /* renamed from: a  reason: collision with root package name */
    private final ij.b f25729a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f25730b;

    /* renamed from: c  reason: collision with root package name */
    private final ij.b f25731c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f25732d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f25733e;

    private f(final Context context, final String str, Set set, ij.b bVar, Executor executor) {
        this(new ij.b() { // from class: gj.c
            @Override // ij.b
            public final Object get() {
                return f.d(context, str);
            }
        }, set, executor, bVar, context);
    }

    public static /* synthetic */ String c(f fVar) {
        String byteArrayOutputStream;
        synchronized (fVar) {
            try {
                k kVar = (k) fVar.f25729a.get();
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

    public static /* synthetic */ f e(d0 d0Var, xi.d dVar) {
        return new f((Context) dVar.a(Context.class), ((ui.e) dVar.a(ui.e.class)).n(), dVar.e(g.class), dVar.g(qj.i.class), (Executor) dVar.f(d0Var));
    }

    public static /* synthetic */ Void f(f fVar) {
        synchronized (fVar) {
            ((k) fVar.f25729a.get()).k(System.currentTimeMillis(), ((qj.i) fVar.f25731c.get()).a());
        }
        return null;
    }

    public static xi.c g() {
        final d0 a10 = d0.a(wi.a.class, Executor.class);
        return xi.c.d(f.class, i.class, j.class).b(q.j(Context.class)).b(q.j(ui.e.class)).b(q.m(g.class)).b(q.l(qj.i.class)).b(q.k(a10)).e(new xi.g() { // from class: gj.b
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return f.e(d0.this, dVar);
            }
        }).d();
    }

    @Override // gj.i
    public Task a() {
        if (!w1.j.a(this.f25730b)) {
            return m.f("");
        }
        return m.c(this.f25733e, new Callable() { // from class: gj.d
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return f.c(f.this);
            }
        });
    }

    @Override // gj.j
    public synchronized j.a b(String str) {
        long currentTimeMillis = System.currentTimeMillis();
        k kVar = (k) this.f25729a.get();
        if (kVar.i(currentTimeMillis)) {
            kVar.g();
            return j.a.GLOBAL;
        }
        return j.a.NONE;
    }

    public Task h() {
        if (this.f25732d.size() <= 0) {
            return m.f(null);
        }
        if (!w1.j.a(this.f25730b)) {
            return m.f(null);
        }
        return m.c(this.f25733e, new Callable() { // from class: gj.e
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return f.f(f.this);
            }
        });
    }

    f(ij.b bVar, Set set, Executor executor, ij.b bVar2, Context context) {
        this.f25729a = bVar;
        this.f25732d = set;
        this.f25733e = executor;
        this.f25731c = bVar2;
        this.f25730b = context;
    }
}
