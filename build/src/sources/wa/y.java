package wa;

import com.facebook.imagepipeline.memory.AshmemMemoryChunkPool;
import com.facebook.imagepipeline.memory.BufferMemoryChunkPool;
import com.facebook.imagepipeline.memory.NativeMemoryChunkPool;
import java.lang.reflect.InvocationTargetException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final w f53427a;

    /* renamed from: b  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f53428b;

    /* renamed from: c  reason: collision with root package name */
    private d f53429c;

    /* renamed from: d  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f53430d;

    /* renamed from: e  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.d f53431e;

    /* renamed from: f  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f53432f;

    /* renamed from: g  reason: collision with root package name */
    private s8.i f53433g;

    /* renamed from: h  reason: collision with root package name */
    private s8.l f53434h;

    /* renamed from: i  reason: collision with root package name */
    private s8.a f53435i;

    public y(w wVar) {
        this.f53427a = (w) p8.j.g(wVar);
    }

    private com.facebook.imagepipeline.memory.f a() {
        if (this.f53428b == null) {
            try {
                this.f53428b = (com.facebook.imagepipeline.memory.f) AshmemMemoryChunkPool.class.getConstructor(s8.d.class, z.class, a0.class).newInstance(this.f53427a.i(), this.f53427a.g(), this.f53427a.h());
            } catch (ClassNotFoundException unused) {
                this.f53428b = null;
            } catch (IllegalAccessException unused2) {
                this.f53428b = null;
            } catch (InstantiationException unused3) {
                this.f53428b = null;
            } catch (NoSuchMethodException unused4) {
                this.f53428b = null;
            } catch (InvocationTargetException unused5) {
                this.f53428b = null;
            }
        }
        return this.f53428b;
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
        if (this.f53429c == null) {
            String e10 = this.f53427a.e();
            switch (e10.hashCode()) {
                case -1868884870:
                    if (e10.equals("legacy_default_params")) {
                        this.f53429c = new com.facebook.imagepipeline.memory.c(this.f53427a.i(), i.a(), this.f53427a.d(), this.f53427a.l());
                        break;
                    }
                    this.f53429c = new com.facebook.imagepipeline.memory.c(this.f53427a.i(), this.f53427a.c(), this.f53427a.d(), this.f53427a.l());
                    break;
                case -1106578487:
                    e10.equals("legacy");
                    this.f53429c = new com.facebook.imagepipeline.memory.c(this.f53427a.i(), this.f53427a.c(), this.f53427a.d(), this.f53427a.l());
                    break;
                case -404562712:
                    if (e10.equals("experimental")) {
                        int b10 = this.f53427a.b();
                        int a10 = this.f53427a.a();
                        u h10 = u.h();
                        if (this.f53427a.m()) {
                            dVar = this.f53427a.i();
                        } else {
                            dVar = null;
                        }
                        this.f53429c = new o(b10, a10, h10, dVar);
                        break;
                    }
                    this.f53429c = new com.facebook.imagepipeline.memory.c(this.f53427a.i(), this.f53427a.c(), this.f53427a.d(), this.f53427a.l());
                    break;
                case -402149703:
                    if (e10.equals("dummy_with_tracking")) {
                        this.f53429c = new n();
                        break;
                    }
                    this.f53429c = new com.facebook.imagepipeline.memory.c(this.f53427a.i(), this.f53427a.c(), this.f53427a.d(), this.f53427a.l());
                    break;
                case 95945896:
                    if (e10.equals("dummy")) {
                        this.f53429c = new m();
                        break;
                    }
                    this.f53429c = new com.facebook.imagepipeline.memory.c(this.f53427a.i(), this.f53427a.c(), this.f53427a.d(), this.f53427a.l());
                    break;
                default:
                    this.f53429c = new com.facebook.imagepipeline.memory.c(this.f53427a.i(), this.f53427a.c(), this.f53427a.d(), this.f53427a.l());
                    break;
            }
        }
        return this.f53429c;
    }

    public com.facebook.imagepipeline.memory.f c() {
        if (this.f53430d == null) {
            try {
                this.f53430d = (com.facebook.imagepipeline.memory.f) BufferMemoryChunkPool.class.getConstructor(s8.d.class, z.class, a0.class).newInstance(this.f53427a.i(), this.f53427a.g(), this.f53427a.h());
            } catch (ClassNotFoundException unused) {
                this.f53430d = null;
            } catch (IllegalAccessException unused2) {
                this.f53430d = null;
            } catch (InstantiationException unused3) {
                this.f53430d = null;
            } catch (NoSuchMethodException unused4) {
                this.f53430d = null;
            } catch (InvocationTargetException unused5) {
                this.f53430d = null;
            }
        }
        return this.f53430d;
    }

    public com.facebook.imagepipeline.memory.d d() {
        if (this.f53431e == null) {
            this.f53431e = new com.facebook.imagepipeline.memory.d(this.f53427a.i(), this.f53427a.f());
        }
        return this.f53431e;
    }

    public int e() {
        return this.f53427a.f().f53442g;
    }

    public com.facebook.imagepipeline.memory.f g() {
        if (this.f53432f == null) {
            try {
                this.f53432f = (com.facebook.imagepipeline.memory.f) NativeMemoryChunkPool.class.getConstructor(s8.d.class, z.class, a0.class).newInstance(this.f53427a.i(), this.f53427a.g(), this.f53427a.h());
            } catch (ClassNotFoundException e10) {
                q8.a.n("PoolFactory", "", e10);
                this.f53432f = null;
            } catch (IllegalAccessException e11) {
                q8.a.n("PoolFactory", "", e11);
                this.f53432f = null;
            } catch (InstantiationException e12) {
                q8.a.n("PoolFactory", "", e12);
                this.f53432f = null;
            } catch (NoSuchMethodException e13) {
                q8.a.n("PoolFactory", "", e13);
                this.f53432f = null;
            } catch (InvocationTargetException e14) {
                q8.a.n("PoolFactory", "", e14);
                this.f53432f = null;
            }
        }
        return this.f53432f;
    }

    public s8.i h() {
        return i(!oa.u.a() ? 1 : 0);
    }

    public s8.i i(int i10) {
        if (this.f53433g == null) {
            com.facebook.imagepipeline.memory.f f10 = f(i10);
            p8.j.h(f10, "failed to get pool for chunk type: " + i10);
            this.f53433g = new t(f10, j());
        }
        return this.f53433g;
    }

    public s8.l j() {
        if (this.f53434h == null) {
            this.f53434h = new s8.l(k());
        }
        return this.f53434h;
    }

    public s8.a k() {
        if (this.f53435i == null) {
            this.f53435i = new com.facebook.imagepipeline.memory.e(this.f53427a.i(), this.f53427a.j(), this.f53427a.k());
        }
        return this.f53435i;
    }
}
