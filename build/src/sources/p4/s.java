package p4;

import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class s implements r {

    /* renamed from: a  reason: collision with root package name */
    private final r3.u f44878a;

    /* renamed from: b  reason: collision with root package name */
    private final r3.i f44879b;

    /* renamed from: c  reason: collision with root package name */
    private final r3.a0 f44880c;

    /* renamed from: d  reason: collision with root package name */
    private final r3.a0 f44881d;

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
        this.f44878a = uVar;
        this.f44879b = new a(uVar);
        this.f44880c = new b(uVar);
        this.f44881d = new c(uVar);
    }

    public static List c() {
        return Collections.EMPTY_LIST;
    }

    @Override // p4.r
    public void a(String str) {
        this.f44878a.d();
        x3.k b10 = this.f44880c.b();
        if (str == null) {
            b10.P1(1);
        } else {
            b10.h1(1, str);
        }
        this.f44878a.e();
        try {
            b10.R();
            this.f44878a.A();
        } finally {
            this.f44878a.i();
            this.f44880c.h(b10);
        }
    }

    @Override // p4.r
    public void b() {
        this.f44878a.d();
        x3.k b10 = this.f44881d.b();
        this.f44878a.e();
        try {
            b10.R();
            this.f44878a.A();
        } finally {
            this.f44878a.i();
            this.f44881d.h(b10);
        }
    }
}
