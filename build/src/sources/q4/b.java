package q4;

import androidx.work.impl.WorkDatabase;
import androidx.work.impl.p0;
import java.util.LinkedList;
import java.util.UUID;
import k4.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final androidx.work.impl.q f47395d = new androidx.work.impl.q();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends b {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ p0 f47396e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ UUID f47397i;

        a(p0 p0Var, UUID uuid) {
            this.f47396e = p0Var;
            this.f47397i = uuid;
        }

        @Override // q4.b
        void g() {
            WorkDatabase p10 = this.f47396e.p();
            p10.e();
            try {
                a(this.f47396e, this.f47397i.toString());
                p10.A();
                p10.i();
                f(this.f47396e);
            } catch (Throwable th2) {
                p10.i();
                throw th2;
            }
        }
    }

    /* renamed from: q4.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class C0594b extends b {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ p0 f47398e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f47399i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ boolean f47400o;

        C0594b(p0 p0Var, String str, boolean z10) {
            this.f47398e = p0Var;
            this.f47399i = str;
            this.f47400o = z10;
        }

        @Override // q4.b
        void g() {
            WorkDatabase p10 = this.f47398e.p();
            p10.e();
            try {
                for (String str : p10.H().g(this.f47399i)) {
                    a(this.f47398e, str);
                }
                p10.A();
                p10.i();
                if (this.f47400o) {
                    f(this.f47398e);
                }
            } catch (Throwable th2) {
                p10.i();
                throw th2;
            }
        }
    }

    public static b b(UUID uuid, p0 p0Var) {
        return new a(p0Var, uuid);
    }

    public static b c(String str, p0 p0Var, boolean z10) {
        return new C0594b(p0Var, str, z10);
    }

    private void e(WorkDatabase workDatabase, String str) {
        p4.v H = workDatabase.H();
        p4.b C = workDatabase.C();
        LinkedList linkedList = new LinkedList();
        linkedList.add(str);
        while (!linkedList.isEmpty()) {
            String str2 = (String) linkedList.remove();
            k4.x h10 = H.h(str2);
            if (h10 != k4.x.SUCCEEDED && h10 != k4.x.FAILED) {
                H.j(str2);
            }
            linkedList.addAll(C.a(str2));
        }
    }

    void a(p0 p0Var, String str) {
        e(p0Var.p(), str);
        p0Var.m().q(str, 1);
        for (androidx.work.impl.w wVar : p0Var.n()) {
            wVar.c(str);
        }
    }

    public k4.q d() {
        return this.f47395d;
    }

    void f(p0 p0Var) {
        androidx.work.impl.z.f(p0Var.i(), p0Var.p(), p0Var.n());
    }

    abstract void g();

    @Override // java.lang.Runnable
    public void run() {
        try {
            g();
            this.f47395d.a(k4.q.f31608a);
        } catch (Throwable th2) {
            this.f47395d.a(new q.b.a(th2));
        }
    }
}
