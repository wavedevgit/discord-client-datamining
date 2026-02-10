package ej;

import android.content.Context;
import android.util.Base64OutputStream;
import com.google.android.gms.tasks.Task;
import ej.j;
import java.io.ByteArrayOutputStream;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.concurrent.Executor;
import java.util.zip.GZIPOutputStream;
import org.json.JSONArray;
import org.json.JSONObject;
import vi.d0;
import vi.q;
import zg.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f implements i, j {

    /* renamed from: a  reason: collision with root package name */
    private final gj.b f21714a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f21715b;

    /* renamed from: c  reason: collision with root package name */
    private final gj.b f21716c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f21717d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f21718e;

    private f(final Context context, final String str, Set set, gj.b bVar, Executor executor) {
        this(new gj.b() { // from class: ej.c
            @Override // gj.b
            public final Object get() {
                return f.d(context, str);
            }
        }, set, executor, bVar, context);
    }

    public static /* synthetic */ String c(f fVar) {
        String byteArrayOutputStream;
        synchronized (fVar) {
            try {
                k kVar = (k) fVar.f21714a.get();
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

    public static /* synthetic */ f e(d0 d0Var, vi.d dVar) {
        return new f((Context) dVar.a(Context.class), ((si.e) dVar.a(si.e.class)).n(), dVar.c(g.class), dVar.e(oj.i.class), (Executor) dVar.f(d0Var));
    }

    public static /* synthetic */ Void f(f fVar) {
        synchronized (fVar) {
            ((k) fVar.f21714a.get()).k(System.currentTimeMillis(), ((oj.i) fVar.f21716c.get()).a());
        }
        return null;
    }

    public static vi.c g() {
        final d0 a10 = d0.a(ui.a.class, Executor.class);
        return vi.c.d(f.class, i.class, j.class).b(q.j(Context.class)).b(q.j(si.e.class)).b(q.m(g.class)).b(q.l(oj.i.class)).b(q.k(a10)).e(new vi.g() { // from class: ej.b
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return f.e(d0.this, dVar);
            }
        }).d();
    }

    @Override // ej.i
    public Task a() {
        if (!w1.j.a(this.f21715b)) {
            return m.f("");
        }
        return m.c(this.f21718e, new Callable() { // from class: ej.d
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return f.c(f.this);
            }
        });
    }

    @Override // ej.j
    public synchronized j.a b(String str) {
        long currentTimeMillis = System.currentTimeMillis();
        k kVar = (k) this.f21714a.get();
        if (kVar.i(currentTimeMillis)) {
            kVar.g();
            return j.a.GLOBAL;
        }
        return j.a.NONE;
    }

    public Task h() {
        if (this.f21717d.size() <= 0) {
            return m.f(null);
        }
        if (!w1.j.a(this.f21715b)) {
            return m.f(null);
        }
        return m.c(this.f21718e, new Callable() { // from class: ej.e
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return f.f(f.this);
            }
        });
    }

    f(gj.b bVar, Set set, Executor executor, gj.b bVar2, Context context) {
        this.f21714a = bVar;
        this.f21717d = set;
        this.f21718e = executor;
        this.f21716c = bVar2;
        this.f21715b = context;
    }
}
