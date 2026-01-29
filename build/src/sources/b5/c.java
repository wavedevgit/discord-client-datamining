package b5;

import b5.b;
import g5.h;
import g5.j;
import h5.i;
import java.util.List;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c implements b.a {

    /* renamed from: a  reason: collision with root package name */
    private final h f7238a;

    /* renamed from: b  reason: collision with root package name */
    private final List f7239b;

    /* renamed from: c  reason: collision with root package name */
    private final int f7240c;

    /* renamed from: d  reason: collision with root package name */
    private final h f7241d;

    /* renamed from: e  reason: collision with root package name */
    private final i f7242e;

    /* renamed from: f  reason: collision with root package name */
    private final v4.c f7243f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f7244g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends d {

        /* renamed from: d  reason: collision with root package name */
        Object f7245d;

        /* renamed from: e  reason: collision with root package name */
        Object f7246e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f7247i;

        /* renamed from: p  reason: collision with root package name */
        int f7249p;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f7247i = obj;
            this.f7249p |= Integer.MIN_VALUE;
            return c.this.g(null, this);
        }
    }

    public c(h hVar, List list, int i10, h hVar2, i iVar, v4.c cVar, boolean z10) {
        this.f7238a = hVar;
        this.f7239b = list;
        this.f7240c = i10;
        this.f7241d = hVar2;
        this.f7242e = iVar;
        this.f7243f = cVar;
        this.f7244g = z10;
    }

    private final void a(h hVar, b bVar) {
        if (hVar.l() == this.f7238a.l()) {
            if (hVar.m() != j.f25790a) {
                if (hVar.M() == this.f7238a.M()) {
                    if (hVar.z() == this.f7238a.z()) {
                        if (hVar.K() == this.f7238a.K()) {
                            return;
                        }
                        throw new IllegalStateException(("Interceptor '" + bVar + "' cannot modify the request's size resolver. Use `Interceptor.Chain.withSize` instead.").toString());
                    }
                    throw new IllegalStateException(("Interceptor '" + bVar + "' cannot modify the request's lifecycle.").toString());
                }
                throw new IllegalStateException(("Interceptor '" + bVar + "' cannot modify the request's target.").toString());
            }
            throw new IllegalStateException(("Interceptor '" + bVar + "' cannot set the request's data to null.").toString());
        }
        throw new IllegalStateException(("Interceptor '" + bVar + "' cannot modify the request's context.").toString());
    }

    private final c b(int i10, h hVar, i iVar) {
        return new c(this.f7238a, this.f7239b, i10, hVar, iVar, this.f7243f, this.f7244g);
    }

    static /* synthetic */ c d(c cVar, int i10, h hVar, i iVar, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = cVar.f7240c;
        }
        if ((i11 & 2) != 0) {
            hVar = cVar.c();
        }
        if ((i11 & 4) != 0) {
            iVar = cVar.getSize();
        }
        return cVar.b(i10, hVar, iVar);
    }

    @Override // b5.b.a
    public h c() {
        return this.f7241d;
    }

    public final v4.c e() {
        return this.f7243f;
    }

    public final boolean f() {
        return this.f7244g;
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x003a  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object g(g5.h r11, kotlin.coroutines.Continuation r12) {
        /*
            r10 = this;
            boolean r0 = r12 instanceof b5.c.a
            if (r0 == 0) goto L13
            r0 = r12
            b5.c$a r0 = (b5.c.a) r0
            int r1 = r0.f7249p
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f7249p = r1
            goto L18
        L13:
            b5.c$a r0 = new b5.c$a
            r0.<init>(r12)
        L18:
            java.lang.Object r12 = r0.f7247i
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f7249p
            r3 = 1
            if (r2 == 0) goto L3a
            if (r2 != r3) goto L32
            java.lang.Object r11 = r0.f7246e
            b5.b r11 = (b5.b) r11
            java.lang.Object r0 = r0.f7245d
            b5.c r0 = (b5.c) r0
            kotlin.c.b(r12)
            r4 = r10
            goto L75
        L32:
            java.lang.IllegalStateException r11 = new java.lang.IllegalStateException
            java.lang.String r12 = "call to 'resume' before 'invoke' with coroutine"
            r11.<init>(r12)
            throw r11
        L3a:
            kotlin.c.b(r12)
            int r12 = r10.f7240c
            if (r12 <= 0) goto L4d
            java.util.List r2 = r10.f7239b
            int r12 = r12 - r3
            java.lang.Object r12 = r2.get(r12)
            b5.b r12 = (b5.b) r12
            r10.a(r11, r12)
        L4d:
            java.util.List r12 = r10.f7239b
            int r2 = r10.f7240c
            java.lang.Object r12 = r12.get(r2)
            b5.b r12 = (b5.b) r12
            int r2 = r10.f7240c
            int r5 = r2 + 1
            r8 = 4
            r9 = 0
            r7 = 0
            r4 = r10
            r6 = r11
            b5.c r11 = d(r4, r5, r6, r7, r8, r9)
            r0.f7245d = r4
            r0.f7246e = r12
            r0.f7249p = r3
            java.lang.Object r11 = r12.a(r11, r0)
            if (r11 != r1) goto L71
            return r1
        L71:
            r0 = r12
            r12 = r11
            r11 = r0
            r0 = r4
        L75:
            g5.i r12 = (g5.i) r12
            g5.h r1 = r12.b()
            r0.a(r1, r11)
            return r12
        */
        throw new UnsupportedOperationException("Method not decompiled: b5.c.g(g5.h, kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // b5.b.a
    public i getSize() {
        return this.f7242e;
    }
}
