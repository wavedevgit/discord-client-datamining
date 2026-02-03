package va;

import com.facebook.imagepipeline.memory.AshmemMemoryChunkPool;
import com.facebook.imagepipeline.memory.BufferMemoryChunkPool;
import com.facebook.imagepipeline.memory.NativeMemoryChunkPool;
import java.lang.reflect.InvocationTargetException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final w f50973a;

    /* renamed from: b  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f50974b;

    /* renamed from: c  reason: collision with root package name */
    private d f50975c;

    /* renamed from: d  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f50976d;

    /* renamed from: e  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.d f50977e;

    /* renamed from: f  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f50978f;

    /* renamed from: g  reason: collision with root package name */
    private r8.i f50979g;

    /* renamed from: h  reason: collision with root package name */
    private r8.l f50980h;

    /* renamed from: i  reason: collision with root package name */
    private r8.a f50981i;

    public y(w wVar) {
        this.f50973a = (w) o8.j.g(wVar);
    }

    private com.facebook.imagepipeline.memory.f a() {
        if (this.f50974b == null) {
            try {
                this.f50974b = (com.facebook.imagepipeline.memory.f) AshmemMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f50973a.i(), this.f50973a.g(), this.f50973a.h());
            } catch (ClassNotFoundException unused) {
                this.f50974b = null;
            } catch (IllegalAccessException unused2) {
                this.f50974b = null;
            } catch (InstantiationException unused3) {
                this.f50974b = null;
            } catch (NoSuchMethodException unused4) {
                this.f50974b = null;
            } catch (InvocationTargetException unused5) {
                this.f50974b = null;
            }
        }
        return this.f50974b;
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
        if (this.f50975c == null) {
            String e10 = this.f50973a.e();
            switch (e10.hashCode()) {
                case -1868884870:
                    if (e10.equals("legacy_default_params")) {
                        this.f50975c = new com.facebook.imagepipeline.memory.c(this.f50973a.i(), i.a(), this.f50973a.d(), this.f50973a.l());
                        break;
                    }
                    this.f50975c = new com.facebook.imagepipeline.memory.c(this.f50973a.i(), this.f50973a.c(), this.f50973a.d(), this.f50973a.l());
                    break;
                case -1106578487:
                    e10.equals("legacy");
                    this.f50975c = new com.facebook.imagepipeline.memory.c(this.f50973a.i(), this.f50973a.c(), this.f50973a.d(), this.f50973a.l());
                    break;
                case -404562712:
                    if (e10.equals("experimental")) {
                        int b10 = this.f50973a.b();
                        int a10 = this.f50973a.a();
                        u h10 = u.h();
                        if (this.f50973a.m()) {
                            dVar = this.f50973a.i();
                        } else {
                            dVar = null;
                        }
                        this.f50975c = new o(b10, a10, h10, dVar);
                        break;
                    }
                    this.f50975c = new com.facebook.imagepipeline.memory.c(this.f50973a.i(), this.f50973a.c(), this.f50973a.d(), this.f50973a.l());
                    break;
                case -402149703:
                    if (e10.equals("dummy_with_tracking")) {
                        this.f50975c = new n();
                        break;
                    }
                    this.f50975c = new com.facebook.imagepipeline.memory.c(this.f50973a.i(), this.f50973a.c(), this.f50973a.d(), this.f50973a.l());
                    break;
                case 95945896:
                    if (e10.equals("dummy")) {
                        this.f50975c = new m();
                        break;
                    }
                    this.f50975c = new com.facebook.imagepipeline.memory.c(this.f50973a.i(), this.f50973a.c(), this.f50973a.d(), this.f50973a.l());
                    break;
                default:
                    this.f50975c = new com.facebook.imagepipeline.memory.c(this.f50973a.i(), this.f50973a.c(), this.f50973a.d(), this.f50973a.l());
                    break;
            }
        }
        return this.f50975c;
    }

    public com.facebook.imagepipeline.memory.f c() {
        if (this.f50976d == null) {
            try {
                this.f50976d = (com.facebook.imagepipeline.memory.f) BufferMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f50973a.i(), this.f50973a.g(), this.f50973a.h());
            } catch (ClassNotFoundException unused) {
                this.f50976d = null;
            } catch (IllegalAccessException unused2) {
                this.f50976d = null;
            } catch (InstantiationException unused3) {
                this.f50976d = null;
            } catch (NoSuchMethodException unused4) {
                this.f50976d = null;
            } catch (InvocationTargetException unused5) {
                this.f50976d = null;
            }
        }
        return this.f50976d;
    }

    public com.facebook.imagepipeline.memory.d d() {
        if (this.f50977e == null) {
            this.f50977e = new com.facebook.imagepipeline.memory.d(this.f50973a.i(), this.f50973a.f());
        }
        return this.f50977e;
    }

    public int e() {
        return this.f50973a.f().f50988g;
    }

    public com.facebook.imagepipeline.memory.f g() {
        if (this.f50978f == null) {
            try {
                this.f50978f = (com.facebook.imagepipeline.memory.f) NativeMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f50973a.i(), this.f50973a.g(), this.f50973a.h());
            } catch (ClassNotFoundException e10) {
                p8.a.n("PoolFactory", "", e10);
                this.f50978f = null;
            } catch (IllegalAccessException e11) {
                p8.a.n("PoolFactory", "", e11);
                this.f50978f = null;
            } catch (InstantiationException e12) {
                p8.a.n("PoolFactory", "", e12);
                this.f50978f = null;
            } catch (NoSuchMethodException e13) {
                p8.a.n("PoolFactory", "", e13);
                this.f50978f = null;
            } catch (InvocationTargetException e14) {
                p8.a.n("PoolFactory", "", e14);
                this.f50978f = null;
            }
        }
        return this.f50978f;
    }

    public r8.i h() {
        return i(!na.u.a() ? 1 : 0);
    }

    public r8.i i(int i10) {
        if (this.f50979g == null) {
            com.facebook.imagepipeline.memory.f f10 = f(i10);
            o8.j.h(f10, "failed to get pool for chunk type: " + i10);
            this.f50979g = new t(f10, j());
        }
        return this.f50979g;
    }

    public r8.l j() {
        if (this.f50980h == null) {
            this.f50980h = new r8.l(k());
        }
        return this.f50980h;
    }

    public r8.a k() {
        if (this.f50981i == null) {
            this.f50981i = new com.facebook.imagepipeline.memory.e(this.f50973a.i(), this.f50973a.j(), this.f50973a.k());
        }
        return this.f50981i;
    }
}
