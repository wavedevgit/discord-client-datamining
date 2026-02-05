package va;

import com.facebook.imagepipeline.memory.AshmemMemoryChunkPool;
import com.facebook.imagepipeline.memory.BufferMemoryChunkPool;
import com.facebook.imagepipeline.memory.NativeMemoryChunkPool;
import java.lang.reflect.InvocationTargetException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final w f51987a;

    /* renamed from: b  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f51988b;

    /* renamed from: c  reason: collision with root package name */
    private d f51989c;

    /* renamed from: d  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f51990d;

    /* renamed from: e  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.d f51991e;

    /* renamed from: f  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f51992f;

    /* renamed from: g  reason: collision with root package name */
    private r8.i f51993g;

    /* renamed from: h  reason: collision with root package name */
    private r8.l f51994h;

    /* renamed from: i  reason: collision with root package name */
    private r8.a f51995i;

    public y(w wVar) {
        this.f51987a = (w) o8.j.g(wVar);
    }

    private com.facebook.imagepipeline.memory.f a() {
        if (this.f51988b == null) {
            try {
                this.f51988b = (com.facebook.imagepipeline.memory.f) AshmemMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f51987a.i(), this.f51987a.g(), this.f51987a.h());
            } catch (ClassNotFoundException unused) {
                this.f51988b = null;
            } catch (IllegalAccessException unused2) {
                this.f51988b = null;
            } catch (InstantiationException unused3) {
                this.f51988b = null;
            } catch (NoSuchMethodException unused4) {
                this.f51988b = null;
            } catch (InvocationTargetException unused5) {
                this.f51988b = null;
            }
        }
        return this.f51988b;
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
        if (this.f51989c == null) {
            String e10 = this.f51987a.e();
            switch (e10.hashCode()) {
                case -1868884870:
                    if (e10.equals("legacy_default_params")) {
                        this.f51989c = new com.facebook.imagepipeline.memory.c(this.f51987a.i(), i.a(), this.f51987a.d(), this.f51987a.l());
                        break;
                    }
                    this.f51989c = new com.facebook.imagepipeline.memory.c(this.f51987a.i(), this.f51987a.c(), this.f51987a.d(), this.f51987a.l());
                    break;
                case -1106578487:
                    e10.equals("legacy");
                    this.f51989c = new com.facebook.imagepipeline.memory.c(this.f51987a.i(), this.f51987a.c(), this.f51987a.d(), this.f51987a.l());
                    break;
                case -404562712:
                    if (e10.equals("experimental")) {
                        int b10 = this.f51987a.b();
                        int a10 = this.f51987a.a();
                        u h10 = u.h();
                        if (this.f51987a.m()) {
                            dVar = this.f51987a.i();
                        } else {
                            dVar = null;
                        }
                        this.f51989c = new o(b10, a10, h10, dVar);
                        break;
                    }
                    this.f51989c = new com.facebook.imagepipeline.memory.c(this.f51987a.i(), this.f51987a.c(), this.f51987a.d(), this.f51987a.l());
                    break;
                case -402149703:
                    if (e10.equals("dummy_with_tracking")) {
                        this.f51989c = new n();
                        break;
                    }
                    this.f51989c = new com.facebook.imagepipeline.memory.c(this.f51987a.i(), this.f51987a.c(), this.f51987a.d(), this.f51987a.l());
                    break;
                case 95945896:
                    if (e10.equals("dummy")) {
                        this.f51989c = new m();
                        break;
                    }
                    this.f51989c = new com.facebook.imagepipeline.memory.c(this.f51987a.i(), this.f51987a.c(), this.f51987a.d(), this.f51987a.l());
                    break;
                default:
                    this.f51989c = new com.facebook.imagepipeline.memory.c(this.f51987a.i(), this.f51987a.c(), this.f51987a.d(), this.f51987a.l());
                    break;
            }
        }
        return this.f51989c;
    }

    public com.facebook.imagepipeline.memory.f c() {
        if (this.f51990d == null) {
            try {
                this.f51990d = (com.facebook.imagepipeline.memory.f) BufferMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f51987a.i(), this.f51987a.g(), this.f51987a.h());
            } catch (ClassNotFoundException unused) {
                this.f51990d = null;
            } catch (IllegalAccessException unused2) {
                this.f51990d = null;
            } catch (InstantiationException unused3) {
                this.f51990d = null;
            } catch (NoSuchMethodException unused4) {
                this.f51990d = null;
            } catch (InvocationTargetException unused5) {
                this.f51990d = null;
            }
        }
        return this.f51990d;
    }

    public com.facebook.imagepipeline.memory.d d() {
        if (this.f51991e == null) {
            this.f51991e = new com.facebook.imagepipeline.memory.d(this.f51987a.i(), this.f51987a.f());
        }
        return this.f51991e;
    }

    public int e() {
        return this.f51987a.f().f52002g;
    }

    public com.facebook.imagepipeline.memory.f g() {
        if (this.f51992f == null) {
            try {
                this.f51992f = (com.facebook.imagepipeline.memory.f) NativeMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f51987a.i(), this.f51987a.g(), this.f51987a.h());
            } catch (ClassNotFoundException e10) {
                p8.a.n("PoolFactory", "", e10);
                this.f51992f = null;
            } catch (IllegalAccessException e11) {
                p8.a.n("PoolFactory", "", e11);
                this.f51992f = null;
            } catch (InstantiationException e12) {
                p8.a.n("PoolFactory", "", e12);
                this.f51992f = null;
            } catch (NoSuchMethodException e13) {
                p8.a.n("PoolFactory", "", e13);
                this.f51992f = null;
            } catch (InvocationTargetException e14) {
                p8.a.n("PoolFactory", "", e14);
                this.f51992f = null;
            }
        }
        return this.f51992f;
    }

    public r8.i h() {
        return i(!na.u.a() ? 1 : 0);
    }

    public r8.i i(int i10) {
        if (this.f51993g == null) {
            com.facebook.imagepipeline.memory.f f10 = f(i10);
            o8.j.h(f10, "failed to get pool for chunk type: " + i10);
            this.f51993g = new t(f10, j());
        }
        return this.f51993g;
    }

    public r8.l j() {
        if (this.f51994h == null) {
            this.f51994h = new r8.l(k());
        }
        return this.f51994h;
    }

    public r8.a k() {
        if (this.f51995i == null) {
            this.f51995i = new com.facebook.imagepipeline.memory.e(this.f51987a.i(), this.f51987a.j(), this.f51987a.k());
        }
        return this.f51995i;
    }
}
