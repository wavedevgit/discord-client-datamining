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
    private final h f6289a;

    /* renamed from: b  reason: collision with root package name */
    private final List f6290b;

    /* renamed from: c  reason: collision with root package name */
    private final int f6291c;

    /* renamed from: d  reason: collision with root package name */
    private final h f6292d;

    /* renamed from: e  reason: collision with root package name */
    private final i f6293e;

    /* renamed from: f  reason: collision with root package name */
    private final v4.c f6294f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f6295g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends d {

        /* renamed from: d  reason: collision with root package name */
        Object f6296d;

        /* renamed from: e  reason: collision with root package name */
        Object f6297e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f6298i;

        /* renamed from: p  reason: collision with root package name */
        int f6300p;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f6298i = obj;
            this.f6300p |= Integer.MIN_VALUE;
            return c.this.g(null, this);
        }
    }

    public c(h hVar, List list, int i10, h hVar2, i iVar, v4.c cVar, boolean z10) {
        this.f6289a = hVar;
        this.f6290b = list;
        this.f6291c = i10;
        this.f6292d = hVar2;
        this.f6293e = iVar;
        this.f6294f = cVar;
        this.f6295g = z10;
    }

    private final void a(h hVar, b bVar) {
        if (hVar.l() == this.f6289a.l()) {
            if (hVar.m() != j.f25885a) {
                if (hVar.M() == this.f6289a.M()) {
                    if (hVar.z() == this.f6289a.z()) {
                        if (hVar.K() == this.f6289a.K()) {
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
        return new c(this.f6289a, this.f6290b, i10, hVar, iVar, this.f6294f, this.f6295g);
    }

    static /* synthetic */ c d(c cVar, int i10, h hVar, i iVar, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = cVar.f6291c;
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
        return this.f6292d;
    }

    public final v4.c e() {
        return this.f6294f;
    }

    public final boolean f() {
        return this.f6295g;
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
            int r1 = r0.f6300p
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f6300p = r1
            goto L18
        L13:
            b5.c$a r0 = new b5.c$a
            r0.<init>(r12)
        L18:
            java.lang.Object r12 = r0.f6298i
            java.lang.Object r1 = pr.b.f()
            int r2 = r0.f6300p
            r3 = 1
            if (r2 == 0) goto L3a
            if (r2 != r3) goto L32
            java.lang.Object r11 = r0.f6297e
            b5.b r11 = (b5.b) r11
            java.lang.Object r0 = r0.f6296d
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
            int r12 = r10.f6291c
            if (r12 <= 0) goto L4d
            java.util.List r2 = r10.f6290b
            int r12 = r12 - r3
            java.lang.Object r12 = r2.get(r12)
            b5.b r12 = (b5.b) r12
            r10.a(r11, r12)
        L4d:
            java.util.List r12 = r10.f6290b
            int r2 = r10.f6291c
            java.lang.Object r12 = r12.get(r2)
            b5.b r12 = (b5.b) r12
            int r2 = r10.f6291c
            int r5 = r2 + 1
            r8 = 4
            r9 = 0
            r7 = 0
            r4 = r10
            r6 = r11
            b5.c r11 = d(r4, r5, r6, r7, r8, r9)
            r0.f6296d = r4
            r0.f6297e = r12
            r0.f6300p = r3
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
        return this.f6293e;
    }
}
