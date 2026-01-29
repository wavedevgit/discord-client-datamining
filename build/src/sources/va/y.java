package va;

import com.facebook.imagepipeline.memory.AshmemMemoryChunkPool;
import com.facebook.imagepipeline.memory.BufferMemoryChunkPool;
import com.facebook.imagepipeline.memory.NativeMemoryChunkPool;
import java.lang.reflect.InvocationTargetException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final w f50833a;

    /* renamed from: b  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f50834b;

    /* renamed from: c  reason: collision with root package name */
    private d f50835c;

    /* renamed from: d  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f50836d;

    /* renamed from: e  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.d f50837e;

    /* renamed from: f  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f50838f;

    /* renamed from: g  reason: collision with root package name */
    private r8.i f50839g;

    /* renamed from: h  reason: collision with root package name */
    private r8.l f50840h;

    /* renamed from: i  reason: collision with root package name */
    private r8.a f50841i;

    public y(w wVar) {
        this.f50833a = (w) o8.j.g(wVar);
    }

    private com.facebook.imagepipeline.memory.f a() {
        if (this.f50834b == null) {
            try {
                this.f50834b = (com.facebook.imagepipeline.memory.f) AshmemMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f50833a.i(), this.f50833a.g(), this.f50833a.h());
            } catch (ClassNotFoundException unused) {
                this.f50834b = null;
            } catch (IllegalAccessException unused2) {
                this.f50834b = null;
            } catch (InstantiationException unused3) {
                this.f50834b = null;
            } catch (NoSuchMethodException unused4) {
                this.f50834b = null;
            } catch (InvocationTargetException unused5) {
                this.f50834b = null;
            }
        }
        return this.f50834b;
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
        if (this.f50835c == null) {
            String e10 = this.f50833a.e();
            switch (e10.hashCode()) {
                case -1868884870:
                    if (e10.equals("legacy_default_params")) {
                        this.f50835c = new com.facebook.imagepipeline.memory.c(this.f50833a.i(), i.a(), this.f50833a.d(), this.f50833a.l());
                        break;
                    }
                    this.f50835c = new com.facebook.imagepipeline.memory.c(this.f50833a.i(), this.f50833a.c(), this.f50833a.d(), this.f50833a.l());
                    break;
                case -1106578487:
                    e10.equals("legacy");
                    this.f50835c = new com.facebook.imagepipeline.memory.c(this.f50833a.i(), this.f50833a.c(), this.f50833a.d(), this.f50833a.l());
                    break;
                case -404562712:
                    if (e10.equals("experimental")) {
                        int b10 = this.f50833a.b();
                        int a10 = this.f50833a.a();
                        u h10 = u.h();
                        if (this.f50833a.m()) {
                            dVar = this.f50833a.i();
                        } else {
                            dVar = null;
                        }
                        this.f50835c = new o(b10, a10, h10, dVar);
                        break;
                    }
                    this.f50835c = new com.facebook.imagepipeline.memory.c(this.f50833a.i(), this.f50833a.c(), this.f50833a.d(), this.f50833a.l());
                    break;
                case -402149703:
                    if (e10.equals("dummy_with_tracking")) {
                        this.f50835c = new n();
                        break;
                    }
                    this.f50835c = new com.facebook.imagepipeline.memory.c(this.f50833a.i(), this.f50833a.c(), this.f50833a.d(), this.f50833a.l());
                    break;
                case 95945896:
                    if (e10.equals("dummy")) {
                        this.f50835c = new m();
                        break;
                    }
                    this.f50835c = new com.facebook.imagepipeline.memory.c(this.f50833a.i(), this.f50833a.c(), this.f50833a.d(), this.f50833a.l());
                    break;
                default:
                    this.f50835c = new com.facebook.imagepipeline.memory.c(this.f50833a.i(), this.f50833a.c(), this.f50833a.d(), this.f50833a.l());
                    break;
            }
        }
        return this.f50835c;
    }

    public com.facebook.imagepipeline.memory.f c() {
        if (this.f50836d == null) {
            try {
                this.f50836d = (com.facebook.imagepipeline.memory.f) BufferMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f50833a.i(), this.f50833a.g(), this.f50833a.h());
            } catch (ClassNotFoundException unused) {
                this.f50836d = null;
            } catch (IllegalAccessException unused2) {
                this.f50836d = null;
            } catch (InstantiationException unused3) {
                this.f50836d = null;
            } catch (NoSuchMethodException unused4) {
                this.f50836d = null;
            } catch (InvocationTargetException unused5) {
                this.f50836d = null;
            }
        }
        return this.f50836d;
    }

    public com.facebook.imagepipeline.memory.d d() {
        if (this.f50837e == null) {
            this.f50837e = new com.facebook.imagepipeline.memory.d(this.f50833a.i(), this.f50833a.f());
        }
        return this.f50837e;
    }

    public int e() {
        return this.f50833a.f().f50848g;
    }

    public com.facebook.imagepipeline.memory.f g() {
        if (this.f50838f == null) {
            try {
                this.f50838f = (com.facebook.imagepipeline.memory.f) NativeMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f50833a.i(), this.f50833a.g(), this.f50833a.h());
            } catch (ClassNotFoundException e10) {
                p8.a.n("PoolFactory", "", e10);
                this.f50838f = null;
            } catch (IllegalAccessException e11) {
                p8.a.n("PoolFactory", "", e11);
                this.f50838f = null;
            } catch (InstantiationException e12) {
                p8.a.n("PoolFactory", "", e12);
                this.f50838f = null;
            } catch (NoSuchMethodException e13) {
                p8.a.n("PoolFactory", "", e13);
                this.f50838f = null;
            } catch (InvocationTargetException e14) {
                p8.a.n("PoolFactory", "", e14);
                this.f50838f = null;
            }
        }
        return this.f50838f;
    }

    public r8.i h() {
        return i(!na.u.a() ? 1 : 0);
    }

    public r8.i i(int i10) {
        if (this.f50839g == null) {
            com.facebook.imagepipeline.memory.f f10 = f(i10);
            o8.j.h(f10, "failed to get pool for chunk type: " + i10);
            this.f50839g = new t(f10, j());
        }
        return this.f50839g;
    }

    public r8.l j() {
        if (this.f50840h == null) {
            this.f50840h = new r8.l(k());
        }
        return this.f50840h;
    }

    public r8.a k() {
        if (this.f50841i == null) {
            this.f50841i = new com.facebook.imagepipeline.memory.e(this.f50833a.i(), this.f50833a.j(), this.f50833a.k());
        }
        return this.f50841i;
    }
}
