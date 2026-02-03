package va;

import com.facebook.imagepipeline.memory.AshmemMemoryChunkPool;
import com.facebook.imagepipeline.memory.BufferMemoryChunkPool;
import com.facebook.imagepipeline.memory.NativeMemoryChunkPool;
import java.lang.reflect.InvocationTargetException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final w f51301a;

    /* renamed from: b  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f51302b;

    /* renamed from: c  reason: collision with root package name */
    private d f51303c;

    /* renamed from: d  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f51304d;

    /* renamed from: e  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.d f51305e;

    /* renamed from: f  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f51306f;

    /* renamed from: g  reason: collision with root package name */
    private r8.i f51307g;

    /* renamed from: h  reason: collision with root package name */
    private r8.l f51308h;

    /* renamed from: i  reason: collision with root package name */
    private r8.a f51309i;

    public y(w wVar) {
        this.f51301a = (w) o8.j.g(wVar);
    }

    private com.facebook.imagepipeline.memory.f a() {
        if (this.f51302b == null) {
            try {
                this.f51302b = (com.facebook.imagepipeline.memory.f) AshmemMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f51301a.i(), this.f51301a.g(), this.f51301a.h());
            } catch (ClassNotFoundException unused) {
                this.f51302b = null;
            } catch (IllegalAccessException unused2) {
                this.f51302b = null;
            } catch (InstantiationException unused3) {
                this.f51302b = null;
            } catch (NoSuchMethodException unused4) {
                this.f51302b = null;
            } catch (InvocationTargetException unused5) {
                this.f51302b = null;
            }
        }
        return this.f51302b;
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
        if (this.f51303c == null) {
            String e10 = this.f51301a.e();
            switch (e10.hashCode()) {
                case -1868884870:
                    if (e10.equals("legacy_default_params")) {
                        this.f51303c = new com.facebook.imagepipeline.memory.c(this.f51301a.i(), i.a(), this.f51301a.d(), this.f51301a.l());
                        break;
                    }
                    this.f51303c = new com.facebook.imagepipeline.memory.c(this.f51301a.i(), this.f51301a.c(), this.f51301a.d(), this.f51301a.l());
                    break;
                case -1106578487:
                    e10.equals("legacy");
                    this.f51303c = new com.facebook.imagepipeline.memory.c(this.f51301a.i(), this.f51301a.c(), this.f51301a.d(), this.f51301a.l());
                    break;
                case -404562712:
                    if (e10.equals("experimental")) {
                        int b10 = this.f51301a.b();
                        int a10 = this.f51301a.a();
                        u h10 = u.h();
                        if (this.f51301a.m()) {
                            dVar = this.f51301a.i();
                        } else {
                            dVar = null;
                        }
                        this.f51303c = new o(b10, a10, h10, dVar);
                        break;
                    }
                    this.f51303c = new com.facebook.imagepipeline.memory.c(this.f51301a.i(), this.f51301a.c(), this.f51301a.d(), this.f51301a.l());
                    break;
                case -402149703:
                    if (e10.equals("dummy_with_tracking")) {
                        this.f51303c = new n();
                        break;
                    }
                    this.f51303c = new com.facebook.imagepipeline.memory.c(this.f51301a.i(), this.f51301a.c(), this.f51301a.d(), this.f51301a.l());
                    break;
                case 95945896:
                    if (e10.equals("dummy")) {
                        this.f51303c = new m();
                        break;
                    }
                    this.f51303c = new com.facebook.imagepipeline.memory.c(this.f51301a.i(), this.f51301a.c(), this.f51301a.d(), this.f51301a.l());
                    break;
                default:
                    this.f51303c = new com.facebook.imagepipeline.memory.c(this.f51301a.i(), this.f51301a.c(), this.f51301a.d(), this.f51301a.l());
                    break;
            }
        }
        return this.f51303c;
    }

    public com.facebook.imagepipeline.memory.f c() {
        if (this.f51304d == null) {
            try {
                this.f51304d = (com.facebook.imagepipeline.memory.f) BufferMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f51301a.i(), this.f51301a.g(), this.f51301a.h());
            } catch (ClassNotFoundException unused) {
                this.f51304d = null;
            } catch (IllegalAccessException unused2) {
                this.f51304d = null;
            } catch (InstantiationException unused3) {
                this.f51304d = null;
            } catch (NoSuchMethodException unused4) {
                this.f51304d = null;
            } catch (InvocationTargetException unused5) {
                this.f51304d = null;
            }
        }
        return this.f51304d;
    }

    public com.facebook.imagepipeline.memory.d d() {
        if (this.f51305e == null) {
            this.f51305e = new com.facebook.imagepipeline.memory.d(this.f51301a.i(), this.f51301a.f());
        }
        return this.f51305e;
    }

    public int e() {
        return this.f51301a.f().f51316g;
    }

    public com.facebook.imagepipeline.memory.f g() {
        if (this.f51306f == null) {
            try {
                this.f51306f = (com.facebook.imagepipeline.memory.f) NativeMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f51301a.i(), this.f51301a.g(), this.f51301a.h());
            } catch (ClassNotFoundException e10) {
                p8.a.n("PoolFactory", "", e10);
                this.f51306f = null;
            } catch (IllegalAccessException e11) {
                p8.a.n("PoolFactory", "", e11);
                this.f51306f = null;
            } catch (InstantiationException e12) {
                p8.a.n("PoolFactory", "", e12);
                this.f51306f = null;
            } catch (NoSuchMethodException e13) {
                p8.a.n("PoolFactory", "", e13);
                this.f51306f = null;
            } catch (InvocationTargetException e14) {
                p8.a.n("PoolFactory", "", e14);
                this.f51306f = null;
            }
        }
        return this.f51306f;
    }

    public r8.i h() {
        return i(!na.u.a() ? 1 : 0);
    }

    public r8.i i(int i10) {
        if (this.f51307g == null) {
            com.facebook.imagepipeline.memory.f f10 = f(i10);
            o8.j.h(f10, "failed to get pool for chunk type: " + i10);
            this.f51307g = new t(f10, j());
        }
        return this.f51307g;
    }

    public r8.l j() {
        if (this.f51308h == null) {
            this.f51308h = new r8.l(k());
        }
        return this.f51308h;
    }

    public r8.a k() {
        if (this.f51309i == null) {
            this.f51309i = new com.facebook.imagepipeline.memory.e(this.f51301a.i(), this.f51301a.j(), this.f51301a.k());
        }
        return this.f51309i;
    }
}
