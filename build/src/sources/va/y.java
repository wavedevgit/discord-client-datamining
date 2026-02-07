package va;

import com.facebook.imagepipeline.memory.AshmemMemoryChunkPool;
import com.facebook.imagepipeline.memory.BufferMemoryChunkPool;
import com.facebook.imagepipeline.memory.NativeMemoryChunkPool;
import java.lang.reflect.InvocationTargetException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final w f52400a;

    /* renamed from: b  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f52401b;

    /* renamed from: c  reason: collision with root package name */
    private d f52402c;

    /* renamed from: d  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f52403d;

    /* renamed from: e  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.d f52404e;

    /* renamed from: f  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f52405f;

    /* renamed from: g  reason: collision with root package name */
    private r8.i f52406g;

    /* renamed from: h  reason: collision with root package name */
    private r8.l f52407h;

    /* renamed from: i  reason: collision with root package name */
    private r8.a f52408i;

    public y(w wVar) {
        this.f52400a = (w) o8.j.g(wVar);
    }

    private com.facebook.imagepipeline.memory.f a() {
        if (this.f52401b == null) {
            try {
                this.f52401b = (com.facebook.imagepipeline.memory.f) AshmemMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f52400a.i(), this.f52400a.g(), this.f52400a.h());
            } catch (ClassNotFoundException unused) {
                this.f52401b = null;
            } catch (IllegalAccessException unused2) {
                this.f52401b = null;
            } catch (InstantiationException unused3) {
                this.f52401b = null;
            } catch (NoSuchMethodException unused4) {
                this.f52401b = null;
            } catch (InvocationTargetException unused5) {
                this.f52401b = null;
            }
        }
        return this.f52401b;
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
        r8.d dVar;
        if (this.f52402c == null) {
            String e10 = this.f52400a.e();
            switch (e10.hashCode()) {
                case -1868884870:
                    if (e10.equals("legacy_default_params")) {
                        this.f52402c = new com.facebook.imagepipeline.memory.c(this.f52400a.i(), i.a(), this.f52400a.d(), this.f52400a.l());
                        break;
                    }
                    this.f52402c = new com.facebook.imagepipeline.memory.c(this.f52400a.i(), this.f52400a.c(), this.f52400a.d(), this.f52400a.l());
                    break;
                case -1106578487:
                    e10.equals("legacy");
                    this.f52402c = new com.facebook.imagepipeline.memory.c(this.f52400a.i(), this.f52400a.c(), this.f52400a.d(), this.f52400a.l());
                    break;
                case -404562712:
                    if (e10.equals("experimental")) {
                        int b10 = this.f52400a.b();
                        int a10 = this.f52400a.a();
                        u h10 = u.h();
                        if (this.f52400a.m()) {
                            dVar = this.f52400a.i();
                        } else {
                            dVar = null;
                        }
                        this.f52402c = new o(b10, a10, h10, dVar);
                        break;
                    }
                    this.f52402c = new com.facebook.imagepipeline.memory.c(this.f52400a.i(), this.f52400a.c(), this.f52400a.d(), this.f52400a.l());
                    break;
                case -402149703:
                    if (e10.equals("dummy_with_tracking")) {
                        this.f52402c = new n();
                        break;
                    }
                    this.f52402c = new com.facebook.imagepipeline.memory.c(this.f52400a.i(), this.f52400a.c(), this.f52400a.d(), this.f52400a.l());
                    break;
                case 95945896:
                    if (e10.equals("dummy")) {
                        this.f52402c = new m();
                        break;
                    }
                    this.f52402c = new com.facebook.imagepipeline.memory.c(this.f52400a.i(), this.f52400a.c(), this.f52400a.d(), this.f52400a.l());
                    break;
                default:
                    this.f52402c = new com.facebook.imagepipeline.memory.c(this.f52400a.i(), this.f52400a.c(), this.f52400a.d(), this.f52400a.l());
                    break;
            }
        }
        return this.f52402c;
    }

    public com.facebook.imagepipeline.memory.f c() {
        if (this.f52403d == null) {
            try {
                this.f52403d = (com.facebook.imagepipeline.memory.f) BufferMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f52400a.i(), this.f52400a.g(), this.f52400a.h());
            } catch (ClassNotFoundException unused) {
                this.f52403d = null;
            } catch (IllegalAccessException unused2) {
                this.f52403d = null;
            } catch (InstantiationException unused3) {
                this.f52403d = null;
            } catch (NoSuchMethodException unused4) {
                this.f52403d = null;
            } catch (InvocationTargetException unused5) {
                this.f52403d = null;
            }
        }
        return this.f52403d;
    }

    public com.facebook.imagepipeline.memory.d d() {
        if (this.f52404e == null) {
            this.f52404e = new com.facebook.imagepipeline.memory.d(this.f52400a.i(), this.f52400a.f());
        }
        return this.f52404e;
    }

    public int e() {
        return this.f52400a.f().f52415g;
    }

    public com.facebook.imagepipeline.memory.f g() {
        if (this.f52405f == null) {
            try {
                this.f52405f = (com.facebook.imagepipeline.memory.f) NativeMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f52400a.i(), this.f52400a.g(), this.f52400a.h());
            } catch (ClassNotFoundException e10) {
                p8.a.n("PoolFactory", "", e10);
                this.f52405f = null;
            } catch (IllegalAccessException e11) {
                p8.a.n("PoolFactory", "", e11);
                this.f52405f = null;
            } catch (InstantiationException e12) {
                p8.a.n("PoolFactory", "", e12);
                this.f52405f = null;
            } catch (NoSuchMethodException e13) {
                p8.a.n("PoolFactory", "", e13);
                this.f52405f = null;
            } catch (InvocationTargetException e14) {
                p8.a.n("PoolFactory", "", e14);
                this.f52405f = null;
            }
        }
        return this.f52405f;
    }

    public r8.i h() {
        return i(!na.u.a() ? 1 : 0);
    }

    public r8.i i(int i10) {
        if (this.f52406g == null) {
            com.facebook.imagepipeline.memory.f f10 = f(i10);
            o8.j.h(f10, "failed to get pool for chunk type: " + i10);
            this.f52406g = new t(f10, j());
        }
        return this.f52406g;
    }

    public r8.l j() {
        if (this.f52407h == null) {
            this.f52407h = new r8.l(k());
        }
        return this.f52407h;
    }

    public r8.a k() {
        if (this.f52408i == null) {
            this.f52408i = new com.facebook.imagepipeline.memory.e(this.f52400a.i(), this.f52400a.j(), this.f52400a.k());
        }
        return this.f52408i;
    }
}
