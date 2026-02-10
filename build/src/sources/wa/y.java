package wa;

import com.facebook.imagepipeline.memory.AshmemMemoryChunkPool;
import com.facebook.imagepipeline.memory.BufferMemoryChunkPool;
import com.facebook.imagepipeline.memory.NativeMemoryChunkPool;
import java.lang.reflect.InvocationTargetException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final w f52456a;

    /* renamed from: b  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f52457b;

    /* renamed from: c  reason: collision with root package name */
    private d f52458c;

    /* renamed from: d  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f52459d;

    /* renamed from: e  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.d f52460e;

    /* renamed from: f  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f52461f;

    /* renamed from: g  reason: collision with root package name */
    private s8.i f52462g;

    /* renamed from: h  reason: collision with root package name */
    private s8.l f52463h;

    /* renamed from: i  reason: collision with root package name */
    private s8.a f52464i;

    public y(w wVar) {
        this.f52456a = (w) p8.j.g(wVar);
    }

    private com.facebook.imagepipeline.memory.f a() {
        if (this.f52457b == null) {
            try {
                this.f52457b = (com.facebook.imagepipeline.memory.f) AshmemMemoryChunkPool.class.getConstructor(s8.d.class, z.class, a0.class).newInstance(this.f52456a.i(), this.f52456a.g(), this.f52456a.h());
            } catch (ClassNotFoundException unused) {
                this.f52457b = null;
            } catch (IllegalAccessException unused2) {
                this.f52457b = null;
            } catch (InstantiationException unused3) {
                this.f52457b = null;
            } catch (NoSuchMethodException unused4) {
                this.f52457b = null;
            } catch (InvocationTargetException unused5) {
                this.f52457b = null;
            }
        }
        return this.f52457b;
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
        if (this.f52458c == null) {
            String e10 = this.f52456a.e();
            switch (e10.hashCode()) {
                case -1868884870:
                    if (e10.equals("legacy_default_params")) {
                        this.f52458c = new com.facebook.imagepipeline.memory.c(this.f52456a.i(), i.a(), this.f52456a.d(), this.f52456a.l());
                        break;
                    }
                    this.f52458c = new com.facebook.imagepipeline.memory.c(this.f52456a.i(), this.f52456a.c(), this.f52456a.d(), this.f52456a.l());
                    break;
                case -1106578487:
                    e10.equals("legacy");
                    this.f52458c = new com.facebook.imagepipeline.memory.c(this.f52456a.i(), this.f52456a.c(), this.f52456a.d(), this.f52456a.l());
                    break;
                case -404562712:
                    if (e10.equals("experimental")) {
                        int b10 = this.f52456a.b();
                        int a10 = this.f52456a.a();
                        u h10 = u.h();
                        if (this.f52456a.m()) {
                            dVar = this.f52456a.i();
                        } else {
                            dVar = null;
                        }
                        this.f52458c = new o(b10, a10, h10, dVar);
                        break;
                    }
                    this.f52458c = new com.facebook.imagepipeline.memory.c(this.f52456a.i(), this.f52456a.c(), this.f52456a.d(), this.f52456a.l());
                    break;
                case -402149703:
                    if (e10.equals("dummy_with_tracking")) {
                        this.f52458c = new n();
                        break;
                    }
                    this.f52458c = new com.facebook.imagepipeline.memory.c(this.f52456a.i(), this.f52456a.c(), this.f52456a.d(), this.f52456a.l());
                    break;
                case 95945896:
                    if (e10.equals("dummy")) {
                        this.f52458c = new m();
                        break;
                    }
                    this.f52458c = new com.facebook.imagepipeline.memory.c(this.f52456a.i(), this.f52456a.c(), this.f52456a.d(), this.f52456a.l());
                    break;
                default:
                    this.f52458c = new com.facebook.imagepipeline.memory.c(this.f52456a.i(), this.f52456a.c(), this.f52456a.d(), this.f52456a.l());
                    break;
            }
        }
        return this.f52458c;
    }

    public com.facebook.imagepipeline.memory.f c() {
        if (this.f52459d == null) {
            try {
                this.f52459d = (com.facebook.imagepipeline.memory.f) BufferMemoryChunkPool.class.getConstructor(s8.d.class, z.class, a0.class).newInstance(this.f52456a.i(), this.f52456a.g(), this.f52456a.h());
            } catch (ClassNotFoundException unused) {
                this.f52459d = null;
            } catch (IllegalAccessException unused2) {
                this.f52459d = null;
            } catch (InstantiationException unused3) {
                this.f52459d = null;
            } catch (NoSuchMethodException unused4) {
                this.f52459d = null;
            } catch (InvocationTargetException unused5) {
                this.f52459d = null;
            }
        }
        return this.f52459d;
    }

    public com.facebook.imagepipeline.memory.d d() {
        if (this.f52460e == null) {
            this.f52460e = new com.facebook.imagepipeline.memory.d(this.f52456a.i(), this.f52456a.f());
        }
        return this.f52460e;
    }

    public int e() {
        return this.f52456a.f().f52471g;
    }

    public com.facebook.imagepipeline.memory.f g() {
        if (this.f52461f == null) {
            try {
                this.f52461f = (com.facebook.imagepipeline.memory.f) NativeMemoryChunkPool.class.getConstructor(s8.d.class, z.class, a0.class).newInstance(this.f52456a.i(), this.f52456a.g(), this.f52456a.h());
            } catch (ClassNotFoundException e10) {
                q8.a.n("PoolFactory", "", e10);
                this.f52461f = null;
            } catch (IllegalAccessException e11) {
                q8.a.n("PoolFactory", "", e11);
                this.f52461f = null;
            } catch (InstantiationException e12) {
                q8.a.n("PoolFactory", "", e12);
                this.f52461f = null;
            } catch (NoSuchMethodException e13) {
                q8.a.n("PoolFactory", "", e13);
                this.f52461f = null;
            } catch (InvocationTargetException e14) {
                q8.a.n("PoolFactory", "", e14);
                this.f52461f = null;
            }
        }
        return this.f52461f;
    }

    public s8.i h() {
        return i(!oa.u.a() ? 1 : 0);
    }

    public s8.i i(int i10) {
        if (this.f52462g == null) {
            com.facebook.imagepipeline.memory.f f10 = f(i10);
            p8.j.h(f10, "failed to get pool for chunk type: " + i10);
            this.f52462g = new t(f10, j());
        }
        return this.f52462g;
    }

    public s8.l j() {
        if (this.f52463h == null) {
            this.f52463h = new s8.l(k());
        }
        return this.f52463h;
    }

    public s8.a k() {
        if (this.f52464i == null) {
            this.f52464i = new com.facebook.imagepipeline.memory.e(this.f52456a.i(), this.f52456a.j(), this.f52456a.k());
        }
        return this.f52464i;
    }
}
