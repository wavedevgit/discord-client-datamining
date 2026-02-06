package va;

import com.facebook.imagepipeline.memory.AshmemMemoryChunkPool;
import com.facebook.imagepipeline.memory.BufferMemoryChunkPool;
import com.facebook.imagepipeline.memory.NativeMemoryChunkPool;
import java.lang.reflect.InvocationTargetException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final w f52352a;

    /* renamed from: b  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f52353b;

    /* renamed from: c  reason: collision with root package name */
    private d f52354c;

    /* renamed from: d  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f52355d;

    /* renamed from: e  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.d f52356e;

    /* renamed from: f  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f52357f;

    /* renamed from: g  reason: collision with root package name */
    private r8.i f52358g;

    /* renamed from: h  reason: collision with root package name */
    private r8.l f52359h;

    /* renamed from: i  reason: collision with root package name */
    private r8.a f52360i;

    public y(w wVar) {
        this.f52352a = (w) o8.j.g(wVar);
    }

    private com.facebook.imagepipeline.memory.f a() {
        if (this.f52353b == null) {
            try {
                this.f52353b = (com.facebook.imagepipeline.memory.f) AshmemMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f52352a.i(), this.f52352a.g(), this.f52352a.h());
            } catch (ClassNotFoundException unused) {
                this.f52353b = null;
            } catch (IllegalAccessException unused2) {
                this.f52353b = null;
            } catch (InstantiationException unused3) {
                this.f52353b = null;
            } catch (NoSuchMethodException unused4) {
                this.f52353b = null;
            } catch (InvocationTargetException unused5) {
                this.f52353b = null;
            }
        }
        return this.f52353b;
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
        if (this.f52354c == null) {
            String e10 = this.f52352a.e();
            switch (e10.hashCode()) {
                case -1868884870:
                    if (e10.equals("legacy_default_params")) {
                        this.f52354c = new com.facebook.imagepipeline.memory.c(this.f52352a.i(), i.a(), this.f52352a.d(), this.f52352a.l());
                        break;
                    }
                    this.f52354c = new com.facebook.imagepipeline.memory.c(this.f52352a.i(), this.f52352a.c(), this.f52352a.d(), this.f52352a.l());
                    break;
                case -1106578487:
                    e10.equals("legacy");
                    this.f52354c = new com.facebook.imagepipeline.memory.c(this.f52352a.i(), this.f52352a.c(), this.f52352a.d(), this.f52352a.l());
                    break;
                case -404562712:
                    if (e10.equals("experimental")) {
                        int b10 = this.f52352a.b();
                        int a10 = this.f52352a.a();
                        u h10 = u.h();
                        if (this.f52352a.m()) {
                            dVar = this.f52352a.i();
                        } else {
                            dVar = null;
                        }
                        this.f52354c = new o(b10, a10, h10, dVar);
                        break;
                    }
                    this.f52354c = new com.facebook.imagepipeline.memory.c(this.f52352a.i(), this.f52352a.c(), this.f52352a.d(), this.f52352a.l());
                    break;
                case -402149703:
                    if (e10.equals("dummy_with_tracking")) {
                        this.f52354c = new n();
                        break;
                    }
                    this.f52354c = new com.facebook.imagepipeline.memory.c(this.f52352a.i(), this.f52352a.c(), this.f52352a.d(), this.f52352a.l());
                    break;
                case 95945896:
                    if (e10.equals("dummy")) {
                        this.f52354c = new m();
                        break;
                    }
                    this.f52354c = new com.facebook.imagepipeline.memory.c(this.f52352a.i(), this.f52352a.c(), this.f52352a.d(), this.f52352a.l());
                    break;
                default:
                    this.f52354c = new com.facebook.imagepipeline.memory.c(this.f52352a.i(), this.f52352a.c(), this.f52352a.d(), this.f52352a.l());
                    break;
            }
        }
        return this.f52354c;
    }

    public com.facebook.imagepipeline.memory.f c() {
        if (this.f52355d == null) {
            try {
                this.f52355d = (com.facebook.imagepipeline.memory.f) BufferMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f52352a.i(), this.f52352a.g(), this.f52352a.h());
            } catch (ClassNotFoundException unused) {
                this.f52355d = null;
            } catch (IllegalAccessException unused2) {
                this.f52355d = null;
            } catch (InstantiationException unused3) {
                this.f52355d = null;
            } catch (NoSuchMethodException unused4) {
                this.f52355d = null;
            } catch (InvocationTargetException unused5) {
                this.f52355d = null;
            }
        }
        return this.f52355d;
    }

    public com.facebook.imagepipeline.memory.d d() {
        if (this.f52356e == null) {
            this.f52356e = new com.facebook.imagepipeline.memory.d(this.f52352a.i(), this.f52352a.f());
        }
        return this.f52356e;
    }

    public int e() {
        return this.f52352a.f().f52367g;
    }

    public com.facebook.imagepipeline.memory.f g() {
        if (this.f52357f == null) {
            try {
                this.f52357f = (com.facebook.imagepipeline.memory.f) NativeMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f52352a.i(), this.f52352a.g(), this.f52352a.h());
            } catch (ClassNotFoundException e10) {
                p8.a.n("PoolFactory", "", e10);
                this.f52357f = null;
            } catch (IllegalAccessException e11) {
                p8.a.n("PoolFactory", "", e11);
                this.f52357f = null;
            } catch (InstantiationException e12) {
                p8.a.n("PoolFactory", "", e12);
                this.f52357f = null;
            } catch (NoSuchMethodException e13) {
                p8.a.n("PoolFactory", "", e13);
                this.f52357f = null;
            } catch (InvocationTargetException e14) {
                p8.a.n("PoolFactory", "", e14);
                this.f52357f = null;
            }
        }
        return this.f52357f;
    }

    public r8.i h() {
        return i(!na.u.a() ? 1 : 0);
    }

    public r8.i i(int i10) {
        if (this.f52358g == null) {
            com.facebook.imagepipeline.memory.f f10 = f(i10);
            o8.j.h(f10, "failed to get pool for chunk type: " + i10);
            this.f52358g = new t(f10, j());
        }
        return this.f52358g;
    }

    public r8.l j() {
        if (this.f52359h == null) {
            this.f52359h = new r8.l(k());
        }
        return this.f52359h;
    }

    public r8.a k() {
        if (this.f52360i == null) {
            this.f52360i = new com.facebook.imagepipeline.memory.e(this.f52352a.i(), this.f52352a.j(), this.f52352a.k());
        }
        return this.f52360i;
    }
}
