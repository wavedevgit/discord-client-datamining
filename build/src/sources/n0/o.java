package n0;

import a0.a0;
import a0.c1;
import a0.p0;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import n0.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o extends c1 {

    /* renamed from: c  reason: collision with root package name */
    private final f.a f39027c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(a0 a0Var, f.a aVar) {
        super(a0Var);
        this.f39027c = aVar;
    }

    private int o(p0 p0Var) {
        Integer num = (Integer) p0Var.g().e(p0.f210j, 100);
        Objects.requireNonNull(num);
        return num.intValue();
    }

    private int p(p0 p0Var) {
        Integer num = (Integer) p0Var.g().e(p0.f209i, 0);
        Objects.requireNonNull(num);
        return num.intValue();
    }

    @Override // a0.c1, a0.a0
    public ListenableFuture c(final List list, int i10, int i11) {
        boolean z10 = true;
        if (list.size() != 1) {
            z10 = false;
        }
        b2.e.b(z10, "Only support one capture config.");
        final ListenableFuture i12 = i(i10, i11);
        return d0.n.k(Collections.singletonList(d0.d.b(i12).f(new d0.a() { // from class: n0.l
            @Override // d0.a
            public final ListenableFuture apply(Object obj) {
                ListenableFuture a10;
                z.k kVar = (z.k) obj;
                a10 = ((z.k) ListenableFuture.this.get()).a();
                return a10;
            }
        }, c0.a.a()).f(new d0.a() { // from class: n0.m
            @Override // d0.a
            public final ListenableFuture apply(Object obj) {
                ListenableFuture a10;
                Void r32 = (Void) obj;
                a10 = r0.f39027c.a(r0.o((p0) r1.get(0)), o.this.p((p0) list.get(0)));
                return a10;
            }
        }, c0.a.a()).f(new d0.a() { // from class: n0.n
            @Override // d0.a
            public final ListenableFuture apply(Object obj) {
                ListenableFuture b10;
                Void r22 = (Void) obj;
                b10 = ((z.k) ListenableFuture.this.get()).b();
                return b10;
            }
        }, c0.a.a())));
    }
}
