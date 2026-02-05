package w0;

import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class z extends y0.o implements y0.l {

    /* renamed from: e  reason: collision with root package name */
    private final a0 f52483e;

    /* renamed from: i  reason: collision with root package name */
    private a f52484i;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends y0.p {

        /* renamed from: c  reason: collision with root package name */
        private Object f52485c;

        public a(long j10, Object obj) {
            super(j10);
            this.f52485c = obj;
        }

        @Override // y0.p
        /* renamed from: f */
        public a a(long j10) {
            return new a(y0.k.e().d(), this.f52485c);
        }

        public final Object g() {
            return this.f52485c;
        }

        public final void h(Object obj) {
            this.f52485c = obj;
        }
    }

    public z(Object obj, a0 a0Var) {
        this.f52483e = a0Var;
        y0.e e10 = y0.k.e();
        a aVar = new a(e10.d(), obj);
        if (!(e10 instanceof y0.b)) {
            aVar.d(new a(y0.i.c(1), obj));
        }
        this.f52484i = aVar;
    }

    @Override // y0.n
    public y0.p b() {
        return this.f52484i;
    }

    @Override // y0.n
    public void c(y0.p pVar) {
        Intrinsics.checkNotNull(pVar, "null cannot be cast to non-null type androidx.compose.runtime.SnapshotMutableStateImpl.StateStateRecord<T of androidx.compose.runtime.SnapshotMutableStateImpl>");
        this.f52484i = (a) pVar;
    }

    public a0 d() {
        return this.f52483e;
    }

    @Override // w0.q, w0.g0
    public Object getValue() {
        return ((a) y0.k.m(this.f52484i, this)).g();
    }

    @Override // w0.q
    public void setValue(Object obj) {
        y0.e a10;
        a aVar = (a) y0.k.d(this.f52484i);
        if (!d().a(aVar.g(), obj)) {
            a aVar2 = this.f52484i;
            synchronized (y0.k.g()) {
                a10 = y0.e.f54290d.a();
                ((a) y0.k.j(aVar2, this, a10, aVar)).h(obj);
                Unit unit = Unit.f31988a;
            }
            y0.k.i(a10, this);
        }
    }

    public String toString() {
        return "MutableState(value=" + ((a) y0.k.d(this.f52484i)).g() + ")@" + hashCode();
    }
}
