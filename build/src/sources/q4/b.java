package q4;

import androidx.work.impl.WorkDatabase;
import androidx.work.impl.p0;
import java.util.LinkedList;
import java.util.UUID;
import k4.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final androidx.work.impl.q f43914d = new androidx.work.impl.q();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends b {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ p0 f43915e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ UUID f43916i;

        a(p0 p0Var, UUID uuid) {
            this.f43915e = p0Var;
            this.f43916i = uuid;
        }

        @Override // q4.b
        void g() {
            WorkDatabase p10 = this.f43915e.p();
            p10.e();
            try {
                a(this.f43915e, this.f43916i.toString());
                p10.A();
                p10.i();
                f(this.f43915e);
            } catch (Throwable th2) {
                p10.i();
                throw th2;
            }
        }
    }

    /* renamed from: q4.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class C0602b extends b {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ p0 f43917e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ String f43918i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ boolean f43919o;

        C0602b(p0 p0Var, String str, boolean z10) {
            this.f43917e = p0Var;
            this.f43918i = str;
            this.f43919o = z10;
        }

        @Override // q4.b
        void g() {
            WorkDatabase p10 = this.f43917e.p();
            p10.e();
            try {
                for (String str : p10.H().g(this.f43918i)) {
                    a(this.f43917e, str);
                }
                p10.A();
                p10.i();
                if (this.f43919o) {
                    f(this.f43917e);
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
        return new C0602b(p0Var, str, z10);
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
        return this.f43914d;
    }

    void f(p0 p0Var) {
        androidx.work.impl.z.f(p0Var.i(), p0Var.p(), p0Var.n());
    }

    abstract void g();

    @Override // java.lang.Runnable
    public void run() {
        try {
            g();
            this.f43914d.a(k4.q.f31526a);
        } catch (Throwable th2) {
            this.f43914d.a(new q.b.a(th2));
        }
    }
}
