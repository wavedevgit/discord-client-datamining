package p4;

import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class s implements r {

    /* renamed from: a  reason: collision with root package name */
    private final r3.u f43675a;

    /* renamed from: b  reason: collision with root package name */
    private final r3.i f43676b;

    /* renamed from: c  reason: collision with root package name */
    private final r3.a0 f43677c;

    /* renamed from: d  reason: collision with root package name */
    private final r3.a0 f43678d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends r3.i {
        a(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "INSERT OR REPLACE INTO `WorkProgress` (`work_spec_id`,`progress`) VALUES (?,?)";
        }

        @Override // r3.i
        public /* bridge */ /* synthetic */ void i(x3.k kVar, Object obj) {
            android.support.v4.media.session.b.a(obj);
            k(kVar, null);
        }

        public void k(x3.k kVar, q qVar) {
            throw null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends r3.a0 {
        b(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "DELETE from WorkProgress where work_spec_id=?";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c extends r3.a0 {
        c(r3.u uVar) {
            super(uVar);
        }

        @Override // r3.a0
        public String e() {
            return "DELETE FROM WorkProgress";
        }
    }

    public s(r3.u uVar) {
        this.f43675a = uVar;
        this.f43676b = new a(uVar);
        this.f43677c = new b(uVar);
        this.f43678d = new c(uVar);
    }

    public static List c() {
        return Collections.EMPTY_LIST;
    }

    @Override // p4.r
    public void a(String str) {
        this.f43675a.d();
        x3.k b10 = this.f43677c.b();
        if (str == null) {
            b10.O1(1);
        } else {
            b10.g1(1, str);
        }
        this.f43675a.e();
        try {
            b10.U();
            this.f43675a.A();
        } finally {
            this.f43675a.i();
            this.f43677c.h(b10);
        }
    }

    @Override // p4.r
    public void b() {
        this.f43675a.d();
        x3.k b10 = this.f43678d.b();
        this.f43675a.e();
        try {
            b10.U();
            this.f43675a.A();
        } finally {
            this.f43675a.i();
            this.f43678d.h(b10);
        }
    }
}
