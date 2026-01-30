package va;

import com.facebook.imagepipeline.memory.AshmemMemoryChunkPool;
import com.facebook.imagepipeline.memory.BufferMemoryChunkPool;
import com.facebook.imagepipeline.memory.NativeMemoryChunkPool;
import java.lang.reflect.InvocationTargetException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class y {

    /* renamed from: a  reason: collision with root package name */
    private final w f50849a;

    /* renamed from: b  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f50850b;

    /* renamed from: c  reason: collision with root package name */
    private d f50851c;

    /* renamed from: d  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f50852d;

    /* renamed from: e  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.d f50853e;

    /* renamed from: f  reason: collision with root package name */
    private com.facebook.imagepipeline.memory.f f50854f;

    /* renamed from: g  reason: collision with root package name */
    private r8.i f50855g;

    /* renamed from: h  reason: collision with root package name */
    private r8.l f50856h;

    /* renamed from: i  reason: collision with root package name */
    private r8.a f50857i;

    public y(w wVar) {
        this.f50849a = (w) o8.j.g(wVar);
    }

    private com.facebook.imagepipeline.memory.f a() {
        if (this.f50850b == null) {
            try {
                this.f50850b = (com.facebook.imagepipeline.memory.f) AshmemMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f50849a.i(), this.f50849a.g(), this.f50849a.h());
            } catch (ClassNotFoundException unused) {
                this.f50850b = null;
            } catch (IllegalAccessException unused2) {
                this.f50850b = null;
            } catch (InstantiationException unused3) {
                this.f50850b = null;
            } catch (NoSuchMethodException unused4) {
                this.f50850b = null;
            } catch (InvocationTargetException unused5) {
                this.f50850b = null;
            }
        }
        return this.f50850b;
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
        if (this.f50851c == null) {
            String e10 = this.f50849a.e();
            switch (e10.hashCode()) {
                case -1868884870:
                    if (e10.equals("legacy_default_params")) {
                        this.f50851c = new com.facebook.imagepipeline.memory.c(this.f50849a.i(), i.a(), this.f50849a.d(), this.f50849a.l());
                        break;
                    }
                    this.f50851c = new com.facebook.imagepipeline.memory.c(this.f50849a.i(), this.f50849a.c(), this.f50849a.d(), this.f50849a.l());
                    break;
                case -1106578487:
                    e10.equals("legacy");
                    this.f50851c = new com.facebook.imagepipeline.memory.c(this.f50849a.i(), this.f50849a.c(), this.f50849a.d(), this.f50849a.l());
                    break;
                case -404562712:
                    if (e10.equals("experimental")) {
                        int b10 = this.f50849a.b();
                        int a10 = this.f50849a.a();
                        u h10 = u.h();
                        if (this.f50849a.m()) {
                            dVar = this.f50849a.i();
                        } else {
                            dVar = null;
                        }
                        this.f50851c = new o(b10, a10, h10, dVar);
                        break;
                    }
                    this.f50851c = new com.facebook.imagepipeline.memory.c(this.f50849a.i(), this.f50849a.c(), this.f50849a.d(), this.f50849a.l());
                    break;
                case -402149703:
                    if (e10.equals("dummy_with_tracking")) {
                        this.f50851c = new n();
                        break;
                    }
                    this.f50851c = new com.facebook.imagepipeline.memory.c(this.f50849a.i(), this.f50849a.c(), this.f50849a.d(), this.f50849a.l());
                    break;
                case 95945896:
                    if (e10.equals("dummy")) {
                        this.f50851c = new m();
                        break;
                    }
                    this.f50851c = new com.facebook.imagepipeline.memory.c(this.f50849a.i(), this.f50849a.c(), this.f50849a.d(), this.f50849a.l());
                    break;
                default:
                    this.f50851c = new com.facebook.imagepipeline.memory.c(this.f50849a.i(), this.f50849a.c(), this.f50849a.d(), this.f50849a.l());
                    break;
            }
        }
        return this.f50851c;
    }

    public com.facebook.imagepipeline.memory.f c() {
        if (this.f50852d == null) {
            try {
                this.f50852d = (com.facebook.imagepipeline.memory.f) BufferMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f50849a.i(), this.f50849a.g(), this.f50849a.h());
            } catch (ClassNotFoundException unused) {
                this.f50852d = null;
            } catch (IllegalAccessException unused2) {
                this.f50852d = null;
            } catch (InstantiationException unused3) {
                this.f50852d = null;
            } catch (NoSuchMethodException unused4) {
                this.f50852d = null;
            } catch (InvocationTargetException unused5) {
                this.f50852d = null;
            }
        }
        return this.f50852d;
    }

    public com.facebook.imagepipeline.memory.d d() {
        if (this.f50853e == null) {
            this.f50853e = new com.facebook.imagepipeline.memory.d(this.f50849a.i(), this.f50849a.f());
        }
        return this.f50853e;
    }

    public int e() {
        return this.f50849a.f().f50864g;
    }

    public com.facebook.imagepipeline.memory.f g() {
        if (this.f50854f == null) {
            try {
                this.f50854f = (com.facebook.imagepipeline.memory.f) NativeMemoryChunkPool.class.getConstructor(r8.d.class, z.class, a0.class).newInstance(this.f50849a.i(), this.f50849a.g(), this.f50849a.h());
            } catch (ClassNotFoundException e10) {
                p8.a.n("PoolFactory", "", e10);
                this.f50854f = null;
            } catch (IllegalAccessException e11) {
                p8.a.n("PoolFactory", "", e11);
                this.f50854f = null;
            } catch (InstantiationException e12) {
                p8.a.n("PoolFactory", "", e12);
                this.f50854f = null;
            } catch (NoSuchMethodException e13) {
                p8.a.n("PoolFactory", "", e13);
                this.f50854f = null;
            } catch (InvocationTargetException e14) {
                p8.a.n("PoolFactory", "", e14);
                this.f50854f = null;
            }
        }
        return this.f50854f;
    }

    public r8.i h() {
        return i(!na.u.a() ? 1 : 0);
    }

    public r8.i i(int i10) {
        if (this.f50855g == null) {
            com.facebook.imagepipeline.memory.f f10 = f(i10);
            o8.j.h(f10, "failed to get pool for chunk type: " + i10);
            this.f50855g = new t(f10, j());
        }
        return this.f50855g;
    }

    public r8.l j() {
        if (this.f50856h == null) {
            this.f50856h = new r8.l(k());
        }
        return this.f50856h;
    }

    public r8.a k() {
        if (this.f50857i == null) {
            this.f50857i = new com.facebook.imagepipeline.memory.e(this.f50849a.i(), this.f50849a.j(), this.f50849a.k());
        }
        return this.f50857i;
    }
}
