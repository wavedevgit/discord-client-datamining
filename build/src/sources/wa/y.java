package wa;

import com.facebook.imagepipeline.memory.AshmemMemoryChunkPool;
import com.facebook.imagepipeline.memory.BufferMemoryChunkPool;
import com.facebook.imagepipeline.memory.NativeMemoryChunkPool;
import java.lang.reflect.InvocationTargetException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final w f53025a;

    /* renamed from: b  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f53026b;

    /* renamed from: c  reason: collision with root package name */
    private d f53027c;

    /* renamed from: d  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f53028d;

    /* renamed from: e  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.d f53029e;

    /* renamed from: f  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f53030f;

    /* renamed from: g  reason: collision with root package name */
    private s8.i f53031g;

    /* renamed from: h  reason: collision with root package name */
    private s8.l f53032h;

    /* renamed from: i  reason: collision with root package name */
    private s8.a f53033i;

    public y(w wVar) {
        this.f53025a = (w) p8.j.g(wVar);
    }

    private com.facebook.imagepipeline.memory.f a() {
        if (this.f53026b == null) {
            try {
                this.f53026b = (com.facebook.imagepipeline.memory.f) AshmemMemoryChunkPool.class.getConstructor(s8.d.class, z.class, a0.class).newInstance(this.f53025a.i(), this.f53025a.g(), this.f53025a.h());
            } catch (ClassNotFoundException unused) {
                this.f53026b = null;
            } catch (IllegalAccessException unused2) {
                this.f53026b = null;
            } catch (InstantiationException unused3) {
                this.f53026b = null;
            } catch (NoSuchMethodException unused4) {
                this.f53026b = null;
            } catch (InvocationTargetException unused5) {
                this.f53026b = null;
            }
        }
        return this.f53026b;
    }

    private com.facebook.imagepipeline.memory.f f(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 == 2) {
                    return a();
                }
                throw new IllegalArgumentException("Invalid MemoryChunkType");
            }
            return c();
        }
        return g();
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    public d b() {
        s8.d dVar;
        if (this.f53027c == null) {
            String e10 = this.f53025a.e();
            switch (e10.hashCode()) {
                case -1868884870:
                    if (e10.equals("legacy_default_params")) {
                        this.f53027c = new com.facebook.imagepipeline.memory.c(this.f53025a.i(), i.a(), this.f53025a.d(), this.f53025a.l());
                        break;
                    }
                    this.f53027c = new com.facebook.imagepipeline.memory.c(this.f53025a.i(), this.f53025a.c(), this.f53025a.d(), this.f53025a.l());
                    break;
                case -1106578487:
                    e10.equals("legacy");
                    this.f53027c = new com.facebook.imagepipeline.memory.c(this.f53025a.i(), this.f53025a.c(), this.f53025a.d(), this.f53025a.l());
                    break;
                case -404562712:
                    if (e10.equals("experimental")) {
                        int b10 = this.f53025a.b();
                        int a10 = this.f53025a.a();
                        u h10 = u.h();
                        if (this.f53025a.m()) {
                            dVar = this.f53025a.i();
                        } else {
                            dVar = null;
                        }
                        this.f53027c = new o(b10, a10, h10, dVar);
                        break;
                    }
                    this.f53027c = new com.facebook.imagepipeline.memory.c(this.f53025a.i(), this.f53025a.c(), this.f53025a.d(), this.f53025a.l());
                    break;
                case -402149703:
                    if (e10.equals("dummy_with_tracking")) {
                        this.f53027c = new n();
                        break;
                    }
                    this.f53027c = new com.facebook.imagepipeline.memory.c(this.f53025a.i(), this.f53025a.c(), this.f53025a.d(), this.f53025a.l());
                    break;
                case 95945896:
                    if (e10.equals("dummy")) {
                        this.f53027c = new m();
                        break;
                    }
                    this.f53027c = new com.facebook.imagepipeline.memory.c(this.f53025a.i(), this.f53025a.c(), this.f53025a.d(), this.f53025a.l());
                    break;
                default:
                    this.f53027c = new com.facebook.imagepipeline.memory.c(this.f53025a.i(), this.f53025a.c(), this.f53025a.d(), this.f53025a.l());
                    break;
            }
        }
        return this.f53027c;
    }

    public com.facebook.imagepipeline.memory.f c() {
        if (this.f53028d == null) {
            try {
                this.f53028d = (com.facebook.imagepipeline.memory.f) BufferMemoryChunkPool.class.getConstructor(s8.d.class, z.class, a0.class).newInstance(this.f53025a.i(), this.f53025a.g(), this.f53025a.h());
            } catch (ClassNotFoundException unused) {
                this.f53028d = null;
            } catch (IllegalAccessException unused2) {
                this.f53028d = null;
            } catch (InstantiationException unused3) {
                this.f53028d = null;
            } catch (NoSuchMethodException unused4) {
                this.f53028d = null;
            } catch (InvocationTargetException unused5) {
                this.f53028d = null;
            }
        }
        return this.f53028d;
    }

    public com.facebook.imagepipeline.memory.d d() {
        if (this.f53029e == null) {
            this.f53029e = new com.facebook.imagepipeline.memory.d(this.f53025a.i(), this.f53025a.f());
        }
        return this.f53029e;
    }

    public int e() {
        return this.f53025a.f().f53040g;
    }

    public com.facebook.imagepipeline.memory.f g() {
        if (this.f53030f == null) {
            try {
                this.f53030f = (com.facebook.imagepipeline.memory.f) NativeMemoryChunkPool.class.getConstructor(s8.d.class, z.class, a0.class).newInstance(this.f53025a.i(), this.f53025a.g(), this.f53025a.h());
            } catch (ClassNotFoundException e10) {
                q8.a.n("PoolFactory", "", e10);
                this.f53030f = null;
            } catch (IllegalAccessException e11) {
                q8.a.n("PoolFactory", "", e11);
                this.f53030f = null;
            } catch (InstantiationException e12) {
                q8.a.n("PoolFactory", "", e12);
                this.f53030f = null;
            } catch (NoSuchMethodException e13) {
                q8.a.n("PoolFactory", "", e13);
                this.f53030f = null;
            } catch (InvocationTargetException e14) {
                q8.a.n("PoolFactory", "", e14);
                this.f53030f = null;
            }
        }
        return this.f53030f;
    }

    public s8.i h() {
        return i(!oa.u.a() ? 1 : 0);
    }

    public s8.i i(int i10) {
        if (this.f53031g == null) {
            com.facebook.imagepipeline.memory.f f10 = f(i10);
            p8.j.h(f10, "failed to get pool for chunk type: " + i10);
            this.f53031g = new t(f10, j());
        }
        return this.f53031g;
    }

    public s8.l j() {
        if (this.f53032h == null) {
            this.f53032h = new s8.l(k());
        }
        return this.f53032h;
    }

    public s8.a k() {
        if (this.f53033i == null) {
            this.f53033i = new com.facebook.imagepipeline.memory.e(this.f53025a.i(), this.f53025a.j(), this.f53025a.k());
        }
        return this.f53033i;
    }
}
