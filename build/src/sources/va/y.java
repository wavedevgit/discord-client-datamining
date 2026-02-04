package va;

import com.facebook.imagepipeline.memory.AshmemMemoryChunkPool;
import com.facebook.imagepipeline.memory.BufferMemoryChunkPool;
import com.facebook.imagepipeline.memory.NativeMemoryChunkPool;
import java.lang.reflect.InvocationTargetException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final w f51298a;

    /* renamed from: b  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f51299b;

    /* renamed from: c  reason: collision with root package name */
    private d f51300c;

    /* renamed from: d  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f51301d;

    /* renamed from: e  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.d f51302e;

    /* renamed from: f  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f51303f;

    /* renamed from: g  reason: collision with root package name */
    private r8.i f51304g;

    /* renamed from: h  reason: collision with root package name */
    private r8.l f51305h;

    /* renamed from: i  reason: collision with root package name */
    private r8.a f51306i;

    public y(w wVar) {
        this.f51298a = (w) o8.j.g(wVar);
    }

    private com.facebook.imagepipeline.memory.f a() {
        if (this.f51299b == null) {
            try {
                this.f51299b = (com.facebook.imagepipeline.memory.f) AshmemMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f51298a.i(), this.f51298a.g(), this.f51298a.h());
            } catch (ClassNotFoundException unused) {
                this.f51299b = null;
            } catch (IllegalAccessException unused2) {
                this.f51299b = null;
            } catch (InstantiationException unused3) {
                this.f51299b = null;
            } catch (NoSuchMethodException unused4) {
                this.f51299b = null;
            } catch (InvocationTargetException unused5) {
                this.f51299b = null;
            }
        }
        return this.f51299b;
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
        if (this.f51300c == null) {
            String e10 = this.f51298a.e();
            switch (e10.hashCode()) {
                case -1868884870:
                    if (e10.equals("legacy_default_params")) {
                        this.f51300c = new com.facebook.imagepipeline.memory.c(this.f51298a.i(), i.a(), this.f51298a.d(), this.f51298a.l());
                        break;
                    }
                    this.f51300c = new com.facebook.imagepipeline.memory.c(this.f51298a.i(), this.f51298a.c(), this.f51298a.d(), this.f51298a.l());
                    break;
                case -1106578487:
                    e10.equals("legacy");
                    this.f51300c = new com.facebook.imagepipeline.memory.c(this.f51298a.i(), this.f51298a.c(), this.f51298a.d(), this.f51298a.l());
                    break;
                case -404562712:
                    if (e10.equals("experimental")) {
                        int b10 = this.f51298a.b();
                        int a10 = this.f51298a.a();
                        u h10 = u.h();
                        if (this.f51298a.m()) {
                            dVar = this.f51298a.i();
                        } else {
                            dVar = null;
                        }
                        this.f51300c = new o(b10, a10, h10, dVar);
                        break;
                    }
                    this.f51300c = new com.facebook.imagepipeline.memory.c(this.f51298a.i(), this.f51298a.c(), this.f51298a.d(), this.f51298a.l());
                    break;
                case -402149703:
                    if (e10.equals("dummy_with_tracking")) {
                        this.f51300c = new n();
                        break;
                    }
                    this.f51300c = new com.facebook.imagepipeline.memory.c(this.f51298a.i(), this.f51298a.c(), this.f51298a.d(), this.f51298a.l());
                    break;
                case 95945896:
                    if (e10.equals("dummy")) {
                        this.f51300c = new m();
                        break;
                    }
                    this.f51300c = new com.facebook.imagepipeline.memory.c(this.f51298a.i(), this.f51298a.c(), this.f51298a.d(), this.f51298a.l());
                    break;
                default:
                    this.f51300c = new com.facebook.imagepipeline.memory.c(this.f51298a.i(), this.f51298a.c(), this.f51298a.d(), this.f51298a.l());
                    break;
            }
        }
        return this.f51300c;
    }

    public com.facebook.imagepipeline.memory.f c() {
        if (this.f51301d == null) {
            try {
                this.f51301d = (com.facebook.imagepipeline.memory.f) BufferMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f51298a.i(), this.f51298a.g(), this.f51298a.h());
            } catch (ClassNotFoundException unused) {
                this.f51301d = null;
            } catch (IllegalAccessException unused2) {
                this.f51301d = null;
            } catch (InstantiationException unused3) {
                this.f51301d = null;
            } catch (NoSuchMethodException unused4) {
                this.f51301d = null;
            } catch (InvocationTargetException unused5) {
                this.f51301d = null;
            }
        }
        return this.f51301d;
    }

    public com.facebook.imagepipeline.memory.d d() {
        if (this.f51302e == null) {
            this.f51302e = new com.facebook.imagepipeline.memory.d(this.f51298a.i(), this.f51298a.f());
        }
        return this.f51302e;
    }

    public int e() {
        return this.f51298a.f().f51313g;
    }

    public com.facebook.imagepipeline.memory.f g() {
        if (this.f51303f == null) {
            try {
                this.f51303f = (com.facebook.imagepipeline.memory.f) NativeMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f51298a.i(), this.f51298a.g(), this.f51298a.h());
            } catch (ClassNotFoundException e10) {
                p8.a.n("PoolFactory", "", e10);
                this.f51303f = null;
            } catch (IllegalAccessException e11) {
                p8.a.n("PoolFactory", "", e11);
                this.f51303f = null;
            } catch (InstantiationException e12) {
                p8.a.n("PoolFactory", "", e12);
                this.f51303f = null;
            } catch (NoSuchMethodException e13) {
                p8.a.n("PoolFactory", "", e13);
                this.f51303f = null;
            } catch (InvocationTargetException e14) {
                p8.a.n("PoolFactory", "", e14);
                this.f51303f = null;
            }
        }
        return this.f51303f;
    }

    public r8.i h() {
        return i(!na.u.a() ? 1 : 0);
    }

    public r8.i i(int i10) {
        if (this.f51304g == null) {
            com.facebook.imagepipeline.memory.f f10 = f(i10);
            o8.j.h(f10, "failed to get pool for chunk type: " + i10);
            this.f51304g = new t(f10, j());
        }
        return this.f51304g;
    }

    public r8.l j() {
        if (this.f51305h == null) {
            this.f51305h = new r8.l(k());
        }
        return this.f51305h;
    }

    public r8.a k() {
        if (this.f51306i == null) {
            this.f51306i = new com.facebook.imagepipeline.memory.e(this.f51298a.i(), this.f51298a.j(), this.f51298a.k());
        }
        return this.f51306i;
    }
}
