package wa;

import com.facebook.imagepipeline.memory.AshmemMemoryChunkPool;
import com.facebook.imagepipeline.memory.BufferMemoryChunkPool;
import com.facebook.imagepipeline.memory.NativeMemoryChunkPool;
import java.lang.reflect.InvocationTargetException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final w f52457a;

    /* renamed from: b  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f52458b;

    /* renamed from: c  reason: collision with root package name */
    private d f52459c;

    /* renamed from: d  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f52460d;

    /* renamed from: e  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.d f52461e;

    /* renamed from: f  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f52462f;

    /* renamed from: g  reason: collision with root package name */
    private s8.i f52463g;

    /* renamed from: h  reason: collision with root package name */
    private s8.l f52464h;

    /* renamed from: i  reason: collision with root package name */
    private s8.a f52465i;

    public y(w wVar) {
        this.f52457a = (w) p8.j.g(wVar);
    }

    private com.facebook.imagepipeline.memory.f a() {
        if (this.f52458b == null) {
            try {
                this.f52458b = (com.facebook.imagepipeline.memory.f) AshmemMemoryChunkPool.class.getConstructor(s8.d.class, z.class, a0.class).newInstance(this.f52457a.i(), this.f52457a.g(), this.f52457a.h());
            } catch (ClassNotFoundException unused) {
                this.f52458b = null;
            } catch (IllegalAccessException unused2) {
                this.f52458b = null;
            } catch (InstantiationException unused3) {
                this.f52458b = null;
            } catch (NoSuchMethodException unused4) {
                this.f52458b = null;
            } catch (InvocationTargetException unused5) {
                this.f52458b = null;
            }
        }
        return this.f52458b;
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
        if (this.f52459c == null) {
            String e10 = this.f52457a.e();
            switch (e10.hashCode()) {
                case -1868884870:
                    if (e10.equals("legacy_default_params")) {
                        this.f52459c = new com.facebook.imagepipeline.memory.c(this.f52457a.i(), i.a(), this.f52457a.d(), this.f52457a.l());
                        break;
                    }
                    this.f52459c = new com.facebook.imagepipeline.memory.c(this.f52457a.i(), this.f52457a.c(), this.f52457a.d(), this.f52457a.l());
                    break;
                case -1106578487:
                    e10.equals("legacy");
                    this.f52459c = new com.facebook.imagepipeline.memory.c(this.f52457a.i(), this.f52457a.c(), this.f52457a.d(), this.f52457a.l());
                    break;
                case -404562712:
                    if (e10.equals("experimental")) {
                        int b10 = this.f52457a.b();
                        int a10 = this.f52457a.a();
                        u h10 = u.h();
                        if (this.f52457a.m()) {
                            dVar = this.f52457a.i();
                        } else {
                            dVar = null;
                        }
                        this.f52459c = new o(b10, a10, h10, dVar);
                        break;
                    }
                    this.f52459c = new com.facebook.imagepipeline.memory.c(this.f52457a.i(), this.f52457a.c(), this.f52457a.d(), this.f52457a.l());
                    break;
                case -402149703:
                    if (e10.equals("dummy_with_tracking")) {
                        this.f52459c = new n();
                        break;
                    }
                    this.f52459c = new com.facebook.imagepipeline.memory.c(this.f52457a.i(), this.f52457a.c(), this.f52457a.d(), this.f52457a.l());
                    break;
                case 95945896:
                    if (e10.equals("dummy")) {
                        this.f52459c = new m();
                        break;
                    }
                    this.f52459c = new com.facebook.imagepipeline.memory.c(this.f52457a.i(), this.f52457a.c(), this.f52457a.d(), this.f52457a.l());
                    break;
                default:
                    this.f52459c = new com.facebook.imagepipeline.memory.c(this.f52457a.i(), this.f52457a.c(), this.f52457a.d(), this.f52457a.l());
                    break;
            }
        }
        return this.f52459c;
    }

    public com.facebook.imagepipeline.memory.f c() {
        if (this.f52460d == null) {
            try {
                this.f52460d = (com.facebook.imagepipeline.memory.f) BufferMemoryChunkPool.class.getConstructor(s8.d.class, z.class, a0.class).newInstance(this.f52457a.i(), this.f52457a.g(), this.f52457a.h());
            } catch (ClassNotFoundException unused) {
                this.f52460d = null;
            } catch (IllegalAccessException unused2) {
                this.f52460d = null;
            } catch (InstantiationException unused3) {
                this.f52460d = null;
            } catch (NoSuchMethodException unused4) {
                this.f52460d = null;
            } catch (InvocationTargetException unused5) {
                this.f52460d = null;
            }
        }
        return this.f52460d;
    }

    public com.facebook.imagepipeline.memory.d d() {
        if (this.f52461e == null) {
            this.f52461e = new com.facebook.imagepipeline.memory.d(this.f52457a.i(), this.f52457a.f());
        }
        return this.f52461e;
    }

    public int e() {
        return this.f52457a.f().f52472g;
    }

    public com.facebook.imagepipeline.memory.f g() {
        if (this.f52462f == null) {
            try {
                this.f52462f = (com.facebook.imagepipeline.memory.f) NativeMemoryChunkPool.class.getConstructor(s8.d.class, z.class, a0.class).newInstance(this.f52457a.i(), this.f52457a.g(), this.f52457a.h());
            } catch (ClassNotFoundException e10) {
                q8.a.n("PoolFactory", "", e10);
                this.f52462f = null;
            } catch (IllegalAccessException e11) {
                q8.a.n("PoolFactory", "", e11);
                this.f52462f = null;
            } catch (InstantiationException e12) {
                q8.a.n("PoolFactory", "", e12);
                this.f52462f = null;
            } catch (NoSuchMethodException e13) {
                q8.a.n("PoolFactory", "", e13);
                this.f52462f = null;
            } catch (InvocationTargetException e14) {
                q8.a.n("PoolFactory", "", e14);
                this.f52462f = null;
            }
        }
        return this.f52462f;
    }

    public s8.i h() {
        return i(!oa.u.a() ? 1 : 0);
    }

    public s8.i i(int i10) {
        if (this.f52463g == null) {
            com.facebook.imagepipeline.memory.f f10 = f(i10);
            p8.j.h(f10, "failed to get pool for chunk type: " + i10);
            this.f52463g = new t(f10, j());
        }
        return this.f52463g;
    }

    public s8.l j() {
        if (this.f52464h == null) {
            this.f52464h = new s8.l(k());
        }
        return this.f52464h;
    }

    public s8.a k() {
        if (this.f52465i == null) {
            this.f52465i = new com.facebook.imagepipeline.memory.e(this.f52457a.i(), this.f52457a.j(), this.f52457a.k());
        }
        return this.f52465i;
    }
}
